/*funzione scandisce array e conta quanti elementi corrispondono a una certa stringa, nel caso ce ne sia solo 1 viene visualizzato titolo autore altrimenti numero match.

Partite dall’esercizio precedente introducendo un array contenente oggetti con autore e titolo e ricercando i titoli che corrispondono ad una sequenza di caratteri. Se corrisponde solo un libro visualizzate autore e titolo (ad es. nella console), altrimenti il numero di libri corrispondenti

Come per l’esercizio precedente, impostate i valori in variabili,
senza complicarvi la vita con l’interfaccia grafica */

const autoriTitoli = [
  { autore: 'Dante Alighieri', titolo: 'La Divina Commedia' },
  { autore: 'Dante Alighieri', titolo: 'De Vulgari Eloquentia' },
  { autore: 'Alessandro Manzoni', titolo: 'I Promessi Sposi' },
  { autore: 'Luigi Pirandello', titolo: 'Il Fu Mattia Pascal' },
  { autore: 'Luigi Pirandello', titolo: 'Uno, Nessuno, Centomila' },
  { autore: 'Luigi Pirandello', titolo: 'Mal Giocondo' },
];

stringa1 = 'dante AlighierI';
stringa2 = 'PROMESSI';
stringa3 = 'Luigi';
stringa4 = 'primo Levi';

function trovaStringa(autoriTitoli, stringa) {
  let trovato = false;
  let contaNumeroMatch = 0;
  let memorizzaIndice = 0;
  for (let i = 0; i < autoriTitoli.length; i++) {
    let concatenaAutoriTitoli =
      `${autoriTitoli[i].autore} ${autoriTitoli[i].titolo}`.toLowerCase();
    if (concatenaAutoriTitoli.includes(stringa.toLowerCase())) {
      trovato = true;
      contaNumeroMatch++;
      memorizzaIndice = i;
    }
  }
  if (trovato == false) {
    return trovato;
  } else if (trovato == true && contaNumeroMatch == 1) {
    return `${autoriTitoli[memorizzaIndice].autore} ${autoriTitoli[memorizzaIndice].titolo}`.toLowerCase();
  } else {
    return contaNumeroMatch;
  }
}

console.log(trovaStringa(autoriTitoli, stringa1));
console.log(trovaStringa(autoriTitoli, stringa2));
console.log(trovaStringa(autoriTitoli, stringa3));
console.log(trovaStringa(autoriTitoli, stringa4));

/* Soluzione ChatGPT

Esercizio del buongiorno Chatty
Crea una funzione JavaScript che prende in input una variabile di tipo array di oggetti e una stringa di testo. La variabile array di oggetti contiene al suo interno per ogni indice 'autore' con valore associato il nome dell'autore, e 'titolo' con associato il titolo di un opera; completa l'array inserendo  un autore con un opera, uno con 2 opere e uno con 3 opere.
Quello che deve fare la funzione è controllare se la stringa in input è contenuta all'interno dell'array, quindi se un elemento dell'array è autore: "dante alighieri", titolo: "la divina commedia" e la stringa in input è "alighieri" oppure "commedia" oppure "alighieri la divina" la condizione è soddisfatta. Se il numero delle occorrenze trovate è 0 la funzione deve ritornare false, se è 1 deve ritornare una stringa di testo che contiene autore e titolo dell'opera corrispondente, se vi sono più occorrenze deve ritornare il numero di occorrenze trovate.
La ricerca deve essere case-sensitive, quindi se la stringa in input è "ALIGHIERI" oppure "DiVinA" la ricerca deve comunque avere successo.

Lessss go 

function searchArray(array, searchString) {
  let occurrences = 0;
  let foundTitle = '';

  for (let i = 0; i < array.length; i++) {
    const author = array[i].autore;
    const title = array[i].titolo;

    if (author.includes(searchString) || title.includes(searchString)) {
      occurrences++;
      foundTitle = author + ' - ' + title;
    }
  }

  if (occurrences === 0) {
    return false;
  } else if (occurrences === 1) {
    return foundTitle;
  } else {
    return occurrences;
  }
}

// Esempio di utilizzo
const books = [
  { autore: 'Haruki Murakami', titolo: '1Q84' },
  { autore: 'Italo Calvino', titolo: 'Il Barone Rampante' },
  { autore: 'Umberto Eco', titolo: 'Il Nome della Rosa' },
  { autore: 'Umberto Eco', titolo: 'Il Sentiero Dei Nidi Di Ragno' },
  { autore: 'Jorge Luis Borges', titolo: 'Ficciones' },
];

console.log(searchArray(books, 'Dan Brown')); // false
console.log(searchArray(books, 'Haruki Murakami')); // 'Haruki Murakami - 1Q84'
console.log(searchArray(books, 'Umberto Eco')); // 2 */
