// We have to see How to shuffle an array elements.

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
cards.sort((a,b) => Math.random()-0.5);
console.log(cards); // This is one way to shffle.

// Fisher-Yates Algorithm

function shuffle(){
    for(let i = (cards.length - 1); i>=0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        // Sawp the number from randomly generated index;
        [cards[i],cards[random]] = [cards[random],cards[i]];
    }
}
shuffle(cards);
console.log(cards);0