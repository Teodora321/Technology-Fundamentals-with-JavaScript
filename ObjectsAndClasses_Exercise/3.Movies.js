function solve(input){

    let movies = [];

    for(let element of input){
        if(element.includes('add movie ')){
            let token = element
            .split('add movie ')
            .filter(x=>x!=='');
            let movieName = token[0];
            movies.push({
                name:movieName
            });
        } else if(element.includes(' directed by ')){
            let token = element
            .split(' directed by ')
            .filter(x=>x!=='');
            let movieName=token[0];
            let directorName=token[1];
            let movie=movies.find(m=>m.name===movieName);
            if(movie!==undefined){
                movie['director']=directorName;
            }
        } else if(element.includes(' on date ')){
            let token = element
            .split(' on date ')
            .filter(x=>x!=='');
            let movieName = token[0];
            let dateMovie = token[1];
            let movie=movies.find(m=>m.name===movieName);
            if(movie!==undefined){
                movie['date']=dateMovie
            }

        }
    }
    for(let movie of movies){
        if(movie.name && movie.director && movie.date){
        console.log(JSON.stringify(movie))
        }
        
    }

}
solve(['add movie Fast and Furious',
'add movie Godfather',
'Inception directed by Christopher Nolan',
'Godfather directed by Francis Ford Coppola',
'Godfather on date 29.07.2018',
'Fast and Furious on date 30.07.2018',
'Batman on date 01.08.2018',
'Fast and Furious directed by Rob Cohen'])