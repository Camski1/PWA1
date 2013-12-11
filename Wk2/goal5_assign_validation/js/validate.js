/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/
//var id = document.getElementsByTagName("input")[0];
//console.log(id);

(function(){
console.log(document.querySelectorAll("input"));
    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
        

        for(i=0, id=document.querySelectorAll("input").length; i<id; i++){
                
                id = document.querySelectorAll("input")[i];
                console.log(id);

            
        };  
            validateField(id);  //id = is the form input field ID
        
        
                e.preventDefault();
                return false;

    };
   



    var validateField = function(inputName){

        if (inputName.name === "f_username"){
            var pattern = /^[A-Z][a-z]|^[A-Z][a-z]\d[A-Z][a-z]+$/;
            
        }else if (inputName.name === "f_emai"){
            var pattern = /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/;
        }else if (inputName.name === "f_phone"){
            var pattern = /^(+[2-9]\d{2}-\d{3}-\d{4}$/;
        }else if (inputName.name === "f_ssn"){
            var pattern = /^\d{3}-\d{2}-\d{4}$/;
        }else if (inputName.name === "f_password"){
            var pattern = /^.*(?=.{4,10})(?=.*\d)(?=.*[a-zA-Z]).*$/;
        };  
            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.

        console.log(inputName.value);
        
        var pass = pattern.test(inputName.value); //statement is needed here;
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper




