import { cardback } from '../tarot/deck.ts'

export const Card = (title, card) => {
    return `
        <h2 class="text-center"> ${title} </h2>
        <img class="card d-block mx-auto pointer" face="${card.image}" src="${cardback}"
            onclick="reveal(event, '${title}')"
        />
        <h3 id="${title}-h3" class="hidden text-center"> ${card.name} </h3>
        <p id="${title}-p" class="hidden p-2">${card.interpretation}</p>
    `
}