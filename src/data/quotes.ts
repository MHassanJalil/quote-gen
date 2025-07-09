// src/data/quotes.ts

export type Quote = {
  text: string;
  author: string;
  topics: string[];
};

export const quotes: Quote[] = [
  // 1. Life (5)
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    topics: ["life"],
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    topics: ["life"],
  },
  {
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    topics: ["life"],
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    topics: ["life"],
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    topics: ["life", "happiness"],
  },

  // 2. Inspiration (5)
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    topics: ["inspiration", "work"],
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
    topics: ["inspiration", "courage"],
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
    topics: ["inspiration", "action"],
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    topics: ["inspiration", "perseverance"],
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    topics: ["inspiration", "dreams"],
  },

  // 3. Success (5)
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    topics: ["success", "work"],
  },
  {
    text: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
    topics: ["success", "failure"],
  },
  {
    text: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    topics: ["success", "risk"],
  },
  {
    text: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    topics: ["success", "hard work"],
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
    topics: ["success", "character"],
  },

  // 4. Love (5)
  {
    text: "Love all, trust a few, do wrong to none.",
    author: "William Shakespeare",
    topics: ["love", "trust"],
  },
  {
    text: "Where there is love there is life.",
    author: "Mahatma Gandhi",
    topics: ["love", "life"],
  },
  {
    text: "The greatest thing you’ll ever learn is just to love and be loved in return.",
    author: "Moulin Rouge (film)",
    topics: ["love", "learning"],
  },
  {
    text: "Love does not dominate; it cultivates.",
    author: "Johann Wolfgang von Goethe",
    topics: ["love", "growth"],
  },
  {
    text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    author: "Lao Tzu",
    topics: ["love", "courage"],
  },

  // 5. Happiness (5)
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
    topics: ["happiness", "action"],
  },
  {
    text: "For every minute you are angry you lose sixty seconds of happiness.",
    author: "Ralph Waldo Emerson",
    topics: ["happiness", "time"],
  },
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
    topics: ["happiness", "self"],
  },
  {
    text: "Folks are usually about as happy as they make their minds up to be.",
    author: "Abraham Lincoln",
    topics: ["happiness", "mindset"],
  },
  {
    text: "The most important thing is to enjoy your life—to be happy—it's all that matters.",
    author: "Audrey Hepburn",
    topics: ["happiness", "life"],
  },

  // 6. Courage (5)
  {
    text: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    author: "Mark Twain",
    topics: ["courage", "fear"],
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
    topics: ["courage", "perseverance"],
  },
  {
    text: "You must do the thing you think you cannot do.",
    author: "Eleanor Roosevelt",
    topics: ["courage", "self"],
  },
  {
    text: "Bravery is being the only one who knows you're afraid.",
    author: "Franklin P. Jones",
    topics: ["courage", "bravery"],
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
    topics: ["courage", "life"],
  },

  // 7. Friendship (5)
  {
    text: "Friendship multiplies the good of life and divides the evil.",
    author: "Marcus Tullius Cicero",
    topics: ["friendship", "life"],
  },
  {
    text: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
    topics: ["friendship", "love"],
  },
  {
    text: "Friends show their love in times of trouble, not in happiness.",
    author: "Euripides",
    topics: ["friendship", "support"],
  },
  {
    text: "True friendship comes when the silence between two people is comfortable.",
    author: "David Tyson",
    topics: ["friendship", "silence"],
  },
  {
    text: "There are no strangers here; Only friends you haven’t yet met.",
    author: "William Butler Yeats",
    topics: ["friendship", "connection"],
  },

  // 8. Perseverance (5)
  {
    text: "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
    topics: ["perseverance", "endurance"],
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    topics: ["perseverance", "inspiration"],
  },
  {
    text: "The man who moves a mountain begins by carrying away small stones.",
    author: "Confucius",
    topics: ["perseverance", "action"],
  },
  {
    text: "Our greatest glory is not in never falling, but in rising every time we fall.",
    author: "Confucius",
    topics: ["perseverance", "resilience"],
  },
  {
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    topics: ["perseverance", "resilience"],
  },

  // 9. Change (5)
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    topics: ["change", "adaptation"],
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
    topics: ["change", "mindset"],
  },
  {
    text: "They always say time changes things, but you actually have to change them yourself.",
    author: "Andy Warhol",
    topics: ["change", "action"],
  },
  {
    text: "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
    author: "George Bernard Shaw",
    topics: ["change", "progress"],
  },
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    topics: ["change", "leadership"],
  },

  // 10. Wisdom (5)
  {
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
    topics: ["wisdom", "self"],
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    topics: ["wisdom", "humility"],
  },
  {
    text: "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    author: "Doug Larson",
    topics: ["wisdom", "listening"],
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Oprah Winfrey",
    topics: ["wisdom", "resilience"],
  },
  {
    text: "Education is the kindling of a flame, not the filling of a vessel.",
    author: "Socrates",
    topics: ["wisdom", "education"],
  },
];
