//Cameron Kozinski
//12-06-13
//The Duel - Part III

(function(){
	console.log("FIGHT");
//Player info
	var plOne = {name:"Dumbo",health:100,damage:20};
	var plTwo = {name:"Colonel Hathi",health:100,damage:20};
	
//player names/health on screen 
	var dumboNm = document.querySelector("#kabal p");
	console.log("!!!!!!",dumboNm);
	dumboNm.innerHTML = plOne.name +":"+ plOne.health;

	var colHathiNm = document.querySelector("#kratos p");
	console.log("!!!!!!",colHathiNm);
	colHathiNm.innerHTML = plTwo.name +":"+ plTwo.health;
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
		var plOneMinDam = plOne.damage * .5;
		var plTwoMinDam = plTwo.damage * .5;
		var f1 = Math.floor(Math.random()*(plOne.damage-plOneMinDam)+plOneMinDam);
		var f2 = Math.floor(Math.random()*(plTwo.damage-plTwoMinDam)+plTwoMinDam);
		
		//Damage taken from each player and info output via console.log.
		plOne.health = plOne.health - f1;
		plTwo.health = plTwo.health - f2;
		console.log(plOne.name+" : "+plOne.health+ " " +plTwo.name+" : "+plTwo.health);
		dumboNm.innerHTML = plOne.name +":"+ plOne.health;
		colHathiNm.innerHTML = plTwo.name +":"+ plTwo.health;
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
		if (plOne.health<1 && plTwo.health<1)
		{
			result = "You Both Die";
		}else if(plOne.health<1){
			result = plTwo.name + "  WINS!!!";
		}else if(plTwo.health<1){
			result = plOne.name + "  WINS!!!";
		}else if(round === 10){
			result = "Game Ends In A Tie "
		};
		return result;
	};
	fight();
	
})();













