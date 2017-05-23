//TODO: advertise beacon!
//TODO: NEARBY NOTIF PLUGIN.
import { BehaviorSubject } from 'rxjs';
import { BeaconClass } from "./beacon-device.class";
let self;
export default class dkbeaconEddystoneService {
    //CONSTRUCTOR CALL ===================================================================
    constructor(webDebug) {
        self = this;
        self._webDebug = webDebug;
        self._isScanning = false;
        self._eddyBeaconsObj = {};
        self._eddyBeaconsSubject = new BehaviorSubject([]);
        self._eddyScanStatusSubject = new BehaviorSubject(false);
        if (self._webDebug === false) {
            document.addEventListener("deviceready", self.onDeviceReady, false);
        }
        if (self._webDebug === true) {
            self.simulateEddystoneBeacons();
        }
    }
    //SERVICE API CALLS =================================================================
    getEddyBeacons() {
        return self._eddyBeaconsSubject.asObservable();
    }
    getScanningStatus() {
        return self._eddyScanStatusSubject.asObservable();
    }
    triggerScanEddystoneBeacons() {
        self.scanEddystoneBeacons();
    }
    //ON CORDOVA DEVICE READY ===========================================================
    onDeviceReady() {
        console.log('ready to scan for BLE');
        if (this._webDebug === true) {
            console.log('returning from onDeviceReady since testing on web and not on cordova');
            return;
        }
        self.scanEddystoneBeacons();
    }
    scanEddystoneBeacons() {
        /**
         * NOTE: '0000FEAA-0000-1000-8000-00805F9B34FB' is the UUID for eddystone beacons
         * 0000-1000-8000-00805F9B34FB' ==> base bluetooth UUID
         * 0000FEAA ==> Google in BT SIG
         */
        self._isScanning = true;
        this.ble.startScanWithOptions(['0000FEAA-0000-1000-8000-00805F9B34FB'], //'0000FEAA-0000-1000-8000-00805F9B34FB'
        { reportDuplicates: true }).subscribe((deviceInfo) => {
            let device = deviceInfo; //fixme: needed? cuz error msg tthat device is const.
            //addToMessageQueue('device is :' + JSON.stringify(device));
            //for android
            if (device.advertising) {
                console.log('test data %o', device.advertising);
                /**
                 * NOTE: Android is always returning 62 bytes long
                 * The max for a beacon data is 31 bytes; it is always observed that the last 31 bytes are zero
                 * https://github.com/AltBeacon/android-beacon-library/issues/30
                 */
                let advertData = new Uint8Array(device.advertising);
                //addToMessageQueue('advert data is : ' + advertData)
                /**
                 * NOTE: read only the max of 31 bytes
                 */
                let eddyBeaconData = advertData.slice(0, 32);
                /**
                 * NOTE: beacon has 11 bytes of prefix data. so [0-10] not needed.
                 * the other 20 bytes constitute the eddystone frame data
                 */
                let eddyFrameData = eddyBeaconData.slice(11);
                addToMessageQueue('eddy frame data is : ' + eddyFrameData);
                //TIMESTAMP-------------------------------------------------------------------------------
                device.timeStamp = new Date();
                //BEACON TYPE----------------------------------------------------------------------------
                device.beaconType = 'Eddystone';
                parseEddystoneFrame(device, eddyFrameData);
            }
            //TODO: for ios---------------------------------------------------------------------------
            //ASSIGN DEVICE IN BEACON LIST-------------------------------------------------------------
            //console.log('whats device id %o', device.id)
            //console.log('whats device id type: ', typeof device.id)
            //console.log('whats eddybeacon %o', this._eddyBeaconsObj)
            //console.log('self eddybeacon %o', self._eddyBeaconsObj);
            self._eddyBeaconsObj[device.id] = device;
            let eddyBeaconsArr = Object.keys(self._eddyBeaconsObj).map((key) => {
                return self._eddyBeaconsObj[key];
            });
            self._eddyBeaconsSubject.next(eddyBeaconsArr);
            self._eddyScanStatusSubject.next(self._isScanning);
        });
        setTimeout(() => {
            console.log('run stop scan().');
            this.ble.stopScan().then(() => {
                console.log("Scan complete");
                self._isScanning = false;
                self._eddyScanStatusSubject.next(self._isScanning);
            }, () => {
                //FIXME: what to show if scan stop fails?
                console.log("stopScan failed");
            });
        }, 5000);
    }
    //ON WEB FOR MOCK RESULTS ========================================================================
    simulateEddystoneBeacons() {
        if (self._webDebug === false) {
            console.log('not debugging on web. returning from simulating eddy beacons...');
            return;
        }
        let counterId = 0;
        setInterval(() => {
            /**
             * NOTE: Fake toggling of scan status state
             */
            self._isScanning = !self._isScanning;
            self._eddyScanStatusSubject.next(self._isScanning);
        }, 5000);
        setInterval(() => {
            let newFauxEddyBeacon = new BeaconClass.EddystoneDeviceClass("47:80:8D:F7:02:6" + counterId.toString(), 'decki', 'https://www.google.com', -76, 'Eddystone');
            self._eddyBeaconsObj[newFauxEddyBeacon.id] = newFauxEddyBeacon;
            //console.log('jus added faux eddybeacon... %o', this._eddyBeaconsObj)
            //fixme MAP TO ARRAY
            let fauxEddyBeaconsArr = Object.keys(self._eddyBeaconsObj).map((key) => {
                return self._eddyBeaconsObj[key];
            });
            //console.log('whats eddybeacon array... %o', fauxEddyBeaconsArr)
            self._eddyBeaconsSubject.next(fauxEddyBeaconsArr);
            counterId = counterId + 1;
        }, 10000);
    }
}
function parseEddystoneFrame(device, data) {
    /**
     *
     https://github.com/google/eddystone/blob/master/protocol-specification.md
     Frame Type   High-Order 4 bits   Byte Value
     UID          0000                0x00
     URL          0001                0x10
     TLM          0010                0x20
     EID          0011                0x30
     RESERVED     0100                0x40
     */
    console.log("whats high-order 4 bit in data[0]: " + data[0]);
    switch (data[0]) {
        case 0x10:
            device.url = parseEddystoneURL(data);
            break;
        case 0x20:
            //TODO: TLM
            break;
        case 0x00:
            //TODO: UID
            break;
        case 0x30:
            //TODO: EID
            break;
        default:
            break;
    }
    console.log("whats updated device :%o", device);
}
function parseEddystoneURL(data) {
    let url = '';
    console.log('it is an eddystone URL; parsing...');
    /**
     *  https://github.com/google/eddystone/tree/master/eddystone-url
     *    Byte offset     Field  Description
     0    Frame Type      Value = 0x10
     1    TX Power        Calibrated Tx power at 0 m
     2    URL Scheme      Encoded Scheme Prefix
     3+   Encoded URL     Length 1-17
     */
    if (data.byteLength < 4) {
        console.log("URL frame: invalid byteLength: " + data.byteLength);
        return;
    }
    //device.txPower = evothings.util.littleEndianToInt8(data, 1);
    /**
     * Tx power is the received power at 0 meters, in dBm,
     * value ranges from -100 dBm to +20 dBm to a resolution of 1 dBm.
     *
     * Note to developers: the best way to determine the precise value to put into this field is to measure
     * the actual output of your beacon from 1 meter away and then add 41dBm to that.
     * 41dBm is the signal loss that occurs over 1 meter.
     *
     * The value is a signed 8 bit integer as specified by TX Power Level Bluetooth Characteristic.
     *
     * Examples
     * The value 0x12 is interpreted as +18dBm
     * The value 0xEE is interpreted as -18dBm

     */
    // URL scheme prefix
    /**
     *  Decimal    Hex  Expansion
     0  0x00      http://www.
     1  0x01      https://www.
     2  0x02      http://
     3  0x03      https://
     */
    switch (data[2]) {
        case 0:
            url = 'http://www.';
            break;
        case 1:
            url = 'https://www.';
            break;
        case 2:
            url = 'http://';
            break;
        case 3:
            url = 'https://';
            break;
        default:
            console.log("URL frame: invalid prefix: " + data[2]);
            return;
    }
    // ENCODED URL====================================================================
    //Length 1-17
    let encodedURLIndex = 3;
    while (encodedURLIndex < data.byteLength) {
        let encodedChar = data[encodedURLIndex];
        // A byte is either a top-domain shortcut, or a printable ascii character.
        if (encodedChar < 14) {
            switch (encodedChar) {
                case 0:
                    url += '.com/';
                    break;
                case 1:
                    url += '.org/';
                    break;
                case 2:
                    url += '.edu/';
                    break;
                case 3:
                    url += '.net/';
                    break;
                case 4:
                    url += '.info/';
                    break;
                case 5:
                    url += '.biz/';
                    break;
                case 6:
                    url += '.gov/';
                    break;
                case 7:
                    url += '.com';
                    break;
                case 8:
                    url += '.org';
                    break;
                case 9:
                    url += '.edu';
                    break;
                case 10:
                    url += '.net';
                    break;
                case 11:
                    url += '.info';
                    break;
                case 12:
                    url += '.biz';
                    break;
                case 13:
                    url += '.gov';
                    break;
            }
        }
        else if (encodedChar < 32 || encodedChar >= 127) {
            console.log("URL frame: invalid character: " + data[2]); //fixme: why data[2]
            return;
        }
        else {
            url += String.fromCharCode(encodedChar);
        }
        encodedURLIndex += 1;
    }
    return url;
}
// Do log
//todo: messageTimestamp:Date
let messageLog = [];
function addToMessageQueue(message) {
    console.log(message);
    messageLog.unshift({
        messageText: message
    });
}
// Map the RSSI value to a value between 1 and 100.
function mapBeaconRSSI(rssi) {
    if (rssi >= 0)
        return 1; // Unknown RSSI maps to 1.
    if (rssi < -100)
        return 100; // Max RSSI
    return 100 + rssi;
}
/**
 * //TODO: HAVENT DONE THIS!!!!!!!!!!!
 * Only show beacons updated during the last 60 seconds.
 * fixme: add param to tweak the time
 */
/*
 function removeOldBeacons() {
 var timeNow = Date.now();
 for (var key in beacons) {

 var beacon = beacons[key];
 if (beacon.timeStamp + 60000 < timeNow) {
 delete beacons[key];
 }
 }
 }*/
