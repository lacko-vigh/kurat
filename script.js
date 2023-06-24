function answer() {    
    if (document.getElementById("35").checked == true || document.getElementById("45").checked == true
    || document.getElementById("65").checked == true) {
        document.getElementById("eredmeny").innerText = "Rossz válasz!"
    }
    else if (document.getElementById("55").checked == true) {
        document.getElementById("eredmeny").innerText = "Jó válasz!"
    }
    else {
        document.getElementById("eredmeny").innerText = "Hiányos válasz!"
    }
}
