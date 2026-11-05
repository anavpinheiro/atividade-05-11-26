function somar(){
let n1 = Number(document.querySelector("#n1").value);
let n2 = Number(document.querySelector("#n2").value);
let p = document.querySelector("#resultado");
let botao = document.querySelector("button");
let soma = n1 + n2;

botao.addEventListener("click", ()=>{
    document.querySelector("#resultado").innerHTML = "Resultado: " + soma;
});
}
