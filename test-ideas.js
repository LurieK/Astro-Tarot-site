
const threeCardPast = document.getElementById ('card1');
const threeCardPresent = document.getElementById ('card2');
const threeCardFuture = document.getElementById ('card3');

//add the selected tarot card to card1

const spread= document.querySelector('.spread'),
selectBtn= spread.querySelector('.select-btn'),

selectBtn.addEventListener('click',()=> {

  spread.classList.toggle('active';)
})