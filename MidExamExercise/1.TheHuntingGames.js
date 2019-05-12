function solve(params){
    let days = +params.shift();
    let players = +params.shift();
    let groupEnergy = +params.shift();
    let waterPerPerson = +params.shift();
    let foodPerPerson = +params.shift();
    

    let totalWater = days*players*waterPerPerson;
    let totalFood = days*players*foodPerPerson;
    let counter = 1
    
    for(let energy of params){
       
        groupEnergy-=energy;
        
        if(groupEnergy<=0){
            break;
        }
        if(counter%2===0){
           groupEnergy*=1.05;
           totalWater*=0.7;
        }
        if(counter%3===0 ){
            let food = totalFood/players;
            totalFood-=food;
            groupEnergy*=1.1;

        }
        counter++;

    }
    if (groupEnergy>0){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }else{
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
    }
      

}
solve([ '10',
'7',
'5035.5',
'11.3',
'7.2',
'942.3',
'500.57',
'520.68',
'540.87',
'505.99',
'630.3',
'784.20',
'321.21',
'456.8',
'330',
'' ])