function solve(arr){
   
    let cells = arr[0].split("#");
    let waterValue = +arr[1];
    let effort = 0;
    let totalFire = 0;
    let cellsFinal = []
    for(let i = 0; i < cells.length;i++){
        let currentFire = cells[i].split(" = ")[0];
        let value = +cells[i].split(" = ")[1];
       
        if(currentFire === "High" && value >= 81 && value <= 125){
           
            if(waterValue - value >= 0){
                waterValue -= value;
            effort += value * 0.25;
            totalFire += value;
            cellsFinal.push(value)
            }
        }
        else if(currentFire === "Medium" && value >= 51 && value <= 80){
           
            if(waterValue - value >= 0){
                waterValue -=value;
            effort +=  value * 0.25;
            totalFire += value;
            cellsFinal.push(value)
            }
           
        }
        else if(currentFire === "Low" && value >= 1 && value <= 50){
           
            if(waterValue - value >= 0){
                waterValue -= value;
            effort += value * 0.25;
            totalFire += value;
            cellsFinal.push(value)
            }
        }
    }
    console.log(`Cells: `)
    cellsFinal.forEach(x=> console.log(` - ${x}`))
    console.log(`Effort: ${effort.toFixed(2)}`)
    console.log(`Total Fire: ${totalFire}`)
}