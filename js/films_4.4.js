let films = [
    ['10:00', 'Человек-паук', [0, 1, 6], 'https://www.kinopoisk.ru/film/1008445/'],
    ['12:00', 'Собачья жизнь 2', [2, 3, 4], 'https://www.kinopoisk.ru/film/sobachya-zhizn-2-2019-1122114/'],
    ['14:00', 'История игрушек 4', [5, 2, 4], 'https://www.kinopoisk.ru/film/istoriya-igrushek-4-2019-846824/'],
    ['16:00', 'Люди в черном: Интернэшнл', [0, 1, 4], 'https://www.kinopoisk.ru/film/lyudi-v-chernom-interneshnl-2019-693730/'],
    ['18:00', 'Lego movie', [5, 4, 2], 'https://www.kinopoisk.ru/film/lyudi-v-chernom-interneshnl-2019-693730/']
]
//let films = []

//словарь жанров
const genres = [
    'фантастика', //0
    'боевик',     //1
    'фэнтези',    //2
    'драма',      //3
    'комедия',    //4
    'мультфильм', //5
    'приключения' //6
]



function createTableFilms(films, genres) {

    let table_body = document.getElementById('movie-list__body')

    //сначала очищаем таблицу (наверное, потом может понадобиться при сортировке и т.п.)
    while (table_body.firstChild) {
        table_body.removeChild(table_body.firstChild);
    }
    //console.log(table_body)

    let filmGenre = [];
    let filmsGenres = [];

    //переводим жанры из номеров в слова
    for (let i = 0; i < films.length; i++){
        filmGenre = []
        for (let j = 0; j < (films[i][2]).length; j++) {
            filmGenre.push(genres[films[i][2][j]])
        }
        filmsGenres.push(filmGenre)
    }

    let i = 0,          //для цикла do...while
        k = 0;          //формирование id ячеек таблицы
    let filmStart = ''; //начало фильма
    let filmName = '';  //название фильма
    let strGenre = '';  //жанры
    let trClass = '';   //класс для цвета четных и нечетных строк
    let linkFilm = '';  //ссылка ка кинопоиск

    if (films.length == 0){ //если массив с фильмами пуст
        //добавить запись об отсутствии в прокате фильмов
        table_body.insertAdjacentHTML('beforeend', '<tr class="movie-list__table-dark">\
        <td colspan="4" class="movie-list__table-film-b">К сожалению, сейчас фильмов нет</td>\
        </tr>');
        return 0;
    }
    while (i < films.length) {
        strGenre = ''
        k = i + 1;
        filmStart = films[i][0];
        filmName = films[i][1];
        strGenre = filmsGenres[i].join(', ');
        linkFilm = films[i][3]

        //определение четности строки
        if ((i+1)%2 != 0) {
            trClass = 'movie-list__table-dark'
        } else {
            trClass = 'movie-list__table-light'
        }

        table_body.insertAdjacentHTML('beforeend', `<tr class="${trClass} strFilmHire" id="film_${k}">\
            <td class="movie-list__table-time-b"  id="start_film_${k}">${filmStart}</td>\
            <td class="movie-list__table-film-b" id="name_film_${k}"><a title="Кинопоиск" href="${linkFilm}"\
                target="_blank">${filmName}</a></td>\
            <td class="movie-list__table-genre-b" id="genre_film_${k}">${strGenre}</td>\
            <td class="movie-list__table-plus">\
                <svg \
                xmlns="http://www.w3.org/2000/svg"\
                xmlns:xlink="http://www.w3.org/1999/xlink"\
                width="33px" height="33px">\
                <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"\
                d="M16.505,32.994 C7.393,32.994 0.005,25.607 0.005,16.494 C0.005,7.381 7.393,-0.006 16.505,-0.006 C25.618,-0.006 33.005,7.381 33.005,16.494 C33.005,25.607 25.618,32.994 16.505,32.994 ZM24.214,14.591 L18.356,14.631 L18.356,8.796 L13.958,8.777 L13.958,14.637 L8.083,14.637 L8.083,19.074 L13.958,19.074 L13.958,24.889 L18.336,24.889 L18.307,19.074 L24.231,19.074 L24.214,14.591 Z"/>\
                </svg>\
            </td>\
        </tr>`)
        let tr = document.getElementsByClassName('strFilmHire')
        //console.log(tr)
        tr.onclick = function () {
            let orderForm = document.getElementById('orderForm')
            let closeOrderForm = document.getElementById('closeOrderForm')
            orderForm.onclick = function(){
                orderForm.style.display = 'block';
            }
            closeOrderForm.onclick = function(){
                orderForm.style.display = 'none';
            }
            //console.log(this)
        }
    i++
    }
    return true;
    //console.log(tr)
}
createTableFilms(films, genres)


let trs = document.querySelectorAll('.movie-list__table strFilmHire'); 
for (var i = 0; i < trs.length; i++) {
    trs[i].onclick = function (){
        let orderForm = document.getElementById('orderForm')
        let closeOrderForm = document.getElementById('closeOrderForm')
        orderForm.style.display = 'block';
        closeOrderForm.onclick = function(){
            orderForm.style.display = 'none';
        }
    }
}


const listFilms = document.querySelectorAll('.strFilmHire')
//console.log(listFilms)