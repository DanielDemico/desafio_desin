let xenofago = new Boolean(false);

function exibirTela() {
    const tela = document.getElementById("exibir-pato");
    tela.style.display = "block";
}

function capturaPato(pele, bico, sotaque, local, quantidade, movimento) {
    let captura;

    if (pele === '1' && bico === '1' && sotaque === '1' && (movimento === 'Observando' || movimento === 'Tecnologia')) {
        xenofago = true;
        if (quantidade === 'Sozinho') {
            if (local === 'Lago' || local === 'Mar') {
                captura = 'Usar a Rede de Titânio para capturar o pato.'; 
            }
            else if (local === 'Floresta' || local === 'Parque') { 
                captura = 'Usar a Gaiola de Aço com iscas para capturar o pato.';
            }
            else {
                captura = 'Usar o Drone de Captura para capturar o pato.';
            }
        }

        else if (quantidade === 'Em dupla') {
            if (local === 'Lago' || local === 'Mar') {
                captura = 'Usar a Rede de Titânio em coordenação para cercar os patos.'; 
            }
            else if (local === 'Floresta' || local === 'Parque') { 
                captura = 'Montar uma gaiola de aço X-Large com iscas para capturar os patos.';
            }
            else {
                captura = 'Usar dois Drones de Captura para flanquear e capturar os patos.';
            }
        }

        else if (quantidade === 'Em bando pequeno') {
            if (local === 'Lago' || local === 'Mar') {
                captura = 'Usar uma grande Rede de Titânio para capturar o bando pequeno de uma vez.'; 
            }
            else if (local === 'Floresta' || local === 'Parque') { 
                captura = 'Montar várias gaiolas com iscas para capturar o bando pequeno.';
            }
            else {
                captura = 'Usar drones para atrair e capturar o bando pequeno.';
            }
        }

        else {
            if (local === 'Lago' || local === 'Mar') {
                captura = 'Usar uma grande Rede de Titânio para cercar o bando grande e capturá-lo.'; 
            }
            else if (local === 'Floresta' || local === 'Parque') { 
                captura = 'Montar armadilhas de gaiola interligadas para capturar o bando grande.';
            }
            else {
                captura = 'Usar uma frota de Drones de Captura para dispersar e capturar o bando grande.';
            }
        }
    } 

    else {
        xenofago = false;
    }

    return captura
}

function exibirPato() {
    const pele = document.querySelector(select[name="pele_esverdeada"]).value;
    const bico = document.querySelector(select[name="bico_pequeno"]).value;
    const sotaque = document.querySelector(select[name="sotaque_esquisito"]).value;
    const local = document.querySelector(select[name="local"]).value;
    const quantidade = document.querySelector(select[name="quantidade"]).value;
    const movimento = document.querySelector(select[name="movimento"]).value;

    const captura = capturaPato(pele, bico, sotaque, local, quantidade, movimento)

    exibirTela();
    document.getElementById("exibir-pato").innerHTML = captura;
}