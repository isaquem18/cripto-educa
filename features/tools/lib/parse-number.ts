export function parsePositiveNumber(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

export function parseNonNegativeNumber(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}
