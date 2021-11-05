// function addToCard(productName, quantitiy) {
//     console.log("Sepete eklendi: " + productName + " adet: " + quantitiy)
// }
// addToCard("elma", 20)
// addToCard("yumurta", 10)

// let sayHello = () => {
//     console.log("hello World")
// }

// sayHello()

// let sayHello2 = function() {
//     console.log("Hello World 2")

// }
// sayHello2()

// function addToCard2(productName, quantitiy, unitPrice) {
//     console.log()

// }
//addToCard2("elma", 5, 50)
let product1 = {
    productName: "elma",
    unitPrice: 10,
    quantitiy: 25
}

function addtoCard3(product) {

    console.log("Ürün:" + product.productName)
    console.log(" ürün Fiyatı:" + product.unitPrice)
    console.log(" Ürün Adeti: " + product.quantitiy)

}
addtoCard3(product1)

function addToCard4(products) {
    console.log(products)
}

let products = [{
        productName: "elma",
        unitPrice: 10,
        quantitiy: 25
    },
    {
        productName: "elma",
        unitPrice: 10,
        quantitiy: 25
    },
    {
        productName: "elma",
        unitPrice: 10,
        quantitiy: 25
    }
]

addToCard4(products)

function add(...numbers) { //rest demekmiş bu rest fonksiyonun sonunda olur 
    let total = 0
    for (let index = 0; index < numbers.length; index++) {
        total = total + numbers[index]

    }
    console.log(total)
}

add(20, 30)
add(20, 30, 40)
add(20, 30, 40, 50)

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "40M" },
    { name: "Karadeniz", population: "20M" },
    [
        ["Ankara", "konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity({
    productName: newProductName,
    unitPrice: newUnitPrice,
    quantitiy: newQuantity =
})