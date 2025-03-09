export function isNormalInteger(str) {
  const n = Number(str);
  return Number.isInteger(n) && n > 0;
}

export const percentCompleted = (raised, required) => {
  if (!raised || !required || required <= 0) return 0; // Handle division by zero
  return Math.min((raised * 100) / required, 100); // Ensure percentage doesn't exceed 100%
};

export const compare = (a, b) => {
  return b.isActivated - a.isActivated; // More concise comparison
};
