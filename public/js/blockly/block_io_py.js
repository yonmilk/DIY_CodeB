///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

Blockly.Python['input1'] = function (block) {
  var value_content1 = Blockly.Python.valueToCode(block, 'content1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'input( ' + value_content1 + ' )';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['printtv'] = function (block) {
  var value_content1 = Blockly.Python.valueToCode(block, 'content1', Blockly.Python.ORDER_ATOMIC);
  var value_content2 = Blockly.Python.valueToCode(block, 'content2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `print(${value_content1}, ${value_content2})\n`;
  return code;
};

Blockly.Python['printf'] = function (block) {
  var value_content1 = Blockly.Python.valueToCode(block, 'content1', Blockly.Python.ORDER_ATOMIC);  
  var value_content2 = Blockly.Python.valueToCode(block, 'content2', Blockly.Python.ORDER_ATOMIC);
  
  var code = `print(${value_content1})\n`;
  return code;
};

Blockly.Python['printc'] = function (block) {
  var value_content = Blockly.Python.valueToCode(block, 'content', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='print( '+ value_content + ' )\n';
  return code;
};

Blockly.Python['itdata'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'itdata1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_text + "\n";
  return code;
};

Blockly.Python['indata'] = function(block) {
  var text_modified_col = block.getFieldValue('indata1');
  // TODO: Assemble Python into code variable.
  var code = text_modified_col;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['fd_open'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var dropdown_set_menu2 = block.getFieldValue('set_menu2');
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_list} = open(${value_text}, '${dropdown_set_menu}${dropdown_set_menu2}', encoding='utf-8')\n`;
  // var code = variable_list + ' = open( ' + value_text  + ', "' + dropdown_set_menu + dropdown_set_menu2 + '" )\n';
  return code;
};

Blockly.Python['fd_read'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var dropdown_set_menu1 = block.getFieldValue('set_menu1');
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var variable_list2 = Blockly.Python.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list1 + " = " + variable_list2 + dropdown_set_menu + dropdown_set_menu1 +'\n';
  return code;
};

Blockly.Python['fd_write'] = function (block) {
  var dropdown_set_menu = block.getFieldValue('set_menu');
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + dropdown_set_menu + '( ' +  value_text  +  ' )\n';
  return code;
};

Blockly.Python['fd_close'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_list + '.close()\n';
  return code;
};

Blockly.Python['print_mutator'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return "print( " + b.join(", ") + ")\n";
};


Blockly.Python['map'] = function(block) {
  var value_data_type = Blockly.Python.valueToCode(block, 'data_type', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  var value_split = Blockly.Python.valueToCode(block, 'split', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //var code = ;
  return ['list(map(' + value_data_type + ', input(' + value_input + ').split(' + value_split + ')))', Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['map3'] = function(block) {
  var value_data_type = Blockly.Python.valueToCode(block, 'data_type', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //var code = ;
  return ['map(' + value_data_type + ', ' + value_input + ')', Blockly.Python.ORDER_ATOMIC];
};
// Blockly.Python['qqq'] = function (block) {
//   var file = block.getFieldValue('csv_url');
//   // x, y
//   var x_train;
//   var value = "";
//   var columns = "[";
//   try {
//       file = obFile.Path;
//       // key 값만 추출
//       // var key = Object.getOwnPropertyNames(file[0]);
//       // 2차원 배열 array
//       // x_train = new Array(file.length);

//       // for (var i = 0; i < x_train.length; i++) {
//       //     x_train[i] = new Array(key.length);
//       // }
//       // for (var i = 0; i < key.length; i++) {
//       //     columns = columns + "'" + key[i] + "'";
//       //     if (i != key.length - 1) {
//       //         columns = columns + ",";
//       //     }
//       // }
//       // // 값 세팅
//       // for (var i = 0; i < x_train.length; i++) {
//       //     for (var j = 0; j < key.length; j++) {
//       //         var keyName = key[j]; // key 값
//       //         var data = file[i][keyName];
//       //         if (Number(data) * 0 != 0) {
//       //             data = "'" + data + "'";
//       //         }
//       //         if (data == "") {
//       //             data = "None";
//       //         }
//       //         if (Number(data) == 0) {
//       //             data = "0";
//       //         }
//       //         x_train[i][j] = data; // value
//       //     } value = value + "[" + x_train[i] + "]";
//       //     if (i != x_train.length - 1) {
//       //         value = value + ",";
//       //     }
//       // }
//   } catch (e) {
//       // console.log(e);
//   }
//   var code = file;
//   return [code, Blockly.Python.ORDER_ATOMIC];
// };

// ===== 기태 수정(로컬 파일 열기) 21.01.01=======================================================================
Blockly.Python['fileopen'] = function (block) {
  var file = block.getFieldValue('file_path');
  
  var code = file;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['fileopen2'] = function (block) {
  var file = block.getFieldValue('file_path');
  
  var code = file;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['fileopen3'] = function (block) {
  var file = block.getFieldValue('file_path');
  
  var code = file;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
// ===== 기태 수정(로컬 파일 열기) ==================================================================================

  Blockly.Python['withs'] = function(a) {
  var set0 = Blockly.Python.valueToCode(a, "set0", Blockly.Python.ORDER_CONDITIONAL);
  var set1 = Blockly.Python.valueToCode(a, "set1", Blockly.Python.ORDER_CONDITIONAL);
  var d = Blockly.Python.statementToCode(a, "in");
  // d = Blockly.Python.addLoopTrap(d, a) || Blockly.Python.PASS;
  d = Blockly.Python.addLoopTrap(d, a);
  var code = "with " + set0 + " as " + set1 + ":\n" + d;
  return code;
};

// 2021.01.22 남지원
Blockly.Python['csv_reader_writer'] = function(block) {
  var dropdown_drop = block.getFieldValue('DROP');
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `csv.${dropdown_drop}(${value_var})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 객체 사용
Blockly.Python['class_use3'] = function(block) {
  var var1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  var text_1 = Blockly.Python.valueToCode(block, '3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = var1+'.'+var2+'('+text_1+')';
  // var code = `${val1}.${val2} = ${text_1}\n`;
  return [code, Blockly.Python.ORDER_ATOMIC]; 
};

// 확장
Blockly.Python['df_add_function2'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'LIST2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + "." + value_name2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
}; 