// creo un arrey
const lista = ["marco", "alessandro", "paolo", "vanessa", "cristina"];

// recupero il pulsante dal dom
let button = document.getElementById('search');

button.addEventListener('click', function(){


    // recupero il valore inserito nel campo input
    let word = document.getElementById('lista').value


    // creo una flag o variabile di controllo
    let found_name = false;
    
    // ciclo l'arrey e lo confronto con la parola inserita nella form
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === word){
            // se è vera imposto la variabile a true
            found_name = true;
        }
    }
    // mostro il risultato in console

    if (found_name === true){
        console.log(`${word} lei è in lista puo entrare`)
        
    }
    else(
        console.log(`${word} lei non è in lista`)
       
       
    )
})