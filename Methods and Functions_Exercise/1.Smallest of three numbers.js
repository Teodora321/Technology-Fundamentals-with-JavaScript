function smallestofThree(num1,num2,num3){
    let smalestNum = 0;
    if(num1 <= num2 && num1 <= num3){
        smalestNum = num1;
    }
    if(num2 <= num1 && num2 <= num3){
        smalestNum = num2;
    }
    if(num3 <= num1 && num3 <= num2){
        smalestNum = num3
    }
    console.log(smalestNum);
 }
 // console.log(Math.Min(num1, num2, num3));