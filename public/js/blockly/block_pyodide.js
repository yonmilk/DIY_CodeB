//2020-12-04 양승국 번역 수정

Blockly.Blocks['nj_array'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N1-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField("배열 생성").appendField(new Blockly.FieldTextInput("ex)1,2,3,4"), "array");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(80);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['forp'] = {
    init: function () {
        this.appendValueInput("i").setCheck(null).appendField("변수");
        this.appendValueInput("range").setCheck(null).appendField("를");
        this.appendDummyInput().appendField("범위 까지 반복");
        this.appendStatementInput("for").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['sump'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C12-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("i").setCheck(null).appendField(Blockly.Msg.COLLECTION_13_LIST);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['lrgraph'] = {
    init: function () {
        this.appendDummyInput().appendField("[선형회귀 그래프 출력]");
        this.appendValueInput("x").setCheck(null).appendField("X_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.appendValueInput("w").setCheck(null).appendField("가중치");
        this.appendValueInput("b").setCheck(null).appendField("편향");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['array_get'] = {
    init: function () {
        this.appendValueInput("array").setCheck(null).appendField("");
        this.appendValueInput("NAME").setCheck(null).appendField("배열의 ");
        this.appendDummyInput().appendField("번째 배열 인덱스");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['logicgraph'] = {
    init: function () {
        this.appendDummyInput().appendField("[로지스틱 회귀 그래프 출력]");
        this.appendValueInput("x").setCheck(null).appendField("X_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.appendValueInput("w").setCheck(null).appendField("가중치");
        this.appendValueInput("b").setCheck(null).appendField("편향");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['csv2'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.PANDAS_CSV2).appendField(new Blockly.FieldTextInput(""), "csv_url");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
var dynamicDropdownOptions_ = [];

function addOptions(text) {
    dynamicDropdownOptions_.push([text, text]);
}

function removeOptions() {
    dynamicDropdownOptions_ = [];
}

Blockly.Blocks['scikit_learn'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField("[머신러닝 모델 생성] 모델");
        this.appendDummyInput().appendField("모델 종류 ");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "선형회귀", "LinearRegression"
            ],
            [
                "로지스틱회귀", "LogisticRegression"
            ],
            [
                "결정트리", "DecisionTreeClassifier"
            ]
        ]), "cate");
        this.appendDummyInput().appendField(" x_train ").appendField(new Blockly.FieldVariable("xData"), "x");
        this.appendDummyInput().appendField(" y_train ").appendField(new Blockly.FieldVariable("yData"), "y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// /////////////////////라이브러리 추가블록////////////////////////20200910 이진형
// Blockly.Blocks['import_lib'] = {
//     init: function () {
//         this.appendDummyInput().appendField("라이브러리 추가  ").appendField("라이브러리 선택  : ");
//         this.appendDummyInput().appendField(new Blockly.FieldDropdown([
//             [
//                 "넘파이", "numpy"
//             ],
//             [
//                 "판다스", "pandas"
//             ],
//             [
//                 "그래프", "matplotlib.pyplot"
//             ]
//         ]), "lib");

//         this.appendValueInput("var").setCheck(null).appendField(" 라이브러리 변수 :");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }make_moons
// };


Blockly.Blocks['jin_train_test_split'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_1)
        this.appendValueInput("x_data").setCheck(null).appendField("x_data ");
        this.appendValueInput("y_data").setCheck(null).appendField("y_data ");
        this.appendValueInput("x_train").setCheck(null).appendField("x_train ");
        this.appendValueInput("x_test").setCheck(null).appendField("x_test");
        this.appendValueInput("y_train").setCheck(null).appendField("y_train ");
        this.appendValueInput("y_test").setCheck(null).appendField("y_test ");
        this.appendDummyInput().appendField("Test Size ").appendField(new Blockly.FieldTextInput("0.2"), "test_size");
        this.appendDummyInput().appendField("Data Shuffle ").appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_2, "True"
            ],
            [
                Blockly.Msg.PREPROCESSING_TRAIN_TEST_SPLIT_3, "False"
            ]
        ]), "shuffle");
        this.appendDummyInput().appendField("Seed ").appendField(new Blockly.FieldTextInput("0"), "seed");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};




// ////////////////////////////////////python basic block
// 딕셔너리(구버전)
// Blockly.Blocks['create_dict'] = {
//     init: function () {
//         this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C11-logo.png", 25, 23, {
//             alt: "*",
//             flipRtl: "FALSE"
//         }))
//         this.appendValueInput("dict1").setCheck(null);
//         this.appendValueInput("dict2").setCheck(null);
//         this.setInputsInline(true);
//         this.setOutput(true, null);
//         this.setColour("%{BKY_TUPLE_HUE}");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// 딕셔너리(신버전)
Blockly.Blocks['dict'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C8-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_8_DICT);
        this.setColour("%{BKY_DICT_HUE}");
        this.updateShape_();
        this.setOutput(true, null);
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
        var containerBlock = workspace.newBlock('dict_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
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
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (var i = 0; i < this.itemCount_; i++) {
            var connection = this.getInput('ADD' + i).connection.targetConnection;
            var connection2 = this.getInput('ADD2' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }

        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (var i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
            Blockly.Mutator.reconnect(connections[i], this, 'ADD2' + i);
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
        var j = 0;
        while (itemBlock) {
            var input = this.getInput('ADD' + i);
            var input = this.getInput('ADD2' + j);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            // itemBlock.valueConnection_ = input2 && input2.connection.targetConnection;
            i++;
            j++;
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
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
            // .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i).appendField("key" + i);
            }
            if (!this.getInput('ADD2' + i)) {
                var input2 = this.appendValueInput('ADD2' + i).appendField("values" + i);
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
        while (this.getInput('ADD2' + i)) {
            this.removeInput('ADD2' + i);
            i++;
        }
    }
};

// 딕셔너리 블록

Blockly.Blocks['dict_create_with_container'] = { /**
     * Mutator block for list container.
     * @this {Blockly.Block}
     */
    init: function () {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField("딕셔너리 항목 추가");
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
        this.setColour(230);
    }
};

// 딕셔너리 옵션 블록
Blockly.Blocks['dic_menu'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C9-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_9_DICTOPTION).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_VALSELECT, "selectvalues"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUVAL1, "printvalues1"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUTVAL2, "printvalues2"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_VALAPPEND, "addvalues"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_VALDELET, "delvalues"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_CASTINGDICT, "changedict"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUTKEY, "getkeys"
            ],
            [
                Blockly.Msg.COLLECTION_9_DROPDOWN_OUTPUVAL, "getvalues"
            ]
        ]), "dic");
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_9_DICVAR);
        this.appendValueInput("dic1").setCheck(null);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_9_VAL1);
        this.appendValueInput("dic2").setCheck(null);
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_9_VAL2);
        this.appendValueInput("dic3")
        this.setInputsInline(true);
        this.setColour("%{BKY_DICT_HUE}");
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 집합
Blockly.Blocks['set'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C10-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_10_SET);
        this.appendValueInput("SET").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SET_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 집합 선택
Blockly.Blocks['set_menu'] = {
    init: function () {

        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C11-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("SET1").setCheck(null).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.COLLECTION_11_UNION, "union"
            ],
            [
                Blockly.Msg.COLLECTION_11_INTERSECTION, "intersection"
            ],
            [
                Blockly.Msg.COLLECTION_11_DIFFERENCE, "difference"
            ],
            [
                Blockly.Msg.COLLECTION_11_ADD, "add"
            ],
            [
                Blockly.Msg.COLLECTION_11_UPDATE, "update"
            ],
            [
                Blockly.Msg.COLLECTION_11_REMOVE, "remove"
            ]
        ]), "set_menu");
        this.appendValueInput("SET2").setCheck(null).appendField(Blockly.Msg.COLLECTION_11_SELECTSET +": (A and B)," +
                                                                 Blockly.Msg.COLLECTION_11_VALCHANGE+ ":");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SET_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// 튜플
Blockly.Blocks['tuple'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C7-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.COLLECTION_7_TUPLE);
        this.setColour("%{BKY_TUPLE_HUE}");
        this.updateShape_();
        this.setOutput(true, null);
        this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
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
        var containerBlock = workspace.newBlock('tuple_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.itemCount_; i++) {
            var itemBlock = workspace.newBlock('lists_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
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
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
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
            itemBlock = itemBlock.nextConnection && itemBlock.nextConnection.targetBlock();
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
            // .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
        }
        // Add new inputs.
        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                var input = this.appendValueInput('ADD' + i).setAlign(Blockly.ALIGN_RIGHT);
                if (i == 0) { // input.appendField(Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH']);
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
// 튜플 톱니바퀴
Blockly.Blocks['tuple_create_with_container'] = { /**
     * Mutator block for list container.
     * @this {Blockly.Block}
     */
    init: function () {
        this.setStyle('list_blocks');
        this.appendDummyInput().appendField("튜플 항목 추가");
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_CONTAINER_TOOLTIP']);
        this.contextMenu = false;
        this.setColour(230);
    }
};

// 반복문(파이썬 스타일)
Blockly.Blocks['for_python'] = {
    init: function () {
        this.appendDummyInput().appendField("변수");
        this.appendValueInput("var").setCheck(null);
        this.appendDummyInput().appendField("를");
        this.appendValueInput("range").setCheck(null);
        this.appendDummyInput().appendField("만큼 반복");
        this.setInputsInline(true);
        this.setColour(230);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 반복문(파이썬 스타일), range 블록
Blockly.Blocks['for_range'] = {
    init: function () {
        this.appendDummyInput().appendField("range()");
        this.appendValueInput("for_range").setCheck(null);
        this.setInputsInline(true);
        this.setColour(230);
        this.setOutput(true, null);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// 사이킷런 MLP 블록
// Blockly.Blocks['sklearn_mlp'] = {
//     init: function() {
//       this.appendValueInput("sklearn_mlp_lib_val")
//           .setCheck(null)
//           .appendField("변수명 :");
//       this.appendDummyInput()
//           .appendField("MLP 분류기 (")
//           .appendField("은닉층 개수 :")
//           .appendField(new Blockly.FieldTextInput("10,10,10"), "sklearn_mlp_hidden_layer_sizes ")
//           .appendField("활성화 함수 :")
//           .appendField(new Blockly.FieldDropdown([["Identity","sklearn_MLP_activation_identity"], ["Logistic","sklearn_MLP_activation_logistic"], ["Tanh","sklearn_MLP_activation_tanh"], ["Relu","sklearn_MLP_activation_relu"]]), "sklearn_mlp_activation_Option")
//           .appendField("최적화 함수 :")
//           .appendField(new Blockly.FieldDropdown([["Lbfgs","sklearn_MLP_Optimizer_Lbfgs"], ["SGD","sklearn_MLP_Optimizer_SGD"], ["Adam","sklearn_MLP_Optimizer_Adam"]]), "sklearn_MLP_Optimizer_Option")
//           .appendField("학습률 :")
//           .appendField(new Blockly.FieldTextInput("0.001"), "sklearn_MLP_learning_rate")
//           .appendField("학습 반복 수:")
//           .appendField(new Blockly.FieldTextInput("200"), "sklearn_MLP_epochs")
//           .appendField("Seed :")
//           .appendField(new Blockly.FieldTextInput("0"), "sklearn_MLP_seed");
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(240);
//    this.setTooltip("");
//    this.setHelpUrl("");
//     }
// };


// 2020-10-15 정지현 추가



// //MLP fit
// Blockly.Blocks['sklearn_mlp_fit'] = {
//     init: function() {
//       this.appendValueInput("sklearn_mlp_fit_lib_var")
//           .setCheck(null)
//           .appendField("변수 :");
//       this.appendValueInput("sklearn_mlp_fit_X")
//           .setCheck(null)
//           .appendField(".fit ( X :");
//       this.appendValueInput("sklearn_mlp_fit_Y")
//           .setCheck(null)
//           .appendField(" Y :");
//       this.appendDummyInput()
//           .appendField(")");
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setColour(230);
//    this.setTooltip("");
//    this.setHelpUrl("");
//     }
// };


// kMeans
// Blockly.Blocks['k_means'] = {
//     init: function () {
//         this.appendDummyInput().appendField("[KMeans 모델 생성] ");
//         this.appendValueInput("model").setCheck(null).appendField("모델");
//         // this.appendDummyInput().appendField("그룹 개수 ").appendField(new Blockly.FieldTextInput(""), "cnt");
//         this.appendValueInput("model")
//         .setCheck(null).appendField("그룹 개수 ")
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour("%{BKY_SCIKITLEARN_HUE}");
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };


// for
Blockly.Blocks['py_for'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R4-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_1_REPEAT);
        this.appendValueInput("item").setCheck(null).appendField(Blockly.Msg.REPEAT_1_VARIABLE);
        this.appendValueInput("list").setCheck(null).appendField(Blockly.Msg.REPEAT_1_LIST);
        this.appendDummyInput().appendField(":");
        this.appendStatementInput("value").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("loop_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// for1
Blockly.Blocks['py_for1'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R3-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput()
            .appendField(Blockly.Msg.REPEAT_1_REPEAT);
        this.appendValueInput("item")
            .setCheck(null)
            .appendField(Blockly.Msg.REPEAT_1_VARIABLE);
        this.appendDummyInput()
            .appendField("in")
            .appendField(new Blockly.FieldDropdown([["range","range"],["enumerate","enumerate"]]),"DROP")
            .appendField("(");
        this.appendValueInput("list")
            .setCheck(null)
        this.appendDummyInput()
            .appendField("):");
        this.appendStatementInput("value")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("loop_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// for문안 range,xyz
Blockly.Blocks['range3'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R7-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("x").setCheck(null).appendField(Blockly.Msg.REPEAT_6_RANGE +"(");
        this.appendValueInput("y").setCheck(null).appendField(",");
        this.appendValueInput("z").setCheck(null).appendField(",");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setStyle("loop_blocks_sub");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// next_outer
Blockly.Blocks['rp_next_outer'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("loop_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// next
Blockly.Blocks['rp_next'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("next");
    this.appendValueInput("value")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("loop_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//
Blockly.Blocks['break_block'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R8-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_7_BREAK);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("loop_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['continue_block'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R9-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_CONTINUE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("loop_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


// return 블럭, 반환
Blockly.Blocks['py_return'] = {
    init: function () {
        this.appendValueInput("NAME").setCheck(null).appendField("반환");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



// 변수 설정
Blockly.Blocks['val_set'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ "+ Blockly.Msg.OPERATION_1_INPUT+" ]");
      this.appendValueInput("a")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("=");
      this.appendValueInput("b")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_MATH_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

// for range(범위)
Blockly.Blocks['range1'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R5-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_4_RANGE+"(");
        this.appendValueInput("VALUE1").setCheck(null);
        this.appendDummyInput().appendField(",");
        this.appendValueInput("VALUE2").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setStyle("loop_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['range2'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Repeat/R6-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendDummyInput().appendField(Blockly.Msg.REPEAT_5_RANGE+"(" + Blockly.Msg.REPEAT_5_LENGTH + "(");
        this.appendValueInput("VALUE1").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setStyle("loop_blocks_sub");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// list_append
Blockly.Blocks['list_append'] = {
    init: function () {
        this.appendValueInput("LIST").setCheck(null).appendField("리스트 요소추가 -> 리스트");
        this.appendValueInput("value").setCheck(null).appendField("추가내용 (");
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_COLLECTION_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['add_string'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T15-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("NAME").setCheck(null);
        this.appendValueInput("NAME2").setCheck(null).appendField("+");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_TEXTS_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['vis_tree'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.MATPLOT_VIS_TREE_1);
        this.appendValueInput("x_data").setCheck(null).appendField("x_data");
        this.appendValueInput("y_data").setCheck(null).appendField("y_data: ");
        this.appendDummyInput().appendField(Blockly.Msg.MATPLOT_VIS_TREE_2).appendField(new Blockly.FieldTextInput("1"), "s");
        this.appendDummyInput().appendField(Blockly.Msg.MATPLOT_VIS_TREE_3).appendField(new Blockly.FieldTextInput("2"), "e");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//2020-12-04 양승국 번역



Blockly.Blocks['import_scikit'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['METRICS_IMPORT_SCIKIT_1']).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg['METRICS_IMPORT_SCIKIT_2'], "accuracy_score"
            ],
            [
                "AUC", "metrics"
            ],
            [
                "AP", "average_precision_score"
            ],
            [
                "PRC", "precision_score"
            ],
            [
                "MAE", "mean_absolute_error"
            ],
            [
                "MSE", "mean_squared_error"
            ],
            [
                "Classification Report", "classification_report"
            ],
            [
                "Median", "median_absolute_error"
            ]
        ]), "metrics");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};










// //////////////////////////// 신경망 //////////////////////////////
Blockly.Blocks['mlp_classifier'] = {
    init: function () {
        this.appendDummyInput().appendField("[MLP 분류기-MLPClassifier]");
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg['NEURALNETWORK_SKLEARN_MLP_CLASSIFIER_2']);
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("1"), "numSeed").appendField("Epochs").appendField(new Blockly.FieldTextInput("300"), "numEpochs");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mlp_regressor'] = {
    init: function () {
        this.appendDummyInput().appendField("[MLP 예측기-MLPRegressor]");
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg.LINEAR_LINEAR_REGRESSION_2);
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("1"), "numSeed").appendField("Epochs").appendField(new Blockly.FieldTextInput("500"), "numEpochs");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// MLP 라이브러리 임포트
Blockly.Blocks['import_mlp'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['NEURALNETWORK_IMPORT_MLP_1']).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg['NEURALNETWORK_IMPORT_MLP_2'], "MLPClassifier"
            ],
            [
                Blockly.Msg['NEURALNETWORK_IMPORT_MLP_3'], "MLPRegressor"
            ],
            [
                "BernoulliRBM", "BernoulliRBM"
            ]
        ]), "lib");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// 선형모델 라이브러리 임포트
Blockly.Blocks['import_linear'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.LINEAR_IMPORT_1).appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg.LINEAR_IMPORT_2, "LinearRegression"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_3, "SGDRegressor"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_4, "Ridge"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_5, "LogisticRegression"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_6, "LogisticRegressionCV"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_7, "RidgeClassifier"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_8, "BayesianRidge"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_9, "SGDClassifier"
            ],
            [
                Blockly.Msg.LINEAR_IMPORT_10, "Perceptron"
            ]
        ]), "lib");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// Kmeans 라이브러리 임포트
Blockly.Blocks['import_kmeans'] = {
    init: function () {
        this.appendDummyInput().appendField("[임포트] Kmeans ");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// K_Means fit
Blockly.Blocks['kmeans_fit'] = {
    init: function () {
        this.appendValueInput("model").appendField("[KMeans 모델 학습] 모델");
        this.appendValueInput("X_train").appendField(" X_train");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['import_sivalidation'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg['SELECTION_IMPORT_SIVALIDATION_1']).appendField(new Blockly.FieldDropdown([
            [
                "KFold", "KFold"
            ],
            [
                "StratifiedKFold", "StratifiedKFold"
            ],
            [
                "train_test_split", "train_test_split"
            ],
            [
                Blockly.Msg['SELECTION_IMPORT_SIVALIDATION_2'], "cross_val_score"
            ],
            [
                Blockly.Msg['SELECTION_IMPORT_SIVALIDATION_3'], "learning_curve"
            ],
            [
                Blockly.Msg['SELECTION_IMPORT_SIVALIDATION_4'], "permutation_test_score"
            ],
            [
                Blockly.Msg['SELECTION_IMPORT_SIVALIDATION_5'], "validation_curve"
            ]
        ]), "vali");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['stratifiedkfold'] = {
    init: function () {
        this.appendValueInput("model").setCheck(null).appendField(Blockly.Msg['SELECTION_KFOLD_1']);
        this.appendDummyInput().appendField("Splits").appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.appendDummyInput().appendField("Data Shuffle").appendField(new Blockly.FieldDropdown([
            [
                Blockly.Msg['SELECTION_KFOLD_2'], "True"
            ],
            [
                Blockly.Msg['SELECTION_KFOLD_3'], "False"
            ]
        ]), "shuffle");
        this.appendDummyInput().appendField("Seed").appendField(new Blockly.FieldTextInput("None"), "seed");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['import_tree'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.DECISIONTREE_IMPORT).appendField(new Blockly.FieldDropdown([["Decisiontree", "DecisionTreeClassifier"]]), "tree");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_SCIKITLEARN_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};






// //////////////////프롤로그 임시
Blockly.Blocks['prolog_list'] = {
    init: function () {
        this.appendValueInput("bar").setCheck(null).appendField("[사실]");
        this.appendStatementInput("content").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        // this.setNextStatement(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['prolog_list_rule'] = {
    init: function () {
        this.appendValueInput("bar").setCheck(null).appendField("[사실]");
        this.appendStatementInput("content").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        // this.setNextStatement(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['constant'] = {
    init: function () {
        this.appendDummyInput().appendField("[상수]").appendField(new Blockly.FieldTextInput(""), "NAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['info_block_statement'] = {
    init: function () {
        this.setEnabled(true);
        this.setColour('#8e904d');
        this.setPreviousStatement(true);
        this.setNextStatement(false);
        this.appendDummyInput();
    }
};
Blockly.Blocks['funktor'] = {
    init: function () {
        this.appendDummyInput().appendField("[함수]").appendField(new Blockly.FieldTextInput(""), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['rumpf'] = {
    init: function () {
        this.appendDummyInput().appendField("[Rumpf]").appendField(new Blockly.FieldDropdown([
            [
                "and", "and"
            ],
            [
                "or", "or"
            ]
        ]), "seperate");
        this.appendStatementInput("NAME").setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['Rule'] = {
    init: function () {
        this.appendDummyInput().appendField("[규칙]");
        this.appendStatementInput("Fact").setCheck(null);
        this.appendStatementInput("Rumpf").setCheck(null);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("Ein einfacher Fakt, welches aus einer Relation und einem oder mehreren Termen besteht.");
        this.setHelpUrl("https://www.tinohempel.de/info/info/prolog/regeln.htm");
    }
};
Blockly.Blocks['abfrage'] = {
    init: function () {
        this.appendDummyInput().appendField("[Abfrage] | 활성").appendField(new Blockly.FieldCheckbox("false"), "active");
        this.appendStatementInput("NAME").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['separate'] = {
    init: function () {
        this.appendDummyInput().appendField("[AND | OR 설정]").appendField(new Blockly.FieldDropdown([
            [
                "and", "and"
            ],
            [
                "or", "or"
            ]
        ]), "separate");
        this.appendStatementInput("NAME").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, "Array");
        this.setColour("%{BKY_PROLOG_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['np_dot'] = {
    init: function() {
      this.appendValueInput("dot")
          .setCheck(null)
          .appendField("[ 행렬 곱 ] (");
      this.appendValueInput("dot2")
          .setCheck(null)
          .appendField(",");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['range_len'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("/img/Repeat/R5-logo.png", 25, 23, {alt: "*",flipRtl: "FALSE"}))
            .appendField(new Blockly.FieldDropdown([["길이(len)","len"], ["범위(range)","range"], ["열거(enumerate)","enumerate"]]), "DROP");
        this.appendValueInput("x")
            .setCheck(null)
            //.appendField(Blockly.Msg.REPEAT_5_LENGTH);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setStyle("loop_blocks_sub");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/////////////////////////////////////////////////////////////////////////////
//
// 2021-01 정지현 사이킷런 임포트 블록 추가
//
/////////////////////////////////////////////////////////////////////////////
Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "import_scikit_learn",
            "message0": "%{BKY_IMPORT_SCIKIT_LEARN}",
            "inputsInline": true,
            "previousStatement": null, 
            "nextStatement": null,
            "colour": "%{BKY_SCIKITLEARN_HUE}",
            "tooltip": "",
            "helpUrl": ""
        }
    ]
)
