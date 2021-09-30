var firstCard = 10
var secondCard= 4
var cards = [firstCard, secondCard]
var sum = firstCard + secondCard 
var hasBlackJack = false
var isAlive = true
var message = ""
var messageEl = document.getElementById("message-el")
var sumEl = document.getElementById("sum-el")
var cardEl = document.getElementById("card-el")

function startGame() {
    renderGame()
}


function renderGame(){
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"

    } else if (sum === 21) {
        message = "Woohoo! You've got blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    var card = 3
    sum += card 
    renderGame()
}