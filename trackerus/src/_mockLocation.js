import * as Location from "expo-location";

const tenMetersWithDegree = 0.0001;

const getLocation = (increment) => {
  let r1 = Math.floor(Math.random() * 5);
  let r2 = Math.floor(Math.random() * 5);
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude:
        -122.084 + increment * tenMetersWithDegree * r1 * Math.pow(-1, r1),
      latitude:
        37.4219983 + increment * tenMetersWithDegree * r2 * Math.pow(-1, r2)
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
