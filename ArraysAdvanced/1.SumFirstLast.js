function solve(arr) {
    let firstElement = +arr.shift();
    let lastElement = +arr.pop();
    let sum = firstElement+lastElement;


    return sum;
}
solve(['20','30','40'])