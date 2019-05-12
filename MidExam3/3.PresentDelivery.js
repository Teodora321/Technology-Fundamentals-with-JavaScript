function solve(input) {
    let houses = input[0].split("@")
        .map(Number);
    let santaIndex = 0;
    for (let i = 1; i <input.length-1 ; i++) {
        let jumpLength = +(input[i].split(' ')[1]);
        santaIndex = (santaIndex + jumpLength) % houses.length;
        if (houses[santaIndex]<=0){
            console.log(`House ${santaIndex} will have a Merry Christmas.`);
        }
        houses[santaIndex]-=2;
    }
    console.log(`Santa's last position was ${santaIndex}.`);
    let failedHouses = 0;
    for (let house of houses) {
        if (house > 0) {
            failedHouses++;
        }
    }

    if (failedHouses > 0) {
        console.log(`Santa has failed ${failedHouses} houses.`);
    } else {
        console.log('Mission was successful.');
    }


}

solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Merry Xmas!']);
