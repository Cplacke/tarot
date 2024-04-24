import { getTarotDeck } from './deck.ts';
import shuffleSeed from 'npm:shuffle-seed';

export const getReading = (count: number) => {

    const seed = Date.now();
    const deck = getTarotDeck();

    const shuffle1 = shuffleSeed.shuffle(deck, seed)
    const shuffle2 = shuffleSeed.shuffle(shuffle1, seed)

    return shuffle2.slice(0, count);
}