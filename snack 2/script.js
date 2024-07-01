// creo un arrey
const arrey = [];

// creo ciclo for
for(i = 1; i<= 6; i++){
    // chiedo all'utente di inserire il numero sei volte
    let numero = prompt('inserisci il tuo numero');
    
    // definisco se il numero e pari o dispari
    if(numero % 2 == 0){
        console.log`${numero}`;
    }
    else{
        console.log`${numero}`;
        arrey.push(numero);
    }
}


