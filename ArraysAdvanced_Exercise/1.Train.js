function solve(input) {

    let passangersInWagons = input
        .shift()
        .split(' ')
        .map(Number);
    let capacity = +(input.shift());
    for (let commands of input){

        let currentCommand = commands.split(' ');

        if (currentCommand[0] === 'Add'){
            passangersInWagons.push(+currentCommand[1])
        }else{
            for (let i = 0; i <passangersInWagons.length ; i++) {
                if (passangersInWagons[i] + Number(currentCommand[0]) <= capacity){
                    passangersInWagons[i]+=Number(currentCommand[0]);
                    break;
                }
            }

        }

    }
    console.log(passangersInWagons.join(' '));


}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])