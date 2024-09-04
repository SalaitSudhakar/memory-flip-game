const gameBoard = document.getElementById("game-board");
const cards = document.querySelectorAll(".card");







/* document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        "assets/html.svg", "assets/html.svg",
        "assets/css.png", "assets/css.png",
        "assets/js.png", "assets/js.png",
        "assets/tailwind.png", "assets/tailwind.png",
        "assets/react.png", "assets/react.png",
        "assets/nodejs.png", "assets/nodejs.png",
        "assets/mysql.png", "assets/mysql.png",
        "assets/express.png", "assets/express.png",
        "assets/mongodb.png", "assets/mongodb.png"
    ];
    let flippedCards = [];
    let matchedPairs = 0;

    const gameBoard = document.getElementById('gameBoard');
    const restartButton = document.getElementById('restartButton');

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function createCardElement(cardValue) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="front"></div>
            <div class="back">
                <img src="${cardValue}" alt="logo" width="40px" height="40px">
            </div>
        `;
        card.addEventListener('click', () => flipCard(card, cardValue));
        return card;
    }

    function flipCard(card, value) {
        if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            flippedCards.push({ card, value });
            
            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        if (card1.value === card2.value) {
            matchedPairs++;
            flippedCards = [];
            if (matchedPairs === cards.length / 2) {
                setTimeout(() => alert("Congratulations! You've found all pairs!"), 500);
            }
        } else {
            setTimeout(() => {
                card1.card.classList.remove('flipped');
                card2.card.classList.remove('flipped');
                flippedCards = [];
            }, 1000);
        }
    }

    function setupGameBoard() {
        shuffle(cards);
        gameBoard.innerHTML = '';
        matchedPairs = 0;
        flippedCards = [];
        cards.forEach(cardValue => {
            const cardElement = createCardElement(cardValue);
            gameBoard.appendChild(cardElement);
        });
    }

    restartButton.addEventListener('click', setupGameBoard);

    setupGameBoard();
});
 */