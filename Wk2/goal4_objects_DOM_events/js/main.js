/*
    PWA1: Goal 4: Course Material 4

	1. Objects
	2. Document Object Model
	3. Events and Callbacks
*/

// application scope (self-executing function)
(function(){


/*	==================================================================
	Objects
	------------------------------------------------------------------
		
	- objects are collections of keys and values for storing data {KEY : Value} pairings, also 
		known as associative pairing
 
	- arrays and objects are both used to store multiple values 
		arrays vs objects:  
 			1.  arrays store by numerical index
 			2.  objects store by a key index
	
	- keys in objects are names (similar to variables), used to index a value inside the object

	-similar to making an array, we declare the object’s properties inside the literal, separating by comma...
*/

console.log('------Objects ----------');

//{KEY : Value} pairings,
	var person = {name:"James", age:35, secretAgent:true};



/* accessing object properties
     - below are 3 ways you can access the property information in an object
         1. dot notation
         2. index notation using a variable as the index
         3. index notation using a string

     - also keep in mind that since the keys can be strings, you could access the keys using string variables
 */
 var personAge = "age";
 console.log(person.name, person [personAge], person["secretAgent"]);

// setter
person["age"] = 40;
person.name = "James Bond"
console.log(person);

//nested objects
person = {birthday:{month:02,day:12},name:"Bond"};
console.log(person);
console.log("month ",person.birthday.month);

//---------------------------------------------

// Object within an object

console.log('------Object within an object, Arrays, Function ----------');
 thatGuy = {
	name:"James Bond",
	course:"PWA1",
	address:{
		num:3300,
		street:"University",
		city:"Orlando",
		state:"FL",
		cornerOf:["University","Semoran"]
	},
	showMyAddress : function(){
		var addr = this.address.street + ", " + this.address.city;
		return addr;
	}
};

console.log(thatGuy.showMyAddress());
console.log(thatGuy.address.street +", "+ thatGuy.address.city);
console.log(thatGuy.address.cornerOf[0]);
//properties & methods
/*
	- objects are useful primarily for properties and methods:
		- properties are variable/keys that belong to an object only
		- methods are function/keys that belong to the object only 
		= these members are the foundation of an oop model
*/

console.log('------Objects - properties & methods ----------');

//Method 1 "Basic"
var fsStudent = {};
fsStudent.age = 22;
fsStudent.career = "Web Dev";
fsStudent.sayHello = function(){
	console.log("Hello!");
};
fsStudent.sayHello();
fsStudent['sayHello']();
console.log(fsStudent.age);
console.log(fsStudent['age']);


// above, we first initialize the object, then we created 2 properties 
//   for the object, and a method called sayHello - notice that the method is 
//	 being created by an assignment operator, just like the properties.

// we can also access the methods and properties of an object using  [ ] , 
// 	by using their name as a string - all of the below are valid:




/* --------------
Method 2 "OBJECT Literal"

	- we can also use the object literal syntax to create a new object and 
		fill it at the same time.

	- below is the same object as in Method 1
*/
var fsStudent = {
	age:22,
	career:"Web Dev",
	sayHello: function(){
		console.log("Hello");
	}
};
fsStudent.sayHello();
fsStudent['sayHello']();
console.log(fsStudent.age);
console.log(fsStudent["age"]);



//---------------------------------------------


/******************************************************************************
STUDENT ACTIVITY 1:

	PART 1:
	1.  Create an object that has the following keys.
         a. schoolName (i.e "Full Sail")
         b. address  (i.e "123 University Ave")
         c. studentCount (i.e 16000)
         d. students (use an array of objects) - create at least 3 objects in the array)
             i. name (i.e "James Bond")
             ii. GPA (i.e 3.9)
             iii. classes (use an array with the ability to store at least 2 class names)
                    (i.e ['PWA1', 'PWA2'])

        2.	console.log the following
             a. school name in both the dot syntax and index syntax
             b  create a variable name "newCnt" that is equal to studentCount, and console.log
                    the studentCount using the newCnt variable.
             c.  console.log the address using index syntax
             d. one student's GPA using dot syntax and index syntax
 ----------------------------------------------------------------------------- */

var schoolInfo = {
	schoolName:"Full Sail",
	address:"123 University Ave",
	studentCount:16000,
	students:[
	{name:"james bond", GPA:3.9, classes:['PWA1', 'PWA2']},
	{name:"cameron", GPA:3.7, classes:['PWA1', 'PWA2']},
	{name:"bill", GPA:3.0, classes:['PWA1', 'PWA2']}
	]
};
console.log(schoolInfo.schoolName);
console.log(schoolInfo['schoolName']);
var newCnt = schoolInfo.studentCount;
console.log(newCnt);
console.log(schoolInfo['address']);
console.log(schoolInfo.students[1].GPA);
//console.log(schoolInfo.students.name["GPA"]);
console.log('------ STUDENT ACTIVITY - ANSWERS BELOW ----------');

// this is integrating multiple data types - object with an array of objects



/* ----------------------------------------------------------------------------
 STUDENT ACTIVITY 2:

    1.  Using the above code, create a function that will find the average grade
        a. create an anonymous function named "gradeAvg"
        b. the function should accept as a parameter the object above
        c. create a for loop to total up the average grade for ALL students
        d. "return" the average GPA answer to the item that called the function

    2.  console.log the average grade by calling the gradeAvg method.
----------------------------------------------------------------------------- */
var gradeAvg = function(arr){
	var combG = 0;
	var numOfG = 0;
	for(i=0, x=arr.students.length; i<x; i++){
		numOfG++;
		combG = combG + arr.students[i]['GPA'];
		avgG = combG / numOfG;	
	};
		return avgG
};
console.log("average grade: ", gradeAvg(schoolInfo));



/* ===============================================================
	The for-in object loop
------------------------------------------------------------------	

	for(var key in obj){
		obj[key]
	}
*/
    console.log("---------- Object - For In Loop ----------------");
var person = {name:"James", age:35, secretAgent:true};
for(key in person){
	console.log("key names: ",key);
	console.log('objects in key[',key,']:' ,person[key]);

};


/*
	===============================================
	MORE Object infomation
	
		- most strictly-typed languages have clear separations in their data types 
			and classical behavior

		- JavaScript is simpler:
			- numbers, strings, and booleans are the only separate data types in JavaScript
			- objects, arrays, regular expressions, and functions are all considered 
				to be objects.
			- in addition, anything that is not an object, acts like an object

			i.e.   "Literal Syntax"
			myStr = ‘James Bond’;
			alert(myStr.length)   //will return a 10


			- previously, we used the most common constructor for creating our 
				variables, which is the literal syntax:

				var myNum = 5;

			- we could also create this variable using its "constructor" equivalent:
	
				var myNum = new Number(5);

			- both have the same result - the literal syntax is preferable	

			- using these constructors, we can also convert from one data type to another.
*/
    console.log('------ Objects - Converting Datatypes ----------');

var num = 1;
string = String(num);
console.log("string: ", typeof string, string);
bool = Boolean(string); 
console.log("bool: ", typeof bool, bool);
var num = Number(bool);
console.log("num: ", typeof num, num);
/*
	- because these values act as objects, the data types also have methods and 
		properties, just like an object...  
	- we’ve already looked at one, the .length property, which can be used on 
		both strings and arrays.
*/

// #1 - shows string length


// #2 - shows array length
	

// #3 - shows and array of objects, inside of an object length
	

console.log('------ MORE Object examples - Objects/Functions ----------');

// showing a function call and creating a method


/*
	==================================================================
	DOCUMENT OBJECT MODEL
	------------------------------------------------------------------

	document	// global DOM object
	window		// global DOM object
*/
console.log('------------ DOCUMENT OBJECT MODEL -------------------');

//Window DOM object

 console.log(window);
 console.log(window.location);
 console.log(window.history);
 console.log(window.navigator);

 //Document DOM object
 console.log(document);
 console.log(document.body);
 console.log(document.head);
 

/*
	==================================================================
	document.getElementById(string);
	------------------------------------------------------------------
	- Finds an html element on the page by it's CSS ID.
	- RETURNS a single DOM object.
	- Requires a string. 
	- If there are more than 1 id, it returns the first.

	------------------------------------------------------------------
	BEST PRACTICE:
	
	- Save the html element to a variable for later reference.
	- Code shouldn't repeat itself. Code shouldn't repeat itself.
*/

console.log('------------ getElementById -------------------');
var playbox = document.getElementById("playbox");
console.log(playbox);
playbox.style.backgroundColor = "red";



/*
	==================================================================
	document.getElementsByTagName(string);
	------------------------------------------------------------------
	- Finds all html elements on the page with a matching html tag
	- RETURNS an array (collection) of DOM objects.
*/

console.log('------------ getElementsByTagName -------------------');

var aTag = document.getElementsByTagName("a");
console.log(aTag);
console.log(aTag[1]);
for(i=0 , max = aTag.length; i<max;i++){
	console.log(aTag[i]);
}



/*
	==================================================================
	document.querySelectorAll(string);
	------------------------------------------------------------------
		- Uses a CSS selector expression to find all html elements that match the expression.
		- Works much like stylesheet declarations (class and ID prefixes)

		- RETURNS an array (collection) of DOM objects. Even if there is 1 object.
			versus the getElementByID (that returns a single DOM element)
*/

console.log('------------ querySelectorAll -------------------');
var nav = document.querySelectorAll("#nav li:last-child");
console.log(nav);

var cf = document.querySelectorAll(".clearfix li");
console.log(cf);


/*
	==================================================================
	document.querySelector(string);
	------------------------------------------------------------------
		- Works just like querySelectorAll, but only returns the first match,
			If multiple exist, return the first
		
		- RETURNS a single DOM object.
*/
    console.log('------------ querySelector -------------------');

var qs = document.querySelector("#nav");
console.log(qs);



    /*
        ==================================================================
        TRAVERSAL
        ------------------------------------------------------------------
            - "Traversing" means finding other html elements from already selected
                element(s)
            - We use XML nodes for traversing

        Traversing works by parent/child/sibling relationships:

            - firstChild
            - lastChild
            - parentNode
            - nextSibling
            - previousSibling
            - childNodes

        Will be used in ALL future assignments.
    */
    console.log('------------ TRAVERSAL -------------------');
    var apple = document.querySelectorAll("#nav li a")[2];
    console.log(apple);
    console.log((apple.parentNode.parentNode.parentNode).nextSibling);

/*
	==================================================================
	Manipulating Attributes
	------------------------------------------------------------------
		- HTML elements have attributes, things like "href", "src", "title", etc
		- To access these attributes, there are specific setter/getter methods.

        Syntax:
        - element.setAttribute(attr, value)
            - always initializes an attribute to a new value
        - element.getAttribute(attr)
            - always returns a string

        attr = href, src, class
*/



/*
	==================================================================
	Manipulating CSS Classes
	------------------------------------------------------------------
		- If you use setAttribute to change the "class" attribute of an element,
			that element is immediately redrawn with the new css styles.
		
		- Just like normal, you can set MULTIPLE classes at once.
		
			element.setAttribute('class', 'thumb active')

		- FYI: Elements can have multiple classes.
*/

console.log('------------ Manipulating CSS Classes -------------------');


/*
	==================================================================
	Replacing an HTML container with new HTML
	------------------------------------------------------------------
		- In a later project, you are building a gallery. 
		- You will be targeting the SCR of an image tag.
		- See contentPreview in HTML

Sample Link: http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg
*/
var links = document.querySelectorAll("#nav li");
console.log(links);
for(i=0, max=links.length; i<max;i++){
	var href = links[i].firstChild.getAttribute("href");
	console.log(href);

	if(href==="#1"){
		var href2 = links[i].firstChild;
		console.log(href2);
		//href2.setAttribute("href","http://www.fullsail.com");
	};
	var aClass = links[i].firstChild.getAttribute("class");
	console.log(aClass);
	//links[i].firstChild.setAttribute("class","navitem active");

	//links[i].firstChild.setAttribute("href", "http://google.com");
};

var navLinks  = document.querySelectorAll("#nav a");
console.log(navLinks[1].innerHTML);
navLinks[1].innerHTML="This link rocks!";

for(i=0, x=navLinks.length;i<x;i++){
	navLinks[i].innerHTML="Click Me "+i;
}
var imgsrc = document.querySelector("#contentPreview img");
imgsrc.setAttribute("src", "http://www.instructables.com/files/deriv/FJI/WGSW/FPIUQQ3K/FJIWGSWFPIUQQ3K.MEDIUM.jpg");
/*
	==================================================================
	DOM Events  (lecture slides)
	------------------------------------------------------------------
		- listener and handler
		- there are 2 key aspects to any event, the event listener and the event handler
			1. the event listener is an property associated with the DOM that waits for the event trigger to 
				occur (i.e click, mouseover), and then fires the event handler
			2. the event handler is the function that will execute when the event is fired

		- using dot syntax, the listener for any element is available as a property 

		- An event listener is all lowercase with the prefix "on"
		
			element.onclick		//click listener
			element.onmousemove			//mousemove listener
	

		- The function is the event handler.  Can be anonymous or named.

			elementObj.onclick = myFn;
			element.onclick = function(){};

		- every event listener automatically passes an "event" object with information about the event  
		- the function's only argument is the EVENT OBJECT (e)
		- the handler must receive it as an argument
		- many developers will use the "e" as the function parameter
		- The function's CONTEXT (this) is the html element.	
*/
console.log('------------ DOM Events Ex 1-------------------');

var nav = document.querySelectorAll('#nav li a');

/*for(i=0, max = nav.length; i<max; i++){
	console.log(nav[i]);

	nav[i].onclick = function(e){
		console.log(e);

		e.preventDefault();
		return false;
	};
};
*/
/*
// this just console.log's when a click occurs





*/
for(i=0,x=nav.length;i<x;i++){

	nav[i].onclick = function(e){

		for(ii=0, xx=nav.length; ii<xx; ii++){
			nav[ii].setAttribute("class","navitem");

		};
		console.log(this);
		this.setAttribute("class", "navitem active");
		
		e.preventDefault();
		return false;
	};	
};



/*
	==================================================================
	Browser Defaults
	------------------------------------------------------------------
		- for most events, the browser will trigger a default action -  for example, hovering over 
			any element will create a tooltip out of the “title” or “alt” attribute if it exists

		- the one we care the most about is the <a> default action, which tells the window to go to 
			the anchor’s href location

		- the window waits for a return to take place before calling the default
			- so our event function should always return false , and call preventDefault()

		e.stopPropagation();  - calling this method from inside an event handler will prevent the 
								Bubbling Phase from triggering other events

		e.preventDefault();	  - calling this method from inside an event handler will prevent the 
								browser’s default action (such as following an href or the <form> action)
								- Prevent a submit button from submitting a form
   								- Prevent a link from following the URL
					

*/


console.log('------------ DOM Events Ex 2 -------------------');
/*
// this example changes the clicked link to the active class




*/ 



console.log('------------ DOM Events Ex 3 -------------------');
/*
// a more efficient way to do the above





*/
nav[0].setAttribute("class", "navitem active");

for(i=0,x=nav.length;i<x;i++){

	nav[i].onclick = function(e){

//		for(ii=0, xx=nav.length; ii<xx; ii++){
//			nav[ii].setAttribute("class","navitem");

//		};
		document.querySelector("#nav li a.active").setAttribute("class","navitem");
		console.log(this);
		this.setAttribute("class", "navitem active");
		
		e.preventDefault();
		return false;
	};	
};














})(); // end wrapper