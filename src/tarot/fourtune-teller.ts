import { getTarotDeck } from './deck.ts';
import shuffleSeed from 'npm:shuffle-seed';

export interface readingOptions {
    count: number,
    reverse: boolean,
    majorOnly: boolean
}

export const getReading = (opts: readingOptions) => {
    const seed = Date.now();
    let deck = getTarotDeck(opts?.majorOnly);

    // reverse shuffle some values
    deck = deck.map((card) => {
        if (opts?.reverse) {
            const rand = Math.random()*10;
            if (rand < 2.5) {
                card.reversed = true;
            }
        }
        return card;
    })

    // shuffle deck cards
    deck = shuffleSeed.shuffle(deck, seed)
    deck = shuffleSeed.shuffle(deck, seed)


    return deck.slice(0, opts.count);
}