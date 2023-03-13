const capa = document.querySelector('.capa')
const loginPag = document.querySelector('.register-link')
const registerPag = document.querySelector('.login-link')

const btnPopup = document.querySelector('.btnLogin-popup')
const btnClose = document.querySelector('.icon-close')





loginPag.addEventListener("click", () => {
    capa.classList.add('active')

})

registerPag.addEventListener("click", () => {
    capa.classList.remove('active')
})

btnPopup.addEventListener("click", () => {
    capa.classList.add('active-popup')
})


btnClose.addEventListener("click", () => {
    capa.classList.remove('active-popup')
})



















































/*
loginPag.addEventListener("click", () => {
})
function register(){
    console.log('ativado')
}
registro.addEventListener("click", register)
*/