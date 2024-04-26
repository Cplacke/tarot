import { getTarotDeck } from '../tarot/deck.ts'
import { FaceUpCard } from '../elements/Card.jsx'

export const TarotIndex = () => {
    const deck = getTarotDeck();
    return `
        <html class="tarot-bg">
            <head>
                <link rel="stylesheet" href="/assets/style/main.css"/>
                <link rel="stylesheet" href="/assets/style/bootstrap.css"/>
                <script src="/assets/script/client.js"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </head>
            <body class="tarot-bg">
                <h1 class="text-center"> Tarot Card Index </h1>
                <h3 class="text-center"> Explore all Tarot cards contained within the deck and their possibilities </h3>
                <div class="d-flex flex-wrap mb-4">
                    <h2 class="filter-btn pointer m-2" onclick="filterTarots()"> All </h2>
                    <h2 class="filter-btn pointer m-2" onclick="filterTarots('major')"> Major Arcana </h2>
                    <h2 class="filter-btn pointer m-2" onclick="filterTarots('Swords')"> Swords </h2>
                    <h2 class="filter-btn pointer m-2" onclick="filterTarots('Cups')"> Cups </h2>
                    <h2 class="filter-btn pointer m-2" onclick="filterTarots('Pentacles')"> Pentacles </h2>
                    <h2 class="filter-btn pointer m-2" onclick="filterTarots('Wands')"> Wands </h2>
                </div>
                <div class="d-flex flex-wrap">
                    ${
                        deck.map((card) => {
                            return (`
                                <div class="mx-auto w-100 w-lg-25" tarot-index suite="${card.suite}">
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
