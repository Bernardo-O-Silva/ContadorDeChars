var limite;
var valorSim;
var aviso;
var utilizavel;
var inutilizavel;

function contaChars(){

    var tamString = document.getElementById("caixa_de_texto").value.length;
    var valorCaixa = document.getElementById("caixaSecreta").value;
    var contador = document.getElementById("chars_digitados");
    var textoAdd;
    var cor = "gray";

    valorSim = document.getElementById("sim");
    aviso = document.getElementById("aviso");
    utilizavel = document.getElementById("utilizavel");
    inutilizavel = document.getElementById("nao_utilizavel");

    if(valorSim.checked){

        if (valorCaixa >= 0){

            limite = valorCaixa

        }
        else {

            limite = "";

        }

        if(limite != ""){

            aviso.style.display = "none";

        } 
        else {

            aviso.style.display = "block";
            utilizavel.style.display = "none";
            inutilizavel.style.display = "none";
            

        }
        
    }
    else {

        limite = "";

    }

    if (limite == ""){

        if(valorCaixa < 0){

            aviso.innerHTML = "O limite não pode ser menor que zero, usando modo sem limite."

        }
        else {

            aviso.innerHTML = "Não há limite digitado, usando modo sem limite."

        }

        if(tamString == 0){

            textoAdd = "Não há caracteres digitados.";
    
        }
        else if(tamString == 1) {
    
            textoAdd = "Há "+ tamString +" caractere digitado.";
    
        }
        else {

            textoAdd = "Há "+ tamString +" caracteres digitados.";

        }
    
    }
    else {

        if(limite - tamString > 0 && limite - tamString != 1){

            textoAdd = "Você ainda pode digitar "+ (limite - tamString) +" caracteres.";
            utilizavel.style.display = "none";
            inutilizavel.style.display = "none";

        }
        else if(limite - tamString == 1){

            textoAdd = "Você ainda pode digitar "+ (limite - tamString) +" caractere.";
            utilizavel.style.display = "none";
            inutilizavel.style.display = "none";

        }
        else if(limite - tamString == 0){

            textoAdd = "Você não pode mais digitar caracteres.";
            cor = "red"
            utilizavel.style.display = "none";
            inutilizavel.style.display = "none";

        }
        else {

            textoAdd = "Você passou "+ (tamString - limite) +" caracteres do limite permitido.";
            cor = "red";
            let textoAntes = document.getElementById("caixa_de_texto").value.split("").reverse().slice(tamString - limite).reverse().join("");
            let textoDepois = document.getElementById("caixa_de_texto").value.slice(limite);
            
            utilizavel.innerHTML = "Parte Utilizável: "+ textoAntes;
            inutilizavel.innerHTML = "Parte Não Utilizável: "+ textoDepois;

            utilizavel.style.display = "block";
            inutilizavel.style.display = "block";

        }

    }

    contador.innerHTML = textoAdd;
    contador.style.color = cor;
    cor = "gray";

}

function temLimite(){

    var valorNao = document.getElementById("nao");
    var caixa = document.getElementById("caixaSecreta");
    
    valorSim = document.getElementById("sim");
    aviso = document.getElementById("aviso");
    utilizavel = document.getElementById("utilizavel");
    inutilizavel = document.getElementById("nao_utilizavel");

    if (valorSim.checked){

        caixa.style.display = "inline";
        
        if(caixa.value == ""){

            aviso.style.display = "block";

        }
        else {
        
            
            contaChars();

        }

    }
    else if (valorNao.checked){

        caixa.style.display = "none";
        aviso.style.display = "none";
        utilizavel.style.display = "none";
        inutilizavel.style.display = "none";

        contaChars();

    }

}