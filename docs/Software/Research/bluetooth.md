---
title: Android Bluetooth Development
description: Quick reference for bluetooth development on android
hide_table_of_contents: false
sidebar_position: 1
---

# Android Bluetooth Development

## Quick References

* [Android Developers: Bluetooth Overview](https://developer.android.com/develop/connectivity/bluetooth)
* [BLE Overview](https://developer.android.com/develop/connectivity/bluetooth/ble/ble-overview)

---

## 1. Permissions (Manifest & Runtime)

**Crucial:** Check permissions at runtime before calling Bluetooth APIs.

### Android 12 (API 31) and higher

Split permissions strictly by intent.

* **`android.permission.BLUETOOTH_SCAN`**: Discovering devices.
* *Optimization:* If **not** using scan for physical location, add `android:usesPermissionFlags="neverForLocation"` to skip Location permission requirements.


* **`android.permission.BLUETOOTH_CONNECT`**: Connecting to paired devices and communicating.
* **`android.permission.BLUETOOTH_ADVERTISE`**: Broadcasting as a peripheral.
* **`android.permission.ACCESS_FINE_LOCATION`**:
* **Required only if** you need physical location derivation or if the `neverForLocation` flag is omitted.



### Android 11 (API 30) and lower

Legacy permissions.

* **`android.permission.BLUETOOTH`**: Communication.
* **`android.permission.BLUETOOTH_ADMIN`**: Discovery and settings manipulation.
* **`android.permission.ACCESS_FINE_LOCATION`**: **Mandatory** for discovery (scanning).

### Manifest Declaration

```xml
<uses-feature android:name="android.hardware.bluetooth" android:required="true"/>
<uses-feature android:name="android.hardware.bluetooth_le" android:required="true"/>

```

---

## 2. Setup & Initialization

**Get the Adapter:**

```kotlin
val bluetoothManager: BluetoothManager = getSystemService(BluetoothManager::class.java)
val bluetoothAdapter: BluetoothAdapter? = bluetoothManager.adapter
if (bluetoothAdapter == null) {
    // Device does not support Bluetooth
}

```

**Enable Bluetooth (Modern Approach):**
Avoid `startActivityForResult`. Use `ActivityResultContracts`.

```kotlin
private val enableBluetoothLauncher = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
) { result ->
    if (result.resultCode == Activity.RESULT_OK) {
        // Bluetooth enabled
    }
}

// Usage
if (bluetoothAdapter?.isEnabled == false) {
    val enableBtIntent = Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE)
    enableBluetoothLauncher.launch(enableBtIntent)
}

```

**State Monitoring:**
Register a `BroadcastReceiver` for `BluetoothAdapter.ACTION_STATE_CHANGED`.

---

## 3. Device Discovery

### Companion Device Manager (Recommended)

* **Android 8.0 (API 26)+**: [Companion Device Manager](https://developer.android.com/develop/connectivity/bluetooth/companion-device-pairing).
* **Why:** Eliminates need for `ACCESS_FINE_LOCATION` in many cases; better UX for pairing specific hardware.

### Manual Discovery (Classic)

* **Action:** `bluetoothAdapter?.startDiscovery()`
* **Process:** Asynchronous. Heavy battery usage.
* **Retrieving Paired Devices:**
```kotlin
// Requires BLUETOOTH_CONNECT permission on Android 12 (API 31)+
val pairedDevices: Set<BluetoothDevice>? = bluetoothAdapter?.bondedDevices
pairedDevices?.forEach { device ->
    val name = device.name
    val mac = device.address
}

```


* **Receiver:** Register for `BluetoothDevice.ACTION_FOUND` to handle scan results.

---

## 4. Connecting & Data (Classic)

* **Architecture:** Client/Server via RFCOMM sockets.
* **UUID:** Use standard UUIDs (e.g., SPP: `00001101-0000-1000-8000-00805F9B34FB`) or generate unique ones for custom apps.
* **Key Class:** `BluetoothSocket`.
* **Blocking Calls:** `socket.connect()`, `inputStream.read()`, `outputStream.write()` are **blocking**.
* *Refinement:* Always run these in `Dispatchers.IO` (Coroutines) or a background thread.


* **Cleanup:** Always call `socket.close()` when done or on error.

---

## 5. Bluetooth Low Energy (BLE)

### Key Concepts

* **GATT (Generic Attribute Profile):** Hierarchy of data exchange.
* **ATT (Attribute Protocol):** Transport layer.
* **Roles:**
* **Central:** Scans and initiates connection (Phone).
* **Peripheral:** Advertises presence (Sensor/Watch).


* **Structure:** Profile -> Service -> Characteristic (Data) -> Descriptor (Metadata).

### 1. Scanning (Modern)

Use `BluetoothLeScanner`, not the adapter directly.

```kotlin
val scanner = bluetoothAdapter.bluetoothLeScanner
val scanCallback = object : ScanCallback() {
    override fun onScanResult(callbackType: Int, result: ScanResult) {
        super.onScanResult(callbackType, result)
        // Access device: result.device
    }
}

// Start Scan (Requires BLUETOOTH_SCAN + Location permissions depending on config)
scanner.startScan(scanCallback)

```

* **Tip:** Use `ScanSettings` to balance latency/power (e.g., `SCAN_MODE_LOW_LATENCY`).
* **Limit:** Stop scanning immediately after finding the device to save battery.

### 2. Connecting (GATT)

```kotlin
// context, autoConnect, callback
val gatt = device.connectGatt(context, false, gattCallback)

```

* **`autoConnect = true`**: Better for background reconnection; does not time out.
* **`autoConnect = false`**: Better for immediate connection attempts; has a timeout.

### 3. Transferring Data

All operations happen inside `BluetoothGattCallback`.

* **Service Discovery:** Must call `gatt.discoverServices()` after connection state becomes `STATE_CONNECTED`.
* **Reading/Writing:**
```kotlin
// Reading
gatt.readCharacteristic(characteristic)

// Writing: Android 13 (API 33) introduced a new signature
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
    gatt.writeCharacteristic(characteristic, value, BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT)
} else {
    characteristic.value = value // Deprecated but needed for older versions
    gatt.writeCharacteristic(characteristic)
}

```


* **Notifications:**
1. Enable locally: `gatt.setCharacteristicNotification(characteristic, true)`
2. Write to Descriptor: You must write `ENABLE_NOTIFICATION_VALUE` to the Client Characteristic Configuration Descriptor (CCCD) UUID (`0x2902`).



### 4. Important BLE Constraints

* **Serial Execution:** GATT operations are serial. You cannot issue a `write` before the previous `write` or `read` callback has finished. Use a **Queue** mechanism.
* **MTU Size:** Default is 23 bytes (20 bytes payload). Request higher MTU (`gatt.requestMtu(512)`) for larger chunks.
