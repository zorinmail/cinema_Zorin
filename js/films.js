
let globalFunction = function(){

    //информация о фильмах
    const films = [
        {
            start: '10:00',
            name: 'Человек-паук',
            link: 'https://www.kinopoisk.ru/film/1008445/',
            genre: [0, 1, 6],
            filmHire: false,
            filmNew: true,
            image: 'images/spyder-man.png',
            socialNetworks: ['https://www.facebook.com', 'https://twitter.com/', 'https://www.behance.net', 'https://dribbble.com'],
            price: 350,
        },
        {
            start: '12:00',
            name: 'Собачья жизнь 2',
            link: 'https://www.kinopoisk.ru/film/sobachya-zhizn-2-2019-1122114/',
            genre: [2, 3, 4],
            filmHire: false,
            filmNew: true,
            image: 'images/dogs-life.png',
            socialNetworks: ['https://www.facebook.com', 'https://twitter.com/', 'https://www.behance.net', 'https://dribbble.com'],
            price: 300,
        },
        {
            start: '14:00',
            name: 'История игрушек 4',
            link: 'https://www.kinopoisk.ru/film/istoriya-igrushek-4-2019-846824/',
            genre: [5, 2, 4],
            filmHire: true,
            filmNew: false,
            image: 'images/toy_story_4.png',
            socialNetworks: ['https://www.facebook.com', 'https://twitter.com/', 'https://www.behance.net', 'https://dribbble.com'],
            price: 250,
        },
        {
            start: '16:00',
            name: 'Люди в черном: Интернэшнл',
            link: 'https://www.kinopoisk.ru/film/lyudi-v-chernom-interneshnl-2019-693730/',
            genre: [0, 1, 4],
            filmHire: true,
            filmNew: false,
            image: 'images/MIB.png',
            socialNetworks: ['https://www.facebook.com', 'https://twitter.com/', 'https://www.behance.net', 'https://dribbble.com'],
            price: 800,
        },
        {
            start: '18:00',
            name: 'The Lego Movie 2: The Second Part',
            link: 'https://www.kinopoisk.ru/film/829407/',
            genre: [5, 4, 2, 1],
            filmHire: true,
            filmNew: true,
            image: 'images/lego_2.png',
            socialNetworks: ['https://www.facebook.com', 'https://twitter.com/', 'https://www.behance.net', 'https://dribbble.com'],
            price: 300,
        },
        {
            start: '24:00',
            name: 'Zомбилэнд: контрольный выстрел',
            link: 'https://www.kinopoisk.ru/film/dobro-pozhalovat-v-zombilend-2-2019-489414/',
            genre: [7, 1, 4],
            filmHire: true,
            filmNew: true,
            image: 'images/Zомбилэнд.png',
            socialNetworks: ['https://www.facebook.com', 'https://twitter.com/', 'https://www.behance.net', 'https://dribbble.com'],
            price: 350,
        },
        {
            start: '19:00',
            name: 'Привидение',
            link: 'https://www.kinopoisk.ru/film/1991/',
            genre: [3, 8],
            filmHire: false,
            filmNew: false,
            image: 'images/ghost.png',
            socialNetworks: ['https://www.facebook.com', 'https://twitter.com/', 'https://www.behance.net', 'https://dribbble.com'],
            price: 250,
        },
    ];

    //словарь жанров
    const genres = [
        'фантастика', //0
        'боевик',     //1
        'фэнтези',    //2
        'драма',      //3
        'комедия',    //4
        'мультфильм', //5
        'приключения',//6
        'ужасы',      //7
        'мистика',    //8
    ];



const film = {

    sortFilms: function(){
        let newFilms = [],
            filmsInHire = [],
            nowhereFilms = [];

        films.forEach(film => {
            if (film.filmHire){
                filmsInHire.push(film);
            };
            if (film.filmNew) {
                newFilms.push(film);
            };
            if (!film.filmNew && !film.filmHire) {
                nowhereFilms.push(film);
            };
        });
        let allFilms = {
            newFilms,
            filmsInHire,
            nowhereFilms,
        };
        return allFilms;
    },

    getName: function (keyWord) {
        let sortedFilms = this.sortFilms();
        if (keyWord == "new") {
            for (let i = 0; i < sortedFilms['newFilms'].length; i++) {
                console.log(sortedFilms['newFilms'][i].name);
            };
        } else if (keyWord == "hire") {
            for (let i = 0; i < sortedFilms['filmsInHire'].length; i++) {
                console.log(sortedFilms['filmsInHire'][i].name);
            };
        } else {
            return false;
        };
    },

    getStart: function (keyWord) {
        let sortedFilms = this.sortFilms();
        if (keyWord == "new") {
            for (let i = 0; i < sortedFilms['newFilms'].length; i++) {
                console.log(sortedFilms['newFilms'][i].start);
            };
        } else if (keyWord == "hire") {
            for (let i = 0; i < sortedFilms['filmsInHire'].length; i++) {
                console.log(sortedFilms['filmsInHire'][i].start);
            };
        } else {
            return false;
        };
    },

    getGenre: function (arrayOfNumbers) {
        let arrayOfWords = [];
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            arrayOfWords.push(genres[arrayOfNumbers[i]]);
        };
        let strGenre = arrayOfWords.join(', ');
        // console.log(strGenre);
        return strGenre;
    },

    getPrice: function (filmname, placeNum, placesInRow) {
        let priceFilm = 0,
            pricePlace = 0;

        films.forEach(film => {
            if (film.name==filmname){
                priceFilm = film.price;
            };
        });
        placesInRow.forEach(place => {
            if (place.number==placeNum){
                pricePlace=place.price;
            };
        });
        let prices = {
            priceFilm,
            pricePlace,
        }
        return prices;
    },

    createPlaces: function (numOfPlaces) {
        let places = [];
        for (let i = 0; i <= numOfPlaces-1; i++) {
            let number = i+1;
            let price = 0;
            let booking = true;
            let row = 1; //ряд всегда 1

//определение брони места
            if (Math.random() > 0.5) {
                booking = true;
            } else {
                booking = false;
            };

//определение цены
            if (i <= 2 || i > (numOfPlaces - 4)) {
                price = 1;
            } else {
                price = 1.5;
            };


            let place = {
                number,
                price,
                booking,
                row,
            };
            // console.log(places);
            places.push(place);
        };
        return places;
    },

    //создание map. Ключи - ряды, значения - массивы мест. return map.
    getRows: function (){
        let places = this.createPlaces(10);
        let rowsAndPlaces = [],
            map = new Map();

        if (places.length == 0) {
            return false;
        };

        //узнаем уникальные ряды
        places.forEach(place => {
            map.set(place.row, []);
        });

        //создаем map
        for(let key of map.keys()) {
            places.forEach(place => {
                if (place.row == key){
                    rowsAndPlaces.push(place); 
                };
            });
            map.set(key, rowsAndPlaces);
            rowsAndPlaces=[];
        };
        let sortedMap = new Map([...map.entries()].sort()); // http://qaru.site/questions/188901/is-it-possible-to-sort-a-es6-map-object
        return sortedMap;
    },

    renderFilmsInHire: function () {
        let table_body = document.getElementById('movie-list__body'),
            k = 0,          //формирование id ячеек таблицы
            trClass = '',   //класс для цвета четных и нечетных строк
            rowsMap = this.getRows(), //map с местами для каждого ряда
            sortedFilms = this.sortFilms();

        //если массив с фильмами пуст
        if (sortedFilms['filmsInHire'].length == 0){
            table_body.insertAdjacentHTML('beforeend', '<tr class="movie-list__table-dark">\
            <td colspan="4" class="movie-list__table-film-b">К сожалению, сейчас фильмов в прокате нет</td>\
            </tr>');
            return 0;
        }

        
        for (let i = 0; i < sortedFilms['filmsInHire'].length; i++) {
            
            //определение четности строки для выбора background строк в таблице
            if ((i+1)%2 != 0) {
                trClass = 'movie-list__table-dark';
            } else {
                trClass = 'movie-list__table-light';
            };

            let filmStart = sortedFilms['filmsInHire'][i].start,
                linkFilm = sortedFilms['filmsInHire'][i].link,
                filmName = sortedFilms['filmsInHire'][i].name,
                filmImg = sortedFilms['filmsInHire'][i].image,
                links = sortedFilms['filmsInHire'][i].socialNetworks,
                linkFacebook = links[0],
                linkTwitter = links[1],
                linkBehance = links[2],
                linkDribbble = links[3],
                filmPrice = sortedFilms['filmsInHire'][i].price,
                strGenre = this.getGenre(sortedFilms['filmsInHire'][i].genre),
                tmpl = document.querySelector('#tableRow'),
                tr = tmpl.content.querySelector('tr'),
                td = tmpl.content.querySelectorAll('td'),
                a = td[1].querySelector('a'),
                svg = td[4].querySelector('svg');


            tr.id = `film_${k}`;
            tr.classList.add('strFilmHire');
            tr.classList.add(`${trClass}`);
            td[0].textContent = filmStart;
            td[0].id = `start_film_${k}`;
            a.textContent = filmName;
            a.href = linkFilm;
            td[1].id = `name_film_${k}`;
            td[2].textContent = strGenre;
            td[2].id = `genre_film_${k}`;
            td[3].textContent = `от ${filmPrice}`;
            td[3].id = `price_film_${k}`;
            svg.id = `buy_tickets_${k}`;


            let clone = document.importNode(tmpl.content, true);
            table_body.appendChild(clone);

            tr.classList.remove(`${trClass}`); //без этого все строки кроме первой светлые

            // бронирование билета при клике на плюсик
            let buy_ticket = document.getElementById(`buy_tickets_${k}`),
                container = document.getElementById("chooseFilmForm_container"),
                chooseFilmForm = document.getElementById("chooseFilmForm"),
                closeFilmForm = document.getElementById("closeFilmForm"),
                chooseFilmForm__info = document.getElementById("chooseFilmForm__info"),
                
                // placesContainer = document.getElementById("places"),

                placesContainer = document.createElement("div");
                placesContainer.classList.add('places');
                placesContainer.id = 'places';
                


            let placeHTML = ``,
                temp = []; //массив для мест в ряду. Для ряда свой temp

            let chooseFilmForm__template = document.querySelector('#chooseFilmForm__template');



            buy_ticket.onclick = function () {
                
                let divs = chooseFilmForm__template.content.querySelectorAll('div');
                let img = chooseFilmForm__template.content.querySelector('img');
                img.src = filmImg;
                img.alt = filmName;
                img.title = filmName;
                divs[1].textContent = filmName;

                container.style.display = 'block';


                while (chooseFilmForm__info.firstChild) {
                    chooseFilmForm__info.removeChild(chooseFilmForm__info.firstChild);
                };
                let clone = document.importNode(chooseFilmForm__template.content, true);
                chooseFilmForm__info.appendChild(clone);


                while (placesContainer.firstChild) {
                    placesContainer.removeChild(placesContainer.firstChild);
                };
                chooseFilmForm.appendChild(placesContainer);

                for(let key of rowsMap.keys()) {
                    divRow = document.createElement("div");
                    divRow.classList.add('placeRow');
                    divRow.classList.add(`placeRow${key}`);
                    divRow.id=`placeRow${key}`;
                    temp = rowsMap.get(key);
                    for (let i = 0; i < temp.length; i++) {
                        placeHTML = `${temp[i].number}`;
                        divPlace = document.createElement("div");
                        divPlace.classList.add(`place`);
                        if(temp[i].booking){
                            divPlace.classList.add(`place_taken`);
                        } else {
                            divPlace.classList.add(`place_free`);
                        };

                        divPlace.addEventListener('click', ()=>{
                            order.bind(film)(temp, event);
                        });

                        divPlace.addEventListener('click', placeToggle.bind(film));

                        $(divPlace).on('after_order', placeToggle.bind(film));

                        divPlace.addEventListener('mouseover', placeHover);

                        
                        // $(divPlace).on('after_toggle', placeHoverOut);

                        divPlace.addEventListener('mouseout', placeHoverOut);

                        
                        divPlace.addEventListener('contextmenu', ()=>{
                            placeContext.bind(film)(temp, event);
                        });

                        divPlace.innerHTML = placeHTML;
                        divRow.appendChild(divPlace);
                    };
                    placesContainer.appendChild(divRow);
                };
                // container.addEventListener('click', ()=>{
                //     orderBubble.bind(film)(temp, event);
                // });
            };
            closeFilmForm.onclick = function(){
                chooseFilmForm.removeChild(chooseFilmForm.lastChild);
                container.style.display = 'none';
            };
            k += 1;
        };
    },

    renderNewFilms: function () {
        let movieGrid = document.getElementById('movie-grid'),
            sortedFilms = this.sortFilms();
        
        for (let i = 0; i < sortedFilms['newFilms'].length; i++) {

            let filmImg = sortedFilms['newFilms'][i].image,
                filmName = sortedFilms['newFilms'][i].name,
                links = sortedFilms['newFilms'][i].socialNetworks,
                linkFacebook = links[0],
                linkTwitter = links[1],
                linkBehance = links[2],
                linkDribbble = links[3],
                tmpl = document.querySelector('#movie-grid__item'),
                p = tmpl.content.querySelectorAll('p'),
                img = tmpl.content.querySelector('img'),
                a = tmpl.content.querySelectorAll('a');
            
            img.src = filmImg;
            img.alt = filmName;
            img.title = filmName;
            p[0].textContent = filmName;
            p[1].innerHTML = `More about selling in the <br/> Envato Marketplaces`;
            a[0].href = linkTwitter;
            a[1].href = linkFacebook;
            a[2].href = linkBehance;
            a[3].href = linkDribbble;

            let clone = document.importNode(tmpl.content, true);
            movieGrid.appendChild(clone);
        };
    },
};


// film.getName.bind(film)("new");
// film.getStart.bind(film)("new");
film.renderFilmsInHire.bind(film)();
film.renderNewFilms.bind(film)();
// film.getRows.bind(film)();

// обработка клика на квадрате с местом, заполнение элементов input формы
let order = function(temp, event) {
    let chooseFilmForm__place = document.getElementById("chooseFilmForm__place");
    let chooseFilmForm__price = document.getElementById("chooseFilmForm__price");
    let el = event.target;

    if (el.classList.contains('place_free')) {
        let filmname = document.getElementById("filmname").innerHTML;
        let placeNum = el.innerHTML;
        chooseFilmForm__place.value = placeNum;
        chooseFilmForm__price.value = this.getPrice(filmname, placeNum, temp)['priceFilm'] * this.getPrice(filmname, placeNum, temp)['pricePlace'];
    } else if (el.classList.contains('place_chosen')) {
        chooseFilmForm__place.value = '';
        chooseFilmForm__price.value = '';
    } else {
        chooseFilmForm__place.value = '';
        chooseFilmForm__price.value = '';
    };
    $(el).trigger('after_order');
};

//обработчик на всплывающие события
// let orderBubble = function(temp, event) {

//     let el = event.target;
//     if (el.classList.contains('place')){
//         let chooseFilmForm__place = document.getElementById("chooseFilmForm__place");
//         let chooseFilmForm__price = document.getElementById("chooseFilmForm__price");
//         if (el.classList.contains('place_free')) {
//             let filmname = document.getElementById("filmname").innerHTML;
//             let placeNum = el.innerHTML;
//             chooseFilmForm__place.value = placeNum;
//             chooseFilmForm__price.value = this.getPrice(filmname, placeNum, temp)['priceFilm'] * this.getPrice(filmname, placeNum, temp)['pricePlace'];
//         } else if (el.classList.contains('place_chosen')) {
//             chooseFilmForm__place.value = '';
//             chooseFilmForm__price.value = '';
//         } else {
//             chooseFilmForm__place.value = '';
//             chooseFilmForm__price.value = '';
//         };
//     };
//     $(el).trigger('after_orderBubble');
//     // event.stopPropagation();
// };


// обработка клика на квадрате с местом, смена цвета
let placeToggle = function(e) {
    let el = e.target;
    // el.classList.toggle('place_chosen');
    if (el.classList.contains('place_free')) {
        el.classList.remove('place_free');
        el.classList.add('place_chosen');
    } else if (el.classList.contains('place_chosen')) {
        el.classList.remove('place_chosen');
        el.classList.add('place_free');
    };
    $(el).trigger('after_toggle');
};

// обрабтка правого клика на квадате с местом
let placeContext = function(temp, event){
    let el = event.target;
    let filmname = document.getElementById("filmname").innerHTML;
    let placeNum = el.innerHTML;
    let priceFilm = 0;
    let pricePlace = 0;
    let price = 0;
    priceFilm = this.getPrice(filmname, placeNum, temp)['priceFilm'];
    pricePlace = this.getPrice(filmname, placeNum, temp)['pricePlace'];
    price = priceFilm * pricePlace;
    alert(price);
    event.preventDefault();
};

// обработка события перемещения курсора мыши над элементом
let placeHover = function(){
    this.style.background = '#4b4d4f';
};

// обработка события перемещения курсора мыши за пределы элемента
let placeHoverOut = function(){
    if(this.classList.contains('place_free')){
        this.style.background = '#a3cc40';
    } else if (this.classList.contains('place_taken') || this.classList.contains('place_chosen')) {
        this.style.background = '#ffa500';
    }
};

};


$(document).ready(globalFunction);

   //массив мест
    // const places = [
    //     {
    //         number: '1',
    //         price: '1',
    //         booking: false,
    //         row: 1
    //     },
    //     {
    //         number: '2',
    //         price: '1',
    //         booking: false,
    //         row: 1
    //     },
    //     {
    //         number: '3',
    //         price: '1.2',
    //         booking: true,
    //         row: 1
    //     },
    //     {
    //         number: '4',
    //         price: '1.2',
    //         booking: false,
    //         row: 1
    //     },
    //     {
    //         number: '5',
    //         price: '1.2',
    //         booking: false,
    //         row: 1
    //     },
    //     {
    //         number: '6',
    //         price: '1.2',
    //         booking: false,
    //         row: 1
    //     },
    //     {
    //         number: '7',
    //         price: '1',
    //         booking: false,
    //         row: 1
    //     },
    //     {
    //         number: '8',
    //         price: '1',
    //         booking: false,
    //         row: 1
    //     },
    //     {
    //         number: '9',
    //         price: '1',
    //         booking: false,
    //         row: 2
    //     },
    //     {
    //         number: '10',
    //         price: '1',
    //         booking: false,
    //         row: 2
    //     },
    //     {
    //         number: '11',
    //         price: '1',
    //         booking: false,
    //         row: 2
    //     },
    //     {
    //         number: '12',
    //         price: '1.2',
    //         booking: false,
    //         row: 2
    //     },
    //     {
    //         number: '13',
    //         price: '1.2',
    //         booking: false,
    //         row: 2
    //     },
    //     {
    //         number: '14',
    //         price: '1',
    //         booking: false,
    //         row: 2
    //     },
    //     {
    //         number: '15',
    //         price: '1',
    //         booking: true,
    //         row: 2
    //     },
    //     {
    //         number: '16',
    //         price: '1',
    //         booking: false,
    //         row: 2
    //     },
    // ];
