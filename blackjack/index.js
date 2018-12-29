var deck52 = ['AofD', 'KofD', 'QofD', 'JofD', '10ofD', '9ofD', '8ofD', '7ofD', '6ofD', '5ofD', '4ofD', '3ofD', '2ofD', 'AofH', 'KofH', 'QofH', 'JofH', '10ofH', '9ofH', '8ofH', '7ofH', '6ofH', '5ofH', '4ofH', '3ofH', '2ofH', 'AofS', 'KofS', 'QofS', 'JofS', '10ofS', '9ofS', '8ofS', '7ofS', '6ofS', '5ofS', '4ofS', '3ofS', '2ofS', 'AofC', 'KofC', 'QofC', 'JofC', '10ofC', '9ofC', '8ofC', '7ofC', '6ofC', '5ofC', '4ofC', '3ofC', '2ofC'] // dynamically generate this

function dealCards() {
  return deck52.splice(Math.floor(Math.random() * (deck52.length - 1)), 1);
}

function initializeGame() {
  draw1()
  draw1()
}

function draw2() {
  let playerHand = []
  for (let i = 0; i < 2; i++) {
    playerHand.push(dealCards());
  }  
  return playerHand
}

console.log(draw2())

function draw1(someval) {
  for (let i = 0; i < 1; i++) {
    playerHand.push(dealCards());
  }  
  return playerHand
}

console.log(draw1())