//controllers/index.js

//defining the collection in the controller rather than the view
Alloy.Collections.instance("cars");

//create a new controller for view-controlled pair
//that will eventually render the table
var carsController = Alloy.createController("cars");

//add the data to the collection after the
//  view-controller pair is created
Alloy.Collections.cars.reset([{
			"make":"Honda",
		 	"model":"Civic"
		},{
			"make":"Honda",
			"model":"Accord"
		},{
			"make":"Ford",
			"model":"Escape"
		},{
			"make":"Ford",
			"model":"Mustang"
		},{
			"make":"Nissan",
			"model":"Altima"
		}]);

//open the view to show table
carsController.mainWindow.open();