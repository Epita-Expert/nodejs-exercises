/**
 * affiche POSITIF ou NEGATIF en fonction de l'entier passé en argument
 * Si nbr est négatif alors afficher NEGATIF. 
 * Si nbr est positif ou null ou undefined alors afficher POSITIF
 * Si nbr est égal à 0 alors il sera NEUTRAL
 * @param {*} nbr
 */
export const my_is_posi_neg = (nbr) => {
  return nbr == 0 ? "NEUTRAL" : nbr < 0 ? "NEGATIF" : "POSITIF"
}
