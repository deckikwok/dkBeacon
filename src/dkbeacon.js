import dkbeaconIbeaconService from "./beacon-ibeacon.service";
import dkbeaconEddystoneService from "./beacon-eddystone.service";
/**
 * NOTE: by default, without passing in true,
 * we will assume webDebug is false and thus this lib is used in cordova env
 */
let _ibeaconService = null;
let _eddystoneService = null;
export const version = '0.0.1';
export function DKIbeaconService(webDebug) {
    if (!_ibeaconService) {
        _ibeaconService = new dkbeaconIbeaconService(webDebug);
    }
    console.log('whats _ibeaconService %o ', _ibeaconService);
    return _ibeaconService;
}
export function DKEddystoneService(webDebug) {
    if (!_eddystoneService) {
        _eddystoneService = new dkbeaconEddystoneService(webDebug);
    }
    console.log('whats _eddystoneService %o ', _eddystoneService);
    return _eddystoneService;
}
