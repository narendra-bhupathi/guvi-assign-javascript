const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
  
	let a=userInput[0].split(' ');
  	let m1=userInput[1].split(' ');
  	let m2=userInput[2].split(' ');
   	var temp;
  	for(let i=0;i<=a[0]-1;i++)
    {
      for(let j=i+1;j<a[0];j++)
      if(m1[i]>m1[j])
      {
        temp=m1[i];
        m1[i]=m1[j];
        m1[j]=temp;
      }
    }
  
  
  	for(let i=0;i<=a[1]-1;i++)
    {
      for(let j=i+1;j<a[1];j++)
      if(m2[i]<m2[j])
      {
        temp=m2[i];
        m2[i]=m2[j];
        m2[j]=temp;
      }
    }
  
  
 console.log(m1);
  console.log(m2);
  
  
});