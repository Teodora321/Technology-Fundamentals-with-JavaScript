function rotation(array, num) {

    for (let i = 0; i < num; i++) {

        let croppedElement=array.shift();
        array.push(croppedElement);
    }
    console.log(array.join(" "))


}
rotation([51,47,32,61,21], 2)