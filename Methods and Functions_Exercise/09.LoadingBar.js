function loadingBar(num){
  
    let procent = "%";
    let points =".";
      let procentSymbols = num / 10;
      if(num !== 100){
        console.log(`${num}% [${procent.repeat(procentSymbols)}${points.repeat(10-procentSymbols)}]`)
        console.log("Still loading...")
  
      }else{
        console.log(`${num}% Complete!`)
        console.log(`[${procent.repeat(procentSymbols)}]`)
      }
  
  }