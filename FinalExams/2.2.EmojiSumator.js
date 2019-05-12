function solve(params) {
    let pattern = /(?<=\s)\:[a-z]{4,}\:(?=\s|,|\.|\?|\!)/g
    let result
    let validKey = []
    let emojiCode = params.pop().split(':').map(w => Number(w))
 
    while ((result = pattern.exec(params)) !== null) {
        validKey.push(result[0])
    }
 
    if (validKey.length === 0) {
        console.log(`Total Emoji Power: 0`)
 
    } else {
        let sum = []
        for (let key of validKey) {
            let word = key.split(':').filter(x => x !== '')[0]
            let split = word
                .split('')
                .map(ch => ch.charCodeAt(0))
                .reduce((a, b) => Number(a) + Number(b))
            sum.push(split)
 
        }
 
        let sumWord = sum.reduce((a, b) => Number(a) + Number(b))
        let emojiSum = emojiCode.reduce((a, b) => Number(a) + Number(b))
 
        for (let i = 0; i < sum.length; i++) {
            let currentNumber = Number(sum[i])
            if (currentNumber === emojiSum) {
                sumWord *= 2;
            }
 
 
        }
        console.log(`Emojis found: ${validKey.join(', ')}`)
        console.log(`Total Emoji Power: ${sumWord}`)
 
    }
 
}
solve()