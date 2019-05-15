function solve(text) {
    let textArr = text.split(' ');
    for (let textArrElement of textArr) {
        if (textArrElement.length===2 && textArrElement.startsWith(':')){
            console.log(textArrElement)
        }
    }

}
solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)');