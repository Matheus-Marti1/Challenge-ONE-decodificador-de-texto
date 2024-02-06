var textInput = document.querySelector("#input-text");
var output = document.querySelector("#output");

function encryptText() {
    var text = textInput.value;
    
    var resultEncrypt = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output-section').innerHTML = '<div class="container-copy-btn"><button class="btn-copy-text" id="copy" onclick="copyText()">Copiar</button></div>' + '<div class="container-result"><p id="output-text">' + resultEncrypt + '</p>';
}

function decryptText() {
    var text = textInput.value;

    var resultDecrypt = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output-section').innerHTML = '<div class="container-copy-btn"><button class="btn-copy-text" id="copy" onclick="copyText()">Copiar</button></div>' + '<div class="container-result"><p id="output-text">' + resultDecrypt + '</p>';
}

function copyText() {
    var range = document.createRange();
    range.selectNode(document.getElementById("output-text"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado.");
}