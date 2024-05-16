function paliCheck(word){
    let reverseWord = '';

    for (let index = word.length -1; index >= 0; index--) {
        const character = word[index];
        reverseWord+= character;
        console.log(reverseWord);
    }
    if(reverseWord == word){
        console.log('La parola è palindroma')
    }else{
        console.log('La parola non è palindroma')
    }

}
                    // Function pari o dispari

function pariDispari(number){

}



let globalNumber = 0;
const userWord = prompt('inserisci una parola');
paliCheck(userWord);

const userAnswer = prompt('Pari o Dispari?').toLowerCase();
if (userAnswer == 'pari' || userAnswer == 'dispari'){
    console.log(userAnswer);
    const userNumber= Number.parseInt(prompt('SCrivi un numero da 1 a 5'));
    if(userNumber < 0 || userNumber < 6 ){
        console.log('okay');
        const randomNumber = Math.floor( Math.random() * (5 - 1 + 1) + 1);
        console.log(randomNumber);
        globalNumber = userNumber + randomNumber;
        console.log(globalNumber);
    }else{
        console.log('riprova');
    }
}else{
    alert('Si accettano solo le parole Pari o Dispari')
}












// <!-- \\ chiedi all'utente di inserire una parola  -->
//     <!-- \\crea una funzione che controlli se la parola è palindroma. -->
//         <!-- \\chiedi all'utente di scegliere pari o dispari -->
//         <!-- \\chiedere all'utente un numero da 1 a 5 -->
//             <!-- *\\ controllo sul tipo e sul numero inserito dall'utente. -->
//         <!-- \\ generiamo un numero random da 1 a 5 per il computer usando una funzione. -->
//         <!-- \\ sommiamo il numero del computer e quello dell'utente -->
//             <!-- \\usare una funzione che stabilisce se la somma dei due numeri è pari o dispari  -->
//         <!-- \\dichiariamo il vincitore -->