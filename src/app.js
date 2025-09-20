import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dom = [".com",".net",".us",".io"]
let hacks = ["followus", "destinar", "convive", "despues"]
let dominioOne=""
let dominioSecond=""
const miLista = document.getElementById('mi-ul');
for (let i = 0; i < pronoun.length ; i++) {
    for (let j = 0; j < adj.length ; j++) {
        for (let k = 0; k < noun.length ; k++) {
            for (let l = 0; l < dom.length ; l++){
                console.log(pronoun[i] + adj[j] + noun[k] + dom[l])
                let nuevoItem = document.createElement('li');
                nuevoItem.textContent = pronoun[i] + adj[j] + noun[k] + dom[l]
                miLista.appendChild(nuevoItem);
                dominioOne += pronoun[i] + adj[j] + noun[k] + dom[l]+" ---> "
            }
        }
    }
}
const nuevoItem = document.createElement('li');
nuevoItem.textContent = "-----------------"
miLista.appendChild(nuevoItem);
for (let i=0; i< hacks.length; i++){
    let newDominio = hacks[i]
    console.log(newDominio.slice(0, -2) + "." + newDominio.slice(-2))
    dominioSecond += newDominio.slice(0, -2) + "." + newDominio.slice(-2)+" ---> "
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = newDominio.slice(0, -2) + "." + newDominio.slice(-2)
    miLista.appendChild(nuevoItem);
 }
let element = document.getElementById("dominios")
element.innerHTML=dominioOne+dominioSecond
};

