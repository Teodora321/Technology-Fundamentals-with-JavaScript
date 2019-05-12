function solve(input) {
    let array = input[0].split(' ');

    for (let i = 1; i < input.length - 1; i++) {
        let elements = input[i].split(" ");

        let command = elements[0];
        let number = +elements[1];

        if (command === 'Add') {
            array.push(number);
        } else if (command === 'Remove') {
            let index = array.indexOf(number);
            if (index !== -1) {
                array.splice(index, 1)
            } else {
                array.splice(+number, 1)
            }
        } else if (command === 'Replace') {
            let oldNum = elements[1];
            let newNum = elements[2];
            let index = array.indexOf(oldNum);
            if (index !== -1) {
                array[index] = newNum;
            } else if (command === "Increase") {
                let found = array.find(x => x > number);
                let theLastElement = +array.pop()
                if (found > number) {

                    array = array.map(x => x + number)

                } else {
                    array = array.map(x => x + theLastElement)

                }
            } else if (command === "Collapse") {
                array = array.filter(x => x >= number)
            }

        }
    }
    console.log(array.join(" "))
}

solve(['1 2 -1 0 -3 9 8 7 2',
    ' Increase 10',
    'Increase 90',
    'Collapse 8',
    'Mort']);
