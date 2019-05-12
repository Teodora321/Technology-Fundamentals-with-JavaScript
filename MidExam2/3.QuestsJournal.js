function solve(input) {

    let journal = input[0].split(", ");
    let elements = [];
    for (let i = 0; i < input.length - 1; i++) {
        elements = input[i].split(" - ");

        let command = elements[0];
        let quest = elements[1];

        if (command === 'Start') {
            let index = journal.indexOf(quest)
            if (index === -1) {
                journal.push(quest);
            }
        } else if (command === 'Complete') {
            let index = journal.indexOf(quest)
                if (index !== -1) {
                    journal.splice(index,1)
                }

        }else if (command ==='Side Quest') {
            let first = quest.split(":")[0];
            let second = quest.split(":")[1];
            let indexFirst = journal.indexOf(first);
            let indexSecond= journal.indexOf(second);
            if (indexSecond===-1){
                if (indexFirst!==-1){
                    journal.splice(indexFirst+1, 0, second)
                }
            }
        } else if(command === 'Renew'){
            let index = journal.indexOf(quest);
            if (index !== - 1){
                let element = journal.splice(index,1)
                journal.push(element);
            }

        }

    }
    console.log(journal.join(", "));
}

solve(['Hello World, If else',
    'Complete - Homework',
    'Side Quest - If else:Switch',
    'Renew - Hello World',
'Retire!'])