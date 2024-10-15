AOS.init();
let dash = document.getElementById("dash")
let extensio = document.getElementById("extension")
let blurr = document.getElementById("blur")
let closee = document.getElementById("close")
let out = document.getElementById("out")
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let out1 = document.getElementById("out1")

const urlparams = new URLSearchParams(window.location.search)
let type = urlparams.get("type")

if (type == "men") {

    getmen()
    b2.classList.add("btn1")

}
else if (type == "women") {
    getwomen()
    b3.classList.add("btn1")

}
else {
    getmen()
    getwomen()
    b1.classList.add("btn1")


}
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
                window.location = "../E-commerce.html"
            })

        }
    });

})


const token = localStorage.getItem("token")


let btnfirst = document.querySelectorAll(".beginning input")

function btnfirs() {
    for (let i = 0; i < btnfirst.length; i++) {
        btnfirst[i].addEventListener("click", () => {
            for (let i = 0; i < btnfirst.length; i++) {
                btnfirst[i].classList.remove("btn1")

            }
            btnfirst[i].classList.add("btn1")
            document.getElementById("center").innerHTML = ""


            if (btnfirst[i].value == "Men's clothing") {

                getmen()

            }
            else if (btnfirst[i].value == "Women's clothing") {


                getwomen()

            }
            else {
getall()

            }


        })

    }
}
btnfirs()
function getmen() {
    axios.get(`https://fakestoreapi.com/products/category/men's clothing`)
        .then(function (response) {

            document.getElementById("center").innerHTML = ""
            for (let i = 0; i < response.data.length; i++) {

                let content = `            <div  data-aos="fade-up" class="colc">
                  <div id="sos${response.data[i].id}" onclick="heart(${response.data[i].id})" class="svg">
<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="black" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"/></svg>  

                  </div>
                  <div class="img">
                      <img onclick="go(${response.data[i].id})" src="${response.data[i].image}" alt="">
                  </div>
                  <div class="p1">
                      <p>${response.data[i].title}</p><span>$${response.data[i].price}</span>
  
                  </div>
                  <div class="p2">
                      <p>${response.data[i].description}</p>
  
                  </div>
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
  
                      </div>
  
                  </div>
<button class="fof" id="k${response.data[i].id}" onclick="addtocart('${response.data[i].id}','${response.data[i].price}', '${response.data[i].image}','${response.data[i].title}', '${response.data[i].description}')">Add to cart</button>   
    </div>`
                document.getElementById("center").innerHTML += content







            }

            function changecolor() {
                let cart = JSON.parse(localStorage.getItem('cart'));


                cart.forEach(product => {
                    if (product.quantity >= 1) {
                        let k = document.getElementById(`k${product.id}`)
                        if (k) {
                            console.log(k)
                            k.innerHTML = "added to cart"
                            k.style.backgroundColor = "#000"
                            k.style.color = "#FFFFFF"
                        }


                    }

                });
            }
            changecolor()

            totalquantity()


        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {


        });


}

function getwomen() {
    axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(function (response) {

            document.getElementById("center").innerHTML = ""
            for (let i = 0; i < response.data.length; i++) {

                let content = `            <div  data-aos="fade-up" class="colc">
                  <div id="sos${response.data[i].id}" onclick="heart(${response.data[i].id})" class="svg">
<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="black" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"/></svg>  

                  </div>
                  <div class="img">
                      <img onclick="go(${response.data[i].id})" src="${response.data[i].image}" alt="">
                  </div>
                  <div class="p1">
                      <p>${response.data[i].title}</p><span>$${response.data[i].price}</span>
  
                  </div>
                  <div class="p2">
                      <p>${response.data[i].description}</p>
  
                  </div>
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
  
                      </div>
  
                  </div>
<button id="k${response.data[i].id}" onclick="addtocart('${response.data[i].id}','${response.data[i].price}', '${response.data[i].image}','women s clothing' , 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates')">Add to cart</button>   
   </div>`
                document.getElementById("center").innerHTML += content




            }
            function changecolor() {
                let cart = JSON.parse(localStorage.getItem('cart'));


                cart.forEach(product => {
                    if (product.quantity >= 1) {
                        let k = document.getElementById(`k${product.id}`)
                        if (k) {
                            k.innerHTML = "added to cart"
                            k.style.backgroundColor = "#000"
                            k.style.color = "#FFFFFF"
                        }


                    }

                });
            }
            changecolor()
            totalquantity()

        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {


        });


}

function getall() {


    document.getElementById("center").innerHTML = ""
    
        axios.all([
            axios.get(`https://fakestoreapi.com/products/category/men's clothing`),
            axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
        ])
        .then(axios.spread((menResponse, womenResponse) => {
            let allProducts = [...menResponse.data, ...womenResponse.data];
    
            allProducts.forEach(product => {
                let content = `            <div  data-aos="fade-up" class="colc">
                  <div id="sos${product.id}" onclick="heart(${product.id})" class="svg">
<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 256 256"><path fill="black" d="M178 42c-21 0-39.26 9.47-50 25.34C117.26 51.47 99 42 78 42a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.7 334.7 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.7 334.7 0 0 0 53.06-37C219.8 161.59 238 131.2 238 102a60.07 60.07 0 0 0-60-60m-50 175.11c-16.41-9.47-98-59.39-98-115.11a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 64.83 157.72 54 178 54a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11"/></svg>  

                  </div>
                  <div class="img">
                      <img onclick="go(${product.id})" src="${product.image}" alt="">
                  </div>
                  <div class="p1">
                      <p>${product.title}</p><span>$${product.price}</span>
  
                  </div>
                  <div class="p2">
                      <p>${product.description}</p>
  
                  </div>
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
  
                      </div>
  
                  </div>
<button id="k${product.id}" onclick="addtocart('${product.id}','${product.price}', '${product.image}','clothing' , 'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates')">Add to cart</button>   
   </div>`
    
                document.getElementById("center").innerHTML += content
            });
    

            let c = document.querySelectorAll(".container .content .about .color .items5 .fo");
            for (let i = 0; i < c.length; i++) {
                c[i].addEventListener("click", () => {
                    for (let i = 0; i < c.length; i++) {
                        c[i].style.border = "solid 2px #ffffff";
                    }
                    c[i].style.border = "solid 2px #00000031";
                });
            }
        }))
        .catch(function (error) {
            console.log(error);
        });

    
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

function addtocart(id, price, image, title, description) {

    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let existingProduct = cart.find(product => product.id === id)

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
                if (k) {
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
    let cart = JSON.parse(localStorage.getItem("cart")) || []

    let catrq = document.getElementById("catrq")
    let catrqq = document.getElementById("catrqq")

    let quantityTotal = 0
    cart.forEach(product => {
        quantityTotal += product.quantity
    })
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



function go(id) {

    window.location = `../product/product.html?id=${id}`

}


