function sorting(arr) {
    arr.sort((a, b) => b - a);
    let ourArray = [];

    while (arr.length > 0) {
        ourArray.push(arr.shift());
        ourArray.push(arr.pop());
    }
    console.log(ourArray.join(' '));


}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])