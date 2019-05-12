function solve(input) {
    let result = input[0].split(", ");
    for (let i = 1; i <input.length-1 ; i++) {
        let elements = input[i].split(":");
        let command = elements[0];
        let lesson = elements[1];
        if (command==='Add'){
            let index = result.indexOf(lesson);
            if (index === -1) {
                result.push(lesson);
            }
        } else if(command==='Insert'){
            let indexToPush = +elements[2];
            if (!result.includes(lesson) && (indexToPush>-1 && indexToPush<=result.length)){
                result.splice(indexToPush,0,lesson);
            }
        }else if(command === 'Remove'){
            let index = result.indexOf(lesson);
            let indexOfExercise = elements[2];
            if(result.includes(lesson)){
                result.splice(index,1)
            }
            if (indexOfExercise !== -1){
                result.splice(index, 2);
            }
        }else if(command === 'Swap'){

            let lessonToSwap = elements[2];
            let index = result.indexOf(lesson);
            let indexSwap = result.indexOf(lessonToSwap);
            if (result.includes(lesson)){
                if (result.includes(lessonToSwap)){
                    result.splice(index,1,lessonToSwap);
                    result.splice(indexSwap,1,lesson);
                } 
                
            }
            if (result.includes(`${lesson}-Exercise`)){
                result.splice(lesson,0,`${lesson}-Exercise`)
            }
        }else if (command === 'Exercise'){
            let indexOfLesson = result.indexOf(lesson);
            if (indexOfLesson ===-1 ) {
                result.splice(indexOfLesson,0,lesson);

            }
            if (result.includes(lesson)){
                result.splice(indexOfLesson,0,`${lesson}-Exercise`);
            }
        }

    }
    for (let resultElement of result) {

        console.log(result.indexOf(resultElement)+1 +"."+ resultElement);

    }

}
solve(['Arrays, Lists, Methods','Databases',

    'Swap:Arrays:Methods',
'Exercise:Databases',
'Remove Databases',
'Swap:Lists:Databases',
'Insert:Arrays:0',
'course start']);