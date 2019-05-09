function solve(array) {

    for (let i = 0; i < array.length; i++) {
        let currentNumber = String(array[i]);
        let reversedNumber = currentNumber.split("").reverse().join("");

        if (currentNumber === reversedNumber) {
            console.log(true);
            ;
        } else {
            console.log(false);
        }

    }

}

solve([123, 323, 421, 121])