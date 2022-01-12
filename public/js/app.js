const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value  
    fetch('/weather?address=' +location).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            messageOne.textContent = data.error
        } else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})

document.getElementById('button-toronto').addEventListener("click", ()=>{
    const location = 'Toronto'
    fetch('/weather?address=' +location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
            } else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })

    document.getElementById('button-newyork').addEventListener("click", ()=>{
        const location = 'New York'
        fetch('/weather?address=' +location).then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    messageOne.textContent = data.error
                } else{
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
            })
        })
})

document.getElementById('button-amsterdam').addEventListener("click", ()=>{
    const location = 'Amsterdam'
    fetch('/weather?address=' +location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
            } else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})
})
