

function startTimer(minutes, seconds, hours) {

	var IntervalRunning = false;

	document.getElementById("PauseButton").onclick = function() {
			
			if (IntervalRunning) {
				clearInterval(CountSeconds);
				document.getElementById("PauseButton").innerHTML = "Continue";
				IntervalRunning = false;
			}
			
			else {
				document.getElementById("PauseButton").onclick = startTimer(minutes, seconds, hours);
				document.getElementById("PauseButton").innerHTML = "Pause";	
			}
			
		} 
	

   var CountSeconds = setInterval( function () {
   
   		IntervalRunning = true;
   		
   		document.getElementById("ResetButton").onclick = function() {
			
			display.textContent = "";
			clearInterval(CountSeconds);
			document.getElementById("PauseButton").innerHTML = "Pause";
		
		} 
	

   		
   		if ( isNaN(hours) ) 
	  	{
	  		hours=0;
	  	}
  	
  		if ( isNaN(minutes) ) 
	  	{
	  		minutes=0;
	  	}
	  	
	  	if ( isNaN(seconds) ) 
	  	{
	  		seconds=0;
	  	}
  	
   	
		hours = parseInt(hours, 10) < 10 ? "0" + parseInt(hours, 10) : parseInt(hours, 10);
		minutes = parseInt(minutes, 10) < 10 ? "0" + parseInt(minutes, 10) : parseInt(minutes, 10);
        	seconds = parseInt(seconds, 10) < 10 ? "0" + parseInt(seconds, 10) : parseInt(seconds, 10);
		
   		
        
        	display.textContent = hours + ":"+ minutes + ":" + seconds;
		
		--seconds;
	
		if (seconds<0 && minutes == 0 && hours==0) {
			var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/4383');
			audio.play();
			clearInterval(CountSeconds);
		}
	
		else if (seconds<0 && minutes == 0) {
			--hours;
			minutes = 59;
			seconds = 59;
		}
		
		else if (seconds<0)
		{
			--minutes;
			seconds = 59;
		
		}
	
	
		
    }, 1000);
}


	
		

     	document.getElementById("StartButton").onclick = function() {
		var dur_hours = document.getElementById("hoursTimer").value;
		var dur_minutes = document.getElementById("minutesTimer").value;
		var dur_seconds = document.getElementById("secondsTimer").value;
		display = document.getElementById("display");
		startTimer( parseInt(dur_minutes, 10), parseInt(dur_seconds, 10), parseInt(dur_hours, 10) );
		
	}
	
	   
	

   



