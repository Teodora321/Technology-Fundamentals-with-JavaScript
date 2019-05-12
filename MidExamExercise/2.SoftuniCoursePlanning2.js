function solve(input) {
    let schedule = input[0].split(", ");

    for (let i = 1; i <input.length-1 ; i++) {
        let elements = input[i].split(":");
        let command = elements[0];
        let lesson = elements[1];
       
        if (command ==='Add'){
            let index = schedule.indexOf(lesson);
            if (index===-1){
                schedule.push(lesson);
            }
        }else if(command === 'Insert'){
            let indexToPush = +elements[2];
            if (!result.includes(lesson) && (indexToPush>-1 && indexToPush<=result.length)){
                result.splice(indexToPush,0,lesson);
            }
        }else if(command ==='Remove'){
            let index = schedule.indexOf(lesson);
            if (index!==-1){
                schedule.splice(index,1);
            }

        }

    }

}
solve(['Arrays, Lists, Methods',
    'Swap:Arrays:Methods',
    'Exercise:Databases',
    'Swap:Lists:Databases',
    'Insert:Arrays:0',
    'course start']);