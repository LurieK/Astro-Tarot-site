
//selects the box user wants to place card in

// const threeCardPast = document.getElementById ('card1');
// const threeCardPresent = document.getElementById ('card2');
// const threeCardFuture = document.getElementById ('card3');



// function highlightBox() {
//   x.style.borderColor ='green';
// }

// threeCardFuture.addEventListener('click',highlightBox);

// document.addEventListener('click', function closeCardList(event) {
  
//   if (!cardList.contains(event.target)) {
//     cardList.style.display = 'none';
//   }
// })

//opens and closes CardList and Search 

const spread= document.querySelector(".spread")
const selectBtn = document.querySelector(".select-btn");
const cardList = document.querySelectorAll('.content');

function showCardList() {
  cardList.forEach(elem => {elem.style.display ='block';
});
};

selectBtn.addEventListener('click',showCardList);

document.addEventListener('click', function closeCardList(event) {
  
  if (!spread.contains(event.target)) {
    cardList.forEach(card => {card.style.display = 'none';});
  }
});