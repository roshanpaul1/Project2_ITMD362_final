// jQuery 3.x-style ready event and locally scoped $
/*jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// my functions
function checksubmit(){
  if (checkemail())
  {
    alert('Congratulations, you are now signed up to our conference list!');
  }
  
}
document.getElementById("myform").addEventListener('submit', checksubmit);

// check the email address against a regular expression
function checkemail() {
  var emailbutton = document.getElementById("email");
  var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(emailbutton.value.match(emailformat))
  {
    return true;
  }
  else
  {
    // if your entry is not in the emailformat defined above"
    alert("Email validation failed.\nPlease enter a valid email address.");
    return false;
  }
}*/
function validateForm()  {
	var a=document.forms["myForm"]["firstname"].value;
	var b=document.forms["myForm"]["lastname"].value;
	var c=document.forms["myForm"]["Email"].value;
	
	if(a == "" )
	{
		alert("First Name should be filled");
		return false;
	}
	else if(b == "" )
	{
		alert("Last Name should be filled");
		return false;
	}
	else if(c == "" )
	{
		alert("Email should be filled");
		return false;
	}
	else{
		alert("Thank you for signing up! We will email you further details.");
	}
}
