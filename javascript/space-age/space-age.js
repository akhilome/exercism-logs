export const age = (planet = 'earth', ageInSecs = 0) => {
  const earthYears = ageInSecs / 31557600;
  const toFixed = num => Number(num.toFixed(2));
  const getEquivYears = factor => toFixed(earthYears / factor);
  switch (planet) {
    case 'mercury':
      return getEquivYears(0.2408467);
    case 'venus':
      return getEquivYears(0.61519726);
    case 'mars':
      return getEquivYears(1.8808158);
    case 'jupiter':
      return getEquivYears(11.862615);
    case 'saturn':
      return getEquivYears(29.447498);
    case 'uranus':
      return getEquivYears(84.016846);
    case 'neptune':
      return getEquivYears(164.79132);
    default:
      return toFixed(earthYears);
  }
};
