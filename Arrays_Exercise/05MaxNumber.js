function maxNumber(array) {

    let topIntegers = [];

    for (let i = 0; i <array.length ; i++) {

        let current = array[i];
        let isTop = true;

        for (let j = i+1; j <array.length ; j++) {
            if (current <= array[j]){
                isTop=false;
                break;
            }

        }
        if (isTop){
            topIntegers.push(current)}

    }
    console.log(topIntegers.join(" "))

}

maxNumber([1, 4, 3, 2])