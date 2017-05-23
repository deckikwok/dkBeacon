import { Observable } from "rxjs";
export default class dkbeaconIbeaconService {
    private _iBeaconsObj;
    private _iBeaconsSubject;
    private _webDebug;
    private ibeacon;
    constructor(webDebug: Boolean);
    getIBeacons(): Observable<Array<any>>;
    simulateIBeacons(): void;
}
