function solve(params){
   
    let [message, emojiCode] = [params[0], params[1]];
    
 
    let pattern = /(?<=\s:)[a-z]{4,}(?=:[\s,\.!?])/g;
    let validEmojies = message.match(pattern);
 
    let asciiArr = validEmojies
    .map((emoji) => emoji
    .split('')
    .map((char) => char
    .charCodeAt(0)));

    let powerSum = asciiArr
    .map((arr) => arr
    .reduce((a, b) => a + b, 0))
    .reduce((a, b) => a + b, 0);
    
    
    if (validEmojies.length > 0) {
        console.log(`Emojis found: ${validEmojies.map((emoji) => `:${emoji}:`).join(', ')}`);
    }
 
    
    let emojiName = emojiCode.split(':').map((char) => String.fromCharCode(char)).join('');
    let checkEmojies = validEmojies.filter((emoji) => emoji === emojiName);
 
    if (checkEmojies.length > 0) {
        powerSum *= 2;
    }
 
    console.log(`Total Emoji Power: ${powerSum}`);



}
solve([ 'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
'115:101:118:101:110' ])
// solve(['In the Sofia Zoo there are many animals, such as :ti ger:, :elephan:t, :monk3y:, :goriLLa:, :fox:.',
//   '  97:101:117:114'
//     ])

// function solve(params){
//     let pattern = /(\s:[a-z]{4,}:\s)/g;
//     let text = params[0];
//     let result = 0;
//     if(!text.match(pattern)){
//         console.log('Total Emoji Power: 0');
//     }else{
//         let valid = text.match(pattern).join('');
//         let newText = valid.split('');
   
//         for(let symbol of newText){
       
//             if(symbol === ':'||symbol ===' '){
//                 continue;
//             }else{
//             let codeNumber = Number(symbol.charCodeAt(symbol))
//             result+=codeNumber
//             }
//         }
   
//     }

//     let sum = params[1]
//     .split(':')
//     .map(Number)

//     for(let number of sum){
//         let letter = String.fromCharCode(number)
   
//     }


// }