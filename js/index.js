
var arrayOfQuotes = [
    {
        'author': 'Albert Einstein',
        'quote': 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },
    {
        'author': 'Mahatma Gandhi',
        'quote': 'Be the change that you wish to see in the world.'
    },
    {
        'author': 'Mark Twain',
        'quote': 'The secret of getting ahead is getting started.'
    },
    {
        'author': 'Steve Jobs',
        'quote': 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.'
    },
    {
        'author': 'Winston Churchill',
        'quote': 'Success is not final, failure is not fatal: It is the courage to continue that counts.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'It always seems impossible until it’s done.'
    },
    {
        'author': 'Oscar Wilde',
        'quote': 'Be yourself; everyone else is already taken.'
    },
    {
        'author': 'Henry Ford',
        'quote': 'Whether you think you can, or you think you can’t – you’re right.'
    },
    {
        'author': 'Confucius',
        'quote': 'Our greatest glory is not in never falling, but in rising every time we fall.'
    },
    {
        'author': 'Theodore Roosevelt',
        'quote': 'Do what you can, with what you have, where you are.'
    },
    {
        'author': 'J.K. Rowling',
        'quote': 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.'
    },
    {
        'author': 'William Shakespeare',
        'quote': 'To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.'
    },
    {
        'author': 'Abraham Lincoln',
        'quote': 'The best way to predict your future is to create it.'
    },
    {
        'author': 'Charles Darwin',
        'quote': 'It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.'
    },
    {
        'author': 'Benjamin Franklin',
        'quote': 'An investment in knowledge pays the best interest.'
    },
    {
        'author': 'Albert Schweitzer',
        'quote': 'The purpose of human life is to serve, and to show compassion and the will to help others.'
    },
    {
        'author': 'Leonardo da Vinci',
        'quote': 'Simplicity is the ultimate sophistication.'
    },
    {
        'author': 'Eleanor Roosevelt',
        'quote': 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {
        'author': 'Helen Keller',
        'quote': 'Alone we can do so little; together we can do so much.'
    },
    {
        'author': 'Ralph Waldo Emerson',
        'quote': 'What lies behind us and what lies before us are tiny matters compared to what lies within us.'
    },
    {
        'author': 'Mother Teresa',
        'quote': 'Not all of us can do great things. But we can do small things with great love.'
    },
    {
        'author': 'Albert Einstein',
        'quote': 'Imagination is more important than knowledge.'
    },
    {
        'author': 'Martin Luther King Jr.',
        'quote': 'I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low, the rough places will be made plain, and the crooked places will be made straight.'
    }
];

function generateQuote() {
    var randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
    document.querySelector('#quoteOutput').textContent = `"${arrayOfQuotes[randomIndex].quote}"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[randomIndex].author}`;
}