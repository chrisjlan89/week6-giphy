var actors = ["Seth Rogen" , "James Franco" , "Paul Rudd" , "Chris Hemsworth", "Mark Hamill" , "Dwanye Johnson" , "Chris Pratt" , "Gal Gadot" , "Charlize Theron" , "Amy Poehler", ""]


var gotCharacters = ["Arya Stark" , "Jon Snow", "Joffery Baratheon", "Ygritte", "Danareys Targaryen" , "Tyrion Lannister", "Margery Tyrell", "Cersei Lannister", "Gendry", "The Hound", "Tormund" , "Brianne of Tarth"]







for( var i=0; i < gotCharacters.length; i++){
	 var charBtn =  $("<button>");
	 charBtn.attr("data-char" , gotCharacters[i]);
	 charBtn.addClass("btn btn-success gotCharacters");
	 charBtn.text(gotCharacters[i]);

	 $("#buttonsGoHere").append(charBtn);
     
	}



 $("button").on("click", function() {
      var person = $(this).attr("data-char");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs").prepend(gifDiv);

        }


                  });
    });
      	



       






