// Cria eventos diretamente pelo javaScript, sem a tag no html
// Aqui(getElementById) capituramos o valor pelo id
var click_me = document.getElementById('click_me');
// Aqui criamos o evento e informaremos que será criado ao clicar, apos o nome da funcao
click_me.addEventListener('click', fnClickMe);

function fnClickMe() {
    alert('Você clicou em mim');
}


// ---------------------------------------------------------------


//Neste método iremos colocar um numero para gerar a quantidade de novos inputs que desejarmos

// Aqui(getElementsByClassName) capituramos o valor pela classe
// Esse método nos retorna um array e o índice 0 corresponde ao elemento que queremos capturar
// Quando tivermos "ELEMENTS" no nome do método, ele retornará um array
var input = document.getElementsByClassName('number_val_input');
var btn_generate = document.getElementById('generate_btn');
btn_generate.addEventListener('click', generate);

function generate() {
    var value = input[0].value;
    for (var i = 0; i < parseInt(value); i++) {
// Aqui criaremos um novo elemento
        var inpt = document.createElement('input');
        inpt.id = "btn_" + i;
// Aqui captaremos por um elemento, no caso pelo body
// Esse método nos retorna um array e o índice 0 corresponde ao elemento que queremos capturar
        var body = document.getElementsByTagName('body');
// Dentro do body estamos pegando o valor do inpt
        body[0].appendChild(inpt);
    }
}


// ---------------------------------------------------------------


// Aqui veremos como popular um select

// Aqui capturamos o body
var body1 = document.getElementsByTagName('body');
var select = document.createElement('select');
// Aqui nos capturamos o valor do select no body
body1[0].appendChild(select);

for(var i = 0; i < 10; i++){
var option = document.createElement('option');
option.id = '#id_' + i;
option.value = i;
option.innerHTML = i;

select.appendChild(option);

}

// ---------------------------------------------------------------



// programa o evento criado na tag do html
function validateNumber() {
    var number = document.getElementById("number_val").value;

    if (isNaN(number) || (number >= 1 && number <= 10)) {
        alert('A entrada não é válida!');
    } else {
        alert('A emtrada é válida!');
    }

}


// ---------------------------------------------------------------


//Funcao que seta uma nova string no html. Neste exemplo somente será visto
// a frase quando inspecionarmos o html apos ter passado o mouse em cima
function over(obj) {
    obj.innerHTML = "Over me JS";
}
