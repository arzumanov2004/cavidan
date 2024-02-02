const div = document.getElementById('myDiv')

function getWishlist() {
    div.innerHTML = ''
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index) =>{
        const box = document.createElement('div')
        box.className = 'myBox col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12'
        box.innerHTML = `
        <img src="${item.image}" alt="">
        <h3>${item.title}</h3>
        <h4>$${item.price}</h4>
        <button onclick="deleteFromWishlist(${index})">Delete</button>

        `;
        div.appendChild(box)
    })
}


function deleteFromWishlist(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getWishlist()

}
getWishlist()