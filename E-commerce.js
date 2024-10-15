AOS.init();
let dash = document.getElementById("dash")
let extensio = document.getElementById("extension")
let blurr = document.getElementById("blur")
let closee = document.getElementById("close")
let signin = document.getElementById("sign-in")
let joinus = document.getElementById("join-us")
let out = document.getElementById("out")
let menpage = document.querySelectorAll("#menpage")
let womenpage = document.querySelectorAll("#womenpage")
let out1 = document.getElementById("out1")
let about = document.getElementById("aboutone")
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
signin.addEventListener("click", () => {
    window.location = "./login/login.html"
})
joinus.addEventListener("click", () => {
    window.location = "./sign-up/sign-up.html"
})
about.addEventListener("click", () => {
    window, location = "./about/about.html"
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
                window.location.reload()
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
                window.location.reload()
            })

        }
    });

})





const token = localStorage.getItem("token")

function show() {

    let none2 = document.getElementById("none2")
    let findicon2 = document.getElementById("find-icon2")
    let no1 = document.getElementById("no1")
    let no2 = document.getElementById("no2")
    let no3 = document.getElementById("no3")
    let no4 = document.getElementById("no4")
    let no5 = document.getElementById("no5")



    let non1 = document.getElementById("non1")
    let non2 = document.getElementById("non2")
    let non3 = document.getElementById("non3")
    let non4 = document.getElementById("non4")
    let none1 = document.getElementById("none1")
    let text = document.getElementById("text")
    let butt = document.getElementById("butt")
    let findicon = document.getElementById("find-icon")


    if (token == null) {
        none2.style.display = "none"
        out.style.display = "none"
        findicon2.style.display = "none"
        no1.style.display = "none"
        no2.style.display = "none"
        no3.style.display = "none"
        no4.style.display = "none"
        no5.style.display = "none"

    }
    else {
        non1.style.display = "none"
        non3.style.display = "none"
        non4.style.display = "none"
        non2.style.display = "none"
        none1.style.display = "none"
        text.style.display = "none"
        butt.style.display = "none"
        findicon.style.display = "none"


    }


}
show()

function shop() {
    let btnwomen = document.querySelectorAll("#btn-women")
    let btnmen = document.querySelectorAll("#btn-men")
    if (token == null) {
        for (let i = 0; i < btnmen.length; i++) {

            btnmen[i].addEventListener("click", () => {

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "You must log in first.",
                    customClass: {
                        title: 'swal2-title' // تطبيق CSS مخصص على العنوان
                    }
                });

            })

        }
        for (let i = 0; i < btnwomen.length; i++) {

            btnwomen[i].addEventListener("click", () => {

                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",

                    title: "You must log in first."
                });
            })

        }


    }
    else {

        for (let i = 0; i < btnmen.length; i++) {

            btnmen[i].addEventListener("click", () => {
                window.location = `./men/men.html?type=men`


            })

        }
        for (let i = 0; i < btnwomen.length; i++) {

            btnwomen[i].addEventListener("click", () => {
                window.location = `./men/men.html?type=women`

            })

        }
    }
    for (let i = 0; i < menpage.length; i++) {
        menpage[i].addEventListener("click", () => {

            window.location = `./men/men.html?type=men`
        })


    }

    for (let i = 0; i < womenpage.length; i++) {
        womenpage[i].addEventListener("click", () => {

            window.location = `./men/men.html?type=women`
        })


    }
}
shop()



function totalquantity() {
    let catrq = document.getElementById("catrq")
    let cartqq = document.getElementById("catrqq")

    let cart = JSON.parse(localStorage.getItem("cart")) || []
    quantityTotal = 0
    cart.forEach(product => {
        quantityTotal += product.quantity
    })
    catrq.innerHTML = quantityTotal
    catrqq.innerHTML = quantityTotal

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


let prev =document.querySelector(".prev")
let next =document.querySelector(".next")
let box =document.querySelector(".box")
let degrees =0

prev.addEventListener("click" ,() =>{

    degrees +=45
    box.style =`transform: perspective(1000px) rotateY(${degrees}deg)`


})

next.addEventListener("click" ,() =>{

    degrees -=45
    box.style =`transform: perspective(1000px) rotateY(${degrees}deg)`


})