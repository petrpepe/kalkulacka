"use strict"

//Tlačítka
const tlacitka = document.querySelector(".tlacitka").children
//Pole výsledek
const vysledek = document.querySelector(".vysledek").querySelector("input")

//Psaní do výsledku
for (const key in tlacitka) {
    if (Object.hasOwnProperty.call(tlacitka, key)) {
        const tlacitko = tlacitka[key]
        
        if (!tlacitko.hasAttribute("data-operation")) {
            tlacitko.addEventListener("click", () => vysledek.value += tlacitko.textContent)
        } else if(tlacitko.getAttribute("data-operation") == "adding") {
            tlacitko.addEventListener("click", () => {
                if (vysledek.value != null && 
                    vysledek.value.charAt(vysledek.value.length - 1) != "+") {
                    vysledek.value += tlacitko.textContent
                }
            })
        } else if(tlacitko.getAttribute("data-operation") == "calculate") {
            tlacitko.addEventListener("click", () => {
                
            })
        }
    }
}