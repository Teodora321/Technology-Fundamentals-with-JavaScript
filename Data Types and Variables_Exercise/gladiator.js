function gladiator(fights,helmetPrice,swordPrice,shieldPrice,armorPrice){
   let helmet = 0;
   let sword = 0;
   let shield = 0;
   let armor = 0;
   let sum = 0;
   for(let i= 1; i<= fights; i++){
       if(i % 2 == 0){
           helmet++;
       }
      if(i % 3 == 0){
           sword++;
       }
        if(i% 2 == 0 && i % 3 == 0){
           shield++;
           if(shield % 2 == 0){
               armor++;
           }
       }
   }
    sum += (helmet * helmetPrice) + (sword* swordPrice) + (shield * shieldPrice) + (armor * armorPrice);
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}
gladiator(23 , 12.50 , 21.50 , 40 , 200)