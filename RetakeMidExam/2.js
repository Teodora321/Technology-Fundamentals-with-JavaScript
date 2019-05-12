function solve (params) {
    let message = params[0].split(' ');

    for(let i=1; i <=params.length-1; i++){
        if(params[i] ==='No Money'){
            break;
        }

        let tokens = params[i]. split(' ');
        let command = tokens[0];
        let stock = tokens[1];
        if(command === 'OutOfStock'){
            message = message
            .join(' ')
            .replace(new RegExp(stock,'g'), 'None')
            .split(' ')
                            
            
        }else if (command ==='Required'){
            let stock = tokens[1];
            let index = +tokens[2];
            if (index >= 0 && index <= message.length - 1){
                message.splice(index,1,stock);
            }     
        }else if (command==='JustInCase'){
            let stock =tokens[1];
            let lastElement = message.pop();
            message.push(stock)
            
        }

    }
    message = message.filter(x=>x!=='None');
    console.log(message.join(' '))

}