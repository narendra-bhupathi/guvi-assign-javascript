var div1 = document.createElement("div");
div1.style.width = "200px";
div1.style.height = "200px";
div1.style.background = "red";
div1.style.color = "white";
div1.innerHTML = "Hello";
div1.id="div1";
div1.onmouseover=change;   

var div2 = document.createElement("div");
div2.style.width = "200px";
div2.style.height = "200px";
div2.style.background = "orange";
div2.style.color = "white";
div2.id="div2"
div2.innerHTML = "Hello";
div2.onmouseover=change2;
document.getElementById("body").appendChild(div1);
document.getElementById("body").appendChild(div2);



function change()
{
document.getElementById('div2').style.background='red';
}

function change2()
{
document.getElementById('div1').style.background='orange';
}