let dash = document.getElementById("dash")
let extensio = document.getElementById("extension")
let blurr = document.getElementById("blur")
let closee = document.getElementById("close")
let out = document.getElementById("out")
let menpage =document.querySelectorAll("#menpage")
let womenpage =document.querySelectorAll("#womenpage")
dash.addEventListener("click", () => {

    extensio.style.right = "0px"
    blurr.classList.add('blur')
    blurr.style.backgroundColor = " rgba(0, 0, 0, 0.2)"
    blurr.style.backdropFilter = "blur(3px)"

})
closee.addEventListener("click", () => {

    extensio.style.right = "-300px"
    blurr.style.backgroundColor = " rgba(0, 0, 0, 0.0)"
    blurr.style.backdropFilter = "blur(0px)"
    blurr.classList.remove('blur')


})

out.addEventListener("click", () => {

    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, log out "
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                
                text: "Logged out",
                icon: "success"
            }).then(() => {
                localStorage.removeItem("token")
                window.location ="../E-commerce.html"           
             })
    
        }
    });

})
out1.addEventListener("click", () => {
    Swal.fire({
        title: "Are you sure?",
        text: "Do you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, log out "
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                
                text: "Logged out",
                icon: "success"
            }).then(() => {
                localStorage.removeItem("token")
                window.location ="../E-commerce.html"           
             })
    
        }
    });

})

const token = localStorage.getItem("token")


let cart = JSON.parse(localStorage.getItem("cart")) || []
let contentcart = document.getElementById("contentcart")
let first = document.getElementById("first")

function show1() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    contentcart.innerHTML = '';

    if (cart.length === 0) {
        contentcart.innerHTML = '<h3 >The cart is empty.</h2>';
    }
    else {
        cart.forEach(product => {
            contentcart.innerHTML += `
            
            
                            <div class="img">
                        <img src="${product.image}" alt="">
                                            <div class="price">
                            ${product.price}$
                        </div>
                    </div>
                    <h4>${product.title}</h4>
                    <p> ${product.description}</p>
                    <span>Color : Unknown <br>Size : Unknown</span>
    
                    <div class="svg1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                                <path fill="currentColor"
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <span>(120)</span>
    
    
                        </div>
    
                    </div>
                    <div class="footer">
                        <div class="one">
                            <button onclick="Minus('${product.id}',${product.price})">-</button>
                            <div id="f${product.id}" >
                             ${product.quantity}
                            </div>
                            <button onclick="plus('${product.id}',${product.price})">+</button>
                        </div>
                        <svg onclick="removeFromCart('${product.id}')" xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#787878" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"/></svg>              
                        <div id="sos${product.id}" onclick="heart(${product.id})" class="svg">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="black" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"/></svg>  
    
                      </div>
    
                    </div>
            
            
            
            
            `

        })


    }
}
show1()
function show2() {

    first.innerHTML = `
        
    <div>
       <h2>Subtotal( ${totalprice().quantityTotal} items) :</h2>
       <p>$${totalprice().grandTotal}</p>
       <input type="checkbox">
       <span>This order contains a gift</span>
       <button>proceed to checkout</button>
   </div>   


`
}
show2()

function plus(id, price) {



    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let existingProduct = cart.find(product => product.id === id)

    if (existingProduct) {
        existingProduct.quantity += 1
        k = document.getElementById(`f${id}`)

        k.innerHTML = existingProduct.quantity


    }

    localStorage.setItem("cart", JSON.stringify(cart))
    let total = existingProduct.quantity * price
    // alert(localStorage.getItem("cart"))
    show2()

}




function Minus(id, price) {



    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let existingProduct = cart.find(product => product.id === id)

    if (existingProduct) {
        existingProduct.quantity = existingProduct.quantity - 1
        k = document.getElementById(`f${id}`)
        if (existingProduct.quantity < 1) {

            cart = cart.filter(product => product.quantity >= 1);
        
            localStorage.setItem('cart', JSON.stringify(cart));
        
            show1()
            show2()

        }
        else {
            k.innerHTML = existingProduct.quantity

        }
        let total = existingProduct.quantity * price

    }

    localStorage.setItem("cart", JSON.stringify(cart))
    // alert(localStorage.getItem("cart"))
    show2()

}

function totalprice() {

    let cart = JSON.parse(localStorage.getItem("cart")) || []
    grandTotal = 0
    quantityTotal = 0
    cart.forEach(product => {
        let total = product.price * product.quantity
        grandTotal += total;
        quantityTotal += product.quantity
    })
    // console.log(grandTotal)
    return {
        grandTotal: grandTotal,
        quantityTotal: quantityTotal
    };

}



function clearCart() {
    localStorage.removeItem('cart');  // Remove the cart from localStorage
    displayCart();                    // Refresh the cart display
}
// clearCart()

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(product => product.id !== id);

    localStorage.setItem('cart', JSON.stringify(cart));

    show1()
    show2()
}

let x = false
function heart(id) {
    let sos = document.getElementById(`sos${id}`)



    if (x == false) {
        sos.innerHTML =


            `
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="#f70202" d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"/></svg>        
                  
                  `

        x = true
    }
    else {

        sos.innerHTML =
            `
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="black" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"/></svg>  
              `
        x = false
    }

}




for (let i = 0; i < menpage.length; i++) {
    menpage[i].addEventListener("click", () => {

        window.location = `../men/men.html?type=men`
    })


}

for (let i = 0; i < womenpage.length; i++) {
    womenpage[i].addEventListener("click", () => {

        window.location = `../men/men.html?type=women`
    })


}