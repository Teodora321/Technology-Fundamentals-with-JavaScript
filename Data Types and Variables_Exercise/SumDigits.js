function sumDigits(arg){
    let num = Number(arg);
    let sum = 0;
    let lastDigit;
    while(num != 0){
        lastDigit = num % 10;
        sum += lastDigit;
        num = parseInt(num/10);
        
    }
     console.log(sum)
    
}
sumDigits(245678)