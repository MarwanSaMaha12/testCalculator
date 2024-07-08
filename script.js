function add() {
    let value = 0, length = 0;
    value = form.text.value;
    length = value.charAt(value.length-1);
    if (length=='+' || length=='-'||length=='*'||length=='/') {
        form.text.value=value.substring(0, value.length-1);
        form.text.value+="+";
    }else{
        form.text.value+="+";
    }
}
function sub() {
    let value = 0, length = 0;
    value = form.text.value;
    length = value.charAt(value.length-1);
    if (length=='+' || length=='-'||length=='*'||length=='/') {
        form.text.value=value.substring(0, value.length-1);
        form.text.value+="-";
    }else{
        form.text.value+="-";
    }
}
function divide() {
    let value = 0, length = 0;
    value = form.text.value;
    length = value.charAt(value.length-1);
    if (length=='+' || length=='-'||length=='*'||length=='/') {
        form.text.value=value.substring(0, value.length-1);
        form.text.value+="/";
    }else{
        form.text.value+="/";
    }
}
function multiply() {
    let value = 0, length = 0;
    value = form.text.value;
    length = value.charAt(value.length-1);
    if (length=='+' || length=='-'||length=='*'||length=='/') {
        form.text.value=value.substring(0, value.length-1);
        form.text.value+="*";
    }else{
        form.text.value+="*";
    }
}