function solve(sentence, word) {
    let replace = '*'.repeat(word.length);
    let pattern = new RegExp(word,'g');
    let result = sentence.replace(pattern,replace);
    console.log(result);
}

solve("A small sentence with some words", "small");