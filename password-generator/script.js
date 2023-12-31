const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

const getLowercase = () => {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
};

const getUppercase = () => {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
};

const getNumber = () => {
  return numbers[Math.floor(Math.random() * numbers.length)];
};

const getSymbol = () => {
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = () => {
  const len = lenEl.value;

  let password = "";

  if (lowerEl.checked) {
    password += getLowercase();
  }
  if (upperEl.checked) {
    password += getUppercase();
  }
  if (numberEl.checked) {
    password += getNumber();
  }
  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
};

const generateX = () => {
  const xs = [];

  if (lowerEl.checked) {
    xs.push(getLowercase());
  }
  if (upperEl.checked) {
    xs.push(getUppercase());
  }
  if (numberEl.checked) {
    xs.push(getNumber());
  }
  if (symbolEl.checked) {
    xs.push(getSymbol());
  }
  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
};

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  navigator.clipboard.writeText(password);
  textarea.remove();
  alert('Password copy to clipboard');
});
