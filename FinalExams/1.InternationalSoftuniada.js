function solve (params) {
    params.pop()
    let countries = {}
   
    params.forEach(param => {
      let [country, contestant, points] = param.split(' -> ')
   
      if (!countries.hasOwnProperty(country)) {
        countries[country] = []
      }
   
      if (!countries[country].hasOwnProperty(contestant)) {
        countries[country][contestant] = 0
      }
   
      countries[country][contestant] += Number(points)
    })
   
    Object.entries(countries)
      .sort((a, b) => {
        let aSum = Object.values(b[1]).reduce((n1, n2) => n1 + n2, 0)
        let bSum = Object.values(a[1]).reduce((n1, n2) => n1 + n2, 0)
        return aSum - bSum
      })
      .forEach(country => {
        let [countryName, totalPoints] = [
          country[0],
          Object.values(country[1]).reduce((a, b) => a + b, 0)
        ]
        console.log(`${countryName}: ${totalPoints}`)
   
        Object.entries(country[1]).forEach(contestant => {
          console.log(`-- ${contestant[0]} -> ${contestant[1]}`)
        })
      })
  }
  solve([ 'Bulgaria -> Ivan Ivanov -> 25',
'Germany -> Otto Muller -> 4',
'England -> John Addams -> 10',
'Bulgaria -> Georgi Georgiev -> 18',
'England -> Valteri Bottas -> 8',
'Bulgaria -> Georgi Georgiev -> 6',
'END' ])