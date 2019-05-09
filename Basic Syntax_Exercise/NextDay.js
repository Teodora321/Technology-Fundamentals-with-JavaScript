function nextDay(arg1,arg2,arg3){
    let date = new Date(arg1,arg2-1,arg3);
    let tommorow = new Date(arg1,arg2-1,date.getDate()+1);
    console.log(`${tommorow.getFullYear()}-${tommorow.getMonth()+1}-${tommorow.getDate()}`)
    
 }