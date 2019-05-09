function solve(input) {

    let arr = [];
    for (let string of input) {
        let tokens = string.split(" ");
        let name = tokens[0];
        let number = tokens[1];
        arr[name]=number;
    }

    // for (let i = 0; i <input.length ; i++) {
    //     let [name,number] = input[i].split(" ");
    //     arr[name]=number;
    // }

    Object.keys(arr).forEach((k=>console.log(`${k} -> ${arr[k]}`)));
    // for (let key in arr) {
    //     console.log(`${key} -> ${arr[key]}`);
    // }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);