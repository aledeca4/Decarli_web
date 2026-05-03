const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  rl.question("inserisci primo numero: ", (num1) => {
    rl.question("inserisci secondo numero: ", (num2) => {
      rl.question('Inserisci operazione (+, -, *, /, **): ', (op) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let risultato;
        if (isNaN(a) || isNaN(b)) {
          console.log("Errore: devi inserire numeri validi.");
          rl.close();
          return;
        }
        switch (op) {
        case "+":
          risultato a + b;
          break;  
        case "-":
          risultato = a - b;
          break;
        case "*":
          risultato a * b;
          break;
        case "/":
          if (b===0) {
            console.log("divisione per zero.");
            rl.close();
            return;
          }
          risultato = a / b;
          break;
        case "**":
          risultato = a ** b;
          break;
        default:
          console.log("operazione non valida.");
          rl.close();
        return;
        }
        console.log("Risultato:", risultato);
        rl.close();
        });
    });
});
