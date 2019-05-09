function triangleofNums(arg){
    let print = "";
    for(let i  = 1; i <= arg; i++){
        for(let n = 1; n <= i ; n++){
            print += i + " ";
        }
        console.log(print);
        print="";
    }
}