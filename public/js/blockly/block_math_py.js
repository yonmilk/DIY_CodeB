Blockly.Python['operation_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import math \nfrom statistics import *\nimport random\n";
  return code;
};

Blockly.Python['math_library'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "import math \n";
    return code;
  };

  Blockly.Python['math1'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    let code;
    if(dropdown_name === 'minus'){
      code = `-${value_name}`
    }
    else if(dropdown_name === 'pow10'){
      code = `math.pow(10,${value_name})`
    }
    else {
      code = `math.${dropdown_name}(${value_name})`;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['math2'] = function (block) {
    var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    if (dropdown_name == 1)   var code = "math.gcd" + '(' + value_name1 + ", " + value_name2 + ')';
    else if (dropdown_name == 2) {
      console.log(value_name2)
      if(value_name2 == '') var code = "math.log" + '(' + value_name1 + ')';
      else var code = "math.log" + '(' + value_name1 + ", " + value_name2 + ')';
    }
    else if (dropdown_name == 3) var code = "pow" + '(' + value_name1 + ", " + value_name2 + ')';
    else if (dropdown_name == 3) var code = "math.pow" + '(' + value_name1 + ", " + value_name2 + ')';
    else if (dropdown_name == 4) var code = "math.dist" + '(' + value_name1 + ", " + value_name2 + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['math3'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "math."+dropdown_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['math_tri_func'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    let code = `math.${dropdown_name}(${value_name})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };