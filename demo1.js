function GetValue(){
    // var username = document.getElementById("text1").value;
    // var password = document.getElementById("text2").value;
    // alert("The value of username is :"+username);
    // alert("The value of password is :"+password);

    var rd1 = document.getElementById("rd1");
    var rd2 = document.getElementById("rd2");
    
    if(rd1.checked == true){
        alert("The Selected Value is : "+rd1.value);
    }
    else if(rd2.checked == true){
        alert("The Selected Value is : "+rd2.value);
    }
    else{
        alert("No Channel is selected");
    }
}