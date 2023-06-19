/* Desenvolva sua lógica aqui ... */
import {products, categories} from './productsData.js' 

function creatButton (categories){
    const containerButtons = document.createElement('li')
    const buttonFilters = document.createElement('button') 
    
    buttonFilters.innerText = categories
    buttonFilters.id = categories
    
    containerButtons.classList.add("container--button")
    buttonFilters.classList.add('buttonsGenre')
    
    containerButtons.append(buttonFilters)
    return containerButtons   
}

function renderButton(categories){
    const containerButtons = document.querySelector(".filteringButtons")
    
    categories.forEach((element) => {
        let buttons = creatButton(element)
        containerButtons.append(buttons)
    })
}

function renderCards(products){
    const containerCard = document.querySelector('.renderCards')
    const noValueFind = document.createElement('h2')
    containerCard.innerHTML = ''
    
    if(products.length === 0){
        noValueFind.innerText = "Nenhum album encontrado" 
        noValueFind.classList = "noValue"
        
        containerCard.append(noValueFind)
    }
    
    products.forEach(element => {
        let cards = creatCard(element)
        containerCard.append(cards)   
        
    });
}

function creatCard(products){
    const card = document.createElement('li')
    const albumBanner = document.createElement('img')
    const styleBandInfo = document.createElement('div')
    const bandName = document.createElement('p')
    const bandyear = document.createElement('p')
    const albumTitle = document.createElement('h2')
    const span = document.createElement('span')
    const albumPrice = document.createElement('p')
    const buyButton = document.createElement('button')
    
    albumBanner.src = products.img
    bandName.innerText = products.band
    bandyear.innerText = products.year
    albumTitle.innerText = products.title
    albumPrice.innerText = `R$ ${products.price}`
    buyButton.innerText = 'Comprar'
    
    card.classList.add('containe--card')
    albumBanner.classList.add('bannerImg')
    styleBandInfo.classList.add('bandInfo')
    bandName.classList.add('infos')
    bandyear.classList.add('infos')
    albumTitle.classList.add('albumName')
    span.classList.add('style')
    albumPrice.classList.add('price')
    buyButton.classList.add('buyButton')
    
    card.append(albumBanner, styleBandInfo, albumTitle, span)
    styleBandInfo.append(bandName, bandyear)
    span.append(albumPrice, buyButton)
    
    return card
}

function filter (products, categories){
    const buttonFilters = document.querySelectorAll('.buttonsGenre')
    const input = document.querySelector('.inputRange')
    const filteredPrice = document.querySelector('.priceControl')
    
    let filteredArray = products;
    let categoryIndex = 0;
    let inputValue = input.value;
    

    buttonFilters.forEach(button => {
        button.addEventListener('click', () => {
            categoryIndex = categories.findIndex((elemento) => {
                return elemento === button.innerText})
                
                filteredArray = products.filter((filter) => { 
                    return filter.category === categoryIndex
                })
                
                if(categoryIndex  <= 0 ){
                    renderCards(products)

                }else{(categoryIndex === categoryIndex && products.price <= inputValue)
                    renderCards(filteredArray)   
                }
            })
        });
        input.addEventListener('input', () =>{
            filteredPrice.innerText = `Até R$ ${input.value}`
            let array = []
            
            array = filteredArray.filter((album) => {
                return album.price <= input.value
            })
            renderCards(array)
    }   )
}
    
renderButton(categories)
renderCards(products)
filter(products, categories)
    