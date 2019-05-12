function solve(params) {

    let nameOfRacerPattern = /([#$%*&])([A-Za-z]+)\1/g
    let lenghtPattern = /=([0-9]+)/g
    let geohasheCodePattern=  /!!(.+)/g

    
    for (let param of params) {
        if (param.match(nameOfRacerPattern) 
        && param.match(lenghtPattern) 
        && param.match(geohasheCodePattern)) {
            let name = nameOfRacerPattern.exec(param)[2]
            let length = +lenghtPattern.exec(param)[1]
            
            let message = geohasheCodePattern.exec(param)[1]

            if (message.length === length) {
                let NEWmessage = message
                    .split("")
                    .map(x => x.charCodeAt(0))
                    .map(x => x + length)
                    .map(x => String.fromCharCode(x))
                    .join("")
                console.log(`Coordinates found! ${name} -> ${NEWmessage}`)
                break;
            } else {
                console.log(`Nothing found!`)
            }

        } else {
            console.log(`Nothing found!`)
        }
    }

}
solve([ '%GiacomoAgostini%=7!!hbqw',
'&GeoffDuke*=6!!vjh]zi',
'JoeyDunlop=10!!lkd,rwazdr',
'Mike??Hailwood=5!![pliu',
'#SteveHislop#=16!!df%TU[Tj(h!!TT[S' ])