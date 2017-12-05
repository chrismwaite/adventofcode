const input = 325489;

(function() {
  let grid_size_x=1;
  let grid_size_y=1;
  let bottom_right_value=1;
  let layer=0;
  
  while(bottom_right_value<input) {
    grid_size_x+=2;
    grid_size_y+=2;
    layer++;
    bottom_right_value=grid_size_x*grid_size_y;
  }

  //bottom right coordinates
  x_coord = layer;
  y_coord = -layer;

  let diff = bottom_right_value-input;
  let sides = Math.floor(diff/(grid_size_x-1));
  let units = diff%(grid_size_x-1);

  let direction = "left";

  for(let x=0; x<sides; x++) {
    if(x==0) {
      x_coord -= (grid_size_x-1);
      direction = "left";
    }
    else if(x==1) {
      y_coord += (grid_size_x-1);
      direction = "up";
    }
    else if(x==2) {
      x_coord += (grid_size_x-1);
      direction = "right";
    }
    else if(x==3) {
      y_coord -= (grid_size_x-1);
      direction = "down";
    }
  }

  if(direction == "left") {
    y_coord += units;
  }
  else if(direction == "up") {
    x_coord += units;
  }
  else if(direction == "right") {
    y_coord -= units;
  }
  else if(direction == "down") {
    x_coord -= units;
  }

  let steps = Math.abs(x_coord+y_coord);

  console.log("Number is at x:" + x_coord + " y:" + y_coord);
  console.log(steps);
})();


