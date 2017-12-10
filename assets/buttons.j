var actors = ["Seth Rogen" , "James Franco" , "Paul Rudd" , "Chris Hemsworth", "Mark Hamill" , "Dwanye Johnson" , "Chris Pratt" , "Gal Gadot" , "Charlize Theron" , "Amy Poehler", ""]


var GotCharacters = ["Arya Stark" , "Jon Snow", "Joffery Baratheon", "Ygritte", "Danareys Targaryen" , "Tyrion Lannister", "Margery Tyrell", "Cersei Lannister", "Gendry", "The Hound", "Tormund" , "Brianne of Tarth"]


var actor =  $("<button>");







actor.attr("id", "item-" + toDoCount);
actor.append(" " + toDoTask);

var buttons = {

IntializeButtons : function (){
	for( var i=0; i < actors.length; i++){
	 actor.attr("id", "" + actors);
     
	}
}




};