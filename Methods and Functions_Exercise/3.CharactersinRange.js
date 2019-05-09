function charsInRange(startChar,endChar){
    let start = startChar.charCodeAt(0);
    let end = endChar.charCodeAt(0);
    
    if(end < start){
        let temp = start;
        start = end;
        end = temp;
    }
    let print = []
    for(let i = start+1; i < end;i++){
       print.push(String.fromCharCode(i));
    }
    console.log(print.join(" "))
    
}