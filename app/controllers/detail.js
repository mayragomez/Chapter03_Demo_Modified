var args = arguments[0] || {};
//close the window when button is clicked 
$.closeBtn.addEventListener('click', function(){
	$.detailWindow.close();
});

//instance variable used in data binding
//we do this set here to trigger the events
//that wil cause the data to be rendered
$.car.set(args.data);

//free model-view data binding resources when this 
//view-controller closes
$.detailWindow.addEventListener('close', function() {
	$.destroy();
});
