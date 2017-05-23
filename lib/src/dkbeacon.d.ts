import dkbeaconIbeaconService from "./beacon-ibeacon.service";
import dkbeaconEddystoneService from "./beacon-eddystone.service";
export declare const version = "0.0.1";
export declare function DKIbeaconService(webDebug: Boolean): dkbeaconIbeaconService;
export declare function DKEddystoneService(webDebug: Boolean): dkbeaconEddystoneService;
