function solve (array){
 
    array.sort(function(a, b) {
        return b - a;
    });
 
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[2]);
}