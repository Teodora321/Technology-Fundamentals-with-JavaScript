function solve(input) {
    let numCommands = +input[0];
    let housesArray = input[1].split(' ');
    let position = 0;

    for (let i = 2; i < input.length; i++) {

        let elements = input[i].split(' ');

        let command = elements[0];
        let number = +elements[1];

        if (command === 'Forward' || command === 'Back') {
            if (command == 'Back') {
                number = -number;
            }

            if (position + number >= 0 && position + number < housesArray.length) {
                position += number;
                housesArray.splice(position, 1);
            }

        }
        if (command === 'Gift') {
            let index = elements[1];
            if (index >= 0 && index < housesArray.length) {
                let houseNumber = elements[2];
                housesArray.splice(index, 0, houseNumber);
                position=index;
            }

        }
        if (command === 'Swap') {
            let firstIndex = elements[1];
            let secondIndex = elements[2];
            if (housesArray.includes(firstIndex) && housesArray.includes(secondIndex)) {
                let index1 = housesArray.indexOf(firstIndex);
                let index2 = housesArray.indexOf(secondIndex);
                let temp = housesArray[index1];
                housesArray[index1] = housesArray[index2];
                housesArray[index2] = temp;
            }
        }

    }
    console.log("Position: " + position);
    console.log(housesArray.join(", "));

}
solve([ '5',
    '255 500 54 78 98 24 30 47 69 58',
    'Forward 1',
    'Swap 54 47',
    'Gift 1 20',
    'Back 1',
    'Forward 3' ]);

