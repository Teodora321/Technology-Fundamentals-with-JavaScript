function solve(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let index = Math.max(i - k, 0);
        let newArr = result.slice(index);
        let sum = newArr.reduce((a, b) => a + b);
        result.push(sum);

    }
    console.log(result.join(' '));
}

solve(6,3)