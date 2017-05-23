export var BeaconTelemetryClass;
(function (BeaconTelemetryClass) {
    class EddystoneTelemetry {
        constructor(name, url, nid, bid, voltage, temperature, rssi) {
            this._name = name;
            this._url = url;
            this._nid = nid;
            this._bid = bid;
            this._voltage = voltage;
            this._temperature = temperature;
            this._rssi = rssi;
        }
        get name() {
            return this.name;
        }
        get url() {
            return this._url;
        }
        get nid() {
            return this._nid;
        }
        get bid() {
            return this._bid;
        }
        get voltage() {
            return this._voltage;
        }
        get temperature() {
            return this._temperature;
        }
        get rssi() {
            return this.rssi;
        }
    }
    BeaconTelemetryClass.EddystoneTelemetry = EddystoneTelemetry;
})(BeaconTelemetryClass || (BeaconTelemetryClass = {}));
