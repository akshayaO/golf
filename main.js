
var canvas = new fabric.Canvas('myCanvas')

ball_y=0;
ball_x=0;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric,Image.fromURL("golf-h.png", function(Image){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.ScaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	facrib.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up(){

		if(playery>=0){
			playery = playery - block_height;
			console.log("block image height = " + block_height);
			console.log("when Up arrow key is pressed, X = " +playerx + "Y = "+playery);
			canvas.remove(player_object);
			player_update();
		}
	}
	
	
	function down(){
	
		if(playery<=500){
			playery = playery + block_height;
			console.log("block image height = " + block_height);
			console.log("when down arrow key is pressed, X = " +playerx + "Y = "+playery);
			canvas.remove(player_object);
			player_update();
		}
	}
	
	
	function left(){
	
		if(playerx>0){
			playerx = playerx - block_width;
			console.log("block image width = " + block_width);
			console.log("when left arrow key is pressed, X = " +playerx + "Y = "+playery);
			canvas.remove(player_object);
			player_update();
		}
	}
	
	
	function right(){
	
		if(playerx<=850){
			playerx = playerx + block_width;
			console.log("block image width = " + block_width);
			console.log("when right arrow key is pressed, X = " +playerx + "Y = "+playery);
			canvas.remove(player_object);
			player_update();
		}
	}

