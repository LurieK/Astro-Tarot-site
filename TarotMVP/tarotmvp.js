
    cards = ['Fool', 'The Magician', 'The High Priestess', 'The Emperor', 'The Empress', 'The Heirophant', 'The Lovers', 
    'The Chariot', 'Strength', 'The Hermit','Judgement', 'The Hanged Man', 'The Wheel of Fortune', 'Death', 'Temprence', 
    'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World', 'King of Wands', 'King of Cups', 'King of Pentacles', 'King of Swords',
    'Queen of Wands', 'Queen of Cups', 'Queen of Pentacles', 'Queen of Swords', 'Knight of Wands', 'Knight of Cups', 'Knight of Pentacles', 'Knight of Swords',
    'Page of Wands', 'Page of Cups', 'Page of Pentacles', 'Page of Swords', 'Ten of Wands', 'Ten of Cups', 'Ten of Pentacles', 'Ten of Swords',
    'Nine of Wands', 'Nine of Cups', 'Nine of Pentacles', 'Nine of Swords',
    'Eight of Wands', 'Eight of Cups', 'Eight of Pentacles', 'Eight of Swords',
    'Seven of Wands', 'Seven of Cups', 'Seven of Pentacles', 'Seven of Swords',
    'Six of Wands', 'Six of Cups', 'Six of Pentacles', 'Six of Swords',
    'Five of Wands', 'Five of Cups', 'Five of Pentacles', 'Five of Swords',
    'Four of Wands', 'Four of Cups', 'Four of Pentacles', 'Four of Swords',
    'Three of Wands', 'Three of Cups', 'Three of Pentacles', 'Three of Swords',
    'Two of Wands', 'Two of Cups', 'Two of Pentacles', 'Two of Swords',
    'Ace of Wands', 'Ace of Cups', 'Ace of Pentacles', 'Ace of Swords' ];
    
  

const button = document.querySelector(".button");
const cardChoice = document.querySelector(".card-choice"); 

// function showQuote() {
//     let randomIndex = Math.floor(Math.random()*quotes.length);
//     let randomQuote = quotes[randomIndex];
//     document.quoteDisplay.innerHTML = randomQuote
// };

button.addEventListener('click', function (){
    let randomIndex = Math.floor(Math.random()*cards.length);
    let randomCard = quotes[randomIndex];
    cardChoice.innerHTML = randomCard;
});


// button.addEventListener("click", function() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   quoteDisplay.textContent = quotes[randomIndex];
// });