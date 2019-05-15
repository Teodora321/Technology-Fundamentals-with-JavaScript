function solve(word,sentence) {

    word = word.split(', ');
    for (const wordElement of word) {
        sentence=sentence.replace('*'.repeat(wordElement.length), wordElement);
    }
    console.log(sentence);

}
solve('great',
      'softuni is ***** place for learning new programming languages'
)