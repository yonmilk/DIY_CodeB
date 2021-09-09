// 연산
Blockly.Python['Oper'] = function(block) {
    var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${value_a} ${dropdown_name} ${value_b}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 타입 생성, 형 변환
Blockly.Python['convert_block'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = dropdown_name+value_b+")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  
  // 내장함수 - 숫자
Blockly.Python['built_in_function_num'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code;
    // TODO: Change ORDER_NONE to the correct strength.
    switch (dropdown_name){
        case "sum":
            code = `sum(${value_b})`;
            break;
            
        case "max":
            code = "max("+value_b+")"; 
        break;
    
        case "min":
            code = "min("+value_b+")"; 
        break;
    
        case "round":
            code = "round("+value_b+")";  
        break;
    
        case "abs":
            code = "abs("+value_b+")"; 
            break;

        case "pow":
            code = "pow("+value_b+")";

        default:
        break;
      }
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Blockly.Python['bitwise_oper'] = function (block) {
    var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `bin(${value_a} ${dropdown_name} ${value_b})`;
    if(dropdown_name == "~")
        code = `bin(${dropdown_name} ${value_b})`;

    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};