const counter = document.getElementById("display");
// console.log(temp);

const info = document.getElementById("info");

let temp = 0;

const timerBegin = () =>{
    temp = counter.value;
    begin = setInterval("decrement()", 1000);
    info.textContent = "👆👆👆Seconds Remaining...";
    document.getElementById("pause").removeAttribute("disabled", "");
    document.getElementById("start").setAttribute("disabled", "");
    document.getElementById("restart").setAttribute("disabled", "");
}

const pauseBtn = document.getElementById("pause");

const pause = () => {
    if(pauseBtn.textContent == "Pause")
    {
        clearInterval(begin);
        document.getElementById("restart").removeAttribute("disabled", "");
        pauseBtn.textContent = "Resume";
        info.textContent = "Resume Countdown To Continue";
    }
    else
    {
        begin = setInterval("decrement()", 1000);
        document.getElementById("restart").setAttribute("disabled", "");
        pauseBtn.textContent = "Pause";
        info.textContent = "👆👆👆Seconds Remaining...";
    }
}

const decrement = () => {
    if(counter.value == 0)
    {
        clearInterval(begin);
        document.getElementById("pause").setAttribute("disabled", "");
        document.getElementById("restart").removeAttribute("disabled", "");
        document.getElementById("start").removeAttribute("disabled", "");
        info.textContent = "Time Over!!! --> Enter Seconds to Start";
    }
    else
    {
        counter.value -= 1;
        console.log(temp);
    }
}

const restart = () => {
    counter.value = temp;
    pauseBtn.textContent = "Pause";
    document.getElementById("restart").setAttribute("disabled", "");
    document.getElementById("pause").setAttribute("disabled", "");
    document.getElementById("start").removeAttribute("disabled", "");
}