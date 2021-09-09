// 2021.01.13 사이킷이미지 import 남지원
Blockly.Python['import_skimage'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import skimage\nfrom skimage import data\nfrom skimage import img_as_float\n";
  return code;
};

// 2021.01.13 이미지 사용 (남지원)
Blockly.Python['skimage_data'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = `data.${dropdown_dic}()`;
  
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 2021-01-18 임포트 블록 양승국
Blockly.Python['ski_class'] = function (block) {
  var dropdown_dic = block.getFieldValue('DATA');
  var code = `import skimage.${dropdown_dic} as ${dropdown_dic}\n`;
  
  return code;
};


////////////////////////////////
// skimage_util
Blockly.Python['skimage_util'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `util.${dropdown_drop}(${input_text})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

////////////////////////////////
// skimage_measure
Blockly.Python['skimage_measure'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble Python into code variable.
  var code = `measure.${dropdown_drop}(${input_text})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['skimage_filters'] = function(block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = `filters.${dropdown_dic}(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['skimage_transform'] = function(block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = `transform.${dropdown_dic}(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['skimage_img_as_float'] = function(block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  // var code = `img_as_float.${dropdown_dic}(${value_name2})`;
  var code = `${dropdown_dic}(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//

Blockly.Python['skimage_color'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.Python.valueToCode(block, 'para', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${dropdown_method}(${value_para})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['skimage_feature'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.Python.valueToCode(block, 'para', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${dropdown_method}(${value_para})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['skimage_morphology'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.Python.valueToCode(block, 'para', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${dropdown_method}(${value_para})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['skimage_util_shape'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.Python.valueToCode(block, 'para', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_para}.${dropdown_method}(${value_var})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};