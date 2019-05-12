function solve(params) {

    let travels = {};
    params.pop()
    for(let param of params){
        let [townName, tokens] = param.split(':');
        if(param.includes('ambush')){
            if(travels.hasOwnProperty(townName)){
                let passengers=+tokens.split('->')[1]
                travels[townName].totalPassengers-=+passengers;
                travels[townName].fastestTime=0;
            }
            
        }else{
            let [time, passengers] = tokens.split('->')
            if(!travels.hasOwnProperty(townName)){
                travels[townName] = {fastestTime:+time,totalPassengers:+passengers}
            }else{
                
                if(travels[townName].fastestTime>+time || travels[townName].fastestTime===0){
                    travels[townName].fastestTime=+time;
                }
                travels[townName].totalPassengers+=+passengers;
            }
        }
        
    }
    let sorted =  Object.entries(travels)
    .filter(t => t[1].fastestTime > 0 && t[1].totalPassengers > 0)
    .sort((a, b) => {
        let result = a[1].fastestTime - b[1].fastestTime;

        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }

        return result;
    })
    .forEach(t=>console.log(`${t[0]} -> Time: ${t[1].fastestTime} -> Passengers: ${t[1].totalPassengers}`));

    
    
    
}

solve(['Quirm:12->258',
'Ankh-Morpork:ambush->200',
'Ankh-Morpork:3->143',
'Sto-Lat:4->80',
'Ankh-Morpork:4->143',
'Ankh-Morpork:ambush->143',
'Sto-Lat:3->20',
'Ankh-Morpork:5->17',
'Slide rule'])