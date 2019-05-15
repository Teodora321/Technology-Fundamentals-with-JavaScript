function solve(word,text) {
    let textArr = text.toLowerCase().split(' ');
    if (textArr.includes(word)){
        console.log(word);
    } else{
        console.log(`${word} not found!`)
    }

}
solve('python',
    'JavaScript is the best programming language'
);
