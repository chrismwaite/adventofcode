//const input = "325489";

//326041
const input = 62;

(function() {
  let grid_size_x=1;
  let grid_size_y=1;
  let previous_value=1;
  let layer=0;
  
  while(previous_value<input) {
    grid_size_x+=2;
    grid_size_y+=2;
    layer++;
    previous_value=grid_size_x*grid_size_y;
  }

  let diff = previous_value-input;


  //then (x1,y1)(x1,y1) and (x2,y2)=|x2−x1|+|y2−y1| ((6,2) and (3,7) would be |3−6|+|7−2|=3+5=8 units)
  console.log(layer);
  console.log(grid_size_x);
  console.log(diff);
  //console.log("You are at x:" + Math.abs(x_coord) + " y:" + y_coord);
  //console.log(previous_value);
  //console.log(x);
  //console.log(input/x);
})();


