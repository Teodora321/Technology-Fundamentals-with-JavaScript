function solve(input) {
    let result = new Map();
    let neighborhoods = input.shift().split(', ');
    neighborhoods.forEach(n => result.set(n, []));

    for (let line of input) {
        let [neighborhoods, name] = line.split(" - ");
        if (result.has(neighborhoods)) {
            let people = result.get(neighborhoods);
            people.push(name);

            result.set(neighborhoods,people)
        }

    }
    let output = [...result.entries()];
    output.sort((a,b)=>b[1].length-a[1].length);
    for (let [element, people] of output) {
        console.log(`${element}: ${people.length}`);
        for (let person of people) {
            console.log(`--${person}`);
        }
    }


}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
)