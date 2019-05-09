function solve(firstName,lastName,age) {

    let result={
        firstName,
        lastName,
        age
    };

     let enries = Object.entries(result)
    // for (const pair of enries){
    //     console.log(`${pair[0]}: ${pair[1]}`)
    //
    // }
    for (const [firstName, secondName] of enries){
        console.log(`${firstName}, ${secondName}`)
    }

    // let arr =['Mariya', 'Petya'];
    // let [firstGirl, secondGirl] = girls; декларираме няколко променливи неведнъж;

}
solve("Peter","Pan", "20")