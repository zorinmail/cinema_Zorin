const genre_1 = 'фантастика'
const genre_2 = 'боевик'
const genre_3 = 'приключения'
const genre_4 = 'фэнтези'
const genre_5 = 'драма'
const genre_6 = 'комедия'
const genre_7 = 'мультфильм'

let start_film_1 = '10:00'
let start_film_2 = '12:00'
let start_film_3 = '14:00'
let start_film_4 = '16:00'

let name_film_1 = 'Человек-паук 123'
let name_film_2 = 'Собачья жизнь 2'
let name_film_3 = 'История игрушек 4'
let name_film_4 = 'Люди в черном: Интернэшнл'

//console.log('фильм 1 ', name_film_1)

let genre_film_1 = genre_1 + ', ' + genre_2 + ', ' + genre_3
let genre_film_2 = genre_4 + ', ' + genre_5 + ', ' + genre_6
let genre_film_3 = genre_7 + ', ' + genre_4 + ', ' + genre_6
let genre_film_4 = genre_1 + ', ' + genre_2 + ', ' + genre_6

//console.log('элемент 1 ', document.getElementById('name_film_1'))

let element_start_film_1 = document.getElementById('start_film_1')
let element_name_film_1 = document.getElementById('name_film_1')
let element_genre_film_1 = document.getElementById('genre_film_1')

//console.log('element_start_film_1 ', element_start_film_1)

element_start_film_1.innerHTML = start_film_1
element_name_film_1.innerHTML = name_film_1
element_genre_film_1.innerHTML = genre_film_1
