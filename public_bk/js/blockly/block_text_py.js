////////////////////////////////////////////////////////////////////
// 2020-12-26 
////////////////////////////////////////////////////////////////////


//""없는 문자
Blockly.Python['char_a_none'] = function(block) {
  var text_char_a_none_val = block.getFieldValue('char_A_none_val');
  // TODO: Assemble Python into code variable.
  var code = `${text_char_a_none_val}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// text_replace
Blockly.Python['text_replace'] = function(block) {
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_text}.replace('${value_a}','${value_b}')`;
  return [code,Blockly.Python.ORDER_NONE];
};

// 문자다루기 2021.01.02 남지원
// Blockly.Python['text_editing'] = function(block) {
//   var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
//   var text_input = block.getFieldValue('INPUT');
//   var dropdown_func = block.getFieldValue('FUNC');
//   // TODO: Assemble Python into code variable.
//   switch(dropdown_func){
//     case 'split':
//       var code = `${variable_var}.${dropdown_func}('${text_input}')`;
//     break;
//     case 'count':
//       var code = `${variable_var}.${dropdown_func}('${text_input}')`;
//     break;
//     case 'find':
//       var code = `${variable_var}.${dropdown_func}('${text_input}')`;
//     break;
//     case 'join':
//       var code = `"${text_input}".${dropdown_func}(${variable_var})`;
//     break;
//     case 'replace':
//       var code = ``;
//     break;
//     case 'upper':
//       var code = `${variable_var}.${dropdown_func}()`;
//     break;
//     case 'lower':
//       var code = `${variable_var}.${dropdown_func}()`;
//     break;
//     case 'lstrip':
//       var code = `${variable_var}.${dropdown_func}()`;
//     break;
//     case 'rstrip':
//       var code = `${variable_var}.${dropdown_func}()`;
//     break;
//     case 'strip':
//       var code = `${variable_var}.${dropdown_func}()`;
//     break;
//   }
//   return [code, Blockly.Python.ORDER_ATOMIC];
// };

// 문자 편집 2021.01.03 남지원
Blockly.Python['text_editing'] = function(block) {
  var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var text_input =  Blockly.Python.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  switch(dropdown_func){
    case 'split':
      var code = `${variable_var}.${dropdown_func}(${text_input})`;
    break;
    case 'join':
      var code = `"${text_input}".${dropdown_func}(${variable_var})`;
    break;
    case 'replace':
      var code = `${variable_var}.${dropdown_func}(${text_input})`;
    break;
    case 'lstrip':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
    case 'rstrip':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
    case 'strip':
      var code = `${variable_var}.${dropdown_func}()`;
    break;
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 문자 검색 2021.01.03 남지원
Blockly.Python['text_search'] = function(block) {
  var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var text_input =  Blockly.Python.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  var code = `${variable_var}.${dropdown_func}(${text_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 문자 대소문자 2021.01.03 남지원
Blockly.Python['text_up_low'] = function(block) {
  var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  var code = `${variable_var}.${dropdown_func}()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 문자 정렬 2021.01.03 남지원
Blockly.Python['text_sort'] = function(block) {
  var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var text_input =  Blockly.Python.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
  var text_input2 =  Blockly.Python.valueToCode(block, 'INPUT2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  var code = `${variable_var}.${dropdown_func}(${text_input2},${text_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 문자 질의 2021.01.03 남지원
Blockly.Python['text_query'] = function(block) {
  var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_func = block.getFieldValue('FUNC');
  // TODO: Assemble Python into code variable.
  var code = `${variable_var}.${dropdown_func}()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 문자 슬라이싱 2021.01.03 남지원
Blockly.Python['text_slice'] = function(block) {
  //var variable_var = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var text_input1 =  Blockly.Python.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
  var text_input2 =  Blockly.Python.valueToCode(block, 'INPUT2', Blockly.Python.ORDER_ATOMIC);
  var text_input3 =  Blockly.Python.valueToCode(block, 'INPUT3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_var}[${text_input1}:${text_input2}:${text_input3}]`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 문자 만들기 2021.01.11 남지원
Blockly.Python['create_text'] = function (block) {
  var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_var + ' = "' + value_text + '"\n';
  return code;
};