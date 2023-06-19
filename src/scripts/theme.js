/* Desenvolva sua lógica aqui ... */
function darkMode () {
    const darkButton = document.querySelector('.dark--mode')
    const html = document.querySelector('html')
    const theme = JSON.parse(localStorage.getItem('darkMode'))

    if(theme){
        darkButton.classList = "fa-solid fa-sun dark__mode ligth--mode"
        html.classList.add('dark__mode')
    }else{
        darkButton.classList = "fa-solid fa-moon dark__mode dark--mode"
        html.classList.remove('dark__mode')
    }

    darkButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if(html.classList.contains('dark__mode')){
            darkButton.classList = "fa-solid fa-sun dark__mode ligth--mode"
            localStorage.setItem('darkMode', true)
        }else{
            darkButton.classList = "fa-solid fa-moon dark__mode dark--mode"
            localStorage.setItem('darkMode', false)
        }
    })
}  
darkMode()