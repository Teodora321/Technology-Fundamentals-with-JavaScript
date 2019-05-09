function solve(params){

let products = {};

for (let i =0; i<params.length;i++ ) {
    for(let j = 0; j <params[i].length; j+=2){
        let product = params[i][j];
        let quantity = +params[i][j+1];
        if(!products.hasOwnProperty(product)){
            products[product]=0
        }  
        products[product]+=quantity  
    }
   
}
console.log(products)

}