function verificar() {
    let numero = Number(document.querySelector("#numero").value);
    let resultado = document.querySelector("#resultado");

    if (document.querySelector("#numero").value == "") {
    resultado.innerText = "Digite um número!";
    }
    else if (numero % 2 == 0) {
    resultado.innerText = "O número é PAR!";
    }
    else {
    resultado.innerText = "O número é ÍMPAR!";
    }
}