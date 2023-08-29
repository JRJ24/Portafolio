const inputList = document.querySelector(".inputList"); 
const btn = document.getElementById("EnviarBtn");
const listShow = document.querySelector(".conteinerListaShow");
const btnClear = document.getElementById("Clear");
const taskList = document.querySelector(".taskList")
const conteinerTaksRegister = document.querySelector(".conteinerTaksRegister");
const taskCount = document.querySelector(".taskCount");
let listTaks = [];

let p = document.createElement("P");
p.textContent = `Tareas Registradas: 0`;

let frag = document.createDocumentFragment();
let i = 0;


function Tasks(){
    i++;
    let itemList = "";
    let li = document.createElement("LI");
    itemList = inputList.value;
    li.classList.add(`itemList-${i}`)
    li.innerHTML += itemList;
    frag.appendChild(li);
    if(i >= 23){
        btn.disabled = true;
    }
    updateTaksCount();
}
function enabled(){
    btn.disabled = false;
}
function updateTaksCount(){
    taskCount.textContent = `Tareas Registrads: ${i}`;
}
btn.addEventListener("click", ()=>{
    Tasks();
    listShow.querySelector("ul").appendChild(frag);
    inputList.value = ""; 
    updateTaksCount();
    console.log(listTaks);
})
btnClear.addEventListener("click", ()=>{
    const ul = listShow.querySelector("ul");
    ul.removeChild(ul.lastChild);
    i--;
    enabled();
    updateTaksCount();
})

