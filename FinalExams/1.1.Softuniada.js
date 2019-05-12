
function solve(input){
    let finalList = {}
    for(let inp of input){
        let [country,name,points] = inp.split(" -> ")
        points = +points;
        if(inp === 'END'){
            break;
        }
        if(!finalList.hasOwnProperty(country)){
            finalList[country] = {
                params: [],
                totalpoints: 0
            }
        }
        finalList[country].params.push([name,points])
        finalList[country].totalpoints += points;
    }
let s = Object.entries(finalList).sort((a,b)=>{
        return b[1].totalpoints - a[1].totalpoints
})
for (let param of s){
    console.log(`${param[0]}: ${param[1].totalpoints}`)
   for(let p of param[1].params){
       console.log(` -- ${p[0]} -> ${p[1]}`)
   }
}
 
 
}
solve([ 'Bulgaria -> Ivan Ivanov -> 25',
'Germany -> Otto Muller -> 4',
'England -> John Addams -> 10',
'Bulgaria -> Georgi Georgiev -> 18',
'England -> Valteri Bottas -> 8',
'Bulgaria -> Georgi Georgiev -> 6',
'END' ])