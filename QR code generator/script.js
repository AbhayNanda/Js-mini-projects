let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR() {
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
}
