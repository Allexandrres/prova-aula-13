let saldo = 1000;

document.getElementById('realizar').addEventListener('click', function() {
    let operacao = document.getElementById('operacao').value;
    let valor = parseFloat(document.getElementById('valor').value);

    if (isNaN(valor) || valor <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira um valor válido.';
    } else {
        if (operacao === 'consultar') {
            document.getElementById('resultado').textContent = `Seu saldo atual é R$ ${saldo.toFixed(2)}`;
        } else if (operacao === 'sacar') {
            if (valor > saldo) {
                document.getElementById('resultado').textContent = 'Saldo insuficiente para saque.';
            } else {
                saldo -= valor;
                document.getElementById('resultado').textContent = `Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${saldo.toFixed(2)}`;
            }
        } else if (operacao === 'depositar') {
            saldo += valor;
            document.getElementById('resultado').textContent = `Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${saldo.toFixed(2)}`;
        }
    }
});

