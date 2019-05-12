function solve(params) {
    let dictionary = {};
    let wordsDefinition = params[0].split(' | ')
    let wordsToSearch = params[1].split(' | ');
    let command = params[params.length-1];
    
    for(let element of wordsDefinition){
        let [word, definition] = element.split(': ');
        if(!dictionary.hasOwnProperty(word)){
            dictionary[word]=[];
        }
        dictionary[word].push(definition)
        
    }
    for(let element of wordsToSearch){
       
        let singleWord = element.split(' ');
        if(dictionary.hasOwnProperty(singleWord)){
            console.log(singleWord.join(''))
            
            dictionary[singleWord]
            .sort((a,b)=> b.length-a.length)
            .forEach(word=>{
                console.log(` -${word}`)
            })  
        }
    
   }
   if (command==='List'){
    
    console.log(Object.keys(dictionary).sort((a,b)=>a.localeCompare(b)).join(' '))  
}
}    
   

solve(['tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'End'
    ])
