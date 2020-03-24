


function clockWork(){// created an object with different variables
    let date = new Date ();
    let hour = date.getHours();
    let min = date.getMinutes ();
    let sec = date.getSeconds ();
    
  

 

    let time = hour + ":" + min + ":" + sec;

    let myInterval = setInterval(()=>{
        clockWork()
    }, 1000)// function is called every second

    $('#myClock').html(time)

}clockWork() ; // initiates the process








