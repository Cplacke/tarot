import { cardBack } from '../tarot/deck.ts'

export const Card = (title, card, classList='') => {
    return `
        <h2 class="text-center"> ${title} </h2>
        <img class="card d-block mx-auto pointer ${card.reversed ? 'rotate-180' : ''} ${classList}" face="${card.image}" src="${cardBack}"
            onclick="reveal(event, '${title.replace(/\s+/g, '-')}')"
        />
        <h3 id="${title.replace(/\s+/g, '-')}-h3" class="d-none text-center"> ${card.name} </h3>
        <p id="${title.replace(/\s+/g, '-')}-p" class="d-none p-2">${
            card.reversed ? card.meaning.reversed : card.meaning.upright
        }</p>
    `
}

export const FaceUpCard = (card) => {
    // <p class="p-2 caption">${card.description}</p>
    return `
        <img class="card d-block mx-auto pointer" src="${card.image}"/>
        <h3 class="text-center"> ${card.name} </h3>
        <p class="p1-2 px-3">${card.interpretation}</p>
    `
}