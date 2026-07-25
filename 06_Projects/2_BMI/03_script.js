const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
        result.innerText = 'plz enter a Valid Height'
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        result.innerText = 'plz enter a Valid Weight'
    } else {
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);        
        if(bmi < 18.6) {
            result.innerText = bmi + '\n Under Weight'
        } else if(bmi > 18.6 && bmi < 24.9) {
            result.innerText = bmi + '\n Normal Range'
        } else if(bmi > 24.9) {
            result.innerText = bmi + '\n Over Weight'
        } else {
            result.innerText = bmi
        }

    }
})