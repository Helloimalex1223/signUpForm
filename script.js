function validatePassword() 
{
     let a = document.querySelector('#password').value;
     let b = document.querySelector('#password-confirm').value;
     
     if(a == b)
     {
        alert("Good job! The passwords are the same.");
     }
     else
     {
        alert("The passwords are not the same :(.");
     }
}


document.querySelector("#create").addEventListener("click", validatePassword());