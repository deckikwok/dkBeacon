(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"));
	else if(typeof define === 'function' && define.amd)
		define("dkbeacon", ["rxjs"], factory);
	else if(typeof exports === 'object')
		exports["dkbeacon"] = factory(require("rxjs"));
	else
		root["dkbeacon"] = factory(root["rxjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconClass; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BeaconClass;
(function (BeaconClass) {
    /***
     * DATA SAMPLE
     * advertising: ArrayBuffer
     * id: "47:80:8D:F7:02:66"
     * rssi: -76
     * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
     * __proto__: Object
     */
    var EddystoneDeviceClass = function () {
        //private _advertising: ArrayBuffer;
        function EddystoneDeviceClass(id, name, url, rssi, beaconType) {
            _classCallCheck(this, EddystoneDeviceClass);

            this._id = id;
            this._name = name;
            this._url = url;
            this._rssi = rssi;
            this._beaconType = beaconType;
            //this._advertising = advertising
        }

        _createClass(EddystoneDeviceClass, [{
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "name",
            get: function get() {
                return this._name;
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "rssi",
            get: function get() {
                return this._rssi;
            }
        }, {
            key: "beaconType",
            get: function get() {
                return this._beaconType;
            }
        }]);

        return EddystoneDeviceClass;
    }();

    BeaconClass.EddystoneDeviceClass = EddystoneDeviceClass;
    /***
     * DATA SAMPLE
     * advertising: ArrayBuffer
     * id: "47:80:8D:F7:02:66"
     * rssi: -76
     * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
     * __proto__: Object
     */

    var IBeaconDeviceClass = function () {
        //private _advertising: ArrayBuffer;
        function IBeaconDeviceClass(id, name, url, rssi, beaconType) {
            _classCallCheck(this, IBeaconDeviceClass);

            this._id = id;
            this._name = name;
            this._url = url;
            this._rssi = rssi;
            this._beaconType = beaconType;
            //this._advertising = advertising
        }

        _createClass(IBeaconDeviceClass, [{
            key: "id",
            get: function get() {
                return this._id;
            }
        }, {
            key: "name",
            get: function get() {
                return this._name;
            }
        }, {
            key: "url",
            get: function get() {
                return this._url;
            }
        }, {
            key: "rssi",
            get: function get() {
                return this._rssi;
            }
        }, {
            key: "beaconType",
            get: function get() {
                return this._beaconType;
            }
        }]);

        return IBeaconDeviceClass;
    }();

    BeaconClass.IBeaconDeviceClass = IBeaconDeviceClass;
})(BeaconClass || (BeaconClass = {}));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beacon_device_class__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//TODO: advertise beacon!
//TODO: NEARBY NOTIF PLUGIN.


var self = void 0;

var dkbeaconEddystoneService = function () {
    //CONSTRUCTOR CALL ===================================================================
    function dkbeaconEddystoneService(webDebug) {
        _classCallCheck(this, dkbeaconEddystoneService);

        self = this;
        self._webDebug = webDebug;
        self._isScanning = false;
        self._eddyBeaconsObj = {};
        self._eddyBeaconsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        self._eddyScanStatusSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        if (self._webDebug === false) {
            document.addEventListener("deviceready", self.onDeviceReady, false);
        }
        if (self._webDebug === true) {
            self.simulateEddystoneBeacons();
        }
    }
    //SERVICE API CALLS =================================================================


    _createClass(dkbeaconEddystoneService, [{
        key: "getEddyBeacons",
        value: function getEddyBeacons() {
            return self._eddyBeaconsSubject.asObservable();
        }
    }, {
        key: "getScanningStatus",
        value: function getScanningStatus() {
            return self._eddyScanStatusSubject.asObservable();
        }
    }, {
        key: "triggerScanEddystoneBeacons",
        value: function triggerScanEddystoneBeacons() {
            self.scanEddystoneBeacons();
        }
        //ON CORDOVA DEVICE READY ===========================================================

    }, {
        key: "onDeviceReady",
        value: function onDeviceReady() {
            console.log('ready to scan for BLE');
            if (this._webDebug === true) {
                console.log('returning from onDeviceReady since testing on web and not on cordova');
                return;
            }
            self.scanEddystoneBeacons();
        }
    }, {
        key: "scanEddystoneBeacons",
        value: function scanEddystoneBeacons() {
            var _this = this;

            /**
             * NOTE: '0000FEAA-0000-1000-8000-00805F9B34FB' is the UUID for eddystone beacons
             * 0000-1000-8000-00805F9B34FB' ==> base bluetooth UUID
             * 0000FEAA ==> Google in BT SIG
             */
            self._isScanning = true;
            this.ble.startScanWithOptions(['0000FEAA-0000-1000-8000-00805F9B34FB'], //'0000FEAA-0000-1000-8000-00805F9B34FB'
            { reportDuplicates: true }).subscribe(function (deviceInfo) {
                var device = deviceInfo; //fixme: needed? cuz error msg tthat device is const.
                //addToMessageQueue('device is :' + JSON.stringify(device));
                //for android
                if (device.advertising) {
                    console.log('test data %o', device.advertising);
                    /**
                     * NOTE: Android is always returning 62 bytes long
                     * The max for a beacon data is 31 bytes; it is always observed that the last 31 bytes are zero
                     * https://github.com/AltBeacon/android-beacon-library/issues/30
                     */
                    var advertData = new Uint8Array(device.advertising);
                    //addToMessageQueue('advert data is : ' + advertData)
                    /**
                     * NOTE: read only the max of 31 bytes
                     */
                    var eddyBeaconData = advertData.slice(0, 32);
                    /**
                     * NOTE: beacon has 11 bytes of prefix data. so [0-10] not needed.
                     * the other 20 bytes constitute the eddystone frame data
                     */
                    var eddyFrameData = eddyBeaconData.slice(11);
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
                var eddyBeaconsArr = Object.keys(self._eddyBeaconsObj).map(function (key) {
                    return self._eddyBeaconsObj[key];
                });
                self._eddyBeaconsSubject.next(eddyBeaconsArr);
                self._eddyScanStatusSubject.next(self._isScanning);
            });
            setTimeout(function () {
                console.log('run stop scan().');
                _this.ble.stopScan().then(function () {
                    console.log("Scan complete");
                    self._isScanning = false;
                    self._eddyScanStatusSubject.next(self._isScanning);
                }, function () {
                    //FIXME: what to show if scan stop fails?
                    console.log("stopScan failed");
                });
            }, 5000);
        }
        //ON WEB FOR MOCK RESULTS ========================================================================

    }, {
        key: "simulateEddystoneBeacons",
        value: function simulateEddystoneBeacons() {
            if (self._webDebug === false) {
                console.log('not debugging on web. returning from simulating eddy beacons...');
                return;
            }
            var counterId = 0;
            setInterval(function () {
                /**
                 * NOTE: Fake toggling of scan status state
                 */
                self._isScanning = !self._isScanning;
                self._eddyScanStatusSubject.next(self._isScanning);
            }, 5000);
            setInterval(function () {
                var newFauxEddyBeacon = new __WEBPACK_IMPORTED_MODULE_1__beacon_device_class__["a" /* BeaconClass */].EddystoneDeviceClass("47:80:8D:F7:02:6" + counterId.toString(), 'decki', 'https://www.google.com', -76, 'Eddystone');
                self._eddyBeaconsObj[newFauxEddyBeacon.id] = newFauxEddyBeacon;
                //console.log('jus added faux eddybeacon... %o', this._eddyBeaconsObj)
                //fixme MAP TO ARRAY
                var fauxEddyBeaconsArr = Object.keys(self._eddyBeaconsObj).map(function (key) {
                    return self._eddyBeaconsObj[key];
                });
                //console.log('whats eddybeacon array... %o', fauxEddyBeaconsArr)
                self._eddyBeaconsSubject.next(fauxEddyBeaconsArr);
                counterId = counterId + 1;
            }, 10000);
        }
    }]);

    return dkbeaconEddystoneService;
}();

/* harmony default export */ __webpack_exports__["a"] = (dkbeaconEddystoneService);

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
    var url = '';
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
    var encodedURLIndex = 3;
    while (encodedURLIndex < data.byteLength) {
        var encodedChar = data[encodedURLIndex];
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
        } else if (encodedChar < 32 || encodedChar >= 127) {
            console.log("URL frame: invalid character: " + data[2]); //fixme: why data[2]
            return;
        } else {
            url += String.fromCharCode(encodedChar);
        }
        encodedURLIndex += 1;
    }
    return url;
}
// Do log
//todo: messageTimestamp:Date
var messageLog = [];
function addToMessageQueue(message) {
    console.log(message);
    messageLog.unshift({
        messageText: message
    });
}
// Map the RSSI value to a value between 1 and 100.
function mapBeaconRSSI(rssi) {
    if (rssi >= 0) return 1; // Unknown RSSI maps to 1.
    if (rssi < -100) return 100; // Max RSSI
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beacon_device_class__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var self = void 0;
//@Injectable()

var dkbeaconIbeaconService = function () {
    //fixme: how is ibeacon passed in!??!?!
    function dkbeaconIbeaconService(webDebug) {
        _classCallCheck(this, dkbeaconIbeaconService);

        self = this;
        self._webDebug = webDebug;
        console.log('whats webDebug %o ', webDebug);
        console.log('whats self._webDebug %o ', self._webDebug);
        self._isScanning = false;
        self._iBeaconsObj = {};
        self._iBeaconsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        self._iBeaconScanStatusSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        if (self._webDebug === false) {
            document.addEventListener("deviceready", self.onDeviceReady, false);
        }
        if (self._webDebug === true) {
            self.simulateIBeacons();
        }
    }
    //SERVICE API CALLS =================================================================


    _createClass(dkbeaconIbeaconService, [{
        key: "getIBeacons",
        value: function getIBeacons() {
            console.log('getting ibeacons');
            return self._iBeaconsSubject.asObservable();
        }
        //ON CORDOVA DEVICE READY ===========================================================

    }, {
        key: "simulateIBeacons",
        value: function simulateIBeacons() {
            if (this._webDebug === false) {
                console.log('not web. returning from simulate i beacons...');
                return;
            }
            var counterId = 0;
            setInterval(function () {
                /**
                 * NOTE: Fake toggling of scan status state
                 */
                self._isScanning = !self._isScanning;
                self._iBeaconScanStatusSubject.next(self._isScanning);
            }, 5000);
            setInterval(function () {
                var newFauxIBeacon = new __WEBPACK_IMPORTED_MODULE_1__beacon_device_class__["a" /* BeaconClass */].IBeaconDeviceClass("47:80:8D:F7:02:6" + counterId.toString(), 'ibeaconDecki', 'https://www.apple.com', -88, 'IBeacon');
                self._iBeaconsObj[newFauxIBeacon.id] = newFauxIBeacon;
                var fauxIBeaconsArr = Object.keys(self._iBeaconsObj).map(function (key) {
                    return self._iBeaconsObj[key];
                });
                //console.log('whats eddybeacon array... %o', fauxIBeaconsArr)
                self._iBeaconsSubject.next(fauxIBeaconsArr);
                counterId = counterId + 1;
            }, 10000);
        }
    }]);

    return dkbeaconIbeaconService;
}();

/* harmony default export */ __webpack_exports__["a"] = (dkbeaconIbeaconService);

if (this._webDebug === false) {
    //DELEGATE FOR NATIVE LAYER ======================================================================================
    //FIXME: SHIFT DELEGATE INWARDS...??? whats inwards
    //set delegate -----------------------------------------------------------------------------------
    var delegate = this.ibeacon.Delegate();
    //subscribe -----------------------------------------------------------------------------------
    /**
     An Observable that publishes event data to it's subscribers each time that the device ranges beacons.
     Modern Android and iOS devices range approximately once per second.
     */
    self._iBeaconsSubject = delegate.didRangeBeaconsInRegion();
    delegate.didRangeBeaconsInRegion().subscribe(function (data) {
        console.log('didRangeBeaconsInRegion: %O', data);
    }, function (error) {
        console.error();
    });
    /**
     An Observable that publishes event data to it's subscribers when the device begins monitoring a region.
     */
    delegate.didStartMonitoringForRegion().subscribe(function (data) {
        console.log('didStartMonitoringForRegion: %O', data);
    }, function (error) {
        console.error();
    });
    /**
     An Observable that publishes event data to it's subscribers when the phone enters a region that it was asked to monitor.
     If the user has given the app Always-Location permission, this function will be called even when the app is not running on iOS.
     The app will run silently in the background for a small amount of time.
     */
    delegate.didEnterRegion().subscribe(function (data) {
        console.log('didEnterRegion: %O', data);
    });
    /**
     An Observable that publishes event data to it's subscribers when the phone exits a region that it was asked to monitor.
     If the user has given the app Always-Location permission, this function will be called even when the app is not running on iOS.
     The app will run silently in the background for a small amount of time.
     */
    delegate.didExitRegion().subscribe(function (data) {
        console.log('did exit region: %O', data);
    });
    /**
     An Observable that publishes event data to it's subscribers when the device fails to monitor a region.
     */
    delegate.monitoringDidFailForRegionWithError().subscribe(function (data) {
        console.log('did fail to monitor a region %O', data);
    });
    /**
     An Observable that publishes event data to it's subscribers when the device begins advertising as an iBeacon.
     */
    delegate.peripheralManagerDidStartAdvertising().subscribe(function (data) {
        console.log('did start advertising as an ibeacon %O', data);
    });
    /**
     An observable that publishes information about the location permission authorization status.
     */
    delegate.didChangeAuthorizationStatus().subscribe(function (data) {
        console.log('did change auth status %O', data);
    });
    /**
     - identifier  String
     - uuid  String: The proximity ID of the beacon being targeted. This value must not be blank nor invalid as a UUID.
     - major  Number:  The major value that you use to identify one or more beacons.
     - minor  Number: The minor value that you use to identify a specific beacon.
     - notifyEntryStateOnDisplay  BOOL: ??
     */
    var beaconRegion = this.ibeacon.BeaconRegion('chimesBeacon', '2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6');
    this.ibeacon.startMonitoringForRegion(beaconRegion).then(function () {
        console.log('Native layer recieved the request to monitoring');
    }, function (error) {
        console.error('Native layer failed to begin monitoring: ', error);
    });
}
//fixme: CIRCULAR REGION!? can do lat lng radius and id? vs. beaconREgion whats the difference?
//todo: check bt
//todo: enable/disable bt
//todo: test if moniotring is available for class(region) for the region type??
//todo: STOP MONITORING
//todo: test if ranging is availabele for the device in question
//todo: START RANGING BEACONS IN REGION(REGION)
//todo: STOP RANGING
//todo: check ad ok
//todo: start advertising!
//todo: stop ad
//todo: is advertising?
//todo: debugging notifications
//TODO: IOS GET AUATH STATUS. REQUEST WHENIN USE vs. ALWAYS AUTH

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (immutable) */ __webpack_exports__["DKIbeaconService"] = DKIbeaconService;
/* harmony export (immutable) */ __webpack_exports__["DKEddystoneService"] = DKEddystoneService;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__beacon_ibeacon_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__beacon_eddystone_service__ = __webpack_require__(2);


/**
 * NOTE: by default, without passing in true,
 * we will assume webDebug is false and thus this lib is used in cordova env
 */
var _ibeaconService = null;
var _eddystoneService = null;
var version = '0.0.1';
function DKIbeaconService(webDebug) {
    if (!_ibeaconService) {
        _ibeaconService = new __WEBPACK_IMPORTED_MODULE_0__beacon_ibeacon_service__["a" /* default */](webDebug);
    }
    console.log('whats _ibeaconService %o ', _ibeaconService);
    return _ibeaconService;
}
function DKEddystoneService(webDebug) {
    if (!_eddystoneService) {
        _eddystoneService = new __WEBPACK_IMPORTED_MODULE_1__beacon_eddystone_service__["a" /* default */](webDebug);
    }
    console.log('whats _eddystoneService %o ', _eddystoneService);
    return _eddystoneService;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwYjQzODAyYmUxNjg0MzEyMGI5MSIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhY29uLWRldmljZS5jbGFzcy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlYWNvbi1lZGR5c3RvbmUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVhY29uLWliZWFjb24uc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGtiZWFjb24udHMiXSwibmFtZXMiOlsiQmVhY29uQ2xhc3MiLCJFZGR5c3RvbmVEZXZpY2VDbGFzcyIsImlkIiwibmFtZSIsInVybCIsInJzc2kiLCJiZWFjb25UeXBlIiwiX2lkIiwiX25hbWUiLCJfdXJsIiwiX3Jzc2kiLCJfYmVhY29uVHlwZSIsIklCZWFjb25EZXZpY2VDbGFzcyIsInNlbGYiLCJka2JlYWNvbkVkZHlzdG9uZVNlcnZpY2UiLCJ3ZWJEZWJ1ZyIsIl93ZWJEZWJ1ZyIsIl9pc1NjYW5uaW5nIiwiX2VkZHlCZWFjb25zT2JqIiwiX2VkZHlCZWFjb25zU3ViamVjdCIsIl9lZGR5U2NhblN0YXR1c1N1YmplY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkRldmljZVJlYWR5Iiwic2ltdWxhdGVFZGR5c3RvbmVCZWFjb25zIiwiYXNPYnNlcnZhYmxlIiwic2NhbkVkZHlzdG9uZUJlYWNvbnMiLCJjb25zb2xlIiwibG9nIiwiYmxlIiwic3RhcnRTY2FuV2l0aE9wdGlvbnMiLCJyZXBvcnREdXBsaWNhdGVzIiwic3Vic2NyaWJlIiwiZGV2aWNlSW5mbyIsImRldmljZSIsImFkdmVydGlzaW5nIiwiYWR2ZXJ0RGF0YSIsIlVpbnQ4QXJyYXkiLCJlZGR5QmVhY29uRGF0YSIsInNsaWNlIiwiZWRkeUZyYW1lRGF0YSIsImFkZFRvTWVzc2FnZVF1ZXVlIiwidGltZVN0YW1wIiwiRGF0ZSIsInBhcnNlRWRkeXN0b25lRnJhbWUiLCJlZGR5QmVhY29uc0FyciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJuZXh0Iiwic2V0VGltZW91dCIsInN0b3BTY2FuIiwidGhlbiIsImNvdW50ZXJJZCIsInNldEludGVydmFsIiwibmV3RmF1eEVkZHlCZWFjb24iLCJ0b1N0cmluZyIsImZhdXhFZGR5QmVhY29uc0FyciIsImRhdGEiLCJwYXJzZUVkZHlzdG9uZVVSTCIsImJ5dGVMZW5ndGgiLCJlbmNvZGVkVVJMSW5kZXgiLCJlbmNvZGVkQ2hhciIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1lc3NhZ2VMb2ciLCJtZXNzYWdlIiwidW5zaGlmdCIsIm1lc3NhZ2VUZXh0IiwibWFwQmVhY29uUlNTSSIsImRrYmVhY29uSWJlYWNvblNlcnZpY2UiLCJfaUJlYWNvbnNPYmoiLCJfaUJlYWNvbnNTdWJqZWN0IiwiX2lCZWFjb25TY2FuU3RhdHVzU3ViamVjdCIsInNpbXVsYXRlSUJlYWNvbnMiLCJuZXdGYXV4SUJlYWNvbiIsImZhdXhJQmVhY29uc0FyciIsImRlbGVnYXRlIiwiaWJlYWNvbiIsIkRlbGVnYXRlIiwiZGlkUmFuZ2VCZWFjb25zSW5SZWdpb24iLCJlcnJvciIsImRpZFN0YXJ0TW9uaXRvcmluZ0ZvclJlZ2lvbiIsImRpZEVudGVyUmVnaW9uIiwiZGlkRXhpdFJlZ2lvbiIsIm1vbml0b3JpbmdEaWRGYWlsRm9yUmVnaW9uV2l0aEVycm9yIiwicGVyaXBoZXJhbE1hbmFnZXJEaWRTdGFydEFkdmVydGlzaW5nIiwiZGlkQ2hhbmdlQXV0aG9yaXphdGlvblN0YXR1cyIsImJlYWNvblJlZ2lvbiIsIkJlYWNvblJlZ2lvbiIsInN0YXJ0TW9uaXRvcmluZ0ZvclJlZ2lvbiIsIl9pYmVhY29uU2VydmljZSIsIl9lZGR5c3RvbmVTZXJ2aWNlIiwidmVyc2lvbiIsIkRLSWJlYWNvblNlcnZpY2UiLCJES0VkZHlzdG9uZVNlcnZpY2UiXSwi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ImZpbGUiOiJka2JlYWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJ4anNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJka2JlYWNvblwiLCBbXCJyeGpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRrYmVhY29uXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicnhqc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGtiZWFjb25cIl0gPSBmYWN0b3J5KHJvb3RbXCJyeGpzXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGI0MzgwMmJlMTY4NDMxMjBiOTEiLCJleHBvcnQgdmFyIEJlYWNvbkNsYXNzO1xuKGZ1bmN0aW9uIChCZWFjb25DbGFzcykge1xuICAgIC8qKipcbiAgICAgKiBEQVRBIFNBTVBMRVxuICAgICAqIGFkdmVydGlzaW5nOiBBcnJheUJ1ZmZlclxuICAgICAqIGlkOiBcIjQ3OjgwOjhEOkY3OjAyOjY2XCJcbiAgICAgKiByc3NpOiAtNzZcbiAgICAgKiB0aW1lU3RhbXA6IFRodSBKYW4gMjYgMjAxNyAyMTo1NjoxMyBHTVQrMDgwMCAoU0dUKVxuICAgICAqIF9fcHJvdG9fXzogT2JqZWN0XG4gICAgICovXG4gICAgY2xhc3MgRWRkeXN0b25lRGV2aWNlQ2xhc3Mge1xuICAgICAgICAvL3ByaXZhdGUgX2FkdmVydGlzaW5nOiBBcnJheUJ1ZmZlcjtcbiAgICAgICAgY29uc3RydWN0b3IoaWQsIG5hbWUsIHVybCwgcnNzaSwgYmVhY29uVHlwZSkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgICAgICAgdGhpcy5fcnNzaSA9IHJzc2k7XG4gICAgICAgICAgICB0aGlzLl9iZWFjb25UeXBlID0gYmVhY29uVHlwZTtcbiAgICAgICAgICAgIC8vdGhpcy5fYWR2ZXJ0aXNpbmcgPSBhZHZlcnRpc2luZ1xuICAgICAgICB9XG4gICAgICAgIGdldCBpZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGdldCB1cmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xuICAgICAgICB9XG4gICAgICAgIGdldCByc3NpKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jzc2k7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IGJlYWNvblR5cGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmVhY29uVHlwZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCZWFjb25DbGFzcy5FZGR5c3RvbmVEZXZpY2VDbGFzcyA9IEVkZHlzdG9uZURldmljZUNsYXNzO1xuICAgIC8qKipcbiAgICAgKiBEQVRBIFNBTVBMRVxuICAgICAqIGFkdmVydGlzaW5nOiBBcnJheUJ1ZmZlclxuICAgICAqIGlkOiBcIjQ3OjgwOjhEOkY3OjAyOjY2XCJcbiAgICAgKiByc3NpOiAtNzZcbiAgICAgKiB0aW1lU3RhbXA6IFRodSBKYW4gMjYgMjAxNyAyMTo1NjoxMyBHTVQrMDgwMCAoU0dUKVxuICAgICAqIF9fcHJvdG9fXzogT2JqZWN0XG4gICAgICovXG4gICAgY2xhc3MgSUJlYWNvbkRldmljZUNsYXNzIHtcbiAgICAgICAgLy9wcml2YXRlIF9hZHZlcnRpc2luZzogQXJyYXlCdWZmZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCB1cmwsIHJzc2ksIGJlYWNvblR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgICAgIHRoaXMuX3Jzc2kgPSByc3NpO1xuICAgICAgICAgICAgdGhpcy5fYmVhY29uVHlwZSA9IGJlYWNvblR5cGU7XG4gICAgICAgICAgICAvL3RoaXMuX2FkdmVydGlzaW5nID0gYWR2ZXJ0aXNpbmdcbiAgICAgICAgfVxuICAgICAgICBnZXQgaWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBnZXQgdXJsKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybDtcbiAgICAgICAgfVxuICAgICAgICBnZXQgcnNzaSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yc3NpO1xuICAgICAgICB9XG4gICAgICAgIGdldCBiZWFjb25UeXBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JlYWNvblR5cGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQmVhY29uQ2xhc3MuSUJlYWNvbkRldmljZUNsYXNzID0gSUJlYWNvbkRldmljZUNsYXNzO1xufSkoQmVhY29uQ2xhc3MgfHwgKEJlYWNvbkNsYXNzID0ge30pKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWFjb24tZGV2aWNlLmNsYXNzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anNcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL1RPRE86IGFkdmVydGlzZSBiZWFjb24hXG4vL1RPRE86IE5FQVJCWSBOT1RJRiBQTFVHSU4uXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJlYWNvbkNsYXNzIH0gZnJvbSBcIi4vYmVhY29uLWRldmljZS5jbGFzc1wiO1xubGV0IHNlbGY7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBka2JlYWNvbkVkZHlzdG9uZVNlcnZpY2Uge1xuICAgIC8vQ09OU1RSVUNUT1IgQ0FMTCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3RydWN0b3Iod2ViRGVidWcpIHtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX3dlYkRlYnVnID0gd2ViRGVidWc7XG4gICAgICAgIHNlbGYuX2lzU2Nhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgc2VsZi5fZWRkeUJlYWNvbnNPYmogPSB7fTtcbiAgICAgICAgc2VsZi5fZWRkeUJlYWNvbnNTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgICAgIHNlbGYuX2VkZHlTY2FuU3RhdHVzU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICBpZiAoc2VsZi5fd2ViRGVidWcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIiwgc2VsZi5vbkRldmljZVJlYWR5LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuX3dlYkRlYnVnID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZWxmLnNpbXVsYXRlRWRkeXN0b25lQmVhY29ucygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vU0VSVklDRSBBUEkgQ0FMTFMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBnZXRFZGR5QmVhY29ucygpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX2VkZHlCZWFjb25zU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gICAgZ2V0U2Nhbm5pbmdTdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9lZGR5U2NhblN0YXR1c1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHRyaWdnZXJTY2FuRWRkeXN0b25lQmVhY29ucygpIHtcbiAgICAgICAgc2VsZi5zY2FuRWRkeXN0b25lQmVhY29ucygpO1xuICAgIH1cbiAgICAvL09OIENPUkRPVkEgREVWSUNFIFJFQURZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgb25EZXZpY2VSZWFkeSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IHRvIHNjYW4gZm9yIEJMRScpO1xuICAgICAgICBpZiAodGhpcy5fd2ViRGVidWcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXR1cm5pbmcgZnJvbSBvbkRldmljZVJlYWR5IHNpbmNlIHRlc3Rpbmcgb24gd2ViIGFuZCBub3Qgb24gY29yZG92YScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuc2NhbkVkZHlzdG9uZUJlYWNvbnMoKTtcbiAgICB9XG4gICAgc2NhbkVkZHlzdG9uZUJlYWNvbnMoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOT1RFOiAnMDAwMEZFQUEtMDAwMC0xMDAwLTgwMDAtMDA4MDVGOUIzNEZCJyBpcyB0aGUgVVVJRCBmb3IgZWRkeXN0b25lIGJlYWNvbnNcbiAgICAgICAgICogMDAwMC0xMDAwLTgwMDAtMDA4MDVGOUIzNEZCJyA9PT4gYmFzZSBibHVldG9vdGggVVVJRFxuICAgICAgICAgKiAwMDAwRkVBQSA9PT4gR29vZ2xlIGluIEJUIFNJR1xuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5faXNTY2FubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYmxlLnN0YXJ0U2NhbldpdGhPcHRpb25zKFsnMDAwMEZFQUEtMDAwMC0xMDAwLTgwMDAtMDA4MDVGOUIzNEZCJ10sIC8vJzAwMDBGRUFBLTAwMDAtMTAwMC04MDAwLTAwODA1RjlCMzRGQidcbiAgICAgICAgeyByZXBvcnREdXBsaWNhdGVzOiB0cnVlIH0pLnN1YnNjcmliZSgoZGV2aWNlSW5mbykgPT4ge1xuICAgICAgICAgICAgbGV0IGRldmljZSA9IGRldmljZUluZm87IC8vZml4bWU6IG5lZWRlZD8gY3V6IGVycm9yIG1zZyB0dGhhdCBkZXZpY2UgaXMgY29uc3QuXG4gICAgICAgICAgICAvL2FkZFRvTWVzc2FnZVF1ZXVlKCdkZXZpY2UgaXMgOicgKyBKU09OLnN0cmluZ2lmeShkZXZpY2UpKTtcbiAgICAgICAgICAgIC8vZm9yIGFuZHJvaWRcbiAgICAgICAgICAgIGlmIChkZXZpY2UuYWR2ZXJ0aXNpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCBkYXRhICVvJywgZGV2aWNlLmFkdmVydGlzaW5nKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBOT1RFOiBBbmRyb2lkIGlzIGFsd2F5cyByZXR1cm5pbmcgNjIgYnl0ZXMgbG9uZ1xuICAgICAgICAgICAgICAgICAqIFRoZSBtYXggZm9yIGEgYmVhY29uIGRhdGEgaXMgMzEgYnl0ZXM7IGl0IGlzIGFsd2F5cyBvYnNlcnZlZCB0aGF0IHRoZSBsYXN0IDMxIGJ5dGVzIGFyZSB6ZXJvXG4gICAgICAgICAgICAgICAgICogaHR0cHM6Ly9naXRodWIuY29tL0FsdEJlYWNvbi9hbmRyb2lkLWJlYWNvbi1saWJyYXJ5L2lzc3Vlcy8zMFxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGxldCBhZHZlcnREYXRhID0gbmV3IFVpbnQ4QXJyYXkoZGV2aWNlLmFkdmVydGlzaW5nKTtcbiAgICAgICAgICAgICAgICAvL2FkZFRvTWVzc2FnZVF1ZXVlKCdhZHZlcnQgZGF0YSBpcyA6ICcgKyBhZHZlcnREYXRhKVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIE5PVEU6IHJlYWQgb25seSB0aGUgbWF4IG9mIDMxIGJ5dGVzXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgbGV0IGVkZHlCZWFjb25EYXRhID0gYWR2ZXJ0RGF0YS5zbGljZSgwLCAzMik7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogTk9URTogYmVhY29uIGhhcyAxMSBieXRlcyBvZiBwcmVmaXggZGF0YS4gc28gWzAtMTBdIG5vdCBuZWVkZWQuXG4gICAgICAgICAgICAgICAgICogdGhlIG90aGVyIDIwIGJ5dGVzIGNvbnN0aXR1dGUgdGhlIGVkZHlzdG9uZSBmcmFtZSBkYXRhXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgbGV0IGVkZHlGcmFtZURhdGEgPSBlZGR5QmVhY29uRGF0YS5zbGljZSgxMSk7XG4gICAgICAgICAgICAgICAgYWRkVG9NZXNzYWdlUXVldWUoJ2VkZHkgZnJhbWUgZGF0YSBpcyA6ICcgKyBlZGR5RnJhbWVEYXRhKTtcbiAgICAgICAgICAgICAgICAvL1RJTUVTVEFNUC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICBkZXZpY2UudGltZVN0YW1wID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICAvL0JFQUNPTiBUWVBFLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgIGRldmljZS5iZWFjb25UeXBlID0gJ0VkZHlzdG9uZSc7XG4gICAgICAgICAgICAgICAgcGFyc2VFZGR5c3RvbmVGcmFtZShkZXZpY2UsIGVkZHlGcmFtZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9UT0RPOiBmb3IgaW9zLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvL0FTU0lHTiBERVZJQ0UgSU4gQkVBQ09OIExJU1QtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd3aGF0cyBkZXZpY2UgaWQgJW8nLCBkZXZpY2UuaWQpXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd3aGF0cyBkZXZpY2UgaWQgdHlwZTogJywgdHlwZW9mIGRldmljZS5pZClcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3doYXRzIGVkZHliZWFjb24gJW8nLCB0aGlzLl9lZGR5QmVhY29uc09iailcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NlbGYgZWRkeWJlYWNvbiAlbycsIHNlbGYuX2VkZHlCZWFjb25zT2JqKTtcbiAgICAgICAgICAgIHNlbGYuX2VkZHlCZWFjb25zT2JqW2RldmljZS5pZF0gPSBkZXZpY2U7XG4gICAgICAgICAgICBsZXQgZWRkeUJlYWNvbnNBcnIgPSBPYmplY3Qua2V5cyhzZWxmLl9lZGR5QmVhY29uc09iaikubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZWRkeUJlYWNvbnNPYmpba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5fZWRkeUJlYWNvbnNTdWJqZWN0Lm5leHQoZWRkeUJlYWNvbnNBcnIpO1xuICAgICAgICAgICAgc2VsZi5fZWRkeVNjYW5TdGF0dXNTdWJqZWN0Lm5leHQoc2VsZi5faXNTY2FubmluZyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdydW4gc3RvcCBzY2FuKCkuJyk7XG4gICAgICAgICAgICB0aGlzLmJsZS5zdG9wU2NhbigpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2NhbiBjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9pc1NjYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5fZWRkeVNjYW5TdGF0dXNTdWJqZWN0Lm5leHQoc2VsZi5faXNTY2FubmluZyk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9GSVhNRTogd2hhdCB0byBzaG93IGlmIHNjYW4gc3RvcCBmYWlscz9cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BTY2FuIGZhaWxlZFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICB9XG4gICAgLy9PTiBXRUIgRk9SIE1PQ0sgUkVTVUxUUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBzaW11bGF0ZUVkZHlzdG9uZUJlYWNvbnMoKSB7XG4gICAgICAgIGlmIChzZWxmLl93ZWJEZWJ1ZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgZGVidWdnaW5nIG9uIHdlYi4gcmV0dXJuaW5nIGZyb20gc2ltdWxhdGluZyBlZGR5IGJlYWNvbnMuLi4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY291bnRlcklkID0gMDtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBOT1RFOiBGYWtlIHRvZ2dsaW5nIG9mIHNjYW4gc3RhdHVzIHN0YXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGYuX2lzU2Nhbm5pbmcgPSAhc2VsZi5faXNTY2FubmluZztcbiAgICAgICAgICAgIHNlbGYuX2VkZHlTY2FuU3RhdHVzU3ViamVjdC5uZXh0KHNlbGYuX2lzU2Nhbm5pbmcpO1xuICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld0ZhdXhFZGR5QmVhY29uID0gbmV3IEJlYWNvbkNsYXNzLkVkZHlzdG9uZURldmljZUNsYXNzKFwiNDc6ODA6OEQ6Rjc6MDI6NlwiICsgY291bnRlcklkLnRvU3RyaW5nKCksICdkZWNraScsICdodHRwczovL3d3dy5nb29nbGUuY29tJywgLTc2LCAnRWRkeXN0b25lJyk7XG4gICAgICAgICAgICBzZWxmLl9lZGR5QmVhY29uc09ialtuZXdGYXV4RWRkeUJlYWNvbi5pZF0gPSBuZXdGYXV4RWRkeUJlYWNvbjtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2p1cyBhZGRlZCBmYXV4IGVkZHliZWFjb24uLi4gJW8nLCB0aGlzLl9lZGR5QmVhY29uc09iailcbiAgICAgICAgICAgIC8vZml4bWUgTUFQIFRPIEFSUkFZXG4gICAgICAgICAgICBsZXQgZmF1eEVkZHlCZWFjb25zQXJyID0gT2JqZWN0LmtleXMoc2VsZi5fZWRkeUJlYWNvbnNPYmopLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VkZHlCZWFjb25zT2JqW2tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3doYXRzIGVkZHliZWFjb24gYXJyYXkuLi4gJW8nLCBmYXV4RWRkeUJlYWNvbnNBcnIpXG4gICAgICAgICAgICBzZWxmLl9lZGR5QmVhY29uc1N1YmplY3QubmV4dChmYXV4RWRkeUJlYWNvbnNBcnIpO1xuICAgICAgICAgICAgY291bnRlcklkID0gY291bnRlcklkICsgMTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRWRkeXN0b25lRnJhbWUoZGV2aWNlLCBkYXRhKSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9lZGR5c3RvbmUvYmxvYi9tYXN0ZXIvcHJvdG9jb2wtc3BlY2lmaWNhdGlvbi5tZFxuICAgICBGcmFtZSBUeXBlICAgSGlnaC1PcmRlciA0IGJpdHMgICBCeXRlIFZhbHVlXG4gICAgIFVJRCAgICAgICAgICAwMDAwICAgICAgICAgICAgICAgIDB4MDBcbiAgICAgVVJMICAgICAgICAgIDAwMDEgICAgICAgICAgICAgICAgMHgxMFxuICAgICBUTE0gICAgICAgICAgMDAxMCAgICAgICAgICAgICAgICAweDIwXG4gICAgIEVJRCAgICAgICAgICAwMDExICAgICAgICAgICAgICAgIDB4MzBcbiAgICAgUkVTRVJWRUQgICAgIDAxMDAgICAgICAgICAgICAgICAgMHg0MFxuICAgICAqL1xuICAgIGNvbnNvbGUubG9nKFwid2hhdHMgaGlnaC1vcmRlciA0IGJpdCBpbiBkYXRhWzBdOiBcIiArIGRhdGFbMF0pO1xuICAgIHN3aXRjaCAoZGF0YVswXSkge1xuICAgICAgICBjYXNlIDB4MTA6XG4gICAgICAgICAgICBkZXZpY2UudXJsID0gcGFyc2VFZGR5c3RvbmVVUkwoZGF0YSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAweDIwOlxuICAgICAgICAgICAgLy9UT0RPOiBUTE1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDB4MDA6XG4gICAgICAgICAgICAvL1RPRE86IFVJRFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMHgzMDpcbiAgICAgICAgICAgIC8vVE9ETzogRUlEXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcIndoYXRzIHVwZGF0ZWQgZGV2aWNlIDolb1wiLCBkZXZpY2UpO1xufVxuZnVuY3Rpb24gcGFyc2VFZGR5c3RvbmVVUkwoZGF0YSkge1xuICAgIGxldCB1cmwgPSAnJztcbiAgICBjb25zb2xlLmxvZygnaXQgaXMgYW4gZWRkeXN0b25lIFVSTDsgcGFyc2luZy4uLicpO1xuICAgIC8qKlxuICAgICAqICBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2VkZHlzdG9uZS90cmVlL21hc3Rlci9lZGR5c3RvbmUtdXJsXG4gICAgICogICAgQnl0ZSBvZmZzZXQgICAgIEZpZWxkICBEZXNjcmlwdGlvblxuICAgICAwICAgIEZyYW1lIFR5cGUgICAgICBWYWx1ZSA9IDB4MTBcbiAgICAgMSAgICBUWCBQb3dlciAgICAgICAgQ2FsaWJyYXRlZCBUeCBwb3dlciBhdCAwIG1cbiAgICAgMiAgICBVUkwgU2NoZW1lICAgICAgRW5jb2RlZCBTY2hlbWUgUHJlZml4XG4gICAgIDMrICAgRW5jb2RlZCBVUkwgICAgIExlbmd0aCAxLTE3XG4gICAgICovXG4gICAgaWYgKGRhdGEuYnl0ZUxlbmd0aCA8IDQpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVUkwgZnJhbWU6IGludmFsaWQgYnl0ZUxlbmd0aDogXCIgKyBkYXRhLmJ5dGVMZW5ndGgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vZGV2aWNlLnR4UG93ZXIgPSBldm90aGluZ3MudXRpbC5saXR0bGVFbmRpYW5Ub0ludDgoZGF0YSwgMSk7XG4gICAgLyoqXG4gICAgICogVHggcG93ZXIgaXMgdGhlIHJlY2VpdmVkIHBvd2VyIGF0IDAgbWV0ZXJzLCBpbiBkQm0sXG4gICAgICogdmFsdWUgcmFuZ2VzIGZyb20gLTEwMCBkQm0gdG8gKzIwIGRCbSB0byBhIHJlc29sdXRpb24gb2YgMSBkQm0uXG4gICAgICpcbiAgICAgKiBOb3RlIHRvIGRldmVsb3BlcnM6IHRoZSBiZXN0IHdheSB0byBkZXRlcm1pbmUgdGhlIHByZWNpc2UgdmFsdWUgdG8gcHV0IGludG8gdGhpcyBmaWVsZCBpcyB0byBtZWFzdXJlXG4gICAgICogdGhlIGFjdHVhbCBvdXRwdXQgb2YgeW91ciBiZWFjb24gZnJvbSAxIG1ldGVyIGF3YXkgYW5kIHRoZW4gYWRkIDQxZEJtIHRvIHRoYXQuXG4gICAgICogNDFkQm0gaXMgdGhlIHNpZ25hbCBsb3NzIHRoYXQgb2NjdXJzIG92ZXIgMSBtZXRlci5cbiAgICAgKlxuICAgICAqIFRoZSB2YWx1ZSBpcyBhIHNpZ25lZCA4IGJpdCBpbnRlZ2VyIGFzIHNwZWNpZmllZCBieSBUWCBQb3dlciBMZXZlbCBCbHVldG9vdGggQ2hhcmFjdGVyaXN0aWMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlc1xuICAgICAqIFRoZSB2YWx1ZSAweDEyIGlzIGludGVycHJldGVkIGFzICsxOGRCbVxuICAgICAqIFRoZSB2YWx1ZSAweEVFIGlzIGludGVycHJldGVkIGFzIC0xOGRCbVxuXG4gICAgICovXG4gICAgLy8gVVJMIHNjaGVtZSBwcmVmaXhcbiAgICAvKipcbiAgICAgKiAgRGVjaW1hbCAgICBIZXggIEV4cGFuc2lvblxuICAgICAwICAweDAwICAgICAgaHR0cDovL3d3dy5cbiAgICAgMSAgMHgwMSAgICAgIGh0dHBzOi8vd3d3LlxuICAgICAyICAweDAyICAgICAgaHR0cDovL1xuICAgICAzICAweDAzICAgICAgaHR0cHM6Ly9cbiAgICAgKi9cbiAgICBzd2l0Y2ggKGRhdGFbMl0pIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgdXJsID0gJ2h0dHA6Ly93d3cuJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB1cmwgPSAnaHR0cHM6Ly93d3cuJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB1cmwgPSAnaHR0cDovLyc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUkwgZnJhbWU6IGludmFsaWQgcHJlZml4OiBcIiArIGRhdGFbMl0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBFTkNPREVEIFVSTD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy9MZW5ndGggMS0xN1xuICAgIGxldCBlbmNvZGVkVVJMSW5kZXggPSAzO1xuICAgIHdoaWxlIChlbmNvZGVkVVJMSW5kZXggPCBkYXRhLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgbGV0IGVuY29kZWRDaGFyID0gZGF0YVtlbmNvZGVkVVJMSW5kZXhdO1xuICAgICAgICAvLyBBIGJ5dGUgaXMgZWl0aGVyIGEgdG9wLWRvbWFpbiBzaG9ydGN1dCwgb3IgYSBwcmludGFibGUgYXNjaWkgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoZW5jb2RlZENoYXIgPCAxNCkge1xuICAgICAgICAgICAgc3dpdGNoIChlbmNvZGVkQ2hhcikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcuY29tLyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcub3JnLyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcuZWR1Lyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcubmV0Lyc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcuaW5mby8nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnLmJpei8nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnLmdvdi8nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnLmNvbSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcub3JnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJy5lZHUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJy5uZXQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJy5pbmZvJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcuYml6JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcuZ292JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5jb2RlZENoYXIgPCAzMiB8fCBlbmNvZGVkQ2hhciA+PSAxMjcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMIGZyYW1lOiBpbnZhbGlkIGNoYXJhY3RlcjogXCIgKyBkYXRhWzJdKTsgLy9maXhtZTogd2h5IGRhdGFbMl1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVybCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGVuY29kZWRDaGFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkVVJMSW5kZXggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn1cbi8vIERvIGxvZ1xuLy90b2RvOiBtZXNzYWdlVGltZXN0YW1wOkRhdGVcbmxldCBtZXNzYWdlTG9nID0gW107XG5mdW5jdGlvbiBhZGRUb01lc3NhZ2VRdWV1ZShtZXNzYWdlKSB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgbWVzc2FnZUxvZy51bnNoaWZ0KHtcbiAgICAgICAgbWVzc2FnZVRleHQ6IG1lc3NhZ2VcbiAgICB9KTtcbn1cbi8vIE1hcCB0aGUgUlNTSSB2YWx1ZSB0byBhIHZhbHVlIGJldHdlZW4gMSBhbmQgMTAwLlxuZnVuY3Rpb24gbWFwQmVhY29uUlNTSShyc3NpKSB7XG4gICAgaWYgKHJzc2kgPj0gMClcbiAgICAgICAgcmV0dXJuIDE7IC8vIFVua25vd24gUlNTSSBtYXBzIHRvIDEuXG4gICAgaWYgKHJzc2kgPCAtMTAwKVxuICAgICAgICByZXR1cm4gMTAwOyAvLyBNYXggUlNTSVxuICAgIHJldHVybiAxMDAgKyByc3NpO1xufVxuLyoqXG4gKiAvL1RPRE86IEhBVkVOVCBET05FIFRISVMhISEhISEhISEhIVxuICogT25seSBzaG93IGJlYWNvbnMgdXBkYXRlZCBkdXJpbmcgdGhlIGxhc3QgNjAgc2Vjb25kcy5cbiAqIGZpeG1lOiBhZGQgcGFyYW0gdG8gdHdlYWsgdGhlIHRpbWVcbiAqL1xuLypcbiBmdW5jdGlvbiByZW1vdmVPbGRCZWFjb25zKCkge1xuIHZhciB0aW1lTm93ID0gRGF0ZS5ub3coKTtcbiBmb3IgKHZhciBrZXkgaW4gYmVhY29ucykge1xuXG4gdmFyIGJlYWNvbiA9IGJlYWNvbnNba2V5XTtcbiBpZiAoYmVhY29uLnRpbWVTdGFtcCArIDYwMDAwIDwgdGltZU5vdykge1xuIGRlbGV0ZSBiZWFjb25zW2tleV07XG4gfVxuIH1cbiB9Ki9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWFjb24tZWRkeXN0b25lLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQmVhY29uQ2xhc3MgfSBmcm9tIFwiLi9iZWFjb24tZGV2aWNlLmNsYXNzXCI7XG5sZXQgc2VsZjtcbi8vQEluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGtiZWFjb25JYmVhY29uU2VydmljZSB7XG4gICAgLy9maXhtZTogaG93IGlzIGliZWFjb24gcGFzc2VkIGluIT8/IT8hXG4gICAgY29uc3RydWN0b3Iod2ViRGVidWcpIHtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX3dlYkRlYnVnID0gd2ViRGVidWc7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGF0cyB3ZWJEZWJ1ZyAlbyAnLCB3ZWJEZWJ1Zyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3aGF0cyBzZWxmLl93ZWJEZWJ1ZyAlbyAnLCBzZWxmLl93ZWJEZWJ1Zyk7XG4gICAgICAgIHNlbGYuX2lzU2Nhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgc2VsZi5faUJlYWNvbnNPYmogPSB7fTtcbiAgICAgICAgc2VsZi5faUJlYWNvbnNTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gICAgICAgIHNlbGYuX2lCZWFjb25TY2FuU3RhdHVzU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICAgICAgICBpZiAoc2VsZi5fd2ViRGVidWcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGV2aWNlcmVhZHlcIiwgc2VsZi5vbkRldmljZVJlYWR5LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuX3dlYkRlYnVnID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZWxmLnNpbXVsYXRlSUJlYWNvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL1NFUlZJQ0UgQVBJIENBTExTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgZ2V0SUJlYWNvbnMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXR0aW5nIGliZWFjb25zJyk7XG4gICAgICAgIHJldHVybiBzZWxmLl9pQmVhY29uc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIC8vT04gQ09SRE9WQSBERVZJQ0UgUkVBRFkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBzaW11bGF0ZUlCZWFjb25zKCkge1xuICAgICAgICBpZiAodGhpcy5fd2ViRGVidWcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHdlYi4gcmV0dXJuaW5nIGZyb20gc2ltdWxhdGUgaSBiZWFjb25zLi4uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvdW50ZXJJZCA9IDA7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTk9URTogRmFrZSB0b2dnbGluZyBvZiBzY2FuIHN0YXR1cyBzdGF0ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBzZWxmLl9pc1NjYW5uaW5nID0gIXNlbGYuX2lzU2Nhbm5pbmc7XG4gICAgICAgICAgICBzZWxmLl9pQmVhY29uU2NhblN0YXR1c1N1YmplY3QubmV4dChzZWxmLl9pc1NjYW5uaW5nKTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdGYXV4SUJlYWNvbiA9IG5ldyBCZWFjb25DbGFzcy5JQmVhY29uRGV2aWNlQ2xhc3MoXCI0Nzo4MDo4RDpGNzowMjo2XCIgKyBjb3VudGVySWQudG9TdHJpbmcoKSwgJ2liZWFjb25EZWNraScsICdodHRwczovL3d3dy5hcHBsZS5jb20nLCAtODgsICdJQmVhY29uJyk7XG4gICAgICAgICAgICBzZWxmLl9pQmVhY29uc09ialtuZXdGYXV4SUJlYWNvbi5pZF0gPSBuZXdGYXV4SUJlYWNvbjtcbiAgICAgICAgICAgIGxldCBmYXV4SUJlYWNvbnNBcnIgPSBPYmplY3Qua2V5cyhzZWxmLl9pQmVhY29uc09iaikubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5faUJlYWNvbnNPYmpba2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnd2hhdHMgZWRkeWJlYWNvbiBhcnJheS4uLiAlbycsIGZhdXhJQmVhY29uc0FycilcbiAgICAgICAgICAgIHNlbGYuX2lCZWFjb25zU3ViamVjdC5uZXh0KGZhdXhJQmVhY29uc0Fycik7XG4gICAgICAgICAgICBjb3VudGVySWQgPSBjb3VudGVySWQgKyAxO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxufVxuaWYgKHRoaXMuX3dlYkRlYnVnID09PSBmYWxzZSkge1xuICAgIC8vREVMRUdBVEUgRk9SIE5BVElWRSBMQVlFUiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vRklYTUU6IFNISUZUIERFTEVHQVRFIElOV0FSRFMuLi4/Pz8gd2hhdHMgaW53YXJkc1xuICAgIC8vc2V0IGRlbGVnYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgbGV0IGRlbGVnYXRlID0gdGhpcy5pYmVhY29uLkRlbGVnYXRlKCk7XG4gICAgLy9zdWJzY3JpYmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKipcbiAgICAgQW4gT2JzZXJ2YWJsZSB0aGF0IHB1Ymxpc2hlcyBldmVudCBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnMgZWFjaCB0aW1lIHRoYXQgdGhlIGRldmljZSByYW5nZXMgYmVhY29ucy5cbiAgICAgTW9kZXJuIEFuZHJvaWQgYW5kIGlPUyBkZXZpY2VzIHJhbmdlIGFwcHJveGltYXRlbHkgb25jZSBwZXIgc2Vjb25kLlxuICAgICAqL1xuICAgIHNlbGYuX2lCZWFjb25zU3ViamVjdCA9IGRlbGVnYXRlLmRpZFJhbmdlQmVhY29uc0luUmVnaW9uKCk7XG4gICAgZGVsZWdhdGUuZGlkUmFuZ2VCZWFjb25zSW5SZWdpb24oKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkaWRSYW5nZUJlYWNvbnNJblJlZ2lvbjogJU8nLCBkYXRhKTtcbiAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcigpO1xuICAgIH0pO1xuICAgIC8qKlxuICAgICBBbiBPYnNlcnZhYmxlIHRoYXQgcHVibGlzaGVzIGV2ZW50IGRhdGEgdG8gaXQncyBzdWJzY3JpYmVycyB3aGVuIHRoZSBkZXZpY2UgYmVnaW5zIG1vbml0b3JpbmcgYSByZWdpb24uXG4gICAgICovXG4gICAgZGVsZWdhdGUuZGlkU3RhcnRNb25pdG9yaW5nRm9yUmVnaW9uKClcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZGlkU3RhcnRNb25pdG9yaW5nRm9yUmVnaW9uOiAlTycsIGRhdGEpO1xuICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgIEFuIE9ic2VydmFibGUgdGhhdCBwdWJsaXNoZXMgZXZlbnQgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzIHdoZW4gdGhlIHBob25lIGVudGVycyBhIHJlZ2lvbiB0aGF0IGl0IHdhcyBhc2tlZCB0byBtb25pdG9yLlxuICAgICBJZiB0aGUgdXNlciBoYXMgZ2l2ZW4gdGhlIGFwcCBBbHdheXMtTG9jYXRpb24gcGVybWlzc2lvbiwgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBldmVuIHdoZW4gdGhlIGFwcCBpcyBub3QgcnVubmluZyBvbiBpT1MuXG4gICAgIFRoZSBhcHAgd2lsbCBydW4gc2lsZW50bHkgaW4gdGhlIGJhY2tncm91bmQgZm9yIGEgc21hbGwgYW1vdW50IG9mIHRpbWUuXG4gICAgICovXG4gICAgZGVsZWdhdGUuZGlkRW50ZXJSZWdpb24oKVxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkaWRFbnRlclJlZ2lvbjogJU8nLCBkYXRhKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgQW4gT2JzZXJ2YWJsZSB0aGF0IHB1Ymxpc2hlcyBldmVudCBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnMgd2hlbiB0aGUgcGhvbmUgZXhpdHMgYSByZWdpb24gdGhhdCBpdCB3YXMgYXNrZWQgdG8gbW9uaXRvci5cbiAgICAgSWYgdGhlIHVzZXIgaGFzIGdpdmVuIHRoZSBhcHAgQWx3YXlzLUxvY2F0aW9uIHBlcm1pc3Npb24sIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgZXZlbiB3aGVuIHRoZSBhcHAgaXMgbm90IHJ1bm5pbmcgb24gaU9TLlxuICAgICBUaGUgYXBwIHdpbGwgcnVuIHNpbGVudGx5IGluIHRoZSBiYWNrZ3JvdW5kIGZvciBhIHNtYWxsIGFtb3VudCBvZiB0aW1lLlxuICAgICAqL1xuICAgIGRlbGVnYXRlLmRpZEV4aXRSZWdpb24oKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RpZCBleGl0IHJlZ2lvbjogJU8nLCBkYXRhKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgQW4gT2JzZXJ2YWJsZSB0aGF0IHB1Ymxpc2hlcyBldmVudCBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnMgd2hlbiB0aGUgZGV2aWNlIGZhaWxzIHRvIG1vbml0b3IgYSByZWdpb24uXG4gICAgICovXG4gICAgZGVsZWdhdGUubW9uaXRvcmluZ0RpZEZhaWxGb3JSZWdpb25XaXRoRXJyb3IoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RpZCBmYWlsIHRvIG1vbml0b3IgYSByZWdpb24gJU8nLCBkYXRhKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgQW4gT2JzZXJ2YWJsZSB0aGF0IHB1Ymxpc2hlcyBldmVudCBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnMgd2hlbiB0aGUgZGV2aWNlIGJlZ2lucyBhZHZlcnRpc2luZyBhcyBhbiBpQmVhY29uLlxuICAgICAqL1xuICAgIGRlbGVnYXRlLnBlcmlwaGVyYWxNYW5hZ2VyRGlkU3RhcnRBZHZlcnRpc2luZygpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZGlkIHN0YXJ0IGFkdmVydGlzaW5nIGFzIGFuIGliZWFjb24gJU8nLCBkYXRhKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgQW4gb2JzZXJ2YWJsZSB0aGF0IHB1Ymxpc2hlcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbG9jYXRpb24gcGVybWlzc2lvbiBhdXRob3JpemF0aW9uIHN0YXR1cy5cbiAgICAgKi9cbiAgICBkZWxlZ2F0ZS5kaWRDaGFuZ2VBdXRob3JpemF0aW9uU3RhdHVzKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkaWQgY2hhbmdlIGF1dGggc3RhdHVzICVPJywgZGF0YSk7XG4gICAgfSk7XG4gICAgLyoqXG4gICAgIC0gaWRlbnRpZmllciAgU3RyaW5nXG4gICAgIC0gdXVpZCAgU3RyaW5nOiBUaGUgcHJveGltaXR5IElEIG9mIHRoZSBiZWFjb24gYmVpbmcgdGFyZ2V0ZWQuIFRoaXMgdmFsdWUgbXVzdCBub3QgYmUgYmxhbmsgbm9yIGludmFsaWQgYXMgYSBVVUlELlxuICAgICAtIG1ham9yICBOdW1iZXI6ICBUaGUgbWFqb3IgdmFsdWUgdGhhdCB5b3UgdXNlIHRvIGlkZW50aWZ5IG9uZSBvciBtb3JlIGJlYWNvbnMuXG4gICAgIC0gbWlub3IgIE51bWJlcjogVGhlIG1pbm9yIHZhbHVlIHRoYXQgeW91IHVzZSB0byBpZGVudGlmeSBhIHNwZWNpZmljIGJlYWNvbi5cbiAgICAgLSBub3RpZnlFbnRyeVN0YXRlT25EaXNwbGF5ICBCT09MOiA/P1xuICAgICAqL1xuICAgIGxldCBiZWFjb25SZWdpb24gPSB0aGlzLmliZWFjb24uQmVhY29uUmVnaW9uKCdjaGltZXNCZWFjb24nLCAnMkYyMzQ0NTQtQ0Y2RC00QTBGLUFERjItRjQ5MTFCQTlGRkE2Jyk7XG4gICAgdGhpcy5pYmVhY29uLnN0YXJ0TW9uaXRvcmluZ0ZvclJlZ2lvbihiZWFjb25SZWdpb24pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ05hdGl2ZSBsYXllciByZWNpZXZlZCB0aGUgcmVxdWVzdCB0byBtb25pdG9yaW5nJyk7XG4gICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ05hdGl2ZSBsYXllciBmYWlsZWQgdG8gYmVnaW4gbW9uaXRvcmluZzogJywgZXJyb3IpO1xuICAgIH0pO1xufVxuLy9maXhtZTogQ0lSQ1VMQVIgUkVHSU9OIT8gY2FuIGRvIGxhdCBsbmcgcmFkaXVzIGFuZCBpZD8gdnMuIGJlYWNvblJFZ2lvbiB3aGF0cyB0aGUgZGlmZmVyZW5jZT9cbi8vdG9kbzogY2hlY2sgYnRcbi8vdG9kbzogZW5hYmxlL2Rpc2FibGUgYnRcbi8vdG9kbzogdGVzdCBpZiBtb25pb3RyaW5nIGlzIGF2YWlsYWJsZSBmb3IgY2xhc3MocmVnaW9uKSBmb3IgdGhlIHJlZ2lvbiB0eXBlPz9cbi8vdG9kbzogU1RPUCBNT05JVE9SSU5HXG4vL3RvZG86IHRlc3QgaWYgcmFuZ2luZyBpcyBhdmFpbGFiZWxlIGZvciB0aGUgZGV2aWNlIGluIHF1ZXN0aW9uXG4vL3RvZG86IFNUQVJUIFJBTkdJTkcgQkVBQ09OUyBJTiBSRUdJT04oUkVHSU9OKVxuLy90b2RvOiBTVE9QIFJBTkdJTkdcbi8vdG9kbzogY2hlY2sgYWQgb2tcbi8vdG9kbzogc3RhcnQgYWR2ZXJ0aXNpbmchXG4vL3RvZG86IHN0b3AgYWRcbi8vdG9kbzogaXMgYWR2ZXJ0aXNpbmc/XG4vL3RvZG86IGRlYnVnZ2luZyBub3RpZmljYXRpb25zXG4vL1RPRE86IElPUyBHRVQgQVVBVEggU1RBVFVTLiBSRVFVRVNUIFdIRU5JTiBVU0UgdnMuIEFMV0FZUyBBVVRIXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmVhY29uLWliZWFjb24uc2VydmljZS50cyIsImltcG9ydCBka2JlYWNvbkliZWFjb25TZXJ2aWNlIGZyb20gXCIuL2JlYWNvbi1pYmVhY29uLnNlcnZpY2VcIjtcbmltcG9ydCBka2JlYWNvbkVkZHlzdG9uZVNlcnZpY2UgZnJvbSBcIi4vYmVhY29uLWVkZHlzdG9uZS5zZXJ2aWNlXCI7XG4vKipcbiAqIE5PVEU6IGJ5IGRlZmF1bHQsIHdpdGhvdXQgcGFzc2luZyBpbiB0cnVlLFxuICogd2Ugd2lsbCBhc3N1bWUgd2ViRGVidWcgaXMgZmFsc2UgYW5kIHRodXMgdGhpcyBsaWIgaXMgdXNlZCBpbiBjb3Jkb3ZhIGVudlxuICovXG5sZXQgX2liZWFjb25TZXJ2aWNlID0gbnVsbDtcbmxldCBfZWRkeXN0b25lU2VydmljZSA9IG51bGw7XG5leHBvcnQgY29uc3QgdmVyc2lvbiA9ICcwLjAuMSc7XG5leHBvcnQgZnVuY3Rpb24gREtJYmVhY29uU2VydmljZSh3ZWJEZWJ1Zykge1xuICAgIGlmICghX2liZWFjb25TZXJ2aWNlKSB7XG4gICAgICAgIF9pYmVhY29uU2VydmljZSA9IG5ldyBka2JlYWNvbkliZWFjb25TZXJ2aWNlKHdlYkRlYnVnKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3doYXRzIF9pYmVhY29uU2VydmljZSAlbyAnLCBfaWJlYWNvblNlcnZpY2UpO1xuICAgIHJldHVybiBfaWJlYWNvblNlcnZpY2U7XG59XG5leHBvcnQgZnVuY3Rpb24gREtFZGR5c3RvbmVTZXJ2aWNlKHdlYkRlYnVnKSB7XG4gICAgaWYgKCFfZWRkeXN0b25lU2VydmljZSkge1xuICAgICAgICBfZWRkeXN0b25lU2VydmljZSA9IG5ldyBka2JlYWNvbkVkZHlzdG9uZVNlcnZpY2Uod2ViRGVidWcpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnd2hhdHMgX2VkZHlzdG9uZVNlcnZpY2UgJW8gJywgX2VkZHlzdG9uZVNlcnZpY2UpO1xuICAgIHJldHVybiBfZWRkeXN0b25lU2VydmljZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ka2JlYWNvbi50cyJdLCJzb3VyY2VSb290IjoiIn0=