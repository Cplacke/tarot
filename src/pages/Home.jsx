import { getTarotDeck, cardback } from '../tarot/deck.ts'

export const Home = () => {
    const deck = getTarotDeck();
    return `
        <html class="tarot-bg">
            <head>
                <link rel="stylesheet" href="/assets/style/main.css"/>
                <script src="/assets/script/main.js"></script>
            </head>
            <body>
                <h1 class="text-center"> The Fortune Teller </h1>
                <h3 class="text-center"> Select a reading that you would like to answer your questions </h3>
            
                <div class="d-flex">
                    <div class="mx-auto">
                        <h2 class="text-center"> Three Card Spread </h2>
                        <img class="card d-block mx-auto pointer scale" src="${cardback}" 
                            onclick="window.location.href = '/reading/three'"
                            style="filter: hue-rotate(130deg)"
                        />
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center"> Five Card Spread </h2>
                        <img class="card d-block mx-auto pointer scale" src="${cardback}" 
                            onclick="window.location.href = '/reading/five'"
                            style="filter: hue-rotate(240deg)"
                        />
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center"> Explore All Cards </h2>
                        <img class="card d-block mx-auto pointer scale" src="${cardback}" 
                            onclick="window.location.href = '/tarot/index'"
                            style="filter: hue-rotate(180deg)"
                        />
                    </div>
                <div>
            
            </body>
        </html>
    `
}
