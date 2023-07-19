function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5yTbF3DIUOU":
        Script1();
        break;
  }
}

function Script1()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let seconds = 0;
let interval = null;

/* CODE # 02

//Event Listeners


//Update the timer
function timer () {
	seconds++;
	
	player.SetVar("timer",sec);
	
	//Formatting the output 
	


}

timer();



end CODE #02  */


//* CODE # 01

Set up the timer
function startTimer(){
	sec += 1;
	player.SetVar("timer",sec);
	if (sec == 12){
		clearInterval(timerId);
	}
}

//Start the timer
timerId = setInterval(startTimer, 1000);

// END CODE # 01 */
}

