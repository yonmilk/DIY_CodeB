//2020-12-26-전우진 definitions

Blockly.Python['webdefine'] = function (block) {
    var text_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC);
    var text_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC);
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
    return code;
};

// 2021.01.22 생성자 남지원
Blockly.Python['webdefine2'] = function (block) {
    var text_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC);
    var text_2 = Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC);
    var branch = Blockly.Python.statementToCode(block, 'DO');
    branch = Blockly.Python.addLoopTrap(branch, block.id) || Blockly.Python.PASS;
    // const statements_name = Blockly.Python.statementToCode(block, 'NAME');
    // TODO: Assemble Python into code variable.
    var code = 'def ' + text_1 + '(' + text_2 + '):\n' + branch;
    return code;
};

//2020-12-26-전우진 definitions

Blockly.Python['webreturn2'] = function (block) {
    var text_return = Blockly.Python.valueToCode(block, 'return', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'return ' + text_return + '\n';
    return code;
};

// 함수 return1
Blockly.Python['func_return1'] = function(block) {
    var variable_1 =  Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC);
    var variable_2 =  Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC);
    var text_2 = Blockly.Python.valueToCode(block, '3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+' = '+variable_2+'('+text_2+')'+'\n';
    return code;
};

// 함수 return11
Blockly.Python['func_return11'] = function(block) {
    var variable_1 =  Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC);
    var text_2 = Blockly.Python.valueToCode(block, '3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_1+'('+text_2+')';
    return [code, Blockly.Python.ORDER_ATOMIC]; ;
};

// 함수 return 2
Blockly.Python['func_return2'] = function(block) {
    var text_1 = Blockly.Python.valueToCode(block, '1', Blockly.Python.ORDER_ATOMIC);
    var variable_2 =  Blockly.Python.valueToCode(block, '2', Blockly.Python.ORDER_ATOMIC);
    var text_3 = Blockly.Python.valueToCode(block, '3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = text_1+' = '+variable_2+'('+text_3+')\n';
    return code;
  };

  //2020-12-27-전우진-global
Blockly.Python['global'] = function (block) {
    var text_print = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'global ' + text_print + '\n';
    return code;
  };
  