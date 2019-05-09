function printandSum(arg1 , arg2){
    let sum = 0;
    let print = "";
    for(let i = arg1;i<= arg2;i++){
        print += i + " ";
        sum += i;
    }
    console.log(`${print}`)
    console.log(`Sum: ${sum}`)
}