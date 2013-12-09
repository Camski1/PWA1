//Cameron Kozinski
//12-06-13
//The Duel - Part III

(function(){
	console.log("FIGHT");
//Player info
	var plrs = {
		 plOne:{name:"Dumbo",health:100,damage:20},
		 plTwo:{name:"Colonel Hathi",health:100,damage:20}
		};
	
//player names/health on screen 
	var dumboNm = document.querySelector("#kabal p");
	console.log("!!!!!!",dumboNm);
	dumboNm.innerHTML = plrs.plOne.name +":"+ plrs.plOne.health;

	var colHathiNm = document.querySelector("#kratos p");
	console.log("!!!!!!",colHathiNm);
	colHathiNm.innerHTML = plrs.plTwo.name +":"+ plrs.plTwo.health;
//-----------------------------------------------------------

//Round counter/starting point
	var theBell = document.querySelector("#fight_btn h4");
	console.log("!!!!!!",theBell);
	var round = 0;
//Fight Btn var
	var fightBtn = document.querySelector("#fight_btn a");
	console.log(fightBtn);

	function fight(){
		//Formula for finding the amount of damage recieved for each player 
		var plOneMinDam = plrs.plOne.damage * .5;
		var plTwoMinDam = plrs.plTwo.damage * .5;
		var f1 = Math.floor(Math.random()*(plrs.plOne.damage-plOneMinDam)+plOneMinDam);
		var f2 = Math.floor(Math.random()*(plrs.plTwo.damage-plTwoMinDam)+plTwoMinDam);
		
		//Damage taken from each player and info output via console.log.
		plrs.plOne.health = plrs.plOne.health - f1;
		plrs.plTwo.health = plrs.plTwo.health - f2;
		console.log(plrs.plOne.name+" : "+plrs.plOne.health+ " " +plrs.plTwo.name+" : "+plrs.plTwo.health);
		dumboNm.innerHTML = plrs.plOne.name +":"+ plrs.plOne.health;
		colHathiNm.innerHTML = plrs.plTwo.name +":"+ plrs.plTwo.health;
		round = round + 1;
		theBell.innerHTML = "Round "+ round + " is OVER!";
		console.log(round);
		//Check for victor
		var result = winnerCheck();
		console.log(result);
		
	};
	//Winner check function
	function winnerCheck(){
		var result = "no winner";
		//if both players die text will display 
		if (plrs.plOne.health<1 && plrs.plTwo.health<1)
		{
			dumboNm.innerHTML="";
			colHathiNm.innerHTML="You Both Die";
			fightBtn.innerHTML = "Done!";
			fightBtn.onclick = function(e){
				console.log("Game Over");
			};
			result = colHathiNm;
		//if only dumbo's health drops to 0 col wins
		}else if(plrs.plOne.health<1){
			dumboNm.innerHTML="";
			colHathiNm.innerHTML=  plrs.plTwo.name + " WINS!!!";
			fightBtn.innerHTML = "Done!";
			fightBtn.onclick = function(e){
				console.log("Game Over");
			};
			result = plTwo;
		//if only col health drops to 0 dumbo wins
		}else if(plrs.plTwo.health<1){
			dumboNm.innerHTML = "";
			colHathiNm.innerHTML=plrs.plOne.name + " WINS!!!";
			fightBtn.innerHTML = "Done!";
			fightBtn.onclick = function(e){
				console.log("Game Over");
			};
			result = plOne;
		//if round reaches 10 game ends in a tie
		}else if(round === 10){
			dumboNm.innerHTML="";
			colHathiNm.innerHTML="Game Ends In A Tie";
			fightBtn.innerHTML = "Done!";
			fightBtn.onclick = function(e){
				console.log("Game Over");
			};
			result = colHathiNm;
		};
		return result;
	};
	fightBtn.onclick = function(e){
		fight();

		e.preventDefault();
		return false;
	};
	
	
})();













