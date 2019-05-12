function solve(params) {

    let days = +params.shift();
    let users = +params.shift();
    let priceForSearch = +params.shift();
    let sum = 0;

    for (let j = 1; j <= users; j++) {
        let current = +params[j - 1];
        if (current === 1 && j % 3 !== 0) {
            sum += priceForSearch * 2;

        } else if (current > 1 && current <= 5 && j % 3 !== 0) {
            sum += priceForSearch;

        } else if (current === 1 && j % 3 === 0) {
            sum += (priceForSearch * 2) * 3;

        } else if (current > 1 && current <= 5 && j % 3 === 0) {
            sum += priceForSearch * 3;

        }

    }

    let totalSum = sum * days;
    console.log(`Total money earned for ${days} days: ${totalSum.toFixed(2)}`)


}

solve(['5', '2', '5.5', '6', '1'])