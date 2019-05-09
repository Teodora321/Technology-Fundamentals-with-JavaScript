function spiceMustFlow(startingYield){
    let counter = 0;
    let normalYield = 0;

    while(startingYield >= 100){

      normalYield += startingYield - 26;
      startingYield -= 10;
      counter++;
    }
    
        normalYield -= 26;
        if(normalYield < 0){
            normalYield = 0;
        }
    
    console.log(counter);
    console.log(normalYield)
}
spiceMustFlow(200)