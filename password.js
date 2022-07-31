const p = "1234567Arthi@"

if (p.match(/((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*+-])).{8,25}/) ) {
    console.log("password is strong");
}
else{
    console.log("password not strong");
}

    
    
    
 