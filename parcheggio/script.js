// ===============================
// VARIABILI GLOBALI
// ===============================
const POSTI_TOTALI = 10;
const COSTO_USCITA = 2;

let postiOccupati = 0;
let incassoTotale = 0;
let numeroUscite = 0;

// ===============================
// ELEMENTI DOM
// ===============================
const spanPostiTotali = document.getElementById("postiTotali");
const spanPostiLiberi = document.getElementById("postiLiberi");
const spanPostiOccupati = document.getElementById("postiOccupati");
const spanIncasso = document.getElementById("incasso");
const spanNumeroUscite = document.getElementById("numeroUscite");

const inputTarga = document.getElementById("targa");
const inputProprietario = document.getElementById("proprietario");
const btnAggiungi = document.getElementById("btnAggiungi");

const tabellaIngresso = document.getElementById("tabellaIngresso");
const tabellaParcheggio = document.getElementById("tabellaParcheggio");

// ===============================
// INIZIALIZZAZIONE
// ===============================
spanPostiTotali.textContent = POSTI_TOTALI;
aggiornaStatistiche();

// ===============================
// FUNZIONI
// ===============================
function aggiornaStatistiche() {
  spanPostiOccupati.textContent = postiOccupati;
  spanPostiLiberi.textContent = POSTI_TOTALI - postiOccupati;
  spanIncasso.textContent = incassoTotale.toFixed(2) + " €";
  spanNumeroUscite.textContent = numeroUscite;

  aggiornaBottoniParcheggia();
}

function aggiornaBottoniParcheggia() {
  const bottoni = document.querySelectorAll(".btnParcheggia");
  bottoni.forEach(btn => {
    btn.disabled = postiOccupati >= POSTI_TOTALI;
  });
}

// ===============================
// AGGIUNGI AUTO
// ===============================
btnAggiungi.addEventListener("click", () => {
  const targa = inputTarga.value.trim();
  const proprietario = inputProprietario.value.trim();

  if (targa === "" || proprietario === "") {
    alert("Compila tutti i campi");
    return;
  }

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${targa}</td>
    <td>${proprietario}</td>
    <td>
      <button class="btnParcheggia">Parcheggia</button>
      <button class="btnElimina">Elimina</button>
    </td>
  `;

  // EVENTI
  tr.querySelector(".btnParcheggia").addEventListener("click", () => {
    parcheggiaAuto(tr);
  });

  tr.querySelector(".btnElimina").addEventListener("click", () => {
    tr.remove();
  });

  tabellaIngresso.appendChild(tr);

  inputTarga.value = "";
  inputProprietario.value = "";

  aggiornaStatistiche();
});

// ===============================
// PARCHEGGIA AUTO
// ===============================
function parcheggiaAuto(riga) {
  if (postiOccupati >= POSTI_TOTALI) return;

  postiOccupati++;

  const btnCell = riga.children[2];
  btnCell.innerHTML = `<button class="btnUscita">Uscita</button>`;

  btnCell.querySelector(".btnUscita").addEventListener("click", () => {
    uscitaAuto(riga);
  });

  tabellaParcheggio.appendChild(riga);
  aggiornaStatistiche();
}

// ===============================
// USCITA AUTO
// ===============================
function uscitaAuto(riga) {
  postiOccupati--;
  numeroUscite++;
  incassoTotale += COSTO_USCITA;

  const btnCell = riga.children[2];
  btnCell.innerHTML = `
    <button class="btnParcheggia">Parcheggia</button>
    <button class="btnElimina">Elimina</button>
  `;

  btnCell.querySelector(".btnParcheggia").addEventListener("click", () => {
    parcheggiaAuto(riga);
  });

  btnCell.querySelector(".btnElimina").addEventListener("click", () => {
    riga.remove();
  });

  tabellaIngresso.appendChild(riga);
  aggiornaStatistiche();
}
