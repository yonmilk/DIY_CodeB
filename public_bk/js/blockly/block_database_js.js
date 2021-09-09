
  Blockly.JavaScript['db_create'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET2 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_insert'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_select1'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET2 = Blockly.JavaScript.valueToCode(block, 'd3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_select2'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  // update문
  Blockly.JavaScript['db_update'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET2 = Blockly.JavaScript.valueToCode(block, 'SET2', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  // update문 ( where 없음 )
  Blockly.Python['db_update2'] = function (block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET0 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
    var value_SET1 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `${variable_list} = "UPDATE ${value_SET0} SET ${value_SET1}"\n`;
    return code;
  };

  // delete문
  Blockly.JavaScript['db_delete'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    var value_SET1 = Blockly.JavaScript.valueToCode(block, 'SET1', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  // delete문 (where 없음)
  Blockly.JavaScript['db_delete2'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var value_SET0 = Blockly.JavaScript.valueToCode(block, 'SET0', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  //전우진

  Blockly.JavaScript['sqlite_library'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_conn'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_cur'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_exec'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('d1');
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'va1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_execM'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_commit'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_rollback'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_fetchall'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_fetchmany'] = function (block) {
    var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var variable_list2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
    var value_name1 = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  Blockly.JavaScript['db_fetchone'] = function (block) {
    var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var variable_list2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_fetch'] = function (block) {
    var variable_list1 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
    var variable_list2 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list2'), Blockly.Variables.NAME_TYPE);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
  };

  Blockly.JavaScript['db_close'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  //2020-12-29 양승국
Blockly.JavaScript['create_data1'] = function (block) {
  var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble .JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['db_with'] = function(a) {
  var set0 = Blockly.JavaScript.valueToCode(a, "set0", Blockly.JavaScript.ORDER_CONDITIONAL);
  var set1 = Blockly.JavaScript.valueToCode(a, "set1", Blockly.JavaScript.ORDER_CONDITIONAL);
  var d = Blockly.JavaScript.statementToCode(a, "in");
  // d = Blockly.JavaScript.addLoopTrap(d, a) || Blockly.JavaScript.PASS;
  d = Blockly.JavaScript.addLoopTrap(d, a);
  return "\n";
};

// 2021.06.06 남지원
Blockly.JavaScript['db_join'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET1 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET2 = Blockly.JavaScript.valueToCode(block, 'd3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_SET3 = Blockly.JavaScript.valueToCode(block, 'd4', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('JOIN');

  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};