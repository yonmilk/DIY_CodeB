SKL = '<category name="%{BKY_CATEGORY_SCIKIT}" colour="%{BKY_SCIKITLEARN_HUE}">';

//<!-- 기본 - 자주쓰는 블록, 모델 학습, 예측, 평가, 임포트 등 -->';
SKL += '<category name="%{BKY_SKI_BASIC}" colour="%{BKY_SCIKITLEARN_HUE}">';
//<label text="라이브러리 임포트"></label>';
SKL += '<label text="%{BKY_SKL_LIBRARY}"></label>';

SKL += '<block type="import_scikit_learn"></block>';

//<label text="데이터 처리(핸들링)"></label>';
// SKL += '<label text="%{BKY_SKL_DATA}"></label>';
// SKL += '<block type="train_test_split"></block>';
// //<!-- SKL += '<value name="x_data">';
// //   SKL += '<block type="variables_get">';
// //     SKL += '<field name="VAR">x_data</field>';
// //   SKL += '</block>';
// // SKL += '</value>';
// // SKL += '<value name="y_data">';
// //   SKL += '<block type="variables_get">';
// //     SKL += '<field name="VAR">y_data</field>';
// //   SKL += '</block>';
// // SKL += '</value>';
// // SKL += '<value name="x_train">';
// //   SKL += '<block type="variables_get">';
// //     SKL += '<field name="VAR">x_train</field>';
// //   SKL += '</block>';
// // SKL += '</value>';
// // SKL += '<value name="x_test">';
// //   SKL += '<block type="variables_get">';
// //     SKL += '<field name="VAR">x_test</field>';
// //   SKL += '</block>';
// // SKL += '</value>';
// // SKL += '<value name="y_train">';
// //   SKL += '<block type="variables_get">';
// //     SKL += '<field name="VAR">y_train</field>';
// //   SKL += '</block>';
// // SKL += '</value>';
// // SKL += '<value name="y_test">';
// //   SKL += '<block type="variables_get">';
// //     SKL += '<field name="VAR">y_test</field>';
// //   SKL += '</block>';
// // SKL += '</value>';
// // SKL += '<value name = "test_size">';
// //   SKL += '<shadow type="indata">';
// //     SKL += '<field name="indata1">0.2</field>';
// //   SKL += '</shadow>';
// // SKL += '</value>';
// // SKL += '<value name = "seed">';
// //   SKL += '<shadow type="indata">';
// //     SKL += '<field name="indata1">0</field>';
// //   SKL += '</shadow>';
// // SKL += '</value>'; -->';

// // <-- LabelEncoder 블록 -->
// SKL += '<block type="labelencoder">';
// SKL +=  '<value name="df">';
// SKL +=  '   <block type="variables_get">';
// SKL +=          '<field name="VAR"></field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "column">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// // <-- OneHotEncoder 블록 -->
// SKL += '<block type="onehotencoder">';
// SKL +=  '<value name="df">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR"></field>';
// SKL +=      '</block>';
// SKL +=          '<shadow type="indata">';
// SKL +=              '<field name="indata1"></field>';
// SKL +=          '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// // SKL += '<block type="sklearn_scale">';
// // SKL += '<value name = "variable">';
// // SKL += '<block type="variables_get">';
// // SKL += '<field name="VAR">scaled_data</field>';
// // SKL += '</block>';
// // SKL += '</value>';
// // SKL += '<value name = "data">';
// // SKL += '<shadow type="indata">';
// // SKL += '<field name="indata1"></field>';
// // SKL += '</shadow>';
// // SKL += '</value>';
// // SKL += '<value name = "axis">';
// // SKL += '<shadow type="indata">';
// // SKL += '<field name="indata1">0</field>';
// // SKL += '</shadow>';
// // SKL += '</value>';
// // SKL += '</block>';

// // <-- Scale 블록 -->
// SKL += '<block type="sklearn_scale">';
// SKL +=  '<value name = "variable">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">scaled_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "params">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// // <-- minmax_scalar 블록 -->
// SKL += '<block type="minmax_scalar">';
// SKL +=  '<value name="data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">x_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// // <--standard_scalar 블록 -->
// SKL += '<block type="standard_scalar">';
// SKL +=  '<value name="data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">x_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// // <-- norml 블록 -->
// SKL += '<block type="normal">';
// SKL +=  '<value name="Normalization_data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">df</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// <label text="모델 학습 및 평가"></label>';
SKL += '<label text="%{BKY_SKL_TRAIN_EVA}"></label>';

// <-- model_fit 블록 -->
SKL += '<block type="model_fit">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="X_train">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_train</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="Y_train">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_train</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';


// <-- fit_predict 블록 -->
SKL += '<block type="fit_predict">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="x_data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_train</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- model_score 블록 -->
SKL += '<block type="model_score">';
SKL +=  '<value name="model_name">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="x_test">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="y_test">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- model_predict 블록 -->
SKL += '<block type="model_predict">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="NAME">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <label text="속성 추출"></label>';
SKL += '<label text="%{BKY_SKL_ATTRI_EXT}"></label>';

// <-- coef 블록 -->
SKL += '<block type="coef">';
SKL +=  '<value name="coef">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- intercept 블록 -->
SKL += '<block type="intercept">';
SKL +=  '<value name="intercept">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// 모델 저장 라벨
SKL += '<label text="%{BKY_SKL_SAVE}"></label>';


// 피클 임포트
SKL += '<block type="file_library"></block>';

SKL += '  <block type="pickleopen"></block>';

// 피클  모델 저장 로드 with as
SKL += '<block type="withs">';
SKL += '    <value name="set0">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '            <block type="pickle_model_save">';
SKL += '                <value name="val_1">';
SKL += '                    <shadow type="indata">';
SKL += '                        <field name="indata1">"경로"</field>';
SKL += '                    </shadow>';
SKL += '                </value>';
SKL += '            </block>';
SKL += '    </value>';
SKL += '    <value name="set1">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">f</field>';
SKL += '        </block>';
SKL += '    </value>';
SKL += '</block>';


//피클 입력
SKL += '  <block type="pickle_dump">';
SKL += '      <value name="va1">';
SKL += '          <shadow type="indata">';
SKL += '              <field name="indata1">데이터</field>';
SKL += '          </shadow>';
SKL += '      </value>';
SKL += '      <value name="va2">';
SKL += '          <shadow type="indata">';
SKL += '              <field name="indata1">f</field>';
SKL += '          </shadow>';
SKL += '            <block type="variables_get">';
SKL += '                <field name="VAR">f</field>';
SKL += '            </block>';
SKL += '      </value>';
SKL += '  </block>';

//피클 불러오기
SKL += '  <block type="pickle_load">';
SKL += '      <value name="va">';
SKL += '          <shadow type="indata">';
SKL += '              <field name="indata1">f</field>';
SKL += '          </shadow>';
SKL += '            <block type="variables_get">';
SKL += '                <field name="VAR">f</field>';
SKL += '            </block>';
SKL += '      </value>';
SKL += '  </block>';


// SKL += '<block type="pickle_model_save">';
// SKL += '    <value name="val_1">';
// SKL += '        <shadow type="indata">';
// SKL += '            <field name="indata1">경로</field>';
// SKL += '        </shadow>';
// SKL += '    </value>';
// SKL += '</block>';

SKL += '</category>';

// 데이터 카테고리
SKL += '<category name="%{BKY_SKI_DATA}" colour="%{BKY_SCIKITLEARN_HUE}">';
//<label text="데이터셋"></label>';
SKL += '<label text="%{BKY_SKL_DATA_SET}"></label>';

// <-- import_dataset 블록 -->
SKL += '<block type="import_dataset">';
SKL +=  '<value name="x_data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="y_data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- import_load_digits 블록 -->
SKL += '<block type="import_load_digits">';
SKL +=  '<value name="x_data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="y_data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_class">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">10</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- blobs moons circles 블록 통합으로 인해 주석처리함 -->
// <-- random_import_blobs 블록 -->
// SKL += '<block type="random_import_blobs">';
// SKL +=  '<value name="x_data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">x_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name="y_data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">y_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "sa">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">100</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "fe">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">2</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "seed">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">0</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// // <-- random_import_moons 블록 -->
// SKL += '<block type="random_import_moons">';
// SKL +=  '<value name="x_data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">x_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name="y_data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">y_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "sa">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">100</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "noise">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">None</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "seed">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">0</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// // <-- make_circles 블록 -->
// SKL += '<block type="make_circles">';
// SKL +=  '<value name="x_data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">x_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name="y_data">';
// SKL +=      '<block type="variables_get">';
// SKL +=          '<field name="VAR">y_data</field>';
// SKL +=      '</block>';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1"></field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "n_samples">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">100</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name = "factor">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">0.5</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

////////////////////////////////////////////////////////////////////////
// <!-- blobs moons circles 블록 드롭다운이용 한 개의 블록으로 통합 -->
SKL += '<block type="random_datasets">';
SKL += '    <value name="x_data">';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">x_data</field>';
SKL += '        </block>';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '    <value name="y_data">';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">y_data</field>';
SKL += '        </block>';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '    <value name="sample_input">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1">100</field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '    <value name="shuffle_input">';
SKL += '        <block type="logic_boolean"></block>';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '    <value name="seed_input">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1">0</field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '</block>';

//<label text="데이터 핸들링"></label>';
SKL += '<label text="%{BKY_SKL_DATA_HANDLING}"></label>';

SKL += '<block type="train_test_split"></block>';
//<!-- SKL += '<value name="x_data">';
//   SKL += '<block type="variables_get">';
//     SKL += '<field name="VAR">x_data</field>';
//   SKL += '</block>';
// SKL += '</value>';

// SKL += '<value name="y_data">';
//   SKL += '<block type="variables_get">';
//     SKL += '<field name="VAR">y_data</field>';
//   SKL += '</block>';
// SKL += '</value>';
// SKL += '<value name="x_train">';
//   SKL += '<block type="variables_get">';
//     SKL += '<field name="VAR">x_train</field>';
//   SKL += '</block>';
// SKL += '</value>';
// SKL += '<value name="x_test">';
//   SKL += '<block type="variables_get">';
//     SKL += '<field name="VAR">x_test</field>';
//   SKL += '</block>';
// SKL += '</value>';
// SKL += '<value name="y_train">';
//   SKL += '<block type="variables_get">';
//     SKL += '<field name="VAR">y_train</field>';
//   SKL += '</block>';
// SKL += '</value>';
// SKL += '<value name="y_test">';
//   SKL += '<block type="variables_get">';
//     SKL += '<field name="VAR">y_test</field>';
//   SKL += '</block>';
// SKL += '</value>';
// SKL += '<value name = "test_size">';
//   SKL += '<shadow type="indata">';
//     SKL += '<field name="indata1">0.2</field>';
//   SKL += '</shadow>';
// SKL += '</value>';
// SKL += '<value name = "seed">';
//   SKL += '<shadow type="indata">';
//     SKL += '<field name="indata1">0</field>';
//   SKL += '</shadow>';
// SKL += '</value>'; -->';

// <-- labelencoder 블록 -->
SKL += '<block type="labelencoder">';
SKL +=  '<value name="df">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR"></field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "column">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- onehotencoder 블록 -->
SKL += '<block type="onehotencoder">';
SKL +=  '<value name="df">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR"></field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// SKL += '<block type="sklearn_scale">';
// SKL += '<value name = "variable">';
// SKL += '<block type="variables_get">';
// SKL += '<field name="VAR">scaled_data</field>';
// SKL += '</block>';
// SKL += '</value>';
// SKL += '<value name = "data">';
// SKL += '<shadow type="indata">';
// SKL += '<field name="indata1"></field>';
// SKL += '</shadow>';
// SKL += '</value>';
// SKL += '<value name = "axis">';
// SKL += '<shadow type="indata">';
// SKL += '<field name="indata1">0</field>';
// SKL += '</shadow>';
// SKL += '</value>';
// SKL += '</block>';

// <-- sklearn_scale 블고 -->
SKL += '<block type="sklearn_scale">';
SKL +=  '<value name = "variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">scaled_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "params">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- minmax_scalar 블록 -->
SKL += '<block type="minmax_scalar">';
SKL +=  '<value name="data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- standard_scalar 블록 -->
SKL += '<block type="standard_scalar">';
SKL +=  '<value name="data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- normal 블록 -->
SKL += '<block type="normal">'
SKL += '<value name="Normalization_data">'
SKL +=   '<block type="variables_get">'
SKL +=     '<field name="VAR">df</field>'
SKL +=   '</block>'
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL += '</value>'
SKL += '</block>'

// <-- polynomialfeatures 블록 -->
/*
SKL += '<block type="polynomialfeatures">';
SKL +=  '<value name = "NAME">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';
*/

// <-- polynomialfeatures 블록 수정 -->
SKL += '<block type="polynomialfeatures">';
SKL += '    <value name="val1">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">poly</field>';
SKL += '        </block>';
SKL += '    </value>';
SKL += '    <value name="val2">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '</block>';

// <!-- fit_transform 블록 -->
SKL += '<block type="fittransform">';
SKL += '    <value name="val1">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">poly</field>';
SKL += '        </block>';
SKL += '    </value>';
SKL += '    <value name="val2">';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">x_data</field>';
SKL += '        </block>';
SKL += '    </value>';
SKL += '</block>';

SKL += '<label text="차원 축소"></label>';

// <-- pca 블록 -->
SKL += '<block type="pca">';
SKL +=  '<value name="data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_components">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">None</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- pca_explained 블록 -->
SKL += '<block type="pca_explained_variance_ratio_">';
SKL += '</block>';

// <-- tane 블록 -->
SKL += '<block type="tsne">';
SKL +=  '<value name="data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_components">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "perplexity">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">30.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "learning_rate">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">200.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- mds 블록 -->
SKL += '<block type="mds">';
SKL +=  '<value name="data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_components">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- lle 블록 -->
SKL += '<block type="lle">';
SKL +=  '<value name="data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_neighbors">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_components">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- isomap 블록 -->
SKL += '<block type="isomap">';
SKL +=  '<value name="data">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_neighbors">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_components">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

SKL += '</category>';

// 예측 카테고리
SKL += '<category name="%{BKY_SKI_PRE}" colour="%{BKY_SCIKITLEARN_HUE}">';

// <-- linear_regression 블록 -->
SKL += '<block type="linear_regression">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- sgd_regressor 블록 -->
SKL += '<block type="sgd_regressor">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "numEpochs">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- reidge 블록 -->
SKL += '<block type="ridge">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "numAlpha">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">1.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- lasso_regression 블록 -->
SKL += '<block type="lasso_regression">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "alpha">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">1.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- elasticnet_regression 블록 -->
SKL += '<block type="elasticnet_regression">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "alpha">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">1.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "l1_ratio">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- bayesian_ridge 블록 -->
SKL += '<block type="bayesian_ridge">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- adaboostregressor 블록 -->
SKL += '<block type="adaboostregressor">';
SKL +=  '<value name="NAME">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME2">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME3">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- gradientboostingregressor 블록 -->
SKL += '<block type="gradientboostingregressor">';
SKL +=  '<value name="NAME">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME2">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- randomforestregressor 블록 -->
SKL += '<block type="randomforestregressor">';
SKL +=  '<value name="NAME">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME2">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME3">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- kneighborsregressor_function 블록 -->
SKL += '<block type="kneighborsregressor_function">';
SKL +=  '<value name="value">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "value1">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// SKL += '<block type="linearsvr">';
// SKL += '<value name = "NAME">';
// SKL += '<shadow type="indata">';
// SKL += '<field name="indata1">0</field>';
// SKL += '</shadow>';
// SKL += '</value>';
// SKL += '</block>';

// <-- svr 블록 -->
SKL += '<block type="svr">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "epsilon">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.1</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "C">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">1.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "gamma">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">"scale"</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

SKL += '</category>';

// 분류 카테고리
SKL += '<category name="%{BKY_SKI_CLASSIF}" colour="%{BKY_SCIKITLEARN_HUE}">';

SKL += '<block type="logistic_regression">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "numSeed">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- logistic_regression_cv 블록 -->
SKL += '<block type="logistic_regression_cv">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "numCv">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "numSeed">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// SKL += '<block type="ridge_classifier">';
// SKL += '<value name="model">';
// SKL += '<block type="variables_get">';
// SKL += '<field name="VAR">model</field>';
// SKL += '</block>';
// SKL += '</value>';
// SKL += '</block>';

// <-- ridge_classifier 블록 -->
SKL += '<block type="ridge_classifier">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "alpha">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">1.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- sgd_classifier 블록 -->
SKL += '<block type="sgd_classifier">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "max_iter">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "tol">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.001</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- decision 블록 -->
SKL += '<block type="decision">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "depth">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">10</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "seed">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- adaboostclassifier 블록 -->
SKL += '<block type="adaboostclassifier">';
SKL +=  '<value name="NAME">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME2">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">50</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME3">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- gradientboostingclassifier 블록 -->
SKL += '<block type="gradientboostingclassifier">';
SKL +=  '<value name="NAME">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "NAME2">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- random_forest_classifier 블록 -->
SKL += '<block type="random_forest_classifier">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_estimators">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "max_depth">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">None</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- kneighborsclassifier_function 블록 -->
SKL += '<block type="kneighborsclassifier_function">';
SKL +=  '<value name="value">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "value1">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// SKL += '<block type="linearsvc">';
// SKL += '<value name = "NAME">';
// SKL += '<shadow type="indata">';
// SKL += '<field name="indata1">0</field>';
// SKL += '</shadow>';
// SKL += '</value>';
// SKL += '</block>';

// <-- svc 블록 -->
SKL += '<block type="svc">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "C">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">1.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "gamma">';
SKL +=      '<shadow type="indata">';
SKL += '        <field name="indata1">"scale"</field>';
SKL += '    </shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- stacking_classifier 블록 -->
SKL += '<block type="stacking_classifier">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "estimators">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "final_estimator">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- voting_classifier 블록 -->
SKL += '<block type="voting_classifier">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "estimator">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- bagging_classifier 블록 -->
SKL += '<block type="bagging_classifier">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "base_estimator">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_estimators">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">10</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "max_samples">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">1.0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// 트리구조출력 - plot_tree
SKL += '<block type="plottree">';
SKL +=  '<value name="option">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// 트리구조출력 - plot_tree
SKL += '<block type="get_depth">';
SKL +=  '<value name="VAR">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// 그리드 검색
SKL += '<block type="GridSearchCV">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">gs</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="option">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">sklearn.tree.DecisionTreeClassifier(random_state=42), params, n_jobs=-1</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';


// 랜덤검색
SKL += '<block type="RandomizedSearchCV">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">gs</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="option">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">sklearn.tree.DecisionTreeClassifier(random_state=42), params, n_iter=100, n_jobs=-1, random_state=42</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// 엑스트라 트리
SKL += '<block type="ExtraTreesClassifier">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">et</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="option">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">n_jobs=-1, random_state=42</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

SKL += '</category>';

// 군집화 카테고리
SKL += '<category name="%{BKY_SKI_CLUSTER}" colour="%{BKY_SCIKITLEARN_HUE}">';

//<-- k_means 블록 -->
SKL += '<block type="k_means">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "cnt">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- dbscan 블록 -->
SKL += '<block type="dbscan">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "eps">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "min_samples">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- agglomerative_clustering 블록 -->
SKL += '<block type="agglomerative_clustering">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_clusters">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- isolation_forest 블록 -->
SKL += '<block type="isolation_forest">';
SKL +=  '<value name="Isolation_Forest_val">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "Isolation_Forest_estimators">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "Isolation_Forest_connection">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "Isolation_Forest_randomstate">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- one_class_svm 블록 -->
SKL += '<block type="one_class_svm">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "degree">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">3</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "gamma">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">"scale"</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- local_outlier_factor 블록 -->
SKL += '<block type="local_outlier_factor">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "n_neighbors">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">20</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

//<label text="K-Means 속성 추출"></label>';
SKL += '<label text="%{BKY_SKL_K_MEANS}"></label>';

// <-- k_means_inertia 블록 -->
SKL += '<block type="k_means_inertia">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// <-- k_means_centroid 블록 -->
SKL += '<block type="k_means_centroid">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

SKL += '</category>';

// 평가지표 카테고리
SKL += '<category name="%{BKY_SKI_EVA}" colour="%{BKY_SCIKITLEARN_HUE}">';

//<label text="기본 평가 지표"></label>';
SKL += '<label text="%{BKY_SKL_BASIC_EVA}"></label>';

// <-- acc_score 블록 -->
SKL += '<block type="acc_score">';
SKL +=  '<value name="yt">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="yp">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

// <-- mae 블록 -->
SKL += '<block type="mae">';
SKL +=  '<value name="yt">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="yp">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

// <-- mse 블록 -->
SKL += '<block type="mse">';
SKL +=  '<value name="yt">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="yp">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

//<label text="고급 평가 지표"></label>';
SKL += '<label text="%{BKY_SKL_ADV}"></label>';
//<!-- SKL += '<block type="AUC">';
//   SKL += '<value name="yt">';
//     SKL += '<block type="variables_get">';
//       SKL += '<field name="VAR">x_data</field>';
//     SKL += '</block>';
//   SKL += '</value>';
//   SKL += '<value name="yp">';
//     SKL += '<block type="variables_get">';
//       SKL += '<field name="VAR">y_pred</field>';
//     SKL += '</block>';
//   SKL += '</value>';
// SKL += '</block>'; -->';

// <-- Ap 블록 -->
SKL += '<block type="AP">';
SKL +=  '<value name="yt">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="yp">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_score</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

// <-- precision 블록 -->
SKL += '<block type="precision">';
SKL +=  '<value name="yt">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="yp">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

// <-- median 블록 -->
SKL += '<block type="median">';
SKL +=  '<value name="yt">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="yp">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

// <-- sivalidation 블록 -->
SKL += '<block type="sivalidation">';
SKL +=  '<value name="variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">var</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="em">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="x">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">x_data</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="y">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">y_data</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="cv">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">None</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';


// <-- silhouette_score 블록 -->
SKL += '<block type="silhouette_score">';
SKL +=  '<value name="x">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">x_data</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="labels">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

// <-- classification_report 블록 -->
SKL += '<block type="classification_report">';
SKL +=  '<value name="classification_report_Y_true">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_test</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="classification_report_y_pred">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

// <!-- 오차 행렬 (confusion_matrix) -->
SKL += '<block type="confusion_matrix">';
SKL +=  '<value name="y_true">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_true</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL +=  '<value name="y_pred">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">y_pred</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>'
SKL +=  '</value>';
SKL += '</block>';

//<label text="유사도"></label>';
SKL += '<label text="유사거리"></label>';

///////////////////////////////////////////////////////////////////////////
// 아래 블록들을 드롭다운을 이용 한 블록으로 합치므로 주석처리를 함

// //<!-- 코사인 유사성 -->';
// SKL += '<block type="cosine_similarity">';
// SKL +=  '<value name="input_x">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">x</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name="input_y">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">y</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// //<!-- 코사인 길이 -->';
// SKL += '<block type="cosine_distance">';
// SKL +=  '<value name="input_x">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">x</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name="input_y">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">y</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// //<!-- 벡터쌍 거리행렬 -->';
// SKL += '<block type="euclidean_distances">';
// SKL +=  '<value name="input_x">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">x</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name="input_y">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">y</field>';
// SKL +=      '</shadow>';
// SKL +=   '</value>';
// SKL += '</block>';

// //<!-- 벡터사이 L1길이 -->';
// SKL += '<block type="manhattan_distances">';
// SKL +=  '<value name="input_x">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">x</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL +=  '<value name="input_y">';
// SKL +=      '<shadow type="indata">';
// SKL +=          '<field name="indata1">y</field>';
// SKL +=      '</shadow>';
// SKL +=  '</value>';
// SKL += '</block>';

// <!-- 코사인 유사성, 코사인 거리, 유클리안, 맨허튼 블록을 드롭다운으로 합친 코드 -->
SKL += '<block type="similarity_distance">';
SKL += '    <value name="input_x">';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">x</field>';
SKL += '        </block>';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '    <value name="input_y">';
SKL += '        <block type="variables_get">';
SKL += '            <field name="VAR">y</field>';
SKL += '        </block>';
SKL += '        <shadow type="indata">';
SKL += '            <field name="indata1"></field>';
SKL += '        </shadow>';
SKL += '    </value>';
SKL += '</block>';

SKL += '</category>';

// 교차검증 카테고리
SKL += '<category name="교차검증" colour="%{BKY_SCIKITLEARN_HUE}">';

SKL += '<label text="생성"></label>';

// sivalidation 블록
SKL += '<block type="sivalidation">';
SKL +=  '<value name="variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">var</field>';
SKL +=      '</block>';
SKL +=          '<shadow type="indata">';
SKL +=              '<field name="indata1"></field>';
SKL +=          '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="em">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=          '<shadow type="indata">';
SKL +=              '<field name="indata1"></field>';
SKL +=          '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="x">';
SKL +=          '<shadow type="indata">';
SKL +=              '<field name="indata1">x_data</field>';
SKL +=          '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="y">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">y_data</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="cv">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">None</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// kflod_create 블록
SKL += '<block type="kfold_create">';
SKL +=  '<value name="variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">kfold</field>';
SKL +=      '</block>';
SKL +=          '<shadow type="indata">';
SKL +=              '<field name="indata1"></field>';
SKL +=          '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="n_splits">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// stratified_kfold_create 블록
SKL += '<block type="stratified_kfold_create">';
SKL +=  '<value name="variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">kfold</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="n_splits">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">2</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// GroupKfold 블록
SKL += '<block type="group_kfold_create">';
SKL +=  '<value name="variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">group_kfold</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="n_splits">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">5</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// LeaveOneOut 블록
SKL += '<block type="loo_create">';
SKL +=  '<value name="variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">loo</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// ShuffleSplit 블록
SKL += '<block type="shuffle_split_create">';
SKL +=  '<value name="variable">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">rs</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="n_splits">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">10</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="test_size">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">None</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

SKL += '<label text="메소드"></label>';

// get_n_splits 블록
SKL += '<block type="cv_get_n_splits">';
SKL +=  '<value name="variable">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="X">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="y">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="groups">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// split 블록
SKL += '<block type="cv_split">';
SKL +=  '<value name="variable">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="X">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="y">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name="groups">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

SKL += '</category>';

// 신경망 카테고리
//<!-- 계수, 절편 추출 등 -->';
SKL += '<category name="%{BKY_SKI_NEURAL}" colour="%{BKY_SCIKITLEARN_HUE}">';

// 퍼셉트론 블록
SKL += '<block type="perceptron">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "numSeed">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// MLP 예측기 블록
SKL += '<block type="sklearn_mlp_regressor">';
SKL +=  '<value name="sklearn_mlp_lib_val">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=      '<value name = "sklearn_mlp_hidden_layer_sizes">';
SKL +=          '<shadow type="indata">';
SKL +=              '<field name="indata1">64, 32</field>';
SKL +=          '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_Max_iter">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_random_state">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_batch_size">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">32</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_learning_rate">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.001</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "alpha">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.0001</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// MLP 분류기 블록
SKL += '<block type="sklearn_mlp_classifier">';
SKL +=  '<value name="sklearn_mlp_lib_val">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_mlp_hidden_layer_sizes">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">64, 32</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_Max_iter">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_random_state">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_batch_size">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">32</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "sklearn_MLP_learning_rate">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.001</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "alpha">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.0001</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// Bernoullirbm 블록
SKL += '<block type="bernoullirbm">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "hi">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">50</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "lr">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0.001</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "batch">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">16</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "epochs">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">100</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL +=  '<value name = "seed">';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1">0</field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';

// MLP 손실값 블록
SKL += '<block type="mlp_loss">';
SKL +=  '<value name="model">';
SKL +=      '<block type="variables_get">';
SKL +=          '<field name="VAR">model</field>';
SKL +=      '</block>';
SKL +=      '<shadow type="indata">';
SKL +=          '<field name="indata1"></field>';
SKL +=      '</shadow>';
SKL +=  '</value>';
SKL += '</block>';


//<!-- 기존에 남은 블록들입니다. 처리하던가, 새로 추가하던가 해야할 듯. -- 2021-01-26 작성 -->';
//<!-- //<label text="남은 블록(Deprecated.)"></label>';
// SKL += '<block type="normal">';
//   SKL += '<value name="Normalization_data">';
//     SKL += '<block type="variables_get">';
//       SKL += '<field name="VAR"></field>';
//     SKL += '</block>';
//   SKL += '</value>';
// SKL += '</block>';
// SKL += '<block type="fetch_openml"></block>';        
// SKL += '<block type="kneighborstransformer_function"></block>';
// SKL += '<block type="kneighbors_graph_function"></block>';
// SKL += '<block type="tree_text"></block>'; 
// SKL += '<block type="metrics_fit_predict"></block>'; -->';
//<!-- SKL += '<block type="normal">';
//   SKL += '<value name="Normalization_data">';
//     SKL += '<block type="variables_get">';
//       SKL += '<field name="VAR"></field>';
//     SKL += '</block>';
//   SKL += '</value>';
// SKL += '</block>'; -->';

SKL += '</category>';

SKL += '</category>';

