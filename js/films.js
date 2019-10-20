// const genre_1 = 'фантастика'
// const genre_2 = 'боевик'
// const genre_3 = 'приключения'
// const genre_4 = 'фэнтези'
// const genre_5 = 'драма'
// const genre_6 = 'комедия'
// const genre_7 = 'мультфильм'

// let start_film_1 = '10:00'
// let start_film_2 = '12:00'
// let start_film_3 = '14:00'
// let start_film_4 = '16:00'

// let name_film_1 = 'Человек-паук 123'
// let name_film_2 = 'Собачья жизнь 2'
// let name_film_3 = 'История игрушек 4'
// let name_film_4 = 'Люди в черном: Интернэшнл'

// //console.log('фильм 1 ', name_film_1)

// let genre_film_1 = genre_1 + ', ' + genre_2 + ', ' + genre_3
// let genre_film_2 = genre_4 + ', ' + genre_5 + ', ' + genre_6
// let genre_film_3 = genre_7 + ', ' + genre_4 + ', ' + genre_6
// let genre_film_4 = genre_1 + ', ' + genre_2 + ', ' + genre_6

//console.log('элемент 1 ', document.getElementById('name_film_1'))

films = [
    film1 = {
        name: 'Человек-Паук',
        start: '12:00',
        genre: [0, 1],
        hire: true,
        new: false,
        description: 'Lorem ipsum'
    },
    film2 = {
        name: 'Собачья жизнь 2',
        start: '14:00',
        genre: [2, 3, 4],
        hire: true,
        new: false,
        description: 'Lorem ipsum'
    },
    film3 = {
        name: 'История игрушек 4',
        start: '16:00',
        genre: [2, 4, 5],
        hire: true,
        new: false,
        description: 'Lorem ipsum'
    },
    film4 = {
        name: 'Люди в черном',
        start: '18:00',
        genre: [0, 1, 4],
        hire: false,
        new: true,
        description: 'Lorem ipsum'
    },
    film5 = {
        name: 'История игрушек 6',
        start: '16:00',
        genre: [2, 4, 5],
        hire: false,
        new: true,
        description: 'Lorem ipsum'
    },
    film6 = {
        name: 'Люди в черном 6',
        start: '18:00',
        genre: [0, 1, 4],
        hire: false,
        new: true,
        description: 'Lorem ipsum'
    }
]

//словарь жанров
const genres = [
    'Фантастика', //0
    'Боевик',     //1
    'Фэнтези',    //2
    'Драма',      //3
    'Комедия',    //4
    'Мультфильм'  //5
]



let hireFilms = []
let newFilm = []

for (i = 0; i < films.length; i++){
    //console.log(films[i])
    if (films[i].hire == true) {
        // console.log(films[i])
        hireFilms.push(films[i])
    }
    if (films[i].hire == false && films[i].new == true) {
        // console.log(films[i])
        newFilm.push(films[i])
    }
}
console.log(hireFilms)
console.log(newFilm)

const film = {
    getName: function () {
        console.log(this.name)
    },
    getStart: function () {
        console.log(this.start)
    },
    getGenre: function () {
        const genresFilm = this.genre
        let arrGenre = []
        for (i = 0; i < genres.length; i++) {
            //console.log(genresFilm[i])
            arrGenre.push(genres[genresFilm[i]])
        }
        let strGenre = arrGenre.join(',')
        console.log('жанры', strGenre)
    }
}

for (let i = 0; i< hireFilms.length; i++) {
    дуе ашдь
}


for (let i = 0; i < hireFilms.length; i++) {
    film.getName.bind(hireFilms[i])()
    film.getStart.bind(hireFilms[i])()
    film.getGenre.bind(hireFilms[i])()

}





// let element_start_film_1 = document.getElementById('start_film_1')
// let element_name_film_1 = document.getElementById('name_film_1')
// let element_genre_film_1 = document.getElementById('genre_film_1')

// //console.log('element_start_film_1 ', element_start_film_1)

// element_start_film_1.innerHTML = start_film_1
// element_name_film_1.innerHTML = name_film_1
// element_genre_film_1.innerHTML = genre_film_1
