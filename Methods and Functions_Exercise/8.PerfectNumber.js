function perfectNumber(num){
    let divisiors = []
    let matches = false;
    let output = []
     for(let i = 1 ; i <= num ; i++){
        if(num % i === 0){
          divisiors.push(i);
        }
     }
     let sum = 0;
     for(let n = 0; n < divisiors.length ; n++){
         sum += divisiors[n];
         if(sum === num){
            output = divisiors.slice(0,n+1)
           
           console.log(`We have a perfect number!`)
           //console.log(output.join(" + "))
           matches = true;
           break;
          }  
     }
     if(matches === false){
      console.log("It’s not so perfect.")
   
     }
  }