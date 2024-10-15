let dash = document.getElementById("dash")
let extensio = document.getElementById("extension")
let blurr = document.getElementById("blur")
let closee = document.getElementById("close")
let out = document.getElementById("out")
let container=document.getElementById("container")







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
    localStorage.removeItem("token")
    window.location.reload()
})

const token = localStorage.getItem("token")


let btnfirst = document.querySelectorAll(".beginning input")













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



// function totalquantity() {
//     let catrq =document.getElementById("catrq")
//     let catrqq =document.getElementById("catrqq")

//     let cart = JSON.parse(localStorage.getItem("cart")) || []
//     quantityTotal = 0
//     cart.forEach(product => {
//         quantityTotal += product.quantity
//     })
//     catrq.innerHTML=quantityTotal
//     catrqq.innerHTML=quantityTotal


// }
// totalquantity()



     const urlparams = new URLSearchParams(window.location.search)
     let id =  urlparams.get("id")
     console.log(id)




function get() {
    container.innerHTML = ""

    axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(function (response) {


            for (let i = 0; i < response.data.length; i++) {
                if(`${response.data[i].id}`==id){

                    let content =`

                    <div class="content">
                        <div class="imag">
                            <img src="${response.data[i].image}" alt="">
                        </div>
                        <div class="about">
                            <div class="first">
                                <h3>${response.data[i].title}</h3>
                                <p>${response.data[i].description}</p>
                                <div class="do">
                                    $ <span>${response.data[i].price}</span>
                                </div>
                            </div>
                            <div class="color">
            
                                <h3>
                                    choose a color
                                </h3>
            
                                <div class="items5">
                                    <div id="dfdf" class="fo" >
                                        <div class="color1"></div>
                                    </div>
                                    <div class="fo" >
                                        <div class="color2"></div>
                                    </div>
                                    <div class="fo">
                                        <div class="color3"></div>
                                    </div>
                                    <div class="fo">
                                        <div class="color4"></div>
                                    </div>
                                    <div class="fo">
                                        <div class="color5"></div>
                                    </div>
            
            
            
            
                                </div>
            
                            </div>
                            <div class="center">
                                <h3>Only 12 Item Left Dont Miss It!</h3>
                                <button> Buy Now</button>
                                <button id="k${response.data[i].id}" onclick="addtocart('${response.data[i].id}','${response.data[i].price}', '${response.data[i].image}','${response.data[i].title}', '${response.data[i].description}')">Add To Cart</button>
                            </div>
                            <div class="end">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88a3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78M20 12.48V15h-3v-4.92ZM7 18a1 1 0 1 1-1-1a1 1 0 0 1 1 1m5-3H4V5h11v10Zm7 3a1 1 0 1 1-1-1a1 1 0 0 1 1 1" />
                                    </svg>
                                    <p>Free Delivery</p>
                                </div>
                                <p><a href="#">Enter Your Postal Code For Delivery Availabilty</a></p>
            
                                <div>
                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.95 13.289l4.239-4.239l-.714-.708l-3.525 3.544l-1.425-1.424l-.713.713zM6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"/></svg>                            <path fill="currentColor"
                                            d="M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1zm5 0H8v4.78l2-1.4l2 1.4z" />
                                    </svg>
                                    <p>Return Delivery</p>
                                </div>
                                <p>Free 30days Delivery Returns <a href="">details</a> </p>
                            </div>
            
            
            
            
                        </div>

                    </div>
            
            `
            container.innerHTML+=content
                }
                let c =document.querySelectorAll(".container .content .about .color .items5 .fo")

                for(let i=0 ; i<c.length ; i++){
                
                    c[i].addEventListener("click",()=>{
                        for(let i=0 ; i<c.length ; i++){
                            c[i].style.border = "solid 2px #ffffff";
                
                        }
                        c[i].style.border = "solid 2px #00000031";
                
                    })   
                 }
                // changecolor()





            }


            function changecolor() {
                let cart = JSON.parse(localStorage.getItem('cart')) ;
            
            
                cart.forEach(product => {
                    if (product.quantity >= 1) {
                        let k = document.getElementById(`k${product.id}`)
                        if(k){
                            console.log(k)
                            k.innerHTML = "added to cart"
                            k.style.backgroundColor = "#000"
                            k.style.color = "#FFFFFF"
                        }

            
                    }
            
                });
            }
            changecolor()

        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {


        });


}
get()

function getwomen() {
    container.innerHTML = ""

    axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(function (response) {


            for (let i = 0; i < response.data.length; i++) {
                if(`${response.data[i].id}`==id){

                    let content =`

                    <div class="content">
                        <div class="imag">
                            <img src="${response.data[i].image}" alt="">
                        </div>
                        <div class="about">
                            <div class="first">
                                <h3>${response.data[i].title}</h3>
                                <p>${response.data[i].description}</p>
                                <div class="do">
                                    $ <span>${response.data[i].price}</span>
                                </div>
                            </div>
                            <div class="color">
            
                                <h3>
                                    choose a color
                                </h3>
            
                                <div class="items5">
                                    <div id="dfdf" class="fo" >
                                        <div class="color1"></div>
                                    </div>
                                    <div class="fo" >
                                        <div class="color2"></div>
                                    </div>
                                    <div class="fo">
                                        <div class="color3"></div>
                                    </div>
                                    <div class="fo">
                                        <div class="color4"></div>
                                    </div>
                                    <div class="fo">
                                        <div class="color5"></div>
                                    </div>
            
            
            
            
                                </div>
            
                            </div>
                            <div class="center">
                                <h3>Only 12 Item Left Dont Miss It!</h3>
                                <button> Buy Now</button>
                                <button id="k${response.data[i].id}" onclick="addtocart('${response.data[i].id}','${response.data[i].price}', '${response.data[i].image}','women s clothing' , 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates')">Add To Cart</button>
                            </div>
                            <div class="end">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor"
                                            d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88a3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78M20 12.48V15h-3v-4.92ZM7 18a1 1 0 1 1-1-1a1 1 0 0 1 1 1m5-3H4V5h11v10Zm7 3a1 1 0 1 1-1-1a1 1 0 0 1 1 1" />
                                    </svg>
                                    <p>Free Delivery</p>
                                </div>
                                <p><a href="#">Enter Your Postal Code For Delivery Availabilty</a></p>
            
                                <div>
                                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.95 13.289l4.239-4.239l-.714-.708l-3.525 3.544l-1.425-1.424l-.713.713zM6 19.5V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19.5l-6-2.577zm1-1.55l5-2.15l5 2.15V5.616q0-.231-.192-.424T16.384 5H7.616q-.231 0-.424.192T7 5.616zM7 5h10z"/></svg>                            <path fill="currentColor"
                                            d="M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1zm5 0H8v4.78l2-1.4l2 1.4z" />
                                    </svg>
                                    <p>Return Delivery</p>
                                </div>
                                <p>Free 30days Delivery Returns <a href="">details</a> </p>
                            </div>
            
            
            
            
                        </div>

                    </div>
            
            `
            container.innerHTML+=content
                }
                let c =document.querySelectorAll(".container .content .about .color .items5 .fo")

                for(let i=0 ; i<c.length ; i++){
                
                    c[i].addEventListener("click",()=>{
                        for(let i=0 ; i<c.length ; i++){
                            c[i].style.border = "solid 2px #ffffff";
                
                        }
                        c[i].style.border = "solid 2px #00000031";
                
                    })   
                 }


                 function changecolor() {
                    let cart = JSON.parse(localStorage.getItem('cart')) ;
                
                
                    cart.forEach(product => {
                        if (product.quantity >= 1) {
                            let k = document.getElementById(`k${product.id}`)
                            if(k){
                                console.log(k)
                                k.innerHTML = "added to cart"
                                k.style.backgroundColor = "#000"
                                k.style.color = "#FFFFFF"
                            }
    
                
                        }
                
                    });
                }
                changecolor()


            }




        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {


        });


}
getwomen()



function addtocart(id, price, image, title, description){
    let cart =JSON.parse(localStorage.getItem("cart")) || []
    let existingProduct =cart.find(product =>product.id ==id )

    if (existingProduct) {
        existingProduct.quantity = 1


    }
    else {
        cart.push({ id, price, image, title, description, quantity: 1 })
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    totalquantity()

    function changecolor() {
    
    
        cart.forEach(product => {
            if (product.quantity >= 1) {
                let k = document.getElementById(`k${id}`)
                if(k){
                    k.innerHTML = "added to cart"
                    k.style.backgroundColor = "#000"
                    k.style.color = "#FFFFFF"
                }

    
            }
    
        });
    }
    changecolor()
}





function totalquantity() {
    let catrq =document.getElementById("catrq")
    let catrqq =document.getElementById("catrqq")

    let cart = JSON.parse(localStorage.getItem("cart")) || []
    quantityTotal = 0
    cart.forEach(product => {
        quantityTotal += product.quantity
    })
    catrq.innerHTML=quantityTotal
    catrqq.innerHTML=quantityTotal
    if (quantityTotal == 0) {
        catrq.style.visibility = "hidden"
        catrqq.style.visibility = "hidden"
    }
    else if (quantityTotal >= 0) {
        catrq.style.visibility = "visible"
        catrqq.style.visibility = "visible"

        catrq.innerHTML = quantityTotal
        catrqq.innerHTML = quantityTotal
    }


}
totalquantity()



