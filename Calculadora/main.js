const inputIngresar = document.querySelector(".inputIngresar"); 
const btnInputs = document.querySelectorAll(".btn");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multi = document.getElementById("multiplicacion");
const divi = document.getElementById("division");
const igual = document.getElementById("igual");
const c = document.getElementById("clear");

let num1 = 0;
let num2 = 0;
let operador = null; // Agregamos una variable para rastrear el operador
let valor = "";

btnInputs.forEach(btn => {
    btn.addEventListener("click", () => {
        valor += btn.value; // Concatenar los valores de los botones
        inputIngresar.value = valor;
    });
});

suma.addEventListener("click", () => {
    operador = "+"; // Establecer el operador a suma
    num1 = parseFloat(valor); // Convertir el valor actual a número y asignarlo a num1
    valor = ""; // Reiniciar el valor
    inputIngresar.value = "";
    inputIngresar.placeholder = num1;
});
resta.addEventListener("click", ()=>{
    operador = "-"; // Establecer el operador a suma
    num1 = parseFloat(valor); // Convertir el valor actual a número y asignarlo a num1
    valor = ""; // Reiniciar el valor
    inputIngresar.value = "";
    inputIngresar.placeholder = num1;
})
multi.addEventListener("click", ()=>{
    operador = "*"; // Establecer el operador a suma
    num1 = parseFloat(valor); // Convertir el valor actual a número y asignarlo a num1
    valor = ""; // Reiniciar el valor
    inputIngresar.value = "";
    inputIngresar.placeholder = num1;
})
divi.addEventListener("click", ()=>{
    operador = "/"; // Establecer el operador a suma
    num1 = parseFloat(valor); // Convertir el valor actual a número y asignarlo a num1
    valor = ""; // Reiniciar el valor
    inputIngresar.value = "";
    inputIngresar.placeholder = num1;
})
igual.addEventListener("click", () => {
    if (operador !== null) {
        num2 = parseFloat(valor); // Convertir el valor actual a número y asignarlo a num2
        
        if (operador === "+") {
            resultado = num1 + num2;
        } else if (operador === "-") {
            resultado = num1 - num2;
        } else if (operador === "*") {
            resultado = num1 * num2;
        } else if (operador === "/") {
            resultado = num1 / num2;
        }
        
        inputIngresar.value = resultado;
        valor = resultado.toString(); // Mostrar el resultado y permitir realizar más operaciones
        num1 = resultado; // Actualizar num1 con el resultado para seguir operando
        num2 = 0; // Reiniciar num2
        operador = null; // Reiniciar el operador
    }
});
c.addEventListener("click", () => {
    num1 = 0; 
    num2 = 0; 
    operador = null;
    valor = "";
    inputIngresar.value = "";
    inputIngresar.placeholder = 0;
})

