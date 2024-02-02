const div = document.getElementById('myDiv')

async function getProdact() {
    try{
        const response = await axios.get('https://65685f8d9927836bd974aa4c.mockapi.io/pradacts')
        const data = response.data
        db = data
        db.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <h3>${item.title}</h3>
            <h4>$${item.price}</h4>
            <button onclick="adToCart(${item.id})">Basket</button>
            <button onclick="adToWishlist(${item.id})">Wishlist</button>
            `;
            div.appendChild(box)
        });
    }catch(error){
        console.error('xeta',error);
    }
}
function adToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    let prodactsItem = cart.find(item => item.id == id)
    if(prodactsItem){
        prodactsItem.count = (prodactsItem.count || 1) + 1
    }else{
        cart.push({...db.find(item => item.id == id), count:1})
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
function adToWishlist(id) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let prodactsItem = wishlist.find(item => item.id == id)
    if(prodactsItem){
        alert('bu artiq sizin favorilerinizdedi')

    }else{
        wishlist.push(db.find(item => item.id == id))

    }
    localStorage.setItem('wishlist',JSON.stringify(wishlist))


}
getProdact()