

function startTimer(minutes, seconds, hours) {
// timer = duration

    setInterval(function () {
		
 

        display.textContent = hours + ":"+ minutes + ":" + seconds;

		
		if (--seconds<0) {
			--minutes;
			seconds=59;
		}
		
		else if (--seconds<0 && --minutes<0) {
			--hours;
			seconds =59;
			minutes=59;
		}
		
		
    }, 1000);
}

window.onload = function () {
	

    document.getElementById("mybutton").onclick = function() {
		var dur_hours = document.getElementById("hoursTimer").value;
		var dur_minutes = document.getElementById("minutesTimer").value;
		var dur_seconds = document.getElementById("secondsTimer").value;
		display = document.getElementById("display");
		startTimer(parseInt(dur_minutes, 10), parseInt(dur_seconds, 10), parseInt(dur_hours, 10), display);

	}

}