var stage, mouseTarget, clicked, mouse1, mouse2, mouse3;
    var tweenmouse1, tweenmouse2, tweenmouse3;
    var img;
    var x  ;
    var y ;
    function init(){
        stage = new createjs.Stage("demoCanvas"); 

        img2 = new Image();
        img2.src = "deadmouse.png";

        img = new Image();
        img.src = 'mouse.png';
        img.onload = loadMice;
    }

    function loadMice(event){   
        var image = event.target;
        var image2 = img2;
        var container = new createjs.Container();
        
        mouse1 = new createjs.Bitmap(image);
        mouse2 = new createjs.Bitmap(image);
        mouse3 = new createjs.Bitmap(image);
        mouse4 = new createjs.Bitmap(image);
        mouse5 = new createjs.Bitmap(image);
        mouse6 = new createjs.Bitmap(image);
        mouse7 = new createjs.Bitmap(image);
        mouse8 = new createjs.Bitmap(image);
        mouse9 = new createjs.Bitmap(image);
        mouse10 = new createjs.Bitmap(image);
        deadmouse1 = new createjs.Bitmap(image2);
        deadmouse2 = new createjs.Bitmap(image2);
        deadmouse3 = new createjs.Bitmap(image2);
        deadmouse4 = new createjs.Bitmap(image2);
        deadmouse5 = new createjs.Bitmap(image2);
        deadmouse6 = new createjs.Bitmap(image2);
        deadmouse7 = new createjs.Bitmap(image2);
        deadmouse8 = new createjs.Bitmap(image2);
        deadmouse9 = new createjs.Bitmap(image2);
        deadmouse10 = new createjs.Bitmap(image2);

        mouse1.mouseEnabled = true;
        mouse2.mouseEnabled = true;
        mouse3.mouseEnabled = true;
        mouse4.mouseEnabled = true;
        mouse5.mouseEnabled = true;
        mouse6.mouseEnabled = true;
        mouse7.mouseEnabled = true;
        mouse8.mouseEnabled = true;
        mouse9.mouseEnabled = true;
        mouse10.mouseEnabled = true;

        mouse1.addEventListener("click", cM1);
        mouse2.addEventListener("click", cM2);
        mouse3.addEventListener("click", cM3);
        mouse4.addEventListener("click", cM4);
        mouse5.addEventListener("click", cM5);
        mouse6.addEventListener("click", cM6);
        mouse7.addEventListener("click", cM7);
        mouse8.addEventListener("click", cM8);
        mouse9.addEventListener("click", cM9);
        mouse10.addEventListener("click", cM10);

        positionMouse(mouse1);
        positionMouse(mouse2);
        positionMouse(mouse3);
        positionMouse(mouse4);
        positionMouse(mouse5);
        positionMouse(mouse6);
        positionMouse(mouse7);
        positionMouse(mouse8);
        positionMouse(mouse9);
        positionMouse(mouse10);
        positionMouse(deadmouse1);
        positionMouse(deadmouse2);
        positionMouse(deadmouse3);
        positionMouse(deadmouse4);
        positionMouse(deadmouse5);
        positionMouse(deadmouse6);
        positionMouse(deadmouse7);
        positionMouse(deadmouse8);
        positionMouse(deadmouse9);
        positionMouse(deadmouse10);

        mouse1.regX = mouse1.image.width/2|0;
        mouse1.regY = mouse1.image.height/2|0;

        mouse2.regX = mouse1.image.width/2|0;
        mouse2.regY = mouse1.image.height/2|0;

        mouse3.regX = mouse1.image.width/2|0;
        mouse3.regY = mouse1.image.height/2|0;

        mouse4.regX = mouse4.image.width/2|0;
        mouse4.regY = mouse4.image.height/2|0;

        mouse5.regX = mouse5.image.width/2|0;
        mouse5.regY = mouse5.image.height/2|0;

        mouse6.regX = mouse6.image.width/2|0;
        mouse6.regY = mouse6.image.height/2|0;

        mouse7.regX = mouse7.image.width/2|0;
        mouse7.regY = mouse7.image.height/2|0;

        mouse8.regX = mouse8.image.width/2|0;
        mouse8.regY = mouse8.image.height/2|0;

        mouse9.regX = mouse9.image.width/2|0;
        mouse9.regY = mouse9.image.height/2|0;

        mouse10.regX = mouse10.image.width/2|0;
        mouse10.regY = mouse10.image.height/2|0;

 
        container.addChild(mouse1); 
        container.addChild(mouse2);
        container.addChild(mouse3);
        container.addChild(mouse4); 
        container.addChild(mouse5); 
        container.addChild(mouse6); 
        container.addChild(mouse7); 
        container.addChild(mouse8); 
        container.addChild(mouse9); 
        container.addChild(mouse10);
        container.addChild(deadmouse1); 
        container.addChild(deadmouse2); 
        container.addChild(deadmouse3); 
        container.addChild(deadmouse4); 
        container.addChild(deadmouse5); 
        container.addChild(deadmouse6); 
        container.addChild(deadmouse7); 
        container.addChild(deadmouse8); 
        container.addChild(deadmouse9); 
        container.addChild(deadmouse10); 

        stage.addChild(container);

        createjs.Ticker.addEventListener("tick", handleTick);

        stage.update();
        
        var mouseX = 0;

        function cM1(){
            deadmouse1.x = mouse1.x;
            deadmouse1.y = mouse1.y;

            container.removeChild(mouse1);
            playSound();
        }

        function cM2(){
            deadmouse2.x = mouse2.x;
            deadmouse2.y = mouse2.y;

            container.removeChild(mouse2);
            playSound();
        }

        function cM3(){
            deadmouse3.x = mouse3.x;
            deadmouse3.y = mouse3.y;

            container.removeChild(mouse3);
            playSound();
        }

        function cM4(){
            deadmouse4.x = mouse4.x;
            deadmouse4.y = mouse4.y;

            container.removeChild(mouse4);
            playSound();
        }

        function cM5(){
            deadmouse5.x = mouse5.x;
            deadmouse5.y = mouse5.y;
            
            container.removeChild(mouse5);
            playSound();
        }

        function cM6(){
            deadmouse6.x = mouse6.x;
            deadmouse6.y = mouse6.y;
            
            container.removeChild(mouse6);
            playSound();
        }

        function cM7(){
            deadmouse7.x = mouse7.x;
            deadmouse7.y = mouse7.y;
            
            container.removeChild(mouse7);
            playSound();
        }

        function cM8(){
            deadmouse8.x = mouse8.x;
            deadmouse8.y = mouse8.y;
            
            container.removeChild(mouse8);
            playSound();
        }

        function cM9(){
            deadmouse9.x = mouse9.x;
            deadmouse9.y = mouse9.y;
            
            container.removeChild(mouse9);
            playSound();
        }

        function cM10(){
            deadmouse10.x = mouse10.x;
            deadmouse10.y = mouse10.y;
            
            container.removeChild(mouse10);
            playSound();
        }

        function playSound () {
            document.getElementById('play').play();
        }
    }

    function positionMouse(mouse){
        mouse.x = demoCanvas.width + Math.random()*500;
        mouse.y = demoCanvas.height * Math.random()|0 + 10;;
        mouse.moveDistance = (Math.random()*7)+4; //just some random distance
    }

    

    function handleTick(){
        if(mouse1.x > -100){
            mouse1.x -= mouse1.moveDistance;
        }

        if(mouse2.x > -100){
            mouse2.x -= mouse2.moveDistance;
        }

        if(mouse3.x > -100){
            mouse3.x -= mouse3.moveDistance;
        }

        if(mouse4.x > -100){
            mouse4.x -= mouse4.moveDistance;
        }

        if(mouse5.x > -100){
            mouse5.x -= mouse5.moveDistance;
        }

        if(mouse6.x > -100){
            mouse6.x -= mouse6.moveDistance;
        }

        if(mouse7.x > -100){
            mouse7.x -= mouse7.moveDistance;
        }

        if(mouse8.x > -100){
            mouse8.x -= mouse8.moveDistance;
        }

        if(mouse9.x > -100){
            mouse9.x -= mouse9.moveDistance;
        }

        if(mouse10.x > -100){
            mouse10.x -= mouse10.moveDistance;
        }

        stage.update();
    }

    //RUN THE PROGRAM
    init();