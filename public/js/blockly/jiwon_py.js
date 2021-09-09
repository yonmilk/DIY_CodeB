//라이브러리 임포트    
Blockly.Python['cbook_import'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "from matplotlib import cbook\n";
  return code;
};

// 연산
Blockly.Python['Oper_x'] = function(block) {
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_a} ${dropdown_name} ${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// get_sample_data
Blockly.Python['get_sample_data'] = function (block) {
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble Python into code variable.
  var code = `cbook.get_sample_data("${input_text}", np_load=${dropdown_drop})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// get_sample_data
Blockly.Python['set_inset_axes'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = `${var_text}.inset_axes(${input_text})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 드롭다운 버전
// set_xlim_ylim
/*
Blockly.Python['set_xlim_ylim'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var input_text = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = `${var_text}.${dropdown_drop}(${input_text})\n`;
  return code;
};
*/

// set_xlim, set_ylim
Blockly.Python['set_lim'] = function (block) {
  var var_text = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var input_text = Blockly.Python.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
  var input_text2 = Blockly.Python.valueToCode(block, 'INPUT2', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  if(input_text2 == ""){
    var code = `${var_text}.set_xlim(${input_text})\n`;
  } else {
    var code = `${var_text}.set_xlim(${input_text})\n${var_text}.set_ylim(${input_text2})\n`;
  }
  return code;
};

//// indicate_inset_zoom
Blockly.Python['indicate_inset_zoom'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.indicate_inset_zoom(${var_text2})\n`;
  return code;
};

//// subplot
Blockly.Python['subplots'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.subplots(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//// set_facecolor
Blockly.Python['set_facecolor'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'VAR2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_facecolor(${var_text2})\n`;
  return code;
};

//// set_facecolor
Blockly.Python['shape'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.shape`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//// set_xticklabels
Blockly.Python['set_xticklabels'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_xticklabels(${var_text2})\n`;
  return code;
};


//// set_yticklabels
Blockly.Python['set_yticklabels'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_yticklabels(${var_text2})\n`;
  return code;
};

//// boxplot
Blockly.Python['boxplot'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.boxplot(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//// set_title
Blockly.Python['set_title'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_title(${var_text2})\n`;
  return code;
};

//// boxplot
Blockly.Python['yaxis_grid'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.yaxis.grid(${var_text2})\n`;
  return code;
};

//// set_xlabel
Blockly.Python['set_xlabel'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_xlabel(${var_text2})\n`;
  return code;
};


//// set_ylabel
Blockly.Python['set_ylabel'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.set_ylabel(${var_text2})\n`;
  return code;
};

//// hist
Blockly.Python['hist'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.hist(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//// cohere
Blockly.Python['cohere'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.cohere(${var_text2})\n`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//// tight_layout
Blockly.Python['tight_layout'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${var_text1}.tight_layout(${var_text2})\n`;
  return code;
};

Blockly.Python['numpy_random_sample_x'] = function (block) {
  var var_text1 = Blockly.Python.valueToCode(block, 'numpy_Random_sample_val', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('numpy_Random_sample_opt');
  // TODO: Assemble Python into code variable.

  var code;
  switch (dropdown_drop){
    case "numpy_Random_sample_rand": 
    code = `np.random.rand(${var_text1})`;  
    break; 

    case "numpy_Random_sample_randn": 
    code = `np.random.randn(${var_text1})`;  
    break;

    case "numpy_Random_sample_randint":
    code = `np.random.randint(${var_text1})`;  
    break;

    case "numpy_Random_sample_random":
    code = `np.random.random(${var_text1})`;  
    break;

    case "numpy_Random_sample_choice":
    code = `np.random.choice(${var_text1})`;  
    break;

    case "numpy_Random_sample_bytes":
    code = `np.random.bytes(${var_text1})`;  
    break;


    default:
    break;
  }
  // TODO: Change ORDER_ATOMIC to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};













//2021.01.22 try_except 남지원
Blockly.Python['try_except'] = function(block) {
  var statements_try = Blockly.Python.statementToCode(block, 'TRY');
  var value_except1 = Blockly.Python.valueToCode(block, 'EXCEPT1', Blockly.Python.ORDER_ATOMIC);
  var statements_except2 = Blockly.Python.statementToCode(block, 'EXCEPT2');
  // TODO: Assemble Python into code variable.
  var code = `try:\n${statements_try}except ${value_except1} :\n${statements_except2}`;
  return code;
};

// 2021.01.25 except_block 남지원
Blockly.Python['except_block'] = function(block) {
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${dropdown_drop}`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// scipy_butter
Blockly.Python['scipy_butter'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.butter(${value_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// scipy_sosfilt
Blockly.Python['scipy_sosfilt'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.butter(${value_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// scipy_hilbert
Blockly.Python['scipy_hilbert'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.hilbert(${value_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// scipy_correlate
Blockly.Python['scipy_correlate'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.correlate(${value_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// scipy_stft_istft
Blockly.Python['scipy_stft_istft'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `signal.${dropdown_drop}(${value_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// scipy_find_peaks
Blockly.Python['scipy_find_peaks'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.find_peaks(${value_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// scipy_find_peaks
Blockly.Python['scipy_fft'] = function(block) {
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `fft.fft(${value_input})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 맷플롯립 파이 만들기
Blockly.Python['matplotlib_pie'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_labels = Blockly.Python.valueToCode(block, 'labels', Blockly.Python.ORDER_ATOMIC);
  var value_autopct = Blockly.Python.valueToCode(block, 'autopct', Blockly.Python.ORDER_ATOMIC);
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);
  var value_explode = Blockly.Python.valueToCode(block, 'explode', Blockly.Python.ORDER_ATOMIC);
  var value_other = Blockly.Python.valueToCode(block, 'other', Blockly.Python.ORDER_ATOMIC);


  if(value_other==""){
    var code = `plt.pie(${value_data}, labels=${value_labels}, autopct=${value_autopct}, explode=${value_explode})
plt.title(${value_title})
plt.show()`;
  } else {
    var code = `plt.pie(${value_data}, labels=${value_labels}, autopct=${value_autopct}, explode=${value_explode}, ${value_other})
plt.title(${value_title})
plt.show()`;
  }
  
  return code;
};

// 맷플롯립 버블 만들기
Blockly.Python['matplotlib_scatter'] = function(block) {
  var value_data_x = Blockly.Python.valueToCode(block, 'data_x', Blockly.Python.ORDER_ATOMIC);
  var value_data_y = Blockly.Python.valueToCode(block, 'data_y', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);
  var value_legend = Blockly.Python.valueToCode(block, 'legend', Blockly.Python.ORDER_ATOMIC);
  var value_other = Blockly.Python.valueToCode(block, 'other', Blockly.Python.ORDER_ATOMIC);


  if(value_other==""){
    var code = `plt.scatter(${value_data_x}, ${value_data_y}, color=${value_color})
plt.title(${value_title})
plt.legend([${value_legend}])
plt.show()\n`;
  } else {
    var code = `plt.scatter(${value_data_x}, ${value_data_y}, color=${value_color}, ${value_other})
plt.title(${value_title})
plt.legend([${value_legend}])
plt.show()\n`;
  }
  
  return code;
};

// 맷플롯립 컬러맵 만들기
Blockly.Python['matplotlib_colormap'] = function(block) {
  var value_data_x = Blockly.Python.valueToCode(block, 'data_x', Blockly.Python.ORDER_ATOMIC);
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);

  var code = `plt.imshow(${value_data_x})
plt.colorbar()
plt.title(${value_title})
plt.show()`;
  return code + '\n';
};