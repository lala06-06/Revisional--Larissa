// 1. Seleciona o botão de salvar e os campos de entrada (ajuste os IDs conforme seu HTML)
const botaoSalvar = document.getElementById('nome'); // ID do seu botão
const campoTexto = document.getElementById('email');  // ID do input/textarea com os dados
const botaoSalvar = document.getElementById('BotoaSalvar');

// 2. Adiciona o evento de clique ao botão
botaoSalvar.addEventListener('click', () => {
    // Captura o valor digitado pelo usuário
    const dados = campoTexto.value;

    // Cria um Blob (Binary Large Object) com o conteúdo em texto plano
    const blob = new Blob([dados], { type: 'text/plain;charset=utf-8' });

    // Cria um elemento de link virtual para disparar o download
    const link = document.createElement('a');
    
    // Define o arquivo (Blob) como destino do link
    link.href = URL.createObjectURL(blob);
    
    // Define o nome padrão do arquivo que será baixado
    link.download = 'dados_salvos.txt';

    // Simula o clique no link para iniciar o download e o remove em seguida
    link.click();
    URL.revokeObjectURL(link.href);
});
