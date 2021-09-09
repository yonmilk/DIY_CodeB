Blockly.Python['sklearn_ensemble'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'from sklearn.ensemble import ' + dropdown_name + '\n';
  return code;
};


///////////////////////////// SVM
Blockly.Python['sklearn_svm'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'from sklearn.svm import ' + dropdown_name + '\n';
  return code;
};


///////////////////////////// 전처리
Blockly.Python['sklearn.preprocessing'] = function (block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code;
  code = 'from sklearn.preprocessing import ' + dropdown_name + '\n';
  if (dropdown_name == "OneHotEncoder") {
    code += "oh_enc = OneHotEncoder()\n";
  }else if (dropdown_name == "train_test_split") {
    code = "from sklearn.model_selection import train_test_split";
  }
  
  return code;
};


  // Blockly.Python['standardscaler'] = function(block) {
  //   var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  //   // TODO: Assemble Python into code variable.
  //   var code = value_name + ' = StandardScaler()\n';
  //   return code;
  // };

  // Blockly.Python['labelencoder'] = function(block) {
  //   var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  //   // TODO: Assemble Python into code variable.
  //   var code = value_name + ' = labelencoder()\n';
  //   return code;
  // };
