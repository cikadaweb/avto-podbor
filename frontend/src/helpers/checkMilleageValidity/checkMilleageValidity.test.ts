import { checkMileageValidity } from './checkMilleageValidity';
import { MileageStatuses } from '../../enums/MileageStatuses.enums';

describe('Function: checkMileageValidity', () => {
  it('should return "ROLLED_BACK" when mileage is less than 50% of the expected mileage', () => {
    const randomAge = 10;
    const expectedMileage = randomAge * 15000;
    const randomMileage = expectedMileage * 0.4;

    const result = checkMileageValidity(randomAge, randomMileage);
    expect(result).toBe(MileageStatuses.ROLLED_BACK);
  });

  it('should return "SUSPICIOUSLY_HIGH" when mileage is more than 150% of the expected mileage', () => {
    const randomAge = 5;
    const expectedMileage = randomAge * 15000;
    const randomMileage = expectedMileage * 1.6;

    const result = checkMileageValidity(randomAge, randomMileage);
    expect(result).toBe(MileageStatuses.SUSPICIOUSLY_HIGH);
  });

  it('should return "BELOW_AVERAGE" when mileage is less than 90% but more than 50% of the expected mileage', () => {
    const randomAge = 6;
    const expectedMileage = randomAge * 15000;
    const randomMileage = expectedMileage * 0.7;

    const result = checkMileageValidity(randomAge, randomMileage);
    expect(result).toBe(MileageStatuses.BELOW_AVERAGE);
  });

  it('should return "REALISTIC" when mileage is within the expected range (50% to 150% of expected)', () => {
    const randomAge = 8;
    const expectedMileage = randomAge * 15000;
    const randomMileage = expectedMileage * 1.2;

    const result = checkMileageValidity(randomAge, randomMileage);
    expect(result).toBe(MileageStatuses.REALISTIC);
  });

  it('should return "HEAVY_USAGE" when mileage is more than double the expected mileage', () => {
    const randomAge = 4;
    const expectedMileage = randomAge * 15000;
    const randomMileage = expectedMileage * 2.5;

    const result = checkMileageValidity(randomAge, randomMileage);
    expect(result).toBe(MileageStatuses.HEAVY_USAGE);
  });
});
