
//draw thruster triangle
function showTriangle() {

    //outer triangle
    ctx.strokeStyle = "#332e00";
    ctx.fillStyle = "#332e00";

    ctx.lineWidth = SHIP_SIZE / 15;
    ctx.beginPath();
    ctx.moveTo( //rear left
        ship.x - ship.r * (.5 * Math.cos(ship.a) + 1.1 *  Math.sin(ship.a)),
        ship.y + ship.r * (.5 * Math.sin(ship.a) - 1.1 * Math.cos(ship.a))
    );
    ctx.lineTo( //rear center behind ship
        ship.x - ship.r * 9/3 * Math.cos(ship.a),
        ship.y + ship.r * 9/3 * Math.sin(ship.a) 
    );
    ctx.lineTo( //rear right
        ship.x - ship.r * (.5 * Math.cos(ship.a) - 1.1 * Math.sin(ship.a)),
        ship.y + ship.r * (.5 * Math.sin(ship.a) + 1.1 * Math.cos(ship.a))
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


     //draw the red thruster triangle
     ctx.fillStyle = "red";
     ctx.strokeStyle = "yellow";
     ctx.lineWidth = SHIP_SIZE / 15;
     ctx.beginPath();
     ctx.moveTo( //rear left
         ship.x - ship.r * (1 * Math.cos(ship.a) + 0.5 *  Math.sin(ship.a)),
         ship.y + ship.r * (1 * Math.sin(ship.a) - 0.5 * Math.cos(ship.a))
     );
     ctx.lineTo( //rear center behind ship
         ship.x - ship.r * 7/3 * Math.cos(ship.a),
         ship.y + ship.r * 7/3 * Math.sin(ship.a) 
     );
     ctx.lineTo( //rear right
         ship.x - ship.r * (1 * Math.cos(ship.a) - 0.5 * Math.sin(ship.a)),
         ship.y + ship.r * (1 * Math.sin(ship.a) + 0.5 * Math.cos(ship.a))
     );
     ctx.closePath();
     ctx.fill();
     ctx.stroke();


     //smaller inner thruster triangle
     ctx.strokeStyle = "yellow";
     ctx.lineWidth = SHIP_SIZE / 10;
     ctx.beginPath();
     ctx.moveTo( //rear left
         ship.x - ship.r * (1.3 * Math.cos(ship.a) + 0.02 *  Math.sin(ship.a)),
         ship.y + ship.r * (1.3 * Math.sin(ship.a) - 0.02 * Math.cos(ship.a))
     );
     ctx.lineTo( //rear center behind ship
         ship.x - ship.r * 1.4 * Math.cos(ship.a),
         ship.y + ship.r * 1.4 * Math.sin(ship.a) 
     );
     ctx.lineTo( //rear right
         ship.x - ship.r * (1.3 * Math.cos(ship.a) - 0.02 * Math.sin(ship.a)),
         ship.y + ship.r * (1.3 * Math.sin(ship.a) + 0.02 * Math.cos(ship.a))
     );
     ctx.closePath();
     ctx.fill();
     ctx.stroke();
}