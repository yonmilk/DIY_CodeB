Blockly.JavaScript['webdefine'] = function (block) {
    var text_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var text_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    branch = Blockly.JavaScript.addLoopTrap(branch, block.id) || Blockly.JavaScript.PASS;
    // const statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    //var code = '\n' + branch;
    var code = '\n';
    return code;
};

Blockly.JavaScript['webdefine2'] = function (block) {
    var text_1 = Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var text_2 = Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var branch = Blockly.JavaScript.statementToCode(block, 'DO');
    branch = Blockly.JavaScript.addLoopTrap(branch, block.id) || Blockly.JavaScript.PASS;
    // const statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    //var code = '\n' + branch;
    var code = '\n';
    return code;
};

//2020-12-26-전우진 definitions

Blockly.JavaScript['webreturn2'] = function (block) {
    var text_return = Blockly.JavaScript.valueToCode(block, 'return', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

// 함수 return1
Blockly.JavaScript['func_return1'] = function(block) {
    var variable_1 =  Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var variable_2 =  Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var text_2 = block.getFieldValue('3');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

// 함수 return1
Blockly.JavaScript['func_return11'] = function(block) {
    var variable_1 =  Blockly.JavaScript.valueToCode(block, '1', Blockly.JavaScript.ORDER_ATOMIC);
    var text_2 = block.getFieldValue('2');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
};

// 함수 return 2
Blockly.JavaScript['func_return2'] = function(block) {
    var text_1 = block.getFieldValue('1');
    var variable_2 =  Blockly.JavaScript.valueToCode(block, '2', Blockly.JavaScript.ORDER_ATOMIC);
    var text_3 = block.getFieldValue('3');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  //2020-12-27-전우진-global

Blockly.JavaScript['global'] = function (block) {
    var text_print = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };
  