let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let tabelloneMosse = [["", "", ""], ["", "", ""], ["", "", ""]];
let count = 0; 

let player = true; //player1 = true = 'X' --- player2 = false = 'O'

function aggiornaTurno() {
    if (player) {
        document.getElementById('turno').textContent = "Turno: " + player1.value;
    }
    else {
        document.getElementById('turno').textContent = "Turno: " + player2.value;
    }
}

aggiornaTurno();


function setValore(num) {
    if (document.getElementById(num).value === "") {
        const btn = document.getElementById(num); 
        count += 1; 
        if (player) {
            btn.value = "X";
            tabelloneMosse[Math.floor((num - 1) / 3)][(num - 1) % 3] = "X";
            player = false;
        }
        else {
            btn.value = "O";
            tabelloneMosse[Math.floor((num - 1) / 3)][(num - 1) % 3] = "O";
            player = true;
        }
        //btn.disabled = true; 
        aggiornaTurno();
        checkWin();
        if(count==9){
            alert("Pareggio!");
        }
    }
}

function checkWin(num) {
    let vittoria = false;
    //Controllo righe 
    for (let r = 0; r < tabelloneMosse[0].length; r++) {
        if (tabelloneMosse[r][0]!="" && tabelloneMosse[r][0] === tabelloneMosse[r][1] && tabelloneMosse[r][0] === tabelloneMosse[r][2]) {
            vittoria = true;
        }
    }

    if (!vittoria) {
        //Controllo colonne 
        for (let c = 0; c < tabelloneMosse[0].length; c++) {
            if (tabelloneMosse[0][c]!="" && tabelloneMosse[0][c] === tabelloneMosse[1][c] && tabelloneMosse[0][c] === tabelloneMosse[2][c]) {
                vittoria = true;
            }
        }
    }

    if (!vittoria) {
        //Diagonale principale 
        if (tabelloneMosse[0][0]!="" && tabelloneMosse[0][0] === tabelloneMosse[1][1] && tabelloneMosse[0][0] === tabelloneMosse[2][2]) {
            vittoria = true;
        }
    }

    if (!vittoria) {
        //Diagonale secondaria 
        if (tabelloneMosse[0][2]!="" && tabelloneMosse[0][2] === tabelloneMosse[1][1] && tabelloneMosse[0][2] === tabelloneMosse[2][0]) {
            vittoria = true;
        }
    }

    if (vittoria) {
        if (!player) { //Ora controllo !player e non player, perché dopo aver cliccato il bottone avevo già cambiato il valore di player a quello successivo e il metodo checkWin() lo chiamo dopo quest'operazione 
            alert("Ha vinto il giocatore '" + player1.value + "'");
        }
        else {
            alert("Ha vinto il giocatore '" + player2.value + "'");
        }
    }
}

function resetGame(){
    for(let i=1; i<=9; i++){
        document.getElementById(i).value = ""; 
    }
    tabelloneMosse = [["", "", ""], ["", "", ""], ["", "", ""]];
    player = true; 
    aggiornaTurno(); 
}