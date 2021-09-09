Blockly.Python['np_pi'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'np.pi';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['ax_lst_plot'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list + '.plot(' + value_name + ')\n';
  return code;
};

Blockly.Python['plt_xlabel_ylabel'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(value_name == ""){
    var code = `${value_list}.ylabel(${value_name2})\n`;
  } else if(value_name2 == ""){
    var code = `${value_list}.xlabel(${value_name})\n`;
  } else {
    var code = `${value_list}.xlabel(${value_name})\n${value_list}.ylabel(${value_name2})\n`;
  }
  return code;
};
Blockly.Python['plt_title_legend'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list + '.set_title(' + value_name +')\n' + value_list + '.legend(' + value_name2 +')\n' ;
  return code;
};

Blockly.Python['set_xlabel_ylabel'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  if(value_name == ""){
    var code = `${value_list}.set_ylabel(${value_name2})\n`;
  } else if(value_name2 == ""){
    var code = `${value_list}.set_xlabel(${value_name})\n`;
  } else {
    var code = `${value_list}.set_xlabel(${value_name})\n${value_list}.set_ylabel(${value_name2})\n`;
  }
  return code;
};

Blockly.Python['plt_axis'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list + '.axis(' + value_name + ')\n';
  return code;
};

Blockly.Python['plt_figure'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list + '.figure(' + value_name + ')\n';
  return code;
};

Blockly.Python['axs_set_xlim'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ax[' + value_name + '].set_xlim(' + value_val + ')\n';
  return code;
};

Blockly.Python['set_xlim_ylim_'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val_x = Blockly.Python.valueToCode(block, 'val_x', Blockly.Python.ORDER_ATOMIC);
  var value_val_y = Blockly.Python.valueToCode(block, 'val_y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_name}.xlim(${value_val_x})\n${value_name}.ylim(${value_val_y})\n`
  return code;
};

Blockly.Python['set_xticks_yticks'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_val_x = Blockly.Python.valueToCode(block, 'val_x', Blockly.Python.ORDER_ATOMIC);
  var value_val_y = Blockly.Python.valueToCode(block, 'val_y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_name}.xticks(${value_val_x})\n${value_name}.yticks(${value_val_y})\n`
  return code;
};

Blockly.Python['axs_set_xlabel'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ax[' + value_name + '].set_xlabel(' + value_val + ')\n';
  return code;
};


Blockly.Python['axs_set_ylabel'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ax[' + value_name + '].set_ylabel(' + value_val + ')\n';
  return code;
};


Blockly.Python['axs_set_xlabel2'] = function(block) {
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ax' + ".set_xlabel('" + value_val + "')\n";
  return code;
};


Blockly.Python['axs_set_ylabel2'] = function(block) {
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ax' + ".set_ylabel('" + value_val + "')\n";
  return code;
};


Blockly.Python['axs_grid'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name + '.grid(' + value_val + ')\n';
  return code;
};




Blockly.Python['fig_tight_layout'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var value_val = Blockly.Python.valueToCode(block, 'val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fig.tight_layout()\n';
  return code;
};

Blockly.Python['np_sqrt'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'np.sqrt(' + value_val1 + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['subplots'] = function(block) {
  var value_row = Blockly.Python.valueToCode(block, 'row', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'col', Blockly.Python.ORDER_ATOMIC);
  var value_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fig, axs = plt.subplots(' + value_row + ',' +
       value_col + ',sharex = ' + value_val1 + ', sharey = ' + value_val2 +')\n';
  return code;
};


Blockly.Python['scatter'] = function(block) {
  var value_row_col = Blockly.Python.valueToCode(block, 'row_col', Blockly.Python.ORDER_ATOMIC);
  var value_val_x = Blockly.Python.valueToCode(block, 'val_x', Blockly.Python.ORDER_ATOMIC);
  var value_val_y = Blockly.Python.valueToCode(block, 'val_y', Blockly.Python.ORDER_ATOMIC);
  var value_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
  var value_val2 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_ATOMIC);
  var value_val3 = Blockly.Python.valueToCode(block, 'val3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'axs[' + value_row_col + '].scatter(' + value_val_x + ',' + value_val_y
              + ', s = ' + value_val1 + ', c = ' + value_val2 + ',marker= ' + value_val3 +')\n';
  return code;
};


Blockly.Python['set_title2'] = function(block) {
  var value_row_col = Blockly.Python.valueToCode(block, 'row_col', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'ax' + ".set_title('" + value_row_col + "')\n";
  return code;
};


Blockly.Python['ax_stackplot'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

  var value_list_val = Blockly.Python.valueToCode(block, 'list_val', Blockly.Python.ORDER_ATOMIC);
  var value_dic_val = Blockly.Python.valueToCode(block, 'dic_val', Blockly.Python.ORDER_ATOMIC);
  var value_dic_key = Blockly.Python.valueToCode(block, 'dic_key', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //var code = 'ax.stackplot(' + value_list_val + ',' + value_dic_val + ',labels = ' + value_dic_key + ')\n';
  var code = `${variable_name}.stackplot(${value_list_val},${value_dic_val},labels=${value_dic_key})\n`;
  return code;
};


Blockly.Python['ax_legend'] = function(block) {
  var value_list = Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
  var value_loc = Blockly.Python.valueToCode(block, 'loc', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_list + ".legend(" + value_loc + ")\n";
  return code;
};


// skimage/////////////


Blockly.Python['img_as_float'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.Python.valueToCode(block, 'para', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_para}(${value_var})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['data_camera'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
  var dropdown_method = block.getFieldValue('method');
  var value_para = Blockly.Python.valueToCode(block, 'para', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `data.camera(${value_para})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['plt_ravel'] = function(block) {
  // TODO: Assemble Python into code variable.
  var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
// TODO: Assemble Python into code variable.
  var code =  value_name1 + ".ravel("+ value_name2 +")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];;
};

Blockly.Python['ndi_zoom'] = function(block) {
  // TODO: Assemble Python into code variable.
  var value_name1 = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'data2', Blockly.Python.ORDER_ATOMIC);
// TODO: Assemble Python into code variable.
  var code =  value_name1 + ".zoom("+ value_name2 +")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];;
};

Blockly.Python['set_axis_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  var value_name1 = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'data2', Blockly.Python.ORDER_ATOMIC);
// TODO: Assemble Python into code variable.
  var code =  value_name1 + ".set_axis_off("+ value_name2 +")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];;
};

// 이 밑으로는 있는거(==> 임의로 만듬.)

Blockly.Python['Oper_garbage'] = function(block) {
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_a} ${dropdown_name} ${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['Oper_garbage2'] = function(block) {
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_a} ${dropdown_name} ${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['Oper_garbage3'] = function(block) {
  var value_a = Blockly.Python.valueToCode(block, 'A', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var value_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_a} ${dropdown_name} ${value_b}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//numpy_random_sample
Blockly.Python['numpy_random_sample__'] = function(block) {
  var dropdown_numpy_random_sample_opt = block.getFieldValue('numpy_Random_sample_opt');
  var value_numpy_random_sample_val = Blockly.Python.valueToCode(block, 'numpy_Random_sample_val', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
 
  var code;
  switch (dropdown_numpy_random_sample_opt){
    case "numpy_Random_sample_rand": 
    code = `np.random.rand(${value_numpy_random_sample_val})`;  
    break; 

    case "numpy_Random_sample_randn": 
    code = `np.random.randn(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_randint":
    code = `np.random.randint(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_random":
    code = `np.random.random(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_choice":
    code = `np.random.choice(${value_numpy_random_sample_val})`;  
    break;

    case "numpy_Random_sample_bytes":
    code = `np.random.bytes(${value_numpy_random_sample_val})`;  
    break;


    default:
    break;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['create_dict_1'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = { ' + value_text + ' }\n';
  return code;
};

Blockly.Python['create_list_sj'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ' = [' + value_text + ']\n';
  return code;
};

Blockly.Python['dic_menu1_sj'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var dropdown_dic = block.getFieldValue('dic');
  if (dropdown_dic == 'items') {
    var code = variable_list + '.items()';
  } else if (dropdown_dic == 'clear') {
    var code = variable_list + '.clear()';
  } else if (dropdown_dic == 'getvalues') {
      var code = variable_list + '.values()';
  } else if (dropdown_dic == 'getkeys') {
      var code = variable_list + '.keys()';
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['dic_menu1_sj2'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var dropdown_dic = block.getFieldValue('dic');
  if (dropdown_dic == 'items') {
    var code = variable_list + '.items()';
  } else if (dropdown_dic == 'clear') {
    var code = variable_list + '.clear()';
  } else if (dropdown_dic == 'getvalues') {
      var code = variable_list + '.values()';
  } else if (dropdown_dic == 'getkeys') {
      var code = variable_list + '.keys()';
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['pandas_series_str'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.${dropdown_drop}(${value_input})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['pandas_apply'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.apply(${value_input})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['scatter_ex'] = function(block) {
  var value_v1 = Blockly.Python.valueToCode(block, 'v1', Blockly.Python.ORDER_ATOMIC);
  var value_v2 = Blockly.Python.valueToCode(block, 'v2', Blockly.Python.ORDER_ATOMIC);
  var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);
  var value_s = Blockly.Python.valueToCode(block, 's', Blockly.Python.ORDER_ATOMIC);
  var value_c = Blockly.Python.valueToCode(block, 'c', Blockly.Python.ORDER_ATOMIC);
  var value_marker = Blockly.Python.valueToCode(block, 'marker', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `ax[${value_v1},${value_v2}].scatter(${value_x1},${value_y1}, s= ${value_s}, c = ${value_c}, marker = ${value_marker})\nax[${value_v1},${value_v2}].set_title(${value_title})`;
  return code + '\n';
}



// scipy



Blockly.Python['scipy_signal_cwt'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.cwt(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['scipy_signal_spectrogram'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.spectrogram(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['scipy_signal_gaussian'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.gaussian(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_signal_hann'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.hann(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_signal_flattop'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.flattop(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_signal_blackman'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.blackman(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_signal_exponential'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.exponential(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['scipy_signal_hamming'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `signal.hamming(${value_data})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
