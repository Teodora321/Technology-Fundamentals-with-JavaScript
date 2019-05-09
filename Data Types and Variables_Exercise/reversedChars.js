function reversedChars(a,b,c){
    let total = a+b+c;
    let splitTotal = total.split("");
    let reversedTotal = splitTotal.reverse();
    let joinTotal = reversedTotal.join(" ");
    console.log(joinTotal)
}
reversedChars("A","B","C")