var textInput = document.querySelector("#input-text");
var output = document.querySelector("#output");

function encryptText() {
    var text = textInput.value;
    
    var resultEncrypt = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-text">' + resultEncrypt + '</textarea>' + '<button class="btn-copy-text" id="copy" onclick="copyText()">Copiar</button>';
}

function decryptText() {
    var text = textInput.value;

    var resultDecrypt = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="output-text">' + resultDecrypt + '</textarea>' + '<button class="btn-copy-text" id="copy" onclick="copyText()">Copiar</button>';
}

function copyText() {
    var textCopy = document.getElementById('output-text');
    textCopy.select();
    document.execCommand('copy');
}