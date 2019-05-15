function solve(input) {
    let [letter, words] = input;
    while(letter.includes('_')){
        let startIndex = letter.indexOf('_');
        let length = 0;
        let index = startIndex;
        while ((letter[index])==='_'){
            index++;
            length++;
        }
        let word = words.find(w=>w.length===length);
        letter=letter.replace('_'.repeat(length),word)
    }
    console.log(letter)

}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
// function fillWords(params) {
//     let letter = params[0];
//     let wordsToReplace = params[1].sort((a, b) => b.length - a.length);
//     for (let word of wordsToReplace) {
//         let hole = '_'.repeat(word.length);
//         letter = letter.replace(hole, word);
//     }
//     console.log(letter);