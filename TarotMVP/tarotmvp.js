function deckBuilder() {
    results = ['Fool', 'The Magician', 'The High Priestess', 'The Emperor', 'The Empress', 'The Heirophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit','Judgement', 'The Hanged Man', 'The Wheel of Fortune', 'Death', 'Temprence', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'];
    const values = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "P", "K", "Q", "Kg", ];
    const suits = ["Cups", "Swords", "Wands", "Pentacles"];
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        const value = values[v];
        const suit = suits[s];
        results.push({ value, suit });
      }
    } 
    cardIndex= Math.floor(Math.random() * results.length)
    return results[cardIndex]
  }