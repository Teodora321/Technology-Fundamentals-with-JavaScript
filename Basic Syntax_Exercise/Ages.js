function rounding(arg1 , arg2){
    if(arg2 >= 15){
        arg2 = 15;
    }
    console.log(`${parseFloat(arg1.toFixed(arg2))}`)
}