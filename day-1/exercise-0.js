/**
 * addition de la valeur de a + b.
 */
export const my_sum = (a, b) => {
  //Si aucune valeur n’est passée en a ou en b renvoyé 0.
  if (!a || !b) return 0;
  //Les arguments doivent être des number.
  if (typeof a !== "number" || typeof b !== "number") return 0;
  return a + b;
};
