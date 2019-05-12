function solve ([text, emojiCodes]) {
    let regex = /(?<=\s|^):([a-z]{4,}):(?=[,.!?\s]|$)/g
    let emojies = []
    let power = 0
   
    let match = regex.exec(text)
    while (match) {
      emojies.push(match[0])
      power += match[1].split('').map(x => x.charCodeAt(0)).reduce((a, b) => a + b)
      match = regex.exec(text)
    }
   
    let emojiToCheck = emojiCodes.split(':').map(x => String.fromCharCode(x)).join('')
    if (emojies.some(e => e === `:${emojiToCheck}:`)) {
      power *= 2
    }
   
    if (emojies.length > 0) {
      console.log(`Emojis found: ${emojies.join(', ')}`)
    }
   
    console.log(`Total Emoji Power: ${power}`)
  }
  solve([ 'Hello I am Mark from :England: and I am :one: :seven: years old, I have a :hamster: as pet.',
'115:101:118:101:110' ])