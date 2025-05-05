const numeriDaRicordare = [];
const numeriElement = document.getElementById("numeri");
const inputContainer = document.getElementById("input-container");
const risultato = document.getElementById("risultato");
const btnControlla = document.getElementById("controlla");

for (let i = 0; i < 5; i++) {
  numeriDaRicordare.push(Math.floor(Math.random() * 100) + 1);
}

numeriElement.textContent = "Numeri: " + numeriDaRicordare.join(", ");

setTimeout(() => {
  numeriElement.style.display = "none";
  inputContainer.style.display = "block";
}, 30000); // 30 secondi

btnControlla.addEventListener("click", () => {
  const inputFields = document.querySelectorAll(".input-num");
  const numeriUtente = [];

  for (let input of inputFields) {
    const numero = parseInt(input.value);
    if (!isNaN(numero)) {
      numeriUtente.push(numero);
    }
  }

  const numeriIndovinati = numeriUtente.filter((n) => numeriDaRicordare.includes(n));

  risultato.innerHTML = `
        Hai indovinato ${numeriIndovinati.length} numeri:<br>
        ${numeriIndovinati.join(", ") || "Nessuno"}
      `;
});
