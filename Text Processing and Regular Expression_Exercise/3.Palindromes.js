function solve(text) {
    let palindromes = [];
    text.forEach((element)=>{
        let textArr = element
            .split(' ')
            .join('');
        let reversedTextArr = textArr
            .split('')
            .reverse()
            .join('');
        if (textArr===reversedTextArr) {
            palindromes.push(textArr);
        }
    })
    if (palindromes.length>0){
        console.log(palindromes.join(', '));
    } else{
        console.log('No palindromes found')
    }

}

solve([' stella won no wallets',
    'not a palindrome']);