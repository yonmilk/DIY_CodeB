

 //라이브러리 임포트    
 Blockly.JavaScript['cbook_import'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  return code;
};



//////////////////////
Blockly.JavaScript['get_sample_data'] = function (block) {
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble JavaScript into code variable.
  var code = `cbook.get_sample_data("${input_text}", np_load=${dropdown_drop})`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// get_sample_data
Blockly.JavaScript['set_inset_axes'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 드롭다운 버전
// set_xlim_ylim
/*
Blockly.JavaScript['set_xlim_ylim'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);

  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text}.${dropdown_drop}(${input_text})\n`;
  return code;
};
*/

// set_xlim, set_ylim
Blockly.JavaScript['set_xlim'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text}.set_xlim(${input_text})\n`;
  return code;
};
Blockly.JavaScript['set_ylim'] = function (block) {
  var var_text = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var input_text = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text}.set_ylim(${input_text})\n`;
  return code;
};

//// indicate_inset_zoom
Blockly.JavaScript['indicate_inset_zoom'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text1}.indicate_inset_zoom(${var_text2})\n`;
  return code;
};

//// subplot
Blockly.JavaScript['subplots'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${var_text1}.subplots(${var_text2})\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//// set_facecolor
Blockly.JavaScript['set_facecolor'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'VAR2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// shape
Blockly.JavaScript['shape'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// set_xticklabels
Blockly.JavaScript['set_xticklabels'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 연산
Blockly.JavaScript['Oper_x'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// set_yticklabels
Blockly.JavaScript['set_yticklabels'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// boxplot
Blockly.JavaScript['boxplot'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// set_title
Blockly.JavaScript['set_title'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// boxplot
Blockly.JavaScript['yaxis_grid'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// set_xlabel
Blockly.JavaScript['set_xlabel'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};


//// set_ylabel
Blockly.JavaScript['set_ylabel'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//// hist
Blockly.JavaScript['hist'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// cohere
Blockly.JavaScript['cohere'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//// tight_layout
Blockly.JavaScript['tight_layout'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

Blockly.JavaScript['numpy_random_sample_x'] = function (block) {
  var var_text1 = Blockly.JavaScript.valueToCode(block, 'numpy_Random_sample_val', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('numpy_Random_sample_opt');
  // TODO: Assemble JavaScript into code variable.

  var code = '/n';

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};




//2021.01.22 try_except 남지원
Blockly.JavaScript['try_except'] = function(block) {
  var statements_try = Blockly.JavaScript.statementToCode(block, 'TRY');
  var value_except1 = Blockly.JavaScript.valueToCode(block, 'EXCEPT1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_except2 = Blockly.JavaScript.statementToCode(block, 'EXCEPT2');
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

// 2021.01.25 except_block 남지원
Blockly.JavaScript['except_block'] = function(block) {
  var dropdown_drop = block.getFieldValue('DROP');
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// butter
Blockly.JavaScript['scipy_butter'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// scipy_sosfilt
Blockly.JavaScript['scipy_sosfilt'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// scipy_hilbert
Blockly.JavaScript['scipy_hilbert'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// scipy_correlate
Blockly.JavaScript['scipy_correlate'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// scipy_stft_istft
Blockly.JavaScript['scipy_stft_istft'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// scipy_find_peaks
Blockly.JavaScript['scipy_find_peaks'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// scipy_find_peaks
Blockly.JavaScript['scipy_fft'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// 맷플롯립 파이 만들기
Blockly.JavaScript['matplotlib_pie'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_labels = Blockly.JavaScript.valueToCode(block, 'labels', Blockly.JavaScript.ORDER_ATOMIC);
  var value_autopct = Blockly.JavaScript.valueToCode(block, 'autopct', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var value_explode = Blockly.JavaScript.valueToCode(block, 'explode', Blockly.JavaScript.ORDER_ATOMIC);
  var value_other = Blockly.JavaScript.valueToCode(block, 'other', Blockly.JavaScript.ORDER_ATOMIC);

  let code = "\n";
  return code;
};

// 맷플롯립 버블 만들기
Blockly.JavaScript['matplotlib_scatter'] = function(block) {
  var value_data_x = Blockly.JavaScript.valueToCode(block, 'data_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_y = Blockly.JavaScript.valueToCode(block, 'data_y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
  var value_legend = Blockly.JavaScript.valueToCode(block, 'legend', Blockly.JavaScript.ORDER_ATOMIC);
  var value_other = Blockly.JavaScript.valueToCode(block, 'other', Blockly.JavaScript.ORDER_ATOMIC);


  let code = "\n";
  return code;
};

// 맷플롯립 컬러맵
Blockly.JavaScript['matplotlib_colormap'] = function(block) {
  var value_data_x = Blockly.JavaScript.valueToCode(block, 'data_x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);

  var code = `\n`;
  return code;
};