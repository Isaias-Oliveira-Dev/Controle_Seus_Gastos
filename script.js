let listaDeGastos = [];

function adicionarGasto() {
    const nomeInput = document.getElementById('nomeItem');
    const valorInput = document.getElementById('valorItem');

    const nome = nomeInput.value;
    const valor = parseFloat(valorInput.value);

    if (nome === "" || isNaN(valor)) {
        alert("Por favor, preencha o nome e o valor corretamente!");
        return;
    }

    // Adiciona ao array (nossa lista)
    const novoGasto = { nome, valor };
    listaDeGastos.push(novoGasto);

    atualizarInterface();

    // Limpa os campos
    nomeInput.value = "";
    valorInput.value = "";
    nomeInput.focus();
}

function atualizarInterface() {
    const corpoTabela = document.querySelector('#tabelaGastos tbody');
    corpoTabela.innerHTML = ""; // Limpa a tabela antes de redesenhar

    let total = 0;
    let maisCaro = { nome: "---", valor: 0 };

    listaDeGastos.forEach(item => {
        // Cria a linha na tabela
        const row = `<tr><td>${item.nome}</td><td>R$ ${item.valor.toFixed(2)}</td></tr>`;
        corpoTabela.innerHTML += row;

        // Soma o total
        total += item.valor;

        // Lógica do mais caro.
        if (item.valor > maisCaro.valor) {
            maisCaro = item;
        }
    });

    // Atualiza os textos na tela
    document.getElementById('totalGasto').innerText = total.toFixed(2);
    document.getElementById('itemMaisCaro').innerText = 
        maisCaro.valor > 0 ? `${maisCaro.nome} (R$ ${maisCaro.valor.toFixed(2)})` : "---";
}