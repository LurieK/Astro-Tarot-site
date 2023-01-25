
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



//selects the box user wants to place card in

const threeCardPast = document.getElementById ('card1');
const threeCardPresent = document.getElementById ('card2');
const threeCardFuture = document.getElementById ('card3');
const allThree = document.getElementsByClassName('.three-cards');
const spreadSpace= document.getElementsByClassName('.spread-space')


function highlightFirstBox() {
  threeCardPast.style.borderColor ='red';
}
threeCardPast.addEventListener('click', highlightFirstBox);



function highlightSecondBox() {
  threeCardPresent.style.borderColor ='red';
}

threeCardPresent.addEventListener('click', highlightSecondBox);

function highlightThirdBox() {
  threeCardFuture.style.borderColor ='red';
}

threeCardFuture.addEventListener('click', highlightThirdBox);

//unselect box when clicking outside of the square

// function resetCards(){
//   threeCardPast.style.borderColor = '';
//   threeCardPresent.style.borderColor = '';
//   threeCardFuture.style.borderColor = '';
// }

document.addEventListener('click', function unhighlightCard(event) {
  
  if (!spreadSpace.contains(event.target)) {
    allThree.forEach(box => {box.style.borderColor = '';});
  }
});
