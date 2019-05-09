function total(num,num1){
    let firstResult = sFact1(num);
    let secondResult = sFact1(num1);
    console.log((firstResult/secondResult).toFixed(2))
    function sFact1(num)
    {
        let rval=1;
        for (let i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    }
    function sFact2(num1){
      let rval1=1;
        for (let i = 2; i <= num1; i++)
            rval1 = rval1 * i;
        return rval1;
    }
  
  }