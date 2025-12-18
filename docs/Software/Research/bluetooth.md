---
title: Android Bluetooth API
description: Research on Androids Bluetooth API functionality
sidebar_position: 1
---

# Android Bluetooth API

## Quick references
- [Android Developers: Bluetooth](https://developer.android.com/develop/connectivity/bluetooth)

## Setting up Bluetooth
(Add bluetooth requirement to app)

Always Needed: BluetoothAapter
```Kotlin
val bluetoothManager: BluetoothManager = getSystemService(BluetoothManager::class.java)
val bluetoothAdapter: BluetoothAdapter? = bluetoothManager.getAdapter()
if (bluetoothAdapter == null) {
  // Device doesn't support Bluetooth
}
```

Requesting user to turn on Bluetooth
```Kotlin
if (bluetoothAdapter?.isEnabled == false) {
  val enableBtIntent = Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE)
  startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT)
}
```

onActivityResult() callback returns `RESULT_OK` or `RESULT_CANCELED` 

Monitor `ACTION_STATE_CHANGED` system broadcast for bluetooth status changes

## Device discovery

From Android 8 (API 26) on: consider [Companion Device Manager API](https://developer.android.com/develop/connectivity/bluetooth/companion-device-pairing)
-> Android 12 (API 31): [companion device profiles](https://source.android.com/docs/core/connect/companion-device-profile)

Checking for paired devices:
```Kotlin
val pairedDevices: Set<BluetoothDevice>? = bluetoothAdapter?.bondedDevices
pairedDevices?.forEach { device ->
   val deviceName = device.name
   val deviceHardwareAddress = device.address // MAC address
}
```

Further info on discovery: https://developer.android.com/develop/connectivity/bluetooth/find-bluetooth-devices

## Connecting (classic)
Server/Client Architecture, see documentation

use cancel() for terminating connection

## Data Transfer (classic)
`BluetoothSocket` provides `InputStream` and `OutputStream`, these can be read and written from/to

Both methods are blocking, consider a separate thread.

## Profiles (classic)
- Headset
- A2DP (Audio)
- Health Device

## Permissions
Android 12+ (API 31):
- `BLUETOOTH_SCAN`: searching for devices
- `BLUETOOTH_ADVERTISE`: make discoverable
- `BLUETOOTH_CONNECT`: connect to paired devices
- `ACCESS_FINE_LOCATION`: determine physical location from scan
	- IF NOT USED: set `android:maxSdkVersion` to 30 for `ACCESS_FINE_LOCATION`

older Android:
- `BLUETOOTH`: any classic or BLE communication
- `ACCESS_FINE_LOCATION`: always necessary (on Android 8, ConpanionDeviceManager won't need this)

Initiate discoverability/manipulate settings: `BLUETOOTH_ADMIN`

Flag that Bluetooth is needed:
```
<uses-feature android:name="android.hardware.bluetooth" android:required="true"/>
```
or
```
<uses-feature android:name="android.hardware.bluetooth_le" android:required="true"/>
```

## BLE
Use-cases:
- for use with small amounts of data
- proximity sensors

Communication data is avaliable to ALL APPS!

1. Find BLE device
2. connect to GATT server
3. transfer data

### Generic Attribute Profile (GATT)
Sending and receiving general data ("attributes"), everything is based on this

### Profiles
Devices can implement multiple
List of profiles: https://www.bluetooth.org/en-us/specification/adopted-specifications

### Attribute Protocol (ATT)
GATT is built on ATT
Each Attribute has unique 128-bit identifier (UUID)
attributed are formatted as characteristics and services

#### Characteristic
single value and descriptors that describe value
== type

#### Descriptor
Human radable description, acceptable range, measuremnt unit

#### Service
Collection of characteristics

### Roles
Central/Peripheral:
- Applies to connection
- Central role: scans
- Peripheral: advertises

GATT Server/Client:
- Applies to Communication
- Client: Sends requests for data
- Server: Fulfills data

### Finding devices
`startScan(callback)`
callback Function: `ScanCallback` used to return results
Scanning is battery intensive, stop scanning as soon as possible

`startScan` supports filters

### Connecting GATT server
call `connectGatt()` on device

Parameters:
- Context (use `this`)
- autoConnect: boolean
- BluetoothGattCallback

Callback delivers results to Client (Android app) and further operations

Bound service??