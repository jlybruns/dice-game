function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6 + 1);
        alert('You rolled a ' + roll);
        if (roll === 1) {
            alert('Game over. No more rolls');
            break;
        } else if ((roll >=2) && (roll <= 4)) {
            alert('You can roll again' + ' Your gold coin total so far is ' + goldCoins);
            continue;
        } else {
            goldCoins += roll;
            alert('You have ' + goldCoins + ' gold coins so far. Keep those dice hot!')
        }
    }
    alert('You win ' + goldCoins + ' gold coins!');
}