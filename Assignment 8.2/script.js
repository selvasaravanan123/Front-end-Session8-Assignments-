$(document).ready(function(){

		console.log("ready function called");
	
		$("#login").hide();
		$("#signup").hide();
	
	$("#loginButton").click(function(){
		console.log("button clicked");
		$("#login").show();
		$("#loginButton").hide();
		$("#signupButton").hide();

	});
	$("#signupButton").click(function(){
		console.log("button clicked");
		$("#signup").show();
		$("#loginButton").hide();
		$("#signupButton").hide();
		$("#login").hide();

	});
	$("#backButton").click(function(){
		console.log("button clicked");
		$("#signup").hide();
		$("#loginButton").show();
		$("#signupButton").show();
		$("#login").hide();

	});

	$("#submitlogin").click(function(){
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		sessionStorage.isfirstTime = true;

		console.log(email+"4444");
		var result;
		if(localStorage.users)
		{
			var result = null;
			var users = JSON.parse(localStorage.users);
			for (var i = 0; i < users.length; i++) { 
  				if (users[i].email === email) { 
    			result = users[i];
    			break;
  				} 
			}
		}
		

		if(result && result.password === password)
		{
			console.log("email and password match");
			document.getElementById("usernamematch").innerHTML = "user and password match";
		}
		else {
			console.log("email and password does not match");
			document.getElementById("usernamematch").innerHTML = "user and password does not match";
		}
		$("#login").show();
		$("#loginButton").hide();
		$("#signupButton").hide();
		$("#signup").hide();
		return false;

		
	});

	$("#submitsignup").click(function(){
		console.log("signup");
		sessionStorage.isfirstTime = true;

		var emailvalue = document.getElementById("email1").value;
		var passwordvalue = document.getElementById("password1").value;

		var newUser = {email :emailvalue,
						password : passwordvalue}
		var users;
		localStorage.clear();

		console.log(email+"4444");
		if(typeof(Storage) !== "undefined") {
		if(localStorage.users)
		{
			users = JSON.parse(localStorage.users);
			users.push(newUser);
			localStorage.setItem("users", JSON.stringify(users));
		}
		else {
			users = [newUser]
			localStorage.setItem("users", JSON.stringify(users));
			//localStorage.users.push(newUser);
				
		}
	
	}

		$("#login").hide();
		$("#loginButton").hide();
		$("#signupButton").hide();
		$("#signup").show();
		return false;
		
		
	});
});