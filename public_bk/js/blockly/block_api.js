Blockly.Blocks['sklearn_ensemble'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_1)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_2, "AdaBoostClassifier"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_3, "AdaBoostRegressor"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_4, "GradientBoostingClassifier"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_5, "GradientBoostingRegressor"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_6, "RandomForestClassifier"], [Blockly.Msg.ESEMBLE_SKLEARN_ESEMBLE_7, "RandomForestRegressor"],["IsolationForest","IsolationForest"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['sklearn.preprocessing'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PREPROCESSING_SKLEARN)
      .appendField(new Blockly.FieldDropdown([
       ["PolynomialFeatures", "PolynomialFeatures"], 
       ["LabelEncoder", "LabelEncoder"], 
       ["OneHotEncoder", "OneHotEncoder"], 
       ["StandardScaler", "StandardScaler"],
       ["Scale", "scale"], 
       ["train_test_split","train_test_split"] 
      ]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


Blockly.Blocks['fit_transform'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null);
    this.appendValueInput("NAME2")
      .setCheck(null)
      .appendField(".fit_transform(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sklearn_svm'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SKLEARN_SVM_1)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SKLEARN_SVM_2, "LinearSVC"], [Blockly.Msg.SKLEARN_SVM_3, "LinearSVR"]]), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



Blockly.Blocks['make_pipeline'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[make_pipeline] ")
      .appendField("StandardScaler()");
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(" LinearSVR");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['standardscaler'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField("[기능 표준화] 모델");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_SCIKITLEARN_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

  // Blockly.Blocks['labelencoder'] = {
  //   init: function() {
  //     this.appendValueInput("NAME")
  //         .setCheck(null)
  //         .appendField("[수치화] 모델");
  //     this.setInputsInline(true);
  //     this.setPreviousStatement(true, null);
  //     this.setNextStatement(true, null);
  //     this.setColour("%{BKY_SCIKITLEARN_HUE}");
  //  this.setTooltip("");
  //  this.setHelpUrl("");
  //   }
  // };