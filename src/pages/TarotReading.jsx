import { getReading } from '../tarot/fourtune-teller.ts'
import { Card } from '../elements/Card.jsx'

export const ThreeTarotReading = () => {
    const reading = getReading(3);
    return `
        <html class="tarot-bg">
            <head>
                <link rel="stylesheet" href="/assets/style/main.css"/>
                <script src="/assets/script/main.js"></script>
            </head>
            <body>
                <h1 class="text-center"> Three Card Tarot Reading </h1>
                <h3 class="text-center"> Click to reveal your Tarot reading for the answer you desire  </h3>
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

export const FiveTarotReading = () => {
    const reading = getReading(5);
    return `
        <html class="tarot-bg">
            <head>
                <link rel="stylesheet" href="/assets/style/main.css"/>
                <script src="/assets/script/main.js"></script>
            </head>
            <body>
                <h1 class="text-center"> Five Card Tarot Reading </h1>
                <h3 class="text-center"> Click to reveal your Tarot for determining a course of action  </h3>
                <div class="d-flex">
                    <div class="mx-auto w-1/3">
                        ${Card('Potential', reading[4])}
                    </div>  
                </div>
                <div class="d-flex">
                    <div class="mx-auto w-1/3">
                        ${Card('Past', reading[1])}
                    </div>  
                    <div class="mx-auto w-1/3">
                        ${Card('Present', reading[0])}
                    </div>  
                    <div class="mx-auto w-1/3">
                        ${Card('Future', reading[2])}
                    </div>  
                </div>
                <div class="d-flex">
                    <div class="mx-auto w-1/3">
                        ${Card('Reason', reading[3])}
                    </div>  
                </div>
            </body>
        </html>
    `
}
