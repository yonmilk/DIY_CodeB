//wavfile 읽기
Blockly.Blocks['wavfile_read'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[ wavfile 읽기 ]");
      this.appendValueInput("wavfile_read_val")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(285);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };