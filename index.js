console.log("person1 : shows ticket")
console.log("person2 : shows ticket")



async function preMovie() {

    let buyTicket = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I will buy ticket")
        },5000)
    })


    let getPopcorn = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I Will buy popcorn")
        },2000)
    })


    let getBurger = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I will buy burger")
        },1000)
    })


    let getfrenchfries = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I will buy french fries")
        },2000)
    })


    let  getColdDrinks  = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("I buy will cold drinks")
        },1000)
    })



    let gticket = await buyTicket
    console.log("Done:" + gticket)

    let gpopcorn = await getPopcorn
    console.log("Done:" + gpopcorn)

    let gburger = await getBurger
    console.log("Done:" + gburger)

    let gfrenchfries = await getfrenchfries
    console.log("Done:" + gfrenchfries)

    let gcolddrink = await getColdDrinks
    console.log("Done:" + gcolddrink)




    return [gticket,gpopcorn,gburger,gfrenchfries,gcolddrink]



      

}


preMovie().then()
  





console.log("person3 : shows ticket")
console.log("person4 : shows ticket")
console.log("person5 : shows ticket")