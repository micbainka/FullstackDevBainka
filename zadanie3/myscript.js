//3.Pobierz 2 zmienne z formularza i wypisz ich sumę za pomocą alert (document.getElementById lub addEventListener)

window.onload = function(){
    document.getElementById("btnActionButton").onclick = function(){
        alert(Number(document.getElementById("inputbox1").value) + Number(document.getElementById("inputbox2").value))
    }
}
