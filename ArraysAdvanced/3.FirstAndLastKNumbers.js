function solve(array) {

    let kElement = array.shift(array);
    let firstElements = array.slice(0,kElement);
    let lastElements = array.slice(array.length - kElement, array.length)
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));


}
solve([3,6,7,8,9])