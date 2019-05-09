function reverseStringYes(arg){
   
    let username = arg[0];
    let counter = 1;
    let timesCount = 1;
    let splitUsername = username.split("");
    let reverseUser= splitUsername.reverse();
    let joinUser = reverseUser.join("")
    while(true){
        let currentPass = arg[counter];
        
        if(joinUser == currentPass){
            console.log(`User ${username} logged in.`)
            break;
        }
        else{
            console.log(`Incorrect password. Try again.`)
            timesCount++;
            if(timesCount == 4){
                console.log(`User ${username} blocked!`)
                return;
            }
        }
        counter++;
    }
}