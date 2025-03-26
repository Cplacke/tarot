import { getTarotDeck } from './deck.ts';
import shuffleSeed from 'npm:shuffle-seed';

export const getReading = (count: number) => {

    const seed = Date.now();
    let deck = getTarotDeck();

    // reverse shuffle some values
    deck = deck.map((card) => {
        const rand = Math.random()*10;
        if (rand < 2.5) {
            // card.reversed = true;
        }
        return card;
    })

    // shuffle deck cards
    deck = shuffleSeed.shuffle(deck, seed)
    deck = shuffleSeed.shuffle(deck, seed)


    return deck.slice(0, count);
}