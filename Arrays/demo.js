function solve(arr){
    let theList = arr[0].split(" ").map(Number);
    arr.pop();

    for(let i = 1; i < arr.length; i++){
        let currentLine = arr[i].split(" ");
        let command = currentLine[0]
        let value = +currentLine[1]
        let index = theList.indexOf(value)
        if(command === "Add"){
            theList.push(value)
        }
        else if(command === "Remove"){
            if(index !== -1){
                theList.splice(index,1)
            }else{
                theList.splice(+value,1)
            }
        }
        else if(command === "Replace"){
            let theReplacment = +currentLine[2]
            if(index !== -1){
                theList.splice(index,1,theReplacment)
            }

        }
        else if(command === "Increase"){
            let found = theList.find(x=>x>value)
            let theLastElement = theList[theList.length-1]
            if(found > value){

                theList =  theList.map(x=>x+value)

            }else{
                theList= theList.map(x=>x+theLastElement)

            }
        }
        else if(command === "Collapse"){
            theList = theList.filter(x=>x >= value)
        }

    }
    console.log(theList.join(" "))
}

solve(['1 2 -1 0 -3 9 8 7 2',
    'Increase 10',
    'Increase 90',
    'Collapse 8',
    'Mort']);