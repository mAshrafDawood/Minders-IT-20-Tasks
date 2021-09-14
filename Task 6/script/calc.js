const ANS = document.getElementById('answer')
const OPERATORS = ['/', '*', '-', '+', 'l', 'p', 's'];
var num1 = null;
var num2 = null;
var operation = null;
var gotNumber = false;
var oneNumberOperation = false;

function del(){
    var str = ANS.innerHTML.trim();
    if (str == '0') return;
    str = str.slice(0, -1);
    if (str.length == 0){
        ANS.innerHTML = '0';
        operation = null;
    }
    else{
        ANS.innerHTML = str;
    }
}

function clear_val(){
    ANS.innerText = '0';
    num1 = null;
    num2 = null;
    operation = null;
    gotNumber = false;
    oneNumberOperation = false;
}


function setOperation(op){
    if (operation){
        num1 = calculate();
        num2 = null;
    }
    str = ANS.innerHTML.trim();
    if (str == '0') ANS.innerHTML = '';
    if (OPERATORS.includes(str[str.length - 1])) ANS.innerHTML = str.slice(0, -2);
    if (op != 's' && op != 'l' && op != 'p'){
        ANS.innerHTML += (" " + op);
    }
    else{
        if (op == 's') ANS.innerHTML += (" Sqrt -> ");
        else if (op == 'l') ANS.innerHTML += (" Log10 -> ");
        else if (op == 'p') ANS.innerHTML += ' ^';
    }

    if (op == 's' || op == 'l' ) oneNumberOperation = true;
    operation = op;
    gotNumber = true;
    ANS.innerHTML += " ";
}

function insert(num){
    let lastChar = ANS.innerHTML.trim()[ANS.innerHTML.trim().length - 1];
    if (ANS.innerHTML.trim().length == 1 && ANS.innerHTML.trim() == '0') ANS.innerHTML = '';
    if (gotNumber){
        if (num2) num2 += num;
        else num2 = num;
    }
    else{
        if (num1) num1 += num;
        else num1 = num;
    }
    ANS.innerHTML += num;
}

function calculate(){
    let ans = null;
    if (num1 && num2){
        num1 = Number.parseInt(num1);
        num2 = Number.parseInt(num2);
        if (operation == '/') ans = num1 / num2;
        else if (operation == '*') ans = num1 * num2;
        else if (operation == '-') ans = num1 - num2;
        else if (operation == '+') ans = num1 + num2;
        else if (operation == 'p') ans = Math.pow(num1, num2);
        ANS.innerHTML = ans;
        return ans;
    }
    if (oneNumberOperation){
        if (operation == 'l') ans = Math.log10(num2);
        else if (operation == 's') ans = Math.sqrt(num2);
        ANS.innerHTML = ans;

        return ans;
    }
}
