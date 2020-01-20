main.js

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
];

cardsInPlay,push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = [2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry try again.");
		}
	}
};

function createBoard() {
	for (var i =0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)
	}
};
function flipCard(){
	let cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch;
if(cardInPlay.length === 2){
	checkForMatch();
}

};
function createBoard(){
for (let i = 0; i < cards.length, i++){
	let cardElement = document.createElement('img');
	cardElement.setAttribute('Back', 'images.back.png');
	cardElement.setAttribute('data-id', i);
	document.getElementById('game-board').appendChild(cardElement);

	cardElement.addEventListener('click', flipCard);
}
};
createBoard();

<script type="text/javascript" src="js/main.js"> </script>


