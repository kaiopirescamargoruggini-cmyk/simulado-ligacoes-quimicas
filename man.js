const gabarito = [
  "B", "A", "B", "C", "B",
  "B", "C", "B", "B", "A",
  "A", "C", "B", "C", "C"
];

function corrigir() {
  let acertos = 0;

  for (let i = 0; i < gabarito.length; i++) {
    const resposta = document.querySelector(
      `input[name="q${i + 1}"]:checked`
    );

    if (resposta && resposta.value === gabarito[i]) {
      acertos++;
    }
  }

  const resultado = document.getElementById("resultado");

  resultado.innerHTML =
    `Você acertou <strong>${acertos}/15</strong> questões!<br>` +
    `Nota: <strong>${(acertos / 15 * 10).toFixed(1)}</strong>`;
}