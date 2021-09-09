
  //db

  Blockly.JavaScript['db_autocommit'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_deletedb'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['db_select6'] = function (block) {
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
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

  Blockly.JavaScript['bar_char'] = function (block) {
    var value_matplotlib_pre_graph_location1 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_pre_graph_location2 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location2', Blockly.JavaScript.ORDER_ATOMIC);
    var xx= Blockly.JavaScript.valueToCode(block, 'xx', Blockly.JavaScript.ORDER_ATOMIC);
    var yy= Blockly.JavaScript.valueToCode(block, 'yy', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_matplotlib_graph_select = block.getFieldValue('matplotlib_graph_select');
    var text_matplotlib_pre_graph_title = block.getFieldValue('matplotlib_pre_graph_Title');
    var text_matplotlib_pre_graph_xlable = block.getFieldValue('matplotlib_pre_graph_Xlable');
    var text_matplotlib_pre_graph_ylable = block.getFieldValue('matplotlib_pre_graph_Ylable');
    var text_matplotlib_pre_legend = block.getFieldValue('matplotlib_pre_legend');
    var value_matplotlib_pre_color = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_color', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
  };

  Blockly.JavaScript['line_plot'] = function (block) {
    var value_matplotlib_pre_graph_location1 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_matplotlib_pre_graph_location2 = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_graph_location2', Blockly.JavaScript.ORDER_ATOMIC);
    var xx= Blockly.JavaScript.valueToCode(block, 'xx', Blockly.JavaScript.ORDER_ATOMIC);
    var yy= Blockly.JavaScript.valueToCode(block, 'yy', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_matplotlib_graph_select = block.getFieldValue('matplotlib_graph_select');
    var text_matplotlib_pre_graph_title = block.getFieldValue('matplotlib_pre_graph_Title');
    var text_matplotlib_pre_graph_xlable = block.getFieldValue('matplotlib_pre_graph_Xlable');
    var text_matplotlib_pre_graph_ylable = block.getFieldValue('matplotlib_pre_graph_Ylable');
    var text_matplotlib_pre_legend = block.getFieldValue('matplotlib_pre_legend');
    var value_matplotlib_pre_color = Blockly.JavaScript.valueToCode(block, 'matplotlib_pre_color', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
  };

//멧플롯립 예제를 위한 커스텀
  Blockly.JavaScript['numpy_numerical_ranges_basic1(WJ)'] = function(block) {
    var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
    var value_numpy_numerical_ranges_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_numerical_ranges_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
    var value_numpy_numerical_ranges_val3 = Blockly.JavaScript.valueToCode(block, 'parameter3', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  // 현재 사용하지 않는 블럭
  
  // Blockly.JavaScript['db_select3'] = function (block) {
  //   // TODO: Assemble .JavaScript into code variable.
  //   var code = '\n';
  //   return code;
  // };

  // Blockly.JavaScript['db_select4'] = function (block) {
  //   // TODO: Assemble .JavaScript into code variable.
  //   var code = '\n';
  //   return code;
  // };

  // Blockly.JavaScript['db_select5'] = function (block) {
  //   // TODO: Assemble .JavaScript into code variable.
  //   var code = '\n';
  //   return code;
  // };

  // Blockly.JavaScript['db_select7'] = function (block) {
  //   // TODO: Assemble .JavaScript into code variable.
  //   var code = '\n';
  //   return code;
  // };