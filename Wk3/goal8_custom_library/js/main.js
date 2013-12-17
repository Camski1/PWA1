/* 
	Arena Battle!!!
	Author: JavaScript Development Team
	PWA1: Goal 8
*/

/*
	=====================================================
	Javascript pattern: self-executing function
	syntax: (function(){})();
	
	Create a private scope for the application's main code
*/


(function(){

	var gandolf = new Wizard({
		name: "Gandolf The Grey",
		power:"Fire",
		strength: 20
	});

	var dementor = new Wizard({
		name:"Dementor",
		power:"Ice",
		strength: 15
	});

	var merlin = new Wizard({
		name:"Merlin",
		power:"Earth",
		strength:"30"
	});
	
	var thunderDome = new Arena({
		name:"The Thunder Dome",
		location: "Skyrim"
	});
	thunderDome.register(gandolf);
	thunderDome.register(dementor);
	thunderDome.register(merlin);

	thunderDome.fight();


})();



