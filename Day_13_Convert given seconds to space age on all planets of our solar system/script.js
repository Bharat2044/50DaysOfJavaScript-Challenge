// function spaceAge(436575687) should return { "Mercury": 57.44, "Venus": 22.49, "Earth": 13.83, "Mars": 7.36, "Jupiter": 1.17, "Saturn": 0.47, "Uranus": 0.16, "Neptune": 0.08 }
// spaceAge(65965561) should return { 'Mercury': 8.68 'Venus': 3.4 'Earth': 2.09 'Mars': 1.11 'Jupiter': 0.18 'Saturn': 0.07 'Uranus': 0.02 'Neptune': 0.01 }


const orbitals = {
  'Mercury': 0.2408467,
  'Venus': 0.61519726,
  'Earth': 1,
  'Mars': 1.8808158,
  'Jupiter': 11.862615,
  'Saturn': 29.447498,
  'Uranus': 84.016846,
  'Neptune': 164.79132,
};

const earthYearInSeconds = 31557600;

const spaceAge = (seconds) => {
  const yearsInAllPlanets = {
      'Mercury': 0,
      'Venus': 0,
      'Earth': 0,
      'Mars': 0,
      'Jupiter': 0,
      'Saturn': 0,
      'Uranus': 0,
      'Neptune': 0
  }

  const year = seconds / earthYearInSeconds;

  Object.entries(orbitals).map(([planet, orbitalPeriod]) => {
      yearsInAllPlanets[planet] = parseFloat((year / orbitalPeriod).toFixed(2));
  });

  return yearsInAllPlanets;
}

console.log(spaceAge(436575687));