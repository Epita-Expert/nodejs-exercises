/**
 * compte le nombre de lettres passées en argument.  
 * Si tout autre chose et passé en argument renvoyer 0
 * @param {*} str 
 */
export const my_size_alpha = (str) => {
    if (typeof str !== 'string') return 0
    let count = 0
    for (const iterator of str) {
        count ++
    }
    return count
}