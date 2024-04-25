import { getTarotDeck } from '../tarot/deck.ts'
import { FaceUpCard } from '../elements/Card.jsx'

export const TarotIndex = () => {
    const deck = getTarotDeck();
    return `
        <html class="tarot-bg">
            <head>
                <link rel="stylesheet" href="/assets/style/main.css"/>
                <script src="/assets/script/main.js"></script>
            </head>
            <body>
                <h1 class="text-center"> Tarot Card Index </h1>
                <h3 class="text-center"> Explore all Tarot cards contained within the deck and their possibilities </h3>
                <div class="d-flex flex-wrap">
                    <h2 class="filter-btn pointer ms-auto" onclick="filterTarots()"> All </h2>
                    <h2 class="filter-btn pointer" onclick="filterTarots('major')"> Major Arcana </h2>
                    <h2 class="filter-btn pointer" onclick="filterTarots('Swords')"> Swords </h2>
                    <h2 class="filter-btn pointer" onclick="filterTarots('Cups')"> Cups </h2>
                    <h2 class="filter-btn pointer" onclick="filterTarots('Pentacles')"> Pentacles </h2>
                    <h2 class="filter-btn pointer me-auto" onclick="filterTarots('Wands')"> Wands </h2>
                </div>
                <div class="d-flex flex-wrap">
                    ${
                        deck.map((card) => {
                            return (`
                                <div class="mx-auto w-1/4" tarot-index suite="${card.suite}">
                                    ${FaceUpCard(card)}
                                </div>
                            `)
                        }).join('')
                    }
                </div>
            </body>
        </html>
    `
}
