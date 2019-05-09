function solve(type, volumeOrPower, age) {
    let baseTax = 0;

    let totalTax=0;


    switch (type) {
        case 'car':
            baseTax = calculateBaseCarTax(volumeOrPower);
            let vehicleCoefficient = calculateCoefficient(age)
             totalTax = baseTax * vehicleCoefficient;
            console.log(totalTax.toFixed(2) + ' lv.');
            break;
        case'motorcycle':
            baseTax = calculateBaseMotorcycleTax(volumeOrPower);
            totalTax = baseTax ;
            console.log(totalTax.toFixed(2) + ' lv.');
            break;
    }

    function calculateBaseCarTax(power) {

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

    function calculateBaseMotorcycleTax(volume) {
        if (volume > 750) {
            return 125;
        }
        if (volume > 490) {
            return 94;
        }
        if (volume > 350) {
            return 63;
        }
        if (volume > 250) {
            return 44;
        }
        if (volume > 125) {
            return 31;
        }
            return 15;


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

solve('motorcycle', 450, 10)