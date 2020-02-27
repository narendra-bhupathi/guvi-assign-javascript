var div1 = document.createElement("div");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.background = "red";
div1.style.color = "white";
div1.innerHTML = "I am div1";
div1.id="div1";



var bt1 = document.createElement("button");

bt1.style.background = "red";
bt1.style.color = "white";
bt1.innerHTML = "button";
bt1.id="bt1";
bt1.onclick=change;





var div2 = document.createElement("div");
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.background = "orange";
div2.style.color = "white";
div2.id="div2"
div2.innerHTML = "I am div2";

document.getElementById("body").appendChild(div1);
document.getElementById("body").appendChild(div2);
document.getElementById("body").appendChild(bt1);

function change()
{
var c=document.getElementById('div1').innerHTML;
document.getElementById('div1').innerHTML=document.getElementById('div2').innerHTML;
document.getElementById('div2').innerHTML=c;
}

