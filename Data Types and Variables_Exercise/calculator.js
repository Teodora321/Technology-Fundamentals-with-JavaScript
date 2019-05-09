function calculator(num,operator,num1){
    let sum = 0;
  if (operator == "+"){
      sum = num + num1;
  }
  else if(operator == "-"){
      sum = num - num1;
  }
  else if (operator == "*"){
      sum = num * num1;
  }
  else if(operator == "/"){
      sum = num / num1;
  }
  console.log(`${sum.toFixed(2)}`)
}
calculator(5,"+",10)