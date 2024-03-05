const passwordbox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*" 

const allChars = uppercase + lowercase + number + symbol;

function createpass() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordbox.value = password;
}

function copypass(){
  passwordbox.select()
  navigator.clipboard.writeText("passwordbox.value")
  alert("Code Copied")
}