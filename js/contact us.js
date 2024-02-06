function myFunction(){

    var firstname=document.getElementById("contact_firstname").value;
    var lastname=document.getElementById("contact_lastname").value;
    var gmail=document.getElementById("contact_gmail").value;
    var number=document.getElementById("contact_number").value;
    var msg=document.getElementById("contact_msg").value;
    
    
    if(firstname == ""){
       document.getElementById("first_name_required").style.display="block";
    }
    if(lastname == ""){
        document.getElementById("second_name_required").style.display="block";
    }
    if(gmail == ""){
        document.getElementById("gmail_required").style.display="block";
    }
    if(number == ""){
        document.getElementById("number_required").style.display="block";
    }
    if (msg == "") {
        document.getElementById("msg_required").style.display="block";
    }
    if(submit == ""){
        document.getElementById("submit_required").style.display="block";
    }
    
    
    }