

//numpy_order_static
Blockly.JavaScript['numpy_order_static'] = function(block) {
  var dropdown_numpy_order_static_opt = block.getFieldValue('numpy_order_static_opt');
  var value_numpy_order_static_val = Blockly.JavaScript.valueToCode(block, 'numpy_order_static_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;

  switch (dropdown_numpy_order_static_opt){
    case "numpy_order_static_amin":
    code = `\n`;
    break;

    case "numpy_order_static_amax":
    code = `\n`;
    break;

    case "numpy_order_static_nMin":
    code = `\n`;
    break;

    case "numpy_order_static_nMax":
    code = `\n`;
    break;

    case "numpy_order_static_ptp":
    code = `\n`;
    break;

    case "numpy_order_static_percentile":
    code = `\n`;
    break;

    case "numpy_order_static_bincount":
    code = `\n`;
    break;

    case "numpy_order_static_nanpercentile":
    code = `\n`;
    break;

    case "numpy_order_static_quantile":
    code = `\n`;
    break;

    case "numpy_order_static_nanquantile":
    code = `\n`;
    break;

    case "numpy_order_static_maximum":
    code = `\n`;
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength. 
  return [code, Blockly.JavaScript.ORDER_NONE]; 
};
 

//numpy_averages_variances
Blockly.JavaScript['numpy_averages_variances'] = function(block) {
  var dropdown_numpy_averages_variances_opt = block.getFieldValue('numpy_Averages_variances_opt');
  var value_numpy_averages_variances_val = Blockly.JavaScript.valueToCode(block, 'numpy_Averages_variances_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_correlating
Blockly.JavaScript['numpy_correlating'] = function(block) {
  var dropdown_numpy_correlating_opt = block.getFieldValue('numpy_Correlating_opt');
  var value_numpy_correlating_val = Blockly.JavaScript.valueToCode(block, 'numpy_Correlating_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_correlating_opt){
    case "numpy_Correlating_corrcoef": 
    code = `\n`;
    break; 

    case "numpy_Correlating_correlate": 
    code = `\n`;
    break;

    case "numpy_Correlating_cov":
    code = `\n`;
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_sorting
Blockly.JavaScript['numpy_sorting'] = function(block) {
  var dropdown_numpy_sorting_opt = block.getFieldValue('numpy_Sorting_opt');
  var value_numpy_sorting_val = Blockly.JavaScript.valueToCode(block, 'numpy_Sorting_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_sorting_opt){
    case "numpy_Sorting_sort": 
    code = `\n`;
    break; 

    case "numpy_Sorting_lexsort": 
    code = `\n`;
    break;

    case "numpy_Sorting_partition":
    code = `\n`;
    break;

    case "numpy_Sorting_argpartition":
    code = `\n`;
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_searching
Blockly.JavaScript['numpy_searching'] = function(block) {
  var dropdown_numpy_searching_opt = block.getFieldValue('numpy_Searching_opt');
  var value_numpy_searching = Blockly.JavaScript.valueToCode(block, 'numpy_Searching', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_searching_opt){
    case "numpy_argmax": 
    code = `\n`;
    break; 

    case "numpy_Sorting_argmin": 
    code = `\n`;
    break;

    case "numpy_Searching_nonzero":
    code = `\n`;
    break;

    case "numpy_Searching_where":
    code = `\n`;
    break;

    case "numpy_Searching_extract":
    code = `\n`;
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_random_sample
Blockly.JavaScript['numpy_random_sample'] = function(block) {
  var dropdown_numpy_random_sample_opt = block.getFieldValue('numpy_Random_sample_opt');
  var value_numpy_random_sample_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_sample_val', Blockly.JavaScript.ORDER_ATOMIC);
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

//numpy_random_permutations
Blockly.JavaScript['numpy_random_permutations'] = function(block) {
  var dropdown_numpy_random_permutations_opt = block.getFieldValue('numpy_Random_Permutations_opt');
  var value_numpy_random_permutations_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Permutations_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_random_permutations_opt){
    case "numpy_Random_Permutations_shuffle": 
    code = `\n`;
    break; 

    case "numpy_Random_Permutations_permutation": 
    code = `\n`;
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//
Blockly.JavaScript['numpy_random_distributions'] = function(block) {
  var dropdown_numpy_random_distributions_opt = block.getFieldValue('numpy_Random_Distributions_opt');
  var value_numpy_random_distributions_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Distributions_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_random_distributions_opt){
    case "numpy_Random_Distributions_binomial": 
    code = `\n`;
    break; 

    case "numpy_Random_Distributions_chisquare": 
    code = `\n`;
    break;

    case "numpy_Random_Distributions_dirichlet":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_exponential":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_f":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_gamma":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_geometric":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_gumbel":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_hypergeometric":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_laplace":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_logistic":
    code = `\n`;
    break;


    default:
    break;
  }
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_random_distributions_two
Blockly.JavaScript['numpy_random_distributions_two'] = function(block) {
  var dropdown_numpy_random_distributions_two_opt = block.getFieldValue('numpy_Random_Distributions_two_opt');
  var value_numpy_random_distributions_two_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Distributions_two_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_random_distributions_two_opt){
    case "numpy_Random_Distributions_two_lognormal": 
    code = `\n`;
    break; 

    case "numpy_Random_Distributions_two_logseries": 
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_multinomial":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_multivariate_normal":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_negative_binomial":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_noncentral_chisquare":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_noncentral_f":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_normal":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_poisson":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_rayleigh":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_two_standard_exponential":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_binomial":
    code = `\n`;
    break;

    case "standard_normal":
    code = `\n`;
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_random_distributions_third
Blockly.JavaScript['numpy_random_distributions_third'] = function(block) {
  var numpy_Random_Distributions_third_opt = block.getFieldValue('numpy_Random_Distributions_two_opt');
  var value_numpy_random_distributions_third_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Distributions_third_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (numpy_Random_Distributions_third_opt){
    case "numpy_Random_Distributions_third_standard_gamma": 
    code = `\n`;
    break; 

    case "numpy_Random_Distributions_third_standard_normal": 
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_triangular":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_uniform":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_vonmises":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_wald":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_weibull":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_zipf":
      code = `\n`;
      break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_random_distributions_third
Blockly.JavaScript['numpy_random_distributions_third2'] = function(block) {
  var numpy_Random_Distributions_third_opt = block.getFieldValue('numpy_Random_Distributions_two_opt');
  var value_numpy_random_distributions_third_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_Distributions_third_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (numpy_Random_Distributions_third_opt){
    case "numpy_Random_Distributions_third_standard_gamma": 
    code = `\n`;
    break; 

    case "numpy_Random_Distributions_third_standard_normal": 
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_triangular":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_uniform":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_vonmises":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_wald":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_weibull":
    code = `\n`;
    break;

    case "numpy_Random_Distributions_third_zipf":
      code = `\n`;
      break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_random_generator
Blockly.JavaScript['numpy_random_generator'] = function(block) {
  var dropdown_numpy_random_generator_opt = block.getFieldValue('numpy_Random_generator_opt');
  var value_numpy_random_generator_val = Blockly.JavaScript.valueToCode(block, 'numpy_Random_generator_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code;
  switch (dropdown_numpy_random_generator_opt){
    case "numpy_Random_generator_seed": 
    code = `\n`;
    break; 

    case "numpy_Random_generator_get_state": 
    code = `\n`;
    break;

    case "numpy_Random_generator_set_state":
    code = `\n`;
    break;

    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_mathematical_functions
Blockly.JavaScript['numpy_mathematical_functions'] = function(block) {
  var dropdown_numpy_mathematical_functions_opt = block.getFieldValue('numpy_Mathematical functions_opt');
  var value_numpy_mathematical_functions_val = Blockly.JavaScript.valueToCode(block, 'numpy_Mathematical functions_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_mathematical_functions
Blockly.JavaScript['numpy_hyperbolic_functions'] = function(block) {
  var dropdown_numpy_hyperbolic_functions_opt = block.getFieldValue('numpy_Hyperbolic functions_opt');
  var value_numpy_hyperbolic_functions_val = Blockly.JavaScript.valueToCode(block, 'numpy_Hyperbolic functions_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['numpy_rounding'] = function(block) {
  var dropdown_numpy_rounding_opt = block.getFieldValue('numpy_Rounding_opt');
  var value_numpy_rounding_val = Blockly.JavaScript.valueToCode(block, 'numpy_Rounding_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_exponents_logarithms
Blockly.JavaScript['numpy_exponents_logarithms'] = function(block) {
  var dropdown_numpy_exponents_logarithms_opt = block.getFieldValue('numpy_Exponents_logarithms_opt');
  var value_numpy_exponents_logarithms_val = Blockly.JavaScript.valueToCode(block, 'numpy_Exponents_logarithms_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_arithmetic_operations1
Blockly.JavaScript['numpy_arithmetic_operations1'] = function(block) {
  var dropdown_numpy_arithmetic_operations_opt = block.getFieldValue('numpy_Arithmetic_operations_opt');
  var value_numpy_arithmetic_operations1_val = Blockly.JavaScript.valueToCode(block, 'numpy_Arithmetic_operations1_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_arithmetic_operations2
Blockly.JavaScript['numpy_arithmetic_operations2'] = function(block) {
  var dropdown_numpy_arithmetic_operations2_opt = block.getFieldValue('numpy_Arithmetic_operations2_opt');
  var value_numpy_arithmetic_operations2_val = Blockly.JavaScript.valueToCode(block, 'numpy_Arithmetic_operations2_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_handling_complex_numbers
Blockly.JavaScript['numpy_handling_complex_numbers'] = function(block) {
  var dropdown_numpy_handling_complex_numbers_opt = block.getFieldValue('numpy_Handling complex numbers_opt');
  var value_numpy_handling_complex_numbers_val = Blockly.JavaScript.valueToCode(block, 'numpy_Handling complex numbers_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_sums_differences
Blockly.JavaScript['numpy_sums_differences'] = function(block) {
  var dropdown_numpy_sums_differences_opt = block.getFieldValue('numpy_Sums_differences_opt');
  var value_numpy_sums_differences_val = Blockly.JavaScript.valueToCode(block, 'numpy_Sums_differences_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_matrix_vector_products
Blockly.JavaScript['numpy_matrix_vector_products'] = function(block) {
  var dropdown_numpy_matrix_vector_products_opt = block.getFieldValue('numpy_Matrix_vector_products_opt');
  var value_numpy_matrix_vector_products_val = Blockly.JavaScript.valueToCode(block, 'numpy_Matrix_vector_products_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_matrix_decomposition
Blockly.JavaScript['numpy_matrix_decomposition'] = function(block) {
  var dropdown_numpy_matrix_decomposition_opt = block.getFieldValue('numpy_Matrix_Decomposition_opt');
  var value_numpy_matrix_decomposition_val = Blockly.JavaScript.valueToCode(block, 'numpy_Matrix_Decomposition_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
 

//numpy_array_contents
Blockly.JavaScript['numpy_array_contents'] = function(block) {
  var dropdown_numpy_array_contents_opt = block.getFieldValue('numpy_Array_contents_opt');
  var value_numpy_array_contents_val = Blockly.JavaScript.valueToCode(block, 'numpy_Array_contents_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_comparison
Blockly.JavaScript['numpy_comparison'] = function(block) {
  var dropdown_numpy_comparison_opt = block.getFieldValue('numpy_Comparison_opt');
  var value_numpy_comparison_val = Blockly.JavaScript.valueToCode(block, 'numpy_Comparison_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_string_operations
Blockly.JavaScript['numpy_string_operations'] = function(block) {
  var dropdown_numpy_string_operations_opt = block.getFieldValue('numpy_String_operations_opt');
  var value_numpy_string_operations_val = Blockly.JavaScript.valueToCode(block, 'numpy_String_operations_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_string_operations2
Blockly.JavaScript['numpy_string_operations2'] = function(block) {
  var dropdown_numpy_string_operations2_opt = block.getFieldValue('numpy_String_operations2_opt');
  var value_numpy_string_operations2_val = Blockly.JavaScript.valueToCode(block, 'numpy_String_operations2_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpystring_information
Blockly.JavaScript['numpystring_information'] = function(block) {
  var dropdown_numpystring_information_opt = block.getFieldValue('numpyString_information_opt');
  var value_numpystring_information_val = Blockly.JavaScript.valueToCode(block, 'numpyString_information_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_changing_array_shape
Blockly.JavaScript['numpy_changing_array_shape'] = function(block) {
  var dropdown_numpy_changing_array_shape_opt = block.getFieldValue('numpy_Changing_array_shape_opt');
  var value_numpy_changing_array_shape_val = Blockly.JavaScript.valueToCode(block, 'numpy_Changing_array_shape_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_transpose_like_operations
Blockly.JavaScript['numpy_transpose_like_operations'] = function(block) {
  var dropdown_numpy_transpose_like_operations_opt = block.getFieldValue('numpy_Transpose_like_operations_opt');
  var value_numpy_transpose_like_operations_val = Blockly.JavaScript.valueToCode(block, 'numpy_Transpose_like_operations_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_changing_number
Blockly.JavaScript['numpy_changing_number'] = function(block) {
  var dropdown_numpy_changing_number_opt = block.getFieldValue('numpy_Changing_number_opt');
  var value_numpy_changing_number_val = Blockly.JavaScript.valueToCode(block, 'numpy_Changing_number_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_changing_kind_array
Blockly.JavaScript['numpy_changing_kind_array'] = function(block) {
  var dropdown_numpy_changing_kind_array_opt = block.getFieldValue('numpy_Changing_kind_array_opt');
  var value_numpy_changing_kind_array_val = Blockly.JavaScript.valueToCode(block, 'numpy_Changing_kind_array_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_joining_arrays
Blockly.JavaScript['numpy_joining_arrays'] = function(block) {
  var dropdown_numpy_joining_arrays_opt = block.getFieldValue('numpy_Joining_arrays_opt');
  var value_numpy_joining_arrays_val = Blockly.JavaScript.valueToCode(block, 'numpy_Joining_arrays_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
 
//numpy_splitting_arrays
Blockly.JavaScript['numpy_splitting_arrays'] = function(block) {
  var dropdown_numpy_splitting_arrays_opt = block.getFieldValue('numpy_Splitting_arrays_opt');
  var value_numpy_splitting_arrays_val = Blockly.JavaScript.valueToCode(block, 'numpy_Splitting_arrays_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//numpy_adding_removing_elements
Blockly.JavaScript['numpy_adding_removing_elements'] = function(block) {
  var dropdown_numpy_adding_removing_elements_opt = block.getFieldValue('numpy_Adding_removing_elements_opt');
  var value_numpy_adding_removing_elements_val = Blockly.JavaScript.valueToCode(block, 'numpy_Adding_removing_elements_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_rearranging_elements
Blockly.JavaScript['numpy_rearranging_elements'] = function(block) {
  var dropdown_numpy_rearranging_elements_opt = block.getFieldValue('numpy_Rearranging_elements_opt');
  var value_numpy_rearranging_elements_val = Blockly.JavaScript.valueToCode(block, 'numpy_Rearranging_elements_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_ones_and_zeros
Blockly.JavaScript['numpy_ones_and_zeros'] = function(block) {
  var dropdown_numpy_ones_and_zeros_opt = block.getFieldValue('numpy_Ones and zeros_opt');
  var value_numpy_ones_and_zeros_val = Blockly.JavaScript.valueToCode(block, 'numpy_Ones and zeros_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//numpy_ones_and_zeros
Blockly.JavaScript['numpy_ones_and_zeros'] = function(block) {
  var dropdown_numpy_ones_and_zeros_opt = block.getFieldValue('numpy_Ones and zeros_opt');
  var value_numpy_ones_and_zeros_val = Blockly.JavaScript.valueToCode(block, 'numpy_Ones and zeros_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_from_existing_data
Blockly.JavaScript['numpy_from_existing_data'] = function(block) {
  var dropdown_numpy_from_existing_data_opt = block.getFieldValue('numpy_From_existing_data_opt');
  var value_numpy_from_existing_data_val = Blockly.JavaScript.valueToCode(block, 'numpy_From_existing_data_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_creating_record_arrays
Blockly.JavaScript['numpy_creating_record_arrays'] = function(block) {
  var dropdown_numpy_creating_record_arrays_opt = block.getFieldValue('numpy_Creating_record_arrays_opt');
  var value_numpy_creating_record_arrays_val = Blockly.JavaScript.valueToCode(block, 'numpy_Creating_record_arrays_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//numpy_numerical_ranges
Blockly.JavaScript['numpy_numerical_ranges'] = function(block) {
  var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
  var value_numpy_numerical_ranges_val = Blockly.JavaScript.valueToCode(block, 'numpy_Numerical_ranges_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_numerical_ranges
Blockly.JavaScript['numpy_numerical_ranges2'] = function(block) {
  var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
  var value_numpy_numerical_ranges_val = Blockly.JavaScript.valueToCode(block, 'numpy_Numerical_ranges_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//numpy_building_matrices
Blockly.JavaScript['numpy_building_matrices'] = function(block) {
  var dropdown_numpy_building_matrices_opt = block.getFieldValue('numpy_Building_matrices_opt');
  var value_numpy_building_matrices_val = Blockly.JavaScript.valueToCode(block, 'numpy_Building_matrices_val', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_np_array'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = np.array(' + value_text + ')\n';
  return code;
};

Blockly.JavaScript['create_np_array2'] = function (block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_text2 = Blockly.JavaScript.valueToCode(block, 'text2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + ' = np.array(' + value_text + ')[' + value_text2 + ']\n';
  return code;
};