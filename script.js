
const c = (el)=> {   
    return document.querySelector(el)
} // atalho para o querySelector(só colocar o c no lugar de querySelector)

const cs = (el)=>document.querySelectorAll(el) // outra forma de fazer o atalho sem o return

pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true)

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault()

        c('.pizzaWindowArea').style.opacity = 0
        c('.pizzaWindowArea').style.display = 'flex' // para aparecer o modal
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1
        }, 200)
        
    })
    

    c('.pizza-area').append( pizzaItem )
})