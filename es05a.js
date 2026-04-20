let inputNome = document.getElementById("Nome");
let inputCognome = document.getElementById(Cognome");
let inputEta = document.getElementById("Età");
let bottone = document.getElementById("btn");

bottone.addEventListener("click", ()=>{
    let persona = {
        nome: inputNome.value,
        cognome: inputCognome.value,
        eta: Number(inputEta.value),
    };
    console.log(persona);
})
