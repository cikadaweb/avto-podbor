import { MileageStatuses } from '../../enums/MileageStatuses.enums';

export const checkMileageValidity = (
  age: number,
  mileage: number,
): MileageStatuses => {
  const averageMileagePerYear = 15000;
  const expectedMileage = age * averageMileagePerYear;

  if (age < 0 || mileage < 0) {
    throw new Error(
      'Некорректные данные: возраст или пробег не могут быть отрицательными.',
    );
  }

  if (mileage > expectedMileage * 2) {
    return MileageStatuses.HEAVY_USAGE;
  }

  if (mileage > expectedMileage * 1.5) {
    return MileageStatuses.SUSPICIOUSLY_HIGH;
  }

  if (mileage < expectedMileage * 0.5) {
    return MileageStatuses.ROLLED_BACK;
  }

  if (mileage < expectedMileage * 0.9) {
    return MileageStatuses.BELOW_AVERAGE;
  }

  return MileageStatuses.REALISTIC;
};
