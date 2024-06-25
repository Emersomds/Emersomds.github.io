function criptografar() {
    //Obtem os valore digitados no inputText
    const inputText = document.getElementById('inputText').value;
    // Substitui as sequências de caracteres para ser criptografados
    let outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(outputText);
}

function descriptografar() {
    // Obtém o texto de entrada do elemento textarea com id 'inputText'
    const inputText = document.getElementById('inputText').value;
    // Substitui as sequências codificadas pelos respectivos caracteres
    let outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Oculta os elementos de resultado anterior    
    ocultarResultado();
    // Mostra o novo texto descriptografado
    mostrarResultado(outputText);
}

function mostrarResultado(texto) {
    // Obtém referências aos elementos da seção de saída
    const placeholderImage = document.getElementById('placeholderImage');
    const outputMessage = document.getElementById('outputMessage');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

    // Oculta a imagem de placeholder e a mensagem inicial
    placeholderImage.style.display = 'none';
    outputMessage.style.display = 'none';
    // Exibe o textarea de saída e define seu valor para o texto descriptografado
    outputText.style.display = 'block';
    outputText.value = texto;
     // Exibe o botão de cópia
    copyButton.style.display = 'block';
}

function ocultarResultado() {
     // Obtém referências aos elementos da seção de saída
    const placeholderImage = document.getElementById('placeholderImage');
    const outputMessage = document.getElementById('outputMessage');
    const outputText = document.getElementById('outputText');
    const copyButton = document.getElementById('copyButton');

     // Exibe a imagem de placeholder e a mensagem inicial
    placeholderImage.style.display = 'block';
    outputMessage.style.display = 'block';
    // Oculta o textarea de saída e o botão de cópia
    outputText.style.display = 'none';
    copyButton.style.display = 'none';
}

function copiarTexto() {
    // Obtém o elemento textarea de saída
    const outputText = document.getElementById('outputText');
    // Seleciona o texto no textarea
    outputText.select();
    // Copia o texto selecionado para a área de transferência
    document.execCommand('copy');
    // Exibe um alerta informando que o texto foi copiado
    alert('Texto copiado para a área de transferência!');
}
