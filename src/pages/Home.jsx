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
            
                <div class="d-flex flex-wrap mx-2 mt-5">
                    ${ReadingOption({
                        title: 'Three Card Spread',
                        desc: 'A three-card tarot reading is a simple yet powerful way to gain insight into a situation or question. It typically involves drawing three cards to represent the past, present, and future.',
                        route: 'reading/three',
                        hueRotate: 130,
                    })}

                    ${ReadingOption({
                        title: 'Five Card Spread',
                        desc: 'A five-card tarot reading offers a more detailed exploration of a situation or question compared to a three-card reading. It typically involves drawing five cards to represent different aspects of the issue at hand.',
                        route: 'reading/five',
                        hueRotate: 240,
                    })}

                    ${ReadingOption({
                        title: 'Mirror Card Spread',
                        desc: 'A relationship mirror tarot reading is specifically designed to explore and understand the dynamics within a relationship. This spread typically involves drawing cards to reflect the perspectives and feelings of both partners.',
                        route: 'reading/mirror',
                        hueRotate: 60,
                    })}

                    ${ReadingOption({
                        title: 'Major Arcana Reading',
                        desc: 'This type of reading is ideal for exploring profound themes, gaining deep insights into your personal journey, and receiving guidance on important decisions and transformative experiences.',
                        route: 'reading/major',
                        hueRotate: 220,
                    })}

                    ${ReadingOption({
                        title: 'Explore Deck',
                        desc: 'Learning about the history, symbolism, and meanings of tarot cards can enhance your knowledge and appreciation of this ancient practice.',
                        route: 'tarot/index',
                        hueRotate: 180,
                    })}
                <div>

                <div class="caption mx-5 mt-5 px-3 py-4"> 
                    <h3 class="text-center"> What are Tarot Cards? </h3>
                    <p>Tarot cards are a deck of <span class="font-tarot">78</span> cards, each with its own unique imagery, symbolism, and story. They are used as a tool for divination, self-reflection, and gaining insight into various aspects of life. The deck is divided into two main sections: the Major Arcana, which consists of <span class="font-tarot">22</span> cards representing significant life events and spiritual lessons, and the Minor Arcana, which includes <span class="font-tarot">56</span> cards that reflect everyday experiences and challenges. Each card holds a specific meaning and can be interpreted in various ways depending on the context of the reading.</p>
                    <p>The allure of tarot cards lies in their ability to tap into the subconscious mind and provide a deeper understanding of one's thoughts, emotions, and circumstances. Many people are drawn to tarot for its mystical and enigmatic nature, as well as its potential to offer guidance and clarity in times of uncertainty. Whether used for personal growth, decision-making, or exploring the unknown, tarot cards continue to captivate and inspire those who seek to uncover the hidden truths within themselves and the world around them. </p>
                </div

            </body>
        </html>
    `
}

const ReadingOption = (options) => {
    const { title, hueRotate, desc, route } = options;
    return `
        <div class="mx-auto w-100 w-lg-33 my-4">
            <h2 class="text-center"> ${title} </h2>
            <img class="card d-block mx-auto my-2 pointer scale" src="${cardBack}" 
                onclick="
                    this.classList.add('flip');
                    console.log('this', this.classList);
                    setTimeout(() => {
                        this.classList.remove('flip');
                        window.location.href = '${route}';
                    }, 320);
                "
                style="filter: hue-rotate(${hueRotate}deg)"
            />
            <p class="p-2"> ${desc} </p>
        </div>
    `
}