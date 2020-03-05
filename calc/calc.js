
var exp='';


function append(add){

exp=exp+add;

console.log(exp);

document.getElementById('display').value=exp;




}

function solve()
{

let a=3;
let b=4;
let po;

let l=exp.length;


if(exp.includes('+'))
{

po=exp.indexOf('+');

a=parseInt(exp.slice(0,po))

b=parseInt(exp.slice(po+1,l))
document.getElementById('display').value=a+b;	
}


else if(exp.includes('-'))
{

po=exp.indexOf('-');

a=parseInt(exp.slice(0,po))

b=parseInt(exp.slice(po+1,l))
document.getElementById('display').value=a-b;	
}

else if(exp.includes('*'))
{

po=exp.indexOf('*');

a=parseInt(exp.slice(0,po))

b=parseInt(exp.slice(po+1,l))
document.getElementById('display').value=a*b;	
}

else if(exp.includes('/'))
{

po=exp.indexOf('/');

a=parseInt(exp.slice(0,po))

b=parseInt(exp.slice(po+1,l))
document.getElementById('display').value=a/b;	
}

else
{
document.getElementById('display').value="Invalid Operation";
}

}

function cls()
{

exp='';

document.getElementById('display').value=exp;

}
