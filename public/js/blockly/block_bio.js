Blockly.Blocks['bioimport'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BIO_IMPORT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['bioimportall'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BIO_IMPORT_SEQUTILS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['biosequtillsimport'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.BIO_IMPORT_SEQUTILS)
        .appendField(new Blockly.FieldDropdown([["*","*"], ["GC","GC"], ["modelcular_weight","modelcular_weight"], ["six_frame_translations","six_frame_translations"], ["MeltingTemp","MeltingTemp as mt"], ["seq1","seq1"], ["seq3","seq3"]]), "sequtils");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['biodataimport'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BIO_IMPORT_DATA);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

