
const threeCardPast = document.getElementById ('card1');
const threeCardPresent = document.getElementById ('card2');
const threeCardFuture = document.getElementById ('card3');

//add the selected tarot card to card1

const spread= document.querySelector(".spread")
const selectBtn = document.querySelector(".select-btn");
const cardList = document.querySelectorAll('.content');

function showCardList() {
  cardList.forEach(elem => {elem.style.display ='block';
});
};

selectBtn.addEventListener('click',showCardList);

document.addEventListener('click', function closeCardList(event) {
  
  if (!cardList.contains(event.target)) {
    cardList.style.display = 'none';
  }
})