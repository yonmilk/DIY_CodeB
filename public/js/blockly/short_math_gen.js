Blockly.Python['short_math'] = function(block) {
  var num_1=Blockly.Python.valueToCode(block,'a',Blockly.Python.ORDER_ATOMIC);
  var dropdown_select = block.getFieldValue('select');
  var num_2=Blockly.Python.valueToCode(block,'b',Blockly.Python.ORDER_ATOMIC);
  var code=num_1+dropdown_select+"= "+num_2+"\n";
  return code;
};