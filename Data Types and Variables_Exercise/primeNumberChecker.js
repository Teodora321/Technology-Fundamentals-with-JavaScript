 function isPrime(num) {
     let isPrimeorNo = true;
       for(let i = 2; i <= Math.sqrt(num);i++){
           if(num % i == 0){
               isPrimeorNo = false;
               break;
           }
       }
       if(num == 1){
           isPrimeorNo = false;
       }
       if(isPrimeorNo){
         console.log(`true`)
       }
       else{
           console.log(`false`)
       }
     
}
isPrime(8)