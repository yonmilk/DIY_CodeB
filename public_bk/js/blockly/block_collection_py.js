////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////

Blockly.Python['create_list'] = function (block) {
  var variable_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = [' + value_text + ']\n';
  return code;
};


// 튜플
Blockly.Python['tuple'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
        Blockly.Python.ORDER_NONE) || 'None';
  }
  var code = '(' + elements.join(', ') + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-12-29 양승국
Blockly.Python['create_tuple'] = function (block) {
  var variable_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = (' + value_text + ')\n';
  return code;
};

//2020-12-29 양승국
Blockly.Python['create_ziphap'] = function (block) {
  var variable_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_list} = {${value_text}}\n`;
  // var code = variable_list + ' = set( ' + value_text + ' )\n';
  return code;
};

//2020-12-29 양승국
Blockly.Python['create_dict'] = function (block) {
  var variable_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = { ' + value_text + ' }\n';
  return code;
};


// 딕셔너리
Blockly.Python['dict1'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var key = new Array(block.itemCount_);
  var values = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i = i + 1) {
      if (i == block.itemCount_ - 1) {
          key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE)
      } else {
          key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE) + ', ';
          key[i + 1] = Blockly.Python.valueToCode(block, 'ADD' + i + 1, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i + 1, Blockly.Python.ORDER_NONE)
      }
  }

  // 리턴의 순서를 바꿔줘야함
  var code =  variable_list + ' = {' + key.join('') + '}';
  return code;
};


// // 딕셔너리 옵션
// Blockly.Python['dic_menu1'] = function (block) {
//   var dropdown_dic = block.getFieldValue('dic');
//   var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
//   var value_dic2 = Blockly.Python.valueToCode(block, 'dic2', Blockly.Python.ORDER_ATOMIC);
//   var value_dic3 = Blockly.Python.valueToCode(block, 'dic3', Blockly.Python.ORDER_ATOMIC);
//   if (dropdown_dic == 'printvalues1') {
//       var code = 'print(' + value_dic1 + '[' + value_dic2 + '])';
//   } else if (dropdown_dic == 'printvalues2') {
//       var code = 'print(' + value_dic1 + '[' + value_dic2 + ']' + '[' + value_dic3 + '])';
//   } else if (dropdown_dic == 'addvalues') {
//       var code = value_dic1 + '[' + value_dic2 + '] = ' + value_dic3;
//   } else if (dropdown_dic == 'delvalues') {
//       var code = 'del ' + value_dic1 + '[' + value_dic2 + ']';
//   } else if (dropdown_dic == 'changedict') {
//       var code = 'dict(' + value_dic1 + ')';
//   } else if (dropdown_dic == 'selectvalues') {
//       var code = value_dic1 + '[' + value_dic2 + ']';
//   } else if (dropdown_dic == 'getvalues') {
//       var code = value_dic1 + '.values()';
//   } else if (dropdown_dic == 'getkeys') {
//       var code = value_dic1 + '.keys()';
//   }
//   return [code, Blockly.Python.ORDER_ATOMIC];
// };

Blockly.Python['set_menu1_2'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu2');
  var value_set1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_set2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if (dropdown_set_menu == 'add') {
      var code = value_set1 + '.add(' + value_set2 + ')';
  } else if (dropdown_set_menu == 'update') {
      var code = value_set1 + '.update(' + value_set2 + ')';
  } else if (dropdown_set_menu == 'remove') {
      var code = value_set1 + '.remove(' + value_set2 + ')';
  }
  return code + "\n";
};

// 집합 종류
Blockly.Python['set_menu1'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var value_set1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_set2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if (dropdown_set_menu == 'union') {
      var code = value_set1 + '.union(' + value_set2 + ')';
  } else if (dropdown_set_menu == 'intersection') {
      var code = value_set1 + '.intersection(' + value_set2 + ')';
  } else if (dropdown_set_menu == 'difference') {
      var code = value_set1 + '.difference(' + value_set2 + ')';
  } 
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 라운드형 반복 조건 블록
Blockly.Python['forif'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  var value_SET3 = Blockly.Python.valueToCode(block, 'SET3', Blockly.Python.ORDER_ATOMIC);
  var value_SET4 = Blockly.Python.valueToCode(block, 'SET4', Blockly.Python.ORDER_ATOMIC);
  var value_SET5 = Blockly.Python.valueToCode(block, 'SET5', Blockly.Python.ORDER_ATOMIC);

  var code = value_SET0 + value_SET1 + " for " + value_SET2 + " in " +  value_SET3 + " if " + value_SET4 + value_SET5;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 라운드형 반복 조건 블록
Blockly.Python['forif2'] = function (block) {
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  var value_SET3 = Blockly.Python.valueToCode(block, 'SET3', Blockly.Python.ORDER_ATOMIC);
  var value_SET4 = Blockly.Python.valueToCode(block, 'SET4', Blockly.Python.ORDER_ATOMIC);

  var code = value_SET0 + value_SET1 + " for " + value_SET2 + " in " +  value_SET3 +  value_SET4;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 내장함수 map, filter
Blockly.Python['map_filter'] = function(block) {
  var dropdown_function = block.getFieldValue('function');
  var value_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = dropdown_function + "(" + value_val1 + "," + value_val2 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['map2'] = function(block) {
  var dropdown_function = block.getFieldValue('function');
  var value_val1 = Blockly.Python.valueToCode(block, 'data_type', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "map(" + value_val1 + "," + value_val2 + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2021-01-05
//va_sel
Blockly.Python['va_sel'] = function (block) {
  var value_list1 = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
  
  var code = value_list1 + '[' + value_dic1 + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//va_del
Blockly.Python['va_del'] = function (block) {
  var value_list1 = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
  
  var code = 'del ' + value_list1 + '[' + value_dic1 + ']\n';
  return code;
};

// 딕셔너리 옵션 블록 수정2021-01-05 ysk
Blockly.Python['dic_menu1'] = function (block) {
  var variable_list =  Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('dic');
  if (dropdown_dic == 'items') {
    var code = variable_list + '.items()';
  } else if (dropdown_dic == 'clear') {
    var code = variable_list + '.clear()';
  } else if (dropdown_dic == 'getvalues') {
      var code = variable_list + '.values()';
  } else if (dropdown_dic == 'getkeys') {
      var code = variable_list + '.keys()';
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//va_ser
Blockly.Python['va_ser'] = function (block) {
  var variable_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
  
  var code = value_dic1 + " in " + variable_list;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//va_id
Blockly.Python['va_id'] = function (block) {
  var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
  
  var code = "id( " + value_dic1 + " )"
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// [D4] 딕셔너리 get 블록 추가 2021-08-16 - 이정윤
Blockly.Python['dict_get'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var value_key = Blockly.Python.valueToCode(block, 'key', Blockly.Python.ORDER_ATOMIC);
  var value_default = Blockly.Python.valueToCode(block, 'default', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if (value_default === ''){
    var code = `${value_var}.get(${value_key})`;
  } else {
    var code = `${value_var}.get(${value_key}, ${value_default})`;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};



// 2021.01.26 collection import 남지원
Blockly.Python['collection_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import collections \n";
  return code;
};

// 2021.01.26 create_deque 남지원
Blockly.Python['create_deque'] = function (block) {
  var variable_list = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_list} = collections.deque([${value_text}])\n`;
  return code;
};

// 2021.01.26 deque_menu 남지원
Blockly.Python['deque_menu1'] = function (block) {
  var dropdown_value = block.getFieldValue('DROP');
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.${dropdown_value}(${value_input})\n`;
  return code;
};

// 2021.01.26 deque_menu2 남지원
Blockly.Python['deque_menu2'] = function (block) {
  var dropdown_value = block.getFieldValue('DROP');
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.${dropdown_value}()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
