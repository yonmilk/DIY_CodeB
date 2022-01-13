//////////////////////////////////////////////////////
//
// 2021.01. 사이킷런 재정리, 정지현
// 사이킷런 파이썬 코드
//
//////////////////////////////////////////////////////

// 사이킷런 라이브러리 임포트
Blockly.Python['import_scikit_learn'] = function (block) {
    // TODO: Assemble Python into code variable. 
    var code = 'import sklearn\nfrom sklearn import *\n';
    return code;
};

//////////////////////////////////////////////////////
//
// 기본 - 모델 학습 및 평가
//
//////////////////////////////////////////////////////

Blockly.Python['model_fit'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var variable_x_train = Blockly.Python.valueToCode(block, 'X_train', Blockly.Python.ORDER_ATOMIC);
    var variable_y_train = Blockly.Python.valueToCode(block, 'Y_train', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "";
    if (!(variable_x_train) && variable_y_train) {
        code = value_model + ".fit(" + variable_y_train + ")" + "\n";
    }
    else if (!(variable_y_train) && variable_x_train) {
        code = value_model + ".fit(" + variable_x_train + ")" + "\n";
    }
    else if (variable_y_train && variable_x_train) {
        code = value_model + ".fit(" + variable_x_train + "," + variable_y_train + ")" + "\n";
    }
    else {
        code = "fit()"
    }
    return code;
};

// Model Score

Blockly.Python['model_score'] = function (block) {
    var value_model_name = Blockly.Python.valueToCode(block, 'model_name', Blockly.Python.ORDER_ATOMIC);
    var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model_name + '.score(' + value_x_test + ', ' + value_y_test + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Model Predict
Blockly.Python['model_predict'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ".predict(" + value_name + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};



//////////////////////////////////////////////////////
//
// 데이터셋
//
//////////////////////////////////////////////////////

// Sklearn Dataset
Blockly.Python['import_dataset'] = function (block) {
    var dropdown_dataset_name = block.getFieldValue('dataset_name');
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code;
    if (dropdown_dataset_name == "make_blobs" || dropdown_dataset_name == "make_moons") {
        code = `from sklearn.datasets import ${dropdown_dataset_name}`;
    } else {
        code = value_x_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '().data\n' + value_y_data + ' = ' + 'sklearn.datasets.' + dropdown_dataset_name + '().target\n';
    }
    return code;
};

Blockly.Python['import_load_digits'] = function (block) {
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var value_n_class = Blockly.Python.valueToCode(block, 'n_class', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code =
        `load_digits = sklearn.datasets.load_digits(n_class=${value_n_class})
${value_x_data} = load_digits.data
${value_y_data} = load_digits.target\n`
    return code;
};

// <-- blobs moons circles 블록 통합으로 인해 주석처리함 -->
// Sklearn Make Blobs and Make Moons Dataset
// Blockly.Python['random_import_blobs'] = function (block) {
//     var dropdown_dataset_name = block.getFieldValue('dataset_name');
//     var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
//     var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
//     var sample = Blockly.Python.valueToCode(block, 'sa', Blockly.Python.ORDER_ATOMIC);
//     var fea = Blockly.Python.valueToCode(block, 'fe', Blockly.Python.ORDER_ATOMIC);
//     var seed = Blockly.Python.valueToCode(block, 'seed', Blockly.Python.ORDER_ATOMIC);

//     var code = "";
//     if (value_x_data && !(value_y_data)) {
//         code = value_x_data + ' = ' + 'sklearn.datasets.make_blobs' + '( n_samples = ' + sample + ', n_features = ' + fea + ', random_state = ' + seed + ')\n';
//     }
//     else if (!(value_x_data) && value_y_data) {
//         code = value_y_data + ' = ' + 'sklearn.datasets.make_blobs' + '( n_samples = ' + sample + ', n_features = ' + fea + ', random_state = ' + seed + ')\n';
//     }
//     else {
//         code = value_x_data + ',' + value_y_data + ' = ' + 'sklearn.datasets.make_blobs' + '( n_samples = ' + sample + ', n_features = ' + fea + ', random_state = ' + seed + ')\n';
//     }
//     return code;
// };

// Blockly.Python['random_import_moons'] = function (block) {
//     var dropdown_dataset_name = block.getFieldValue('dataset_name');
//     var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
//     var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
//     var sample = Blockly.Python.valueToCode(block, 'sa', Blockly.Python.ORDER_ATOMIC);
//     var fea = Blockly.Python.valueToCode(block, 'fe', Blockly.Python.ORDER_ATOMIC);
//     var noise = Blockly.Python.valueToCode(block, 'noise', Blockly.Python.ORDER_ATOMIC);
//     var seed = Blockly.Python.valueToCode(block, 'seed', Blockly.Python.ORDER_ATOMIC);

//     var code = "";
//     if (value_x_data && !(value_y_data)) {
//         code = value_x_data + ' = ' + 'sklearn.datasets.make_moons' + '( n_samples = ' + sample + ', noise=' + noise + ', random_state = ' + seed + ')\n';
//     }
//     else if (!(value_x_data) && value_y_data) {
//         code = value_y_data + ' = ' + 'sklearn.datasets.make_moons' + '( n_samples = ' + sample + ', noise=' + noise + ', random_state = ' + seed + ')\n';
//     }
//     else {
//         code = value_x_data + ',' + value_y_data + ' = ' + 'sklearn.datasets.make_moons' + '( n_samples = ' + sample + ', noise=' + noise + ', random_state = ' + seed + ')\n';
//     }
//     return code;
// };

// // Sklearn Make Circles Dataset
// Blockly.Python['make_circles'] = function (block) {
//     var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
//     var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
//     //var text_n_samples = block.getFieldValue('n_samples');
//     var text_n_samples = Blockly.Python.valueToCode(block, 'n_samples', Blockly.Python.ORDER_ATOMIC);
//     //var text_factor = block.getFieldValue('factor');
//     var text_factor = Blockly.Python.valueToCode(block, 'factor', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = value_x_data + ', ' + value_y_data + '= sklearn.datasets.make_circles(n_samples=' + text_n_samples + ', factor=' + text_factor + ')\n';
//     return code;
// };

//////////////////////////////////////////////////////////////////////////////
// blobs moons circles 블록 드롭다운이용 한 개의 블록으로 통합
Blockly.Python['random_datasets'] = function(block) {
    var dropdown_dataset_option = block.getFieldValue('dataset_option');
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    var value_sample_input = Blockly.Python.valueToCode(block, 'sample_input', Blockly.Python.ORDER_ATOMIC);
    var value_shuffle_input = Blockly.Python.valueToCode(block, 'shuffle_input', Blockly.Python.ORDER_ATOMIC);
    var value_seed_input = Blockly.Python.valueToCode(block, 'seed_input', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "";
    
    // x_data만 줄 때, y_data만 줄 때, x_data y_data 줄 때 다르게 code 리턴
    if (value_x_data && !(value_y_data)) {
        code = `${value_x_data} = sklearn.datasets.${dropdown_dataset_option}(n_samples = ${value_sample_input}, shuffle = ${value_shuffle_input}, random_state = ${value_seed_input})\n`;
    }
    else if (!(value_x_data) && value_y_data) {
        code = `${value_y_data} = sklearn.datasets.${dropdown_dataset_option}(n_samples = ${value_sample_input}, shuffle = ${value_shuffle_input}, random_state = ${value_seed_input})\n`;
    }
    else {
        code = `${value_x_data}, ${value_y_data} = sklearn.datasets.${dropdown_dataset_option}(n_samples = ${value_sample_input}, shuffle = ${value_shuffle_input}, random_state = ${value_seed_input})\n`;
    }
    return code;
  };

// Sklearn Load CSV
Blockly.Python['csv3'] = function (block) {
    var valX = Blockly.Python.variableDB_.getName(block.getFieldValue('var_x'), Blockly.Variables.NAME_TYPE);
    var valY = Blockly.Python.variableDB_.getName(block.getFieldValue('var_y'), Blockly.Variables.NAME_TYPE);
    var dropdown_option = block.getFieldValue('OPTIONS');
    var file = block.getFieldValue('csv_url');
    // x, y
    var x_train,
        y_train;
    var x = "";
    var y = "";
    try {
        if (dropdown_option != "OPTION-1") {
            file = JSON.parse(file);
            // key 값만 추출
            var key = Object.getOwnPropertyNames(file[0]);
            // 2차원 배열 array
            x_train = new Array(file.length - 1);
            y_train = new Array(file.length - 1);

            for (var i = 0; i < x_train.length; i++) {
                x_train[i] = new Array(key.length - 1); // 1개는 Y Label
            }
            // 값 세팅
            var tempIdx = 0;
            for (var i = 0; i < x_train.length; i++) {
                for (var j = 0; j < key.length; j++) {
                    var keyName = key[j]; // key 값
                    if (keyName.trim() == dropdown_option.trim()) { // key값이 Y Label로 설정한 이름과 같다면.
                        y_train[i] = file[i][keyName];
                    } else {
                        x_train[i][tempIdx++] = file[i][keyName]; // value
                    }
                }
                tempIdx = 0;
                x = x + "[" + x_train[i] + "]";
                y = y + "[" + y_train[i] + "]";
                if (i != x_train.length - 1) {
                    x = x + ",";
                    y = y + ",";
                }
            }

        }
    } catch (e) {
        console.log(e);
    }
    var code = valX + " = np.array([" + x + "]);\n" + valY + " = np.array([" + y + "]);\n";
    return code;
};



//////////////////////////////////////////////////////
// 데이터 핸들링
//////////////////////////////////////////////////////

// Train Test Split
Blockly.Python['train_test_split'] = function (block) {
    var value_x_data = Blockly.Python.variableDB_.getName(block.getFieldValue('x_data'), Blockly.Variables.NAME_TYPE);
    var value_y_data = Blockly.Python.variableDB_.getName(block.getFieldValue('y_data'), Blockly.Variables.NAME_TYPE);

    var value_x_train = Blockly.Python.variableDB_.getName(block.getFieldValue('x_train'), Blockly.Variables.NAME_TYPE);
    var value_x_test = Blockly.Python.variableDB_.getName(block.getFieldValue('x_test'), Blockly.Variables.NAME_TYPE);

    var value_y_train = Blockly.Python.variableDB_.getName(block.getFieldValue('y_train'), Blockly.Variables.NAME_TYPE);
    var value_y_test = Blockly.Python.variableDB_.getName(block.getFieldValue('y_test'), Blockly.Variables.NAME_TYPE);

    // 기존 train_test_split, 이 주석은 삭제하지 말 것
    // var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    // var value_y_data = Blockly.Python.valueToCode(block, 'y_data', Blockly.Python.ORDER_ATOMIC);
    // var value_x_train = Blockly.Python.valueToCode(block, 'x_train', Blockly.Python.ORDER_ATOMIC);
    // var value_x_test = Blockly.Python.valueToCode(block, 'x_test', Blockly.Python.ORDER_ATOMIC);
    // var value_y_train = Blockly.Python.valueToCode(block, 'y_train', Blockly.Python.ORDER_ATOMIC);
    // var value_y_test = Blockly.Python.valueToCode(block, 'y_test', Blockly.Python.ORDER_ATOMIC);

    var text_test_size = block.getFieldValue('test_size');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    var text_seed = block.getFieldValue('seed');
    // TODO: Assemble Python into code variable.
    var code = value_x_train + ',' + value_x_test + ',' + value_y_train + ',' + value_y_test + '= sklearn.model_selection.train_test_split(' + value_x_data + ',' + value_y_data + ',' + 'test_size=' + text_test_size + ', shuffle=' + dropdown_shuffle + ', random_state=' + text_seed + ')\n';
    return code;
};

// Blockly.Python['loo'] = function(block) {
//     var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
//     var dropdown_oper = block.getFieldValue('oper');
//     var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
//     console.log(value_variable);
//     console.log(dropdown_oper);

//     var code = '';

//     // Dropdown에 따라 코드 분기
//     if(dropdown_oper == 'create'){
//         value_variable == "" ? code = 'loo = LeaveOneOut()\n' : code = value_variable + ' = LeaveOneOut()\n';
//     } else if(dropdown_oper == 'get_n_splits') {
//         value_variable == "" ? code = "loo.get_n_splits(" + value_data + ')\n' : code = value_variable + ".get_n_splits(" + value_data + ')\n';
//     } else if(dropdown_oper == "split"){
//         value_variable == "" ? code = 'loo.split(' + value_data + ')\n' : code = value_variable + '.split(' + value_data + ')\n';
//     }
//     // TODO: Change ORDER_NONE to the correct strength.
//     return [code, Blockly.Python.ORDER_NONE];
//   };

Blockly.Python['kfold_create'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_n_splits = Blockly.Python.valueToCode(block, 'n_splits', Blockly.Python.ORDER_ATOMIC);
    var dropdown_shuffle = block.getFieldValue('shuffle');
    // TODO: Assemble Python into code variable.
    var code = value_variable + ' = sklearn.model_selection.KFold(n_splits=' + value_n_splits + ', shuffle=' + dropdown_shuffle + ')\n';
    return code;
};

Blockly.Python['stratified_kfold_create'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_n_splits = Blockly.Python.valueToCode(block, 'n_splits', Blockly.Python.ORDER_ATOMIC);
    var dropdown_shuffle = block.getFieldValue('shuffle');
    // TODO: Assemble Python into code variable.
    var code = value_variable + ' = sklearn.model_selection.StratifiedKFold(n_splits=' + value_n_splits + ', shuffle=' + dropdown_shuffle + ')\n';
    return code;
};

Blockly.Python['group_kfold_create'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_n_splits = Blockly.Python.valueToCode(block, 'n_splits', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_variable + ' = sklearn.model_selection.GroupKFold(n_splits=' + value_n_splits + ')\n';
    return code;
};

Blockly.Python['loo_create'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_variable + ' = sklearn.model_selection.LeaveOneOut()\n';
    return code;
};

Blockly.Python['shuffle_split_create'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_n_splits = Blockly.Python.valueToCode(block, 'n_splits', Blockly.Python.ORDER_ATOMIC);
    var value_test_size = Blockly.Python.valueToCode(block, 'test_size', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_variable + ' = sklearn.model_selection.ShuffleSplit(n_splits=' + value_n_splits + ', test_size=' + value_test_size + ')\n';
    return code;
};

Blockly.Python['cv_get_n_splits'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_groups = Blockly.Python.valueToCode(block, 'groups', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_variable + '.get_n_splits()';

    // 분기에 따라 처리
    if (!value_x && !value_y && value_groups) {
        code = value_variable + '.get_n_splits()';
    } else if (!value_y && !value_groups) {
        code = value_variable + '.get_n_splits(' + value_x + ')\n';
    } else if (!value_groups) {
        code = value_variable + '.get_n_splits(' + value_x + ', ' + value_y + ')\n';
    } else if (value_x && value_y && value_groups) {
        code = value_variable + '.get_n_splits(' + value_x + ', ' + value_y + ', ' + value_groups + ')\n';
    }
    return code;
};

Blockly.Python['cv_split'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_groups = Blockly.Python.valueToCode(block, 'groups', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_variable + '.split()';

    // 분기에 따라 처리
    if (!value_x && !value_y && value_groups) {
        code = value_variable + '.split()';
    } else if (!value_y && !value_groups) {
        code = value_variable + '.split(' + value_x + ')';
    } else if (!value_groups) {
        code = value_variable + '.split(' + value_x + ', ' + value_y + ')';
    } else if (value_x && value_y && value_groups) {
        code = value_variable + '.split(' + value_x + ', ' + value_y + ', ' + value_groups + ')';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Label Encoder
Blockly.Python['labelencoder'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    //var text_column = block.getFieldValue('column');
    var text_column = Blockly.Python.valueToCode(block, 'column', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "Label_enc = sklearn.preprocessing.LabelEncoder()\n" + value_df + "['" + text_column + "'] = Label_enc.fit_transform(" + value_df + "['" + text_column + "'])\n";
    return code;
};

// One-Hot Encoder
Blockly.Python['onehotencoder'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var text_column = block.getFieldValue('column');
    var code = "oh_enc = sklearn.preprocessing.OneHotEncoder()\n" + value_df + " = oh_enc.fit_transform(" + value_df + ").toarray()\n";
    return code;
};

// Blockly.Python['sklearn_scale'] = function (block) {
//     var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
//     var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
//     var value_axis = Blockly.Python.valueToCode(block, 'axis', Blockly.Python.ORDER_ATOMIC);
//     var dropdown_with_mean = block.getFieldValue('with_mean');
//     var dropdown_with_std = block.getFieldValue('with_std');
//     // TODO: Assemble Python into code variable.
//     var code = `${value_variable} = sklearn.preprocessing.scale(X=${value_data}, axis=${value_axis}, with_mean=${dropdown_with_mean}, with_std=${dropdown_with_std})\n`;
//     return code;
// };

Blockly.Python['sklearn_scale'] = function (block) {
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_params = Blockly.Python.valueToCode(block, 'params', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${value_variable} = sklearn.preprocessing.scale(${value_params})\n`;

    return code;
    // TODO: Change ORDER_NONE to the correct strength.
};

Blockly.Python['minmax_scalar'] = function (block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = "mms = sklearn.preprocessing.MinMaxScaler()\n" + value_data + " = mms.fit_transform(" + value_data + ")\n";
    return code;
};

Blockly.Python['standard_scalar'] = function (block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'ss = sklearn.preprocessing.StandardScaler()\n' + value_data + ' = ss.fit_transform(' + value_data + ')\n';
    return code;
};

Blockly.Python['pca'] = function (block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var value_n_components = Blockly.Python.valueToCode(block, 'n_components', Blockly.Python.ORDER_ATOMIC);
    var dropdown_svd_solver = block.getFieldValue('svd_solver');
    // TODO: Assemble Python into code variable.
    var code = 'pca = sklearn.decomposition.PCA(n_components=' + value_n_components + ', svd_solver=' + dropdown_svd_solver + ')\n' +
        value_data + ' = pca.fit_transform(' + value_data + ')\n';
    return code;
};

Blockly.Python['pca_explained_variance_ratio_'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'pca.explained_variance_ratio_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tsne'] = function (block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var value_n_components = Blockly.Python.valueToCode(block, 'n_components', Blockly.Python.ORDER_ATOMIC);
    var value_perplexity = Blockly.Python.valueToCode(block, 'perplexity', Blockly.Python.ORDER_ATOMIC);
    var value_learning_rate = Blockly.Python.valueToCode(block, 'learning_rate', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_data + ' = sklearn.manifold.TSNE(n_components=' + value_n_components + ', perplexity=' + value_perplexity + ', learning_rate=' + value_learning_rate + ').fit_transform(' + value_data + ')\n';
    return code;
};

Blockly.Python['mds'] = function (block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var value_n_components = Blockly.Python.valueToCode(block, 'n_components', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_data + ' = sklearn.manifold.MDS(n_components=' + value_n_components + ').fit_transform(' + value_data + ')\n';
    return code;
};

Blockly.Python['lle'] = function (block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var value_n_neighbors = Blockly.Python.valueToCode(block, 'n_neighbors', Blockly.Python.ORDER_ATOMIC);
    var value_n_components = Blockly.Python.valueToCode(block, 'n_components', Blockly.Python.ORDER_ATOMIC);
    var dropdown_method = block.getFieldValue('method');
    // TODO: Assemble Python into code variable.
    var code = `${value_data} = sklearn.manifold.LocallyLinearEmbedding(n_neighbors=${value_n_neighbors}, n_components=${value_n_components}, method=${dropdown_method}, eigen_solver='dense').fit_transform(${value_data})\n`
    return code;
};

Blockly.Python['isomap'] = function (block) {
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var value_n_neighbors = Blockly.Python.valueToCode(block, 'n_neighbors', Blockly.Python.ORDER_ATOMIC);
    var value_n_components = Blockly.Python.valueToCode(block, 'n_components', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_data + ' = sklearn.manifold.Isomap(n_neighbors=' + value_n_neighbors + ', n_components=' + value_n_components +
        ', eigen_solver="dense"' + ').fit_transform(' + value_data + ')\n';
    return code;
};

// K-Fold
Blockly.Python['kfold'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    //var text_name = block.getFieldValue('NAME');
    var dropdown_shuffle = block.getFieldValue('shuffle');
    //var text_seed = block.getFieldValue('seed');

    var text_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var text_seed = Blockly.Python.valueToCode(block, 'seed', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '= sklearn.model_selection.KFold(n_splits=' + text_name + ',shuffle=' + dropdown_shuffle + ',random_state=' + text_seed + ')\n';
    return code;
};

// Polynom. Features
// Blockly.Python['polynomialfeatures'] = function (block) {
//     var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
//     var interaction_only = block.getFieldValue('NAME');
//     // TODO: Assemble Python into code variable.
//     var code = value_name + ' = sklearn.preprocessing.PolynomialFeatures(interaction_only=' + interaction_only + ')\n';
//     return code;
// };

// polynomialfeatures 수정
Blockly.Python['polynomialfeatures'] = function(block) {
    var value_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
    var value_val2 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_ATOMIC);
    var dropdown_dr_1 = block.getFieldValue('dr_1');
    // TODO: Assemble Python into code variable.
    var code = `${value_val1} = sklearn.preprocessing.PolynomialFeatures(degree=${value_val2}, include_bias=${dropdown_dr_1})\n`;
    return code;
  };


// fit_transform
Blockly.Python['fittransform'] = function(block) {
    var value_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
    var value_val2 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${value_val1}.fit_transform(${value_val2})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

//////////////////////////////////////////////////////
// 지도학습 - 예측
//////////////////////////////////////////////////////

// Linear Regression
Blockly.Python['linear_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.LinearRegression()\n";
    return code;
};

// SGD Regressor
Blockly.Python['sgd_regressor'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    //var text_numEpochs = block.getFieldValue('numEpochs');
    var text_numEpochs = Blockly.Python.valueToCode(block, 'numEpochs', Blockly.Python.ORDER_ATOMIC);
    var text_numTol = block.getFieldValue('numTol');

    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.SGDRegressor(max_iter = " + text_numEpochs + ", tol = 1e-3)\n";
    return code;
};

// Ridge Regressor
Blockly.Python['ridge'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    //var text_numAlpha = block.getFieldValue('numAlpha');
    var text_numAlpha = Blockly.Python.valueToCode(block, 'numAlpha', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.Ridge(alpha = " + text_numAlpha + ")\n";
    return code;
};

Blockly.Python['lasso_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_alpha = Blockly.Python.valueToCode(block, 'alpha', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = ' + 'sklearn.linear_model.Lasso(alpha=' + value_alpha + ')\n';
    return code;
};

Blockly.Python['elasticnet_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_alpha = Blockly.Python.valueToCode(block, 'alpha', Blockly.Python.ORDER_ATOMIC);
    var value_l1_ratio = Blockly.Python.valueToCode(block, 'l1_ratio', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = ' + 'sklearn.linear_model.ElasticNet(alpha=' + value_alpha + ', l1_ratio=' + value_l1_ratio + ')\n';
    return code;
};

// Bayesian Ridge Regressor
Blockly.Python['bayesian_ridge'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + " = sklearn.linear_model.BayesianRidge()" + "\n";
    return code;
};

// Adaboost Regressor
Blockly.Python['adaboostregressor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.AdaBoostRegressor(n_estimators=' + n_estimators + ',random_state =' + random_state2 + ')\n';
    return code;
};

// Gradient Boosting Regressor
Blockly.Python['gradientboostingregressor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.GradientBoostingRegressor(n_estimators=' + n_estimators + ')\n';
    return code;
};

// Random Forest Regressor
Blockly.Python['randomforestregressor'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.RandomForestRegressor(max_depth=' + max_depth + ', random_state=' + random_state + ')\n';
    return code;
};

// KNN Regressor
Blockly.Python['kneighborsregressor_function'] = function (block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_value + " = " + "sklearn.neighbors.KNeighborsRegressor(n_neighbors=" + value_value1 + " )\n";
    return code;
};

// SVR
// Blockly.Python['linearsvr'] = function (block) {
//     var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = 'sklearn.svm.LinearSVR(random_state=' + random_state +')';
//     // TODO: Change ORDER_NONE to the correct strength.
//     return code;
// };

Blockly.Python['svr'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var dropdown_kernel = block.getFieldValue('kernel');
    var value_epsilon = Blockly.Python.valueToCode(block, 'epsilon', Blockly.Python.ORDER_ATOMIC);
    var value_c = Blockly.Python.valueToCode(block, 'C', Blockly.Python.ORDER_ATOMIC);
    var value_gamma = Blockly.Python.valueToCode(block, 'gamma', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.svm.SVR(kernel=' + dropdown_kernel + ', epsilon=' + value_epsilon + ', C=' + value_c + ', gamma=' + value_gamma + ')\n';
    return code;
};

// MLP Regressor
Blockly.Python['sklearn_mlp_regressor'] = function (block) {
    var value_sklearn_mlp_lib_val = Blockly.Python.valueToCode(block, 'sklearn_mlp_lib_val', Blockly.Python.ORDER_ATOMIC);
    //var text_sklearn_mlp_hidden_layer_sizes_ = block.getFieldValue('sklearn_mlp_hidden_layer_sizes ');
    var text_sklearn_mlp_hidden_layer_sizes_ = Blockly.Python.valueToCode(block, 'sklearn_mlp_hidden_layer_sizes', Blockly.Python.ORDER_ATOMIC);
    var dropdown_sklearn_mlp_activation_option = block.getFieldValue('sklearn_mlp_activation_Option');
    var dropdown_sklearn_mlp_optimizer_option = block.getFieldValue('sklearn_MLP_Optimizer_Option');
    var dropdown_sklearn_mlp_warm_start_option = block.getFieldValue('sklearn_MLP_Warm_Start_Option');
    //var text_sklearn_mlp_learning_rate = block.getFieldValue('sklearn_MLP_learning_rate');
    var text_sklearn_mlp_learning_rate = Blockly.Python.valueToCode(block, 'sklearn_MLP_learning_rate', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_max_iter = Blockly.Python.valueToCode(block, 'sklearn_MLP_Max_iter', Blockly.Python.ORDER_ATOMIC);
    //var text_sklearn_mlp_random_state = block.getFieldValue('sklearn_MLP_random_state');
    var text_sklearn_mlp_random_state = Blockly.Python.valueToCode(block, 'sklearn_MLP_random_state', Blockly.Python.ORDER_ATOMIC);
    //var text_sklearn_mlp_batch_size = block.getFieldValue('sklearn_MLP_batch_size');
    var text_sklearn_mlp_batch_size = Blockly.Python.valueToCode(block, 'sklearn_MLP_batch_size', Blockly.Python.ORDER_ATOMIC);
    var alpha = Blockly.Python.valueToCode(block, 'alpha', Blockly.Python.ORDER_ATOMIC);
    // var value_sklearn_mlp_fit_x = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.Python.ORDER_ATOMIC);
    // var value_sklearn_mlp_fit_y = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.Python.ORDER_ATOMIC);


    // TODO: Assemble Python into code variable.
    var get_sklearn_mlp_activation;
    var get_sklearn_mlp_optimizer;
    var get_sklearn_mlp_warm_start;

    switch (dropdown_sklearn_mlp_activation_option) {
        case "sklearn_MLP_activation_identity":
            get_sklearn_mlp_activation = `identity`;
            break;

        case "sklearn_MLP_activation_logistic":
            get_sklearn_mlp_activation = `logistic`;
            break;

        case "sklearn_MLP_activation_tanh":
            get_sklearn_mlp_activation = `tanh`;
            break;

        case "sklearn_MLP_activation_relu":
            get_sklearn_mlp_activation = `relu`;
            break;

        default:
            break;
    }

    switch (dropdown_sklearn_mlp_optimizer_option) {
        case "sklearn_MLP_Optimizer_Lbfgs":
            get_sklearn_mlp_optimizer = `lbfgs`;
            break;

        case "sklearn_MLP_Optimizer_SGD":
            get_sklearn_mlp_optimizer = `sgd`;
            break;

        case "sklearn_MLP_Optimizer_Adam":
            get_sklearn_mlp_optimizer = `adam`;
            break;


        default:
            break;
    }

    switch (dropdown_sklearn_mlp_warm_start_option) {

        case "sklearn_MLP_Warm_Start_False":
            get_sklearn_mlp_warm_start = `False`;
            break;

        case "sklearn_MLP_Warm_Start_True":
            get_sklearn_mlp_warm_start = `True`;
            break;

        default:
            break;
    }


    var code = `
${value_sklearn_mlp_lib_val} = sklearn.neural_network.MLPRegressor( 
hidden_layer_sizes = (${text_sklearn_mlp_hidden_layer_sizes_}),
activation = '${get_sklearn_mlp_activation}',
solver = '${get_sklearn_mlp_optimizer}',
learning_rate_init = ${text_sklearn_mlp_learning_rate}, 
max_iter = ${text_sklearn_mlp_max_iter},
batch_size = ${text_sklearn_mlp_batch_size},
alpha = ${alpha},
warm_start = ${get_sklearn_mlp_warm_start},
random_state = ${text_sklearn_mlp_random_state} )\n`;
    // ${value_sklearn_mlp_lib_val}.fit(${value_sklearn_mlp_fit_x},${value_sklearn_mlp_fit_y})\n`;
    // TODO: Change ORDER_NONE to the correct strength. 
    return code;
};

//////////////////////////////////////////////////////
//
// 지도 학습 - 분류
//
//////////////////////////////////////////////////////

// Logistic Regression
Blockly.Python['logistic_regression'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    //var text_numSeed = block.getFieldValue('numSeed');
    var text_numSeed = Blockly.Python.valueToCode(block, 'numSeed', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import LogisticRegression" + "\n";
    var code = value_model + " = sklearn.linear_model.LogisticRegression(random_state = " + text_numSeed + ", solver='liblinear')\n";
    return code;
};

// Logistic Regression CV
Blockly.Python['logistic_regression_cv'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // var text_numCv = block.getFieldValue('numCv');
    var text_numCv = Blockly.Python.valueToCode(block, 'numCv', Blockly.Python.ORDER_ATOMIC);
    // var text_numSeed = block.getFieldValue('numSeed');
    var text_numSeed = Blockly.Python.valueToCode(block, 'numSeed', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import LogisticRegressionCV" + "\n";
    var code = value_model + " = sklearn.linear_model.LogisticRegressionCV(cv=" + text_numCv + ", random_state = " + text_numSeed + ")\n";
    return code;
};


// Ridge Classifier
// Blockly.Python['ridge_classifier'] = function (block) {
//     var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);

//     // TODO: Assemble Python into code variable.
//     var importLib = "from sklearn.linear_model import RidgeClassifier" + "\n";
//     var code = value_model + " = sklearn.linear_model.RidgeClassifier()\n";
//     return code;
// };

Blockly.Python['ridge_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_alpha = Blockly.Python.valueToCode(block, 'alpha', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = ' + 'sklearn.linear_model.RidgeClassifier(' + 'alpha=' + value_alpha + ')\n';
    return code;
};

// SGD Classifier
// Blockly.Python['sgd_classifier'] = function (block) {
//     var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
//     // var text_numEpochs = block.getFieldValue('numEpochs');
//     var text_numEpochs = Blockly.Python.valueToCode(block, 'numEpochs', Blockly.Python.ORDER_ATOMIC);

//     // TODO: Assemble Python into code variable.
//     var code = value_model + " = sklearn.linear_model.SGDClassifier(max_iter = " + text_numEpochs + ", tol = 1e-3)\n";
//     return code;
// };

Blockly.Python['sgd_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_max_iter = Blockly.Python.valueToCode(block, 'max_iter', Blockly.Python.ORDER_ATOMIC);
    var value_tol = Blockly.Python.valueToCode(block, 'tol', Blockly.Python.ORDER_ATOMIC);
    var dropdown_early_stopping = block.getFieldValue('early_stopping');
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.linear_model.SGDClassifier(max_iter=' + value_max_iter + ', tol=' + value_tol + ', early_stopping=' + dropdown_early_stopping + ')\n';
    return code;
};

// Perceptron
Blockly.Python['perceptron'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // var text_numSeed = block.getFieldValue('numSeed');
    var text_numSeed = Blockly.Python.valueToCode(block, 'numSeed', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var importLib = "from sklearn.linear_model import Perceptron" + "\n";
    var code = value_model + " = sklearn.linear_model.Perceptron(tol = 1e-3, random_state = " + text_numSeed + ")\n";
    return code;
};

// Decision Tree Classifier
Blockly.Python['decision'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // var text_dept = block.getFieldValue('depth');
    var text_dept = Blockly.Python.valueToCode(block, 'depth', Blockly.Python.ORDER_ATOMIC);
    // var text_seed = block.getFieldValue('seed');;
    var text_seed = Blockly.Python.valueToCode(block, 'seed', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.\
    var code = value_model + '= sklearn.tree.DecisionTreeClassifier(max_depth=' + text_dept + ',random_state=' + text_seed + ')\n';

    return code;
};

// Adaboost Classifier
Blockly.Python['adaboostclassifier'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    var random_state2 = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.AdaBoostClassifier(n_estimators=' + n_estimators + ', random_state=' + random_state2 + ')\n';
    return code;
};

// Gradient Boosting Classifier
Blockly.Python['gradientboostingclassifier'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    var n_estimators = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + ' = sklearn.ensemble.GradientBoostingClassifier(n_estimators=' + n_estimators + ')\n';
    return code;
};

// Randome Forest Classifier
// Blockly.Python['randomforestclassifier'] = function (block) {
//     var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
//     var max_depth = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
//     var random_state = Blockly.Python.valueToCode(block, 'NAME3', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = value_name + ' = sklearn.ensemble.RandomForestClassifier(max_depth=' + max_depth + ', random_state=' + random_state + ')\n';
//     return code;
// };

Blockly.Python['random_forest_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_n_estimators = Blockly.Python.valueToCode(block, 'n_estimators', Blockly.Python.ORDER_ATOMIC);
    var value_max_depth = Blockly.Python.valueToCode(block, 'max_depth', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.ensemble.RandomForestClassifier(n_estimators=' + value_n_estimators + ', max_depth=' + value_max_depth + ')\n';
    return code;
};

//KNeighborsClassifier 블럭 함수

Blockly.Python['kneighborsclassifier_function'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_name1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_name + " = " + 'sklearn.neighbors.KNeighborsClassifier(n_neighbors=' + value_name1 + " )\n";
    return code;
};

// SVC
// Blockly.Python['linearsvc'] = function (block) {
//     var random_state = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
//     var tol = Blockly.Python.valueToCode(block, 'NAME2', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = 'sklearn.svm.LinearSVC(random_state=' + random_state + ', tol=' + tol + ')';
//     // TODO: Change ORDER_NONE to the correct strength.
//     return [code, Blockly.Python.ORDER_NONE];
// };

Blockly.Python['svc'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var dropdown_kernel = block.getFieldValue('kernel');
    var value_c = Blockly.Python.valueToCode(block, 'C', Blockly.Python.ORDER_ATOMIC);
    var value_gamma = Blockly.Python.valueToCode(block, 'gamma', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.svm.SVC(kernel=' + dropdown_kernel + ', C=' + value_c + ', gamma=' + value_gamma + ')\n';
    return code;
};

Blockly.Python['stacking_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_estimators = Blockly.Python.valueToCode(block, 'estimators', Blockly.Python.ORDER_ATOMIC);
    var value_final_estimator = Blockly.Python.valueToCode(block, 'final_estimator', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.ensemble.StackingClassifier(estimators=' + value_estimators + ', final_estimator=' + value_final_estimator + ')\n';
    return code;
};

Blockly.Python['voting_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_estimator = Blockly.Python.valueToCode(block, 'estimator', Blockly.Python.ORDER_ATOMIC);
    var dropdown_voting = block.getFieldValue('voting');
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.ensemble.VotingClassifier(estimators=' + value_estimator + ', voting=' + dropdown_voting + ')\n';
    return code;
};

Blockly.Python['bagging_classifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_base_estimator = Blockly.Python.valueToCode(block, 'base_estimator', Blockly.Python.ORDER_ATOMIC);
    var value_n_estimators = Blockly.Python.valueToCode(block, 'n_estimators', Blockly.Python.ORDER_ATOMIC);
    var value_max_samples = Blockly.Python.valueToCode(block, 'max_samples', Blockly.Python.ORDER_ATOMIC);
    var dropdown_bootstrap = block.getFieldValue('bootstrap');
    var dropdown_oob_score = block.getFieldValue('oob_score');
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.ensemble.BaggingClassifier(base_estimator=' + value_base_estimator + ', n_estimators=' + value_n_estimators +
        ', max_samples=' + value_max_samples + ', bootstrap=' + dropdown_bootstrap + ', oob_score=' + dropdown_oob_score + ')\n';
    return code;
};

// MLP Classifier
Blockly.Python['sklearn_mlp_classifier'] = function (block) {
    var value_sklearn_mlp_lib_val = Blockly.Python.valueToCode(block, 'sklearn_mlp_lib_val', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_hidden_layer_sizes_ = Blockly.Python.valueToCode(block, 'sklearn_mlp_hidden_layer_sizes', Blockly.Python.ORDER_ATOMIC);
    var dropdown_sklearn_mlp_activation_option = block.getFieldValue('sklearn_mlp_activation_Option');
    var dropdown_sklearn_mlp_optimizer_option = block.getFieldValue('sklearn_MLP_Optimizer_Option');
    var dropdown_sklearn_mlp_warm_start_option = block.getFieldValue('sklearn_MLP_Warm_Start_Option');
    var text_sklearn_mlp_learning_rate = Blockly.Python.valueToCode(block, 'sklearn_MLP_learning_rate', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_max_iter = Blockly.Python.valueToCode(block, 'sklearn_MLP_Max_iter', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_random_state = Blockly.Python.valueToCode(block, 'sklearn_MLP_random_state', Blockly.Python.ORDER_ATOMIC);
    var text_sklearn_mlp_batch_size = Blockly.Python.valueToCode(block, 'sklearn_MLP_batch_size', Blockly.Python.ORDER_ATOMIC);
    // var value_sklearn_mlp_fit_x = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_X', Blockly.Python.ORDER_ATOMIC);
    // var value_sklearn_mlp_fit_y = Blockly.Python.valueToCode(block, 'sklearn_mlp_fit_Y', Blockly.Python.ORDER_ATOMIC);

    var alpha = Blockly.Python.valueToCode(block, 'alpha', Blockly.Python.ORDER_ATOMIC);


    // TODO: Assemble Python into code variable.
    var get_sklearn_mlp_activation;
    var get_sklearn_mlp_optimizer;
    var get_sklearn_mlp_warm_start;

    switch (dropdown_sklearn_mlp_activation_option) {
        case "sklearn_MLP_activation_identity":
            get_sklearn_mlp_activation = `identity`;
            break;

        case "sklearn_MLP_activation_logistic":
            get_sklearn_mlp_activation = `logistic`;
            break;

        case "sklearn_MLP_activation_tanh":
            get_sklearn_mlp_activation = `tanh`;
            break;

        case "sklearn_MLP_activation_relu":
            get_sklearn_mlp_activation = `relu`;
            break;

        default:
            break;
    }

    switch (dropdown_sklearn_mlp_optimizer_option) {
        case "sklearn_MLP_Optimizer_Lbfgs":
            get_sklearn_mlp_optimizer = `lbfgs`;
            break;

        case "sklearn_MLP_Optimizer_SGD":
            get_sklearn_mlp_optimizer = `sgd`;
            break;

        case "sklearn_MLP_Optimizer_Adam":
            get_sklearn_mlp_optimizer = `adam`;
            break;


        default:
            break;
    }

    switch (dropdown_sklearn_mlp_warm_start_option) {

        case "sklearn_MLP_Warm_Start_False":
            get_sklearn_mlp_warm_start = `False`;
            break;

        case "sklearn_MLP_Warm_Start_True":
            get_sklearn_mlp_warm_start = `True`;
            break;

        default:
            break;
    }


    var code = `
${value_sklearn_mlp_lib_val} = sklearn.neural_network.MLPClassifier( 
hidden_layer_sizes = (${text_sklearn_mlp_hidden_layer_sizes_}),
activation = '${get_sklearn_mlp_activation}',
solver = '${get_sklearn_mlp_optimizer}',
learning_rate_init = ${text_sklearn_mlp_learning_rate}, 
max_iter = ${text_sklearn_mlp_max_iter},
batch_size = ${text_sklearn_mlp_batch_size},
alpha = ${alpha},
warm_start = ${get_sklearn_mlp_warm_start},
random_state = ${text_sklearn_mlp_random_state} )\n`;
    // ${value_sklearn_mlp_lib_val}.fit(${value_sklearn_mlp_fit_x},${value_sklearn_mlp_fit_y})\n`;
    // TODO: Change ORDER_NONE to the correct strength. 
    return code;
};

//////////////////////////////////////////////////////
//
// 비지도 학습
//
//////////////////////////////////////////////////////

// kMeans
Blockly.Python['k_means'] = function (block) {
    var variable_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_cnt = Blockly.Python.valueToCode(block, 'cnt', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_model + " = sklearn.cluster.KMeans(n_clusters = " + value_cnt + ")\n";
    return code;
};

//dbscan
Blockly.Python['dbscan'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_eps = Blockly.Python.valueToCode(block, 'eps', Blockly.Python.ORDER_ATOMIC);
    var value_min_samples = Blockly.Python.valueToCode(block, 'min_samples', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.cluster.DBSCAN(eps=' + value_eps + ', min_samples=' + value_min_samples + ')\n';
    return code;
};

Blockly.Python['one_class_svm'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var dropdown_kernel = block.getFieldValue('kernel');
    var value_degree = Blockly.Python.valueToCode(block, 'degree', Blockly.Python.ORDER_ATOMIC);
    var value_gamma = Blockly.Python.valueToCode(block, 'gamma', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.svm.OneClassSVM(kernel=' + dropdown_kernel +
        ', degree=' + value_degree + ', gamma=' + value_gamma + ')\n';
    return code;
};

Blockly.Python['local_outlier_factor'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_n_neighbors = Blockly.Python.valueToCode(block, 'n_neighbors', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.neighbors.LocalOutlierFactor(n_neighbors=' + value_n_neighbors + ')\n';
    return code;
};

Blockly.Python['agglomerative_clustering'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_n_clusters = Blockly.Python.valueToCode(block, 'n_clusters', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + ' = sklearn.cluster.AgglomerativeClustering(n_clusters=' + value_n_clusters + ')\n';
    return code;
};


//IsolationForest
Blockly.Python['isolation_forest'] = function (block) {
    var value_isolation_forest_val = Blockly.Python.valueToCode(block, 'Isolation_Forest_val', Blockly.Python.ORDER_ATOMIC);
    var text_isolation_forest_estimators = Blockly.Python.valueToCode(block, 'Isolation_Forest_estimators', Blockly.Python.ORDER_ATOMIC);
    var text_isolation_forest_connection = Blockly.Python.valueToCode(block, 'Isolation_Forest_connection', Blockly.Python.ORDER_ATOMIC);
    var text_isolation_forest_randomstate = Blockly.Python.valueToCode(block, 'Isolation_Forest_randomstate', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${value_isolation_forest_val} = sklearn.ensemble.IsolationForest(n_estimators = ${text_isolation_forest_estimators}, contamination = ${text_isolation_forest_connection}, random_state = ${text_isolation_forest_randomstate})\n`;
    return code;
};

//////////////////////////////////////////////////////
//
// 평가 지표
//
//////////////////////////////////////////////////////

// Accuracy Score
Blockly.Python['acc_score'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.accuracy_score(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Mean Absolute Error
Blockly.Python['mae'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.mean_absolute_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Mean Squared Error
Blockly.Python['mse'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.mean_squared_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// AUC Curve
Blockly.Python['AUC'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.auc(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// AP
Blockly.Python['AP'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.average_precision_score(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Precision
Blockly.Python['precision'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    var dropdown_aver = block.getFieldValue('aver');
    // TODO: Assemble Python into code variable.
    if (dropdown_aver != "None") {
        dropdown_aver = "'" + dropdown_aver + "'";
    }
    var code = "sklearn.metrics.precision_score(" + value_yt + "," + value_yp + ", average=" + dropdown_aver + ")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Median Squared Error
Blockly.Python['median'] = function (block) {
    var value_yt = Blockly.Python.valueToCode(block, 'yt', Blockly.Python.ORDER_ATOMIC);
    var value_yp = Blockly.Python.valueToCode(block, 'yp', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.median_absolute_error(' + value_yt + ',' + value_yp + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Cross Val.
Blockly.Python['sivalidation'] = function (block) {
    var dropdown_vali = block.getFieldValue('vali');
    var value_variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_ATOMIC);
    var value_em = Blockly.Python.valueToCode(block, 'em', Blockly.Python.ORDER_ATOMIC);
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_cv = Blockly.Python.valueToCode(block, 'cv', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.

    var code = '';

    if (!value_variable) {
        code = `sklearn.model_selection.${dropdown_vali}(${value_em}, ${value_x}, ${value_y}, cv=${value_cv})`;
        return [code, Blockly.Python.ORDER_ATOMIC]
    } else {
        code = `${value_variable} = sklearn.model_selection.${dropdown_vali}(${value_em}, ${value_x}, ${value_y}, cv=${value_cv})\n`;
        return code;
    }
    return code;
};

Blockly.Python['import_sivalidation'] = function (block) {
    var dropdown_vali = block.getFieldValue('vali');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.model_selection import ' + dropdown_vali + "\n";
    return code;
};

Blockly.Python['silhouette_score'] = function (block) {
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_labels = Blockly.Python.valueToCode(block, 'labels', Blockly.Python.ORDER_ATOMIC);
    var dropdown_metric = block.getFieldValue('metric');
    // TODO: Assemble Python into code variable.
    var code = 'sklearn.metrics.silhouette_score(' + value_x + ', ' + value_labels + ', metric=' + dropdown_metric + ')\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

//classification_report
Blockly.Python['classification_report'] = function (block) {
    var value_classification_report_y_true = Blockly.Python.valueToCode(block, 'classification_report_Y_true', Blockly.Python.ORDER_ATOMIC);
    var value_classification_report_y_pred = Blockly.Python.valueToCode(block, 'classification_report_y_pred', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `sklearn.metrics.classification_report( ${value_classification_report_y_true}, ${value_classification_report_y_pred})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

// 오차 행렬 (confusion_matrix)
Blockly.Python['confusion_matrix'] = function(block) {
    var value_y_true = Blockly.Python.valueToCode(block, 'y_true', Blockly.Python.ORDER_ATOMIC);
    var value_y_pred = Blockly.Python.valueToCode(block, 'y_pred', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `sklearn.metrics.confusion_matrix(${value_y_true}, ${value_y_pred})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };


//////////////////////////////////////////////////////
//
// 기타 블록
//
//////////////////////////////////////////////////////

// 계수 추출
Blockly.Python['coef'] = function (block) {
    var value_coef = Blockly.Python.valueToCode(block, 'coef', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_coef + '.coef_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// 절편 추출
Blockly.Python['intercept'] = function (block) {
    var value_intercept = Blockly.Python.valueToCode(block, 'intercept', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_intercept + '.intercept_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

// K-Means Inertia
Blockly.Python['k_means_inertia'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '.inertia_';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// K-Means Centroid
Blockly.Python['k_means_centroid'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '.cluster_centers_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// MLP Loss
Blockly.Python['mlp_loss'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '.loss_';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

//////////////////////////////////////////////////////
//
// 기타 블록 - 남은 블록
//
//////////////////////////////////////////////////////

// OpenML
Blockly.Python['fetch_openml'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `from sklearn.datasets import fetch_openml\ndf = fetch_openml(name="` + dropdown_name + `", as_frame=True)\n` + value_x + ` = df.data\n` + value_y + ` = df.target`;
    return code;
};

//KNeighborsTransformer 블록 함수

Blockly.Python['kneighborstransformer_function'] = function (block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = value_value + " = make_pipeline(KNeighborsTransformer( n_neighbors= " + value_value1 + " ,  mode=" + dropdown_name + " ), Isomap(neighbors_algorithm='precomputed'))\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};

//kneighbors_graph 블록 함수

Blockly.Python['kneighbors_graph_function'] = function (block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var value_value1 = Blockly.Python.valueToCode(block, 'value1', Blockly.Python.ORDER_ATOMIC);
    var value_value2 = Blockly.Python.valueToCode(block, 'value2', Blockly.Python.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    var dropdown_name1 = block.getFieldValue('NAME1');
    // TODO: Assemble Python into code variable.
    if (dropdown_name1 == "auto" && dropdown_name1 == "connectivity") {
        dropdown_name2 = "true";
    }
    else if (dropdown_name1 == "auto" && dropdown_name1 == "distance")
        dropdown_name2 = "false";
    var code = value_value + " = kneighbors_graph(" + value_value1 + "," + value_value2 + ", mode = " + dropdown_name + ", include_self = " + dropdown_name1 + ")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};

// 결정트리 그래프
Blockly.Python['tree_text'] = function (block) {
    var value_trr = Blockly.Python.valueToCode(block, 'trr', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '#결정트리시각화\n';
    return code;
};

// cluster Fit and Predict
Blockly.Python['fit_predict'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var value_x_data = Blockly.Python.valueToCode(block, 'x_data', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '.fit_predict(' + value_x_data + ')\n';
    return [code, Blockly.Python.ORDER_NONE];
};

// Bernoulli RBM
Blockly.Python['bernoullirbm'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var text_hi = Blockly.Python.valueToCode(block, 'hi', Blockly.Python.ORDER_ATOMIC);
    var text_lr = Blockly.Python.valueToCode(block, 'lr', Blockly.Python.ORDER_ATOMIC);
    var text_batch = Blockly.Python.valueToCode(block, 'batch', Blockly.Python.ORDER_ATOMIC);
    var text_epochs = Blockly.Python.valueToCode(block, 'epochs', Blockly.Python.ORDER_ATOMIC);
    var text_seed = Blockly.Python.valueToCode(block, 'seed', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_model + '= sklearn.neural_network.BernoulliRBM(n_components=' + text_hi + ',learning_rate=' + text_lr + ',batch_size=' + text_batch + ' ,n_iter = ' + text_epochs + ',random_state = ' + text_seed + ')\n';
    return code;
};

/////////////////////////////////////////////////
// 아래 블록들을 드롭다운을 이용 한 개의 블록으로 합치므로 주석처리함
// // 2021.04.03 지원 추가
// // 코사인 유사성
// Blockly.Python['cosine_similarity'] = function (block) {
//     var value_input_x = Blockly.Python.valueToCode(block, 'input_x', Blockly.Python.ORDER_ATOMIC);
//     var value_input_y = Blockly.Python.valueToCode(block, 'input_y', Blockly.Python.ORDER_ATOMIC);
//     var code = `sklearn.metrics.pairwise.cosine_similarity(${value_input_x}, ${value_input_y})`;
//     return code;
// };

// // 코사인 길이
// Blockly.Python['cosine_distance'] = function (block) {
//     var value_input_x = Blockly.Python.valueToCode(block, 'input_x', Blockly.Python.ORDER_ATOMIC);
//     var value_input_y = Blockly.Python.valueToCode(block, 'input_y', Blockly.Python.ORDER_ATOMIC);
//     var code = `sklearn.metrics.pairwise.cosine_distance(${value_input_x}, ${value_input_y})`;
//     return code;
// };

// // 벡터쌍 거리행렬
// Blockly.Python['euclidean_distances'] = function (block) {
//     var value_input_x = Blockly.Python.valueToCode(block, 'input_x', Blockly.Python.ORDER_ATOMIC);
//     var value_input_y = Blockly.Python.valueToCode(block, 'input_y', Blockly.Python.ORDER_ATOMIC);
//     var code = `sklearn.metrics.pairwise.euclidean_distances(${value_input_x}, ${value_input_y})`;
//     return code;
// };

// // 벡터사이 L1길이
// Blockly.Python['manhattan_distances'] = function (block) {
//     var value_input_x = Blockly.Python.valueToCode(block, 'input_x', Blockly.Python.ORDER_ATOMIC);
//     var value_input_y = Blockly.Python.valueToCode(block, 'input_y', Blockly.Python.ORDER_ATOMIC);
//     var code = `sklearn.metrics.pairwise.manhattan_distances(${value_input_x}, ${value_input_y})`;
//     return code;
// };

// 코사인 유사성, 코사인 거리, 유클리안, 맨허튼 블록을 드롭다운으로 합친 코드
Blockly.Python['similarity_distance'] = function(block) {
    var dropdown_distance_option = block.getFieldValue('distance_option');
    var value_input_x = Blockly.Python.valueToCode(block, 'input_x', Blockly.Python.ORDER_ATOMIC);
    var value_input_y = Blockly.Python.valueToCode(block, 'input_y', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `sklearn.metrics.pairwise.${dropdown_distance_option}(${value_input_x}, ${value_input_y})\n`;
    return code;
  };

// 2021.08.10 인하공전 측 블록 추가

/// 트리구조 출력
Blockly.Python['plottree'] = function (block) {
    var option = Blockly.Python.valueToCode(block, 'option', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.

    var code = `sklearn.tree.plot_tree(${option})\n`;
    
    return code;
};

//그리드검색
Blockly.Python['GridSearchCV'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var option = Blockly.Python.valueToCode(block, 'option', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.

    var code = `${value_model} = sklearn.model_selection.GridSearchCV(${option})\n`;

    return code;
};

//랜덤검색
Blockly.Python['RandomizedSearchCV'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var option = Blockly.Python.valueToCode(block, 'option', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.

    var code = `${value_model} = sklearn.model_selection.RandomizedSearchCV(${option})\n`;

    return code;
};

//엑스트라트리
Blockly.Python['ExtraTreesClassifier'] = function (block) {
    var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
    var option = Blockly.Python.valueToCode(block, 'option', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.

    var code = `${value_model} = sklearn.ensemble.ExtraTreesClassifier(${option})\n`;

    return code;
};

// 피클 모델 저장
Blockly.Python['pickle_model_save'] = function(block) {
    var value_val_1 = Blockly.Python.valueToCode(block, 'val_1', Blockly.Python.ORDER_ATOMIC);
    var dropdown_dp_option = block.getFieldValue('dp_option');
    // TODO: Assemble Python into code variable.
    var code = `open(${value_val_1}, ${dropdown_dp_option})`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };