import dkbeaconIbeaconService from "./beacon-ibeacon.service";
import dkbeaconEddystoneService from "./beacon-eddystone.service";
/**
 * NOTE: by default, without passing in true,
 * we will assume webDebug is false and thus this lib is used in cordova env
 */

let _ibeaconService: dkbeaconIbeaconService = null;
let _eddystoneService: dkbeaconEddystoneService = null;

export const version = '0.0.1';

export function DKIbeaconService(webDebug: Boolean): dkbeaconIbeaconService {

	if (!_ibeaconService) {
		_ibeaconService = new dkbeaconIbeaconService(webDebug)
	}

	console.log('whats _ibeaconService %o ', _ibeaconService)
	return _ibeaconService;
}

export function DKEddystoneService(webDebug: Boolean): dkbeaconEddystoneService {

	if (!_eddystoneService) {
		_eddystoneService = new dkbeaconEddystoneService(webDebug)
	}

	console.log('whats _eddystoneService %o ', _eddystoneService)
	return _eddystoneService;
}
