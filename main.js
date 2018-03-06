var click_me = document.getElementById('click_me');
click_me.addEventListener('click', fnClickMe);

function fnClickMe() {
    alert('Você clicou em mim');
}

function validateNumber() {
    var number = document.getElementById("number_val").value;

    if (isNaN(number) || (number >= 1 && number <= 10)) {
        alert('A entrada não é válida!');
    } else {
        alert('A emtrada é válida!');
    }

}

function over() {
    console.log('Over me');
}
