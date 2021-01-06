const haversine = (coords1, coords2) => {
  const R = 6371e3; // metres
  const φ1 = (coords1.latitude * Math.PI) / 180; // φ, λ in radians
  const φ2 = (coords2.latitude * Math.PI) / 180;
  const Δφ = ((coords2.latitude - coords1.latitude) * Math.PI) / 180;
  const Δλ = ((coords2.longitude - coords1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
};

export default useCalculateDistance = (locations) => {
  locations = locations.map((loc) => loc.coords);
  let distance = 0;
  for (let i = 1; i < locations.length; i++) {
    distance += haversine(locations[i - 1], locations[i]);
  }
  distance = Math.round((distance + Number.EPSILON) * 100) / 100;
  return [distance];
};
