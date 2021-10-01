////////////////////////////////////////////////////////////////////
// 2020-09-03 Pandas Code Generation 2학년 파트
////////////////////////////////////////////////////////////////////

Blockly.Python['pandas_library'] = function (block) {
  var dropdown_list = block.getFieldValue('list');
  // TODO: Assemble JavaScript into code variable.
  let code = `import ${dropdown_list}`
  return code;
};

Blockly.Python['load_csv'] = function (block) {
  var value_var = Blockly.Python.valueToCode(block, 'pan_lod_var', Blockly.Python.ORDER_ATOMIC);
  var value_load = Blockly.Python.valueToCode(block, 'LOAD', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript Python code variable.
  // var code =  value_var +'.read_csv(' + value_load + ')';
  var code = value_var + '.read_csv(pyodide.open_url(' + value_load + '))';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 양승국 수정
Blockly.Python['fill_null_data'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'DATA', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  if (dropdown_name == 1) var code = value_name + '=' + value_name + '.fillna(' + value_name + '.max())\n';
  else if (dropdown_name == 2) var code = value_name + '=' + value_name + '.fillna(' + value_name + '.min())\n';
  else if (dropdown_name == 3) var code = value_name + '=' + value_name + '.fillna(' + value_name + '.median())\n';
  else if (dropdown_name == 4) var code = value_name + '=' + value_name + '.fillna(' + value_name + '.mean())\n';
  else if (dropdown_name == 5) var code = value_name + '=' + value_name + '.fillna(0)\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['pyo_lib'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = 'import pyodide \n';
  return code;
};

// 정규화
//2020-09-19 양승국 수정
Blockly.Python['normal'] = function (block) {
  var value_normalization_data = Blockly.Python.valueToCode(block, 'Normalization_data', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_normalization_data + '["' + text_name + '"]' + '=(' + value_normalization_data + '["' + text_name + '"]' + '-' + value_normalization_data + '["' + text_name + '"]' + '.mean())' + '/' + value_normalization_data + '["' + text_name + '"]' + '.std()' + '\n';
  return code;
};

// 헤더 삭제하기
Blockly.Python['deletehead'] = function (block) {
  var value_delete_header = Blockly.Python.valueToCode(block, 'delete_header', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//2020-09-20 양승국 수정 columns = df_covid.colums[[1,2,3,4]]
Blockly.Python['select_row_delete'] = function (block) {
  var value_select_data = Blockly.Python.valueToCode(block, 'select_data', Blockly.Python.ORDER_ATOMIC);
  var value_select_drop = block.getFieldValue('select_drop');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble Python into code variable.
  if (dropdown_name == 1) var code = value_select_data + '=' + value_select_data + '.drop([' + value_select_drop + '], axis = 0' + ')\n';
  else if (dropdown_name == 2) var code = value_select_data + '=' + value_select_data + '.drop(' + 'columns = ' + value_select_data + '.columns[[' + value_select_drop + ']], axis = 1)\n';
  return code;
};

Blockly.Python['leave_row_data'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_row = Blockly.Python.valueToCode(block, 'select_row', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.loc[' + value_select_row + ']';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['leave_column_data'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column = Blockly.Python.valueToCode(block, 'select_column', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '[' + value_select_column + ']\n';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['save_data'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//이미지 담기 제외
// Blockly.Python['save_image'] = function(block) {
//   var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...\n';
//   return code;
// };

//2020-09-19 양승국
Blockly.Python['list'] = function (block) {
  var value_input_data = Blockly.Python.valueToCode(block, 'input_data', Blockly.Python.ORDER_ATOMIC);
  var value_out_data = Blockly.Python.valueToCode(block, 'out_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_input_data + '=' + value_out_data + '.values.tolist()\n';
  return code;
};

//2020-09-19 양승국
Blockly.Python['header'] = function (block) {
  var value_inv = Blockly.Python.valueToCode(block, 'header_input_var', Blockly.Python.ORDER_ATOMIC);
  var value_hov = Blockly.Python.valueToCode(block, 'header_output_var', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_inv + '=' + 'list(' + value_hov + '.columns.values)\n';
  return code;
};

//2020-09-19 양승국
Blockly.Python['select_row_list'] = function (block) {
  var value_list_data = Blockly.Python.valueToCode(block, 'list_data', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('list_val');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble Python into code variable.
  if (dropdown_name == 1) var code = value_list_data + '.loc[[' + text_name + ']]';
  else if (dropdown_name == 2) var code = value_list_data + '[' + value_list_data + '.columns[[' + text_name + ']]]';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['select_column_list'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.Python.valueToCode(block, 'select_column_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '[' + value_select_column_locate + ']';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 양승국 코드수정
Blockly.Python['select_row_column_value'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_data', Blockly.Python.ORDER_ATOMIC);
  var value_select_row_locate = Blockly.Python.valueToCode(block, 'select_row_locate', Blockly.Python.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.Python.valueToCode(block, 'select_column_locate', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_select_value + '.iloc[' + value_select_row_locate + ',' + value_select_column_locate + ']';
  return [code, Blockly.Python.ORDER_NONE];
};

//2020-09-19 양승국 수정
Blockly.Python['row_count'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  var value_select_value2 = Blockly.Python.valueToCode(block, 'select_value2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('count');
  // TODO: Assemble Python into code variable.
  var code = `${value_select_value}${dropdown_name}(${value_select_value2})`;
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Python['image_list'] = function(block) {
//   var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...\n';
//   return code;
// };

Blockly.Python['count_label'] = function (block) {
  var value_select_value = Blockly.Python.valueToCode(block, 'select_value', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//2020-09-18 양승국 수정
Blockly.Python['pandas_datalist'] = function (block) {
  var value_frm_var = Blockly.Python.valueToCode(block, 'frm_var', Blockly.Python.ORDER_ATOMIC);
  var value_data_lst = Blockly.Python.valueToCode(block, 'data_lst', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_frm_var + ' = list(zip( ' + value_data_lst + '));\n';
  return code;
};

//2020-09-19 양승국
Blockly.Python['pandas_dataframe'] = function (block) {
  var value_df_va = Blockly.Python.valueToCode(block, 'df_va', Blockly.Python.ORDER_ATOMIC);
  var value_lst = Blockly.Python.valueToCode(block, 'lst', Blockly.Python.ORDER_ATOMIC);
  var text_name = block.getFieldValue('col_name');
  var code = value_df_va + ' = ' + 'pd.DataFrame(data = ' + value_lst + ', columns =[' + text_name + '])\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-19 양승국 수정
Blockly.Python['csvdataframe_J'] = function (block) {
  var value_input_var = Blockly.Python.valueToCode(block, 'input_var', Blockly.Python.ORDER_ATOMIC);
  var value_csv = Blockly.Python.valueToCode(block, 'csv', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_input_var + ' = pd.DataFrame(' + value_csv + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//20.09.09 이성주 - 컬럼 블록 추가
Blockly.Python['createColumn'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return [b.join(", "), Blockly.Python.ORDER_ATOMIC]
};

//2020-09-19 양승국
Blockly.Python['pandas_conversion'] = function (block) {
  var value_pa_frm = Blockly.Python.valueToCode(block, 'pa_frm', Blockly.Python.ORDER_ATOMIC);
  var value_pa_cul = Blockly.Python.valueToCode(block, 'pa_cul', Blockly.Python.ORDER_ATOMIC);
  var value_pa_data = Blockly.Python.valueToCode(block, 'pa_data', Blockly.Python.ORDER_ATOMIC);
  var value_pa_chidata = Blockly.Python.valueToCode(block, 'pa_chidata', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_pa_frm + '.loc[' + value_pa_frm + '[' + value_pa_cul + '] == ' + value_pa_data + ', ' + value_pa_cul
    + '] = ' + value_pa_chidata + ';\n';
  return code;
};

//2020-09-19 양승국 수정
Blockly.Python['pandas_mis_del'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name1 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('DEL_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_name + '=' + value_name + '.' + dropdown_name + "(" + value_name1 + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-10 양승국 추가
Blockly.Python['selec_value_all'] = function (block) {
  // TODO: Assemble Python into code variable.
  var code = ':';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-09-13 양승국 추가
Blockly.Python['iloc_range'] = function (block) {
  var text_st_range = block.getFieldValue('st_range');
  var text_ed_range = block.getFieldValue('ed_range');
  // TODO: Assemble Python into code variable.
  var code = text_st_range + ':' + text_ed_range;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//2020-09-16 양승국 추가
Blockly.Python['nm'] = function (block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_anymore = Blockly.Python.valueToCode(block, 'anymore', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_data + "=" + value_anymore + '\n';
  return code;
};

//2020-09-20 양승국 
Blockly.Python['pandas_series'] = function (block) {
  var value_ser_var = Blockly.Python.valueToCode(block, 'ser_var', Blockly.Python.ORDER_ATOMIC);
  var value_ser_data = Blockly.Python.valueToCode(block, 'ser_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_ser_var + '=' + 'pd.Series(' + value_ser_data + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-16 양승국 추가
Blockly.Python['pandas_series_data'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return ["[" + b.join(", ") + "]", Blockly.Python.ORDER_ATOMIC]

};

//2020-09-19 양승국 추가
Blockly.Python['pandas_concat'] = function (block) {
  var value_cat_vl = Blockly.Python.valueToCode(block, 'cat_vl', Blockly.Python.ORDER_ATOMIC);
  var value_data1 = Blockly.Python.valueToCode(block, 'data1', Blockly.Python.ORDER_ATOMIC);
  var value_data2 = Blockly.Python.valueToCode(block, 'data2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('PLEUS_NAME');
  // TODO: Assemble Python into code variable.
  var code = value_cat_vl + '=' + 'pd.concat([' + value_data1 + ',' + value_data2 + ']' + dropdown_name + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-19 양승국 추가
Blockly.Python['pandas_merge'] = function (block) {
  var value_mer_var = Blockly.Python.valueToCode(block, 'mer_var', Blockly.Python.ORDER_ATOMIC);
  var value_plus_data1 = Blockly.Python.valueToCode(block, 'plus_data1', Blockly.Python.ORDER_ATOMIC);
  var value_plus_data2 = Blockly.Python.valueToCode(block, 'plus_data2', Blockly.Python.ORDER_ATOMIC);
  var value_connet_way = Blockly.Python.valueToCode(block, 'connet_way', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_mer_var + '=' + 'pd.merge(' + value_plus_data1 + ', ' + value_plus_data2 + ', ' + value_connet_way + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-19 양승국 추가
Blockly.Python['pandas_merge_oncol'] = function (block) {
  var text_name = block.getFieldValue('mer_NAME');
  // TODO: Assemble Python into code variable.
  var code = 'on="' + text_name + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//2020-09-19 양승국 추가
Blockly.Python['pandas_merge_lron'] = function (block) {
  var text_mer_LNAME = block.getFieldValue('mer_LNAME');
  var text_mer_RNAME = block.getFieldValue('mer_RNAME');
  // TODO: Assemble Python into code variable.
  var code = 'left_on="' + text_mer_LNAME + '" , right_on="' + text_mer_RNAME + '"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//20. 09. 19 이성주
////GroupBy 추가
Blockly.Python['groupby_series'] = function (block) {
  var value_series_or_dataframe = Blockly.Python.valueToCode(block, 'Series_or_Dataframe', Blockly.Python.ORDER_ATOMIC);
  var value_colname = Blockly.Python.valueToCode(block, 'colName', Blockly.Python.ORDER_ATOMIC);
  var dropdown_function = block.getFieldValue('function');
  // TODO: Assemble Python into code variable.
  var code = value_series_or_dataframe + '.groupby(' + value_colname + ')' + dropdown_function;
  return [code, Blockly.Python.ORDER_NONE];
};


//2020-09-19 이성주
Blockly.Python['groupby_series_'] = function (a) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.Python.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return ['[' + b.join(", ") + ']', Blockly.Python.ORDER_ATOMIC]

};

//2020-09-20 양승국 추가
Blockly.Python['pandas_plus'] = function (block) {
  var value_pl_v = Blockly.Python.valueToCode(block, 'pl_v', Blockly.Python.ORDER_ATOMIC);
  var text_crt_col = block.getFieldValue('crt_col');
  var text_fr_col = block.getFieldValue('fr_col');
  var dropdown_function = block.getFieldValue('dat_fu');
  var text_se_col = block.getFieldValue('se_col');
  // TODO: Assemble Python into code variable.
  var code = value_pl_v + '["' + text_crt_col + '"] = ' + value_pl_v + '["' + text_fr_col + '"]' + dropdown_function + value_pl_v + '["' + text_se_col + '"]\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//2020-09-21 양승국 추가 array[None, sasd]
Blockly.Python['pan_aray'] = function (block) {
  var variable_aray_array = Blockly.Python.valueToCode(block, 'aray_array', Blockly.Python.ORDER_ATOMIC);
  var variable_ary_a1 = Blockly.Python.valueToCode(block, 'ary_a1', Blockly.Python.ORDER_ATOMIC);
  var variable_ary_a2 = Blockly.Python.valueToCode(block, 'ary_a2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_aray_array + '[' + variable_ary_a1 + ',' + variable_ary_a2 + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

////////////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
////////////////////////////////////////////////////////////////////


// array

Blockly.Python['array_select'] = function (block) {
  // Create a list with any number of elements of any type.
  var value_name = Blockly.Python.valueToCode(block, 'array_var', Blockly.Python.ORDER_ATOMIC);
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.Python.valueToCode(block, 'ADD' + i,
      Blockly.Python.ORDER_NONE) || 'None';
    // elements[i] = block.getFieldValue('ADD' + i) || 'None';
  }
  var code = value_name + '[' + elements.join('][') + ']';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 컬럼명 변경 2020-10-15 정지현
Blockly.Python['df_col_rename'] = function(block) {
  var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
  var value_origin_col = Blockly.Python.valueToCode(block, 'origin_col', Blockly.Python.ORDER_ATOMIC);
  var text_modified_col = block.getFieldValue('modified_col');
  // TODO: Assemble Python into code variable.
  var code = value_df + ' = ' + value_df + '.rename(columns={'+ value_df + '.columns[' + value_origin_col +'] : "'+text_modified_col + '"})\n';
  return code;
};

Blockly.Python['df_add_col'] = function(block) {
  var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
  var text_added_col = block.getFieldValue('added_col');
  var value_add_data = Blockly.Python.valueToCode(block, 'add_data', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_df + "['" + text_added_col + "'] = " + value_add_data + '\n';
  return code;
};


//2020-12-29 전우진 csv url 불러오기

Blockly.Python['csv_url'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  `${value_name1} = pd.read_csv(pyodide.open_url('${value_name}'))\n`
  var code =  `${value_name1} = pd.read_csv(pyodide.open_url('${value_name}'))\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

// 2020.01.26 head() 남지원
Blockly.Python['pandas_head'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_num = Blockly.Python.valueToCode(block, 'NUM', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = `${value_var}.${dropdown_drop}`;
  if(dropdown_drop !== 'T'){
    code += `(${value_num})`;
  }
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


// 2020.01.26 head() 남지원
Blockly.Python['pandas_info'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.${dropdown_drop}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 2020.01.26 head() 남지원
Blockly.Python['pandas_astype'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.${dropdown_drop}(${value_input})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// 2020.01.26 pandas_unique() 남지원
Blockly.Python['pandas_unique'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = `${value_var}.${dropdown_drop}(${value_input})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//////////////////////////////
/// 2021-01-27 양승국 판다스 블록 추가
///////////////////////////////////

//pandas_indexing
Blockly.Python['pandas_indexing'] = function(block) {
  var variable_list = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + "[" + value_name + "]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//pandas_oc
Blockly.Python['pandas_oc'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd0', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.${dropdown_drop}[${value_name}]`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//pandas_items
Blockly.Python['pandas_items'] = function(block) {
  var variable_list = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_list + ".items()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//pandas_where
Blockly.Python['pandas_where'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".where(" + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['groupby_dataFrame1'] = function (block) {
  var value_series_or_dataframe = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_colname = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_func = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  // TODO: Assemble Python into code variable.
  var code = `${value_series_or_dataframe}.groupby(${value_colname}).${dropdown_drop}()`;
  // var code = value_series_or_dataframe + '.groupby(' + value_colname + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['pandas_transpose'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".transpose(" + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['pandas_pivot'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.pivot_table(${value_input})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['pandas_get_dummies'] = function(block) {
  var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_var}.get_dummies(${value_input})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  


Blockly.Python['pandas_multiIndex'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_list} = pd.MultiIndex.from_tuples(${value_name})`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['pandas_stack'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.${dropdown_drop}(${value_name2})`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['pandas_cat'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.cat.categories`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['pandas_cat_set'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.cat.set_categories(${value_name2})`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['pandas_sub'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.sub(${value_name2})`
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

Blockly.Python['pandas_drop'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  var value_name4 = Blockly.Python.valueToCode(block, 'd4', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1} = ${value_name2}.drop(columns = ${value_name2}.columns[${value_name3}], axis = ${value_name4})\n`
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};  

Blockly.Python['pandas_drop_duplicates'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1} = ${value_name2}.drop_duplicates(${value_name3})\n`
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};  

Blockly.Python['pandas_dropna'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');

  var value_name3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1} = ${value_name2}.${dropdown_drop}(${value_name3})\n`
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};  



// 데이터 통계
Blockly.Python['block_sum_min'] = function(block) {
  var variable_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.${dropdown_drop}(${value_name})`;
  return [code,Blockly.Python.ORDER_ATOMIC];
};

// 데이터 누적 통계
Blockly.Python['block_cumsum'] = function(block) {
  var variable_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.${dropdown_drop}(${value_name})`;
  return [code,Blockly.Python.ORDER_ATOMIC];
};

// 데이터 사칙연산
Blockly.Python['block_calculations'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.${dropdown_drop}(${value_name})`;
  return code;
};

// 데이터 정렬
Blockly.Python['pandas_sort'] = function(block) {
  var variable_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var dropdown_drop2 = block.getFieldValue('DROP2');
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  if(dropdown_drop == "sort_index"){
    var code = `${variable_name}.${dropdown_drop}(axis=${value_name}, ascending=${dropdown_drop2})`;
  } else {
    var code = `${variable_name}.${dropdown_drop}(by=['${value_name}'], ascending=${dropdown_drop2})`;
  }
  return [code,Blockly.Python.ORDER_ATOMIC];
};

// 데이터 상관관계
Blockly.Python['pandas_corr'] = function(block) {
  var value_input1 = Blockly.Python.valueToCode(block, 'INPUT1', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_input2 = Blockly.Python.valueToCode(block, 'INPUT2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_input1}.${dropdown_drop}(${value_input2})`;
  return [code,Blockly.Python.ORDER_ATOMIC];
};

// 판다스 난, 널 판단
Blockly.Python['pandas_nanull'] = function(block) {
  var variable_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${variable_name}.${dropdown_drop}(${value_name})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//df_merge 병합
Blockly.Python['df_merge'] = function(block) {
  var variable_list = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${variable_list}.${dropdown_dic}(${value_name})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//df_reindex
Blockly.Python['df_reindex'] = function(block) {
  var variable_list = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble Python into code variable.
  var code = `${variable_list}.${dropdown_drop}(${value_name})\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  



//df_unique
Blockly.Python['df_unique'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".unique()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_is_in
Blockly.Python['df_is_in'] = function(block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".isin( " + value_name + " )";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_name
Blockly.Python['df_name'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".name";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_tolist
Blockly.Python['df_tolist'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + ".tolist()";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//////////////////////////////////////////////////////////////////시리즈
//df_series1
Blockly.Python['df_series1'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + "(" + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_series2
Blockly.Python['df_series2'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + "[" + value_name + "]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//df_series3
Blockly.Python['df_series3'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_name1 + "[" + value_name + "]";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

//판다스 넘파이배열
Blockly.Python['pandas_numpy'] = function(block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_name1}.to_numpy(${value_name})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  

// 2021.06.09 지원
//read_sql
Blockly.Python['pandas_read_sql'] = function(block) {
  var variable_list = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var variable_list2 = Blockly.Python.valueToCode(block, 'SQL', Blockly.Python.ORDER_ATOMIC);
  var value_name = Blockly.Python.valueToCode(block, 'CON', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = `${variable_list} = pd.read_sql(${variable_list2}, ${value_name})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
