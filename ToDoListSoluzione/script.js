// acquisiamo il input
const input = document.getElementById("task");
// bottone aggiungi
const btnAggiungi = document.getElementById("addTask");

const lista = document.getElementById("listaTasks");

// al click del bottone chiamo aggiungi
btnAggiungi.onclick = aggiungi;


function aggiungi() {
    const testo = input.value.trim();

    if (testo === "") {
        alert("Devi inserire qualcosa nella textbox se vuoi aggiungerla");
        //return;
    }else{

    // creo l'elemento di lista
    const elemento = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = testo;
    const btnElimina = document.createElement("button");

    // aggiungo il testo all'interno del btn Elimina
    btnElimina.textContent = "Elimina";

    // se elimina viene cliccato elimino l'elemento che lo contiene
    btnElimina.onclick = function(){
        lista.removeChild(elemento);
    }

    // aggiungere lo span e il bottone alla elememnto
    elemento.appendChild(span);
    elemento.appendChild(btnElimina);
    

    lista.appendChild(elemento);


    input.value = "";
    }
}