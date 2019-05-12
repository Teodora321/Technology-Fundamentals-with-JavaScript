function solve(input) {
    let bandTime = {};
    let bandMembers = {};
    let totalTime = 0;

    for(let line of input){
        if(line === 'start of concert'){
            break;
        }
        let tokens = line.split('; ');
        
        let command = tokens[0];
        let bandName = tokens[1];

        if(command ==='Add'){
            let members = tokens[2].split(', ');
            if(!bandMembers.hasOwnProperty(bandName)){
                bandMembers[bandName] = new Set();
            }
            for(let member of members){
                bandMembers[bandName].add(member)
            }
        }
        else if(command ==='Play'){
            let time = +tokens[2];
            totalTime+=time;

            if(!bandTime.hasOwnProperty(bandName)){
                bandTime[bandName]=0;
            }
            bandTime[bandName]+=time;
        }
    }
    console.log(`Total time: ${totalTime}`)

    let sortedBands = Object.entries(bandTime)
    .sort((a,b)=>{
        return b[1]-a[1] || a[0].localeCompare(b[0])
    });
    for(let [name,time] of sortedBands){
        console.log(`${name} -> ${time}`)
    }
    let bandToPrint = input.pop();
    console.log(bandToPrint);
    let membersToPrint = bandMembers[bandToPrint]
    .forEach(member => console.log(`=> ${member}`))

}
solve([ 'Play; The Beatles; 2584',
'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
'Play; Eagles; 1869',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
'Play; The Rolling Stones; 4239',
'start of concert',
'The Rolling Stones' ]);