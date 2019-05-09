function solve(array) {

    let myArr = array[0].split(" ");
    let number = + array[1];

    let magic=[];

    for (let i = 0; i <myArr.length-1 ; i++) {

        let firstElement = +myArr[i];

        for (let j = i+1; j <myArr.length ; j++) {
            let secondElement = +myArr[j];

            if (firstElement+secondElement===number){
                magic.push(firstElement + " "+ secondElement);
            }

        }

    }
    console.log(magic.join("\n"));

}
solve(['1 7 6 2 19 23', '8']);