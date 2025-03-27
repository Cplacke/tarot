import { getReading } from '../tarot/fourtune-teller.ts'
import { Card } from '../elements/Card.jsx'
import { Wisdom } from '../elements/Wisdom.jsx';

export const ThreeTarotReading = () => {
    const reading = getReading({ count: 3 });
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
                <h1 class="text-center"> Three Card Tarot Reading </h1>
                ${Wisdom()}
                <h3 class="text-center"> Click to reveal your Tarot reading for the answer you desire  </h3>
                <div class="d-flex flex-wrap mt-5">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Past', reading[0])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33 delay-1">
                        ${Card('Present', reading[1], 'delay-1')}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33 delay-2">
                        ${Card('Future', reading[2], 'delay-2')}
                    </div>  
                </div>
            </body>
        </html>
    `
}

export const FiveTarotReading = () => {
    const reading = getReading({ count: 5 });
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
                <h1 class="text-center"> Five Card Tarot Reading </h1>
                ${Wisdom()}
                <h3 class="text-center"> Click to reveal your Tarot for determining a course of action  </h3>
                <div class="d-flex mt-5">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Potential', reading[4])}
                    </div>  
                </div>
                <div class="d-flex flex-wrap">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Past', reading[1])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Present', reading[0])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Future', reading[2])}
                    </div>  
                </div>
                <div class="d-flex">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Reason', reading[3])}
                    </div>  
                </div>
            </body>
        </html>
    `
}

export const MirrorTarotReading = () => {
    const reading = getReading({ count: 8 });
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
                <h1 class="text-center"> Mirror Spread Tarot Reading </h1>
                ${Wisdom()}
                <h3 class="text-center"> Click to reveal your Tarot for determining a course of action  </h3>
                <div class="d-flex mt-5">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Yourself', reading[0])}
                    </div>  
                </div>
                <div class="d-flex flex-wrap">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('View of Other', reading[1])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('View of Themselves', reading[2])}
                    </div>  
                </div>
                <div class="d-flex flex-wrap">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('What they Represent to you', reading[3])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('What you Represent to them', reading[4])}
                    </div>  
                </div>
                <div class="d-flex flex-wrap">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Relationship Obstacles', reading[5])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Relationship Strengths', reading[6])}
                    </div>  
                </div>
                <div class="d-flex">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Probable Result', reading[7])}
                    </div>  
                </div>
            </body>
        </html>
    `
}

export const MajorTarotReading = () => {
    const reading = getReading({ count: 6, majorOnly: true });
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
                <h1 class="text-center"> Major Arcana Tarot Reading </h1>
                ${Wisdom()}
                <h3 class="text-center"> Click to reveal your Tarot reading for the answer you desire </h3>
                <div class="d-flex flex-wrap mt-5">
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('First', reading[0])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Second', reading[1])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Third', reading[2])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Fourth', reading[3])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Fifth', reading[4])}
                    </div>  
                    <div class="mx-auto w-100 w-lg-33">
                        ${Card('Sixth', reading[5])}
                    </div>  
                </div>
            </body>
        </html>
    `
}
