const input = 325489;
let map = {};
let x_coord = 0;
let y_coord = 0;

function map_value_at_coordinates(x,y) {
  if(map[x + "," + y]) {
    return map[x + "," + y];
  }
  return 0;
}

function calculate_sum_of_adjacent_squares(x,y) {
  //console.log("calculating adjacent squares for " + x + "," + y);
  sum_of_values = 0;
  sum_of_values += map_value_at_coordinates(x-1,y+1); //NW
  sum_of_values += map_value_at_coordinates(x,y+1); //N
  sum_of_values += map_value_at_coordinates(x+1,y+1); //NE
  sum_of_values += map_value_at_coordinates(x-1,y); //W
  sum_of_values += map_value_at_coordinates(x+1,y); //E
  sum_of_values += map_value_at_coordinates(x-1,y-1); //SW
  sum_of_values += map_value_at_coordinates(x,y-1); //S
  sum_of_values += map_value_at_coordinates(x+1,y-1); //SE
  return sum_of_values;
}

function move(x,y) {
  //up - something left and nothing up
  if(map_value_at_coordinates(x-1,y) > 0 && map_value_at_coordinates(x,y+1) == 0) {
    console.log("moving up");
    y_coord+=1;
  }
  //left - something down and nothing left
  else if(map_value_at_coordinates(x,y-1) > 0 && map_value_at_coordinates(x-1,y) == 0) {
    console.log("moving left");
    x_coord-=1;
  }
  //down - something right and nothing down
  else if(map_value_at_coordinates(x+1,y) > 0 && map_value_at_coordinates(x,y-1) == 0) {
    console.log("moving down");
    y_coord-=1;
  }
  //move right
  else {
    console.log("moving right");
    x_coord+=1;
  }

  console.log("moved to " + x_coord + "," + y_coord);
  value = calculate_sum_of_adjacent_squares(x_coord,y_coord);
  map[x_coord + "," + y_coord] = value;
}

(function() {
  map[x_coord + "," + y_coord] = 1;

  value = 1;
  while(value <= input) {
    move(x_coord,y_coord);
  }

  console.log(map);
  console.log(map[x_coord + "," + y_coord]);
})();
