//라이브러리 임포트    
Blockly.Python['import_matplotlib_list'] = function (block) {
  var dropdown_list = block.getFieldValue('list');
  // TODO: Assemble Python into code variable.
  var code = `import ${dropdown_list} \n`;
  return code;
};

Blockly.Python['visualization_library'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "import matplotlib.pyplot as plt\n";
  return code;
};

Blockly.Python['import_matplotlib'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "import matplotlib\n";
  return code;
};

//그래프 출력 설정 
Blockly.Python['select_graph_option'] = function (block) {
  var value_select_graph_option_location1 = Blockly.Python.valueToCode(block, 'select_graph_option_location1', Blockly.Python.ORDER_ATOMIC);
  var value_select_graph_option_location2 = Blockly.Python.valueToCode(block, 'select_graph_option_location2', Blockly.Python.ORDER_ATOMIC);
  var value_select_graph_option_xy = Blockly.Python.valueToCode(block, 'select_graph_option_XY', Blockly.Python.ORDER_ATOMIC);
  var value_select_graph_option_graph = Blockly.Python.valueToCode(block, 'select_graph_option_graph', Blockly.Python.ORDER_ATOMIC);
  var value_select_graph_option_title = Blockly.Python.valueToCode(block, 'select_graph_option_title', Blockly.Python.ORDER_ATOMIC);
  var value_select_graph_option_x = Blockly.Python.valueToCode(block, 'select_graph_option_X', Blockly.Python.ORDER_ATOMIC);
  var value_select_graph_option_y = Blockly.Python.valueToCode(block, 'select_graph_option_Y', Blockly.Python.ORDER_ATOMIC);
  var value_select_graph_option_end = Blockly.Python.valueToCode(block, 'select_graph_option_END', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.

  var code;

  if (DL_Gra == "graph_or_1") {//둘중 하나 
    code = `ax[${value_select_graph_option_location1}].${value_select_graph_option_graph}( `;
  } else if (DL_Gra == "graph_both_1") {
    code = `ax.${value_select_graph_option_graph}( `;
  } else {
    code = `ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].${value_select_graph_option_graph}(`;
  }

  code = code.concat(`${value_select_graph_option_xy}, label = "${value_select_graph_option_end}" `);

  if (DL_Gra == "graph_or_1") {
    code = code.concat(`\nax[${value_select_graph_option_location1}].set_title("${value_select_graph_option_title}", fontproperties=fontprop) 
  ax[${value_select_graph_option_location1}].set_xlabel("${value_select_graph_option_x}", fontproperties=fontprop)
  ax[${value_select_graph_option_location1}].set_ylabel("${value_select_graph_option_y}", fontproperties=fontprop) 
  ax[${value_select_graph_option_location1}].legend(loc='best', prop=fontprop)\n`);

  } else if (DL_Gra == "graph_both_1") {
    code = code.concat(`\nax.set_title("${value_select_graph_option_title}", fontproperties=fontprop) 
  ax.set_xlabel("${value_select_graph_option_x}", fontproperties=fontprop) 
  ax.set_ylabel("${value_select_graph_option_y}", fontproperties=fontprop)  
  ax.legend(loc='best', prop=fontprop)\n`);

  } else {
    code = code.concat(`\nax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_title("${value_select_graph_option_title}", fontproperties=fontprop)
  ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_xlabel("${value_select_graph_option_x}", fontproperties=fontprop)
  ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].set_ylabel("${value_select_graph_option_y}", fontproperties=fontprop)
  ax[${value_select_graph_option_location1}][${value_select_graph_option_location2}].legend(loc='best', prop=fontprop)\n`);
  }


  code = code.concat(`plt.show()\n`);

  return code;
};



Blockly.Python['matp_Ex'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.figure(figsize=(${value_name2} ,${value_name3}))`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['matp_title'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.set_title(${value_name2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['matplotlib_3d_scatter'] = function (block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_z = Blockly.Python.valueToCode(block, 'z', Blockly.Python.ORDER_ATOMIC);
  var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);
  var value_x_label = Blockly.Python.valueToCode(block, 'x_label', Blockly.Python.ORDER_ATOMIC);
  var value_y_label = Blockly.Python.valueToCode(block, 'y_label', Blockly.Python.ORDER_ATOMIC);
  var value_z_label = Blockly.Python.valueToCode(block, 'z_label', Blockly.Python.ORDER_ATOMIC);
  var value_s = Blockly.Python.valueToCode(block, 's', Blockly.Python.ORDER_ATOMIC);
  var value_c = Blockly.Python.valueToCode(block, 'c', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'fig = plt.figure(figsize=(5, 5))\nax = fig.gca(projection="3d")\nax.scatter(' + value_x + ', ' + value_y + ', ' + value_z + ', s=' + value_s + ', c=' + value_c + ')\n' +
    'ax.set_xlabel("' + value_x_label + '", fontproperties=fontprop)\n' + 'ax.set_ylabel("' + value_y_label + '", fontproperties=fontprop)\n' + 'ax.set_zlabel("' + value_z_label + '", fontproperties=fontprop)\n' + 'plt.title("' + value_title + '", fontproperties=fontprop)\n' + 'plt.show()\n';
  return code;
};

Blockly.Python['plt_text'] = function(block) {
  var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
  var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
  var value_s = Blockly.Python.valueToCode(block, 's', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `plt.text(${value_x}, ${value_y}, '${value_s}')\n`;
  return code;
};

Blockly.Python['annotation_b_box'] = function(block) {
  var value_offsetbox = Blockly.Python.valueToCode(block, 'offsetbox', Blockly.Python.ORDER_ATOMIC);
  var value_xy = Blockly.Python.valueToCode(block, 'xy', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code =
  `matplotlib.offsetbox.AnnotationBbox(offsetbox=${value_offsetbox}, xy=${value_xy})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['offset_image'] = function(block) {
  var value_arr = Blockly.Python.valueToCode(block, 'arr', Blockly.Python.ORDER_ATOMIC);
  var value_cmap = Blockly.Python.valueToCode(block, 'cmap', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `matplotlib.offsetbox.OffsetImage(arr=${value_arr}, cmap=${value_cmap})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['plt_matshow'] = function(block) {
  var value_arr = Blockly.Python.valueToCode(block, 'arr', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `plt.matshow(${value_arr})\n`;
  return code;
};