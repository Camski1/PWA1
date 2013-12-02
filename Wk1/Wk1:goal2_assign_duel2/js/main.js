//Cameron Kozinski
//11-27-13
//The duel- Part I

(function(){
	console.log("FIGHT");
//Player names
	var plOne = "Dumbo";
	var plTwo = "Colonel Hathi";
	//players starting health
	var plOneHealth = 100;
	var plTwoHealth = 100;
	//players max damage 
	var plOneMaxDam = 50;
	var plTwoMaxDam = 50;
	//Round counter/starting point
	var round = 0;

	 function fight(){
		alert(plOne + ":" + plOneHealth + "  *START*  " + plTwo + ":" + plTwoHealth);
		for (var i = 0; i < 10; i++)
		{
			//Formula for finding the amount of damage recieved for each player 
			var plOneMinDam = plOneMaxDam * .5;
			var plTwoMinDam = plTwoMaxDam * .5;
			var f1 = Math.floor(Math.random()*(plOneMaxDam-plOneMinDam)+plOneMinDam);
			var f2 = Math.floor(Math.random()*(plTwoMaxDam-plTwoMinDam)+plTwoMinDam);
		
			//Damage taken from each player and info output via console.log.
			plOneHealth = plOneHealth - f1;
			plTwoHealth = plTwoHealth - f2;
			console.log(plOne+" : "+plOneHealth+ " " +plTwo+" : "+plTwoHealth);

			//Check for victor
			var result = winnerCheck();
			console.log(result);
			if (result ==="no winner"){
				round++;
				alert(plOne +" : " + plOneHealth + "*Round" + round + " OVER" + "*  " + plTwo + " : " + plTwoHealth);
			}else{//if winner is found loop will break
				alert(result);
				break;
			};
		};

	};
	//Winner check function
	function winnerCheck(){
		var result = "no winner";
		if (plOneHealth<1 && plTwoHealth<1)
		{
			result = "You Both Die";
		}else if(plOneHealth<1){
			result = plTwo + "  WINS!!!";
		}else if(plTwoHealth<1)
		{
			result = plOne + "  WINS!!!";
		};
		return result;
	};
	fight();
	
})();













