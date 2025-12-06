const tabella = document.getElementById("table-carrello"); 

function aggiungiProdotto(testo, prezzo){
    const riga = document.createElement("tr"); 
    const tdElemento = document.createElement("td"); 
    const btnTogli = document.createElement("button"); 
    const tdQuantità = document.createElement("td"); 
    const btnAggiungi = document.createElement("button"); 
    const tdPrezzo = document.createElement("td");
    const btnElimina = document.createElement("button"); 
    
    tdElemento.textContent = testo; 
    tdQuantità.textContent = 1; 
    tdPrezzo.textContent = prezzo + "€"; 
    btnAggiungi.textContent = "+"; 
    btnTogli.textContent = "-"; 
    btnElimina.textContent = "ELIMINA"; 

    btnAggiungi.onclick = () => aumentaQuantità(tdQuantità, tdPrezzo, prezzo);
    btnTogli.onclick = () => diminuisciQuantità(tdQuantità, tdPrezzo, prezzo);

    riga.appendChild(tdElemento); 
    riga.appendChild(btnTogli); 
    riga.appendChild(tdQuantità); 
    riga.appendChild(btnAggiungi); 
    riga.appendChild(tdPrezzo); 
    riga.appendChild(btnElimina); 

    btnElimina.onclick = () => riga.parentNode.removeChild(riga);
    
    tabella.appendChild(riga); 
}

function aumentaQuantità(tdQuantità, tdPrezzo, prezzo){
    let quantità = parseInt(tdQuantità.textContent); 
    quantità +=1; 
    tdQuantità.textContent = quantità; 
    tdPrezzo.textContent = (quantità)*prezzo + "€"; 
}
function diminuisciQuantità(tdQuantità, tdPrezzo, prezzo) {
    let quantità = parseInt(tdQuantità.textContent);
    if( quantità>1 ){
        quantità -= 1;
        tdQuantità.textContent = quantità;
        tdPrezzo.textContent = (quantità) * prezzo + "€";
    }
}