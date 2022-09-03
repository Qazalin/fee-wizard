export function roundToDecimals(value: number, precision = 2) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export const average = (arr: number[]) =>
  arr.reduce((p, c) => p + c, 0) / arr.length;
