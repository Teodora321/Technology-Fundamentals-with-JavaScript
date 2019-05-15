function solve(text) {
    let pattern = /[A-Z][a-z]*/g;
    let words = [];
    let validWords = null;
    while((validWords=pattern.exec(text))!==null){
        words.push(validWords);
    }
    console.log(words.join(', '))

}
// solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
// function solve(text) {
//     let pattern = /[A-Z][a-z]*/g;
//     let words = [];
//     let validWords = '';
//     while(validWords=pattern.exec(text)){
//         words.push(validWords);
//     }
//     console.log(words.join(', '))
//
// }