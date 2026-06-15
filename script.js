
// Função simples para simular economia de água na agricultura
function calcularEconomia() {
  const aguaAtual = document.getElementById("aguaAtual").value;
  const resultado = document.getElementById("resultado");

  if (!aguaAtual || aguaAtual <= 0) {
    resultado.textContent = "Digite um valor válido de litros.";
    return;
  }

  // Simulação: tecnologia pode reduzir até 30% do consumo de água
  const economia = aguaAtual * 0.30;
  const novoConsumo = aguaAtual - economia;

  resultado.textContent =
    `Com tecnologia sustentável, você pode economizar ${economia.toFixed(0)}L por dia, ` +
    `reduzindo o consumo para aproximadamente ${novoConsumo.toFixed(0)}L.`;
}
