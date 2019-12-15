const SYPEX_URL = 'https://api.sypexgeo.net/json/',
      CITIES_URL ='http://glavpunkt.ru/api/get_rf_cities';


let cities;



/**
 * 
 * @param {*} api_url - адрес запроса
 */

 

 //при загрузке страницы обновляем город в шапке сайта
jQuery(document).ready(($) => {
    $.getJSON( SYPEX_URL, function( data ) {
        let city = data['city']['name_ru'];
        // console.log(city);
        $('#city_name').html(city);
    });
});


//логика для модального окна выбора города
jQuery(($)=>{ //? для чего оборачиваем в это?
    $('#city_name').on('click', function(e){
        e.preventDefault();
        // $('#exampleModalCenter').modal().open();
        if (!cities){

            $.getJSON( CITIES_URL, function( data ) {
                cities = data;
            });

            // getRequest(CITIES_URL, function(){
            //     cities = $.parseJSON(this);
            //     // console.log(cities);
            // });
        };
        $('#search_result').html('');
        $('#city_choose').val('');
    });

    $('body').on('input keyup', 'input[name=city_choose]', function(){
        let search = $(this).val(),
        counter = 0;

        let html = '<ul>';
        for (let i = 0; i < cities.length; i++){
            if (cities[i].name.toLowerCase().indexOf(search.toLowerCase()) >= 0 && counter < 5 && search.length > 0){
                html += '<li class="finded_cities_li" data-city="' + cities[i].name + '">'+cities[i].name +' (' + cities[i].area + ')</li>';
                counter++;
            }
        }
        html += '</ul>';
        $('#search_result').html(html);
    });
    $('body').on('click', '#search_result li', function(){
        $('#city_choose').val($(this).data('city'));
        // $.modal().close();
    });

    $('#city_save').on('click', function(){
        for (let i = 0; i < cities.length; i++){
            if (cities[i].name.toLowerCase() == $('#city_choose').val().toLowerCase()){
                $('#city_name').html($('#city_choose').val());
                return 1;
            }
        }
    })
})