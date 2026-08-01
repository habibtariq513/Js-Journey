function clickHandler(color) {
    return function() {
        document.querySelector('body').style.backgroundColor = `${color}`
    }
}

document.querySelector('#Orange').addEventListener('click', clickHandler('Orange'))

document.querySelector('#Green').addEventListener('click', clickHandler('Green'))

