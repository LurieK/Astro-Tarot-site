
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

//When selecting a card from the dropdown, that card and it's meaning appears//

//the fool
const theFool = document.getElementById('fool-meaning');
const foolDrpDwn =document.getElementById('fool');

function showFool(){
  theFool.style.display = 'block';
}

foolDrpDwn.addEventListener('click', showFool);

//the Magician
const theMag = document.getElementById('magician-meaning');
const magDrpDwn =document.getElementById('magician');

function showMag(){
  theMag.style.display = 'block';
}

magDrpDwn.addEventListener('click', showMag);
// the High priestess

const thePriestess = document.getElementById('priestess-meaning');
const priestessDrpDwn =document.getElementById('priestess');

function showPriestess(){
  thePriestess.style.display = 'block';
}

priestessDrpDwn.addEventListener('click', showPriestess);
// the empress
// the emperor
// the heirphant
// the lovers
// the chariot
// strength
// the hermit
// the Wheel
// justice
// the hanged man 
// death
// temprence
// the devil 
// the tower
// the Star 
// the moon 
// the sun 
// judgement
// the world 


//unselect box when clicking outside of the square

// function resetCards(){
//   threeCardPast.style.borderColor = '';
//   threeCardPresent.style.borderColor = '';
//   threeCardFuture.style.borderColor = '';
// }

// document.addEventListener('click', function unhighlightCard(event) {
  
//   if (!spreadSpace.contains(event.target)) {
//     allThree.forEach(box => {box.style.borderColor = '';});
//   }
// });
