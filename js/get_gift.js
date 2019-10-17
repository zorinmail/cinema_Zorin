let buttonDisplayModalPresent = document.getElementById('getPresentModal')
let modalPresentsWindow = document.getElementById('modalPresent')
let modalClose = document.getElementById('closeModal')
let sendPresentInfo = document.getElementById('send_gift2')



buttonDisplayModalPresent.onclick = function(){
    modalPresentsWindow.style.display = 'block';
}
modalClose.onclick = function(){
    modalPresentsWindow.style.display = 'none';
}

sendPresentInfo.onclick = function(){
    let nameGuest = document.getElementById('firstname2')
    let emailGuest = document.getElementById('e-mail2')
    let selectionGuest = document.getElementById('choose2')

    if (nameGuest.value) {
    console.log('name ', nameGuest.value)
    nameGuest.style.border = "1px solid #bebebe"
    } else {
        nameGuest.style.border = "2px solid red"
    }

    if (emailGuest.value) {
    console.log('name ', emailGuest.value)
    emailGuest.style.border = "1px solid #bebebe"
    } else {
        emailGuest.style.border = "2px solid red"
    }

    if (selectionGuest.value) {
    console.log('name ', selectionGuest.value)
    selectionGuest.style.border = "1px solid #bebebe"
    } else {
        selectionGuest.style.border = "2px solid red"
    }

    if (nameGuest.value && emailGuest.value && selectionGuest.value){
        modalPresentsWindow.style.display = 'none';
    }
}

//\до нажатия кнопки отправить
// let nameGuest = document.getElementById('firstname2')
// let emailGuest = document.getElementById('e-mail2')
// let selectionGuest = document.getElementById('choose2')

// nameGuest.onchange = function(){
//     console.log(nameGuest.value)
// }
// emailGuest.onchange = function(){
//     console.log(emailGuest.value)
// }
// selectionGuest.onchange = function(){
//     console.log(selectionGuest.value)
// }
