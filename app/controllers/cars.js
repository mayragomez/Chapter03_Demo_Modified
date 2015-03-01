//controllers/cars.js
function transform(model){
	
	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

//show only cars made by Honda
function filter(collection)
{
	return collection.where(
		{
			make: 'Honda'
		}
	);
}

//free model-view data binding resources when view controller closes
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

$.table.addEventListener('click', function(_event){
	
	// get the correct model
	var model = Alloy.Collections.cars.getByCid(_event.rowData.modelId);
	
	//create the controller and pass in the model
	var detailController = Alloy.createController("detail",
	{
		
		data: model
	});
	
	//get view returns the root view when no view ID is provided
	detailController.getView().open(
		{
			modal: true	
		});
});