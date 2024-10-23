function calcolaPrezzo() {
    const userKm = parseInt(document.getElementById('chilometri').value);
    const userAge = parseInt(document.getElementById('eta').value);
    const kmPrezzo = 0.21; 
    const prezzoBaseBiglietto = kmPrezzo * userKm;
    let prezzoFinale = prezzoBaseBiglietto;

    if (userAge < 18) {
        prezzoFinale = prezzoBaseBiglietto - (prezzoBaseBiglietto * 20 / 100);
    } else if (userAge >= 65) {
        prezzoFinale = prezzoBaseBiglietto - (prezzoBaseBiglietto * 40 / 100);
    }

    prezzoFinale = prezzoFinale.toFixed(2);
    document.getElementById('risultato').textContent = `Il prezzo finale del biglietto è: € ${prezzoFinale}`;
}