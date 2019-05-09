function equalElements(array) {

    array=array[0].split(" ");
    let longestSequence = [];
    let leftPartIndex = 0;

    for (let i = 0; i <array.length ; i++) {
        let currentElement = array[i];
        let curentSequence = [currentElement];

        for (let j = i+1; j <array.length ; j++) {
            let nextElement = array[j];

            if (nextElement===currentElement){
                curentSequence.push(nextElement);
            }else{
                break;
            }

        }

        if (curentSequence.length > longestSequence.length){
            longestSequence=[];

            for (let j = 0; j < curentSequence.length; j++) {
                longestSequence.push(curentSequence[j])
            }
        }else if (curentSequence.length===longestSequence.length){
            if (i < leftPartIndex){
                leftPartIndex=i;
            }

        }
    }
    console.log(longestSequence.join(" "));



}
equalElements(['2 1 1 2 3 3 2 2 2 1'])