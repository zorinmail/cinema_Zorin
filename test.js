let sharedObj = {
    state: true
}

function click1(e) {
    if(sharedObj.state) {
        console.warn('im true 1');
    }
    let el = e.target;
    //изменяем состояние sharedObj - единственное место в программе, где меняется sharedObj
    sharedObj.state = false; 
    $(el).trigger('after_click1');
}

function click2() {
    if(!sharedObj.state) {
        console.warn('i saw false 2');
    }
}

function click3() {
    if(!sharedObj.state) {
        console.warn('i saw false 3');
    }
}

let el = document.getElementById('__clickMe');
el.addEventListener('click', click1);
$(el).on('after_click1', click2);
$(el).on('after_click1', click3);

//$(el).on('click', click1);
//$(el).trigger('click');


//0 - порядок на самом деле не гарантирован - асинхронное программирование
//1 самое просто - не разделять эти обработчики (не всегда возможно)
//2 если все таки разделяем. чуть проще метод - контролируем поток событий
//3 flux патерн 
    //подумать, а правильно ли что у нас проверки идут классов?
    //презентация - вторична! опирайтесь на свойства объекта

//4 переделайте код, bubble - у нас получается основной обработчик (пока кастомные события)
//-----------
//-----------
// РЕЛИЗ Promise (переделать с кастомных событий ) !!!! - их обязательно, как дополнительны 10 баллов

