var actors = ["Seth Rogen" , "James Franco" , "Paul Rudd" , "Chris Hemsworth", "Mark Hamill" , "Dwanye Johnson" , "Chris Pratt" , "Gal Gadot" , "Charlize Theron" , "Amy Poehler", ""]


var gotCharacters = ["Arya Stark" , "Jon Snow", "Joffery Baratheon", "Ygritte", "Daenerys Targaryen" , 
"Tyrion Lannister", "Margery Tyrell", "Cersei Lannister", "Gendry", "The Hound", 
"Tormund" , "Brienne of Tarth"]

var userChar

// Accepts User Input on click of submit
$("#submit").on("click", function (event){
  event.preventDefault();
 // Gets the value of character name and stores it to  userChar 
   userChar = $("#charName").val().trim();
  console.log(userChar)
  
 // userChar.push(gotCharacters);
 // gotCharacters.push(userChar);




  

   
    var charBtn =  $("<button>");
   charBtn.attr("data-char" , userChar);
   charBtn.addClass("btn btn-success gotCharacters");
   charBtn.text(userChar);

   
   $("#buttonsGoHere").append(charBtn);
});


for( var i=0; i < gotCharacters.length; i++){
	 var charBtn =  $("<button>");
	 charBtn.attr("data-char" , gotCharacters[i]);
	 charBtn.addClass("btn btn-success gotCharacters");
	 charBtn.text(gotCharacters[i]);

	 $("#buttonsGoHere").append(charBtn);
   $("#gifs").empty();
     
	}



 $("body").on("click", ".gotCharacters", function(event){
     event.preventDefault();
     console.log(gotCharacters);
     $("#gifs").empty();
      var person = $(this).attr("data-char");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          console.log(response.data);
for (var i = 0; i < results.length; i++) {
            
            if(rating == 'pg OR g');

            var h2 = $("<h2>").text("Rating: " + rating);

            h2.attr("class" , "rating");
         
            var gifDiv = $("<div class='gif'>" + h2);

            var rating = results[i].rating;

            

            

            var charImage = $("<img>");

            
            charImage.attr("class", "gif" );
            charImage.attr("src", results[i].images.fixed_height_still.url);
            charImage.attr("data-still",results[i].images.fixed_height_still.url);
            charImage.attr("data-animate",results[i].images.fixed_height.url );
            charImage.attr("data-state", "still");     
        
        
          
            gifDiv.prepend(h2);
            gifDiv.prepend(charImage);
            

            $("#gifs").prepend(gifDiv);

        }



                  });
    });



         $("body").on("click", ".gif" , function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });





       






