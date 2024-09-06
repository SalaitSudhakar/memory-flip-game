const cardArray = [
  { name: "html", img: "assets/html.svg" },
  { name: "javascript", img: "assets/js.png" },
  { name: "react", img: "assets/react.png" },
  { name: "nodejs", img: "assets/node.png" },
  { name: "expressjs", img: "assets/express.png" },
  { name: "mongodb", img: "assets/mongodb.png" },
  { name: "html", img: "assets/html.svg" },
  { name: "javascript", img: "assets/js.png" },
  { name: "react", img: "assets/react.png" },
  { name: "nodejs", img: "assets/node.png" },
  { name: "expressjs", img: "assets/express.png" },
  { name: "mongodb", img: "assets/mongodb.png" },
];

const gameBoard = document.getElementById("game-board");
const winningMsg = document.getElementById("winning-msg");
const score = document.getElementById("score-value");
const restartBtn = document.getElementById("restart-btn");

let cardsFlipped = [];
let cardsMatched = [];
let flippedCardsId = [];
let gameStart = false;
let lockBoard = false;

// Shuffle cards
function shuffleCards() {
  cardArray.sort(() => 0.5 - Math.random());
}

// Create cards
function createCards() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const img = document.createElement("img");
    img.classList.add("front-face");
    img.setAttribute("src", "assets/flip.jpg");
    img.setAttribute("data-id", i);

    card.appendChild(img);
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll(".card");
  const optionOneId = flippedCardsId[0];
  const optionTwoId = flippedCardsId[1];

  if (optionOneId === optionTwoId) return; 

  if (cardsFlipped[0] === cardsFlipped[1]) {
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsMatched.push(cardsFlipped);
  } else {
    setTimeout(() => {
      const cardOneImg = cards[optionOneId].querySelector("img");
      const cardTwoImg = cards[optionTwoId].querySelector("img");

      cardOneImg.setAttribute("src", "assets/flip.jpg");      
      cardTwoImg.setAttribute("src", "assets/flip.jpg");
      cards[optionOneId].style.backgroundColor = "#0d0630";
      cards[optionTwoId].style.backgroundColor = "#0d0630";
    }, 1000);
  }


  cardsFlipped = [];
  flippedCardsId = [];
  score.textContent = cardsMatched.length;
  if (cardsMatched.length === (cardArray.length / 2)) {
    winningMsg.style.display = "block"
    winningMsg.textContent = "🥳 Congratulations! You found them all! 💥";
  }
}

function flipCard() {
  if (lockBoard) return; 
  let card = this;
  let cardImg = card.querySelector("img");
  let cardId = cardImg.getAttribute("data-id");

  if (flippedCardsId.includes(cardId)) return; 

  cardsFlipped.push(cardArray[cardId].name);
  flippedCardsId.push(cardId);

  cardImg.setAttribute("src", cardArray[cardId].img);
  card.style.backgroundColor = "white";

  if (cardsFlipped.length === 2) {
    lockBoard = true;
    setTimeout(() => {
      checkForMatch();
      lockBoard = false;
    }, 50);
  }
}

function resetGame() {
  cardsFlipped = [];
  cardsMatched = [];
  flippedCardsId = [];
  score.textContent = 0;
  winningMsg.style.display = "none";

  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  createCards();
}

restartBtn.addEventListener("click", resetGame);


shuffleCards();
createCards();
