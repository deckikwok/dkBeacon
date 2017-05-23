export declare module BeaconTelemetryClass {
    class EddystoneTelemetry {
        private _name;
        private _url;
        private _nid;
        private _bid;
        private _voltage;
        private _temperature;
        private _rssi;
        constructor(name: string, url: string, nid: any, bid: any, voltage: any, temperature: number, rssi: number);
        readonly name: boolean;
        readonly url: string;
        readonly nid: any;
        readonly bid: any;
        readonly voltage: any;
        readonly temperature: number;
        readonly rssi: string;
    }
}
