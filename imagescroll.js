

let div1=document.createElement('div');

div1.style.width="50%";
div1.style.height="50%";
div1.style.marginLeft = "auto";
div1.style.marginRight = "auto";
div1.style.background="red";
//div1.innerHTML="hello";
div1.id="div1";
//div1.onmouseover="change";

var x=["1.jfif","2.jfif","3.jfif"];

let img1=document.createElement('img');
img1.src="1.jfif";
img1.style.width="100%";
img1.onmouseover=function(){change()};
img1.id="img1";


document.getElementById("body").appendChild(div1);
document.getElementById("div1").appendChild(img1);




var n=0

function change() {
n+=+1;
n%=x.length;	
document.getElementById("img1").src =x[n];
}

