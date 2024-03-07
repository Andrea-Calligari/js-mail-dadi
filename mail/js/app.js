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
    const emailOne = 'andrea.rossi@gmail.com';
    const emailTwo = 'pippo.franco@libero.it';
    const emailThree = 'ciruzz@fastewb.it';

    const arrayList = [emailOne, emailTwo, emailThree];

    //Controllare che la mail ricevuta sia nella lista di chi puo' accedervi


    //  console.log(arrayList)

    // - se la mail  e' presente nella lista 
    
    if (emailValue === emailOne || emailValue === emailTwo || emailValue === emailThree) {
        //l'utente puo' accedere alla lista 
        //stampare il messaggio appropriato
        
        console.log('Benvenuto nella lista !', emailValue,);
    } else {
        //l'utente non puo' accedere alla lista 
        //stampare il messaggio appropriato

        console.log('Non é possibile accedere in lista perché la mail non é presente', emailValue, '!!NOT FOUND!!');

    }

})

