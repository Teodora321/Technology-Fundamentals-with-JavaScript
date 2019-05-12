function solve([wordsDefinition, wordsToCheck, command]){

    let dictionary={};
    
        wordsDefinition.split(' | ')
        .map(e=>e.split(': '))
        .forEach(([word,definition])=>{
            if(!dictionary.hasOwnProperty(word)){
               dictionary[word]=[];
            }
            dictionary[word].push(definition)
        });
    

    wordsToCheck.split(' | ')
        .forEach(word=>{
            if(dictionary.hasOwnProperty(word)){
                console.log(word)

                dictionary[word]
                .sort((a,b)=>b.length - a.length)
                .forEach(definition=>{
                    console.log(` -${definition}`)
                })
                    
            }
            
        })  
        if (command==='List'){
            console.log(
            Object.keys(dictionary).sort((a,b)=>a.localeCompare(b))
            .join(' '))
        }
     }    

solve(['programmer: an animal, which turns coffee into code | developer: a magician',
'Pesho | Gosho',
'List']);