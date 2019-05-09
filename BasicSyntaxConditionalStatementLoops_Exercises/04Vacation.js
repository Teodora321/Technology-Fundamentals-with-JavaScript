function solve(groupOfPeople, typeGroup, weekDay){

    let totalMoney=0;
   
    switch(weekDay){
        case'Friday':
        if(typeGroup === 'Students'){
            totalMoney=8.45*groupOfPeople;
        }
        else if(typeGroup === 'Business'){
            totalMoney=10.90*groupOfPeople;
        }
        else if(typeGroup === 'Regular'){
            totalMoney=15*groupOfPeople;
        }break;
        
        case'Saturday':
        if(typeGroup === 'Students'){
            totalMoney=9.80*groupOfPeople;
        }
        else if(typeGroup === 'Business'){
            totalMoney=15.60*groupOfPeople;
        }
        else if(typeGroup === 'Regular'){
            totalMoney=20*groupOfPeople;
        }break;

        case'Sunday':
        if(typeGroup === 'Students'){
            totalMoney=10.46*groupOfPeople;
        }
        else if(typeGroup === 'Business'){
            totalMoney=16*groupOfPeople;
        }
        else if(typeGroup === 'Regular'){
            totalMoney=22.50*groupOfPeople;
        }break;
        
    }
    if(typeGroup ==='Students' && groupOfPeople>=30){
        totalMoney*=0.85;
    }
    if(typeGroup==='Business' && groupOfPeople>=100){
        totalMoney = (groupOfPeople-10)*totalMoney;
    }
    if(typeGroup === 'Regular' && (groupOfPeople>=10 && groupOfPeople <=20)){
        totalMoney*=0.95;
    }

    console.log(`Total price: ${totalMoney.toFixed(2)}`);

}
solve(30, 'Students', 'Sunday');
solve(40, 'Regular', 'Saturday');