function solve(array) {
    let modifiedArray=[];
    let sumArray=0;
    let sumModifiedArray=0;

    for (let i = 0; i <array.length ; i++) {
        sumArray+=array[i];
        if (array[i]% 2 ===0){

            modifiedArray[i] = array[i]+ i;
            sumModifiedArray+=modifiedArray[i];

        }else {
            modifiedArray[i] = array[i] - i;
            sumModifiedArray+=modifiedArray[i];
        }

    }
    console.log(modifiedArray)
    console.log(sumArray);
    console.log(sumModifiedArray);
}
solve([5,15,23,56,35]);