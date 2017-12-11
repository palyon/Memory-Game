// Set up initial state
var symbols = [ "∆", "ß", "£", "§", "•", "$", "+", "ø"];
var allCards = [];
var pickedCards = [];


for (var i=0; i<16; i++) {
    allCards.push({
        isFlipped: false,
        symbol: symbols[i/2]
    });
}
shuffle(allCards);


// ACTIONS
function flipCard(selectedCardIndex) {
    allCards[selectedCardIndex].isFlipped = !allCards[selectedCardIndex].isFlipped;
}


function pickCard(selectedCardIndex) {
    // Needs to check if you're allowed to pick this card in the first place
    if (allCards[selectedCardIndex].isFlipped == true) {
        return;
    }

    flipCard(selectedCardIndex);

    pickedCards.push(selectedCardIndex);

    // If i've just picked the second card, compare the two cards
    if ( pickedCards.length == 2 ) {
        // inspect both cards, compare their symbols
        var card1Index = pickedCards[0];
        var card2Index = pickedCards[1];

        // if card1's symbol doesn't match card 2's symbol, flip both cards back over
        if (  allCards[card1Index].symbol  !=  allCards[card2Index].symbol  ) {
            flipCard(card1Index);
            flipCard(card2Index);
        }
        pickedCards = [];

        checkForVictory();
    }
}


function checkForVictory() {
    // areAllCardsFlipped is either true or false
    var areAllCardsFlipped = allCards.every(function(card){
        return card.isFlipped;
    });

    if (areAllCardsFlipped) {
        alert('game over!');
    }
}






/**
 * pulled from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
