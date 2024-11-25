function appendToDisplay(valeur) {
    document.getElementById("display").valeur += valeur;
}
function clearDisplay() {
    document.getElementById("display").valeur = '';
}
function calculResultat() {
    var display = document.getElementById("display");
    try {
        display.valeur = eval(display.valeur);
    }
    catch (e) {
        display.valeur = 'Erreur';
    }
}
