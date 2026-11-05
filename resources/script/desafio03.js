function comparar() {
    let n1 = Number(document.querySelector("#numero1").value);
    let n2 = Number(document.querySelector("#numero2").value);

    if (document.querySelector("#numero1").value === "" ||
        document.querySelector("#numero2").value === "") {
    } 
    else if (n1 > n2) {
        alert("O maior número é: " + n1);
    } 
    else if (n2 > n1) {
        alert("O maior número é: " + n2);
    } 
};