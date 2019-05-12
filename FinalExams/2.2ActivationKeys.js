function solve ([params]) {
    let result = []
    params
      .split('&')
      .map(x => x.match(/^([A-Za-z\d]{25}|[A-Za-z\d]{16})$/))
      .filter(x => x)
      .forEach(x => {
        result.push(
          x[1]
            .toUpperCase()
            .split('')
            .map(x => (isNaN(x) ? x : 9 - Number(x)))
            .join('')
            .match(x[0].length === 16 ? /.{4}/g : /.{5}/g)
            .join('-')
        )
      })
   
    console.log(result.join(', '))
  }
  solve(['t1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs'])