Blockly.JavaScript['import_scipy'] = function(block) {
    var dropdown_scipy = block.getFieldValue('scipy');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

Blockly.JavaScript['curve_fit'] = function(block) {
    var value_fun = Blockly.JavaScript.valueToCode(block, 'fun', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['univariatespline'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  Blockly.JavaScript['quad'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    var text_e = block.getFieldValue('e');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

   // 고장 진단
   Blockly.JavaScript['scipy_bartlett'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['scipy_tsearch'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['scipy_distance_matrix_minkowski_distance_minkowski_distance_p'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['scipy_procrustes'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  //////////////////////////////////////
//// 2021-02-15 양승국
//////////////////////////////////////
Blockly.JavaScript['scipy_write_read'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['scipy_cascade'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['scipy_daub'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['scipy_morlet'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['scipy_qmf'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.daub(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['scipy_ricker'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.daub(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['ward'] = function(block) {
  var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['dendrogram'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};