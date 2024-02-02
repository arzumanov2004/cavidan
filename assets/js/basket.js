const div = document.getElementById('myDiv')

function getBasket() {
    div.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h3>${item.title}</h3>
        <h4>$${item.price}</h4>
        <h4>Urun Sayi : ${item.count} edet</h4>
        <button onclick="deleteFromCount(${index})">-</button>
        <button onclick="deleteFromCart(${index})">Delete</button>

        `;
        div.appendChild(box)
    })
}
function deleteFromCount(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].count > 1){
        cart[index].count -= 1
    }else{
        cart.splice(index,1)
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}

function deleteFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()

}
getBasket()