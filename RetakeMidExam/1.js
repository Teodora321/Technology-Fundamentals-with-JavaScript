function solve (params) {

    let budget = +params[0];
    let priceFloorKg = +params[1];
    
    let eggPrice = priceFloorKg*0.75;
    let milkPrice = priceFloorKg*1.25;
    let milk250ml = milkPrice/4;
    
    let cozonacPrice = priceFloorKg+eggPrice+milk250ml;
    let eggCounter = 0;
    let cozonacCounter=0;
    let lost = 0;
    

    while(true){
        if(budget<cozonacPrice){
            break;
        }
        budget-=cozonacPrice;
        cozonacCounter++;
        eggCounter+=3;
        if(cozonacCounter%3===0){
            lost = cozonacCounter-2;
            eggCounter-=lost;

        }
    }

    console.log(`You made ${cozonacCounter} cozonacs! Now you have ${eggCounter} eggs and ${budget.toFixed(2)}BGN left.`)
}
solve([ '15.75', '1.4' ])