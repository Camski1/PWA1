//Cameron Kozinski
//12-06-13
//The Duel - Part III

(function(){
	console.log("FIGHT");
//Player names
	var plOne = {name:"Dumbo",health:100,damage:20};
	var plTwo = {name:"Colonel Hathi",health:100,damage:20};
	
	//Round counter/starting point
	var round = 0;

	 function fight(){
		
		for (var i = 0; i < 10; i++)
		{
			//Formula for finding the amount of damage recieved for each player 
			var plOneMinDam = plOne.damage * .5;
			var plTwoMinDam = plTwo.damage * .5;
			var f1 = Math.floor(Math.random()*(plOne.damage-plOneMinDam)+plOneMinDam);
			var f2 = Math.floor(Math.random()*(plTwo.damage-plTwoMinDam)+plTwoMinDam);
		
			//Damage taken from each player and info output via console.log.
			plOne.health = plOne.health - f1;
			plTwo.health = plTwo.health - f2;
			console.log(plOne.name+" : "+plOne.health+ " " +plTwo.name+" : "+plTwo.health);

			//Check for victor
			var result = winnerCheck();
			console.log(result);
			if (result ==="no winner"){
				round++;
				
			}else{//if winner is found loop will break
				
				break;
			};
		};

	};
	//Winner check function
	function winnerCheck(){
		var result = "no winner";
		if (plOne.health<1 && plTwo.health<1)
		{
			result = "You Both Die";
		}else if(plOne.health<1){
			result = plTwo.name + "  WINS!!!";
		}else if(plTwo[1]<1)
		{
			result = plOne.name + "  WINS!!!";
		};
		return result;
	};
	fight();
	
})();













