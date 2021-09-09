Blockly.defineBlocksWithJsonArray(
    [


      
//numpy 라이브러리 임포트
    {
        "type": "numpy_library",
        "message0": "%{BKY_NUMPY_IMPORT_1}",
        "inputsInline": true,
        "previousStatement": null, 
        "nextStatement": null,
        "style": "numpy_blocks",
        "tooltip": "",
        "helpUrl": ""
      },


//CSV 파일로 저장   
{
  "type": "data_to_csv",
  "message0": "%{BKY_NUMPY_DATA_TO_CSV_1}", 
  "args0": [
    {
      "type": "input_value",
      "name": "value_data_to_csv_dataval" 
    },
    {
      "type": "field_input",
      "name": "value_value_data_to_csv_name",
      "text": "%{BKY_NUMPY_DATA_TO_CSV_2}"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "%{BKY_NUMPY_HUE}",
  "tooltip": "", 
  "helpUrl": ""
},

//.list 데이터 리스트 변환
{
  "type": "data_conversion",
  "message0": "%{BKY_NUMPY_DATA_CONVERSION_1}",
  "args0": [
    {
      "type": "input_value",
      "name": "Data_Conversion_var"
    },
    {
      "type": "field_dropdown",
      "name": "Data_Conversion_Option",
      "options": [
        [
          "Pandas",
          "Data_Conversion_Option_Pandas"
        ],
        [
          "Numpy",
          "Data_Conversion_Option_Numpy"
        ],
        [
          "Tuple",
          "Data_Conversion_Option_Tuple"
        ],
        [
          "Dictionary",
          "Data_Conversion_Option_Dictionary"
        ]
      ]
    }
  ],
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}", 
  "tooltip": "",
  "helpUrl": ""
}, 
//np.concatenate
{
  "type": "np_concatenate",
  "message0": "%{BKY_NUMPY_NP_CONCATENATEARRAY_1}",
  "args0": [
    {
      "type": "field_input",
      "name": "np_concatenate_var1",
      "text": "%{BKY_NUMPY_NP_CONCATENATEARRAY_2}"
    },
    {
      "type": "field_input",
      "name": "np_concatenate_var2",
      "text": "%{BKY_NUMPY_NP_CONCATENATEARRAY_2}"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
//배열 생성
{
  "type": "create_arry",
  "message0": "%{BKY_NUMPY_CREATE_ARR_1}", 
  "args0": [  
    {
      "type": "field_input", 
      "name": "Create_arry_val",
      "text": "1,2,'a','b'"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
//np.arange 
{
  "type": "np_arrange",
  "message0": "%{BKY_NUMPY_NP_ARRANGE_1}",
  "args0": [
    {
      "type": "input_value",
      "name": "np_arrange_value1"
    },
   
  ],
  "inputsInline": true,
  "output": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},
//라이브러리 임포트 사이킷런 
{
  "type": "lib_import_sklearn", 
  "message0": "[ 사이킷런 임포트 ]  %1 에서  %2 포함",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "lib_from_a_option",
      "options": [
        [
          "sklearn",
          "lib_from_sklearn_sklearn"
        ],
        [
          "sklearn.model_selection",
          "lib_from_sklearn_model_selection"
        ],
        [
          "sklearn.linear_model",
          "lib_from_linear_model"
        ],
        [
          "sklearn.neural_network",
          "lib_from_neural_network_model"
        ],
        [
          "sklearn.naive_bayes",
          "lib_from_naive_bayes"
        ],
        [
          "sklearn.ensemble",
          "lib_from_ensemble"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "lib_import_a_option",
      "options": [
        [
          "train_test_split",
          "lib_import_sklearn_ train_test_split"
        ],
        [
          "LinearRegression",
          "lib_import_sklearn_LinearRegression"
        ],
        [
          "LogisticRegression",
          "lib_import_sklearn_LogisticRegression"
        ],
        [
          "make_classification",
          "lib_import_sklearn_ make_classification"
        ], 
        [
          "MLPClassifier",
          "lib_import_sklearn_MLPClassifier"
        ], 
        [
          "GaussianNB",
          "lib_import_sklearn_GaussianNB"
        ],
        [
          "svm",
          "lib_import_svm"
        ],
        [
          "tree",
          "lib_import_tree"
        ],
        [
          "RandomForestClassifier",
          "lib_import_RandomForestClassifier"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_NUMPY_HUE}",
  "tooltip": "",
  "helpUrl": ""
},  
  
  // 라이브러리 단일 임포트 부분    
  {
    "type": "lib_import",
    "message0": "( 라이브러리 임포트 )  import %1",
    "args0": [ 
      {
        "type": "field_input",
        "name": "Lib_import_name",
        "text": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }, 
  // 라이브러리  임포트 as
  { 
    "type": "lib_import_as",
    "message0": "( 라이브러리 임포트 )  import %1  as %2",
    "args0": [
      {
        "type": "field_input",
        "name": "Lib_import_name_1",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "Lib_import_name_second",
        "text": ""
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  // 라이브러리  임포트 from
  {
    "type": "lib_import_from",
    "message0": "( 라이브러리 임포트 ) from %1 import %2", 
    "args0": [
      {
        "type": "field_input",
        "name": "Lib_import_name_from",
        "text": ""
      },
      { 
        "type": "field_input",  
        "name": "Lib_import2",
        "text": ""
      }
    ], 
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  
  //print 하기   
  { 
    "type": "print",
    "message0": "print %1 %2", 
    "args0": [ 
      {
        "type": "input_dummy"
      },
      { 
        "type": "input_value",
        "name": "print_value"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },

   
  // numpy 함수 zeros
  {
    "type": "numpy_zeros",
    "message0": "%{BKY_NUMPY_ZEROS_1}",
    "args0": [
      {
        "type": "field_input",
        "name": "numpy_zeros_num_1",
        "text": "%{BKY_NUMPY_ZEROS_2}"
      },
      {
        "type": "field_input",
        "name": "numpy_zeros_num_2",
        "text": "%{BKY_NUMPY_ZEROS_3}"
      },
      {
        "type": "field_dropdown",
        "name": "numpy_zeros_Option",
        "options": [
          [
            "Float",
            "numpy_zeros_Option_float"
          ],
          [
            "Int",
            "numpy_zeros_Option_int"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "", 
    "helpUrl": ""
  }, 
  // np.full 배열 생성 및 , 채워질 값 
  {
    "type": "numpy_full",
    "message0": "%{BKY_NUMPY_FULL_1}",
    "args0": [
      {
        "type": "field_input",
        "name": "numpy_full_rows",
        "text": "%{BKY_NUMPY_ZEROS_2}"
      },
      {
        "type": "field_input",
        "name": "numpy_full_cols",
        "text": "%{BKY_NUMPY_ZEROS_3}"
      },
      {
        "type": "field_input",
        "name": "numpy_full_num",
        "text": "0"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }, 
  // eye 함수 대각선으로 1채우기 
  {
    "type": "numpy_eye",
    "message0": "%{BKY_NUMPY_EYE_1}",
    "args0": [
      {
        "type": "field_input",
        "name": "numpy_eye_num",
        "text": "%{BKY_NUMPY_EYE_2}"
      }
    ], 
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  
  // np.max_min  최대 값,최소 값 찾기 
  {
    "type": "numpy_max_min",
    "message0": "%{BKY_NUMPY_MAX_MIN_1}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "numpy_max_min_option",
        "options": [
          [
            "max",
            "numpy_max"
          ],
          [
            "min",
            "numpy_min"
          ]
        ]
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "numpy_max_min_val"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  //np.shape  
  {
    "type": "numpy_shape",
    "message0": "%{BKY_NUMPY_SHAPE_1}",
    "args0": [
      {
        "type": "input_value",
        "name": "numpy_shape_num1"
      },
      {
        "type": "input_value",
        "name": "numpy_shape_num"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  // reshpae 행렬 차원 변경 
  {
    "type": "numpy_reshape",
    "message0": "%{BKY_NUMPY_RESHAPE_1}",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "numpy_reshape_val"
      },
      {
        "type": "input_value",
        "name": "numpy_reshape_struct",
        //"text": "행수,열수"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  }, 
  //np.flatten
  {
    "type": "np_flatten",
    "message0": "%{BKY_NUMPY_FLATTEN_1}",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "np_flatten_var"
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  // random.randn  표준정규 분포에 따른 무작위 숫자 생성 
  {
    "type": "numpy_random_rand",
    "message0": "[ %{BKY_NUMPY_RANDOM_RAND_1} ] %1 (  %2 ,  %3 )",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "numpy_random_rand_Option",
        "options": [
          [
            "%{BKY_NUMPY_RANDOM_RAND_2}",
            "numpy_random_rand"
          ],
          [
            "%{BKY_NUMPY_RANDOM_RAND_3}",
            "numpy_random_randint"
          ],
          [
            "%{BKY_NUMPY_RANDOM_RAND_4}",
            "numpy_random_randn"
          ],
          [
            "Sample",
            "numpy_random_sample"
          ],
          [
            "Choice",
            "numpy_random_choice"
          ],
          [
            "Seed",
            "numpy_random_seed"
          ]
        ]
      },
      {
        "type": "field_input",
        "name": "numpy_random_randn_rows",
        "text": ""
      },
      {
        "type": "field_input",
        "name": "numpy_random_randn_cols",
        "text": ""
      }
    ],
    "inputsInline": true,
    "output": null,
    "colour": "%{BKY_NUMPY_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
    // 지수 exp
    {
      "type": "numpy_exp",
      "message0": "%{BKY_NUMPY_EXP_1}",
      "args0": [ 
        {
          "type": "input_value",
          "name": "numpy_exp_num"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    }, 
    //np.mean
    {
      "type": "np_mean",
      "message0": "%{BKY_NUMPY_MEAN_1}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "np_mean_var"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.diff
    {
      "type": "np_diff_",
      "message0": "[ %{BKY_NUMPY_DIFF_1} ]  %1",
      "args0": [
        {
          "type": "field_input",
          "name": "np_diff_var_value",
          "text": "%{BKY_NUMPY_DIFF_2}"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.append etc
    {
      "type": "np_arry_change",
      "message0": "%{BKY_NUMPY_ARRAY_CHANGE_1}",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "np_arry_change_Option",
          "options": [
            [
              "append",
              "np_arry_change_append"
            ],
            [
              "extend",
              "np_arry_change_extend"
            ],
            [
              "insert",
              "np_arry_change_insert"
            ],
            [
              "delete",
              "np_arry_change_delete"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "np_arry_change_var"
        },
        {
          "type": "input_value",
          "name": "np_arry_change_value"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.prod
    {
      "type": "np_prod",
      "message0": "%{BKY_NUMPY_PROD_1}",
      "args0": [
        {
          "type": "field_input",
          "name": "np_prod_var",
          "text": "%{BKY_NUMPY_PROD_2}"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    //np.fft
    {
      "type": "np_fft_fft",
      "message0": "%{BKY_NUMPY_FFT_FFT_1}",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "np_fft_fft_var"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": "%{BKY_NUMPY_HUE}",
      "tooltip": "",
      "helpUrl": ""
    },
    
  Blockly.Blocks['visualization_library'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.MATPLOT_VISUALIZATION_LIBRARY);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("matplot_blocks");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  },

  Blockly.Blocks['visualization_library_cm'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.MATPLOT_VISUALIZATION_LIBRARY_CM);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("matplot_blocks");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  },
  
    // pandas, numpy, tuple  시각화   
   {
    "type": "val_vi",
    "message0": "%{BKY_MATPLOT_VAL_VI}",
    "args0": [ 
      {
        "type": "field_dropdown",
        "name": "Val_VI_Option",
        "options": [ 
          [ 
            "Pandas",
            "Val_VI_Pandas"
          ],
          [
            "Numpy",
            "Val_VI_Numpy"
          ],
          [
            "Tuple",
            "Val_VI_Tuple"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "Val_VI_Val"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "", 
    "helpUrl": "" 
  },
  //matplot1 
  {
    "type": "matplotlib_main",
    "message0": "%{BKY_MATPLOT_MAIN}",
    "args0": [
      {
        "type": "input_dummy"
      },  
      {
        "type": "input_value",
        "name": "matplotlib_main_cols"
      },
      {
        "type": "input_value",
        "name": "matplotlib_main_rows"
      },
      {
        "type": "input_value",
        "name": "matplotlib_figsize_row"
      },
      {
        "type": "input_value",
        "name": "matplotlib_figsize_col"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "",
    "helpUrl": "" 
  },
  //matplot2 수정
  {
    "type": "matplotlib_pre_graph",
    "message0": "%{BKY_MATPLOT_PRE_GRAPH_1}",
    "args0": [
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_location1"
      },
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_location2"
      },
      {
        "type": "input_value",
        "name": "xx"
      },
      {
        "type": "input_value",
        "name": "yy"
      },
      {
        "type": "field_dropdown",
        "name": "matplotlib_graph_select",
        "options": [
          [
            "%{BKY_MATPLOT_PRE_GRAPH_2}",
            "matplotlib_line"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_3}",
            "matplotlib_scatter"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_4}",
            "matplotlib_bar"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_5}",
            "matplotlib_error_bar"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_6}",
            "matplotlib_box"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_7}",
            "matplotlib_histogram"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Title"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Xlable"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Ylable"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_legend"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_color"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_other"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  // 출력설정 plt 버전
  {
    "type": "matplotlib_pre_graph_plt",
    "message0": "%{BKY_MATPLOT_PRE_GRAPH_1_PLT}",
    "args0": [
      // {
      //   "type": "input_value",
      //   "name": "matplotlib_pre_graph_location1"
      // },
      // {
      //   "type": "input_dummy"
      // },
      // {
      //   "type": "input_value",
      //   "name": "matplotlib_pre_graph_location2"
      // },
      
      {
        "type": "field_dropdown",
        "name": "matplotlib_graph_select",
        "options": [
          [
            "%{BKY_MATPLOT_PRE_GRAPH_2}",
            "matplotlib_line"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_3}",
            "matplotlib_scatter"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_4}",
            "matplotlib_bar"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_5}",
            "matplotlib_error_bar"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_6}",
            "matplotlib_box"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_7}",
            "matplotlib_histogram"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "xx"
      },
      {
        "type": "input_value",
        "name": "yy"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Title"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Xlable"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_graph_Ylable"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_legend"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_color"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_other"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "",
    "helpUrl": ""
  },



  // 출력설정 2
  {
    "type": "matplotlib_pre_graph_plt_2",
    "message0": "%{BKY_MATPLOT_PRE_GRAPH_2_PLT}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "matplotlib_graph_select",
        "options": [
          [
            "%{BKY_MATPLOT_PRE_GRAPH_2}",
            "matplotlib_line"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_3}",
            "matplotlib_scatter"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_4}",
            "matplotlib_bar"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_5}",
            "matplotlib_error_bar"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_6}",
            "matplotlib_box"
          ],
          [
            "%{BKY_MATPLOT_PRE_GRAPH_7}",
            "matplotlib_histogram"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "xx"
      },
      {
        "type": "input_value",
        "name": "yy"
      },
    
      {
        "type": "input_value",
        "name": "matplotlib_pre_legend"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_color"
      },
      {
        "type": "input_value",
        "name": "matplotlib_pre_other"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "",
    "helpUrl": ""
  },



  //matplot3 
  {
    "type": "matplotlib_graph_end",
    "message0": " [ 그래프 저장 ] ",
    "args0": [
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "matplotlib_main_figure",
    "message0": "%{BKY_MATPLOT_MAIN_1}",
    "args0": [
      {
        "type": "input_dummy"
      },  
      {
        "type": "input_value",
        "name": "matplotlib_main_cols"
      },
      {
        "type": "input_value",
        "name": "matplotlib_main_rows"
      },
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "",
    "helpUrl": "" 
  },

  //plt.plot()
  {
  "type": "matplotlib_plt_plot",
  "message0": "[ plt.plot ] %1",
  "args0": [
    {
      "type": "input_value",
      "name": "matplotlib_plt_plot_val"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "matplot_blocks",
  "tooltip": "",
  "helpUrl": ""
},

  //plt.show()
  {
    "type": "matplotlib_plt_show",
    "message0": "[ plt.show ]",
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "style": "matplot_blocks",
    "tooltip": "",
    "helpUrl": ""
  },

  

  //결과 출력
  {
    "type": "print_output_var",
    "message0": "[ %1 결과 출력 ]  %2 %3",
    
    "args0": [{"type": "field_image","src": "/img/Collection/C17-logo.png","width": 25,"height": 23,"alt": "*","flipRtl": false},﻿
      { 
        
        "type": "input_value",
        "name": "print_output_var1"
      },
      {
        "type": "input_value",
        "name": "print_output_var2"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_COLLECTION_HUE}",
    "tooltip": "",
    "helpUrl": ""
  },
  
  
  
  ]
  ); 

  //넘파이 연산 
  Blockly.Blocks['numpy_operator'] = { 
    init: function() {
      this.appendValueInput("numpy_operator_val")
          .setCheck(null) 
          .appendField(Blockly.Msg.NUMPY_CALCULATION_1)
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMPY_CALCULATION_2,"np.add"], [Blockly.Msg.NUMPY_CALCULATION_3,"np.subtract"], [Blockly.Msg.NUMPY_CALCULATION_4,"np.multiply"], [Blockly.Msg.NUMPY_CALCULATION_5,"np.divide"], [Blockly.Msg.NUMPY_CALCULATION_6,"np.remainder"], [Blockly.Msg.NUMPY_CALCULATION_7,"np.reciprocal"]]), "numpy_operator_Option");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  //인덱스/값 검색
  Blockly.Blocks['numpy_index_values'] = {
    init: function() {
      this.appendValueInput("numpy_index_values_val")
          .setCheck(null)
          .appendField(Blockly.Msg.NUMPY_INDEX_VALUES_111)
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMPY_INDEX_VALUES_2,"np.amax"], [Blockly.Msg.NUMPY_INDEX_VALUES_3,"np.amin"], [Blockly.Msg.NUMPY_INDEX_VALUES_7,"np.take"]]), "numpy_operator_Option");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  //인덱스/값 검색 인자 두개짜리
  Blockly.Blocks['numpy_index_values2'] = {
    init: function() {
      this.appendValueInput("numpy_index_values_val")
          .setCheck(null)
          .appendField(Blockly.Msg.NUMPY_INDEX_VALUES_11)
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMPY_INDEX_VALUES_4,"np.argmax"], [Blockly.Msg.NUMPY_INDEX_VALUES_5,"np.argsort"], [Blockly.Msg.NUMPY_INDEX_VALUES_8,"np.where"], ["모든 데이터 조건(all)", "np.all"], ["조건과 맞는 데이터(any)", "np.any"]]), "numpy_operator_Option");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  //인덱스/값 검색 인자 하나짜리
  Blockly.Blocks['numpy_index_values3'] = {
    init: function() {
      this.appendValueInput("numpy_index_values_val")
          .setCheck(null)
          .appendField(Blockly.Msg.NUMPY_INDEX_VALUES_1)
          .appendField(Blockly.Msg.NUMPY_INDEX_VALUES_6);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  //행렬 연산
  Blockly.Blocks['numpy_array_operator'] = {
    init: function() {
      this.appendValueInput("numpy_array_operator_val")
          .setCheck(null)
          .appendField(Blockly.Msg.NUMPY_ARRAY_OPERATOR_1)
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMPY_ARRAY_OPERATOR_2,"np.dot"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_3,"np.subtract"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_4,"np.transpose"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_5,"np.tril"], [Blockly.Msg.NUMPY_ARRAY_OPERATOR_6,"np.triu"]]), "numpy_array_operator_Option");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  //np.abs
  Blockly.Blocks['nump_abs'] = {
    init: function() {
      this.appendValueInput("nump_abs_val")
          .setCheck(null)
          .appendField(Blockly.Msg.NUMPY_ABS_1);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };




  //사이킷런 데이터셋 임포트
  Blockly.Blocks['sklearn_datasets_noval'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ 데이터셋 무작위 생성 ] ")
          .appendField(new Blockly.FieldDropdown([["Blobs","sklearn_datasets_noval_Blobs"], ["Moons","sklearn_datasets_noval_Moons"], ["Circles","sklearn_datasets_noval_Circles"]]), "sklearn_datasets_noval_Option");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //make blobs
  Blockly.Blocks['make_blobs'] = {
    init: function() {
      this.appendValueInput("Make_Blobs_X")
          .setCheck(null)
          .appendField("[Make Blobs] X_data");
      this.appendValueInput("Make_Blobs_Y")
          .setCheck(null)
          .appendField("Y_data");
      this.appendDummyInput()
          .appendField("샘플수")
          .appendField(new Blockly.FieldTextInput("100"), "Make_Blobs_sample")
          .appendField("특성 개수")
          .appendField(new Blockly.FieldTextInput("2"), "Make_Blobs_feature")
          .appendField("Seed")
          .appendField(new Blockly.FieldTextInput("0"), "Make_Blobs_randomstate");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    } 
  };

  //make moons
  Blockly.Blocks['make_moons'] = {
    init: function() {
      this.appendValueInput("make_moons_X")
          .setCheck(null)
          .appendField("[make_moons] X_data");
      this.appendValueInput("make_moons_Y")
          .setCheck(null)
          .appendField("Y_data");
      this.appendDummyInput()
          .appendField("샘플수")
          .appendField(new Blockly.FieldTextInput("100"), "make_moons_sample")
          .appendField("Seed")
          .appendField(new Blockly.FieldTextInput("0"), "make_moons_randomstate");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}"); 
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


//import knn
Blockly.Blocks['import_knn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.CLUSTER_IMPORT)
        .appendField(new Blockly.FieldDropdown([
          ["KMeans","Import_KNN_KMeans"], 
          ["DBSCAN","Import_KNN_DBSCAN"]]), "Import_KNN_Option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
}; 















//클래스 =
Blockly.Blocks['class_equ'] = {
  init: function() {
    this.appendValueInput("class_equ_val1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("=")
        .appendField(new Blockly.FieldTextInput(""), "class_equ_val2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};



 
// 클래스 self
Blockly.Blocks['self_block'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("self.");  
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(125);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//클래스 매개변수 
Blockly.Blocks['class_func_param'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function () { 
      this.setStyle("list_blocks");
      this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
      this.itemCount_ = 1;
      this.updateShape_(); 
      this.setColour(125); 
      this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
      this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
      this.setOutput(true);
      this.setInputsInline(true);
    }, 
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function () {
      var container = Blockly.utils.xml.createElement('mutation');
      container.setAttribute('items', this.itemCount_);
      return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function (xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
      this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this {Blockly.Block}
     */
    decompose: function (workspace) {
      var containerBlock = workspace.newBlock('lists_create_with_container');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var i = 0; i < this.itemCount_; i++) {
        var itemBlock = workspace.newBlock('lists_create_with_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);//previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    compose: function (containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      // Count number of inputs.
      var connections = [];
      while (itemBlock) {
        connections.push(itemBlock.valueConnection_);
        itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
      }
      // Disconnect any children that don't belong.
      for (var i = 0; i < this.itemCount_; i++) {
        var connection = this.getInput('ADD' + i).connection.targetConnection;
        if (connection && connections.indexOf(connection) == -1) {
          connection.disconnect();
        }
      }
      this.itemCount_ = connections.length;
      this.updateShape_();
      // Reconnect any child blocks.
      for (var i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    saveConnections: function (containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      var i = 0;
      while (itemBlock) {
        var input = this.getInput('ADD' + i);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        i++;
        itemBlock = itemBlock.nextConnection && 
          itemBlock.nextConnection.targetBlock();
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function () {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY');
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
      }
      // Add new inputs.
      for (var i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          var input = this.appendValueInput('ADD' + i)
            .setAlign(Blockly.ALIGN_RIGHT);
          if (i == 0) {
            // input.appendField("array"); 
          }
          
        }
      }
      // Remove deleted inputs.
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
  };
  Blockly.Blocks.lists_create_with_container = {
    init: function () {
      this.setStyle("list_blocks");
      this.appendDummyInput().appendField(
        "항목추가"
      );
      this.appendStatementInput("STACK");
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
      this.setColour(125);
      this.contextMenu = !1;
    },
  };
  Blockly.Blocks.lists_create_with_item = {
    init: function () {
      this.setStyle("list_blocks");
      this.appendDummyInput().appendField(
        Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
      );
      this.setPreviousStatement(!0);
      this.setNextStatement(!0);
      this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
      this.setColour(125);
      this.contextMenu = !1;
    },
  };

  //크롤링 url 가져오기 
  Blockly.Blocks['script_block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ 크롤링 테스트중 ]")
          .appendField(new Blockly.FieldDropdown([["네이버 ","Script_block_naver"], ["멜론","Script_block_melon"]]), "Script_Block_Option");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(125);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 넘파이 매개변수 두개짜리
  Blockly.Blocks['parameter_two'] = {
    init: function() {
      this.setStyle("list_blocks");
      this.appendValueInput("par1")
          .setCheck(null);
      this.appendValueInput("par2")
          .setCheck(null);
      this.setInputsInline(true);
      this.setColour(125);
    this.setOutput(true);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };

  // 넘파이 매개변수 하나짜리
  Blockly.Blocks['parameter_one'] = {
    init: function() {
      this.setStyle("list_blocks");
      this.appendValueInput("par1")
          .setCheck(null);
      this.setInputsInline(true);
      this.setColour(125);
    this.setOutput(true);
    this.setTooltip("");
    this.setHelpUrl("");
    }
  };




// 2021.01.28 np_array 남지원
Blockly.Blocks['np_array'] = {
  init: function() {
    this.appendValueInput("INPUT")
        .setCheck(null)
        .appendField("[배열생성]");
    this.appendValueInput("DTYPE")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};