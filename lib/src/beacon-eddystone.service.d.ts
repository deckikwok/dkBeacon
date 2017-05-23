import { Observable } from 'rxjs';
export default class dkbeaconEddystoneService {
    private _eddyBeaconsObj;
    private _eddyBeaconsSubject;
    private _isScanning;
    private _eddyScanStatusSubject;
    private _webDebug;
    private ble;
    constructor(webDebug: Boolean);
    getEddyBeacons(): Observable<Array<any>>;
    getScanningStatus(): Observable<Boolean>;
    triggerScanEddystoneBeacons(): void;
    onDeviceReady(): void;
    scanEddystoneBeacons(): void;
    simulateEddystoneBeacons(): void;
}
