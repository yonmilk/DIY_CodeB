///////////////////////////////////////////////////////
// 2020-12-28 static 카테고리
///////////////////////////////////////////////////////

Blockly.JavaScript['static_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['statistics1'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['statistics2'] = function (block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'va1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'va2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

////////////////////////////////////
/// random 블록
////////////////////////////////////

Blockly.JavaScript['random_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['random1_integer'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'va1', Blockly.JavaScript.ORDER_ATOMIC);
  //var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['random1_choice'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'va2', Blockly.JavaScript.ORDER_ATOMIC);
  //var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['random1_shuffle'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'va3', Blockly.JavaScript.ORDER_ATOMIC);
  //var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['random2'] = function (block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'va1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'va2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.JavaScript['random3'] = function (block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'va1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'va2', Blockly.JavaScript.ORDER_ATOMIC);
  //var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.Python.ORDER_ATOMIC];
};