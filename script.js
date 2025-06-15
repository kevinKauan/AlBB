  function asideItem() {
    const altera = document.getElementById("asd-pai");
    if (altera.style.display === "none") {
      altera.style.display = "block";
    } else {
      altera.style.display = "none";
    }
  }

function calculo() {
  const mani = document.getElementById("ID DO INPUT");
  const valor = parseFloat(mani.value); // Converte o valor para número
  const resultado = valor * 3;
  mani.value = resultado; // Atualiza o input com o novo valor
  return resultado;
}
