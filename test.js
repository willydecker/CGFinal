//~~~~~~~~~~~~~~~~~~~~~~~~~~~~`` working code but has to be done on each mouse
mouse1 = new createjs.Bitmap(image);

positionMouse(mouse1);

mouse1.regX = mouse1.image.width/2|0;
mouse1.regY = mouse1.image.height/2|0;

container.addChild(mouse1);




if(mouse1.x > -100){ ///this is in later function
	mouse1.x -= mouse1.moveDistance;
}





//~~~~~~~~~~~~~~~~~~`test code
var mouse = [];

for (var i = 0; i < 25; i++) {
	mouse[i] = new createjs.Bitmap(image);

	positionMouse(mouse[i]);

	mouse[i].regX = mouse[i].image.width/2|0;
	mouse[i].regY = mouse[i].image.height/2|0;

	container.addChild(mouse[i]);
}






for each (mousey in mouse[]){
	if(mouse[mousey] > -100){
		mouse[mousey].x -= mouse[mousey].moveDistance;
	}
}



