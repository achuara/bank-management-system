function verify(){



    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="atul"&&password=="enter"){
       window.open("Atul.html");
    }else{
        window.alert("Incorrect username or password");
    }
    if(username=="ayush"&&password=="enter"){
        window.open("Ayush.html");
    }else{
        window.alert("Incorrect username or password");
    }
    

    
}