function saveUser(newUser){
    console.log(newUser);
    let val = JSON.stringify(newUser);//convert the obj into string
    console.log(val);
    
    localStorage.setItem('user', val);
}