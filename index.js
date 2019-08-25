// Initialize Cloud Firestore through Firebase
//alert("Ok");
var db = firebase.firestore();
//const form=document.querySelector("add");

function storeData() {
    
    var fn = document.getElementById("fnm").value;
    var em = document.getElementById("email").value;
    var pma = document.getElementById("pma").value;
    var cno = document.getElementById("cno").value;
    var nm = document.getElementById("nmw").value;
    var gndr = document.getElementById("gndr").value;
    //var gndr1 = document.getElementById("gndr1").value;
 //   var dob = document.getElementById("dob").value;
    db.collection("Users").doc().set({
        //Name_Of_Ward: nm
        Email: em,
        Permanent_Address: pma,
        Contact_No: cno,
        Full_Name_Of_Applicant: fn,
        Gender: gndr
       // DOB: dob
    })
        .then(function() {
            //console.log("Document successfully written!");
            alert("Document Written Successfully!");

    })
        .catch(function(error) {
            console.error("Error writing document: ", error);
    });
    
}



                
                
                
                
//form.em.value= '';
/*
form.addEventListener("submit",(e) =>{
    db.collection("name").add({
        email: form.email.value;
        
    });
})*/
/*
<div class="login">
        <form method="post" action="#">
            <h3>Sign In<h3><br>
            <label>Username</label><br>
            <input type="text" name="username"><br>
            <label>Password</label><br>
            <input type="password" name="password"><br>
                <br>
            <input type="submit" name="submit"><br>
                <br>
                <a href="register.html">register</a>**/