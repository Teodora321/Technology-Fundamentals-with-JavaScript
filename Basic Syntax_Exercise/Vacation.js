function vacation(arg1 , arg2 , arg3){
    let groupOfStudents = Number(arg1);
    let typeofGroup = String(arg2);
    let dayOfWeek = String(arg3);
    let sum = 0;
    if (dayOfWeek == "Friday"){
       
        if(typeofGroup == "Students"){
            sum += groupOfStudents * 8.45;
            if (groupOfStudents >= 30 && groupOfStudents < 100){
                sum -= sum * 0.15;
            }
        }
        else if (typeofGroup == "Business"){
            if(groupOfStudents >= 100){
                groupOfStudents -= 10;
            }
            sum += groupOfStudents * 10.90;
        }
        else if (typeofGroup == "Regular"){
            
            sum += groupOfStudents * 15;
             if (groupOfStudents >= 10 && groupOfStudents <= 20){
                sum -= sum * 0.05;
            }
        }
        

    }
    else if (dayOfWeek == "Saturday"){
        
        if(typeofGroup == "Students"){
            sum += groupOfStudents * 9.80;
            if (groupOfStudents >= 30 && groupOfStudents < 100){
                sum -= sum * 0.15;
            }
        }
        else if (typeofGroup == "Business"){
            if(groupOfStudents >= 100){
                groupOfStudents -= 10;
            }
            sum += groupOfStudents * 15.60;
        }
        else if (typeofGroup == "Regular"){
            sum += groupOfStudents * 20;
             if (groupOfStudents >= 10 && groupOfStudents <= 20){
                sum -= sum * 0.05;
            }
        }
    }
    else if(dayOfWeek == "Sunday"){
        
        if(typeofGroup == "Students"){
            sum += groupOfStudents * 10.46;
            if (groupOfStudents >= 30 && groupOfStudents < 100){
                sum -= sum * 0.15;
            }
        }
        else if (typeofGroup == "Business"){
            if(groupOfStudents >= 100){
                groupOfStudents -= 10;
            }
            sum += groupOfStudents * 16;
        }
        else if (typeofGroup == "Regular"){
            sum += groupOfStudents * 22.50;
             if (groupOfStudents >= 10 && groupOfStudents <= 20){
                sum -= sum * 0.05;
            }
        }
    }
    
   
    console.log(`Total price: ${sum.toFixed(2)}`)
    
}