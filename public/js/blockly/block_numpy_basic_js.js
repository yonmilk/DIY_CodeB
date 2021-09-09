


//numpy_averages_variances
Blockly.JavaScript['numpy_averages_variances_basic'] = function(block) {
  var dropdown_numpy_averages_variances_opt = block.getFieldValue('numpy_Averages_variances_opt');
  var value_numpy_averages_variances_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_averages_variances_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//numpy_random_sample
Blockly.JavaScript['numpy_random_sample_basic'] = function(block) {
  var dropdown_numpy_random_sample_opt = block.getFieldValue('numpy_Random_sample_opt');
  var value_numpy_random_sample_val = Blockly.JavaScript.valueToCode(block, 'parmeter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_random_sample_val2 = Blockly.JavaScript.valueToCode(block, 'parmeter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 
  var code;
  switch (dropdown_numpy_random_sample_opt){
    case "numpy_Random_sample_rand": 
    code = `\n`;
    break; 

    case "numpy_Random_sample_randn": 
    code = `\n`;
    break;

    case "numpy_Random_sample_randint":
    code = `\n`;
    break;

    case "numpy_Random_sample_random":
    code = `\n`;
    break;

    case "numpy_Random_sample_choice":
    code = `\n`;
    break;

    case "numpy_Random_sample_bytes":
    code = `\n`;
    break;


    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_random_generator
Blockly.JavaScript['numpy_random_generator_basic'] = function(block) {
  var value_numpy_random_generator_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_generator_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  code = `\n`;
   
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.JavaScript['numpy_rounding_basic'] = function(block) {
  var dropdown_numpy_rounding_opt = block.getFieldValue('numpy_Rounding_opt');
  var value_numpy_rounding_val = Blockly.JavaScript.valueToCode(block, 'numpy_Rounding_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_joining_arrays
Blockly.JavaScript['numpy_joining_arrays_basic'] = function(block) {
  var dropdown_numpy_joining_arrays_opt = block.getFieldValue('numpy_Joining_arrays_opt');
  var value_numpy_joining_arrays_val = Blockly.Python.valueToCode(block, 'numpy_Joining_arrays_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `\n`;
  // TODO: Change ORDER_ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//numpy_exponents_logarithms
Blockly.JavaScript['numpy_exponents_logarithms_basic'] = function(block) {
  var dropdown_numpy_exponents_logarithms_opt = block.getFieldValue('numpy_Exponents_logarithms_opt');
  var value_numpy_exponents_logarithms_val = Blockly.JavaScript.valueToCode(block, 'numpy_Exponents_logarithms_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//행렬 연산
Blockly.JavaScript['numpy_array_operator_basic'] = function(block) {
  var dropdown_numpy_array_operator_option = block.getFieldValue('numpy_array_operator_Option');
  var value_numpy_array_operator_val = Blockly.JavaScript.valueToCode(block, 'numpy_array_operator_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_index_values_basic'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_index_values_val = Blockly.JavaScript.valueToCode(block, 'numpy_index_values_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_index_values_basic_with_np'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_index_values_val = Blockly.JavaScript.valueToCode(block, 'numpy_index_values_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_take_basic'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_index_values_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_changing_array_shape
Blockly.JavaScript['numpy_changing_array_shape_basic'] = function(block) {
  var dropdown_numpy_changing_array_shape_opt = block.getFieldValue('numpy_Changing_array_shape_opt');
  var value_numpy_changing_array_shape_val = Blockly.JavaScript.valueToCode(block, 'numpy_Changing_array_shape_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_transpose_like_operations
Blockly.JavaScript['numpy_transpose_like_operations_basic'] = function(block) {
  var value_numpy_transpose_like_operations_val = Blockly.JavaScript.valueToCode(block, 'numpy_Transpose_like_operations_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//numpy_ones_and_zeros
Blockly.JavaScript['numpy_ones_and_zeros_basic'] = function(block) {
  var dropdown_numpy_ones_and_zeros_opt = block.getFieldValue('numpy_Ones and zeros_opt');
  var value_numpy_ones_and_zeros_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_ones_and_zeros_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_ones_and_zeros
Blockly.JavaScript['numpy_eye_basic'] = function(block) {
  var value_numpy_ones_and_zeros_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `\n`;
  // TODO: Change ORDER_ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_numerical_ranges
Blockly.JavaScript['numpy_numerical_ranges_basic1'] = function(block) {
  var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
  var value_numpy_numerical_ranges_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val3 = Blockly.JavaScript.valueToCode(block, 'parameter3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_numerical_ranges
Blockly.JavaScript['numpy_numerical_ranges_basic2'] = function(block) {
  var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
  var value_numpy_numerical_ranges_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

 // 넘파이 기본 연산
 Blockly.JavaScript['numpy_operator_basic'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_operator_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_operator_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

 // 넘파이 기본 연산
 Blockly.JavaScript['numpy_operator_basic2'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_operator_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_numpy_operator_val2 = Blockly.JavaScript.valueToCode(block, 'parameter2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_loadtxt_basic'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_delimiter = Blockly.JavaScript.valueToCode(block, 'delimiter', Blockly.JavaScript.ORDER_ATOMIC);
  var value_dtype = Blockly.JavaScript.valueToCode(block, 'dtype', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['numpy_select'] = function(block) {
  var dropdown_numpy_operator_option = block.getFieldValue('numpy_operator_Option');
  var value_numpy_operator_val = Blockly.JavaScript.valueToCode(block, 'parameter1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `\n`;
  // TODO: Change ORDER_ATOMIC to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['numpy_astype'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};