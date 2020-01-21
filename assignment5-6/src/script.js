function formValidation() {
    clearerrors();
    return (validateFirstName()&& validatePhoneNumber() && validateLastName());
 

 function validateFirstName() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("firstname");
    var inputValue = elem.value.trim();

    if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" ) { 
       errors.innerHTML += "<p>* Name: Fisrt Character have to Upper Case.</p>";
       return false;
    }  

    inputValue = inputValue.toUpperCase();  
    for (var i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) {
            errors.innerHTML += "<p>* Name: Please enter a meaningful name with all alphabet letters.</p>";
            elem.focus();
            return false;
        }
    } 

    return true; 
 }
 
 function validateLastName() {
   var errors = document.querySelector("#errors");
   var elem = document.getElementById("lastname");
   var inputValue = elem.value.trim();

   if (inputValue.charAt(0) < "A" || inputValue.charAt(0) > "Z" ) { 
      errors.innerHTML += "<p>* Name: Fisrt Character have to Upper Case.</p>";
      return false;
   }  

   inputValue = inputValue.toUpperCase();  
   for (var i = 0; i < inputValue.length; i++) {
       if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) {
           errors.innerHTML += "<p>* Name: Please enter a meaningful name with all alphabet letters.</p>";
           elem.focus();
           return false;
       }
   } 
   return true;
}

   
 
 function clearerrors() {
    document.querySelector("#errors").innerHTML = "";
 }

 function validatePhoneNumber() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("phone");
    var inputValue = elem.value.trim();

    if (inputValue.length != 10) { // check 10 characters
       errors.innerHTML += "<p>* Please Enter 10 Digits Phone Number.</p>";
       return false; // failed for validation
    }
    
    if (parseInt(inputValue) != inputValue) { // check all digits
       errors.innerHTML += "<p>* Please enter a phone number, numbers only.</p>";
       return false; // failed for validation
    }
  
    return true; // passed for validation
 } 

 

 // Draf version that not work but pass the eslint
//  window.onload = function () {
//    var document = window.document;
//    var form = document.getElementById("form");
//    var firstname = document.getElementById("firstname");
//    var lastname = document.getElementById("lastname");
//    var phone = document.getElementById("phone");
//    var errors = document.querySelector("#errors");

// function formValidation() {
//    var valid = false;
//    if (validateFirstName() && validateLastName() && validatePhoneNumber()){
//        valid = true;
//        alert("Sign up successfully!");
//    }
//    return valid;
// }
 

//     firstname.required = true;
//     lastname.required = true;
//     phone.required = true;

//  function validateFirstName() {
//     var valid = true;
//     var inputValue= firstname.value.trim();

//     if (inputValue.charAt(0) < 'A' || inputValue.charAt(0) > 'Z' ) { 
//        errors.innerHTML += "<p>* Name: Fisrt Character have to Upper Case.</p>";
//        valid = false;
//        firstname.focus();
//     }  else{
//       inputValue = inputValue.toUpperCase();
//       for (var i = 1; i < inputValue.length; i++) {
//           if (inputValue.charAt(i) < 'A' || inputValue.charAt(i) > 'Z') 
//           valid = false;
//           errors.innerHTML += "<p>* Name: Please enter a meaningful name with all alphabet letters.</p>";
//           firstname.focus();
//       }
//       errors.innerHTML="";
//       return valid;
//     }
//    }

 
//  function validateLastName() {
//    var valid = true;

//    var inputValue = lastname.value.trim();

//    if (inputValue.charAt(0) < 'A' || inputValue.charAt(0) > 'Z' ) { 
//       errors.innerHTML += "<p>* Name: Fisrt Character have to Upper Case.</p>";
//       valid = false;
//       lastname.focus();
//    }  else{
//      inputValue = inputValue.toUpperCase();
//      for (var i = 1; i < inputValue.length; i++) {
//          if (inputValue.charAt(i) < 'A' || inputValue.charAt(i) > 'Z') 
//          valid = false;
//          errors.innerHTML += "<p>* Name: Please enter a meaningful name with all alphabet letters.</p>";
//          lastname.focus();
//      }
//      errors.innerHTML="";
//      return valid;
//    }
//   }
   
//  function validatePhoneNumber() {
//     valid = true;
//     var inputValue = phone.value.trim();

//     if (inputValue.length != 10) { 
//        errors.innerHTML += "<p>* Please Enter 10 Digits Phone Number.</p>";
//        valid= false; 
//        phone.focus();
//     }
    
//     if (parseInt(inputValue) != inputValue) { // check all digits
//        errors.innerHTML += "<p>* Please enter a phone number, numbers only.</p>";
//        valid= false; // failed for validation
//        phone.focus();
//     }
  
//     errors.innerHTML="";
//     return valid;
//  } 
//  form.onsubmit=formValidation();
// };


