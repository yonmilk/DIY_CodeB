
Blockly.Python['import_scipy'] = function (block) {
  var dropdown_scipy = block.getFieldValue('scipy');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  switch (dropdown_scipy) {
    case "curve_fit":
      code = "from scipy.optimize import curve_fit";
      break;
    case "interp1d":
      code = "from scipy.interpolate import interp1d";
      break;
    case "UnivariateSpline":
      code = "from scipy.interpolate import UnivariateSpline";
      break;
    case "quad":
      code = "from scipy.integrate import quad";
      break;
    case "trapz":
      code = "from scipy.integrate import trapz";
      break;
    case "wavfile":
      code = "from scipy.io import wavfile";
      break;
    case "signal":
      code = "from scipy import signal";
      break;
    case "ndimage":
      code = "from scipy import ndimage as ndi";
      break;
    case "dendrogram":
      code = "from scipy.cluster.hierarchy import dendrogram";
      break;
    case "ward":
      code = "from scipy.cluster.hierarchy import ward";
      break;
  }

  return code + '\n';
};

Blockly.Python['import_scipy_wavfile'] = function (block) {
  var dropdown_scipy = block.getFieldValue('scipy');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  switch (dropdown_scipy) {
    case "wavfile":
      code = "import scipy.io.wavfile";
      break;
    case "write":
      code = "from scipy.io.wavfile import write";
      break;
  }

  return code + '\n';
};

Blockly.Python['curve_fit'] = function (block) {
  var value_fun = Blockly.Python.valueToCode(block, 'fun', Blockly.Python.ORDER_ATOMIC);
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'curve_fit(' + value_fun + ', ' + value_x + ', ' + value_y + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['univariatespline'] = function (block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var text_s = block.getFieldValue('s');
  // TODO: Assemble Python into code variable.
  var code = 'UnivariateSpline(' + value_x + ', ' + value_y + ', s=' + text_s + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['quad'] = function (block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var text_s = block.getFieldValue('s');
  var text_e = block.getFieldValue('e');
  // TODO: Assemble Python into code variable.
  var code = 'quad(' + value_x + ', ' + text_s + ', ' + text_e + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_io_wavfile_read'] = function (block) {
  var value_x = Blockly.Python.valueToCode(block, 'file', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `scipy.io.wavfile.read(${value_x})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//고장 진단

Blockly.Python['scipy_bartlett'] = function (block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.bartlett(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_tsearch'] = function (block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `spatial.tsearch(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['scipy_distance_matrix_minkowski_distance_minkowski_distance_p'] = function (block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('scipy');
  // TODO: Assemble Python into code variable.
  var code = `spatial.${dropdown_dic}(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_procrustes'] = function (block) {
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `spatial.procrustes(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//////////////////////////////////////
//// 2021-02-15 양승국
//////////////////////////////////////
Blockly.Python['scipy_write_read'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = `wavfile.${dropdown_dic}(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['scipy_cascade'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.cascade(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['scipy_daub'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.daub(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['scipy_morlet'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = `signal.${dropdown_dic}(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['scipy_qmf'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.daub(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['scipy_ricker'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.daub(${value_name1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['ward'] = function (block) {
  var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variable + ' = ward(' + value_data + ')\n';
  return code;
};

Blockly.Python['dendrogram'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'dendrogram(' + value_data + ')\n';
  return code;
};