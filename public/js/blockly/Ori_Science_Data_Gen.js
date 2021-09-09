// //  2020-09-07
// // pandas, numpy, tuple 시각화
// Blockly.Python['val_vi'] = function(block) {
//     var dropdown_val_vi_option = block.getFieldValue('Val_VI_Option');
//     var value_val_vi_val = Blockly.Python.valueToCode(block, 'Val_VI_Val', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code;
//     switch(dropdown_val_vi_option){ 
//       case "Val_VI_Pandas" :
//       code = `PN_Visualization = ${value_val_vi_val}.values.tolist()\n`;      
//       break;
    
//       case "Val_VI_Numpy" :  
//       code = `PN_Visualization = ${value_val_vi_val}.tolist()\n`;          
//       break;
   
//       default: 
//       break; 
//     }    
   
//     return code;      
//   };
  
  
  
//   //라이브러리 전체 새로운 것   
  // Blockly.Python['lib_import_a'] = function(block) {
  //   var dropdown_lib_import_a_option = block.getFieldValue('lib_import_a_option');
  //   var value_lib_import_a_val = Blockly.Python.valueToCode(block, 'lib_import_a_val', Blockly.Python.ORDER_ATOMIC);
  //   // TODO: Assemble Python into code variable.
  //   var code ;
  //   switch (dropdown_lib_import_a_option){
  //     case "lib_import_numpy" : 
  //     code = `import numpy as ${value_lib_import_a_val}\n`;    
  //     break;      
  
  //     case "lib_import_pandas" :
  //     code = `import pandas as ${value_lib_import_a_val}\n`;   
  //     break;  
       
  //     case "lib_import_Matplotlib" :
  //     code = `import matplotlib as ${value_lib_import_a_val}\n`;   
  //     break;
  
  //     case "lib_import_io" :  
  //     code = `import io\n`;             
  //     break;   
  
  //     case "lib_import_base64" : 
  //     code = `import base64\n`;           
  //     break; 
  
  //     default : 
  //     break; 
  //   }  
  //   return code;}; 
    
//     //라이브러리 임포트 사이킷런 
//     Blockly.Python['lib_import_sklearn'] = function(block) {
//       var dropdown_lib_from_a_option = block.getFieldValue('lib_from_a_option');
//       var dropdown_lib_import_a_option = block.getFieldValue('lib_import_a_option');
//       // TODO: Assemble Python into code variable.
//       var code ;
//       var sklearn_from;
//       var sklearn_import; 
  
//     switch (dropdown_lib_from_a_option){
//       case "lib_from_sklearn_sklearn" : 
//       sklearn_from = `sklearn`;    
//       break;      
  
//       case "lib_from_sklearn_model_selection" :
//       sklearn_from = `sklearn.model_selection`;     
//       break;    
  
//       case "lib_from_linear_model" :   
//       sklearn_from = `sklearn.linear_model`;               
//       break;   
  
//       case "lib_from_linear_model" : 
//       sklearn_from = `sklearn.linear_model`;           
//       break; 
  
//       case "lib_from_naive_bayes" : 
//       sklearn_from = `sklearn.naive_bayes`;           
//       break;   
  
//       case "lib_from_ensemble" : 
//       sklearn_from = `sklearn.ensemble`;           
//       break; 
  
//       default : 
//       break; 
//     }  
  
//     switch (dropdown_lib_import_a_option){
//       case "lib_import_sklearn_ datasets" : 
//       sklearn_import = `datasets`;    
//       break;      
  
//       case "lib_import_sklearn_ make_classification" :
//       sklearn_import = `make_classification`;     
//       break;    
  
//       case "lib_import_sklearn_ train_test_split" :   
//       sklearn_import = `train_test_split`;               
//       break;   
  
//       case "lib_import_sklearn_LinearRegression" : 
//       sklearn_import = `LinearRegression`;           
//       break; 
  
//       case "lib_import_sklearn_LogisticRegression" : 
//       sklearn_import = `LogisticRegression`;           
//       break;   
  
//       case "lib_import_sklearn_GaussianNB" : 
//       sklearn_import = `GaussianNB`;            
//       break;    
  
//       case "lib_import_svm" : 
//       sklearn_import = `svm`;           
//       break; 
  
//       case "lib_import_tree" : 
//       sklearn_import = `tree`;           
//       break; 
  
//       case "lib_import_RandomForestClassifier" :  
//       sklearn_import = `RandomForestClassifier`;           
//       break; 
  
//       default : 
//       break; 
//     }   
  
//     code = `from ${sklearn_from} import ${sklearn_import} \n`;
//     return code;
//     };
   
      
//     // 라이브러리  임포트 단순 
//     Blockly.Python['lib_import'] = function(block) { 
//       var text_lib_import_name = block.getFieldValue('Lib_import_name'); 
//       // TODO: Assemble Python into code variable. 
//       var code = `import ${text_lib_import_name}\n`;      
//       return code;
//     }; 
  
//     //라이브러리 임포트 as
//     Blockly.Python['lib_import_as'] = function(block) { 
//       var text_lib_import_name_1 = block.getFieldValue('Lib_import_name_1');
//       var text_lib_import_name_second = block.getFieldValue('Lib_import_name_second');  
//       // TODO: Assemble Python into code variable.
//       var code = `import ${text_lib_import_name_1} as ${text_lib_import_name_second}\n`;   
//       return code;
//     };  
   
//   // 라이브러리 임포트  from
//   Blockly.Python['lib_import_from'] = function(block) {
//     var text_lib_import_name_from = block.getFieldValue('Lib_import_name_from');
//     var text_lib_import2 = block.getFieldValue('Lib_import2');
//     // TODO: Assemble Python into code variable.
//     var code =`from ${text_lib_import_name_from} import ${text_lib_import2}\n`;   
//     return code;
//   };  
    
  
//   //print 하기
//     Blockly.Python['print'] = function(block) {
//       var value_print_value = Blockly.Python.valueToCode(block, 'print_value', Blockly.Python.ORDER_ATOMIC);
//       // TODO: Assemble Python into code variable.
//       value_print_value = value_print_value;//.slice(1,-1);
//       var code = `print(${value_print_value})\n`;      
//       return code;       
//     };    
    
   
//     // 배열 생성 
//     Blockly.Python['create_arry'] = function(block) { 
//       var text_create_arry_val = block.getFieldValue('Create_arry_val'); 
//       // TODO: Assemble JavaScript into code variable. 
//       var code = `[${text_create_arry_val}]`;     
//       // TODO: Change ORDER_NONE to the correct strength.  
//       return [code, Blockly.JavaScript.ORDER_NONE];
//     }; 
  
  
//     //배열 곱 
//     Blockly.Python['arry_mul'] = function(block) {
//       var value_arry_mul_first = Blockly.JavaScript.valueToCode(block, 'Arry_mul_first', Blockly.JavaScript.ORDER_ATOMIC);
//       var value_arry_mul_second = Blockly.JavaScript.valueToCode(block, 'Arry_mul_second', Blockly.JavaScript.ORDER_ATOMIC);
     
//       var code = `${value_arry_mul_first} * ${value_arry_mul_second}\n`; 
//       return code; 
//     };  
         
//   //배열 나누기
//     Blockly.Python['arry_div'] = function(block) {
//       var value_arry_div_first = Blockly.JavaScript.valueToCode(block, 'Arry_div_first', Blockly.JavaScript.ORDER_ATOMIC);
//       var value_arry_div_second = Blockly.JavaScript.valueToCode(block, 'Arry_div_second', Blockly.JavaScript.ORDER_ATOMIC);
//       // TODO: Assemble JavaScript into code variable.
//       var code = `${value_arry_div_first} / ${value_arry_div_second}\n`;
//       // TODO: Change ORDER_NONE to the correct strength.
//       return code;  
//     }; 
  
//     //배열 합
//     Blockly.Python['arry_plus'] = function(block) {
//       var value_arry_plus_first = Blockly.JavaScript.valueToCode(block, 'Arry_plus_first', Blockly.JavaScript.ORDER_ATOMIC);
//       var value_arry_plus_second = Blockly.JavaScript.valueToCode(block, 'Arry_plus_second', Blockly.JavaScript.ORDER_ATOMIC);
//       // TODO: Assemble JavaScript into code variable.
//       var code =`${value_arry_plus_first} + ${value_arry_plus_second}\n`;
//       // TODO: Change ORDER_NONE to the correct strength.
//       return code;
//     };
     
//     //배열 뺴기
//     Blockly.Python['arry_minus'] = function(block) {
//       var value_arry_minus_first = Blockly.JavaScript.valueToCode(block, 'Arry_Minus_first', Blockly.JavaScript.ORDER_ATOMIC);
//       var value_arry_minus_second = Blockly.JavaScript.valueToCode(block, 'Arry_Minus_second', Blockly.JavaScript.ORDER_ATOMIC);
//       // TODO: Assemble JavaScript into code variable.
//       var code = `${value_arry_minus_first} / ${value_arry_minus_second}\n`;
//       // TODO: Change ORDER_NONE to the correct strength.
//       return code;
//     }; 
  
  
//     ///////////////////////////////////////////////////////////////////
//     //numpy 함수들 아래로 ----->
//     ///////////////////////////////////////////////////////////////////
  
//      // np.arry  
//     Blockly.Python['np_array'] = function(block) {
//       var value_np_array_lib_val = Blockly.Python.valueToCode(block, 'np_array_lib_val', Blockly.Python.ORDER_ATOMIC);
//       var value_np_array_val = Blockly.Python.valueToCode(block, 'np_array_val', Blockly.Python.ORDER_ATOMIC);
//       // TODO: Assemble Python into code variable.
//       var code = `${value_np_array_lib_val}.array${value_np_array_val}`;  
//       // TODO: Change ORDER_NONE to the correct strength. 
//       return [code, Blockly.Python.ORDER_NONE];   
//     }; 
   
  
//     //numpy 함수 zeros 배열생성,   
//     Blockly.Python['numpy_zeros'] = function(block) {
//       var text_numpy_zeros_num = block.getFieldValue('Numpy_zeros_num');
//       var checkbox_numpy_zeros_check_dtype = block.getFieldValue('Numpy_zeros_check_dtype') == 'TRUE';
//       // TODO: Assemble Python into code variable.
//       var code ;  
//       if( checkbox_numpy_zeros_check_dtype == false ){  
//           code = `np.zeros(${text_numpy_zeros_num})`;   
//       }else{  
//           code = `np.zeros((${text_numpy_zeros_num}), dtype= int)`; 
//       } 
   
//       // TODO: Change ORDER_NONE to the correct strength.
//       return [code, Blockly.Python.ORDER_NONE];
//     };
  
     
  
//     // full 배열 생성 , 채워질 값 
//     Blockly.Python['numpy_full'] = function(block) {
//       var text_numpy_full_pre_val = block.getFieldValue('Numpy_full_pre_val');
//       var text_numpy_full_next_val = block.getFieldValue('Numpy_full_next_val');
//       // TODO: Assemble Python into code variable.
//       var code = `np.full((${text_numpy_full_pre_val}),${text_numpy_full_next_val})`;  
//       // TODO: Change ORDER_NONE to the correct strength. 
//       return [code, Blockly.Python.ORDER_NONE];  
//     };
  
//     // eye 배열생성 과 동시에, 대각선 1로 채우기
//     Blockly.Python['numpy_eye'] = function(block) {
//       var text_numpy_eye_arry = block.getFieldValue('Numpy_eye_arry');
//       // TODO: Assemble Python into code variable. 
//       var code =  `np.eye(${text_numpy_eye_arry})`;   
//       // TODO: Change ORDER_NONE to the correct strength.
//       return [code, Blockly.Python.ORDER_NONE];   
//     }; 
    
//     // max 최대값 찾기 
//     Blockly.Python['numpy_max'] = function(block) {
//       var text_numpy_max_arry = block.getFieldValue('Numpy_max_arry');
//       // TODO: Assemble Python into code variable.
//       var code =  `np.max(${text_numpy_max_arry})\n`;    
//       return code; 
//     };
   
//     // min 최소값 찾기 
//     Blockly.Python['numpy_min'] = function(block) {
//       var text_numpy_min_arry = block.getFieldValue('Numpy_min_arry');
//       // TODO: Assemble Python into code variable.
//       var code =  `np.min(${text_numpy_min_arry})\n`;    
//       return code;  
//     };
  
//     // shape 행렬 차원 반환 
//     Blockly.Python['numpy_shape'] = function(block) {
//       var text_numpy_shape = block.getFieldValue('Numpy_shape');
//       // TODO: Assemble Python into code variable.
//       var code = `${text_numpy_shape}.shape\n`;     
//       return code;  
//     };
     
//     // reshape 행렬 차원 변경
//     Blockly.Python['numpy_reshape'] = function(block) {
//       var text_numpy_reshape_vari = block.getFieldValue('Numpy_reshape_vari');
//       var text_numpy_reshape_array = block.getFieldValue('Numpy_reshape_array');
//       // TODO: Assemble Python into code variable.
//       var code = `${text_numpy_reshape_vari}.reshape((${text_numpy_reshape_array}))\n`;    
//       return code; 
//     };
   
//    // random.randn or randint  표준정규 분포에 따른 무작위 숫자 생성 또는 정수 난수 
//    Blockly.Python['numpy_random_rand'] = function(block) {
//       var dropdown_numpy_get_random = block.getFieldValue('Numpy_Get_random');
//       var text_numpy_random_rand_array = block.getFieldValue('Numpy_random_rand_array');
//       // TODO: Assemble Python into code variable.
//       var code; 
//       if(dropdown_numpy_get_random == 'Numpy_random_randn'){
//            code = `np.random.randn(${text_numpy_random_rand_array})`;    
//       }else if (dropdown_numpy_get_random == 'Numpy_random_randint'){
//            code = `np.random.randint(${text_numpy_random_rand_array})`;    
//       } 
//       return [code, Blockly.Python.ORDER_NONE];  
//     };   
    
//     // exp 지수  
//     Blockly.Python['numpy_exp'] = function(block) { 
//       var value_numpy_exp_val = Blockly.Python.valueToCode(block, 'Numpy_exp_val', Blockly.Python.ORDER_ATOMIC);
//       // TODO: Assemble Python into code variable.  
//       var code = `np.exp(${value_numpy_exp_val})`;        
//       // TODO: Change ORDER_NONE to the correct strength.   
//       return [code, Blockly.Python.ORDER_NONE];    
//     };     
   
//     //matplot1 
//     Blockly.Python['matplotlib_main'] = function(block) {
//       // TODO: Assemble Python into code variable.
//       var code =`fig = plt.figure()  
//   fig, ax_lst = plt.subplots(2, 2, figsize=(8,5))\n`; 
//           return code;  
//     };  
    
//   //matplot2  
//   Blockly.Python['matplotlib_pre_graph'] = function(block) {
//     var dropdown_matplotlib_num_location = block.getFieldValue('matplotlib_num_location');
//     var text_matplotlib_user_xy  = block.getFieldValue('matplotlib_user_xy');
//     var dropdown_matplotlib_graph_select = block.getFieldValue('matplotlib_graph_select');
//     var checkbox_matplotlib_line_ox = block.getFieldValue('matplotlib_line_OX') == 'TRUE';
//     var dropdown_matplotlib_line_select = block.getFieldValue('matplotlib_line_select');
//     // TODO: Assemble Python into code variable.
//     DL_Gra = "chcked"; 
//     var matplot_lo ; 
//     var matplot_graph; 
//     var matplot_line; 
//     switch(dropdown_matplotlib_num_location){ 
     
//       case "matplotlib_screen" : 
//         matplot_lo =`fig, ax_lst = plt.subplots(1,1, figsize=(8,6))
//   ax_lst`;  
//         break;
  
//       case "matplotlib_num_1" :
//       matplot_lo =  "ax_lst[0][0]"; 
//       break;
  
//       case "matplotlib_num_2" : 
//       matplot_lo =  "ax_lst[0][1]"; 
//       break;
  
//       case "matplotlib_num_3" :
//       matplot_lo = "ax_lst[1][0]"; 
//       break;  
  
//       case "matplotlib_num_4" :
//       matplot_lo =  "ax_lst[1][1]";  
//       break;
  
//       default:
//       break;
//     }
  
//     switch(dropdown_matplotlib_graph_select){ 
//       case "matplotlib_line" :
//       matplot_graph =  "plot"; 
//       break;
  
//       case "matplotlib_scatter" :
//       matplot_graph =  "scatter"; 
//       break;
   
//       case "matplotlib_bar" :
//       matplot_graph = "bar";  
//       break;  
  
//       case "matplotlib_error_bar" :  
//       matplot_graph =  "errorbar";   
//       break;
  
//       case "matplotlib_box" :  
//       matplot_graph =  "boxplot";   
//       break;
  
//       case "matplotlib_histogram" :  
//       matplot_graph =  "hist";    
//       break;  
  
//       default:  
//       break;
//     } 
  
//     switch(dropdown_matplotlib_line_select){ 
//       case "matplotlib_line_1" :
//       matplot_line =  "ro-"; 
//       break;
  
//       case "matplotlib_line_2" :
//       matplot_line =  "bo";
//       break;
  
//       case "matplotlib_line_3" :
//       matplot_line = "bo--"; 
//       break;  
   
//       case "matplotlib_line_4" :  
//       matplot_line =  "kx";   
//       break;
  
//       default:  
//       break;  
//     } 
//   var code ; 
//   if(checkbox_matplotlib_line_ox == true){
//      code =`${matplot_lo}.${matplot_graph}( ${text_matplotlib_user_xy } ,'${matplot_line}' )\n`;
//   } else if(dropdown_matplotlib_graph_select == "matplotlib_error_bar"){ 
//     code =`${matplot_lo}.${matplot_graph}( ${text_matplotlib_user_xy },fmt = "o--" ,capsize= 3 )\n`;  
//   }else{
//      code =`${matplot_lo}.${matplot_graph}( ${text_matplotlib_user_xy } )\n`;      
//   }   
//         return code;                 
//   };  
   
  
//   //matplot3 
//   Blockly.Python['matplotlib_graph_end'] = function(block) { 
//     // TODO: Assemble Python into code variable. 
//     var code =`plt.show() 
//   buf = io.BytesIO()      
//   fig.savefig(buf, format='png')   
//   buf.seek(0)
//   img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')\n`;
//     return code;
//   };  
      
//   // 테스트 용도 선형 회귀 생성 
//   Blockly.Python['linearregression_c'] = function(block) { 
//     // TODO: Assemble Python into code variable.
//     var code = 'LinearRegression()\n'; 
//     // TODO: Change ORDER_NONE to the correct strength. 
//     return [code, Blockly.Python.ORDER_NONE];
//   }; 
//   //모델 훈련 
//   Blockly.Python['linearregression_train'] = function(block) {
//     var value_linearregression_val = Blockly.Python.valueToCode(block, 'LinearRegression_val', Blockly.Python.ORDER_ATOMIC);
//     var text_linearregression_x = block.getFieldValue('LinearRegression_X');
//     var text_linearregression_y = block.getFieldValue('LinearRegression_Y');
//     // TODO: Assemble Python into code variable.
//     var code =`${value_linearregression_val}.fit( ${text_linearregression_x },${text_linearregression_y } )\n`;   
//     return code;
//   };   
   
    