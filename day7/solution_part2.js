const fs = require("fs");
const input_path = "input.txt";

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

    //console.log(root_node);

    //console.log(tower);

    for(let key in tower) {
      //if it has children
      if(tower[key]["children"]) {
        let total_weight_counts = {};
        for(let x=0; x<tower[key]["children"].length; x++) {
          //each child added to its children must be balanced
          let child_key = tower[key]["children"][x];
          let total_weight = parseInt(tower[child_key]["weight"]);

          if(tower[child_key]["children"]) {
            for(let a=0; a<tower[child_key]["children"].length; a++) {
              total_weight += parseInt(tower[tower[child_key]["children"][a]]["weight"]);
            }
          }

          //total_weight_counts[total_weight] = {};
          //total_weight_counts[total_weight]["count"] = 1;
          //total_weight_counts[total_weight]["key"] = child_key;

          if(total_weight_counts[total_weight]) {
            total_weight_counts[total_weight]["count"] = parseInt(total_weight_counts[total_weight]["count"]) + 1;
          }
          else {
            total_weight_counts[total_weight] = {};
            total_weight_counts[total_weight]["count"] = 1;
            total_weight_counts[total_weight]["key"] = child_key;
          }
        }

        //console.log(total_weight_counts);

        //this is the one where there is a mismatch in the weights
        if(Object.keys(total_weight_counts).length > 1) {
          //console.log(total_weight_counts);
          //find the one that only has a count of 1, its the odd one out
          let expected_weight = null;
          let child_total_weight = null;

          for(let child_weight in total_weight_counts) {
            if(total_weight_counts[child_weight]["count"] == 1) {
              incorrect_key = total_weight_counts[child_weight]["key"];
              child_total_weight = child_weight;
            }
            else {
              expected_weight = child_weight;
            }
          }
          let current_child_weight = parseInt(tower[incorrect_key]["weight"]);
          //let child_total_weight = parseInt(tower[incorrect_key]["weight"]);
          
          if(child_total_weight > expected_weight) {
            incorrect_key_expected_weight = current_child_weight - (child_total_weight - parseInt(expected_weight));
          }
          else {
            incorrect_key_expected_weight = current_child_weight + (parseInt(expected_weight) - child_total_weight);
          }
          console.log("child weight: " + current_child_weight);
          console.log("child total weight: " + child_total_weight);
          console.log("child expected total weight: " + expected_weight);
        }

      }
      
      //each child added to its children must be balanced
      //or each child needs to be balanced if they have no children




      /*if(get_parent_node(key, tower)) {
        let parent_node = get_parent_node(key, tower);
        parent_node["total_weight"] = parseInt(parent_node["total_weight"]) + parseInt(tower[key]["weight"]);
      }*/
    }





    /*
    //foreach node - if it has a parent. add its weight to its total
    for(let key in tower) {
      if(get_parent_node(key, tower)) {
        let parent_node = get_parent_node(key, tower);
        parent_node["total_weight"] = parseInt(parent_node["total_weight"]) + parseInt(tower[key]["weight"]);
      }
    }

    let incorrect_key = null;
    let incorrect_key_expected_weight = null;

    for(let key in tower) {
      //check childrens total weights
      //which one is the odd one out?
      let total_weight_counts = {};
      for(let x=0; x<tower[key]["children"].length; x++) {
        let child_node = tower[tower[key]["children"][x]];
        if(total_weight_counts[child_node["total_weight"]]) {
          total_weight_counts[child_node["total_weight"]]["count"] = parseInt(total_weight_counts[child_node["total_weight"]]["count"]) + 1;
        }
        else {
          total_weight_counts[child_node["total_weight"]] = {};
          total_weight_counts[child_node["total_weight"]]["count"] = 1;
          total_weight_counts[child_node["total_weight"]]["key"] = tower[key]["children"][x];
        }
      }

      //console.log(total_weight_counts);

      //this is the one where there is a mismatch in the weights
      if(Object.keys(total_weight_counts).length > 1) {
        console.log(total_weight_counts);
        //find the one that only has a count of 1, its the odd one out
        let expected_weight = null;
        for(let child_weight in total_weight_counts) {
          if(total_weight_counts[child_weight]["count"] == 1) {
            incorrect_key = total_weight_counts[child_weight]["key"];
          }
          else {
            expected_weight = tower[total_weight_counts[child_weight]["key"]]["total_weight"];
          }
        }
        let current_child_weight = parseInt(tower[incorrect_key]["weight"]);
        let child_total_weight = parseInt(tower[incorrect_key]["total_weight"]);
        
        if(child_total_weight > expected_weight) {
          incorrect_key_expected_weight = current_child_weight - (child_total_weight - parseInt(expected_weight));
        }
        else {
          incorrect_key_expected_weight = current_child_weight + (parseInt(expected_weight) - child_total_weight);
        }
        //console.log("child weight: " + tower[incorrect_key]["weight"]);
        //console.log("child total weight: " + tower[incorrect_key]["total_weight"]);
        //console.log("child expected total weight: " + expected_weight);
      }


      //what is the childs weight now? Add the difference between the childs total_weight and what the total_weight should be
    }*/

    console.log(incorrect_key);
    console.log(incorrect_key_expected_weight);

  });

})();