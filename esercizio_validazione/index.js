

function check(){

let regione = document.forms["esform"]["regione"];
let email = document.forms["esform"]["email"];
let telefono = document.forms["esform"]["telefono"];

let valid = true;


if(document.getElementById('lastname').value == ''){
    alert('Inserisci cognome');
    return false;
}

if(document.getElementById('name').value == ''){
    alert('Inserisci nome');
    return false;
}


if(document.getElementById('matricola').value == '' || isNaN(document.getElementById('matricola').value)){
    alert('Matricola non valida');
    return false;
}

if(document.getElementById('regione').value == '--') { 
    alert("Seleziona una regione");
    return false;
}

if(document.getElementById('email').value == '' && document.getElementById('telefono').value == ''){
    alert("Inserire telefono o email");
    return false;
}








return true;





}