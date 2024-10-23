function calcolaPrezzo() {
    const userKm = parseInt(document.getElementById('chilometri').value);
    const userAge = parseInt(document.getElementById('eta').value);
    const kmPrezzo = 0.21; 
    const prezzoBaseBiglietto = kmPrezzo * userKm;
    
    const userName = document.getElementById('nomeCognomeInput').value;


    let prezzoFinale = prezzoBaseBiglietto;
    let tipoBiglietto = 'Biglietto Standard'; 
    

    if (userAge < 18) {
        tipoBiglietto = 'Biglietto Minorenne'; 
        prezzoFinale = prezzoBaseBiglietto - (prezzoBaseBiglietto * 20 / 100);
    } else if (userAge >= 65) {
        tipoBiglietto = 'Biglietto Over65';
        prezzoFinale = prezzoBaseBiglietto - (prezzoBaseBiglietto * 40 / 100);
    }


    
    prezzoFinale = prezzoFinale.toFixed(2);
    document.getElementById('nomeCognome').textContent = userName;
    document.getElementById('risultato').textContent = `Il prezzo è: € ${prezzoFinale}`;
    document.getElementById('tipoBiglietto').textContent = tipoBiglietto;
    document.getElementById('carrozza').textContent = Math.floor(Math.random() * 9) + 1;
    document.getElementById('codiceCp').textContent = Math.floor(Math.random() * 9999) + 1;
}

function resetForm() {
    document.getElementById('nomeCognome').value = '';
    document.getElementById('chilometri').value = '';
    document.getElementById('eta').value = '';
    document.getElementById('carrozza').value = Math.floor(Math.random() * 8) + 1;
}


