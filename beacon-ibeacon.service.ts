//import {Injectable} from '@angular/core';
import {buildTarget} from "../app-environment.constants";
import {IBeacon, IBeaconDelegate} from 'ionic-native';
import {BehaviorSubject, Observable} from "rxjs";
import {BeaconClass} from "./beacon-device.class";

let self: any;

//@Injectable()
export class BeaconIbeaconService {
  private _iBeaconsObj: Object;
  private _iBeaconsSubject: BehaviorSubject<Array<any>>;

  constructor() {

    self = this;

    self._isScanning = false;
    self._iBeaconsObj = {};

    self._iBeaconsSubject = <BehaviorSubject<Array<any>>> new BehaviorSubject([]);
    self._iBeaconScanStatusSubject = <BehaviorSubject<boolean>> new BehaviorSubject(false);

    if (buildTarget === 'cordova') {
      document.addEventListener("deviceready", self.onDeviceReady, false);
    }

    if (buildTarget === 'web') {
      self.simulateIBeacons();
    }


  }


  //SERVICE API CALLS =================================================================

  //FIXME: NOT SURE CORRECT
  getIBeacons(): Observable<Array<any>> {
    return self._iBeaconsSubject.asObservable();
  }

  //ON CORDOVA DEVICE READY ===========================================================
  //TODO: NONE FOR NOW


  simulateIBeacons() {

    if (buildTarget !== 'web') {
      console.log('not web. returning from simulate i beacons...')
      return
    }

    let counterId = 0;

    setInterval(() => {
      /**
       * NOTE: Fake toggling of scan status state
       */
      self._isScanning = !self._isScanning;
      self._iBeaconScanStatusSubject.next(self._isScanning);
    }, 5000)

    setInterval(() => {
      let newFauxIBeacon = new BeaconClass.IBeaconDeviceClass(
        "47:80:8D:F7:02:6" + counterId.toString(),
        'ibeaconDecki',
        'https://www.apple.com',
        -88,
        'IBeacon'
      )
      self._iBeaconsObj[newFauxIBeacon.id] = newFauxIBeacon;

      let fauxIBeaconsArr = Object.keys(self._iBeaconsObj).map(
        (key) => {
          return self._iBeaconsObj[key]
        }
      )
      //console.log('whats eddybeacon array... %o', fauxEddyBeaconsArr)
      self._iBeaconsSubject.next(fauxIBeaconsArr)
      counterId = counterId + 1;
    }, 10000)
  }
}


if (buildTarget === 'cordova') {

//DELEGATE FOR NATIVE LAYER ======================================================================================

//FIXME: SHIFT DELEGATE INWARDS...
//set delegate -----------------------------------------------------------------------------------
  let delegate: IBeaconDelegate = IBeacon.Delegate();


//subscribe -----------------------------------------------------------------------------------
  /**
   An Observable that publishes event data to it's subscribers each time that the device ranges beacons.
   Modern Android and iOS devices range approximately once per second.
   */
  self._iBeaconsSubject = delegate.didRangeBeaconsInRegion();

  delegate.didRangeBeaconsInRegion()
          .subscribe(
            (data) => {
              console.log('didRangeBeaconsInRegion: %O', data)

            },
            (error) => {
              console.error();
            }
          );

  /**
   An Observable that publishes event data to it's subscribers when the device begins monitoring a region.
   */
  delegate.didStartMonitoringForRegion()
          .subscribe(
            (data) => {
              console.log('didStartMonitoringForRegion: %O', data)
            },
            (error) => {
              console.error();
            }
          );

  /**
   An Observable that publishes event data to it's subscribers when the phone enters a region that it was asked to monitor.
   If the user has given the app Always-Location permission, this function will be called even when the app is not running on iOS.
   The app will run silently in the background for a small amount of time.
   */
  delegate.didEnterRegion()
          .subscribe(
            (data) => {
              console.log('didEnterRegion: %O', data);
            }
          );


  /**
   An Observable that publishes event data to it's subscribers when the phone exits a region that it was asked to monitor.
   If the user has given the app Always-Location permission, this function will be called even when the app is not running on iOS.
   The app will run silently in the background for a small amount of time.
   */
  delegate.didExitRegion().subscribe(
    (data) => {
      console.log('did exit region: %O', data)
    }
  )

  /**
   An Observable that publishes event data to it's subscribers when the device fails to monitor a region.
   */
  delegate.monitoringDidFailForRegionWithError().subscribe(
    (data) => {
      console.log('did fail to monitor a region %O', data)
    }
  )
  /**
   An Observable that publishes event data to it's subscribers when the device begins advertising as an iBeacon.
   */
  delegate.peripheralManagerDidStartAdvertising().subscribe(
    (data) => {
      console.log('did start advertising as an ibeacon %O', data)
    }
  )

  /**
   An observable that publishes information about the location permission authorization status.
   */
  delegate.didChangeAuthorizationStatus().subscribe(
    (data) => {
      console.log('did change auth status %O', data)
    }
  )
  /**
   - identifier  String
   - uuid  String: The proximity ID of the beacon being targeted. This value must not be blank nor invalid as a UUID.
   - major  Number:  The major value that you use to identify one or more beacons.
   - minor  Number: The minor value that you use to identify a specific beacon.
   - notifyEntryStateOnDisplay  BOOL: ??
   */
  let beaconRegion = IBeacon.BeaconRegion('chimesBeacon', '2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6');

  IBeacon.startMonitoringForRegion(beaconRegion)
         .then(
           () => {
             console.log('Native layer recieved the request to monitoring')
           },
           (error) => {
             console.error('Native layer failed to begin monitoring: ', error)
           }
         );
}


//fixme: CIRCULAR REGION!? can do lat lng radius and id? vs. beaconREgion whats the difference?

//todo: check bt
//todo: enable/disable bt


//todo: test if moniotring is available for class(region) for the region type??
//todo: STOP MONITORING

//todo: test if ranging is availabele for the device in question
//todo: START RANGING BEACONS IN REGION(REGION)
//todo: STOP RANGING

//todo: check ad ok
//todo: start advertising!
//todo: stop ad
//todo: is advertising?

//todo: debugging notifications

//TODO: IOS GET AUATH STATUS. REQUEST WHENIN USE vs. ALWAYS AUTH

