function solve(text) {
    let pattern = /#\w+/g;
    let result = [];
    let match = '';
    while((match=pattern.exec(text))!==null){
        result.push(match[0]);

    }
    console.log(result);

}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');