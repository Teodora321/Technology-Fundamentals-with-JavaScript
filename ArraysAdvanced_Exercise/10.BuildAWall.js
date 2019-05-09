function buildAWall(arr) {
    let isReady = false;
    let oneDay = []
 
    while (isReady !== true) {
        isReady = true;
        let sum = 0;
 
        for (let i = 0; i < arr.length; i++) {
            let current = arr[i];
            if (current < 30) {
                arr[i]++;
                sum += 195;
                isReady = false;
 
            }
 
        }
        if (isReady) {
            break;
        }
        oneDay.push(sum)
 
    }
    let price=0;
    for (let i = 0; i <oneDay.length; i++) {
        let current=oneDay[i];
        price+=current *1900
 
    }
    console.log(oneDay.join(', '))
    console.log(`${price} pesos`)
}