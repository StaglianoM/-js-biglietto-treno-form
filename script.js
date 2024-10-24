function calcolaPrezzo() {
    const userKm = parseInt(document.getElementById('chilometri').value);
    const userAge = parseInt(document.getElementById('eta').value);
    const kmPrezzo = 0.21;
    const prezzoBaseBiglietto = kmPrezzo * userKm;

    const userName = document.getElementById('nomeCognomeInput').value;

    let prezzoFinale = prezzoBaseBiglietto;
    let tipoBiglietto = 'Biglietto Standard';

    // SE km/age non è un valore numerico - Stamp Error 
    if (isNaN(userKm) || isNaN(userAge) || !isNaN(userName.trim())) {
        alert('Per favore, compila tutti i campi.');
        document.getElementById('chilometri').value = '';  
        document.getElementById('eta').value = '';  
        document.getElementById('nomeCognomeInput').value = '';
        return;
    }

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

    SezioneTicket();

    // sezione ticket visibile
    function SezioneTicket() {
        const sezione = document.getElementById('ticket');
        sezione.style.display = 'block';
    }
}

// reset button
function resetForm() {
    document.getElementById('nomeCognomeInput').value = '';
    document.getElementById('chilometri').value = '';
    document.getElementById('eta').value = '';
    document.getElementById('carrozza').value = Math.floor(Math.random() * 9) + 1;
}

// sezione ticket annulla 
function nascondiSezione() {
    const sezione = document.getElementById('ticket');
    sezione.style.display = 'none'; 
}