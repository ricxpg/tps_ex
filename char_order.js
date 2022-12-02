function cambiaStringa(stringa) {
    let output = ""; // creiamo una variabile output vuota da cui prenderemo ogni carattere che cambiamo
    // cicliamo ogni carattere della stringa
    for (let i = 0; i < stringa.length; i++) {
      let current = stringa[i]; // prendiamo il carattere corrente
      // se è una lettera minuscola la cambiamo in maiuscola
      if (current === current.toLowerCase()) {
        output += current.toUpperCase();
      }
      // se è una lettera maiuscola la cambiamo nella successiva
      else if (current === current.toUpperCase()) {
        output += String.fromCharCode(current.charCodeAt() + 1);
      }
    }
    // invertiamo l'ordine dei caratteri
    return output.split("").reverse().join("");
  }