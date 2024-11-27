import {MileageStatuses} from "../../enums/MileageStatuses.enums";

export const checkMileageValidity = (year: number, mileage: number): MileageStatuses => {
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - year;

    // Средний пробег в год, принят в 15,000 км
    const averageMileagePerYear = 15000;
    const expectedMileage = carAge * averageMileagePerYear;

    if (carAge < 0 || mileage < 0) {
        throw new Error('Некорректные данные: год выпуска или пробег не могут быть отрицательными.');
    }

    if (mileage < expectedMileage * 0.5) {
        return MileageStatuses.BELOW_AVERAGE; // Пробег существенно ниже ожидаемого
    } else if (mileage > expectedMileage * 1.5) {
        return MileageStatuses.SUSPICIOUSLY_HIGH; // Пробег слишком высок
    } else if (carAge <= 5 && mileage < 100000) {
        return MileageStatuses.ROLLED_BACK; // Пробег может быть скручен
    } else if (mileage > averageMileagePerYear * 2) {
        return MileageStatuses.HEAVY_USAGE; // Частая эксплуатация
    } else {
        return MileageStatuses.REALISTIC; // Пробег выглядит правдоподобно
    }
};
