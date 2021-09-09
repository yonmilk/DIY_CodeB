//2020-12-27-전우진 class

Blockly.Blocks['self'] = {
  init: function () {
    this.appendValueInput("VAR")
      .setCheck(null)
      .appendField('self.');
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([['=', '='], ['+=', '+='], ["-=", "-="]]), 'NAME');
    this.appendValueInput("varset")
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("class_blocks");
    this.setTooltip("assign a value, increment, or decrement a variable");
    this.setHelpUrl("");
  }
};

//2020-12-27-전우진 class

Blockly.Blocks['webclass'] = {
  init: function () {
    this.appendValueInput("VAR")
      .setCheck(null)
      .appendField(Blockly.Msg.CLASS_1_3);
    this.appendDummyInput()
      .appendField(' :');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("class_blocks");
    this.setTooltip('Class Statement.');
    this.setHelpUrl('');
  }
};

// 상속 2021.01.06 남지원
Blockly.Blocks['webclass2'] = {
  init: function () {
    this.appendValueInput("VAR")
      .setCheck(null)
      .appendField(Blockly.Msg.CLASS_1_4);
    this.appendDummyInput()
      .appendField('(');
    this.appendValueInput("INPUT")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(')')
      .appendField(' :');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("class_blocks");
    this.setTooltip('Class Statement.');
    this.setHelpUrl('');
  }
};
// 객체사용 
Blockly.Blocks['class_use'] = {
  init: function () {
    this.appendValueInput("VAR1")
      .setCheck(null)
      .appendField("[ " + Blockly.Msg.CLASS_5_1 + " ]");
    this.appendValueInput("VAR2")
      .setCheck(null)
      .appendField(".");
    this.appendValueInput("3")
      .appendField("(")
    this.appendDummyInput()
      .appendField(')')
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(125);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 객체사용 
Blockly.Blocks['class_use2'] = {
  init: function () {
    this.appendValueInput("VAR1")
      .setCheck(null)
      .appendField("[ " + Blockly.Msg.CLASS_5_1 + " ]");
    this.appendValueInput("VAR2")
      .setCheck(null)
      .appendField(".");
    this.appendValueInput("3")
      .appendField("(")
    this.appendDummyInput()
      .appendField(')')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("class_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// 객체 생성
Blockly.Blocks['class_make'] = {
  init: function () {
    this.appendValueInput("1")
      .setCheck(null)
      .appendField("[ " + Blockly.Msg.CLASS_1_5 + " ]");
    this.appendValueInput("2")
      .setCheck(null)
      .appendField("=");
    this.appendValueInput("3")
      .appendField("(")
    this.appendDummyInput()
      .appendField(')')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("class_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['hasattr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[hasattr]");
    this.appendValueInput("object")
        .setCheck(null)
        .appendField("객체");
    this.appendValueInput("attr")
        .setCheck(null)
        .appendField("속성 ")
        .appendField("'");
    this.appendDummyInput()
        .appendField("'");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("class_blocks_sub");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};