function cone(arg1 , arg2){
    let radius = Number(arg1);
    let height = Number(arg2);

    let volume = (Math.PI*height * (radius**2))* 1/3;
    let lateral =  Math.PI*radius* Math.sqrt(radius**2 + height**2);
    let base = Math.PI*(radius**2);
    let area = lateral + base;
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)
}
cone(3 , 5)