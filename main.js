
let password = document.getElementById("password");
// let change = document.getElementById("buttons")
let number = document.getElementById("num");
let error = document.getElementById("error");


function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    // let phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[.- ]?([0-9]{4})$/
    if(password.value.trim()==""){
        alert("fields cannot be empty");
        return false;
    }
    else if(password.value.length<=8 || password.value.search(/[A-Z]+/)==-1 || password.value.search(/[a-z]+/)==-1 || password.value.search(/[0-9]+/)==-1){
        alert("password should contain minimum 8 characters, atleast one uppercase, lowercase and number");
        return false;
    }
    
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if(phoneno.test(number.value))
        {
      return true;
        }
      else
        {
        alert("Enter a valid Phone number");
        return false;
        }
}
    
