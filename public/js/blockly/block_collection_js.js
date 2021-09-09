// ////////////////////////////////////////////////////////////////////
// // 2020-12-26
// ////////////////////////////////////////////////////////////////////

Blockly.JavaScript['create_list'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};


//2020-12-29 양승국
Blockly.JavaScript['create_tuple'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-12-29 양승국
Blockly.JavaScript['create_dict'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-12-29 양승국
Blockly.JavaScript['create_ziphap'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

// 딕셔너리 옵션 블록 수정2021-01-05 ysk
Blockly.JavaScript['dic_menu1'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('dic');
  code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 집합 종류
Blockly.JavaScript['set_menu1'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var value_set1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_set2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 집합 종류
Blockly.JavaScript['set_menu1_2'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var value_set1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_set2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 라운드형 반복 조건 블록
Blockly.JavaScript['forif'] = function (block) {
  var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET3 = Blockly.JavaScript.valueToCode(block, 'SET3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET4 = Blockly.JavaScript.valueToCode(block, 'SET4', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET5 = Blockly.JavaScript.valueToCode(block, 'SET5', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 라운드형 반복 조건 블록
Blockly.JavaScript['forif2'] = function (block) {
  var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET3 = Blockly.JavaScript.valueToCode(block, 'SET3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET4 = Blockly.JavaScript.valueToCode(block, 'SET4', Blockly.JavaScript.ORDER_ATOMIC);

  var code = "\n";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 내장함수 map, filter
Blockly.JavaScript['map_filter'] = function(block) {
  var dropdown_function = block.getFieldValue('function');
  var value_val1 = Blockly.JavaScript.valueToCode(block, 'val1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val2 = Blockly.JavaScript.valueToCode(block, 'val2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['map2'] = function(block) {
  var dropdown_function = block.getFieldValue('function');
  var value_val1 = Blockly.JavaScript.valueToCode(block, 'data_type', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val2 = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//2021-01-05
//va_sel
Blockly.JavaScript['va_sel'] = function (block) {
  var value_list1 = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dic1 = Blockly.JavaScript.valueToCode(block, 'dic1', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//va_del
Blockly.JavaScript['va_del'] = function (block) {
  var value_list1 = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dic1 = Blockly.JavaScript.valueToCode(block, 'dic1', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '\n';
  return code;
};

//va_ser
Blockly.JavaScript['va_ser'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dic1 = Blockly.JavaScript.valueToCode(block, 'dic1', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//va_id
Blockly.JavaScript['va_id'] = function (block) {
  var value_dic1 = Blockly.JavaScript.valueToCode(block, 'dic1', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// [D4] 딕셔너리 get 블록 추가 2021-08-16 - 이정윤
Blockly.JavaScript['dict_get'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC);
  var value_default = Blockly.JavaScript.valueToCode(block, 'default', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// 2021.01.26 collection import 남지원
Blockly.JavaScript['collection_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};

// 2021.01.26 create_deque 남지원
Blockly.JavaScript['create_deque'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};


// 2021.01.26 deque_menu 남지원
Blockly.JavaScript['deque_menu1'] = function (block) {
  var dropdown_value = block.getFieldValue('DROP');
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

// 2021.01.26 deque_menu2 남지원
Blockly.JavaScript['deque_menu2'] = function (block) {
  var dropdown_value = block.getFieldValue('DROP');
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
