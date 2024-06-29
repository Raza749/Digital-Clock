

// Start Adding functionality to the Digital Clock

function updateTime(){
    const showTime = document.querySelector('.show');
    const now = new Date();
    const time = now.toLocaleTimeString();
    showTime.innerText = time;

}
setInterval(updateTime,1000);
