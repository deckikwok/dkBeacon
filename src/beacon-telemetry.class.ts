export module BeaconTelemetryClass {

   export class EddystoneTelemetry {

    //fixme: nid and bid is 'uint8 array?' what type is that/
    //fixme: is voltage number or?

    private _name: string;
    private _url: string;
    private _nid: any;
    private _bid: any;
    private _voltage: any;
    private _temperature: number;
    private _rssi: number;

    constructor(name: string,
      url: string,
      nid: any,
      bid: any,
      voltage: any,
      temperature: number,
      rssi: number) {

      this._name = name;
      this._url = url;
      this._nid = nid;
      this._bid = bid;
      this._voltage = voltage;
      this._temperature = temperature;
      this._rssi = rssi;
    }

    get name(): boolean {
      return this.name;
    }

    get url(): string {
      return this._url;
    }

    get nid(): any {
      return this._nid;
    }

    get bid(): any {
      return this._bid;
    }

    get voltage(): any {
      return this._voltage;
    }

    get temperature(): number {
      return this._temperature;
    }

    get rssi(): string {
      return this.rssi;
    }
  }
}
