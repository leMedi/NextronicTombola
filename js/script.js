$("#spin").click(function(){
	$(".names-pick").show();
	var machine = $("#names").slotMachine({
		delay: 400
	});
	machine.shuffle( 15, function(){
		console.log("done");
		// later add fireworks animation
	}); 
});



