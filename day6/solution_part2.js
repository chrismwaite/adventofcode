const input="2\t8\t8\t5\t4\t2\t3\t1\t5\t5\t1\t2\t15\t13\t5\t14";
//const input="0\t2\t7\t0";

(function() {
  let banks = input.split("\t");
  for(var i=0; i<banks.length; i++) { banks[i] = parseInt(banks[i], 10); } 
  let block_configurations = [];
  let configuration = banks.join("\t");
  let count = 0;

  while(!block_configurations.includes(configuration)) {
    //store
    console.log(configuration);
    block_configurations.push(configuration);
    let largest_value_in_bank = Math.max(...banks);
    //first occurence of that value in the bank
    let bank = banks.indexOf(largest_value_in_bank);
    console.log("largest value is " + largest_value_in_bank + " in bank " + bank);
    //redistribute
    banks[bank] = 0;
    let current_index = bank;
    for(let x=largest_value_in_bank; x>0; x--) {
      current_index+=1;
      if(current_index > (banks.length-1)) {
        current_index=0;
      }
      banks[current_index] = parseInt(banks[current_index]) + 1;
    }
    count++;
    configuration = banks.join("\t");
  }
  console.log(count-((block_configurations.indexOf(configuration))));
})();