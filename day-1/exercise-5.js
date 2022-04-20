/**
 * renvoie un array tout les caractères passé en argument
 * @param {*} str
 */
export const my_array_alpha = (str) => {
  let array = [];
  let index = 0;
  for (const arg of str) {
    array[index] = arg;
    index++;
  }
  return array;
};
