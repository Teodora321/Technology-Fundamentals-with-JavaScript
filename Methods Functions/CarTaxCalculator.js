function solve(power) {
    printCarTax(power)

    function printCarTax(power){

        let result = 0;

        if (power < 37) {
            result = power * 0.43;
        } else if (power >= 37 && power < 55) {
            result = power * 0.50;
        } else if (power >= 55 && power < 74) {
            result = power * 0.68;
        } else if (power >= 74 && power <= 110) {
            result = power * 1.38;
        } else if (power > 110) {
            result = power * 1.54;
        }
        console.log(result.toFixed(2)+ ' lv.');

    }
}
solve(57.50)
