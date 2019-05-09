function solve(startNum, endNum){
    let result ='';
    sum=0;
    for(let i = startNum; i <=endNum; i++){
        result +=i + ' ';
        sum+=i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);