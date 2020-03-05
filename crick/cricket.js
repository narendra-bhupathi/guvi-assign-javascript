
class team{

constructor(){

this.score=0;
this.overs=6;
this.wick=0;
this.ball=36;
this.i=0;
this.play=[];
this.s=36;

}

bat() {

	
	
	var hit=Math.floor(Math.random() * 7);
	
	
	let sid=this.s-this.ball;
	
	
	if(this.ball>0 && this.wick<11)
	{
		if(hit>0 && this.s-this.ball<=6 && sid<6 )
		{
			this.score+=hit;
			this.ball-=1;
		}
		else
		{
			console.log('wicket');
			
			this.wick+=1;
			this.ball-=1;
			this.s=this.ball;
			
			this.play[this.i++]=this.score;
			console.log(this.play);
		}
		
		document.getElementById("score").innerHTML=this.score;
		document.getElementById("ballscore").innerHTML="-"+this.play.length;
	}
	
	else
	{
		alert("Team  Done");
		document.getElementById("t2").disabled = false;

		
	}
	
	
	
	console.log("team1 score is"+this.score+" ballcount="+this.ball+"ball count"+sid);
	

	



}

}


t1=new team();
t2=new team();






function choose(id)
{
	console.log(id);
	
	if(id=='t1')
	{
		console.log('if');
		t1.bat();
	}
	else
	{
		console.log('else');
		t2.bat();
	}
	
}


function declare()
{
	
	var te1=t1.score
	var te2=t2.score
	var a1=t1.play
	var a2=t2.play
	
	    localStorage.setItem("play1", a1);

		localStorage.setItem("play2", a2);
		
		localStorage.setItem("t1score", te1);

		localStorage.setItem("t2score", te2);
		
		window.location.assign("declare.html");
		
		
	
	
}