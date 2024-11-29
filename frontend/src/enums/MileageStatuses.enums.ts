export enum MileageStatuses {
  REALISTIC = 'REALISTIC', // Пробег выглядит правдоподобно
  ROLLED_BACK = 'ROLLED_BACK', // Пробег может быть скручен
  BELOW_AVERAGE = 'BELOW_AVERAGE', // Пробег ниже среднего, но не критично
  HEAVY_USAGE = 'HEAVY_USAGE', // Частая эксплуатация
  SUSPICIOUSLY_HIGH = 'SUSPICIOUSLY_HIGH', // Пробег слишком высок
}
