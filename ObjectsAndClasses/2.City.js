function city(name, area, population, country, postCode) {
     let result = {
         name,
         area,
         population,
         country,
         postCode
     }
    let entries = Object.entries(result)
     for(const element of entries){
         console.log(`${element[0]} -> ${element[1]}`)
     }

}
city("Sofia"," 492", "1238438", "Bulgaria", "1000")