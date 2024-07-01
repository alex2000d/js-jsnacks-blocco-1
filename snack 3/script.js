// recupero il bottone dal dom
const button = document.getElementById('invia');


// aggiunto una funzione al bottone
button.addEventListener('click', function(){
    let number = document.getElementById('number').value;
    console.log(number);
 // separazione della stringa
    const separazione = number.split('');
    console.log(separazione);
 //    creo un arrey
      let arrey = [];
 // creo un ciclo for
 for (i = 0; i < 4; i++){
    // trasformo la stringa in valore numerico
     let valore = parseInt(number[i]);
     arrey.push(valore);
   }
     let risultato = 0
     for(i = 0; i < 4; i++){
        risultato += arrey[i];
     }

// mostro il risultato in console
   console.log(risultato);
    
 })