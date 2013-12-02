//Cameron Kozinski
//11-27-13
//The duel- Part I

(function(){
	console.log("FIGHT");
//Player names
	var plOne = ["Dumbo",100,50];
	var plTwo = ["Colonel Hathi",100,50];
	
	//Round counter/starting point
	var round = 0;

	 function fight(){
		alert(plOne[0] + ":" + plOne[1] + "  *START*  " + plTwo[0] + ":" + plTwo[1]);
		for (var i = 0; i < 10; i++)
		{
			//Formula for finding the amount of damage recieved for each player 
			var plOneMinDam = plOne[2] * .5;
			var plTwoMinDam = plTwo[2] * .5;
			var f1 = Math.floor(Math.random()*(plOne[2]-plOneMinDam)+plOneMinDam);
			var f2 = Math.floor(Math.random()*(plTwo[2]-plTwoMinDam)+plTwoMinDam);
		
			//Damage taken from each player and info output via console.log.
			plOne[1] = plOne[1] - f1;
			plTwoH[1] = plTwo[1] - f2;
			console.log(plOne[0]+" : "+plOne[1]+ " " +plTwo[0]+" : "+plTwo[1]);

			//Check for victor
			var result = winnerCheck();
			console.log(result);
			if (result ==="no winner"){
				round++;
				alert(plOne[0] +" : " + plOne[1] + " *Round" + round + " OVER" + "*  " + plTwo[0] + " : " + plTwo[1]);
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













