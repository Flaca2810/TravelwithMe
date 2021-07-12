let euroCities=["Paris", "London", "Valetta", "Prague" ,"Rome"];  //1
let newCity=euroCities[1];
console.log(newCity);

// euroCities[0] ="Berlin"           //2
// console.log(euroCities)

euroCities.splice(0,1,"Berlin");  //oder
console.log(euroCities);

// euroCities.length               //3
console.log(euroCities.length);


console.log(euroCities.pop());  //4


// console.log(euroCities.push("Budapest"));  //5

euroCities.push("Budapest");
console.log(euroCities); 

let spliceCities=euroCities.splice(1,2); //6
console.log(spliceCities)

let asianCities= ["Bankok", "Moscow", "Damask", "Dubai", "Bagdad"];
console.log(asianCities);      //7
  

//8

let select=euroCities.splice(1,3);
console.log(select);
 

//9
 worldCities=asianCities.concat(euroCities);
 console.log(worldCities);


//10 
console.log(worldCities.reverse());

11//

worldCities[2] ="Toronto";     
console.log(worldCities);

//12

worldCities.splice(1,0, "Washington");
console.log(worldCities);

//13

console.log(worldCities.join(", "));

//Bonus

let variable="Hello World";
let variableTwo=variable.split(" ");
console.log(variableTwo);

let myArr=variableTwo.reverse();

myArr=myArr.join(" ");

console.log(myArr);


let siblings=["one", "two", "tree"]; //1

let parents=[ "four" , "five"]   //2

let family=parents.concat(siblings);  //3

family.push("myPet");
console.log(family);            //4

// family.reverse();
console.log(family.reverse());

family.indexOf("five");
console.log(family.indexOf("five"));
family[4]="newName";
console.log(family);








