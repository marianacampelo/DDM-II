function calc(){
    var peso = parseInt(document.getElementById("peso").value);
    var Altura = parseInt(document.getElementById("altura").value); 
    var imc= peso/(Altura * Altura);
    var result = imc*10000;

    if (result <= 18.5) {
        alert("Seu IMC é " + result + " Você está abaixo do peso!");
    } else if (result > 18.5 && result <= 24.9) {
        alert("Seu IMC é " + result  + " Você está no peso ideal!");
    } else if (result > 25 && result <= 29.9) {
        alert("Seu IMC é " + result + " Você está com Sobrepeso!");
    } else if (result > 30){
        alert("Seu IMC é " + result + " Você está com Obesidade!");
    }
}


