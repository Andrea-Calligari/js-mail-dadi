//Chiedere all'utente la sua mail

//- selezionare l'input in js
const emailDOMElement = document.getElementById('email');
const buttonDOMElement = document.getElementById('btn');

// console.log(buttonDOMElement,emailDOMElement)
buttonDOMElement.addEventListener('click', function () {

    //- creare una variabile con il valore dell'input
    const emailValue = emailDOMElement.value;

    //  console.log(emailValue)



    // - creare una lista con tot mail



    const checkedEmails = [
        'andrea.rossi@gmail.com', // i = 0
        'pippo.franco@libero.it', // i = 1
        'topolino@gmail.com', //
        'gianpiero@gmail.com',
    ];

    let trovato = false;

    //Controllare che la mail ricevuta sia nella lista di chi puo' accedervi
    for (let i = 0; i < checkedEmails.length; i++) {

        const currentEmail = checkedEmails[i];

        if (emailValue === currentEmail) {
           trovato = true;
        } 
    }

    // - se la mail  e' presente nella lista
    if (trovato === true) {
        console.log('Benvenuto');
    } else {
        console.log('Accesso Negato');
    }
})

