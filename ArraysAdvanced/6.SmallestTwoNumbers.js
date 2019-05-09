function solve(array) {
    let sortedNumbers=[];
    for (let i = 0; i <array.length ; i++) {

        sortedNumbers = array.sort((a,b)=> a-b);

    }
    console.log(sortedNumbers.slice(0,2).join(' '))


}
solve([30,15,50,5])