function berechneOneRepMax(){
    const bodyweight = document.getElementsByClassName("form-field")[0].value;
    const liftedweight = document.getElementsByClassName("form-field")[1].value;
    const reps = document.getElementsByClassName("form-field")[2].value; 
    
    werte = document.querySelectorAll(".form-field");
    for (var i = 0; i < werte.length; i++) {
        if (werte[i].value == "") {
            alert("Bitte alle Felder ausfüllen!");
            return;
        }
    }

    const onerepMax = liftedweight * (1 + reps / 30);
    const vielfache = onerepMax / bodyweight;

    document.getElementById("onerepmax").innerHTML =  "Dein One-Rep-Max beträgt: "+onerepMax.toFixed(2);
    document.getElementById("vielfache").innerHTML =  "Das sind "+vielfache.toFixed(2)+"x dein Körpergewicht!";

   berechneWiederholungen(onerepMax);
}

function berechneWiederholungen(onerepMax) {
    const gewichtliste = {1 : onerepMax.toFixed(2)}; // Gewicht für 1 Wiederholung
    for (let i = 2; i < 16; i++) { 
        const gewicht = onerepMax / (1 + i / 30);
        gewichtliste[i] = gewicht.toFixed(2); // Gewicht auf 2 Dezimalstellen runden
    }

    // Trainingstabelle als HTML-Tabelle erstellen
    let tabelleHTML = "<table border='1'><tr><th>Wiederholungen</th><th>Gewicht (kg)</th></tr>";
    for (const [wiederholungen, gewicht] of Object.entries(gewichtliste)) {
        tabelleHTML += `<tr><td>${wiederholungen}</td><td>${gewicht}</td></tr>`;
    }
    tabelleHTML += "</table>";

    // Tabelle in das HTML einfügen
    document.getElementById("tabelle").innerHTML = tabelleHTML;
    document.getElementsByClassName("tabellenAnzeige")[0].style.visibility = "visible";
}


function showAnswer() {
    document.getElementById("footer").style.visibility = "visible";
}