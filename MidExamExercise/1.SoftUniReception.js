function solve(input) {
    let firstEmployee = +input[0];
    let secondEmployee = +input[1];
    let thirdEmployee = +input[2];
    let studentsCount = +input[3];
    let studentsPerHour = firstEmployee+secondEmployee+thirdEmployee;

    let timer=0;
    while(studentsCount>0){
        timer++;
        studentsCount-=studentsPerHour;
        if (timer%4===0){
            timer++;
        }

    }
    console.log(`Time needed: ${timer}h.`);


}
solve([ '1', '2', '3', '45' ])