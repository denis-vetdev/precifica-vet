document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll('.moneyInput');

    if (inputs.length > 0) {  // Verifica se existem inputs na página
        inputs.forEach(input => {
            new Cleave(input, {
                numeral: true,
                numeralDecimalMark: ',',
                delimiter: '.',
                prefix: 'R$ ',
                numeralThousandsGroupStyle: 'milion'
            });
        });
    } else {
        console.error("Nenhum input com a classe '.moneyInput' encontrado!");
    }
});

document.getElementById('custoServico').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, '');
});
document.getElementById('custosVariaveis').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, ''); 
});
document.getElementById('custosFixos').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, ''); 
});
document.getElementById('margemLucro').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, '');
});

document.getElementById('custoCompra').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, '');
});
document.getElementById('custosVariaveisProdutos').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, ''); 
});
document.getElementById('custosFixosProdutos').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, ''); 
});
document.getElementById('margemLucroProdutos').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9,.]/g, '');
});


function precificarServico() {
    let custoServico = parseFloat(document.getElementById('custoServico').value.replace(/[^\d.-]/g, '')) || 0;
    let custosVariaveis = parseFloat(document.getElementById('custosVariaveis').value) || 0;
    let custosFixos = parseFloat(document.getElementById('custosFixos').value) || 0;
    let margemLucroServico = parseFloat(document.getElementById('margemLucro').value) || 0;

    let somaPercentuais = custosVariaveis + custosFixos + margemLucroServico; 

    if (somaPercentuais >= 100) {
        alert("A soma de custos variáveis, fixos e margem de lucro não pode ser 100% ou maior!");
        return;
    }

    let markup = 100/ (100-(somaPercentuais));
    let mUp = markup.toFixed(2)
    
    let precoServico = custoServico * mUp;

    let precoServicoFormatado = precoServico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('precoServico').value = precoServicoFormatado;
}

function precificarProduto() {
    let custoCompra = parseFloat(document.getElementById('custoCompra').value.replace(/[^\d.-]/g, '')) || 0;
    let custosVariaveisProdutos = parseFloat(document.getElementById('custosVariaveisProdutos').value) || 0;
    let custosFixosProdutos = parseFloat(document.getElementById('custosFixosProdutos').value) || 0;
    let margemLucroProdutos = parseFloat(document.getElementById('margemLucroProdutos').value) || 0;
    
    let somaPercentuais = custosVariaveisProdutos + custosFixosProdutos + margemLucroProdutos; 
    
    if (somaPercentuais >= 100) {
        alert("A soma de custos variáveis, fixos e margem de lucro não pode ser 100% ou maior!");
        return;
    }
    
    let markupProdutos = 100/ (100-(somaPercentuais));
    let mUpProdutos = markupProdutos.toFixed(2)
        
    let precoProduto = custoCompra * mUpProdutos;

    let precoProdutoFormatado = precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    document.getElementById('precoProduto').value = precoProdutoFormatado;
}


