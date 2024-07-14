// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */


var movie1;
var movie2;
var movie3;
var movie4;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

movie4 = {
  title: "Despicable me 4",
  actors: "Pierre Coffin, Steve Carell",
  directors: "Chris Renaud, Patrick Delage"
};

console.log("Movie information for " + movie1.title + "\n" +  "------------------------------\n" + "Actors: " + movie1.actors + "\n" + 
	"Directors: " + movie1.directors + "\n"  +  "------------------------------------------------------------------------------------------------------------------------\n\n\n" +
	
	"Movie information for " + movie2.title + "\n" +  "------------------------------\n" + "Actors: " + movie2.actors + "\n" + 
	"Directors: " + movie2.directors + "\n"  +  "------------------------------------------------------------------------------------------------------------------------\n\n\n" +

	"Movie information for " + movie3.title + "\n" +  "------------------------------\n" + "Actors: " + movie3.actors + "\n" + 
	"Directors: " + movie3.directors + "\n"  +  "------------------------------------------------------------------------------------------------------------------------\n\n\n" + 

	"Movie information for " + movie4.title + "\n" +  "------------------------------\n" + "Actors: " + movie4.actors + "\n" + 
	"Directors: " + movie4.directors + "\n"  +  "------------------------------------------------------------------------------------------------------------------------\n\n\n" );

