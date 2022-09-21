var timeSpan = document.getElementById("timespan");
var h3Date = document.querySelector("#h3Date");
var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var sound = document.getElementById("sound");
var play = document.getElementById("play");
var pause = document.getElementById("stop");
var snooze = document.querySelector("#snooze");
var setAlarmBtn = document.getElementById("setAlarm");
var stopAlarm = document.getElementById("stopAlarm");
var snoozeAlarmBtn = document.getElementById("snooze-btn");
var hiddenSpan = document.querySelector("#hidden-span");
var visibleSpan = document.querySelector("#visible-span");
var fiveAm = document.querySelector("#five-am");
var sixAm = document.querySelector("#six-am");
var sevenAm = document.querySelector("#seven-am");
var eightAm = document.querySelector("#eight-am");

window.onload = displayTime(), displayDate();

hour.addEventListener("change", function(){
    console.log(hour.value);
});
minute.addEventListener("change", function(){
    console.log(minute.value);
});
sound.addEventListener("change", function(){
    console.log(sound.value);
});
snooze.addEventListener("change", function(){
    console.log(snooze.value);
});

fiveAm.addEventListener("click", function(){
    hour.options[hour.selectedIndex].text = "5 AM";
    minute.options[minute.selectedIndex].text = "00";
});
sixAm.addEventListener("click", function(){
    hour.options[hour.selectedIndex].text = "6 AM";
    minute.options[minute.selectedIndex].text = "00";
});
sevenAm.addEventListener("click", function(){
    hour.options[hour.selectedIndex].text = "7 AM";
    minute.options[minute.selectedIndex].text = "00";
});
eightAm.addEventListener("click", function(){
    hour.options[hour.selectedIndex].text = "8 AM";
    minute.options[minute.selectedIndex].text = "00";
});

play.addEventListener("click", function(){
    if(sound.value === "alarm"){
        soundBuzzer.pause();
        soundRooster.pause();
        playAlarm(snooze.value);
        soundAlarm.play();
        soundAlarm.loop = true;
    }
    if(sound.value === "buzzer"){
        soundAlarm.pause();
        soundRooster.pause();
        soundBuzzer.play();
        soundBuzzer.loop = true;
    }
    if(sound.value === "rooster"){
        soundAlarm.pause();
        soundBuzzer.pause();
        soundRooster.play();
        soundRooster.loop = true;
    }
});

pause.addEventListener("click", function(){
    soundAlarm.pause();
    soundBuzzer.pause();
    soundRooster.pause();
    console.log("stop");
});

setAlarmBtn.addEventListener("click", function(){
    console.log(hour.value + ":" + minute.value);
    // clickHandler();
    alarm();
    // setAlarmBtn.innerHTML = "<span><i class= 'stop circle outline icon'></i> Stop</span>"
    setAlarmBtn.style.display = "none";
    stopAlarm.style.display = "inline";
    hour.disabled = true;
    minute.disabled = true;
    sound.disabled = true;
    snooze.disabled = true;
    stopAlarm.addEventListener("click", function(){
        stopAlarm.style.display = "none";
        setAlarmBtn.style.display = "inline";
        soundAlarm.pause();
        soundBuzzer.pause();
        soundRooster.pause();
        hour.disabled = false;
        minute.disabled = false;
        sound.disabled = false;
        snooze.disabled = false;
        snoozeAlarmBtn.disabled = false;
    });    
});


// var clickCount=0;
// function clickHandler(event){
//     alarm();
//     setAlarmBtn.innerHTML = "<span><i class= 'stop circle outline icon'></i> Stop</span>"
//     hour.disabled = true;
//     minute.disabled = true;
//     sound.disabled = true;
//     snooze.disabled = true;
//   clickCount++;
//   if(clickCount==2){
//     event.target.removeEventListener("click");
//     document.addEventListener('click', function(){
//         setAlarmBtn.innerHTML = "<span><i class='bell outline icon'></i> Set the Alarm</span>"
//         soundAlarm.pause();
//         soundBuzzer.pause();
//         soundRooster.pause();
//         hour.disabled = false;
//         minute.disabled = false;
//         sound.disabled = false;
//         snooze.disabled = false; 
//     });
//   }
// }

// function first(e){
//     alarm();
//     setAlarmBtn.innerHTML = "<span><i class= 'stop circle outline icon'></i> Stop</span>"
//     hour.disabled = true;
//     minute.disabled = true;
//     sound.disabled = true;
//     snooze.disabled = true;
//     e.stopImmediatePropagation();
//     this.removeEventListener("click", first);
//     document.onclick = second;
// }
// function second(){
//     setAlarmBtn.innerHTML = "<span><i class='bell outline icon'></i> Set the Alarm</span>"
//     soundAlarm.pause();
//     soundBuzzer.pause();
//     soundRooster.pause();
//     hour.disabled = false;
//     minute.disabled = false;
//     sound.disabled = false;
//     snooze.disabled = false;
// }

snoozeAlarmBtn.addEventListener("click", function(){
    soundAlarm.pause();
    soundBuzzer.pause();
    soundRooster.pause();
    snoozeAlarmBtn.disabled = true;
    timeFunction();
    // hour.disabled = false;
    // minute.disabled = false;
    // sound.disabled = false;
    // snooze.disabled = false;
});

function timeFunction() {
    setTimeout(function(){
        if(sound.value === "alarm"){
            soundAlarm.play();
        }
        if(sound.value === "buzzer"){
            soundBuzzer.play();
        }
        if(sound.value === "rooster"){
            soundRooster.play();
        }
        hour.disabled = false;
        minute.disabled = false;
        sound.disabled = false;
        snooze.disabled = false;
        snoozeAlarmBtn.disabled = false;
    }, snooze.value);
}

function displayTime(){
  var time = new Date().toLocaleTimeString();
  timeSpan.innerHTML = time;
  setTimeout(displayTime, 1000); 
}

function displayDate(){
    var theDate = new Date().toDateString();
    h3Date.innerHTML = theDate;
    setTimeout(displayDate, 1000);
}

var soundAlarm = new Audio("moon.mp3");
var soundBuzzer = new Audio("squiggle.mp3");
var soundRooster = new Audio("clay.mp3");

function alarm(){
    if(((minute.value == new Date().getMinutes()) && (hour.value == new Date().getHours())) && sound.value === "alarm"){
        console.log("the same");
        soundAlarm.play();
        return soundAlarm.loop = true;
    }
    if(((minute.value == new Date().getMinutes()) && (hour.value == new Date().getHours())) && sound.value === "buzzer"){
        console.log("the same");
        soundBuzzer.play();
        return soundBuzzer.loop = true;
    }
    if(((minute.value == new Date().getMinutes()) && (hour.value == new Date().getHours())) && sound.value === "rooster"){
        console.log("the same");
        soundRooster.play();
        return soundRooster.loop = true;
    }
    setTimeout(alarm, 1000);
}

