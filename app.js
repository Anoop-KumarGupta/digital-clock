
const date=document.getElementById("date");
const time=document.getElementById("time");


const defaultRunning=setInterval(function(){
    const d=new Date();
    date.innerHTML=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
    time.innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
},1000);


let runningTimeInterval;
function Start(){
        runningTimeInterval=setInterval(function(){
        const d=new Date();
        date.innerHTML=`${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`;
        time.innerHTML=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    },1000);
}


function Stop(){
    clearInterval(defaultRunning);
    clearInterval(runningTimeInterval);
}