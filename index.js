function validazioneEmail(email) 
{
    // recupero il valore della email indicata nel form
    var email=document.forms['miomodulo'].email.value;
    // se non ho inserito nulla nel campo
    if(email==''){alert("Devi indicare un indirizzo email"); return false;}
    // verifico se è un indirizzo valido
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
       alert("L'indirizzo email che hai inserito e' valido")
    }
    else {
       alert("L'indirizzo email che hai inserito non e' valido");
    }
    return false;
}