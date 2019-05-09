function ladyBugs(array) {


    let size = array[0];
    let ladyBugPosition = array[1]
        .split(" ")
        .map(Number);
    let ladyBugsArr =[];

    /така си генерираме масив с определена дължина/
    for (let i = 0; i <size ; i++) {
        ladyBugsArr.push(0)
    }

    for (let i = 0; i < size; i++) {
        let ladyBugIndex = ladyBugPosition[i];
        
        if (ladyBugIndex >= 0 && ladyBugIndex < size){

            ladyBugsArr[ladyBugIndex]=1;
        }
        
    }

    for (let i = 2; i <array.length ; i++) {
        let  [ladyBugIn, command, jumpLength] = array[i].split(' ');

        ladyBugIn = +ladyBugIn;
        jumpLength = +jumpLength;
        if (ladyBugsArr[ladyBugIn] !==1 || ladyBugIn <0 || ladyBugIn >= ladyBugsArr){
            continue;
        }

        if(jumpLength<0){
            jumpLength = Math.abs(jumpLength);
            command = command === 'right'
            ?  "left"
            :  "right";
        }
        ladyBugsArr[ladyBugIn]=0;
        if (command === 'right'){
             /ladybug jumps one time/
            let newPosition = ladyBugIn + jumpLength;
             /jump one more time if there is a ladybug/
                if (ladyBugsArr[newPosition] === 1){
                    newPosition = newPosition + jumpLength;
                }
                if (newPosition >=0 && newPosition <ladyBugsArr.length ){
                    ladyBugsArr[newPosition]=1;
                }
        }else{

            let newPosition = ladyBugIn-jumpLength;
              if(ladyBugsArr[newPosition]===1) {
                  newPosition = newPosition - jumpLength;
              }
              if (newPosition >= 0){
                  ladyBugsArr[newPosition]=1;
              }
        }


    }
    console.log(ladyBugsArr.join(" "))
}
ladyBugs([ 3, '0 1',
                '0 right 1',
                '2 right 1' ]
)