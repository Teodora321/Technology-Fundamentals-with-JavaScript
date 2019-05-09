function solve(input) {
    input = input.sort(compareLength);

    function compareLength(a, b) {
        if (a.length < b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            return a.localeCompare(b)
            //return a>b
        } else if (a.length > b.length) {
            return a.length - b.length;
        }
    }
    for(let element of input){
        console.log(element);
    }

}

solve(["alpha", "beta", "gamma"])