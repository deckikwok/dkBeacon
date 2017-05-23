export module BeaconClass {

  /***
   * DATA SAMPLE
   * advertising: ArrayBuffer
   * id: "47:80:8D:F7:02:66"
   * rssi: -76
   * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
   * __proto__: Object
   */
  export class EddystoneDeviceClass {

    private _id: string;
    private _name: string;
    private _url: string;
    private _rssi: number;
    private _beaconType: string;
    //private _advertising: ArrayBuffer;

    constructor(id: string,
      name: string,
      url: string,
      rssi: number,
      beaconType: string
    ) { //advertising: ArrayBuffer

      this._id = id;
      this._name = name;
      this._url = url;
      this._rssi = rssi;
      this._beaconType = beaconType;
      //this._advertising = advertising
    }

    get id(): string {
      return this._id;
    }

    get name(): string {
      return this._name;
    }

    get url(): string {
      return this._url;
    }

    get rssi(): number {
      return this._rssi;
    }

    get beaconType(): string {
      return this._beaconType;
    }
    /*
    get advertising(): ArrayBuffer {
      return this.advertising;
    }*/

    /*
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


     */
  }


  /***
   * DATA SAMPLE
   * advertising: ArrayBuffer
   * id: "47:80:8D:F7:02:66"
   * rssi: -76
   * timeStamp: Thu Jan 26 2017 21:56:13 GMT+0800 (SGT)
   * __proto__: Object
   */
  export class IBeaconDeviceClass {

    private _id: string;
    private _name: string;
    private _url: string;
    private _rssi: number;
    private _beaconType: string;
    //private _advertising: ArrayBuffer;

    constructor(id: string,
      name: string,
      url: string,
      rssi: number,
      beaconType: string) { //advertising: ArrayBuffer

      this._id = id;
      this._name = name;
      this._url = url;
      this._rssi = rssi;
      this._beaconType = beaconType;
      //this._advertising = advertising
    }

    get id(): string {
      return this._id;
    }

    get name(): string {
      return this._name;
    }

    get url(): string {
      return this._url;
    }

    get rssi(): number {
      return this._rssi;
    }

    get beaconType(): string {
      return this._beaconType;
    }
  }
}
