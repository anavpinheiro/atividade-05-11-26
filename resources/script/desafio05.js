function mudarCor() {
let cor = document.querySelector("#cores").value;
let paragrafo = document.querySelector("#texto");

  if (cor == "Purple") {
    paragrafo.style.color = "Purple";
} 
  else if (cor == "Pink") {
    paragrafo.style.color = "Pink";
} 
  else if (cor == "blue") {
    paragrafo.style.color = "blue";
}
};