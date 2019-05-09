function shortestAndLongest(word){
    let newArr = String([word]);
    let words = newArr.split(" ").filter(x=>x!=='');
   
    let theShortest = ''
    let theLongest =  ''
    for(let i = 0; i < words.length; i++){
       
       let currentWord = words[i];
        if(i == 0){
         
          theShortest = currentWord;
          theLongest = currentWord;
        }else{
          if(theShortest.length > currentWord.length){
            theShortest = currentWord;
          }
          if(theLongest.length < currentWord.length){
             theLongest = currentWord;
          }
   
   
        }
     
    }
    console.log(`Longest -> ${theLongest}`)
    console.log(`Shortest -> ${theShortest}`)
  }