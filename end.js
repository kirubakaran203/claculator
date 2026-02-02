const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
function append(element){
    display.value += element;
}
function cl(){
    display.value = '';
}
function del(){
    display.value = display.value.slice(0, -1);
}
function answer()
{try{
    display.value = eval(display.value);
}
catch(error)
{
    display.value = "Error";
}

    
}
