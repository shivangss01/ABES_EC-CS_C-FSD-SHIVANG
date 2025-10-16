const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const output=document.getElementById('output');
console.log(num1,num2);
function add(){
    if(num1.value==="" || num2.value===""){
          error.innerText="Please enter both the values";
          error.style.color="red";
          output.innerText="";
    }
    else{
        error.innerText="";
        const op=parseInt(num1.value)+parseInt(num2.value);
        output.innerText=op;
    }
}
function sub(){
    console.log(num1.value);
    console.log(num2.value);
    const op=parseInt(num1.value)-parseInt(num2.value);
    output.innerText=op;
}
function mul(){
    console.log(num1.value);
    console.log(num2.value);
    const op=parseInt(num1.value)*parseInt(num2.value);
    output.innerText=op;
}
function div(){
    console.log(num1.value);
    console.log(num2.value);
    const op=parseInt(num1.value)/parseInt(num2.value);
    output.innerText=op;
}