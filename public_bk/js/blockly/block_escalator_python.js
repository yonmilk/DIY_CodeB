//wavfile 읽기
Blockly.Python['wavfile_read'] = function(block) {
    var value_name = Blockly.Python.valueToCode(block, 'wavfile_read_val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `wavfile.read(${value_name})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE]; 
  };