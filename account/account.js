let dash = document.getElementById("dash")
console.log(menpage)
let extensio = document.getElementById("extension")
let blurr = document.getElementById("blur")
let closee = document.getElementById("close")
let signin = document.getElementById("sign-in")
let joinus = document.getElementById("join-us")
let out = document.getElementById("out")
let out1 = document.getElementById("out1")
let hidden = document.getElementById("hidden")
let end = document.getElementById("end")
let container = document.getElementById("container")
let coc = document.getElementById("coc")
let itemcart = document.getElementById("itemcart")
// let menpage =document.querySelectorAll("#menpage")
// let womenpage =document.querySelectorAll("#womenpage")

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

    for(let i=0 ; i<menpage.length ;i++){
        menpage[i].addEventListener("click",()=>{
        
        window.location=`../men/men.html?type=men`
        })
        
        
        }
        
        for(let i=0 ; i<womenpage.length ;i++){
            womenpage[i].addEventListener("click",()=>{
            
            window.location=`../men/men.html?type=women`
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



// localStorage.removeItem("profile")


function data() {
    let datauser = JSON.parse(localStorage.getItem("user"))

    let pro = JSON.parse(localStorage.getItem("profile")) || { firstname: datauser.name, lastname: "sh", color: "#000", photo: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" }




    let photo = ""
    document.getElementById("photo").addEventListener("change", function (event) {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = function (e) {
                document.getElementById("userphoto").setAttribute("src", e.target.result)
                photo = e.target.result;

            }
            reader.readAsDataURL(file);
        }
    })


    let color = ""
    let x = false
    hidden.addEventListener("click", () => {


        let c = document.querySelectorAll(".container .content .end .choosecolor .items5 .fo")
        for (let i = 0; i < c.length; i++) {

            c[i].addEventListener("click", () => {
                for (let i = 0; i < c.length; i++) {
                    c[i].style.border = "solid 2px #ffffff";

                }
                c[i].style.border = "solid 2px #00000031";
                let tybe = c[i].getAttribute("id")
                if (tybe == "black") {
                    coc.style.backgroundColor = "#000"
                    color = "#000"
                }
                else if (tybe == "gold") {
                    coc.style.backgroundColor = "#fbb1bd"
                    color = "#fbb1bd"

                }
                else if (tybe == "blue") {
                    coc.style.backgroundColor = "#8eecf5"
                    color = "#8eecf5"

                }
                else if (tybe == "grey") {
                    coc.style.backgroundColor = "grey"
                    color = "grey"

                }
                else if (tybe == "green") {
                    coc.style.backgroundColor = "rgb(136, 255, 0)"
                    color = "rgb(136, 255, 0)"

                }

            })
        }

        if (x == true) {
            end.style.display = "none"
            container.style.height = "100vh"
            hidden.innerHTML = "Edit profile"




            let firstname = document.getElementById("first").value
            let lastname = document.getElementById("last").value

            if (color == "") {
                color = pro.color
            }
            if (photo == "") {
                photo = pro.photo
            }
            if (firstname == "") {
                firstname = pro.firstname
            }
            if (lastname == "") {
                lastname = pro.lastname
            }


            document.getElementById("userfirstname").innerHTML = firstname
            document.getElementById("userlastname").innerHTML = lastname
            document.getElementById("userphoto").setAttribute("src", photo)







            let profile = { firstname, lastname, color, photo }
            localStorage.setItem("profile", JSON.stringify(profile))





            x = false
        }
        else {
            end.style.display = "block"
            container.style.height = "100%"
            hidden.innerHTML = "Save"


            x = true
        }



    })



    coc.style.backgroundColor = pro.color
    document.getElementById("userfirstname").innerHTML = pro.firstname
    document.getElementById("userlastname").innerHTML = pro.lastname
    document.getElementById("userphoto").setAttribute("src", pro.photo)


}
data()
function quantity() {

    let cart = JSON.parse(localStorage.getItem("cart"))
    if (cart) {
        let totalquantity = 0
        for (let i = 0; i < cart.length; i++) {

            totalquantity += cart[i].quantity
        }
        itemcart.innerHTML=totalquantity


    }



}
quantity()
