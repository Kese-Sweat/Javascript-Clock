


function clockWork(){
    let date = new Date ();
    let hour = date.getHours();
    let min = date.getMinutes ();
    let sec = date.getSeconds ();
    
  

 

    let time = hour + ":" + min + ":" + sec;

    let myInterval = setInterval(()=>{
        clockWork()
    }, 1000)

    $('#myClock').html(time)

}clockWork() ;








