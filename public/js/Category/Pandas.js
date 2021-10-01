PANDAS = '<category name="%{BKY_CATEGORY_PANDAS}" colour="%{BKY_PANDAS_HUE}">'; 

PANDAS += '<category name="%{BKY_PAN_PRODUCE}" colour="%{BKY_PANDAS_HUE}">';

//<!-- pandas 라이브러리 -->';
PANDAS += '<block type="pandas_library"></block>';

// PANDAS += '<block type="csv_url">';
// PANDAS += ' <value name="d1">';
// PANDAS += '     <block type="variables_get">';
// PANDAS += '         <field name="VAR">df</field>';
// PANDAS += '     </block>';
// PANDAS += ' </value>';
// PANDAS += ' <value name="va">';
// PANDAS += '     <shadow type="indata">';
// PANDAS += '         <field name="indata1"></field>';
// PANDAS += '     </shadow>';
// PANDAS += '</value>';
// PANDAS += '</block>';

PANDAS += '<block type="pandas_csv_read">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '<value name="va">';
PANDAS += '<block type="fileopen"></block>';     
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>'; 

PANDAS += '<block type="pandas_pickle_read">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="va">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">\'filename.pkl\'</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- read_sql -->';
PANDAS += '<block type="pandas_sql_read">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block >';
PANDAS += '</value>';
PANDAS += '<value name="SQL">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">\'select * from tableName\'</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '<value name="CON">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">con=con</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- csv_to -->';
PANDAS += '<block type="pandas_csv_to">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="va">'; 
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">"filename.csv", header=False, index=False</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';  

//<!-- pcikle_to -->';
PANDAS += '<block type="pandas_pickle_to">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="va">'; 
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">\'filename.pkl\'</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';  

//<!-- sql_to -->';
PANDAS += '<block type="pandas_sql_to">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block >';
PANDAS += '</value>';
PANDAS += '<value name="SQL">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">\'tablename\'</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '<value name="CON">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">con=con</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';


//<!-- html_to -->';
PANDAS += '<block type="pandas_html_to">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="va">'; 
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">\'filename.html\'</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';  

//<!-- csv프레임 -->';
PANDAS += '<block type="csvdataframe_J">';
PANDAS += '<value name="input_var">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '<value name="csv">';
PANDAS += '<block type="csv2"></block>';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

// 프레임 속성
PANDAS += `
<block type="data_frame">
  <value name="select_value">
    <block type="variables_get">
      <field name="VAR">df</field>
    </block>
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
  </value>
  <value name="select_value2">
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
  </value>
</block>`

//<!-- 인덱싱 -->';
PANDAS += '<block type="pandas_indexing">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block >';
PANDAS += '</value>';
PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 기초 조회 -->';
PANDAS += `
<block type="pandas_head">
  <value name="VAR">
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
    <block type="variables_get">
      <field name="VAR">df</field>
    </block>
  </value>
  <value name="NUM">
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
  </value>
</block>
`;

//<!-- 데이터 내용 조회-->';
PANDAS += '<block type = "pandas_oc">';
PANDAS += '<value name="d0">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d1">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- items -->';
PANDAS += '<block type = "pandas_items">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 비어있는지 확인 -->';
PANDAS += '<block type = "pandas_nanull">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';   

//<!-- where -->';
PANDAS += '<block type="pandas_where">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type = "pandas_sort">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';



PANDAS += '<block type="pandas_numpy">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';
//<!-- 범위설정 -->';
//<!-- PANDAS += '<block type="select_row_column_value">';
// PANDAS += '<value name="select_data">';
//   PANDAS += '<block type="variables_get">';
//     PANDAS += '<field name="VAR">df</field>';
//   </block>';
// </value>';
// PANDAS += '<value name="select_row_locate">';
//   PANDAS += '<block type="selec_value_all"></block>';
// </value>';
// PANDAS += '<value name="select_column_locate">';
//   PANDAS += '<block type="selec_value_all"></block>';
// </value>';
// </block>'; -->';

//<!-- 행렬추출 -->';
//<!-- PANDAS += '<block type="select_row_list">';
// PANDAS += '<value name="list_data">';
//   PANDAS += '<block type="variables_get">';
//     PANDAS += '<field name="VAR">df</field>';
//   </block>';
// </value>';
// </block>'; -->';

//<!-- 전체범위 -->';
//<!-- PANDAS += '<block type="selec_value_all"></block>'; -->';
//<!-- 부분범위 -->';
//<!-- PANDAS += '<block type="iloc_range"></block>'; -->';

PANDAS += '</category>';

//<!---------------------------------------------------------------------------------- 분석&집계 ---------------->';
PANDAS += '<category name="%{BKY_PAN_ANALYSIS}" colour="%{BKY_PANDAS_HUE}">';
//<!-- 기본 통계 -->';
PANDAS += '<block type="pandas_info">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- pandas_unique -->';
PANDAS += '<block type="pandas_unique">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 상관 관계 -->';
PANDAS += '<block type="pandas_corr">';
PANDAS += '<value name="INPUT1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '    </block>';
PANDAS += '  </value>';
PANDAS += '<value name="INPUT2">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '    </shadow>';
PANDAS += '  </value>';
PANDAS += '</block>'; 

PANDAS += '<block type="block_sum_min">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '    </block>';
PANDAS += '  </value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '    </shadow>';
PANDAS += '  </value>';
PANDAS += '</block>'; 

PANDAS += '<block type="block_cumsum">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '    </block>';
PANDAS += '  </value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '    </shadow>';
PANDAS += '  </value>';
PANDAS += '</block>'; 

//<!-- 
// PANDAS += '<block type="block_calculations">';
//   PANDAS += '<value name="INPUT">';
//     PANDAS += '<shadow type="indata">';
//       PANDAS += '<field name="indata1"></field>';
//       PANDAS += '    </shadow>';
//       PANDAS += '  </value>';
//       PANDAS += '</block>'; 

// PANDAS += '<block type="groupby_dataFrame_2">';
// PANDAS += '<value name="colName">';
//   PANDAS += '<block type="groupby_series_"></block>';
//   PANDAS += '</value>';
//   PANDAS += '</block>'; -->';

//<!-- 그룹 -->';
//<!-- PANDAS += '<block type = "df_agg">';
// PANDAS += '<value name = "LIST">';
//   PANDAS += '<shadow type="indata">';
//     PANDAS += '<field name="indata1"></field>';
//   </shadow>';
// </value>';
// </block>'; -->';
//<!-- 프레임 그룹화 -->';
PANDAS += '<block type = "groupby_dataFrame1">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '  </block>';
PANDAS += '</value>';
PANDAS += '<value name="d2">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="pandas_apply">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>'; 

PANDAS += '</category>';

//<!----------------------------------------------------------------------------------조작가공-->';
PANDAS += '<category name="%{BKY_PAN_OPER}" colour="%{BKY_PANDAS_HUE}">';
//<!-- astype -->';
PANDAS += '<block type="pandas_astype">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';
//<!-- PANDAS += '<block type="pyo_lib"></block>'; -->';

//<!-- 2020-09-09 양승국-->';
//<!-- 일괄변경 -->';
//<!-- PANDAS += '<block type="pandas_conversion">';
// PANDAS += '<value name="pa_frm">';
//   PANDAS += '<block type="variables_get">';
//     PANDAS += '<field name="VAR">df</field>';
//     PANDAS += '</block>';
//     PANDAS += '</value>';
// PANDAS += '<value name="pa_cul">';
//   PANDAS += '<shadow type="indata">';
//     PANDAS += '<field name="indata1">';name</field>';
//     PANDAS += '</shadow>';
//     PANDAS += '</value>';
// PANDAS += '<value name="pa_data">';
//   PANDAS += '<shadow type="indata">';
//     PANDAS += '<field name="indata1">';null</field>';
//     PANDAS += '</shadow>';
//     PANDAS += '</value>';
// PANDAS += '<value name="pa_chidata">';
//   PANDAS += '<shadow type="indata">';
//     PANDAS += '<field name="indata1">';50</field>';
//     PANDAS += '</shadow>';
//     PANDAS += '</value>';
//     PANDAS += '</block>'; -->';

//<!-- 결측치삽입 -->';
//<!-- PANDAS += '<block type="fill_null_data">';
// PANDAS += '<value name="DATA">';
//   PANDAS += '<block type="variables_get">';
//     PANDAS += '<field name="VAR">df</field>';
//   </block>';
// </value>';
// </block>'; -->';

//<!-- 삭제 -->';
PANDAS += '<block type = "df_col_rename">';
PANDAS += '<value name="df">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="origin_col">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 삭제 -->';
PANDAS += '<block type = "pandas_drop">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d2">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d3">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">0</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '<value name="d4">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">"columns"</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 중복값삭제 -->';
PANDAS += '<block type = "pandas_drop_duplicates">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d2">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d3">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 결측치삭제 -->';
PANDAS += '<block type = "pandas_dropna">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d2">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d3">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 결합 혹은 복사 -->';
PANDAS += '<block type = "df_merge">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 컬럼 및 인덱스 조작 -->';
PANDAS += '<block type = "df_reindex">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>'; 

//<!-- 데이터 프레임 자체의 형태를 변환시킴 -->';  
PANDAS += '<block type="pandas_transpose">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 피봇테이블 -->';
PANDAS += '<block type = "pandas_pivot">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '  </block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 가변수 -->';
PANDAS += '<block type = "pandas_get_dummies">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '  </block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="pandas_date_range">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">pf</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '</block>';


PANDAS += '<block type="pandas_series_str">';
PANDAS += '<value name="VAR">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type = "pandas_multiIndex">';
PANDAS += '<value name="d1">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type = "pandas_stack">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '  </block>';
PANDAS += '</value>';
PANDAS += '<value name="d2">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '  </shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type = "pandas_cat">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '  </block>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type = "pandas_cat_set">';
PANDAS += '<value name="d1">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">df</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="d2">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 행열삭제 -->';
//<!-- PANDAS += '<block type="select_row_delete">';
// PANDAS += '<value name="select_data">';
//   PANDAS += '<block type="variables_get">';
//     PANDAS += '<field name="VAR">df</field>';
//   </block>';
// </value>';
// </block>'; -->';



//<!-- 열 추가 -->';
//<!-- PANDAS += '<block type="df_add_col"></block>'; -->';

//<!-- 2020-09-09 양승국 -->';
//<!-- zip리스트 -->';
//<!-- PANDAS += '<block type="pandas_datalist">';
// PANDAS += '<value name="frm_var">';
//   PANDAS += '<block type="variables_get">';
//     PANDAS += '<field name="VAR">';my_list</field>';
//   </block>';
// </value>';
// PANDAS += '<value name="data_lst">';
//   PANDAS += '<block type="createColumn"></block>';
// </value>';
// </block>'; -->';
//<!-- zip 프레임 -->';
//<!-- PANDAS += '<block type="pandas_dataframe">';
// PANDAS += '<value name="df_va">';
// PANDAS += '<block type="variables_get">';
// PANDAS += '<field name="VAR">df</field>';
// PANDAS += '</block>';
// PANDAS += '</value>';
// PANDAS += '<value name="lst">';
// PANDAS += '<block type="variables_get">';
// PANDAS += '<field name="VAR">';my_list</field>';
// PANDAS += '</block>';
// PANDAS += '</value>';
// PANDAS += '</block>'; -->

//<!-- 2020-10-15 정지현 컬럼명 변경 -->';
//<!-- PANDAS += '<block type="df_col_rename"></block>'; -->';

//<!-- PANDAS += '<block type="column_count"></block>'; -->';
//<!-- PANDAS += '<block type="image_list"></block>'; -->';


//<!-- <label text="대기중"></label>';

// PANDAS += '<block type = "df_pivot_table">';
// PANDAS += '<value name="LIST">';
// PANDAS += '<shadow type="indata">';
// PANDAS += '<field name="indata1">df<, values=['D', 'E'], index=['A', 'C'], aggfunc={'D': np.mean,'E': np.mean}</field>';
// PANDAS += '</shadow>';
// PANDAS += '</value>';
// PANDAS += '</block>';
// -->';
PANDAS += '</category>';
//<!-------------------------------------------------------------------------------시리즈-->';
PANDAS += '<category name="%{BKY_PAN_SERIES}" colour="%{BKY_PANDAS_HUE}">';

//<!-- 시리즈생성 -->';
PANDAS += '<block type="pandas_series">';
PANDAS += '<value name="ser_var">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="ser_data">';
PANDAS += '<block type="pandas_series_data"></block>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 시리즈 concat -->';
PANDAS += '<block type="pandas_concat">';
PANDAS += '<value name="cat_vl">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';
//<!-- 2020-09-17 양승국 블록추가 -->';

//<!-- 시리즈 merge -->';
PANDAS += '<block type="pandas_merge">';
PANDAS += '<value name="mer_var">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="connet_way">';
PANDAS += '<block type="pandas_merge_oncol"></block>';
PANDAS += '</value>';
PANDAS += '</block>';

//<!-- 공통컬럼0 -->';
PANDAS += '<block type="pandas_merge_oncol"></block>';
//<!-- 공통컬럼x -->';
PANDAS += '<block type="pandas_merge_lron"></block>';

//<!-- 시리즈그룹화 -->';
PANDAS += '<block type="groupby_series">';
PANDAS += '<value name="colName">';
PANDAS += '<block type="groupby_series_"></block>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_series1">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';

PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_series2">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_series3">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += `
<block type="df_series_method_2">
  <value name="value1">
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
    <block type="variables_get">
      <field name="VAR">sr</field>
    </block>
  </value>
  <value name="value2">
    <shadow type="indata">
      <field name="indata1"></field>
    </shadow>
  </value>
</block>
`

PANDAS += '<block type="df_unique">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_is_in">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';

PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_tolist">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_name">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_resample">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">sr</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="df_add_function">';
PANDAS += '<value name="LIST">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '<value name="LIST2">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1"></field>';
PANDAS += '</shadow>';
PANDAS += '  </value>';
PANDAS += '</block>';


PANDAS += '</category>';

//<!-- 2020-09-20 양승국 판다스 전체수정-->';
//<!-- PANDAS += '<block type="import_lib">';
//   PANDAS += '<value name="var">';
//     PANDAS += '<block type="variables_get">';
//       PANDAS += '<field name="VAR"></field>';
//     </block>';
//   </value>';
// </block>'; -->';

//<!-- PANDAS += '<block type="pandas_print"></block>'; -->';

//<!-- PANDAS += '<block type="save_image"></block>'; -->';
//<!-- PANDAS += '<block type="list"></block>'; -->';
//<!-- PANDAS += '<block type="header"></block>'; -->';

//<!-- PANDAS += '<block type="pandas_plus">';
// PANDAS += '<value name="pl_v">';
//   PANDAS += '<block type="variables_get">';
//     PANDAS += '<field name="VAR">df</field>';
//   </block>';
// </value>';
// </block>'; -->';

//<!-- 2020-09-16 양승국-->';
//<!-- PANDAS += '<block type="nm"></block>'; -->';

//<!-- PANDAS += '<block type="pan_aray">';
// PANDAS += '<value name="aray_array">';
// PANDAS += '<block type="variables_get">';
// PANDAS += '<field name="VAR">array</field>';
// PANDAS += '</block>';
// PANDAS += '</value>';
// PANDAS += '</block>'; -->

PANDAS += '<category name="크롤링" colour="%{BKY_CROLL_HUE}">';
PANDAS += '<block type="croll_bs4_import"></block>';

PANDAS += '<block type="croll_requests_get">';
PANDAS += '<value name="URL">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">"https://www.melon.com/chart/index.htm"</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="croll_req_text">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">html</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<block type="croll_url_load">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">soup</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="VAR2">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">html</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '</block>';

PANDAS += '<label text="select"></label>';

PANDAS +=   '<block type="croll_soup_select">';
PANDAS +=       '<value name="VAR">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">result</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="VAR2">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">soup</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="INPUT">';
PANDAS +=           '<shadow type="indata">';
PANDAS +=               '<field name="indata1">"div >span>a"</field>';
PANDAS +=           '</shadow>';
PANDAS +=       '</value>';
PANDAS +=   '</block>';

PANDAS +=   '<block type="croll_soup_select_one">';
PANDAS +=       '<value name="VAR">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">result</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="VAR2">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">soup</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="INPUT">';
PANDAS +=           '<shadow type="indata">';
PANDAS +=               '<field name="indata1">"div >span>a"</field>';
PANDAS +=           '</shadow>';
PANDAS +=       '</value>';
PANDAS +=   '</block>';



PANDAS += '<label text="find"></label>';

PANDAS +=   '<block type="croll_find_all">';
PANDAS +=       '<value name="VAR">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">result</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="VAR2">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">soup</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="INPUT">';
PANDAS +=           '<shadow type="indata">';
PANDAS +=               '<field name="indata1"></field>';
PANDAS +=           '</shadow>';
PANDAS +=       '</value>';
PANDAS +=   '</block>';

PANDAS +=   '<block type="croll_find_one">';
PANDAS +=       '<value name="VAR">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">result</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="VAR2">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">soup</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="INPUT">';
PANDAS +=           '<shadow type="indata">';
PANDAS +=               '<field name="indata1"></field>';
PANDAS +=           '</shadow>';
PANDAS +=       '</value>';
PANDAS +=   '</block>';

PANDAS += '<label text="data"></label>';

PANDAS +=   '<block type="croll_get_text">';
PANDAS +=       '<value name="VAR">';
PANDAS +=           '<block type="variables_get">';
PANDAS +=               '<field name="VAR">result</field>';
PANDAS +=           '</block>';
PANDAS +=       '</value>';
PANDAS +=       '<value name="VAR2">';
PANDAS +=           '<shadow type="indata">';
PANDAS +=               '<field name="indata1">0</field>';
PANDAS +=           '</shadow>';
PANDAS +=       '</value>';
PANDAS +=   '</block>';

PANDAS += '<block type="croll_soup">';
PANDAS += '<value name="VAR">';
PANDAS += '<block type="variables_get">';
PANDAS += '<field name="VAR">soup</field>';
PANDAS += '</block>';
PANDAS += '</value>';
PANDAS += '<value name="INPUT">';
PANDAS += '<shadow type="indata">';
PANDAS += '<field name="indata1">title</field>';
PANDAS += '</shadow>';
PANDAS += '</value>';
PANDAS += '</block>';


PANDAS += '</category>';

PANDAS += '</category>';