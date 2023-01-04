"use strict"

//Tlačítka
const tlacitka = document.querySelector(".tlacitka").children

//Pole výsledek
const vysledek = document.querySelector(".vysledek").querySelector("input")

const symboly = "+-×÷.,"
const operace = ["adding", "subracting", "multiplying", "dividing"]

let jeDesetinnaTecka = false
let jeZnamenko = false

//Psaní do výsledku
for (const key in tlacitka) {
    if (Object.hasOwnProperty.call(tlacitka, key)) {
        const tlacitko = tlacitka[key]
        
        // Tlačítka co nemají atribut data-operation budou psát do inputu (čísla)
        if (!tlacitko.hasAttribute("data-operation")) {
            tlacitko.addEventListener("click", () => {
                if (vysledek.value.charAt(vysledek.value.length - 1) == 0 && jeZnamenko) {
                    vysledek.value = vysledek.value.substring(0, vysledek.value.length - 2)
                    vysledek.value += tlacitko.textContent
                    jeZnamenko = false
                } else {
                    vysledek.value += tlacitko.textContent
                }
            })
        }
        // Pokud tlačítko má atribut data-operation s hodnotou adding (sčítání) tak napíše plus
        else if(operace.includes(tlacitko.getAttribute("data-operation"))) {
            tlacitko.addEventListener("click", () => {
                if (vysledek.value != "" && !jeZnamenko) {
                    vysledek.value += tlacitko.textContent
                    jeDesetinnaTecka = false
                    jeZnamenko = true
                }
            })
        }
        // Desetinná tečka
        else if(tlacitko.getAttribute("data-operation") === "decimal") {
            tlacitko.addEventListener("click", () => {
                if (vysledek.value != "" && !jeDesetinnaTecka &&
                    (vysledek.value.charAt(vysledek.value.length-1) != "(" ||
                    vysledek.value.charAt(vysledek.value.length-1) != ")")) {
                    if(!jeZnamenko) {
                        vysledek.value += tlacitko.textContent 
                    } else {
                        vysledek.value += "0."
                    }
                    jeZnamenko = false
                } else if(vysledek.value == "") {
                    vysledek.value = "0."
                }
                jeDesetinnaTecka = true
            })
        }
        // Pokud tlačítko má atribut data-operation s hodnotou calculate (vypočti) tak vypočítá a napíše výsledek
        else if(tlacitko.getAttribute("data-operation") === "calculate") {
            tlacitko.addEventListener("click", () => {
                vysledek.value = eval(vysledek.value.replace("×", "*").replace("÷", "/").replace(",", "."))
            })
        }
        // Tlačítko AC vyčistí input
        else if(tlacitko.getAttribute("data-operation") === "clear") {
            // Jeden click odstraní poslední znak
            tlacitko.addEventListener("click", () => {
                vysledek.value = vysledek.value.substring(0, vysledek.value.length - 1)
            })
            // Dvojí click vyčistí vše
            tlacitko.addEventListener("dblclick", () => {
                vysledek.value = ""
            })
        }

        else if(tlacitko.getAttribute("data-operation") === "bracketOpen") {
            
        }

        else if(tlacitko.getAttribute("data-operation") === "bracketClose") {
            
        }
    }
}