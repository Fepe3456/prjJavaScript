const tabella = document.getElementById("table-carrello"); 

function aggiungiProdotto(testo, prezzo){
    const riga = document.createElement("tr"); 
    const tdElemento = document.createElement("td"); 
    const btnTogli = document.createElement("td"); 
    const tdQuantità = document.createElement("td"); 
    const btnAggiungi = document.createElement("td"); 
    const tdPrezzo = document.createElement("td");
    
    tdElemento.textContent = testo; 
    tdQuantità.type = number; 
    tdQuantità.step = 1; 
    tdQuantità.textContent = 1; 
    tdPrezzo = (tdQuantità.value)*prezzo; 
    btnAggiungi.textContent = "+"; 
    btnTogli.textContent = "-"; 

    btnAggiungi = aumentaQuantità; 
    btnTogli = diminuisciQuantità; 

    riga.appendChild(tdElemento); 
    riga.appendChild(btnTogli); 
    riga.appendChild(tdQuantità); 
    riga.appendChild(btnAggiungi); 
    riga.appendChild(tdPrezzo); 
    
    tabella.appendChild(riga); 
}

function aumentaQuantità(){
    tdQuantità += 1; 
    tdPrezzo = (tdQuantità.value)*prezzo; 
}
function diminuisciQuantità(){
    tdQuantità -= 1; 
    tdPrezzo = (tdQuantità.value)*prezzo; 
}