function solve (params) {
    let shops = params[0].split(' ');
    let command = +params[1];
    
    for(let i=2; i<params.length;i++){
       let tokens = params[i].split(' ');
       let command = tokens[0];
       let shopName = tokens[1];
       if (command<=0){
           break;
       }
       
       
       if(command==='Include'){
           shops.push(shopName);
       } else if (command ==='Visit'){
           let firstLast = tokens[1];
           let shopNum = +tokens[2];
           
           if(firstLast==='first' && shops.length>=shopNum){
               shops.splice(0,shopNum)
           }else if (firstLast==='last'&& shops.length>=shopNum){
               let lastIndex = shops.length
               lastIndex -=shopNum;
               shops = shops.slice(0,lastIndex)
           }
       }else if (command==='Prefer'){
           let firstIndex = tokens[1];
           let secondIndex = tokens[2];
           let shop1 = shops[firstIndex];
           let shop2 = shops[secondIndex]
           if((firstIndex>=0 && firstIndex<shops.length-1)&&(secondIndex>=0&& secondIndex<shops.length-1)){
                shops.splice(firstIndex,1,shop2)
                shops.splice(secondIndex,1,shop1)
           }
       }else if(command==='Place'){
           let shopName = tokens[1];
           let index = +tokens[2];
           let changingIndex = index+1;
           if(changingIndex>0 && changingIndex<=shops.length-1){
               shops.splice(changingIndex,0,shopName)
            
           }
       }

    }

    console.log(`Shops left:`);
    console.log(shops.join(' '))

}