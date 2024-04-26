import { getTarotDeck, cardBack } from '../tarot/deck.ts'

export const Home = () => {
    const deck = getTarotDeck();
    return `
        <html>
            <head>
                <link rel="stylesheet" href="/assets/style/main.css"/>
                <link rel="stylesheet" href="/assets/style/bootstrap.css"/>
                <script src="/assets/script/client.js"></script>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </head>
            <body class="tarot-bg">
                <h1 class="text-center"> The Fortune Teller </h1>
                <h3 class="text-center"> Select a reading that you would like to answer your questions </h3>
            
                <div class="d-flex flex-wrap">
                    <div class="mx-auto">
                        <h2 class="text-center"> Three Card Spread </h2>
                        <img class="card d-block mx-auto pointer scale" src="${cardBack}" 
                            onclick="window.location.href = '/reading/three'"
                            style="filter: hue-rotate(130deg)"
                        />
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center"> Five Card Spread </h2>
                        <img class="card d-block mx-auto pointer scale" src="${cardBack}" 
                            onclick="window.location.href = '/reading/five'"
                            style="filter: hue-rotate(240deg)"
                        />
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center"> Mirror Card Spread </h2>
                        <img class="card d-block mx-auto pointer scale" src="${cardBack}" 
                            onclick="window.location.href = '/reading/mirror'"
                            style="filter: hue-rotate(60deg)"
                        />
                    </div>
                    <div class="mx-auto">
                        <h2 class="text-center"> Explore Deck </h2>
                        <img class="card d-block mx-auto pointer scale" src="${cardBack}" 
                            onclick="window.location.href = '/tarot/index'"
                            style="filter: hue-rotate(180deg)"
                        />
                    </div>
                <div>

            </body>
        </html>
    `
}
