const rateAInDollarsPerKwh = 0.15; 
const loadProfileEvPerMile = 0.3;
const rateBFlatInDollarsPerKwh = 0.08;
const rateBTouInDollarsPerKwh = 0.20;

export function getRateABeforeEv(loadProfilesHome) {
  return loadProfilesHome.reduce((accumulator, [_, loadProfileAtHour]) => {
    return accumulator + (loadProfileAtHour * rateAInDollarsPerKwh);
  }, 0);
}

export function getRateAAfterEv(loadProfilesHome, mileage) {
  return loadProfilesHome.reduce((accumulator, [_, loadProfileAtHour]) => {
    return accumulator + (loadProfileAtHour * rateAInDollarsPerKwh);
  }, loadProfileEvPerMile * mileage * rateAInDollarsPerKwh);
}

export function getRateBBeforeEv(loadProfilesHome) {
  return loadProfilesHome.reduce((accumulator, [hour, loadProfileAtHour]) => {
    return (accumulator + (loadProfileAtHour * (hour >= 12 && hour <= 18)
    ? rateBTouInDollarsPerKwh 
    : rateBFlatInDollarsPerKwh));
  }, 0);
}

export function getRateBAfterEv(loadProfilesHome, mileage, isChargedDuringTOU) {
  const additionalCostOfEv = loadProfileEvPerMile * mileage * (isChargedDuringTOU 
  ? rateBTouInDollarsPerKwh 
  : rateBFlatInDollarsPerKwh);

  return loadProfilesHome.reduce((accumulator, [hour, loadProfileAtHour]) => {
    return (accumulator + (loadProfileAtHour * (hour >= 12 && hour <= 18)
      ? rateBTouInDollarsPerKwh 
      : rateBFlatInDollarsPerKwh)
    );
  }, additionalCostOfEv);
}