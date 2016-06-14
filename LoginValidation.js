// JavaScript Document

var attempt = 3; 			// Variable to count number of attempts.
var count =0;
// Below function Executes on click of login button.
function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "username" && password == "password")
	{
			alert ("Login successful");
			window.location = "Question01.html"; // Redirecting to other page.
			return false;
	}
	else
	{
			attempt --;// Decrementing by one.
			alert("You have left "+attempt+" attempt;");
			// Disabling fields after 3 attempts.
			if( attempt == 0){
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
			}
	}
}
function goToQuestion02()
{
	if (document.getElementById('r1').checked) {	 
			rate_value = document.getElementById('r1').value;
			 window.location = "Question02.html"; // Redirecting to other page.
			count++;
			return count;
	}
	else if (document.getElementById('r2').checked) {
 			 rate_value = document.getElementById('r2').value;
			 window.location = "Question02.html"; // Redirecting to other page.
			return false;
	}
	else if (document.getElementById('r3').checked) {
 			 rate_value = document.getElementById('r3').value;
			 window.location = "Question02.html"; // Redirecting to other page.
			return false;
	}
	else if (document.getElementById('r4').checked) {
 			 rate_value = document.getElementById('r4').value;
			 window.location = "Question02.html"; // Redirecting to other page.
			return false;
	}
	
}

function goToQuestion03()
{
	if (document.getElementById('r1').checked) {	 
			rate_value = document.getElementById('r1').value;
			 window.location = "Question03.html"; // Redirecting to other page.
			return false; 
	}
	else if (document.getElementById('r2').checked) {
 			 rate_value = document.getElementById('r2').value;
			 window.location = "Question03.html"; // Redirecting to other page.
			
			count++
			return count;
	}
	else if (document.getElementById('r3').checked) {
 			 rate_value = document.getElementById('r3').value;
			 window.location = "Question03.html"; // Redirecting to other page.
			return false;
	}
	else if (document.getElementById('r4').checked) {
 			 rate_value = document.getElementById('r4').value;
			 window.location = "Question03.html"; // Redirecting to other page.
			return false;
	}
	
}

function goToQuestion04()
{
	if (document.getElementById('r1').checked) {	 
			rate_value = document.getElementById('r1').value;
			 window.location = "Question04.html"; // Redirecting to other page.
			
			count++;
			return count;
	}
	else if (document.getElementById('r2').checked) {
 			 rate_value = document.getElementById('r2').value;
			 window.location = "Question04.html"; // Redirecting to other page.
			return false
	}
	else if (document.getElementById('r3').checked) {
 			 rate_value = document.getElementById('r3').value;
			 window.location = "Question04.html"; // Redirecting to other page.
			return false;
	}
	else if (document.getElementById('r4').checked) {
 			 rate_value = document.getElementById('r4').value;
			 window.location = "Question04.html"; // Redirecting to other page.
			return false;
	}
	
}

function goToSurvey()
{
	if (document.getElementById('r1').checked) {	 
			rate_value = document.getElementById('r1').value;
			 window.location = "Survey.html"; // Redirecting to other page.
			return false; 
	}
	else if (document.getElementById('r2').checked) {
 			 rate_value = document.getElementById('r2').value;
			 window.location = "Survey.html"; // Redirecting to other page.
			return false
	}
	else if (document.getElementById('r3').checked) {
 			 rate_value = document.getElementById('r3').value;
			 window.location = "Survey.html"; // Redirecting to other page.
			return false;
	}
	else if (document.getElementById('r4').checked) {
 			 rate_value = document.getElementById('r4').value;
			 window.location = "Survey.html"; // Redirecting to other page.
			count++;
			return count;
	}
	
}

function goToScoreCard()
{
	alert("Thank you for participating in the survey! ");
	window.location = "ScoreCard.html"; // Redirecting to other page.
	return false;
}

function goToSameQuestion()
{
	alert("Please attempt the question to continue");
	document.getElementById("r1").checked = true;
}
function skipToNext()
{
	alert("Are you sure you want to skip the survey?");
	window.location = "ScoreCard.html"; // Redirecting to other page.
	return false;
}

function goToLogin()
{
	
	alert("Thank you for taking the test from our center!");
	window.location = "login.html"; // Redirecting to other page.
	return false;
}

function writeQuantResult()
{
  count = count+1;
  document.getElementById("quant1").innerHTML = count; 
}
function writeReadingResult()
{
  document.getElementById("read1").innerHTML = count; 
}
function writeAVResult()
{
  document.getElementById("av1").innerHTML = count; 
}
var $div = jQuery("#agetext");
// hidden by default
$div.hide();

// when a click occur on an input[type=radio] element
jQuery("form").on("click", "input[type=radio]", function() 
{
    // does the element clicked has the value "yes" ?
    if ($(this).val()=="option1") 
	{
        $div.show();
    }
    else 
	{
        $div.hide();
    }
});