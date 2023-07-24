let Button=document.getElementById('button');
let firstName=document.getElementById('first-name');
let lastName=document.getElementById('last-name');
let email=document.getElementById('email-address');
let password=document.getElementById('password');
let First=document.getElementById('first');
let Second=document.getElementById('second');
let Third=document.getElementById('third');
let Fourth=document.getElementById('fourth');

let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function showError(input,message){
    const Input = input.parentElement;
    const errorMessage = Input.querySelector('small');
    errorMessage.innerText = message;
    errorMessage.style.display="grid";
    input.style.borderColor="hsl(0, 100%, 74%)";
    input.style.color="hsl(0, 100%, 74%)";
}

function showSuccess(input){
    const Input = input.parentElement;
    const errorMessage = Input.querySelector('small');
    errorMessage.style.display="none";
    input.style.borderColor="";
    input.style.color="";
} 

function isValid(){
    if(!email.value.match(pattern)||email.value==='' ){
        Third.style.visibility="visible";
        showError(email,'Looks like this is not an email');
    }
    else{
        showSuccess(email);
    }
    if (firstName.value==='') {
        First.style.visibility="visible";
        showError(firstName,'First Name cannot be empty');
    }
    else{
        showSuccess(firstName);
    }
    if (lastName.value==='') {
        Second.style.visibility="visible";
        showError(lastName,'Last Name cannot be empty');
    }
    else{
        showSuccess(lastName);
    }
    if (password.value==='') {
        Fourth.style.visibility="visible";
        showError(password,'password cannot be empty');
    }
    else{
        showSuccess(password);
    }
}

Button.addEventListener('click',isValid);