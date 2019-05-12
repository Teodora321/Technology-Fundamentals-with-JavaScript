function solve([budget, students, flourPrice, eggPrice, apronPrice]) {
    let freePackages = Math.floor(students / 5);

    let totalPrice = (apronPrice * Math.ceil(students * 1.2)) +
        (eggPrice * 10 * students) +
        (flourPrice * (students - freePackages));

    console.log(budget >= totalPrice ?
        `Items purchased for ${totalPrice.toFixed(2)}$.` :
        `${(totalPrice - budget).toFixed(2)}$ more needed.`);
}
solve([50, 2, 1.0, 0.10, 10.0])

