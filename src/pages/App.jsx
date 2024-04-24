import { getReading } from '../tarot/fourtune-teller.ts'
import { Card } from '../elements/Card.jsx'

export const App = () => {
    const reading = getReading(3);
    return `
        <html class="tarot-bg">
            <head>
                <link rel="stylesheet" href="/assets/style/main.css"/>
                <script src="/assets/script/main.js"></script>
            </head>
            <body>
                <h1 class="text-center"> Fortune Teller </h1>
                <div class="d-flex">

                    <div class="mx-auto w-1/3">
                        ${Card('Past', reading[0])}
                    </div>  
                    <div class="mx-auto w-1/3">
                        ${Card('Present', reading[1])}
                    </div>  
                    <div class="mx-auto w-1/3">
                        ${Card('Future', reading[2])}
                    </div>  

                </div>
            </body>
        </html>
    `
}
