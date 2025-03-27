import { getTarotDeck } from '../tarot/deck.ts'
import { Wisdom } from '../elements/Wisdom.jsx';

export const RouteNotFound = () => {
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
            <body class="tarot-bg my-5">
                <h1 class="text-center"> I cannot grant the wisdom you seek </h1>
                <div class="font-chancery" style="color: #926b4d; font-size: 200px; text-align: center;">
                404
                </div>
                <div class="mt-3">${Wisdom(true)}</div>
            </body>
        </html>
    `
}
