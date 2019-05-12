function solve (params){
    let text = params[0]
    let [originalWord, wordToReplace] = params[1].split(' ');
    let pattern = /^[d-z{},|#]+$/g;

    if(!text.match(pattern)){
        console.log('This is not the book you are looking for.')
    }else{
        let result = text
        .split('')
        .map(symbol => String.fromCharCode(symbol.charCodeAt(0)-3))
        .join('') 
        .replace(new RegExp(originalWord,'g'),wordToReplace)
        console.log(result)
    }

}
solve(['wkhfn#|rx#jhqfkr#phf#exw#|rxu#uholf#lv#khfgohg#lq#hfrwkhu#sohfhw',
    'ec an'])