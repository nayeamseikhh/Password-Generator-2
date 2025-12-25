let viewPassword = document.querySelector(".viewPassword");
let generatePassword = document.querySelector(".generatePassword");
let copyPassword = document.querySelector(".copyPassword");

generatePassword.addEventListener("click", function () {
  let passwordLength = 18;
  viewPassword.value = PasswordGenerator(passwordLength);
  copyPassword.innerHTML = "Copy";
});

copyPassword.addEventListener("click", clickPassword);

function PasswordGenerator(passwordLength) {
  let Password = "";
  let Character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[]{};:<>?";

  for (let i = 0; i < passwordLength; i++) {
    Password += Character[Math.floor(Math.random() * Character.length)];
  }
  return Password;
}

function clickPassword() {
  viewPassword.select();
  copyPassword.innerHTML = "📋";
  document.execCommand("copy");
}

console.log(copyPassword);
