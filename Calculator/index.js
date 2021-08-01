function display(val){
    document.getElementById("textval").value+=val;
}

function calc(){
    let x = document.getElementById("textval").value;
    let y = eval(x);
    document.getElementById("textval").value= y;
}



function clr()
{
 document.getElementById("textval").value = ""
}

function backspace(){
    let x = document.getElementById("textval").value;
    let y = x.substring(0, x.length - 1);
    document.getElementById("textval").value= y;

}