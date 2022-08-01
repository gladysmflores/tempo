// document.getElementById("rainVid").play();
// console.log("working");

var minute = 24;
var second = 60;

setInterval( function timer(){
  if( minute == 0 && second == 1){
      document.getElementById("countedownTimer").innerHTML = "00:00";
  }else{
      second--;
      if( second == 0 ){
          minute--;
          second = 60;

          if( minute == 0 ){
              minute = minute;
          }
      }
      if( minute.toString().length == 1 ){
          minute = "0" +minute;
      }
      if( second.toString().length ==1 ){
          second = "0"+second;
      }
      document.getElementById("countedownTimer").innerHTML = minute + ":" + second;

  }
}, 1000);
