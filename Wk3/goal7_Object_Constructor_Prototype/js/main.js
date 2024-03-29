/*
     PWA1: Goal 7:  Course Material 7 (more.Objects - Constructors - Prototypes)

 */

// application scope (self-executing function)
(function(){

/*	
    ==================================================================
    more.Objects
    ------------------------------------------------------------------

    - object's link variables and functions together inside of a storage container
    - variables and functions in objects are called object members
    - the variables and functions combined into a single data structure
    - variables = properties  	(variable is owned by the object)
    - function = method			(function is owned by the object)
    - functions placed within an object can access variables in the object w/o having
        to pass an argument

    Custom Objects (Constructor):
    - custom objects extend JavaScript to include features that need to suit your needs
    - since object properties and methods have to be initialized when a object is created,
        a special method called a "constructor" is needed to get an object up and running
    - every custom object requires its own "constructor" which is named the same as
        the object
    - the "constructor" is responsible for creating object instances
*/

	// get the location of the blog button

    var button = document.getElementById("blog_btn");
/************************************************************************
    Blog constructor:

    - Classical inheritance (languages like AS3) use classes to create objects.
        Javascript doesn't have classes, but we do have constructors. A constructor is
        just a function called with the NEW keyword.
        The "new" keyword uses a constructor to instantiate an object

    - constructor = template
    - constructor = blue print for a home that will be used to build similiar homes
    - as a best practice, functions that are acting as constructors should be given a
        name starting with a capital letter, purely for making it easier to find in the code
    - just like any other function, we can pass arguments into it
    - any variables declared inside the constructor function’s scope are considered
        local to the function (cannot be accessed outside of it)

    - below is a constructor for a Blog object that creates and initializes properties
        for the text and date
  -----------------------------------------------------------------------
*/

/************************************************************************
     Properties in a constructor ("THIS")
     - the constructor’s job is establishing the properties of an object, along with
        their initial values
     - to create a property within a constructor, you set the property using the
        JavaScript keyword, "this"
     - the keyword "this" is essentially a reference to the object that owns the function
        it is being used in
     - "this" assigns ownership of the property to the object, and sets it’s initial value
     - because "this" is a reference, any changes or updates made to "this" are
        reflected in the owner object
     - we are assigning a property that belongs to "this" object, as oppose to just a
        local variable within the constructor
 -----------------------------------------------------------------------
 */
    var Blog = function(str,date){
        //var LOL = "Funny";
//console.log(this);
        this.body = str;
        this.date = date;
        //console.log("str is equal to: ",str);
        //console.log("this.body is equal to: ",this.body);

/*        this.toHTML = function(highlight){
            var blogHTML ="";

            blogHTML += highlight ? "<p style='background-color:#EEEEEE'>" : "<p>";
            
             blogHTML += "<strong>" + (this.date.getMonth()+1)+ "/"+
             this.date.getDate()+"/"+
             this.date.getFullYear()+"</strong><br/>"+
             this.body + "</p>";
             return blogHTML;
        };

        this.toString = function(){
            console.log("["+ (this.date.getMonth()+1)+ "/"+this.date.getDate()+"/"+
             this.date.getFullYear()+"] "+ this.body);
        };*/

    };
    Blog.prototype.companyName = "Full Sail";

    Blog.prototype.toHTML = function(highlight){
        
            var blogHTML ="";

            blogHTML += highlight ? "<p style='background-color:#EEEEEE'>" : "<p>";
            
            blogHTML += "<strong>" + (this.date.getMonth()+1)+ "/"+
            this.date.getDate()+"/"+
            this.date.getFullYear()+"</strong><br/>"+
            this.body + "</p>";
            return blogHTML;
    

    };

    Blog.prototype.toString = function(){
    
       console.log("["+ (this.date.getMonth()+1)+ "/"+this.date.getDate()+"/"+
       this.date.getFullYear()+"] "+ this.body); 

    };

    // array of blog items
    // each blog item will use the Blog constructor as its template to create each
    //    object

    // manually create an object using the Blog constructor to establish the objects
    //      structure and display all the information in the body of the HTML




    var blog = [
         new Blog('Learned about functions, and how to pass parameters into them.', new Date('04/2/2013')),
         new Blog('Learned about objects, and how to set keys and get values.', new Date('04/15/2013')),          
         new Blog('I love reading regular expressions.  I normally read a few lines right before falling asleep.  It is really good sleeping material.', new Date('04/18/2013')),
         new Blog('What\'s all this new object stuff (i.e THIS, prototype, etc...)', new Date('08/21/2008'))
    ];
    console.log(blog);

    var showBlog = function(e){
        var i = 0,
        blogText = "";

        while(i<blog.length){
     /*       if (i % 2 ===0){
                blogText+= "<p style='background-color:#EEEEEE'>";
            }else{
                blogText +="<p>";
            };
            blogText += "<strong>" + (blog[i].date.getMonth()+1)+ "/"+
             blog[i].date.getDate()+"/"+
             blog[i].date.getFullYear()+"</strong><br/>"+
             blog[i].body + "</p>";
            
            
        };*/
            
    blogText+= blog[i].toHTML(i % 2===0);
    blog[i].toString();
    i++;
    };
    //var tmpName = blog[0].companyName = "Full Sail";
    console.log(blog[0].companyName);
    console.log(blog[1].companyName);
    console.log(blog[2].companyName);
    console.log(blog[3].companyName);
    document.getElementById("blog").innerHTML = blogText;
        e.preventDefault
        return false;

};

    button.onclick = showBlog;






})();  // end wrapper