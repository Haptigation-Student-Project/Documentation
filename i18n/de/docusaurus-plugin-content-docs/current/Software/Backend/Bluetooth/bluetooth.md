---
title: Android Bluetooth Entwicklung
description: Kurzreferenz für Bluetooth-Entwicklung auf Android
hide_table_of_contents: false
sidebar_position: 1
---

# Android Bluetooth Entwicklung

## Schnellreferenzen

* [Android Developers: Bluetooth Overview](https://developer.android.com/develop/connectivity/bluetooth)
* [BLE Overview](https://developer.android.com/develop/connectivity/bluetooth/ble/ble-overview)

---

## 1. Berechtigungen (Manifest & Runtime)

**Wichtig:** Überprüfen Sie Berechtigungen zur Laufzeit, bevor Sie Bluetooth-APIs aufrufen.

### Android 12 (API 31) und höher

Berechtigungen sind streng nach Verwendungszweck aufgeteilt.

* **`android.permission.BLUETOOTH_SCAN`**: Geräte entdecken.
* *Optimierung:* Wenn **nicht** für physische Standortbestimmung verwendet, fügen Sie `android:usesPermissionFlags="neverForLocation"` hinzu, um Standortberechtigungsanforderungen zu überspringen.


* **`android.permission.BLUETOOTH_CONNECT`**: Mit gekoppelten Geräten verbinden und kommunizieren.
* **`android.permission.BLUETOOTH_ADVERTISE`**: Als Peripheriegerät senden.
* **`android.permission.ACCESS_FINE_LOCATION`**:
* **Nur erforderlich, wenn** Sie physische Standortbestimmung benötigen oder wenn das `neverForLocation`-Flag weggelassen wird.



### Android 11 (API 30) und niedriger

Legacy-Berechtigungen.

* **`android.permission.BLUETOOTH`**: Kommunikation.
* **`android.permission.BLUETOOTH_ADMIN`**: Erkennung und Einstellungsmanipulation.
* **`android.permission.ACCESS_FINE_LOCATION`**: **Obligatorisch** für Erkennung (Scannen).

### Manifest-Deklaration

```xml
<uses-feature android:name="android.hardware.bluetooth" android:required="true"/>
<uses-feature android:name="android.hardware.bluetooth_le" android:required="true"/>

```

---

## 2. Setup & Initialisierung

**Adapter abrufen:**

```kotlin
val bluetoothManager: BluetoothManager = getSystemService(BluetoothManager::class.java)
val bluetoothAdapter: BluetoothAdapter? = bluetoothManager.adapter
if (bluetoothAdapter == null) {
    // Gerät unterstützt kein Bluetooth
}

```

**Bluetooth aktivieren (Moderner Ansatz):**
Vermeiden Sie `startActivityForResult`. Verwenden Sie `ActivityResultContracts`.

```kotlin
private val enableBluetoothLauncher = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
) { result ->
    if (result.resultCode == Activity.RESULT_OK) {
        // Bluetooth aktiviert
    }
}

// Verwendung
if (bluetoothAdapter?.isEnabled == false) {
    val enableBtIntent = Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE)
    enableBluetoothLauncher.launch(enableBtIntent)
}

```

**Statusüberwachung:**
Registrieren Sie einen `BroadcastReceiver` für `BluetoothAdapter.ACTION_STATE_CHANGED`.

---

## 3. Geräteerkennung

### Companion Device Manager (Empfohlen)

* **Android 8.0 (API 26)+**: [Companion Device Manager](https://developer.android.com/develop/connectivity/bluetooth/companion-device-pairing).
* **Warum:** Keine `ACCESS_FINE_LOCATION` in vielen Fällen erforderlich; bessere UX für das Koppeln spezifischer Hardware.

### Manuelle Erkennung (Classic)

* **Aktion:** `bluetoothAdapter?.startDiscovery()`
* **Prozess:** Asynchron. Hoher Batterieverbrauch.
* **Gekoppelte Geräte abrufen:**
```kotlin
// Erfordert BLUETOOTH_CONNECT-Berechtigung auf Android 12 (API 31)+
val pairedDevices: Set<BluetoothDevice>? = bluetoothAdapter?.bondedDevices
pairedDevices?.forEach { device ->
    val name = device.name
    val mac = device.address
}

```


* **Receiver:** Registrieren Sie sich für `BluetoothDevice.ACTION_FOUND`, um Scan-Ergebnisse zu verarbeiten.

---

## 4. Verbinden & Daten (Classic)

* **Architektur:** Client/Server über RFCOMM-Sockets.
* **UUID:** Verwenden Sie Standard-UUIDs (z.B. SPP: `00001101-0000-1000-8000-00805F9B34FB`) oder generieren Sie eindeutige für benutzerdefinierte Apps.
* **Hauptklasse:** `BluetoothSocket`.
* **Blockierende Aufrufe:** `socket.connect()`, `inputStream.read()`, `outputStream.write()` sind **blockierend**.
* *Verfeinerung:* Führen Sie diese immer in `Dispatchers.IO` (Coroutines) oder einem Hintergrund-Thread aus.


* **Aufräumen:** Rufen Sie immer `socket.close()` auf, wenn fertig oder bei Fehler.

---

## 5. Bluetooth Low Energy (BLE)

### Kernkonzepte

* **GATT (Generic Attribute Profile):** Hierarchie des Datenaustauschs.
* **ATT (Attribute Protocol):** Transportschicht.
* **Rollen:**
* **Central:** Scannt und initiiert Verbindung (Telefon).
* **Peripheral:** Kündigt Anwesenheit an (Sensor/Uhr).


* **Struktur:** Profil -> Service -> Characteristic (Daten) -> Descriptor (Metadaten).

### 1. Scannen (Modern)

Verwenden Sie `BluetoothLeScanner`, nicht direkt den Adapter.

```kotlin
val scanner = bluetoothAdapter.bluetoothLeScanner
val scanCallback = object : ScanCallback() {
    override fun onScanResult(callbackType: Int, result: ScanResult) {
        super.onScanResult(callbackType, result)
        // Zugriff auf Gerät: result.device
    }
}

// Scan starten (Erfordert BLUETOOTH_SCAN + Standortberechtigungen abhängig von der Konfiguration)
scanner.startScan(scanCallback)

```

* **Tipp:** Verwenden Sie `ScanSettings`, um Latenz/Leistung auszubalancieren (z.B. `SCAN_MODE_LOW_LATENCY`).
* **Limit:** Stoppen Sie das Scannen sofort nach dem Finden des Geräts, um Batterie zu sparen.

### 2. Verbinden (GATT)

```kotlin
// Kontext, autoConnect, Callback
val gatt = device.connectGatt(context, false, gattCallback)

```

* **`autoConnect = true`**: Besser für Hintergrund-Wiederverbindung; läuft nicht ab.
* **`autoConnect = false`**: Besser für sofortige Verbindungsversuche; hat ein Timeout.

### 3. Datenübertragung

Alle Operationen finden innerhalb von `BluetoothGattCallback` statt.

* **Service-Erkennung:** Muss `gatt.discoverServices()` aufrufen, nachdem der Verbindungsstatus `STATE_CONNECTED` wird.
* **Lesen/Schreiben:**
```kotlin
// Lesen
gatt.readCharacteristic(characteristic)

// Schreiben: Android 13 (API 33) führte eine neue Signatur ein
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
    gatt.writeCharacteristic(characteristic, value, BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT)
} else {
    characteristic.value = value // Veraltet, aber für ältere Versionen benötigt
    gatt.writeCharacteristic(characteristic)
}

```


* **Benachrichtigungen:**
1. Lokal aktivieren: `gatt.setCharacteristicNotification(characteristic, true)`
2. In Descriptor schreiben: Sie müssen `ENABLE_NOTIFICATION_VALUE` in den Client Characteristic Configuration Descriptor (CCCD) UUID (`0x2902`) schreiben.



### 4. Wichtige BLE-Einschränkungen

* **Serielle Ausführung:** GATT-Operationen sind seriell. Sie können kein `write` ausgeben, bevor der vorherige `write`- oder `read`-Callback abgeschlossen ist. Verwenden Sie einen **Queue**-Mechanismus.
* **MTU-Größe:** Standard sind 23 Bytes (20 Bytes Payload). Fordern Sie höhere MTU an (`gatt.requestMtu(512)`) für größere Chunks.
