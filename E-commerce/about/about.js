let home =document.getElementById("home")
let every = document.getElementById("every")
let we = document.getElementById("we")
let serve = document.getElementById("serve")
let test = document.getElementById("test")

console.log(we)

home.addEventListener("click",()=>{

window.location="../E-commerce.html"

})

async function show() {



    await new Promise((resolve) => {
        setTimeout(() => {
            we.innerText = "WE"
            resolve()
        }, 500);
    })
    await new Promise((resolve) => {
        setTimeout(() => {
            serve.innerText = "SERVE"
            resolve()
        }, 600);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            every.innerText = "Teenagers"
            resolve()
        }, 600);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            every.innerText = "Women"
            resolve()
        }, 200);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            every.innerText = "Men"
            resolve()
        }, 200);
    })

    await new Promise((resolve) => {
        setTimeout(() => {
            every.innerText = "Children"
            resolve()
        }, 200);

        
    })

    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         every.innerText = "444"
    //         resolve()
    //     }, 200);

        
    // })

    await new Promise((resolve) => {
        setTimeout(() => {
            every.innerText = "EVERYBODY*"
            resolve()
        }, 200);

        
    })

    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         test.innerText = "If you wear clothes from SH, you are stylish"
    //         resolve()
    //     }, 200);

        
    // })

    await new Promise((resolve) =>{
test.style.left="0px"
// test.style.transitio="0.5px"

    })

}

show()



