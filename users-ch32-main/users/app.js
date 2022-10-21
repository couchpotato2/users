//1) create the user constructor 
//email, password, first name, last name, age, address, phone number, payment, color
function User(email, password, first, last, age, address, phone, payment, color){
    this.email = email;
    this.password = password;
    this.first = first;
    this.last = last;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.payment = payment;
    this.color = color;
}

//2) get the values from the inputs
//let inputEmail = document.getElementById("txtEmail").value;
let inputEmail = $("#txtEmail");
let inputPassword = $("#txtPassword");
let inputFirstName = $("#txtFirstName");
let inputLastName = $("#txtLastName");
let inputAge = $("#txtAge");
let inputAddress = $("#txtAddress");
let inputPhone = $("#txtPhone");
let inputPayment = $("#selPayment");
let inputColor = $("#selColor");

function isValid(user){
    let valid = true;

    if(user.email=="" || user.password==""){
        valid=false;
    }

    return valid;
}
//3) register function 
// JS - > .value but in jQuery is .val()
function register(){
    //3.1) create the obj using the constructor
    let user = new User(inputEmail.val(),inputPassword.val(),inputFirstName.val(),inputLastName.val(),inputAge.val(),inputAddress.val(),inputPhone.val(),inputPayment.val(),inputColor.val());
    
    if(isValid(user)==true){
        saveUser(user);
    }else{
        alert("Please enter a valid user name");
    }
    
    //3.3) create a btn on the register.html and trigger the register function
    
}