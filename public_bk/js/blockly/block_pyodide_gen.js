

Blockly.Python['nj_array'] = function (block) {
    var text_array = block.getFieldValue('array');
    // TODO: Assemble JavaScript into code variable.
    var code = 'np.array([' + text_array + '])';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['forp'] = function (block) {
    var value_i = Blockly.Python.valueToCode(block, 'i', Blockly.Python.ORDER_ATOMIC);
    var value_range = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC);
    var statements_for = Blockly.Python.statementToCode(block, 'for');
    // TODO: Assemble Python into code variable.
    var code = "for " + value_i + " in range(" + value_range + "):\n" + statements_for;
    return code;
};

Blockly.Python['sump'] = function (block) {
    var value_i = Blockly.Python.valueToCode(block, 'i', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sum(' + value_i + ')'; 
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['lrgraph'] = function (block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    return code;
};
Blockly.Python['logicgraph'] = function (block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_w = Blockly.Python.valueToCode(block, 'w', Blockly.Python.ORDER_ATOMIC);
    var value_b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '';
    return code;
};
Blockly.Python['array_get'] = function (block) {
    var value_array = Blockly.Python.valueToCode(block, 'array', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_array + '[[' + value_name + ']]';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['csv2'] = function (block) {
    var file = block.getFieldValue('csv_url');
    // x, y
    var x_train;
    var value = "";
    var columns = "[";
    try {
        file = JSON.parse(file);
        // key 값만 추출
        var key = Object.getOwnPropertyNames(file[0]);
        // 2차원 배열 array
        x_train = new Array(file.length);

        for (var i = 0; i < x_train.length; i++) {
            x_train[i] = new Array(key.length);
        }
        for (var i = 0; i < key.length; i++) {
            columns = columns + "'" + key[i] + "'";
            if (i != key.length - 1) {
                columns = columns + ",";
            }
        }
        // 값 세팅
        for (var i = 0; i < x_train.length; i++) {
            for (var j = 0; j < key.length; j++) {
                var keyName = key[j]; // key 값
                var data = file[i][keyName];
                if (Number(data) * 0 != 0) {
                    data = "'" + data + "'";
                }
                if (data == "") {
                    data = "None";
                }
                if (Number(data) == 0) {
                    data = "0";
                }
                x_train[i][j] = data; // value
            } value = value + "[" + x_train[i] + "]";
            if (i != x_train.length - 1) {
                value = value + ",";
            }
        }
    } catch (e) {
        // console.log(e);
    }
    var code = "[" + value + "], columns=" + columns + "]";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// /////////////////////라이브러리 추가블록////////////////////////20200910 이진형
// Blockly.Python['import_lib'] = function (block) {
//     var dropdown_lib = block.getFieldValue('lib');
//     var value_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable. 
//     var code = '';
//     switch (dropdown_lib) {  
//         case "numpy": 
//             code = "import numpy as "+value_var;
//             Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"np");
//             break;
//         case "pandas": 
//             code = "import pandas as "+value_var; 
//             Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"pd");
//             break;
//         case "matplotlib.pyplot": 
//             code = "import matplotlib.pyplot as "+value_var;
//             Blockly.getMainWorkspace().renameVariableById(Blockly.getMainWorkspace().getVariable(value_var).getId(),"plt");
//             break;
//     }

//     return code;
// };



Blockly.Python['jin_train_test_split'] = function (block) {
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    var text_test_size = block.getFieldValue('test_size');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.model_selection import train_test_split\n' + value_x_train + ',' + value_x_test + ',' + value_y_train + ',' + value_y_test + '= train_test_split(' + value_x_data + ',' + value_y_data + ',' + 'test_size=' + text_test_size + ', shuffle=' + dropdown_shuffle + ', random_state=' + text_seed + ')\n';
    return code;
};












// ////////////////////////python basic block
// 집합
Blockly.Python['set'] = function (block) {
    var set = Blockly.Python.valueToCode(block, 'SET', Blockly.Python.ORDER_ATOMIC);
    var code = `set(` + set + `)`;
    // 뮤테이션을 이용하여 어러 값을 가져오도록 수정해야함
    return [code, Blockly.Python.ORDER_ATOMIC];
};
// 집합 종류
Blockly.Python['set_menu'] = function (block) {
    var dropdown_set_menu = block.getFieldValue('set_menu');
    var value_set1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
    var value_set2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    if (dropdown_set_menu == 'union') {
        var code = value_set1 + '.union(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'intersection') {
        var code = value_set1 + '.intersection(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'difference') {
        var code = value_set1 + '.difference(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'add') {
        var code = value_set1 + '.add(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'update') {
        var code = value_set1 + '.update(' + value_set2 + ')';
    } else if (dropdown_set_menu == 'remove') {
        var code = value_set1 + '.remove(' + value_set2 + ')';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};




//////////////테이블그리기 파이썬 코드 
Blockly.Python['data_csv_read'] = function (block) {
    var value_data_csv_read_val = Blockly.Python.valueToCode(block, 'Data_csv_read_val', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'af = ' + value_data_csv_read_val + '.values.tolist()\n';
    return code;
};










// 딕셔너리
Blockly.Python['dict'] = function (block) {
    var key = new Array(block.itemCount_);
    var values = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i = i + 1) {
        if (i == block.itemCount_ - 1) {
            key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE)
        } else {
            key[i] = Blockly.Python.valueToCode(block, 'ADD' + i, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i, Blockly.Python.ORDER_NONE) + ', ';
            key[i + 1] = Blockly.Python.valueToCode(block, 'ADD' + i + 1, Blockly.Python.ORDER_NONE) + ' : ' + Blockly.Python.valueToCode(block, 'ADD2' + i + 1, Blockly.Python.ORDER_NONE)
        }
    }

    // 리턴의 순서를 바꿔줘야함
    var code = '{' + key.join('') + '}';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 딕셔너리 옵션
Blockly.Python['dic_menu'] = function (block) {
    var dropdown_dic = block.getFieldValue('dic');
    var value_dic1 = Blockly.Python.valueToCode(block, 'dic1', Blockly.Python.ORDER_ATOMIC);
    var value_dic2 = Blockly.Python.valueToCode(block, 'dic2', Blockly.Python.ORDER_ATOMIC);
    var value_dic3 = Blockly.Python.valueToCode(block, 'dic3', Blockly.Python.ORDER_ATOMIC);
    if (dropdown_dic == 'printvalues1') {
        var code = 'print(' + value_dic1 + '[' + value_dic2 + '])';
    } else if (dropdown_dic == 'printvalues2') {
        var code = 'print(' + value_dic1 + '[' + value_dic2 + ']' + '[' + value_dic3 + '])';
    } else if (dropdown_dic == 'addvalues') {
        var code = value_dic1 + '[' + value_dic2 + '] = ' + value_dic3;
    } else if (dropdown_dic == 'delvalues') {
        var code = 'del ' + value_dic1 + '[' + value_dic2 + ']';
    } else if (dropdown_dic == 'changedict') {
        var code = 'dict(' + value_dic1 + ')';
    } else if (dropdown_dic == 'selectvalues') {
        var code = value_dic1 + '[' + value_dic2 + ']';
    } else if (dropdown_dic == 'getvalues') {
        var code = value_dic1 + '.values()';
    } else if (dropdown_dic == 'getkeys') {
        var code = value_dic1 + '.keys()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 반복문(파이썬스타일)
Blockly.Python['for_python'] = function (block) {
    var for1 = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    var for2 = Blockly.Python.valueToCode(block, 'range', Blockly.Python.ORDER_ATOMIC);

    var code = 'for ' + for1 + ' in ' + for2 + ':';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 반복문
Blockly.Python['for_range'] = function (block) {
    var range1 = Blockly.Python.valueToCode(block, 'for_range', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'range(' + range1 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};



// 사이킷런 MLP 블록




//   //MLP fit 
//   Blockly.Python['sklearn_mlp_fit'] = function(block) {
//     var value_sklearn_mlp_fit_lib_var = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_lib_var', Blockly.Python.ORDER_ATOMIC);
//     var value_sklearn_mlp_fit_x = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.Python.ORDER_ATOMIC);
//     var value_sklearn_mlp_fit_y = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = `${value_sklearn_mlp_fit_lib_var}.fit(${value_sklearn_mlp_fit_x},${value_sklearn_mlp_fit_y})\n`;
//     return code;
//   }; 


Blockly.Python['vis_tree'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var text_s = block.getFieldValue('s');
    var text_e = block.getFieldValue('e');
    // TODO: Assemble Python into code variable.
    var code = '#트리그래프\n';
    return code;
};




Blockly.Python['import_scikit'] = function (block) {
    var dropdown_metrics = block.getFieldValue('metrics');
    // TODO: Assemble Python into code variable.
    var code = '\n';

    switch (dropdown_metrics) {
        case "accuracy_score":
            code = "from sklearn.metrics import accuracy_score\n";
            break;
        case "metrics":
            code = "from sklearn import metrics\n";
            break;
        case "average_precision_score":
            code = "from sklearn.metrics import average_precision_score\n";
            break;
        case "precision_score":
            code = "from sklearn.metrics import precision_score\n";
            break;
        case "mean_absolute_error":
            code = "from sklearn.metrics import mean_absolute_error\n";
            break;
        case "mean_squared_error":
            code = "from sklearn.metrics import mean_squared_error\n";
            break;
        case "median_absolute_error":
            code = "from sklearn.metrics import median_absolute_error\n";
            break;
        case "classification_report":
            code = "from sklearn.metrics import classification_report\n";
            break;     
    } 
    return code;
};










// 신경망 MLPClassifier
Blockly.Python['mlp_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');
    var text_numEpochs = block.getFieldValue('numEpochs');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = MLPClassifier(random_state = " + text_numSeed + ", max_iter = " + text_numEpochs + ")\n";
    return code;
};
Blockly.Python['mlp_regressor'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_numSeed = block.getFieldValue('numSeed');
    var text_numEpochs = block.getFieldValue('numEpochs');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = MLPRegressor(random_state = " + text_numSeed + ", max_iter = " + text_numEpochs + ")\n";
    return code;
};


Blockly.Python['import_mlp'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.neural_network import ' + dropdown_lib + "\n";
    return code;
};
Blockly.Python['import_linear'] = function (block) {
    var dropdown_lib = block.getFieldValue('lib');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.linear_model import ' + dropdown_lib + "\n";
   
    return code;
};
Blockly.Python['import_kmeans'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = "from sklearn.cluster import KMeans\n";
    return code;
};


Blockly.Python['kmeans_fit'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var variable_x_train = Blockly.Python.valueToCode(block, 'X_train', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ".fit(" + variable_x_train + ")" + "\n";
    return code;
};


Blockly.Python['stratifiedkfold'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_name = block.getFieldValue('NAME');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = value_model + '= KFold(n_splits=' + text_name + ',shuffle=' + dropdown_shuffle + ',random_state=' + text_seed + ')\n';
    return code;
};


  Blockly.Python['import_tree'] = function(block) {
    var dropdown_tree = block.getFieldValue('tree');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.tree import '+dropdown_tree+'\n';
    return code;
  };




  Blockly.Python['np_dot'] = function(block) {
    var value_dot = Blockly.Python.valueToCode(block, 'dot', Blockly.Python.ORDER_ATOMIC);
    var value_dot2 = Blockly.Python.valueToCode(block, 'dot2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'np.dot('+value_dot+','+value_dot2+')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
  };

  /////////////////////////////////////////////////////////////////////////////
//
// 2021-01 정지현 사이킷런 임포트 블록 추가
//
/////////////////////////////////////////////////////////////////////////////
Blockly.Python['import_scikit_learn'] = function(block) {
    // TODO: Assemble Python into code variable. 
    var code = 'import sklearn\nfrom sklearn import *\n';
    return code;
  };