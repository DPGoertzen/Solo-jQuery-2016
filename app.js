$(function(){
  var currentColor = "";
  var countRed = 0;
  var countYellow = 0;
  var countGreen = 0;
  var countBlue = 0;
  var countThis = "";


  $(".color-button").on("click", function(){
    currentColor = $(this).data("color");
    switch(currentColor){
      case "red":
        countRed+=1;
        $("#" + currentColor).text("Total " + currentColor + ":" + countRed);
        break;
      case "yellow":
        countYellow+=1;
        $("#" + currentColor).text("Total " + currentColor + ":" + countYellow);
        break;
      case "green":
        countGreen+=1;
        $("#" + currentColor).text("Total " + currentColor + ":" + countGreen);
        break;
      case "blue":
        countBlue+=1;
        $("#" + currentColor).text("Total " + currentColor + ":" + countBlue);
        break;
    };

    $(".container").append('<div class="color-cube ' + currentColor + '"></div>');



    console.log(currentColor);
  });





});
