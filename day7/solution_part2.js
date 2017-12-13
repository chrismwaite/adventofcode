const fs = require("fs");
const input_path = "input_sample.txt";

function get_parent_node(key, tower) {
  for(let parent_key in tower) {
    if(tower[parent_key]["children"].indexOf(key) > -1) {
      return tower[parent_key];
    }
  }
  return null;
}

(function() {
  let tower = {};
  let root_node = null;
  
  fs.readFile(input_path, (err, data) => {
    if(err) throw err;
    //console.log(data.toString());
    data.toString().split("\n").forEach(function(row) {
      //console.log(row + "-----");
      if(row.length > 0) {
        row_pieces = row.split("->");
        let key_pieces = row_pieces[0].split("(");
        let key = key_pieces[0].replace(/\s/g, "");
        let weight = key_pieces[1].replace(/\)/g, "");
        let node = { "weight" : weight, "total_weight" : weight, "children" :  (row_pieces[1] ? row_pieces[1].replace(/\s/g, "").split(",") : [])};
        tower[key] = node;
        //console.log(node);
      }
    });

    for(let key in tower) {
      root_node = key;
      root_node_occurences = 0;

      for(let key2 in tower) {
        if(tower[key2]["children"].indexOf(root_node) > -1) {
          root_node_occurences++;
        }
      }

      if(root_node_occurences == 0) {
        break;
      }
    }

    console.log(root_node);


    //foreach node - if it has a parent. add its weight to its total
    for(let key in tower) {
      if(get_parent_node(key, tower)) {
        let parent_node = get_parent_node(key, tower);
        parent_node["total_weight"] = parseInt(parent_node["total_weight"]) + parseInt(tower[key]["weight"]);
      }
    }

    
    console.log(tower);

    for(let key in tower) {
      //check childrens total weights
      //which one is the odd one out?
      let total_weight_counts = {};
      for(let x=0; x<tower[key]["children"]; x++) {
        total_weight_counts[tower[key]["children"][x]] = total_weight_counts[tower[key]["children"][x]] + 1;
      }

      

      //what is the childs weight now? Add the difference between the childs total_weight and what the total_weight should be
    }

    //check the new tree - which child is the odd one out
    









    /*let current_node = tower[root_node];
    let children = current_node["children"];
    

    for(let x=0; x<children.length; x++) {
      let child_node_key = children[x];
      current_node["total_weight"] = parseInt(current_node["total_weight"]) + parseInt(tower[child_node_key]["weight"]);
      //current_node = tower[child_node_key];
    }

    current_node = tower[child_node_key];

    /*while(current_node["children"]) {
     
    }*/

  });

})();