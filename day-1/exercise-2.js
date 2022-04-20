import { my_display_alpha } from './exercise-1'

export const my_display_alpha_reverse = () => {
    const alphabet = my_display_alpha()
    let reverse = []
    for (let index = 0; index < alphabet.length; index++) {
        reverse[24 - index] = alphabet[index]
    }
    let res = ''
    for (const letter of reverse) {
        res += letter
    }
    return res
}