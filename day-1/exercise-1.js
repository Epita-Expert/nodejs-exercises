/**
 * retourne toutes les lettres de l’alphabet en minuscule sur une seule ligne, 
 * dans l’ordre croissant à partir de la lettre ’a’ jusqu'à 'z'.
 */
export const my_display_alpha = () => { 
    let res = ''
    const alphabet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ]
    for (const letter of alphabet) {
        res += letter
    }
    return res
}