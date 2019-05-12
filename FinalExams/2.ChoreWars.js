function solve (params) {
    let patternDishes =/\<[a-z0-9]+\>/g;
    let patternCleaningTheHouse = /\[[A-Z0-9]+\]/;
    let patternLaundry = /\{.+\}/;

    let timeDishes=0;
    let timeCleaningTheHouse=0;
    let timeLaundry=0;

    for(let param of params){
        if (param === 'wife is happy'){
            break;
        }else{
            if(param.match(patternDishes)){
                let dishes = param.match(patternDishes)
                timeDishes += dishes[0]
                    .split('')
                    .filter(e=>Number.isInteger(+e))
                    .map(Number)
                    .reduce((a,b)=>a+b);
            }else if(param.match(patternCleaningTheHouse)){
                let house =param.match(patternCleaningTheHouse)
                timeCleaningTheHouse+=house[0]
                    .split('')
                    .filter(e=>Number.isInteger(+e))
                    .map(Number)
                    .reduce((a,b)=>a+b);
            }else if(param.match(patternLaundry)){
                let laundry = param.match(patternLaundry)
                timeLaundry+=laundry[0]
                .split('')
                .filter(e=>Number.isInteger(+e))
                .map(Number)
                .reduce((a,b)=>a+b);
            }

            
        }

    }
    console.log(`Doing the dishes - ${timeDishes} min.`)
    console.log(`Cleaning the house - ${timeCleaningTheHouse} min.`)
    console.log(`Doing the laundry - ${timeLaundry} min.`)
    console.log(`Total - ${timeDishes+timeCleaningTheHouse+timeLaundry} min.`)

  }
solve(['Vo.|1zps {lo2a}zgVGk{1)N+',
    'Asdad123zxc{3]',
   ' R[A [F67G9C]6e3C@',
    'MVo.|1zpshM<9) <d85ifkh59votu>@',
    '<dm0g2y34mw1kpds2>iD|"p',
    'wife is happy'])