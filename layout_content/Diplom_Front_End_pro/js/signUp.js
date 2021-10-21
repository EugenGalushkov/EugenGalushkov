let form = document.querySelector('.form')
let submit = document.querySelector('.inputSubmit')
let name = document.querySelector('.inputName')
let phone = document.querySelector('.inputPhone')
let style = document.querySelector('.inputStyle')
let date = document.querySelector('.inputDate')
let coment = document.querySelector('.inputComent')


submit.addEventListener('click',()=>{
let form = `[{
    "Name":"${name.value}",
    "Phone":"${phone.value}",
    "style":"${style.value}",
    "date":"${date.value}",
    "coment":"${coment.value}"
}]`
console.log(JSON.parse(form))
document.form.reset();
})