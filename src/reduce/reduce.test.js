const { totalMass } = require('./reduce');
const { solarSystemArray, solarSystemObject } = require('../data/solar-system');

describe.skip('totalMass', () => {
  test('should calculate the total mass', () => {
    expect(totalMass(solarSystemArray)).toBeCloseTo(446.731);
  });
});
