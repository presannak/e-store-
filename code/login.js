window.alert("HI");
function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
    var password1=document.myform.password1.value;
    
    
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }
    if (password == "") {
            alert("Please enter your password");
            password.focus();
            return false;
        }
    
    if(password != password1){
        alert("Password mismatch");
            return false;
    }
    if(password.length!= ""){
           var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
            if(regex.test(password) === false) 
            {    alert("Please enter a valid pwd");
                    return false;
            }       
    }
    }