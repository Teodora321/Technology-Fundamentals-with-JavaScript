function solve(input) {
    let map = new Map();
    for (let inputElement of input) {
        let counter = 0;
        let currentWord = inputElement;
        for (let current of input) {
            if (current===currentWord){
                counter++;
            }
        }
        map.set(inputElement,counter);
    }
    let sorted = [...map].sort((a,b)=>b[1]-a[1]);
    for (let [word,count]  of sorted) {
        console.log(`${word} -> ${count} times`)
    }

}
solve(["Here", "is", "the", "first",
    "sentence", "Here", "is",
    "another", "sentence", "And", "finally",
    "the", "third", "sentence"]);