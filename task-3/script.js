let celsiusEl = document.querySelector('#celsius > input')
let fahrenEl = document.querySelector('#fahrenheit > input')
let kelvinEl = document.querySelector('#kelvin > input')

let btnEl = document.querySelector('.button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Fahrenheit and Kelvin */
celsiusEl.addEventListener('input', function(){
    let cTemp = parseFloat(celsiusEl.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    fahrenEl.value = roundNumber(fTemp)
    kelvinEl.value = roundNumber(kTemp)
})


/* Fahrenheit to Celcius and Kelvin */
fahrenEl.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenEl.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celsiusEl.value = roundNumber(cTemp)
    kelvinEl.value = roundNumber(kTemp)
})

/* Kelvin to Celcius and Fahrenheit */
kelvinEl.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinEl.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celsiusEl.value = roundNumber(cTemp)
    fahrenEl.value = roundNumber(fTemp)
})


btnEl.addEventListener('click', ()=>{
    celsiusEl.value = ""
    fahrenEl.value = ""
    kelvinEl.value = ""
})