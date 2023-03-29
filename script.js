function gerarQRCode() {
  var url = document.getElementById("url").value;
  var preloader = document.getElementById("preloader");
  var qrcodeContainer = document.getElementById("qrcode");
  var gerarBtn = document.getElementById("gerarBtn");

  // Mudar o texto do botão para "Gerando..."
  

  var qrcode = new QRCode(qrcodeContainer, {
    text: url,
    width: 180,
    height: 180,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  setTimeout(function() {
    preloader.style.display = "none";
    qrcodeContainer.style.display = "block";
    // Mudar o texto do botão de volta para "Gerar QR Code"
    gerarBtn.textContent = "Gerar QR Code";
    // Esconder o elemento do QR Code após 3 segundos
    setTimeout(function() {
      qrcodeContainer.style.display = "none";
    }, 3000);
  }, 2000);

  preloader.style.display = "flex";
  qrcodeContainer.style.display = "none";
}


// Exibe o elemento
gerandoEl.removeAttribute("hidden");

// Chama a função que gera o QR code
gerarQRCode();





