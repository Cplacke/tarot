import { getTarotDeck } from './deck.ts';

export const getReading = (count: number) => {

    const deck = getTarotDeck();
    deck.sort(() => ((Math.random()*10)-5))

    return deck.slice(0, count);
}