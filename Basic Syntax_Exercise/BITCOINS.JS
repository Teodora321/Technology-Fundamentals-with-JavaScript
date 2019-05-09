function bitcoinsSolve(arg){
    let bitcoins = 0;
    let daysofPurchased = 0;
    let money = 0;
    let daysCounter = 1 ;

    for(let i = 0;i < arg.length; i++ ){
        let currentGold = arg[i];

        if(daysCounter % 3 === 0){
            currentGold -= currentGold * 0.30;
        }

        money += currentGold * 67.51;
        
        if(money >= 11949.16){
            let currentBitcoins = Math.floor(money / 11949.16)
            bitcoins+= currentBitcoins;
            money -= currentBitcoins * 11949.16;
            if(daysofPurchased === 0){
                daysofPurchased = daysCounter;
            }
        }
      daysCounter++;  
      
    }
    console.log(`Bought bitcoins: ${bitcoins}`)
    if(daysofPurchased != 0){
    console.log(`Day of the first purchased bitcoin: ${daysofPurchased}`)

    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)
}
bitcoinsSolve([100,200,300])