import { cardback } from '../tarot/deck.ts'

export const Card = (title, card) => {
    // face="${card.image}" src="${cardback}"
    return `
        <h2 class="text-center"> ${title} </h2>
        <img 
            class="card d-block mx-auto" src="${card.image}"
            onclick="reveal(event)"
        />
        <h3 class="text-center"> ${card.name} </h3>
        <p class="p-2">${card.interpretation}</p>
    `
}