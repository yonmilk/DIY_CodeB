// 2021.01.13 사이킷이미지 import 남지원
Blockly.JavaScript['import_skimage'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
  };

  // 2021.01.13 이미지 사용 (남지원)
Blockly.JavaScript['skimage_data'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = '\n'

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 2021-01-18 임포트 블록 양승국
Blockly.JavaScript['ski_class'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = `\n`;
  
  return code;
};


////////////////////////////////
// skimage_util
Blockly.JavaScript['skimage_util'] = function (block) {
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

////////////////////////////////
// skimage_measure
Blockly.JavaScript['skimage_measure'] = function (block) {
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['skimage_filters'] = function(block) {
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = `filters.${dropdown_dic}(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['skimage_transform'] = function(block) {
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = `transform.${dropdown_dic}(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['skimage_img_as_float'] = function(block) {
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = `img_as_float.${dropdown_dic}(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript['skimage_color'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.JavaScript.valueToCode(block, 'para', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['skimage_feature'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.JavaScript.valueToCode(block, 'para', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['skimage_morphology'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.JavaScript.valueToCode(block, 'para', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['skimage_util_shape'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.JavaScript.valueToCode(block, 'para', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};