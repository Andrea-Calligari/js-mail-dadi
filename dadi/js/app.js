//Genera un numero random da 1 a 6 (giocatore)
const randomNumberBanco = Math.floor(Math.random() * 100) +1;
//Genera un numero random da 1 a 6 (banco)
const randomNumberGiocatore = Math.floor(Math.random() * 100) +1;

console.log(randomNumberBanco, randomNumberGiocatore)
// chi ha il numero piu alto vince

if(randomNumberBanco > randomNumberGiocatore){
    console.log(' il banco vince e il giocatore perde!')
}else if (randomNumberBanco === randomNumberGiocatore){
    console.log('Pari!')

}else{
    console.log(' il banco perde e il giocatore vince!')

}
