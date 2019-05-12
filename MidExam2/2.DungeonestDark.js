function solve(input) {
    let initialHealth = 100;
    let coins = 0;
    let rooms = input[0].split("|");
    let counter=0;

    for (let room of rooms) {
        let currentRoom = room.split(' ');

        let command = currentRoom[0];
        let number = +currentRoom[1];

        counter++;

        if (command === 'potion') {
            initialHealth += number;
            if (initialHealth > 100) {
                console.log(`You healed for ${100-(initialHealth - number)} hp.`);
                console.log(`Current health: 100 hp.`);
                initialHealth = 100
            } else {
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${initialHealth} hp.`)
            }
        } else if (command === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            let monster = command;
            initialHealth -= number
            if (initialHealth > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${counter}`);
                return;
            }
        }

    }
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${initialHealth}`);


}

solve(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])