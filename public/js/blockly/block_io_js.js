///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

Blockly.JavaScript['input1'] = function (block) {
  var value_content1 = Blockly.JavaScript.valueToCode(block, 'content1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['printtv'] = function (block) {
  var value_content1 = Blockly.JavaScript.valueToCode(block, 'content1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_content2 = Blockly.JavaScript.valueToCode(block, 'content2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['printf'] = function (block) {
  var value_content1 = Blockly.JavaScript.valueToCode(block, 'content1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_content2 = Blockly.JavaScript.valueToCode(block, 'content2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['printc'] = function (block) {
  var value_content = Blockly.JavaScript.valueToCode(block, 'content', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['itdata'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'itdata1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};


Blockly.JavaScript['indata'] = function(block) {
  var text_modified_col = block.getFieldValue('indata1');
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['fd_open'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fd_read'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var dropdown_set_menu1= block.getFieldValue('set_menu1');
  var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var variable_list2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fd_write'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fd_close'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['print_mutator'] = function (block) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return [b.join(", "), Blockly.JavaScript.ORDER_ATOMIC]
  // TODO: Assemble JavaScript into code variable.
};

Blockly.JavaScript['map'] = function(block) {
  var value_data_type = Blockly.JavaScript.valueToCode(block, 'data_type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_split = Blockly.JavaScript.valueToCode(block, 'split', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['map2'] = function(block) {
  var value_data_type = Blockly.JavaScript.valueToCode(block, 'data_type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var value_split = Blockly.JavaScript.valueToCode(block, 'split', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

// Blockly.JavaScript['qqq'] = function (block) {
//   var file = block.getFieldValue('csv_url');
  
//   var code = "\n";
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// ===== 기태 수정(로컬 파일 열기) 21.01.01=======================================================================
Blockly.JavaScript['fileopen'] = function (block) {
  var file = block.getFieldValue('csv_url');
  
  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['fileopen2'] = function (block) {
  var file = block.getFieldValue('csv_url');
  
  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['fileopen3'] = function (block) {
  var file = block.getFieldValue('csv_url');
  
  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
// ===== 기태 수정(로컬 파일 열기) =================================================================================

Blockly.JavaScript['withs'] = function(a) {
  var set0 = Blockly.JavaScript.valueToCode(a, "set0", Blockly.JavaScript.ORDER_CONDITIONAL);
  var set1 = Blockly.JavaScript.valueToCode(a, "set1", Blockly.JavaScript.ORDER_CONDITIONAL);
  var d = Blockly.JavaScript.statementToCode(a, "in");
  // d = Blockly.JavaScript.addLoopTrap(d, a) || Blockly.JavaScript.PASS;
  d = Blockly.JavaScript.addLoopTrap(d, a);
  return "\n";
};


// 2021.01.22 남지원
Blockly.JavaScript['csv_reader_writer'] = function(block) {
  var dropdown_drop = block.getFieldValue('DROP');
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `csv.${dropdown_drop}(${value_var})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 객체 사용
Blockly.JavaScript['class_use3'] = function(block) {
  var var1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  var var2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
  var text_1 = block.getFieldValue('INPUT');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code; 
};

// 확장
Blockly.JavaScript['df_add_function2'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'LIST2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  return code; 
};

Blockly.JavaScript['comma'] = function(block) {
  var value_v1 = Blockly.JavaScript.valueToCode(block, 'v1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_v2 = Blockly.JavaScript.valueToCode(block, 'v2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};