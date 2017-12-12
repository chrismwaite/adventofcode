const fs = require("fs");
const input_path = "input.txt";

(function() {
  let tower = [];
  let root_node = null;

  fs.readFile(input_path, (err, data) => {
    if(err) throw err;
    //console.log(data.toString());
    data.toString().split("\n").forEach(function(row) {
      //console.log(row + "-----");
      row_pieces = row.split("->");
      let key_pieces = row_pieces[0].split("(");
      let node = { "key" : key_pieces[0].replace(/\s/g, ""), "weight" : null, "children" :  (row_pieces[1] ? row_pieces[1].replace(/\s/g, "").split(",") : [])};
      tower.push(node);
    });

    for(let x=0; x<tower.length; x++) {
      root_node = tower[x]["key"];
      root_node_occurences = 0;

      tower.forEach(function(node2) {
        if(node2["children"].indexOf(root_node) > -1) {
          root_node_occurences++;
        }
      });

      if(root_node_occurences == 0) {
        break;
      }
    }

    console.log(root_node);
  });

})();