const tabella = document.getElementById("table-carrello"); 
const totSpesa = document.getElementById("totale-spesa"); 
let tot = 0; 

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
    tot += prezzo; 
    totSpesa.textContent = "Totale spesa: " + tot + "€"; 

    btnAggiungi.onclick = () => aumentaQuantità(tdQuantità, tdPrezzo, prezzo);
    btnTogli.onclick = () => diminuisciQuantità(tdQuantità, tdPrezzo, prezzo);

    riga.appendChild(tdElemento); 
    riga.appendChild(btnTogli); 
    riga.appendChild(tdQuantità); 
    riga.appendChild(btnAggiungi); 
    riga.appendChild(tdPrezzo); 
    riga.appendChild(btnElimina); 

    btnElimina.onclick = () => rimuoviProdotto(riga, prezzo, tdQuantità.textContent);
    
    tabella.appendChild(riga); 
}

function aumentaQuantità(tdQuantità, tdPrezzo, prezzo){
    let quantità = parseInt(tdQuantità.textContent); 
    quantità +=1; 
    tdQuantità.textContent = quantità; 
    tot += prezzo; 
    totSpesa.textContent = "Totale spesa: " + tot + "€"; 
    tdPrezzo.textContent = (quantità)*prezzo + "€"; 
}
function diminuisciQuantità(tdQuantità, tdPrezzo, prezzo) {
    let quantità = parseInt(tdQuantità.textContent);
    if( quantità>1 ){
        quantità -= 1;
        tdQuantità.textContent = quantità;
        tot -= prezzo; 
        totSpesa.textContent = "Totale spesa: " + tot + "€"; 
        tdPrezzo.textContent = (quantità) * prezzo + "€";
    }
}

function rimuoviProdotto(riga, prezzo, quantità){
    tot -= prezzo * parseInt(quantità); 
    riga.parentNode.removeChild(riga); 
    totSpesa.textContent = "Totale spesa: " + tot + "€"; 
};