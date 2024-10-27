
function exibirTela() {
    const tela = document.getElementById("exibir-pato");
    tela.style.display = "block";
}

function exibirPato() {
    const pele = document.querySelector(select[name="pele_esverdeada"]).value;
    const bico = document.querySelector(select[name="bico_pequeno"]).value;
    const sotaque = document.querySelector(select[name="sotaque_esquisito"]).value;
    const local = document.querySelector(select[name="local"]).value;
    const quantidade = document.querySelector(select[name="quantidade"]).value;

    exibirTela();
    document.getElementById("exibir-pato").innerHTML = <p>"Método de Captura: capturar pato"</p>;
}