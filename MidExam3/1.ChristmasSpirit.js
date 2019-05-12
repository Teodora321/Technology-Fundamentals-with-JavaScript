function solve(input) {
    let quantity = +input[0];
    let days = +input[1];
    let christmasSpirit = 0;
    let money = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 11 === 0) {
            quantity += 2;
        }

        if (i % 2 === 0) {
            money += quantity * 2;
            christmasSpirit += 5;
        }
        if (i % 3 === 0) {
            money += quantity * 3;
            money += quantity * 5;
            christmasSpirit += 13;
        }
        if (i % 5 === 0) {

            money += quantity * 15;
            christmasSpirit += 17;
            if (i % 3 === 0) {
                christmasSpirit += 30;
            }
        }
        if (i % 10 === 0) {
            christmasSpirit -= 20;
            money += 23;
            if (i === 10 && days % 10 === 0) {
                christmasSpirit -= 30;

            }
        }


    }
    console.log(`Total cost: ${money}`);
    console.log(`Total spirit: ${christmasSpirit}`)


}

solve(['3', '20'])