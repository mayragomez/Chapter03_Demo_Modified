//controllers/cars.js
function transform(model) {
	//need to conver the model to a JSON object
	var carObject = model.toJSON();
	return {
		"title" : carObject.model + " by " +carObject.make,
		"id" : model.cid
	};
}

//show only cars made by Honda
function filter(collection) {
	return collection.where({
		make : 'Honda'
	});
}

//Free model-view data binding reources when ciew controller
//closes
$.mainWindow.addEventListener('close', function() {
	$.destroy();
});


$.table.addEventListener('click', function(_event){
	
	//get the correct model
	var model = Alloy.Collections.cars._getByCid(_event.rowData.modeId);

	//create the controller and pass the model to it
	var detailController = Alloy.createController("detail",
	{
		data: model
	});
	
	//get view returns to root view when no view ID is provided
	detailController.getView().open(
		{
			modal: true	
		}
	);
	
});
