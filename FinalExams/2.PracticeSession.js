function solve(params) {

    racers = {};
    params.pop();

    for (let param of params) {
        let [command, roadName, racerName] = param.split('->');

        if (command === 'Add') {
            if (!racers.hasOwnProperty(roadName)) {
                racers[roadName] = [];
            }
            racers[roadName].push(racerName)
        }
        else if (command === 'Move') {
            let [command, currentRoadName, racerName, nextRoad] = param.split('->')

            let index = racers[currentRoadName].indexOf(racerName)
            if (index !== -1) {
                let playerName = racers[currentRoadName].splice(index, 1)
                playerName = playerName.join('')

                if (!racers.hasOwnProperty(nextRoad)) {
                    racers[nextRoad] = []
                }
                racers[nextRoad].push(playerName);

            }
        } else if (command === 'Close') {
            if (racers.hasOwnProperty(roadName)) {
                delete racers[roadName]
            }
        }

    }
    let sortedObj = Object.entries(racers).sort((a, b) => {
        let result = b[1].length - a[1].length;
        if (result === 0) {
            a[0].localeCompare(b[0])
        }
        return result;
    })
    
    console.log(`Practice sessions:`)
    for (let element of sortedObj) {
        console.log(`${element[0]}`)
        for (let racers of element[1]) {
            console.log(`++${racers}`)
        }
    }
}

solve(['Add->Glen Vine->Steve Hislop',
    'Add->Ramsey road->John McGuinness', 
    'Add->Glen Vine->Ian Hutchinson',
    'Add->Ramsey road->Dave Molyneux',
    'Move->Ramsey road->Hugh Earnsson->Glen Vine',
    'Add->A18 Snaefell mountain road->Mike Hailwood',
    'Add->Braddan->Geoff Duke',
    'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
    'Move->Braddan->John McGuinness->Glen Vine',
    'Close->A18 Snaefell mountain road',
    'END']
    )
