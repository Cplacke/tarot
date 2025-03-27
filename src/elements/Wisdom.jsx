import { grantWisdom, grantLostWisdom } from '../util/wise-elder.ts'

export const Wisdom = (lost) => {
    let wisdom = grantWisdom();
    if (lost) {
        wisdom = grantLostWisdom();
    }
    return ` 
        <div class="p-2 w-100 w-lg-33 mx-auto caption m-0">
            ${wisdom.text} <h4 class="text-end"> ~ ${wisdom.author} </h4>
        </div>
    `
}