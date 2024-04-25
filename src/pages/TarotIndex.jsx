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
                    ${
                        deck.map((card) => {
                            return (`
                                <div class="mx-auto w-1/4">
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
