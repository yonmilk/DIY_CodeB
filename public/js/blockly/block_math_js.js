Blockly.JavaScript['operation_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['math_library'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['math1'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.JavaScript['math2'] = function (block) {
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'va1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name2 = Blockly.JavaScript.valueToCode(block, 'va2', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.JavaScript['math_tri_func'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };