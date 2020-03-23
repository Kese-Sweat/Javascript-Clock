
//let count = 1
//var id = setInterval(() => {
//$('#seconds').html(count)
//count++

//if (count >= 61){
   // clearInterval(id)
//}
//},1000)

// i need to call a function after 60 secs, 60 mins, 24hrs





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






//function clockWork() {
  //var date = new Date(); /* creating object of Date class */
  //var hour = date.getHours();
  //var min = date.getMinutes();
  //var sec = date.getSeconds();
  //hour = updateTime(hour);
  //min = updateTime(min);
  //sec = updateTime(sec);
  //document.getElementById("practice").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    //var t = setInterval(function(){ currentTime() }, 1000); /* setting timer */
//}

//function updateTime(k) {
  //if (k < 10) {
    //return "0" + k;
  //}
  //else {
    //return k;
  //}
//}

//clockWork(); //* calling currentTime() function to 

