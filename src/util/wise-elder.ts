import shuffleSeed from 'npm:shuffle-seed';

export interface Quote {
    text: string,
    author: string
}

const knowledge = [
    { 
        author: "Rumi",
        text: "The wound is the place where the Light enters you." 
    },{ 
        author: "Meister Eckhart",
        text: "The eye with which I see God is the same eye with which God sees me." 
    },{ 
        author: "St. John of the Cross",
        text: "In the evening of life, we will be judged on love alone." 
    },{ 
        author: "Teresa of Ávila",
        text: "Let nothing disturb you, let nothing frighten you, all things are passing away: God never changes." 
    },{ 
        author: "Hafiz",
        text: "I wish I could show you when you are lonely or in darkness the astonishing light of your own being." 
    },{ 
        author: "Julian of Norwich",
        text: "All shall be well, and all shall be well, and all manner of things shall be well." 
    },{ 
        author: "Lao Tzu",
        text: "At the center of your being you have the answer; you know who you are and you know what you want." 
    },{ 
        author: "Kabir",
        text: "Wherever you are is the entry point." 
    },{ 
        author: "Thomas Merton",
        text: "We are already one. But we imagine that we are not. And what we have to recover is our original unity." 
    },{ 
        author: "Sri Aurobindo",
        text: "The mind has to be made calm and still. Then it can reflect the true knowledge." 
    },{ 
        author: "Ramana Maharshi",
        text: "Your own Self-Realization is the greatest service you can render the world." 
    },{ 
        author: "Paramahansa Yogananda",
        text: "The season of failure is the best time for sowing the seeds of success." 
    },{ 
        author: "Eckhart Tolle",
        text: "Realize deeply that the present moment is all you ever have." 
    },{ 
        author: "Thich Nhat Hanh",
        text: "The present moment is filled with joy and happiness. If you are attentive, you will see it." 
    },{ 
        author: "G.I. Gurdjieff",
        text: "Without self-knowledge, without understanding the working and functions of his machine, man cannot be free, he cannot govern himself and he will always remain a slave." 
    },{ 
        author: "Jiddu Krishnamurti",
        text: "It is no measure of health to be well adjusted to a profoundly sick society." 
    },{ 
        author: "Sadhguru",
        text: "The only way to experience true well-being is to turn inward. This is what yoga means – not up, not out, but in." 
    },{ 
        author: "Osho",
        text: "Be — don't try to become." 
    },{ 
        author: "Ralph Waldo Emerson",
        text: "What lies behind us and what lies before us are tiny matters compared to what lies within us." 
    },{ 
        author: "Carl Jung",
        text: "Who looks outside, dreams; who looks inside, awakes." 
    },{ 
        author: "Buddha",
        text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." 
    },{ 
        author: "Dalai Lama",
        text: "Happiness is not something ready-made. It comes from your own actions." 
    },{ 
        author: "Thich Nhat Hanh",
        text: "Peace is every step. The shining red sun is my heart." 
    },{ 
        author: "Buddha",
        text: "Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared." 
    },{ 
        author: "Pema Chödrön",
        text: "The most difficult times for many of us are the ones we give ourselves." 
    },{ 
        author: "Bhagavad Gita",
        text: "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions." 
    },{ 
        author: "Upanishads",
        text: "From the unreal lead me to the real; from darkness lead me to light; from death lead me to immortality." 
    },{ 
        author: "Rig Veda",
        text: "Truth is one; the wise call it by various names." 
    },{ 
        author: "Swami Vivekananda",
        text: "Arise, awake, and stop not until the goal is reached." 
    },{ 
        author: "Mahabharata",
        text: "Do not be led by others, awaken your own mind, amass your own experience, and decide for yourself your own path." 
    },{ 
        author: "Jesus Christ",
        text: "Love your neighbor as yourself." 
    },{ 
        author: "St. Augustine",
        text: "You have made us for yourself, O Lord, and our hearts are restless until they rest in you." 
    },{ 
        author: "Mother Teresa",
        text: "Not all of us can do great things. But we can do small things with great love." 
    },{ 
        author: "C.S. Lewis",
        text: "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else." 
    },{ 
        author: "St. Francis of Assisi",
        text: "Lord, make me an instrument of your peace. Where there is hatred, let me sow love." 
    }
]

const lost = [
    {   
        author: "J.R.R. Tolkien",
        text: "Not all those who wander are lost.",
    },{   
        author: "Sun Tzu",
        text: "In the midst of chaos, there is also opportunity.",
    },{   
        author: "Anonymous",
        text: "Sometimes you have to lose yourself to find yourself.",
    },{   
        author: "Johann Wolfgang von Goethe",
        text: "The soul that sees beauty may sometimes walk alone.",
    },{   
        author: "Alex Ebert",
        text: "To be lost is as legitimate a part of your process as being found.",
    },{   
        author: "Sue Fitzmaurice",
        text: "You must go on adventures to find out where you truly belong.",
    },{   
        author: "Rainer Maria Rilke",
        text: "The only journey is the one within.",
    },{   
        author: "Anonymous",
        text: "Getting lost is not a waste of time.",
    },{   
        author: "Anonymous",
        text: "When you are lost, look for the stars.",
    },{   
        author: "Anonymous",
        text: "Sometimes you find yourself in the middle of nowhere, and sometimes in the middle of nowhere, you find yourself.",
    }
]

export const grantWisdom = () => {
    const seed = Date.now();

    let wisdom = [];
    wisdom = shuffleSeed.shuffle(knowledge, seed);
    wisdom = shuffleSeed.shuffle(wisdom, seed);

    return wisdom[0];
}


export const grantLostWisdom = () => {
    const seed = Date.now();

    let wisdom = [];
    wisdom = shuffleSeed.shuffle(lost, seed);
    wisdom = shuffleSeed.shuffle(wisdom, seed);

    return wisdom[0];
}