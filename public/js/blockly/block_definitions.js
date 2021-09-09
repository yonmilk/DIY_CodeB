//2020-12-26-전우진 definitions
// 함수 블록
Blockly.Blocks['webdefine'] = {
    init: function () {
        this.appendValueInput('1')
            .setCheck(null)
            .appendField(Blockly.Msg.CLASS_2_1);
        this.appendValueInput('2')
            .setCheck(null)
            .appendField('(');
        this.appendDummyInput()
            .appendField('):');
        this.appendStatementInput('DO')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("function_blocks");
        this.setTooltip('');
    },
};

// 함수 블록
Blockly.Blocks['webdefine2'] = {
    init: function () {
        this.appendValueInput('1')
            .setCheck(null)
            .appendField(Blockly.Msg.CLASS_1_6);
        this.appendValueInput('2')
            .setCheck(null)
            .appendField('(');
        this.appendDummyInput()
            .appendField('):');
        this.appendStatementInput('DO')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("function_blocks");
        this.setTooltip('');
    },
};

//2020-12-26-전우진 return
// return 블록
Blockly.Blocks['webreturn2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('return');
        this.appendValueInput('return')
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setInputsInline(true);
        this.setStyle("function_blocks");
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

// 함수 return 블록1 
Blockly.Blocks['func_return1'] = {
    init: function() {
        this.appendValueInput('1')
            .setCheck(null);
        this.appendValueInput('2')
            .setCheck(null)
            .appendField("=");
        this.appendValueInput('3')
            .setCheck(null)
            .appendField("(");
        this.appendDummyInput()
            .appendField(')');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("function_blocks");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 함수 return 블록1 
Blockly.Blocks['func_return11'] = {
    init: function() {
        this.appendValueInput('1')
          .setCheck(null);
        this.appendValueInput('3')
          .setCheck(null)
          .appendField("(");
      this.appendDummyInput()
          .appendField(')');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setStyle("function_blocks_sub");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


// 함수 return 블록 2
Blockly.Blocks['func_return2'] = {
    init: function() {
        this.appendValueInput('1')
            .setCheck(null)
            this.appendValueInput('2')
            .appendField("=")
            .setCheck(null);
        this.appendValueInput('3')
          .setCheck(null)
          .appendField("(");
      this.appendDummyInput()
          .appendField(')');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("function_blocks");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  //2020-12-27-전우진-global
Blockly.Blocks['global'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CLASS_8_1);
        this.appendValueInput("text")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("function_blocks");
        this.setTooltip('');
        this.setHelpUrl('');
    },
  };