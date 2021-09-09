///////////////////////////////////////////////////////
// 2020-12-28 static 카테고리
//////////////////////////////////////////////////////

Blockly.Blocks['static_library'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("[임포트] statistics");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['statistics1'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OPERATION_STATISTICS) // "통계"
      .appendField(new Blockly.FieldDropdown([["%{BKY_OPERATION_STATISTICS1_1}", "mean"], [Blockly.Msg.OPERATION_STATISTICS1_2, "fmean"], [Blockly.Msg.OPERATION_STATISTICS1_3, "geometric_mean"], [Blockly.Msg.OPERATION_STATISTICS1_4, "harmonic_mean"], 
      [Blockly.Msg.OPERATION_STATISTICS1_5, "median"], [Blockly.Msg.OPERATION_STATISTICS1_6, "median_low"], [Blockly.Msg.OPERATION_STATISTICS1_7, "median_high"], [Blockly.Msg.OPERATION_STATISTICS1_8, "median_grouped"], [Blockly.Msg.OPERATION_STATISTICS1_9, "mode"], [Blockly.Msg.OPERATION_STATISTICS1_10, "multimode"],
      [Blockly.Msg.OPERATION_STATISTICS1_11, "pstdev"], [Blockly.Msg.OPERATION_STATISTICS1_12, "pvariance"], [Blockly.Msg.OPERATION_STATISTICS1_13, "stdev"], [Blockly.Msg.OPERATION_STATISTICS1_14, "variance"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['statistics2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OPERATION_RANDOM)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OPERATION_STATISTICS2_1, "1"], [Blockly.Msg.OPERATION_STATISTICS2_2, "2"], [Blockly.Msg.OPERATION_STATISTICS2_3, "3"], [Blockly.Msg.OPERATION_STATISTICS2_4, "4"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

////////////////////////////////////
/// random 블록
////////////////////////////////////

Blockly.Blocks['random_library'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("[임포트] random");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['random1_integer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OPERATION_RANDOM)
      .appendField(Blockly.Msg.OPERATION_RANDOM1_INTEGER)
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['random1_choice'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OPERATION_RANDOM)
      .appendField(Blockly.Msg.OPERATION_RANDOM1_CHOICE)
      .appendField("(");
    this.appendValueInput("va2")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['random1_shuffle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OPERATION_RANDOM)
      .appendField(Blockly.Msg["OPERATION_RANDIM1_SHUFFLE"])
      .appendField("(");
    this.appendValueInput("va3")
      .setCheck(null)
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, null);
    this.setStyle("math_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//2020-09-19 양승국 블록수정
Blockly.Blocks['random2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OPERATION_RANDOM)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OPERATION_RANDOM2_1, "1"],[Blockly.Msg.OPERATION_RANDOM2_2, "3"]]), "NAME")
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['random3'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.OPERATION_RANDOM)
      .appendField(Blockly.Msg.OPERATION_RANDOM3)
      .appendField("(");
    this.appendValueInput("va1")
      .setCheck(null);
    this.appendValueInput("va2")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_MATH_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};