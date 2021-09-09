// 기초연산
Blockly.JavaScript['Oper'] = function(block) {
    var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

// 타입 생성, 형 변환
Blockly.JavaScript['convert_block'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.JavaScript.valueToCode(block, 'A', Blockly.PytJavaScripthon.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // 내장함수 - 숫자
  Blockly.JavaScript['built_in_function_num'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.JavaScript.valueToCode(block, 'A', Blockly.PytJavaScripthon.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // 비트 연산
  Blockly.JavaScript['bitwise_oper'] = function(block) {
    var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };