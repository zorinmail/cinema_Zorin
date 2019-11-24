
/** Заглушки данных */
const mock = [
    {
        name: "Человек-паук",
        start: "10:00",
        genre: [0, 1, 2],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov1.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 200 
    },
    {
        name: "Собачья жизнь 2",
        start: "12:00",
        genre: [3, 4, 5],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov2.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 300
    },
    {
        name: "История игрушек 4",
        start: "14:00",
        genre: [6, 3, 5],
        filmHire: true,
        filmNew: false,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 500
    },
    {
        name: "Люди в чёрном: Интернэшнл",
        start: "16:00",
        genre: [0, 1, 5],
        filmHire: true,
        filmNew: true,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius",
        image: "img/mov3.jpg", //для д.з. CA
        fb: "https://fb.com",
        twitter: "https://twitter.com",
        behance: "https://www.behance.net",
        price: 700
    }
];

//справочник жанров - так часто работают сервисы
const genres = [
    {
        id: 0,
        name: "фантастика"
    },
    {
        id: 1,
        name: "боевик"
    },
    {
        id: 2,
        name: "приключения"
    },
    {
        id: 3,
        name: "фэнтези"
    },
    {
        id: 4,
        name: "драма"
    },
    {
        id: 5,
        name: "комедия"
    },
    {
        id: 6,
        name: "мультфильм"
    }
];

//массивы для хранения отсортированных данных
let filmsNew = [],
    filmsHire = [];

//сортируем на новинки и в прокате
for (let i = 0; i < mock.length; i++) {
    let currentFilm = mock[i];

    if (currentFilm.filmHire) {
        filmsHire.push(currentFilm);
    }

    if (currentFilm.filmNew) {
        filmsNew.push(currentFilm);
    }
}

//объект-обертка для универсализации работы с данными
const film = {
    getName: function() {
        return this.name;
    },

    getStart: function() {
        return this.start;
    },

    getGanre: function() {
        //хранит текущие идентификаторы жанров. Здесь тоже используется this!
        const ganarsIds = this.genre;

        //вспомогательный массив, который будет хранить текстовые описания жанров
        let arrGanars = [];

        //проходим по id шникам жанров
        for (let i = 0; i < ganarsIds.length; i++) {
            let currentId = ganarsIds[i];

            //так делали на лекции
            //arrGanars.push( genres[currentId] );

            //@see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
            let genreText = genres.find(
                //el содержит текущий элемент перебираемого массива genres
                function(el) {
                    //если условие выполняется, то возвращается проверяемый элемент
                    return el.id == currentId;
                }
            ).name; //элементом genres является объект справочника { id:..., name... }, на этом объекте
            // берем поле name и сохраняем как genreText;

            arrGanars.push(genreText); //добаляем полученный genreText во вспомогательный массив
        }

        //текстовое представление жанров
        //@see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join
        let strGanars = arrGanars.join(", ");
        return strGanars;
    },

    renderFilmRow() {

        //добавлена строка вывода цены
        let filmName = this.name,
            filmStart = this.start,
            filmGanars = film.getGanre.apply(this),
            filmPrice = this.price;            

            
            filmHTML = `
            <td>
                <input type="checkbox" class="block03__checkbox" id="block03__checkbox1">
                <label for="block03__checkbox1">
                  <i class="icon icon-check" title="check"></i>
                </label>
            </td>
            <td id="start_film_${1}">${filmStart}</td>
            <td id="name_film_${1}">${filmName}</td>
            <td id="ganar_film_${1}">${filmGanars}</td>
          `;
        return filmHTML;
    },

    renderFilmBlock() {
        let filmName = this.name,
            filmImage = this.image,
            filmDescription = this.description,
            filmFb = this.fb,
            filmTw = this.twitter,
            filmBh = this.behance,
            filmHTML = `
            <div class="block05__movie1">
                    <div class="block05__bg">
                        <img src="${filmImage}" alt="">
                    </div>
                    <div class="block05__descr">
                        <div class="block05__text2">${filmName}</div>
                        <div class="block05__sep"></div>
                        <div class="block05__text3">${filmDescription}</div>
                        <div class="block05__linls">
                            <a href="${filmTw}" target="_blank"><i class="icon icon-twitter" title="twitter"></i></a>
                            <a href="${filmFb}" target="_blank"><i class="icon icon-facebook" title="facebook"></i></a>
                            <a href="${filmBh}"><i class="icon icon-camera" title="camera"></i></a>
                        </div>
                    </div>
                </div>
          `;
        return filmHTML;
    },

    //добавлен
    getPrice: function () {
        return this.price
    }
};

//получаем DOM элемент с таблицей
let tableDOM = document.getElementById("filmsHire");
for (let i = 0; i < filmsHire.length; i++) {
    let currentFilm = filmsHire[i],
        filmName = film.getName.bind(currentFilm)(),
        filmStart = film.getStart.bind(currentFilm)(),
        filmGanars = film.getGanre.bind(currentFilm)(),
        filmRowHTML = film.renderFilmRow.bind(currentFilm)(),
        tr = document.createElement("tr"); //содаем DOM элемент TR;

    tr.innerHTML = filmRowHTML; //записываем в DOM элемент HTML разметку

    //вешаем обработчик события на строку, вызывающий модальное окно
    /*** РАЗОБРАТЬ */
    tr.onclick = function () {
        // 1. Находим элемент с формой заказ
        // 2. Изменить состояние из display: none -> display: block;
        // 3. Отобразить данные по бронированию фильма
    
        orderForm.style.display = 'block';
    
        let orderFilmName = document.getElementById('orderFilmName'),
            orderFilmStart = document.getElementById('orderFilmStart'),
            orderFilmGanar = document.getElementById('orderFilmGanar'),
            orderFilmPrice = document.getElementById('orderFilmPrice');
    
        orderFilmName.innerHTML = filmName;
        orderFilmStart.innerHTML = filmStart;
        orderFilmGanar.innerHTML = filmGanars;
        orderFilmPrice.innerHTML = filmPrice;
    
        let orderFilmCountTicket = document.getElementById('orderFilmCountTicket'),
            orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice');
    
        orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTicket.value;
    
        orderFilmCountTicket.onchange = function () {
          orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTicket.value;
        }
    }

    tableDOM.appendChild(tr); //добавляем в DOM элемент таблицы DOM элемент строки с фильмом
}

// Закрытие модального окна
/*** РАЗОБРАТЬ Event Handler */
let orderForm = document.getElementById('orderForm');
let closeOrderForm = document.getElementById('closeOrderFrom');

closeOrderForm.onclick = function () {
  orderForm.style.display = 'none';
}

// Валидация ввода имени
/** РАЗОБРАТЬ Event Handler */
let sendOrder = document.getElementById('sendOrder');
sendOrder.onclick = function () {
  let orderClinetName = document.getElementById('orderClinetName');

  if (orderClinetName.value) {
    orderClinetName.style.border = '1px solid #bebebe';
  } else {
    orderClinetName.style.border = '2px solid red';
  }
}

