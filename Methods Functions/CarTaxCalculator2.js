function solve(power, age) {
    let baseTax = calculateBaseTax(power);
    let carCoefficient = calculateCoefficient(age);

    let totalPrice = baseTax * carCoefficient;
    console.log(totalPrice.toFixed(2) + ' lv.');

    function calculateBaseTax(power) {

        let tax = 0;

        if (power < 37) {
            tax = power * 0.43;
        } else if (power >= 37 && power < 55) {
            tax = power * 0.50;
        } else if (power >= 55 && power < 74) {
            tax = power * 0.68;
        } else if (power >= 74 && power <= 110) {
            tax = power * 1.38;
        } else if (power > 110) {
            tax = power * 1.54;
        }
        return tax;

    }

    function calculateCoefficient(age) {
        let coefficient = 0;
        if (age < 5) {
            coefficient = 2.80;
        }
        if (age >= 5 && age < 14) {
            coefficient = 1.50;
        }
        if (age >= 14) {
            coefficient = 1;
        }
        return coefficient;
    }

}