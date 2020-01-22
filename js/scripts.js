$(document).ready(function() {

  

  $("form").submit(function(event) {

    var i = $("#one").val();
    var y = $("#two").val();

    i = parseInt(i)
    y = parseInt(y)

    var numbers = 0
    //var final = []

    for (var index=i; index<=y; index += i) {
      numbers += i
      // alert(numbers)
      //$("final").push(parseInt(numbers));
      $("#result").append("<li>" + numbers+ "</li>")
      
    }
    //alert(final)
    // alert(numbers)
 
    
   
   
   
    // Create a variable and assign the value of submitted sentence to it
   // var sentence = $("#sentenceInput").val();
    // Split sentence into an array and save to new variable
   // var sentenceArray = sentence.split(" ");
    // Filter out any word in array with less than 3 characters and saved as new array
   // var filteredSentenceArray = sentenceArray.filter(word => word.length >= 3);
    // Reversed the filtered array
   // filteredSentenceArray.reverse();
    // Converted array into a string with "-" between each item and saved as new variable
   // var filteredSentence = filteredSentenceArray.join('-');
    // Printed result as text in the results div
   // $(".results").text(filteredSentence);

  

    event.preventDefault();
    
  });
});