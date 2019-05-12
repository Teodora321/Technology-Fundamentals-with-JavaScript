function solve (params){
    let keys = params[0].split('&')
    let validKeys= []

    let pattern =/([0-9A-Za-z]{25}|[0-9A-Za-z]{16})/g
    
    
    for(let key of keys){
        if(key.match(pattern)){
           let validKey = key.toUpperCase().split('')
        
        for(let i = 0;i <validKey.length; i++){
            if(Number.isInteger(+validKey[i])){
                validKey[i]= 9 - Number(validKey[i])
            }
        }
        let size = validKey.length ===16 ? 4 : 5;
        validKey = validKey.join('').match(new RegExp(`.{${size}}`, 'g')).join('-');
        validKeys.push(validKey);
       
    }
    
    }
    console.log(validKeys.join(', '));
}
solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs'])