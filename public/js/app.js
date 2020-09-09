

fetch('/weather?address=Pakistan').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.forecast)
        }
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()  //presvet server to refresh page
    const location = search.value
    msg1.textContent = ''
    msg2.textContent = ''
    fetch('/weather?address='+location+'').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            msg1.textContent = data.error
        }else{
            msg2.textContent = data.forecast
        }
    })
})
})