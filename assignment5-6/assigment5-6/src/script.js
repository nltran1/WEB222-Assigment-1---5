
 function formValidation() {
    clearerrors();
    return (validateFirstName()&& validatePhoneNumber() && validateLastName());
 }

 function validateFirstName() {
    var result = true;
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("firstName");
    var inputValue = elem.value.trim();

    if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" ) { 
       errors.innerHTML += "<p>* Name: Fisrt Character have to Upper Case.</p>";
       
       result = false;
    }  

    inputValue = inputValue.toUpperCase();  
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) {
            errors.innerHTML += "<p>* Name: Please enter a meaningful name with all alphabet letters.</p>";
            
            result= false;
        }
    } 

    if(result=== false){
       elem.focus();
    }

    return result; 
 }
 
 function validateLastName() {
      var result = true;
      var errors = document.querySelector("#errors");
      var last = document.getElementById("lastName");
      var inputValue = last.value.trim();
  
      if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" ) { 
         errors.innerHTML += "<p>* Name: Fisrt Character have to Upper Case.</p>";
         result = false;
      }  
  
      inputValue = inputValue.toUpperCase();  
      for (var i = 0; i < inputValue.length; i++) {
          if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) {
              errors.innerHTML += "<p>* Name: Please enter a meaningful name with all alphabet letters.</p>";
              result= false;
          }
      } 
  
      if(result=== false){
         last.focus();
      }
  
      return result; 
   }

   
 
 function clearerrors() {
    document.querySelector("#errors").innerHTML = "";
 }


 function validatePhoneNumber() {
    var errors = document.querySelector("#errors");
    var phone = document.getElementById("phone");
    var inputValue = phone.value.trim();
    var result = true;

    if (inputValue.length != 10) { // check 10 characters
       errors.innerHTML += "<p>* Please Enter 10 Digits Phone Number.</p>";
       result = false; // failed for validation
       
    }
    
    if (parseInt(inputValue) != inputValue) { // check all digits
       errors.innerHTML += "<p>* Please enter a phone number, numbers only.</p>";
       result = false; // failed for validation
    }
  
    if(result=== false){
      phone.focus();
   }

   return result;
}



