/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
    
    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        var id = document.getElementsByTagName("input")[0];
        
        validateField(id);  //id = is the form input field ID


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === "f_username"){
            var pattern = /^[a-zA-Z]+$/;
            
           
            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.

        };
        
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




