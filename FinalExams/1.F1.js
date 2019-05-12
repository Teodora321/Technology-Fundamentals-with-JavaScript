function f1Championship(paramsArr) {
    let teamsObj = {};
 
    paramsArr.forEach((element) => {
        let [teamName, pilotName, pilotPoints] = element.split(' -> ');
 
        if (!teamsObj[teamName]) {
            teamsObj[teamName] = {};
        }
 
        if (!teamsObj[teamName][pilotName]) {
            teamsObj[teamName][pilotName] = 0;
        }
 
        teamsObj[teamName][pilotName] += Number(pilotPoints);
    });
 
    let calculatePoints = function (obj) {
        return Object.values(obj).reduce((a, b) => a + b, 0);
    };
 
    Object.entries(teamsObj)
        .sort((a, b) => calculatePoints(b[1]) - calculatePoints(a[1]))
        .slice(0, 3)
        .forEach((teamsArr) => {
 
            let [team, pilotsObj] = teamsArr;
            let points = calculatePoints(pilotsObj);
            console.log(`${team}: ${points}`);
 
            Object.entries(pilotsObj)
                .sort((a, b) => b[1] - a[1])
                .forEach((pilotsArr) => {
 
                    let [pilot, points] = pilotsArr;
                    console.log(`-- ${pilot} -> ${points}`);
                });
        });
}