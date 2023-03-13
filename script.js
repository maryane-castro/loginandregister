const capa = document.querySelector('.capa')
const loginPag = document.querySelector('.register-link')
const registerPag = document.querySelector('.login-link')
const x = document.querySelector('.icon-close')



x.addEventListener("click", () => {
    
})


loginPag.addEventListener("click", () => {
    capa.classList.add('active')

})
registerPag.addEventListener("click", () => {
    capa.classList.remove('active')
})





/*
loginPag.addEventListener("click", () => {

})





function register(){
    console.log('ativado')
}

registro.addEventListener("click", register)
*/