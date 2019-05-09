function bomb(arr1, arr2) {
    let num = arr2.shift();
    let range = arr2.pop();
   
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === num) {
        //let index = arr1.indexOf(num);
        arr1.splice(Math.max(0, i - range), 2 * range + 1);
        i--;
      }
    }
   
    console.log(arr1.reduce((a, b) => a + b, 0));
  }