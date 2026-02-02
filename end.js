const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
function append(element){
    display.value += element;
}
function cl(){
    display.value = '';
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