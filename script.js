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

function compartilharQRCode() {
  // Obtém a imagem do QR Code
  var qrcodeImg = document.querySelector('#qrcode img');
  
  // Espera a imagem ser carregada
  qrcodeImg.onload = function() {
    // Obtém o URL da imagem do QR Code
    var qrcodeUrl = qrcodeImg.src;

    // Cria o link para compartilhar no WhatsApp
    var whatsappUrl = 'whatsapp://send?text=' + encodeURIComponent(qrcodeUrl);

    // Abre o link no aplicativo do WhatsApp
    window.location.href = whatsappUrl;
  };
  
  // Se a imagem já foi carregada, executa a função onload imediatamente
  if (qrcodeImg.complete) {
    qrcodeImg.onload();
  }
}



