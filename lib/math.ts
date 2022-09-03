export function roundToDecimals(value: number, precision = 2) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

export const average = (arr: number[]) =>
  arr.reduce((p, c) => p + c, 0) / arr.length;

/**
 * Formats a large number into a readable string
 * @param orgNum positive or negative number
 * @param decimals number of decimal places to show
 */
export function numberFormatter(orgNum: number, decimals = 2): string {
  const num = Math.abs(orgNum);
  if (num >= 1e9) return `${roundToDecimals(orgNum / 1e9, decimals)}B`;
  else if (num >= 1e6) return `${roundToDecimals(orgNum / 1e6, decimals)}M`;
  else if (num >= 1e3) return `${roundToDecimals(orgNum / 1e3, decimals)}K`;
  else return `${Math.round(orgNum)}`;
}
