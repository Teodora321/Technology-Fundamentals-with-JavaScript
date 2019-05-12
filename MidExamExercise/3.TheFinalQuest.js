function solve (params) {
    let message = params[0].split(' ')
   
    for (let i = 1; i <= params.length - 1; i++) {
      if (params[i] === 'Stop') {
        break
      }
      let tokens = params[i].split(' ')
      let command = tokens[0]
      let args = tokens[1]
      if (command === 'Delete') {
        let index = +args
        if (index >= 0 && index <= message.length - 1) {
          message.splice(index + 1, 1)
        }
      } else if (command === 'Swap') {
        let word = args
        let swapped = tokens[2]
        let index = +message.indexOf(word)
        let swappedIndex = +message.indexOf(swapped)
        if (index !== -1 && swappedIndex !== -1) {
          message.splice(index, 1, swapped)
          message.splice(swappedIndex, 1, word)
        }
      } else if (command === 'Put') {
        let putIndex = +tokens[2]
        let word = args
   
        if (putIndex > 0 && putIndex <= message.length + 1) {
          message.splice(putIndex - 1, 0, word)
        }
      } else if (command === 'Sort') {
        message.sort()
        message.reverse()
      } else if (command === 'Replace') {
        let word1 = args
        let word2 = tokens[2]
        let index = +message.indexOf(word2)
   
        if (index !== -1) {
          message.splice(index, 1, word1)
        }
      }
    }
    console.log(message.join(' '))
  }
solve(['Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop',
    ''])