function solve(num, arr) {

    let newArr = [];

    for (let i = 0; i <num ; i++) {
        NewArr = newArr.push(arr[i]);
    }
    let reversed='';
    for (let i = newArr.length-1; i >=0 ; i--) {
        reversed += `${newArr[i]} `;
    }
    console.log(reversed)
    
}
solve(3, ['10', '20', '30', '40', '50'])