/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var changeName1 = document.getElementById("name1");
changeName1.innerHTML =  "Tay-Tay";

/*2. Replace the n/a with the following: 

Project Manager*/

var changePosition2 = document.getElementById("position2");
changePosition2.innerHTML =  "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

var changeAlias3= document.getElementById("alias3");
changeAlias3.innerHTML =  "Concatenation";



/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var changeProfile= document.getElementsByClassName("profile")[0];
changeProfile.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quibusdam fugiat ipsam ea quae eaque nulla, ex expedita mollitia optio cupiditate magni asperiores rerum nemo, perspiciatis amet illo totam aliquid.";


/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/


var changeProfile= document.getElementsByClassName("profile")[2];
changeProfile.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quibusdam fugiat ipsam ea quae eaque nulla, ex expedita mollitia optio cupiditate magni asperiores rerum nemo, perspiciatis amet illo totam aliquid.";



/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/

 var changeName7 = document.createElement("div");
 changeName7.id = "name7";
 changeName7.innerHTML = "Chuck Norris";
 nameBox.appendChild(changeName7);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

 var addAlias8 = document.createElement("div");
 addAlias8.id = "alias8";
 addAlias8.textContent = "The Purple Monster";
 aliasBox.appendChild(addAlias8);


//Final Boss
/*8. Create your own profile.*/





var addName9 = document.createElement("div");
	addName9.id = "nameBox9";
	addName9.innerHTML = "Ella Mae Arana" ;
	putHere.appendChild(addName9);

var addAlias9 = document.createElement("div");
	addAlias9.id = "alias9";
	addAlias9.innerHTML = "Devleague Noob" ;
	putHere.appendChild(addAlias9);

var addDesc9 = document.createElement("div");
	addDesc9.id = "bio";
	addDesc9.innerHTML = "Very Pregnant" ;
	putHere.appendChild(addDesc9);



