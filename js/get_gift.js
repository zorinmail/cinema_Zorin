let name_guest = document.getElementById('firstname')
let button_send_gift = document.getElementById('send_gift')

console.log('до нажатия кнопки ', name_guest.value)

button_send_gift.onclick = function(){
    let name = name_guest.value
    console.log('После нажатия кнопки: ', name)
}