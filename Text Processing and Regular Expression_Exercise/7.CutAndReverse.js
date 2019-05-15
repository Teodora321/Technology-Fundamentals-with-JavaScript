function solve(input) {
    let inputArr = input.split('');
    let firstHalf = [];
    let secondHalf = [];
    for (let i = 0; i <inputArr.length/2 ; i++) {
        firstHalf.push(inputArr[i]);
    }
    console.log(firstHalf.reverse().join(''));
    for (let i = inputArr.length/2; i <inputArr.length ; i++) {
        secondHalf.push(inputArr[i]);
    }
    console.log(secondHalf.reverse().join(''))
}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');


// function cutAndReverse(str) {
//     let count = str.length / 2;
//     let firstPart = str.slice(0, count).split('').reverse().join('');
//     let secondPart = str.slice(count).split('').reverse().join('');
//     console.log(firstPart + '\n' + secondPart);
// }