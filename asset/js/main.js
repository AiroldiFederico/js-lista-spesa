/*
Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
*/

let lista = [
    "pane",
    "latte",
    "uova",
    "pasta",
    "riso",
    "tonno",
    "fagioli",
    "pollo",
    "patate",
    "carote",
    "pomodori",
    "insalata",
    "mele",
    "banane",
    "arance",
    "kiwi",
    "fragole",
    "limoni",
    "acqua",
    "vino"
];


let index = 0;

while ( index < 20 ) {

    //punto l'elemtneo ul html
    const ulList= document.getElementsByTagName('ul');

    //creo l'elemento li html
    const ulLi = document.createElement('li');
    
    //li diventa figlio di ul
    document.getElementById("ulListID").appendChild(ulLi);

    //inserisco gli oggetti dell'array alla lista
    ulLi.innerHTML = `<input type="checkbox"><span> ${lista[index]}</span>`;

    console.log(lista[index]);
    
    //incremento
    index++;

};
