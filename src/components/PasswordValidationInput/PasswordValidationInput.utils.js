export function getFontSize(value, isPasswordVisible) {
  const defaultSize = "1.1em";
  if (value.length === 0) return defaultSize;
  if (!isPasswordVisible) return "2em";
  return defaultSize;
}
