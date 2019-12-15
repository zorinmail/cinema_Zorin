
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
            price: 1350,
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
            price: 1250,
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
            filmHire: false,
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
            filmNew: false,
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
            filmNew: true,
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


class Film {
    sortedFilms

    constructor(){
        this.setSortedFilms();
    }

    //сортировка фильмов на прокат, новинки, остальные
    setSortedFilms () { 
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
        this.sortedFilms = {
            newFilms,
            filmsInHire,
            nowhereFilms,
        };
        //в сортированных фильмах замена жанров с чисел на строки
        this.setGenresInSortedFilms();
    }
    
    //замена жанров с чисел на строки
    setGenresInSortedFilms () {
        let stringGenres = '';  

        for (let key in this.sortedFilms){
            let someo = this.sortedFilms[key].length;
            // debugger

            for (let j = 0; j < this.sortedFilms[key].length; j++){
                let arrayOfWords = [];
                let some = this.sortedFilms[key][j].genre.length;
                // debugger

                for (let k = 0; k < this.sortedFilms[key][j].genre.length; k++) {
                    arrayOfWords.push(genres[this.sortedFilms[key][j].genre[k]]);
                    // debugger;
                };
                // debugger;
                stringGenres = arrayOfWords.join(', ');
                this.sortedFilms[key][j].genre = stringGenres;
                // return stringGenres;
            }
        };
    }

    getSortedFilms(){
        return this.sortedFilms;
    }

    //получение имен фильмов по ключевому слову
    getName (keyWord) {
        // let sortedFilms = this.sortFilms();
        if(!this.sortedFilms){
            return false;
        }
        if (keyWord == "new") {
            for (let i = 0; i < this.sortedFilms['newFilms'].length; i++) {
                console.log(sortedFilms['newFilms'][i].name);
            };
        } else if (keyWord == "hire") {
            for (let i = 0; i < thissortedFilms['filmsInHire'].length; i++) {
                console.log(sortedFilms['filmsInHire'][i].name);
            };
        } else {
            return false; //?такое в методе класса указывается?
        };
    }

    //получение начал фильмов по ключевому слову
    getStart (keyWord) {
        // let sortedFilms = this.sortFilms();
        if(!this.sortedFilms){
            return false;
        }
        if (keyWord == "new") {
            for (let i = 0; i < this.sortedFilms['newFilms'].length; i++) {
                console.log(sortedFilms['newFilms'][i].start);
            };
        } else if (keyWord == "hire") {
            for (let i = 0; i < this.sortedFilms['filmsInHire'].length; i++) {
                console.log(sortedFilms['filmsInHire'][i].start);
            };
        } else {
            return false;
        };
    }

    getPrice (filmname, placeNum, placesInRow) {
        let priceFilm = 0,
            pricePlace = 0;

        this.sortedFilms["filmsInHire"].forEach(film => {
            if (film.name == filmname){
                priceFilm = film.price;
            };
        });
        placesInRow.forEach(place => {
            if (place.number == placeNum){
                pricePlace = place.price;
            };
        });
        let prices = {
            priceFilm,
            pricePlace,
        }
        return prices;
    }

    renderFilmsInHire(idWhereToInsert, rowsMap){
        let table_body = document.getElementById(idWhereToInsert),
            k = 0,          //формирование id ячеек таблицы
            trClass = '',   //класс для цвета четных и нечетных строк
            sortedFilms = this.sortedFilms;

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
                filmPrice = sortedFilms['filmsInHire'][i].price,
                strGenre = sortedFilms['filmsInHire'][i].genre,
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
                tempRow = []; //массив для мест в ряду. Для ряда свой tempRow

            let chooseFilmForm__template = document.querySelector('#chooseFilmForm__template');

//для вызова обработчиков
            let that = this;

//обработка клика по плюсикам в таблице
            buy_ticket.onclick = function () {
                
                let divs = chooseFilmForm__template.content.querySelectorAll('div');
                let img = chooseFilmForm__template.content.querySelector('img');

                img.src = filmImg;
                img.alt = filmName;
                img.title = filmName;
                divs[1].textContent = filmName;

                container.style.display = 'block';
                // document.body.style.overflow = 'hidden';

                while (chooseFilmForm__info.firstChild) {
                    chooseFilmForm__info.removeChild(chooseFilmForm__info.firstChild);
                };
                let clone = document.importNode(chooseFilmForm__template.content, true);
                chooseFilmForm__info.appendChild(clone);


                while (placesContainer.firstChild) {
                    placesContainer.removeChild(placesContainer.firstChild);
                };
                chooseFilmForm.appendChild(placesContainer);

                //цикл для перебора рядов.
                for(let key of rowsMap.keys()) {

                    let divRow = document.createElement("div");
                    divRow.classList.add('placeRow');
                    divRow.classList.add(`placeRow${key}`);
                    divRow.id=`placeRow${key}`;
                    tempRow = rowsMap.get(key);//tempRow - элемент rowsMap, соответствующий одному ряду
                    for (let i = 0; i < tempRow.length; i++) {
                        placeHTML = `${tempRow[i].number}`;
                        let divPlace = document.createElement("div");
                        divPlace.classList.add(`place`);
                        if(tempRow[i].booking){
                            divPlace.classList.add(`place_taken`);
                        } else {
                            divPlace.classList.add(`place_free`);
                        };

                        divPlace.addEventListener('click', ()=>{
                            that.order(tempRow, event);
                        });

                        $(divPlace).on('after_order', that.placeToggle);

                        divPlace.addEventListener('mouseover', placeHover);

                        divPlace.addEventListener('mouseout', placeHoverOut);

                        
                        divPlace.addEventListener('contextmenu', ()=>{
                            that.placeContext(tempRow, event);
                        });
                        divPlace.innerHTML = placeHTML;
                        divRow.appendChild(divPlace);
                    };
                    placesContainer.appendChild(divRow);
                };
            };
            closeFilmForm.onclick = function(){
                chooseFilmForm.removeChild(chooseFilmForm.lastChild);
                container.style.display = 'none';
                // document.body.style.overflow = '';
            };
            k += 1;
        };
    }

    renderNewFilms(idWhereToInsert){
        let movieGrid = document.getElementById(idWhereToInsert),
            sortedFilms = this.sortedFilms;
        
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

    }

// обработка клика на квадрате с местом, заполнение элементов input формы
    order (tempRow, event) {
        let chooseFilmForm__place = document.getElementById("chooseFilmForm__place");
        let chooseFilmForm__price = document.getElementById("chooseFilmForm__price");
        let el = event.target;
        if (el.classList.contains('place_free')) {
            let filmname = document.getElementById("filmname").innerHTML;
            let placeNum = el.innerHTML;
            chooseFilmForm__place.value = placeNum;
            chooseFilmForm__price.value = this.getPrice(filmname, placeNum, tempRow)['priceFilm'] * this.getPrice(filmname, placeNum, tempRow)['pricePlace'];
        } else if (el.classList.contains('place_chosen')) {
            chooseFilmForm__place.value = '';
            chooseFilmForm__price.value = '';
        } else {
            chooseFilmForm__place.value = '';
            chooseFilmForm__price.value = '';
        };
        $(el).trigger('after_order');
    }

// обработка клика на квадрате с местом, изменение класса для изменения цвета
    placeToggle (e) {
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
    }

// обрабтка правого клика на квадате с местом
    placeContext (tempRow, event){
        let el = event.target;
        let filmname = document.getElementById("filmname").innerHTML;
        let placeNum = el.innerHTML;
        let priceFilm = 0;
        let pricePlace = 0;
        let price = 0;
        priceFilm = this.getPrice(filmname, placeNum, tempRow)['priceFilm'];
        pricePlace = this.getPrice(filmname, placeNum, tempRow)['pricePlace'];
        price = priceFilm * pricePlace;
        alert(price);
        event.preventDefault();
    }

}



class Places {
    places
    placesMap
    constructor(numOfPlaces){
        this.setPlaces(numOfPlaces);
        this.setPlacesMap();
    }

    setPlaces (numOfPlaces) {
        let plcs = [];
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
            plcs.push(place);
        };
        this.places = plcs;
    }

//предполагал сделать с несколькими рядами, пока используется только один ряд
    setPlacesMap () {
        let rowsAndPlaces = [],
            map = new Map();

        if (this.places.length == 0) {
            return false;
        };

        //узнаем уникальные ряды
        this.places.forEach(place => {
            map.set(place.row, []);
        });

        //создаем map
        for(let key of map.keys()) {
            this.places.forEach(place => {
                if (place.row == key){
                    rowsAndPlaces.push(place); 
                };
            });
            map.set(key, rowsAndPlaces);
            rowsAndPlaces=[];
        };
        let sortedMap = new Map([...map.entries()].sort()); // http://qaru.site/questions/188901/is-it-possible-to-sort-a-es6-map-object
        this.placesMap = sortedMap;
    }

    getPlaces (){
        return this.placesMap;
    }
};


let filmsObject = new Film();
let placesObject = new Places(10);


filmsObject.renderFilmsInHire('movie-list__body', placesObject.getPlaces());
filmsObject.renderNewFilms('movie-grid');


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