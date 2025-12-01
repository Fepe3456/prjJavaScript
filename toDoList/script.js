//Acquisiamo in input 
const input = document.getElementById("task");

//Bottone aggiungi 
const btnAdd = document.getElementById("add-btn");

const lista = document.getElementById("listaTasks");

//Al click del bottone chiamo aggiungi 
btnAdd.onclick = aggiungi; //Si può anche fare in html onclick="aggiungi()"

function aggiungi() {
    const testo = input.value.trim(); //trim toglie gli spazi in eccesso (quelli esterni)
    if (testo === "") {
        alert("Devi inserire qualcosa nella text box se vuoi aggiungere un task!");
    }
    else {
        //Creo elemento di lista 
        const elemento = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = testo + " ";
        const btnElimina = document.createElement("button");
        btnElimina.textContent = "Elimina";

        //Se il bottone btnElimina viene cliccato elimino l'elemento 
        btnElimina.onclick = function () {
            lista.removeChild(elemento);
        };

        //Aggiungere lo span e il bottone alla lista 
        elemento.appendChild(span);
        elemento.appendChild(btnElimina);

        lista.appendChild(elemento);

        input.value = null;
    }
}