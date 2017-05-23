export declare module BeaconClass {
    /***
     * DATA SAMPLE
     * advertising: ArrayBuffer
     * id: "47:80:8D:F7:02:66"
     * rssi: -76
     * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
     * __proto__: Object
     */
    class EddystoneDeviceClass {
        private _id;
        private _name;
        private _url;
        private _rssi;
        private _beaconType;
        constructor(id: string, name: string, url: string, rssi: number, beaconType: string);
        readonly id: string;
        readonly name: string;
        readonly url: string;
        readonly rssi: number;
        readonly beaconType: string;
    }
    /***
     * DATA SAMPLE
     * advertising: ArrayBuffer
     * id: "47:80:8D:F7:02:66"
     * rssi: -76
     * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
     * __proto__: Object
     */
    class IBeaconDeviceClass {
        private _id;
        private _name;
        private _url;
        private _rssi;
        private _beaconType;
        constructor(id: string, name: string, url: string, rssi: number, beaconType: string);
        readonly id: string;
        readonly name: string;
        readonly url: string;
        readonly rssi: number;
        readonly beaconType: string;
    }
}
