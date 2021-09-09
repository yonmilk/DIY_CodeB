Blockly.JavaScript['tensorflow'] = function(block) {
    var data = Blockly.JavaScript.valueToCode(block, 'TIMES',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';
    return 'sleep(' + data + ');\n';
  }