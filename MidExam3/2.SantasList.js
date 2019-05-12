function solve(input) {
    let initialList = input[0].split("&");

    for (let i = 1; i <input.length-1 ; i++) {
        let elements = input[i].split(" ");
        let command = elements[0];
        let name = elements[1];
        if (command === 'Bad'){
            let index = initialList.indexOf(name);
            if (index === - 1){
                initialList.unshift(name);
            }
        }else if (command === 'Good'){
            let index = initialList.indexOf(name);
            if (index !== - 1){
                initialList.splice(index,1);
            }
        } else if (command === 'Rename'){
            let oldName = elements[1];
            let newName = elements[2];
            let index = initialList.indexOf(oldName);
            if (index!==-1){
                initialList.splice(index,1,newName);
            }
        }else if (command === 'Rearrange'){
            let index = initialList.indexOf(name);
            if (index !== -1){
                initialList.splice(index,1);
                initialList.push(name);
            }
        }
         

    }

    console.log(initialList.join(", "));
}
solve(['Joshua&Aaron&Walt&Dustin&William',
    'Good Walt',
    'Bad Jon',
    'Rename Aaron Paul',
    'Rearrange Jon',
    'Rename Peter George',
    'Finished!'])