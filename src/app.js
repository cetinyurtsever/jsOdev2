console.log("<ul>")

let konutKredileri = ["taşıt kredisi", "emlak kredisi", "özel konut kredisi", 123]
for (let index = 0; index < konutKredileri.length; index++) {
    const element = konutKredileri[index]
    console.log("<li>" +
        element + "</li>")
}
console.log("</ul>")