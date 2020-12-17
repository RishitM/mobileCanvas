var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    color = "black";
    width_of_line = 2;
    width = screen.width;
    new_width = width-70;
    height = screen.height;
    new_height = height-300;
    if (width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {
    

         current_position_of_x = e.touches[0].clientX- canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStlye=color;
ctx.lineWidth=5;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_x , current_position_of_y);
ctx.stroke()
        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
        
    }
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
 
}