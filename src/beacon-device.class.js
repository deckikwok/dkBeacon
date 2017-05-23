export var BeaconClass;
(function (BeaconClass) {
    /***
     * DATA SAMPLE
     * advertising: ArrayBuffer
     * id: "47:80:8D:F7:02:66"
     * rssi: -76
     * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
     * __proto__: Object
     */
    class EddystoneDeviceClass {
        //private _advertising: ArrayBuffer;
        constructor(id, name, url, rssi, beaconType) {
            this._id = id;
            this._name = name;
            this._url = url;
            this._rssi = rssi;
            this._beaconType = beaconType;
            //this._advertising = advertising
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get url() {
            return this._url;
        }
        get rssi() {
            return this._rssi;
        }
        get beaconType() {
            return this._beaconType;
        }
    }
    BeaconClass.EddystoneDeviceClass = EddystoneDeviceClass;
    /***
     * DATA SAMPLE
     * advertising: ArrayBuffer
     * id: "47:80:8D:F7:02:66"
     * rssi: -76
     * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
     * __proto__: Object
     */
    class IBeaconDeviceClass {
        //private _advertising: ArrayBuffer;
        constructor(id, name, url, rssi, beaconType) {
            this._id = id;
            this._name = name;
            this._url = url;
            this._rssi = rssi;
            this._beaconType = beaconType;
            //this._advertising = advertising
        }
        get id() {
            return this._id;
        }
        get name() {
            return this._name;
        }
        get url() {
            return this._url;
        }
        get rssi() {
            return this._rssi;
        }
        get beaconType() {
            return this._beaconType;
        }
    }
    BeaconClass.IBeaconDeviceClass = IBeaconDeviceClass;
})(BeaconClass || (BeaconClass = {}));
