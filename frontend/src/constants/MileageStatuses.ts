import {MileageStatuses} from "../enums/MileageStatuses.enums";

export const MileageStatusDescriptions: Record<MileageStatuses, string> = {
    [MileageStatuses.REALISTIC]: 'Похоже на правду',
    [MileageStatuses.ROLLED_BACK]: 'Пробег может быть скручен',
    [MileageStatuses.BELOW_AVERAGE]: 'Меньше, чем по статистике',
    [MileageStatuses.HEAVY_USAGE]: 'Частая эксплуатация',
    [MileageStatuses.SUSPICIOUSLY_HIGH]: 'Будьте осторожны',
};

export const MileageStatusColors: Record<MileageStatuses, 'success' | 'warning' | 'error' | 'secondary'> = {
    [MileageStatuses.REALISTIC]: 'success',
    [MileageStatuses.ROLLED_BACK]: 'error',
    [MileageStatuses.BELOW_AVERAGE]: 'warning',
    [MileageStatuses.HEAVY_USAGE]: 'warning',
    [MileageStatuses.SUSPICIOUSLY_HIGH]: 'error',
};