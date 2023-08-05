// Importa il modulo 'fs' (file system) per manipolare i file nel sistema.
const fs = require("fs");

// Scrive il contenuto "Hello Node" nel file "message.txt".

fs.writeFile("message.txt", "Hello Node", (err) => {
  // Se si verifica un errore durante la scrittura del file, verrà lanciata un'eccezione.
  if (err) throw err;
  console.log("The file has been saved!");
});

// Legge il contenuto del file "message.txt" come testo in codifica UTF-8.

fs.readFile("message.txt", "utf8", (err, data) => {
  // Se si verifica un errore durante la lettura del file, verrà lanciata un'eccezione.
  if (err) throw err;
  console.log(data); // Stampa il contenuto del file letto.
});


// In sintesi, questo codice scrive il messaggio "Hello Node" nel file "message.txt", 
// poi legge il contenuto del file e lo stampa sulla console. 
// È importante notare che le operazioni di lettura e scrittura dei file possono essere asincrone in Node.js, 
// quindi il modulo fs utilizza le funzioni di callback per gestire il completamento delle operazioni.