// ////////////////////////////////////////////////////////////////////
// // 2020-09-19 Pandas java Code Generation 2학년 파트
// ////////////////////////////////////////////////////////////////////

Blockly.JavaScript['pandas_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pyo_lib'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_datalist'] = function (block) {
  var value_frm_var = Blockly.JavaScript.valueToCode(block, 'frm_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data_lst = Blockly.JavaScript.valueToCode(block, 'data_lst', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-09-19 양승국 수정
Blockly.JavaScript['csvdataframe_J'] = function (block) {
  var value_input_var = Blockly.JavaScript.valueToCode(block, 'input_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_csv = Blockly.JavaScript.valueToCode(block, 'csv', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_dataframe'] = function (block) {
  var value_df_va = Blockly.JavaScript.valueToCode(block, 'df_va', Blockly.JavaScript.ORDER_ATOMIC);
  var value_lst = Blockly.JavaScript.valueToCode(block, 'lst', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('col_name');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_conversion'] = function (block) {
  var value_pa_frm = Blockly.JavaScript.valueToCode(block, 'pa_frm', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pa_cul = Blockly.JavaScript.valueToCode(block, 'pa_cul', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pa_data = Blockly.JavaScript.valueToCode(block, 'pa_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pa_chidata = Blockly.JavaScript.valueToCode(block, 'pa_chidata', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['fill_null_data'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

//2020-09-19 양승국 수정
Blockly.JavaScript['pandas_mis_del'] = function (block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('DEL_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = "\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.JavaScript['selec_value_all'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ':';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['iloc_range'] = function (block) {
  var text_st_range = block.getFieldValue('st_range');
  var text_ed_range = block.getFieldValue('ed_range');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_column_value'] = function (block) {
  var value_select_value = Blockly.JavaScript.valueToCode(block, 'select_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_select_row_locate = Blockly.JavaScript.valueToCode(block, 'select_row_locate', Blockly.JavaScript.ORDER_ATOMIC);
  var value_select_column_locate = Blockly.JavaScript.valueToCode(block, 'select_column_locate', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['normal'] = function (block) {
  var value_normalization_data = Blockly.JavaScript.valueToCode(block, 'Normalization_data', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_delete'] = function (block) {
  var value_select_data = Blockly.JavaScript.valueToCode(block, 'select_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_select_drop = block.getFieldValue('select_drop');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['list'] = function (block) {
  var value_input_data = Blockly.JavaScript.valueToCode(block, 'input_data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_out_data = Blockly.JavaScript.valueToCode(block, 'out_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['header'] = function (block) {
  var value_inv = Blockly.JavaScript.valueToCode(block, 'header_input_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hov = Blockly.JavaScript.valueToCode(block, 'header_output_var', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['select_row_list'] = function (block) {
  var value_list_data = Blockly.JavaScript.valueToCode(block, 'list_data', Blockly.JavaScript.ORDER_ATOMIC);
  var text_name = block.getFieldValue('list_val');
  var dropdown_name = block.getFieldValue('srd_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

// 프레임속성값
Blockly.JavaScript['data_frame'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['row_count'] = function (block) {
    var value_select_value = Blockly.JavaScript.valueToCode(block, 'select_value', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('count');
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

Blockly.JavaScript['nm'] = function (block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
  var value_anymore = Blockly.JavaScript.valueToCode(block, 'anymore', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_series'] = function (block) {
  var value_ser_var = Blockly.JavaScript.valueToCode(block, 'ser_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ser_data = Blockly.JavaScript.valueToCode(block, 'ser_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_series_data'] = function (block) {
  var value_ser_var = Blockly.JavaScript.valueToCode(block, 'ser_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ser_data = Blockly.JavaScript.valueToCode(block, 'ser_data', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_concat'] = function (block) {
  var value_cat_vl = Blockly.JavaScript.valueToCode(block, 'cat_vl', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data1 = Blockly.JavaScript.valueToCode(block, 'data1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_data2 = Blockly.JavaScript.valueToCode(block, 'data2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('PLEUS_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_merge'] = function (block) {
  var value_mer_var = Blockly.JavaScript.valueToCode(block, 'mer_var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_plus_data1 = Blockly.JavaScript.valueToCode(block, 'plus_data1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_plus_data2 = Blockly.JavaScript.valueToCode(block, 'plus_data2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_connet_way = Blockly.JavaScript.valueToCode(block, 'connet_way', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

Blockly.JavaScript['pandas_merge_oncol'] = function (block) {
  var text_name = block.getFieldValue('mer_NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pandas_merge_lron'] = function (block) {
  var text_mer_LNAME = block.getFieldValue('mer_LNAME');
  var text_mer_RNAME = block.getFieldValue('mer_RNAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};





Blockly.JavaScript['groupby_series'] = function (block) {
  var value_series_or_dataframe = Blockly.JavaScript.valueToCode(block, 'Series_or_Dataframe', Blockly.JavaScript.ORDER_ATOMIC);
  var value_colname = Blockly.JavaScript.valueToCode(block, 'colName', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_function = block.getFieldValue('function');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};



Blockly.JavaScript['groupby_series_'] = function (block) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['createColumn'] = function (block) {
  for (var b = Array(a.itemCount_), c = 0; c < a.itemCount_; c++) b[c] = Blockly.JavaScript.valueToCode(a, "ADD" + c, Blockly.JavaScript.ORDER_COMMA) || "None";
  return [b.join(", "), Blockly.JavaScript.ORDER_ATOMIC]
  // TODO: Assemble JavaScript into code variable.
};

Blockly.JavaScript['pandas_plus'] = function (block) {
  var value_pl_v = Blockly.JavaScript.valueToCode(block, 'pl_v', Blockly.JavaScript.ORDER_ATOMIC);
  var text_crt_col = block.getFieldValue('crt_col');
  var text_fr_col = block.getFieldValue('fr_col');
  var dropdown_function = block.getFieldValue('dat_fu');
  var text_se_col = block.getFieldValue('se_col');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

// ////////////////////////////////////////////////////////////////////
// // Pandas 2학년 파트 끝
// ////////////////////////////////////////////////////////////////////

// array
Blockly.JavaScript['array_select'] = function (block) {
  // Create a list with any number of elements of any type.
  var value_name = Blockly.JavaScript.valueToCode(block, 'array_var', Blockly.JavaScript.ORDER_ATOMIC);
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
      Blockly.JavaScript.ORDER_COMMA) || 'null';
    // elements[i] = block.getFieldValue('ADD' + i);
  }
  var code = value_name + '[' + elements.join('][') + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//2020-09-21 양승국 추가 array[None, sasd]
Blockly.JavaScript['pan_aray'] = function (block) {
  var variable_aray_array = Blockly.JavaScript.valueToCode(block, 'aray_array', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_ary_a1 = Blockly.JavaScript.valueToCode(block, 'ary_a1', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_ary_a2 = Blockly.JavaScript.valueToCode(block, 'ary_a2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_aray_array + '[' + variable_ary_a1 + ',' + variable_ary_a2 + ']\n';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// 컬럼명 변경
Blockly.JavaScript['df_col_rename'] = function(block) {
  var code = '\n';
  return code;
};

Blockly.JavaScript['df_add_col'] = function(block) {
  var code = '\n';
  return code;
};

Blockly.JavaScript['csv_url'] = function(block) {
  var code = '\n';
  return code;
};


// 2020.01.26 head() 남지원
Blockly.JavaScript['pandas_head'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_num = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// 2020.01.26 head() 남지원
Blockly.JavaScript['pandas_info'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 2020.01.26 head() 남지원
Blockly.JavaScript['pandas_astype'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_var}.${dropdown_drop}(${value_input})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//////////////////////////////
/// 2021-01-27 양승국 판다스 블록 추가
///////////////////////////////////

//df_series2
Blockly.JavaScript['df_series2'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//pandas_oc
Blockly.JavaScript['pandas_oc'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// pandas_duplicated 중복조회
Blockly.JavaScript['pandas_duplicate'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//pandas_items
Blockly.JavaScript['pandas_items'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//pandas_where
Blockly.JavaScript['pandas_where'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

Blockly.JavaScript['groupby_dataFrame1'] = function (block) {
  var value_series_or_dataframe = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_colname = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//pandas_transpose
Blockly.JavaScript['pandas_transpose'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

Blockly.JavaScript['pandas_pivot'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

Blockly.JavaScript['pandas_get_dummies'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  


Blockly.JavaScript['pandas_multiIndex'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

Blockly.JavaScript['pandas_stack'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

Blockly.JavaScript['pandas_cat'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

Blockly.JavaScript['pandas_cat_set'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  


Blockly.JavaScript['pandas_sub'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

// pandas drop 열삭제
// Blockly.JavaScript['pandas_drop'] = function(block) {
//   var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_name3 = Blockly.JavaScript.valueToCode(block, 'd3', Blockly.JavaScript.ORDER_ATOMIC);
//   var value_name4 = Blockly.JavaScript.valueToCode(block, 'd4', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code ='\n';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return code;
// };  

// pandas drop
Blockly.JavaScript['pandas_drop'] = function(block) {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var value_c = Blockly.JavaScript.valueToCode(block, 'c', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dr = block.getFieldValue('dr');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['pandas_drop_duplicates'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name3 = Blockly.JavaScript.valueToCode(block, 'd3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};  

Blockly.JavaScript['pandas_dropna'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name2 = Blockly.JavaScript.valueToCode(block, 'd2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name3 = Blockly.JavaScript.valueToCode(block, 'd3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code ='\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};  




// 데이터 통계
Blockly.JavaScript['block_sum_min'] = function(block) {
  var variable_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code,Blockly.JavaScript.ORDER_ATOMIC];
};

// 데이터 누적 통계
Blockly.JavaScript['block_cumsum'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '\n';
  return code;
};

// 데이터 사칙연산
Blockly.JavaScript['block_calculations'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;

  return code;
};

// 데이터 정렬
Blockly.JavaScript['pandas_sort'] = function(block) {
  var variable_name = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

// 데이터 상관관계
Blockly.JavaScript['pandas_corr'] = function(block) {
  var value_input1 = Blockly.JavaScript.valueToCode(block, 'INPUT1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_input2 = Blockly.JavaScript.valueToCode(block, 'INPUT2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return [code,Blockly.JavaScript.ORDER_ATOMIC];
};

// 데이터 nan,null판단
Blockly.JavaScript['pandas_nanull'] = function(block) {
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var dropdown_drop = block.getFieldValue('DROP');
  var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

//df_merge 병합
Blockly.JavaScript['df_merge'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_dic = block.getFieldValue('collection');
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//df_reindex
Blockly.JavaScript['df_reindex'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  


//df_unique
Blockly.JavaScript['df_unique'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_is_in
Blockly.JavaScript['df_is_in'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_name
Blockly.JavaScript['df_name'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
}; 

//df_tolist
Blockly.JavaScript['df_tolist'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

////////////////////////////////////////////////////////////////시리즈
//df_series1
Blockly.JavaScript['df_series1'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code ='\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_series2
Blockly.JavaScript['df_series2'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

//df_series3
Blockly.JavaScript['df_series3'] = function(block) {
  var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'LIST', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

// 시리즈 메소드 2
Blockly.JavaScript['df_series_method_2'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_list = block.getFieldValue('list');
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_value1}.${dropdown_list}(${value_value1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 시리즈 메소드 3
Blockly.JavaScript['df_series_method_3'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_list = block.getFieldValue('list');
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_value1}.${dropdown_list}(${value_value1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// 시리즈 메소드 4
Blockly.JavaScript['df_series_method_4'] = function(block) {
  var value_value1 = Blockly.JavaScript.valueToCode(block, 'value1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_list = block.getFieldValue('list');
  var value_value2 = Blockly.JavaScript.valueToCode(block, 'value2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_value1}.${dropdown_list}(${value_value1})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//판다스 넘파이배열
Blockly.JavaScript['pandas_numpy'] = function(block) {
  var value_name1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};  

// pd.read 통합
Blockly.JavaScript['pandas_read'] = function(block) {
  var value_d1 = Blockly.JavaScript.valueToCode(block, 'd1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_list = block.getFieldValue('list');
  var value_va = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

// pd.to
Blockly.JavaScript['pandas_to'] = function(block) {
  var value_df = Blockly.JavaScript.valueToCode(block, 'df', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_list = block.getFieldValue('list');
  var value_va = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

// df.to
Blockly.JavaScript['dataframe_to'] = function(block) {
  var value_df = Blockly.JavaScript.valueToCode(block, 'df', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_list = block.getFieldValue('list');
  var value_va = Blockly.JavaScript.valueToCode(block, 'va', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

// df outer
Blockly.JavaScript['dataframe_outer'] = function(block) {
  var value_df = Blockly.JavaScript.valueToCode(block, 'df', Blockly.JavaScript.ORDER_ATOMIC);
  var value_df_to = Blockly.JavaScript.valueToCode(block, 'df_to', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

// 날짜2 date dt
Blockly.JavaScript['pandas_date_dt'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_list = block.getFieldValue('list');
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_d1}.dt.${dropdown_list}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};