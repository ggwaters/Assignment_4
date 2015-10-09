// Part One Practice with JavaScript OOP Concepts (10 points)

// Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:

//// Step One Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 
//
//var ANIMAL = ANIMAL || {};
//ANIMAL.Cat = function() {};
//ANIMAL.Dog = function() {};


//// Step Two Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
//
//var Cat = {};
//function Dog() {}

//// Step Three Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
//
//function Cat() {}                                       // error was made from literal object on 13 so made new constructor class
//function Dog() {}
//var Calico = new Cat();
//var Labrador = new Dog();


// Step Four Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.
//
//function Animal() {
//    window.console.log("The Animal has been created.");
//}
//
//// Step Five Now, change the above code so that it uses constructor notation instead. The class should accept a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
//
//function Animal(breed) {
//    window.console.log("The " + breed + " has been created.");
//}
//
//Animal("Labrador");
//
//
//// Step Six Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
//
//function Animal(type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//
//var myDoggie = new Animal("dog", "Retriever", "bronze", "two feet", "three feet");
//window.console.log(myDoggie);
//window.console.log("The " + myDoggie.type + " " + myDoggie.breed + " is " + myDoggie.color + " in color, " + myDoggie.height + " tall, and " + myDoggie.length + " long.");
//
//// Step Seven Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
//
//var Animal = function (type, breed, color, height, length) {
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//};
//
//var myDoggie = new Animal("dog", "Retriever", "bronze", "two feet", "three feet");
//for (var property in myDoggie) {
//    window.console.log(property + ": " + myDoggie[property]);
//};
//
//
//// Step Eight Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
//
//Animal.prototype.speak = function() {
//    if (this.type === "dog") {
//        return ("The " + this.color + " dog is barking!");
//    } else {
//        return ("The " + this.color + " cat is meowing!");
//    }
//};
//
//window.console.log(myDoggie.speak());

// Step Nine Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
//
//function Animal (type, breed, color, height, length) {
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//    var _checkType = function (_type) {
//        if (_type === "dog") {
//            return ("dog");
//        } else {
//            return ("cat");
//        }
//    };
//    this.type = _checkType();
//}
//
//Animal.prototype.speak = function()  {
//   return ("The " + this.type + " has made a noise.");
//};
//
//var myDoggie = new Animal("dog", "Retriever", "bronze", "two feet", "three feet");
//window.console.log(myDoggie.speak());                                                               // returns cat so screwed up if / else statement somehow
//window.console.log(myDoggie.type);


// Step Ten Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.


// Part Two Does My Vehicle Need An Oil Change? (10 points)

//In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:

//// Step One Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).
//
//// Step Two Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.
//
//var Vehicle = function (make, model, totalMiles, lastOilChange) {
//    this._make = make;
//    this._model = model;
//    this._totalMiles = totalMiles;
//    this._drivenMiles = 0;
//    this._type = " ";
//    this._lastOilChange = lastOilChange;
//}
//
//// step Three Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).
//
//var drive = function (miles) {
//    this._drivenMiles += miles;
//    return miles;
//};
//
//window.console.log(drive(15000));

//// Step Four Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).
//
//var checkOil = function (totalMiles, lastOilChange) {
//    this.totalMiles = totalMiles;
//    this.lastOilChange = lastOilChange;
//    if (this.totalMiles - this.lastOilChange >= 3000) {
//        return ("You need an oil change.");
//    } else {
//        return this;                                                  // don't understand return this
//    }
//};
//
//window.console.log(checkOil());
//
////Step Five Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has.
////Within the new Car class, initialize a public property called doorCount and set it equal to the argument.
////Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.
//
//var Car = function(door_count) {
//    this._door_count = door_count;
//    if (this._door_count > 2) {
//        this._type = "Sedan";
//    } else {
//        this.type = "Coupe";
//    }
//};
//
//// Step Six Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 
//
//Car.prototype = new Vehicle("Cadillac", "DeVille", 40000, 35000);
//
//// Step Seven Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.
//
//var myCar = new Car(4);
//
//// Step Eight Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy.
//
//window.console.log(myCar.drive(40000).checkOil());          // obviously not getting this


// The Recipe Card (10 points)	

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper
//
//var Recipe = function (title, servings, ingredients) {
//    this._title = title;
//    this._servings = servings;
//    this._ingredients = ingredients;
//    return (this._title + "\nServes: " + this._servings + "\nIngredients: ");
//    var ingredients = function() {
//        for (var i in this._ingredients) {
//            return (this._ingredients[i]);
//        }
//    }
//}
//
//window.console.log(Recipe("Guacomole", "4", ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro", "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]));

//The Reading List (10 points)
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
//


//Fill in the Blanks (10 points)

//Fill in the blanks to make this program work.
//(function() {
//    var person = {
//        // add code here
//    };
//
//    var car = {
//        // add code here
//    };
//
//    // print vroom vroom
//    car.drive();
//
//    // print 'I'm rich'
//    if (car.price > 100000) {
//        person.buy(car);
//    }
