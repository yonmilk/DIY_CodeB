var NUMPY = '<category name="%{BKY_CATEGORY_NUMPY}" colour="%{BKY_NUMPY_HUE}">';

NUMPY += '<category name="%{BKY_NUM_BASIC}" colour="%{BKY_NUMPY_HUE}">';
//<!-- import numpy as np -->';
NUMPY += ' <block type="numpy_library"></block>';

//<!-- loadtxt -->';
NUMPY += ' <block type = "numpy_loadtxt_basic">';
NUMPY += '  <value name="text">';
NUMPY += '      <block type="fileopen"></block>';
NUMPY += '  </value>';
NUMPY += '  <value name="delimiter">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">","</field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '  <value name="dtype">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">dtype = int</field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

//<!-----------------------------------------------------------------------------배열생성-->';
//NUMPY += '<label text="배열 생성"></label>';
NUMPY += '<label text="%{BKY_NUM_CREATE_ARRAY}"></label>';
//<!-- 넘파이 배열생성 1 -->';
NUMPY += ' <block type = "create_np_array">';
NUMPY += '  <value name="text">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">[1,2,3,4]</field>';
NUMPY += '      </shadow>';
NUMPY += ' </value>';

NUMPY += ' <value name="dtype">';
NUMPY += '  <shadow type="indata">';
NUMPY += '      <field name="indata1">dtype = int</field>';
NUMPY += '  </shadow>';
NUMPY += ' </value>';
NUMPY += '</block>';

//<!-- 넘파이 배열생성 2-->';
NUMPY += ' <block type = "create_np_array2">';
NUMPY += '  <value name="text">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '  <value name="text2">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"> : </field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

//<!-- numpy.array -->';
NUMPY += ' <block type="np_array">';
NUMPY += '  <value name="INPUT">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">[1,2,3,4]</field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '  <value name="DTYPE">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">dtype = int</field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

//<!-- NUMPY += ' <value name="np_array_val">';
//     NUMPY += ' <block type="create_arry"></block>';
//   NUMPY += ' </value>'; -->';

//<!-- 배열생성 / 0 & 1 -->'; 
NUMPY += ' <block type="numpy_ones_and_zeros_basic">';
NUMPY += '  <value name="parameter1">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">행,열</field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '  <value name="parameter2">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">dtype = float</field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

NUMPY += ' <block type="numpy_eye_basic">';
NUMPY += '  <value name="parameter1">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열생성 / 0 & 1 -->';

//<!-- 배열생성 / 숫자 범위 -->'; 
NUMPY += ' <block type="numpy_numerical_ranges_basic1">';
NUMPY += '  <value name="parameter1">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열생성 / 숫자 범위 -->';

//<!----------------------------------------------------------------------배열-->';
//<label text="배열 모양 변경"></label>';
NUMPY += '<label text="%{BKY_NUM_CHANGE_SHAPE}"></label>';
//<!-- 배열생성 / 숫자 범위2 -->'; 
//<!-- NUMPY += ' <block type="numpy_numerical_ranges_basic2">';
//     NUMPY += ' <value name="parameter1">'; 
//       NUMPY += ' <shadow type="indata">';
//         NUMPY += ' <field name="indata1"></field>';
//       NUMPY += ' </shadow>';
//     NUMPY += ' </value>';
//     NUMPY += ' <value name="parameter2">'; 
//       NUMPY += ' <shadow type="indata">';
//         NUMPY += ' <field name="indata1"></field>';
//       NUMPY += ' </shadow>';
//     NUMPY += ' </value>'; 
//   </block>';  -->';
//<!-- 배열생성 / 숫자 범위2 -->';

//<!-- astype -->';
NUMPY += ' <block type="numpy_astype">';
NUMPY += '  <value name="VAR">';
NUMPY += ' <block type="variables_get">';
NUMPY += '      <field name="VAR">a</field>';
NUMPY += ' </block>';
NUMPY += '  </value>';
NUMPY += '  <value name="INPUT">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

//<!-- np.reshape  -->';
NUMPY += ' <block type="numpy_changing_array_shape_basic">';
NUMPY += '  <value name="numpy_Changing_array_shape_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

NUMPY += ' <block type="numpy_reshape">';
NUMPY += '  <value name="numpy_reshape_val">';
NUMPY += '      <block type="variables_get">';
NUMPY += '          <field name="VAR">a</field>';
NUMPY += '      </block>';
NUMPY += '  </value>';

NUMPY += '  <value name="numpy_reshape_struct">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1">행,열</field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

NUMPY += ' <block type="numpy_select"></block>';
//<!-- 차원확인 -->';
//<!-- NUMPY += ' <block type="numpy_shape">';
// NUMPY += ' <value name="numpy_shape_num1">';
//   NUMPY += ' <block type="variables_get">';
//     NUMPY += ' <field name="VAR">';np</field>';
//     NUMPY += '     </block>';
// NUMPY += ' </value>';
// NUMPY += ' <value name="numpy_shape_num">';
//   NUMPY += ' <shadow type="indata">';
//     NUMPY += ' <field name="indata1"></field>';
//   NUMPY += ' </shadow>';
// NUMPY += ' </value>';
// NUMPY += '</block>'; -->';
//<!-- np.shape  -->';

NUMPY += ' <block type="numpy_transpose_like_operations_basic">';
NUMPY += '  <value name="numpy_Transpose_like_operations_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

NUMPY += ' <block type="numpy_from_existing_data">';
NUMPY += '  <value name="numpy_From_existing_data_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

//<!----------------------------------------------------------------------랜덤-->';
//NUMPY += '<label text="랜덤&정렬"></label>';
NUMPY += '<label text="%{BKY_NUM_RAN_SORT}"></label>';
NUMPY += ' <block type="numpy_random_generator_basic">';
NUMPY += '  <value name="numpy_Random_generator_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

NUMPY += ' <block type="numpy_random_sample_basic">';
NUMPY += '  <value name="parmeter1">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

//<!----------------------------------------------------------------------수학 통계-->';
//NUMPY += '<label text="넘파이 기본 연산"></label>';
NUMPY += '<label text="%{BKY_NUM_BASIC_OPER}"></label>';
//<!-- 수학 / 삼각 -->';
NUMPY += ' <block type="numpy_mathematical_functions">';
NUMPY += '  <value name="numpy_Mathematical functions_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 삼각  -->';

//<!-- 넘파이 기본연산 -->';
NUMPY += ' <block type="numpy_operator_basic">';
NUMPY += '  <value name="parameter1">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '  <value name="parameter2">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 넘파이 기본연산 -->';

//<!-- 수학 / 반올림 -->'; 
NUMPY += ' <block type="numpy_rounding_basic">';
NUMPY += '  <value name="numpy_Rounding_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 반올림  -->';

//<!-- 수학 / 합계 & 차이 -->'; 
NUMPY += ' <block type="numpy_sums_differences">';
NUMPY += '  <value name="numpy_Sums_differences_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 합계 & 차이  -->';
//<!-- 수학 / 지수 & 로그 -->'; 
//<!-- NUMPY += ' <block type="numpy_exponents_logarithms_basic">';
//     NUMPY += ' <value name="numpy_Exponents_logarithms_val">'; 
//       NUMPY += ' <shadow type="indata">';
//         NUMPY += ' <field name="indata1"></field>';
//       NUMPY += ' </shadow>';
//     NUMPY += ' </value>';  
//   </block>';  -->';
//<!-- 행렬 연산-->';
NUMPY += ' <block type="numpy_array_operator_basic">';
NUMPY += '  <value name="parameter1">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- NUMPY += ' <value name="parameter2">';
//   NUMPY += ' <shadow type="indata">';
//     NUMPY += ' <field name="indata1"></field>';
//   NUMPY += ' </shadow>';
// NUMPY += ' </value>';  -->';

//<!-- 행렬 연산 -->';

//<!-- 통계 / 평균 & 분산  -->';
NUMPY += ' <block type="numpy_averages_variances_basic">';
NUMPY += '  <value name="parameter1">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += ' </block>';
//<!-- NUMPY += ' <value name="parameter2">';
//   NUMPY += ' <shadow type="indata">';
//     NUMPY += ' <field name="indata1"></field>';
//   NUMPY += ' </shadow>';
// NUMPY += ' </value>'; -->';

//<!-- 통계 / 평균 & 분산  -->';

//<!---------------------------------------------------------------------인덱스/값검색-->';
//NUMPY += '<label text="인덱스/값 검색"></label>';
NUMPY += '<label text="%{BKY_NUM_SEARCH_INDEX}"></label>';
//<!-- 넘파이 인덱스/값 검색 -->';
NUMPY += ' <block type="numpy_index_values_basic">';
NUMPY += '  <value name="numpy_index_values_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 넘파이 인덱스/값 검색 -->';

NUMPY += ' <block type="numpy_index_values_basic_with_np">';
NUMPY += '  <value name="numpy_index_values_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '          <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';

//<!-- 넘파이 인덱스/값 검색 인자 두개-->';
NUMPY += ' <block type="numpy_index_values2">';
NUMPY += '  <value name="numpy_index_values_val">';
NUMPY += '      <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '      </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 넘파이 인덱스/값 검색 인자 두개-->';

//<!-- 통계 / 평균 & 분산  -->';

//<!-- CSV 저장 -->';
//<!-- NUMPY += ' <block type="data_to_csv"></block>'; -->';
//<!-- CSV 저장 -->';

//<!-- data_conversion-->';
//<!-- NUMPY += ' <block type="data_conversion"></block>'; -->';
//<!-- data_conversion -->';

//<!-- numpy_concatenate -->';
//<!-- NUMPY += ' <block type="np_concatenate"></block>'; -->';
//<!-- numpy_concatenate -->';

//<!-- numpy.array -->';

//<!-- numpy.array -->';
//<!-- NUMPY += ' <block type="np_array"></block>'; -->';
//<!-- numpy.array -->';

//<!-- numpy.arrage -->';
//<!-- NUMPY += ' <block type="np_arrange"></block>'; -->';
//<!-- numpy.arrage -->';


//<!-- numpy.zeros -->';
//<!-- NUMPY += ' <block type="numpy_zeros"></block>'; -->';
//<!-- numpy.zeros -->';

//<!-- numpy.full  -->';
//<!-- NUMPY += ' <block type="numpy_full">'; </block>'; -->';
//<!-- numpy.full  -->';

//<!-- np.eye   -->';
//<!-- NUMPY += ' <block type="numpy_eye"></block>'; -->';
//<!-- np.eye   -->';

//<!-- np.max_min  -->';
//<!-- NUMPY += ' <block type="numpy_max_min"></block>'; -->';
//<!-- np.max_min  -->';
NUMPY += ' <sep></sep>';
//<!-- np.shape  -->';
//<!-- NUMPY += ' <block type="numpy_shape"></block>'; -->';
//<!-- np.shape  -->';

//<!-- np.reshape  -->';
//<!-- NUMPY += ' <block type="np_flatten">'; </block>'; -->';
//<!-- np.reshape  -->';

//<!--  random. randn or randint   -->';
//<!-- NUMPY += ' <block type="numpy_random_rand">';
//     NUMPY += ' <value name="numpy_random_rand_lib_val">';
//       NUMPY += ' <block type="variables_get">';
//         NUMPY += ' <field name="VAR">';np</field>';
//         NUMPY += '  </block>';
//     NUMPY += ' </value>';

//     NUMPY += ' <value name="numpy_random_rand_num1">';
//       NUMPY += ' <shadow type="math_number">';
//         NUMPY += ' <field name="NUM">';2</field>';
//       NUMPY += ' </shadow>';
//     NUMPY += ' </value>';

//     NUMPY += ' <value name="numpy_random_rand_num2">';
//       NUMPY += ' <shadow type="math_number">';
//         NUMPY += ' <field name="NUM">';2</field>';
//       NUMPY += ' </shadow>';
//     NUMPY += ' </value>';
//   </block>'; -->';
//<!--  random. randn or randint   -->';

//<!--  np.exp  -->';
//<!-- NUMPY += ' <block type="numpy_exp"></block>'; -->';
//<!--  np.exp  -->';

//<!--  np.mean  -->';
//<!-- NUMPY += ' <block type="np_mean"></block>'; -->';
//<!--  np.mean  -->';

//<!--  np.diff  -->';
//<!-- NUMPY += ' <block type="np_diff_"></block>'; -->';
//<!--  np.diff  -->';

//<!-- np.append -->';
//<!-- NUMPY += ' <block type="np_arry_change"></block>'; -->';
//<!-- np.append -->';

//<!-- np.prod -->';
//<!-- NUMPY += ' <block type="np_prod"></block>'; -->';
//<!-- np.prod -->';

//<!-- np.fft -->';
//<!-- NUMPY += ' <block type="np_fft_fft"></block>'; -->';
//<!-- np.fft -->';

//<!-- np.abs -->';
//<!-- NUMPY += ' <block type="nump_abs"></block>'; -->';
//<!-- np.abs -->';

//<!--  import sklearn  -->';
//<!-- NUMPY += ' <block type="lib_import_sklearn"></block>'; -->';
//<!--  import sklearn  -->';
NUMPY += '</category>';

//<!-------------------------------------------------------------------------------------------- 수학 & 통계-->';
NUMPY += '<category name="%{BKY_NUM_MATH_STAT}" colour="%{BKY_NUMPY_HUE}">';
//NUMPY += '<label text="수학"></label>';
NUMPY += '<label text="%{BKY_NUM_MATH}"></label>';
//<!-- 수학 / 삼각 -->';
NUMPY += ' <block type="numpy_mathematical_functions">';
NUMPY += '  <value name="numpy_Mathematical functions_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 삼각  -->';

//<!-- 수학 / 쌍곡 -->'; 
NUMPY += ' <block type="numpy_hyperbolic_functions">';
NUMPY += '  <value name="numpy_Hyperbolic functions_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 쌍곡  -->';

//<!-- 수학 / 반올림 -->'; 
NUMPY += ' <block type="numpy_rounding">';
NUMPY += '  <value name="numpy_Rounding_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 반올림  -->';

//<!-- 수학 / 지수 & 로그 -->'; 
NUMPY += ' <block type="numpy_exponents_logarithms">';
NUMPY += '  <value name="numpy_Exponents_logarithms_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 지수 & 로그  -->';

//<!-- 수학 / 산술1 -->'; 
NUMPY += ' <block type="numpy_arithmetic_operations1">';
NUMPY += '  <value name="numpy_Arithmetic_operations1_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 산술1  -->';

//<!-- 수학 / 산술2 -->'; 
NUMPY += ' <block type="numpy_arithmetic_operations2">';
NUMPY += '  <value name="numpy_Arithmetic_operations2_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 산술2  -->';

//<!-- 수학 / 복소수 -->'; 
NUMPY += ' <block type="numpy_handling_complex_numbers">';
NUMPY += '  <value name="numpy_Handling complex numbers_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 복소수  -->';

//<!-- 수학 / 합계 & 차이 -->'; 
NUMPY += ' <block type="numpy_sums_differences">';
NUMPY += '  <value name="numpy_Sums_differences_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 수학 / 합계 & 차이  -->';

//NUMPY += '<label text="통계"></label>';
NUMPY += '<label text="%{BKY_NUM_STAT}"></label>';
NUMPY += ' <block type="numpy_order_static">';
NUMPY += '  <value name="numpy_order_static_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 통계 / 순서  -->';

//<!-- 통계 / 평균 & 분산  -->';
NUMPY += ' <block type="numpy_averages_variances">';
NUMPY += '  <value name="numpy_Averages_variances_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 통계 / 평균 & 분산  -->';

//<!-- 통계 / 상관 -->';
NUMPY += ' <block type="numpy_correlating">';
NUMPY += '  <value name="numpy_Correlating_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 통계 / 상관 -->';

//NUMPY += '<label text="선형대수"></label>';
NUMPY += '<label text="%{BKY_NUM_LINEAR}"></label>';
//<!-- 선형 / 행렬 &벡터 -->';
NUMPY += ' <block type="numpy_matrix_vector_products">';
NUMPY += '  <value name="numpy_Matrix_vector_products_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 선형 / 행렬 &벡터 -->';

//<!-- 선형 / 분해 -->'; 
NUMPY += ' <block type="numpy_matrix_decomposition">';
NUMPY += '  <value name="numpy_Matrix_Decomposition_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 선형 / 분해  -->';
NUMPY += '</category>';
//<!------------------------------------------------------------------------------------------------배열-->';
NUMPY += '<category name="%{BKY_NUM_ARRAY}" colour="%{BKY_NUMPY_HUE}">';
//NUMPY += '<label text="배열"></label>';
NUMPY += '<label text="%{BKY_NUM_ARR}"></label>';
//<!-- 배열생성 / 기존데이터 -->'; 
// NUMPY += ' <block type="numpy_from_existing_data">';
// NUMPY += '  <value name="numpy_From_existing_data_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 배열생성 / 기존데이터 -->';

//<!-- 배열조작 / 모양 변경 -->'; 
NUMPY += ' <block type="numpy_changing_array_shape">';
NUMPY += '  <value name="numpy_Changing_array_shape_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열조작 / 모양 변경  -->';

//<!-- 배열조작 / 종류 변경 -->'; 
// NUMPY += ' <block type="numpy_changing_kind_array">';
// NUMPY += '  <value name="numpy_Changing_kind_array_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 배열조작 / 종류 변경   -->';

//<!-- 배열조작 / 추가 & 제거 -->'; 
NUMPY += ' <block type="numpy_adding_removing_elements">';
NUMPY += '  <value name="numpy_Adding_removing_elements_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += ' </block>';
//<!-- 배열조작 / 추가 & 제거 -->';

//<!-- 배열생성 / 숫자 범위 -->'; 
NUMPY += ' <block type="numpy_numerical_ranges">';
NUMPY += '  <value name="numpy_Numerical_ranges_val">';
//NUMPY += '      <block type="class_func_param"></block>';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열생성 / 숫자 범위 -->';

//<!-- 배열생성 / 0 & 1 -->'; 
NUMPY += ' <block type="numpy_ones_and_zeros">';
NUMPY += '  <value name="numpy_Ones and zeros_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열생성 / 0 & 1 -->';

//<!-- 배열생성 / 행렬 -->'; 
NUMPY += ' <block type="numpy_building_matrices">';
NUMPY += '  <value name="numpy_Building_matrices_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열생성 / 행렬 -->';

//<!-- 배열조작 / 전치 -->'; 
NUMPY += ' <block type="numpy_transpose_like_operations">';
NUMPY += '  <value name="numpy_Transpose_like_operations_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열조작 / 전치  -->';

//<!-- 배열조작 / 결합 -->'; 
NUMPY += ' <block type="numpy_joining_arrays">';
NUMPY += '  <value name="numpy_Joining_arrays_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열조작 / 결합   -->';

//<!-- 배열조작 / 분할 -->'; 
// NUMPY += ' <block type="numpy_splitting_arrays">';
// NUMPY += '  <value name="numpy_Splitting_arrays_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 배열조작 / 분할 -->';

//<!-- 배열조작 / 재정렬 -->'; 
NUMPY += ' <block type="numpy_rearranging_elements">';
NUMPY += '  <value name="numpy_Rearranging_elements_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 배열조작 / 재정렬 -->';

//<!-- 배열생성 / 레코드 -->'; 
// NUMPY += ' <block type="numpy_creating_record_arrays">';
// NUMPY += '  <value name="numpy_Creating_record_arrays_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 배열생성 / 레코드 -->';

//<!-- 배열조작 / 차원수 변경  
//   NUMPY += ' <block type="numpy_changing_number">';
//     NUMPY += ' <value name="numpy_Changing_number_val">'; 
//       NUMPY += ' <block type="class_func_param"></block>';
//     NUMPY += ' </value>';  
//   NUMPY += '</block>'; 
// -->';
//<!-- 배열조작 / 차원수 변경   -->';
NUMPY += '</category>';

NUMPY += '<category name="%{BKY_NUM_RANDOM}" colour="%{BKY_NUMPY_HUE}">';
//NUMPY += '<label text="랜덤"></label>';
NUMPY += '<label text="%{BKY_NUM_RAN}"></label>';

//<!-- 랜덤 / 단순 -->';
NUMPY += ' <block type="numpy_random_sample">';
NUMPY += '  <value name="numpy_Random_sample_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += ' </block>';
//<!-- 랜덤 / 단순 -->';

//<!-- 랜덤 / 순열  -->';
NUMPY += ' <block type="numpy_random_permutations">';
NUMPY += '  <value name="numpy_Random_Permutations_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 랜덤 / 순열  -->';

// //<!-- 랜덤 / 분포1  -->';
// NUMPY += ' <block type="numpy_random_distributions">';
// NUMPY += '  <value name="numpy_Random_Distributions_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
// //<!-- 랜덤 / 분포1  -->';

//<!-- 랜덤 / 분포2  -->';
NUMPY += ' <block type="numpy_random_distributions_two">';
NUMPY += '  <value name="numpy_Random_Distributions_two_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 랜덤 / 분포2  -->';

// //<!-- 랜덤 / 분포3 -->';
// NUMPY += ' <block type="numpy_random_distributions_third">';
// NUMPY += '  <value name="VAR">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
// //<!-- 랜덤 / 분포3  -->';

//<!-- 랜덤 / 생성기 -->';
NUMPY += ' <block type="numpy_random_generator">';
NUMPY += '  <value name="numpy_Random_generator_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 랜덤 / 생성기  -->';

//NUMPY += '<label text="정렬&검색"></label>';
NUMPY += '<label text="%{BKY_NUM_SORT_SEARCH}"></label>';
//<!-- 정렬 -->';
NUMPY += ' <block type="numpy_sorting">';
NUMPY += '  <value name="numpy_Sorting_val">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 정렬 -->';

//<!-- 검색 -->';
NUMPY += ' <block type="numpy_searching">';
NUMPY += '  <value name="numpy_Searching">';
NUMPY += '   <shadow type="indata">';
NUMPY += '      <field name="indata1"></field>';
NUMPY += '   </shadow>';
NUMPY += '  </value>';
NUMPY += '</block>';
//<!-- 검색 -->';
NUMPY += '</category>';

// NUMPY += '<category name="%{BKY_NUM_LOGIC}" colour="%{BKY_NUMPY_HUE}">';
//<label text="논리"></label>';
// NUMPY += '<label text="%{BKY_NUM_LO}"></label>';

//<!-- 논리 / 배열 -->'; 
// NUMPY += ' <block type="numpy_array_contents">';
// NUMPY += '  <value name="numpy_Array_contents_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 논리 / 배열  -->';

//<!-- 논리 / 비교 -->'; 
// NUMPY += ' <block type="numpy_comparison">';
// NUMPY += '  <value name="numpy_Comparison_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 논리 / 비교  -->';

//   NUMPY += '<label text="문자열"></label>';
// NUMPY += '<label text="%{BKY_NUM_STR}"></label>';
//<!-- 문자열 / 연산1 -->'; 
// NUMPY += ' <block type="numpy_string_operations">';
// NUMPY += '  <value name="numpy_String_operations_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 문자열 / 연산1  -->';

//<!-- 문자열 / 연산2 -->'; 
// NUMPY += ' <block type="numpy_string_operations2">';
// NUMPY += '  <value name="numpy_String_operations2_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 문자열 / 연산2  -->';

//<!-- 문자열 / 정보 -->'; 
// NUMPY += ' <block type="numpystring_information">';
// NUMPY += '  <value name="numpyString_information_val">';
// NUMPY += '      <block type="class_func_param"></block>';
// NUMPY += '  </value>';
// NUMPY += '</block>';
//<!-- 문자열 / 정보  -->';

// NUMPY += '</category>';
//<!-- import numpy as np -->';

NUMPY += '</category>';