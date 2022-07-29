//
// document.getElementById("again").addEventListener("click", function(){
//   timer();
// });


  var minute = 4;
  var second = 60;

setInterval( function timer(){
  if( minute == 0 && second == 1){
      document.getElementById("counter").innerHTML = "00:00";
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
      document.getElementById("counter").innerHTML = minute + ":" + second;

  }
}, 1000);

document.getElementById("again").addEventListener("click", function(){
  timer();
});
