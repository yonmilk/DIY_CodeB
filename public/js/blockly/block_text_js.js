// ////////////////////////////////////////////////////////////////////
// // 2020-12-26
// ////////////////////////////////////////////////////////////////////



Blockly.JavaScript['input'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

 //""없는 문자
 Blockly.JavaScript['char_a_none'] = function(block) {
  var text_char_a_none_val = block.getFieldValue('char_A_none_val');
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// 문자 편집 2021.01.02 남지원
Blockly.JavaScript['text_editing'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_input =  Blockly.JavaScript.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

// 문자 검색 2021.01.03 남지원
Blockly.JavaScript['text_search'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 문자 대소 2021.01.03 남지원
Blockly.JavaScript['text_up_low'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 문자 정렬 2021.01.02 남지원
Blockly.JavaScript['text_sort'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_input =  Blockly.JavaScript.valueToCode(block, 'INPUT1', Blockly.JavaScript.ORDER_ATOMIC);
  var text_input2 =  Blockly.JavaScript.valueToCode(block, 'INPUT2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

// 문자 질의 2021.01.03 남지원
Blockly.JavaScript['text_query'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 문자 슬라이싱 2021.01.03 남지원
Blockly.JavaScript['text_slice'] = function(block) {
  var variable_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var text_input1 =  Blockly.JavaScript.valueToCode(block, 'INPUT1', Blockly.JavaScript.ORDER_ATOMIC);
  var text_input2 =  Blockly.JavaScript.valueToCode(block, 'INPUT2', Blockly.JavaScript.ORDER_ATOMIC);
  var text_input3 =  Blockly.JavaScript.valueToCode(block, 'INPUT3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 문자 만들기 2021.01.11 남지원
Blockly.JavaScript['create_text'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};