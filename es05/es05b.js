// Creazione oggetto libro
const book = {
  titolo: "IT",
  autore: "stephen king",
  annoPubblicazione: 1986,
  genere: "Thriller",
  numeroPagine: 1216
};

// Stampa le proprietà dell'oggetto sulla console
for (let key in book) {
  // stampiamo nome della chiave e valore associato
  console.log(`${key} -> ${book[key]}`);
}
