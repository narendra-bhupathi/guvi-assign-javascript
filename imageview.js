

var div1 = document.createElement("div");
div1.style.width = "50%";
div1.style.height = "100%";
div1.style.float="left";
div1.id="div1";


var div2 = document.createElement("div");
div2.style.width = "50%";
div2.style.height = "50%";
div2.style.background="white"
div2.style.float="left";
div2.id="div2";



document.getElementById("body").appendChild(div1);
document.getElementById("body").appendChild(div2);



var im=document.createElement("img")
im.src="1.jfif";
im.style.width="100%";


im.id="im"
document.getElementById("div1").appendChild(im);

var img1=document.createElement("img")
img1.src="1.jfif";
img1.style.height="33%";
img1.id="img1"
img1.onmouseover=im1;

document.getElementById("div2").appendChild(img1);

var img2=document.createElement("img")
img2.src="2.jfif";
img2.style.height="33%";
img2.id="img2"
img2.onmouseover=im2;

document.getElementById("div2").appendChild(img2);

var img3=document.createElement("img")
img3.src="3.jfif";
img3.style.height="33%";
img3.id="img3"
img3.onmouseover=im3;

document.getElementById("div2").appendChild(img3);


function im1(){
	
	
	document.getElementById('im').src="1.jfif";
	
}

function im2(){
	
	document.getElementById('im').src="2.jfif";
	
	
}
function im3(){
	
	document.getElementById('im').src="3.jfif";
	
	
}
