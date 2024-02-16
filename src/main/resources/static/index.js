let innFilm;
let innAntall;
let innFornavn;
let innEtternavn;
let innNumber;
let innEpost;



function settFilm(input){
    if (input === "undefined"){
        document.getElementById("filmValidation").innerHTML = "Du må velge film";

    } else {
        innFilm = input
    }
}

function valideringAntall (input) {
    if (input > 0){
        innAntall = input;
        document.getElementById("antallValidation").innerHTML = "";
    } else {
        document.getElementById("antallValidation").innerHTML = "Ugyldig antall billetter";
    }
    document.getElementById("antallValidation").style.color = "red";
}
function valideringFornavn (input) {
    if (input === ""){
        document.getElementById("fornavnValidation").innerHTML = "Må fylle ut etternavn";
    } else {
        innFornavn = input;
        document.getElementById("fornavnValidation").innerHTML = "";
    }
    document.getElementById("fornavnValidation").style.color = "red";

}

function valideringEtternavn (input) {
    if (input === ""){
        document.getElementById("etternavnValidation").innerHTML = "Må fylle ut fornavn";
    } else {
        innEtternavn = input;
        document.getElementById("etternavnValidation").innerHTML = "";
    }
    document.getElementById("etternavnValidation").style.color = "red";
}

function valideringNummer(input) {
    if (input % 1 === 0 &&input.length === 8){
        innNumber = input;
        document.getElementById("numberValidation").innerHTML = "";
    } else {
        document.getElementById("numberValidation").innerHTML = "Nummer er ikke riktig"
    }
    document.getElementById("numberValidation").style.color = "red";
}

function valideringEpost(input) {
    if (input.includes("@") && input !== ""){
        innEpost = input;
        document.getElementById("epostValidation").innerHTML = "";
    } else {
        document.getElementById("epostValidation").innerHTML = "Ugyldig epost";
    }
    document.getElementById("epostValidation").style.color = "red";
}

const bestillinger = [];

function leggTilBestilling () {
    if (antallGood && filmGood &&fornavnGood && etterNavnGood && nummerGood && epostGood) {

        let billett = {
            film: innFilm,
            antall: innAntall,
            fornavn: innFornavn,
            etternavn: innEtternavn,
            telefon: innNumber,
            epost: innEpost
        }
        bestillinger.push(billett);

        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>" +
            "</tr>";
        for (let i of bestillinger) {
            ut += "<tr>";
            ut += "<td>" + i.film + "</td><td>" + i.antall + "</td><td>" + i.fornavn + "</td><td>" + i.etternavn + "</td><td>" + i.telefon + "</td><td>" + i.epost + "</td>";
            ut += "</tr>";
        }
        document.getElementById("kjopteBilletter").innerHTML = ut;
    }
}
ß
function leggTilIArray() {
    leggTilBestilling();
    settFilm();
}

function slettBilletter(){
    bestillinger[];
}