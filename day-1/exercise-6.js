/**
 * compte le nombre d’élement contenu un dans un tableau passé en paramètre
 * @param {*} arr 
 * @returns 
 */
export const my_length_array = (arr) => {
  let count = 0;
  for (const iterator of arr) {
    count++;
  }
  return count;
};
