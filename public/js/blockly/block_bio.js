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
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BIO_IMPORT_SEQUTILS)
      .appendField(new Blockly.FieldDropdown([["*", "*"], ["GC", "GC"], ["molecular_weight", "molecular_weight"], ["six_frame_translations", "six_frame_translations"], ["MeltingTemp", "MeltingTemp as mt"], ["seq1", "seq1"], ["seq3", "seq3"]]), "sequtils");
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

Blockly.Blocks['bioseq'] = {
  init: function () {
    this.appendValueInput("var")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(' = Seq(');
    this.appendValueInput("text")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['biogc'] = {
  init: function () {
    this.appendValueInput("var")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(' = GC(');
    this.appendValueInput("text")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(')');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['biocodon'] = {
  init: function () {
    this.appendValueInput("var")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(' = CodonTable.unambiguous_dna_by_name[');
    this.appendValueInput("text")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(']');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['biocodonlist'] = {
  init: function () {
    this.appendValueInput("var")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(' = CodonTable.unambiguous_dna_by_name["')
      .appendField(new Blockly.FieldDropdown([["Standard", "Standard"], ["Vertebrate Mitochondrial", "Vertebrate Mitochondrial"], ["Yeast Mitochondrial", "Yeast Mitochondrial"], ["Invertebrate Mitochondrial", "Invertebrate Mitochondrial"], ["Flatworm Mitochondrial", "Flatworm Mitochondrial"]]), "codonlist")
      .appendField('"]');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['biomw'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BIO_MOLECULAR_WEIGHT)
      .appendField("molecular_weight(");
    this.appendValueInput("var")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['biosft'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BIO_SIX_FRAME)
      .appendField("six_frame_translations(");
    this.appendValueInput("var")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['biostm'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BIO_TM)
      .appendField("mt.Tm_Wallace(");
    this.appendValueInput("var")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Msg.BIO_HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks['bioseq1'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField(Blockly.Msg.BIO_TM)
//       .appendField("mt.Tm_Wallace(");
//     this.appendValueInput("var")
//       .setCheck(null);
//     this.appendDummyInput()
//       .appendField(")");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(Blockly.Msg.BIO_HUE);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['bioseq3'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField(Blockly.Msg.BIO_TM)
//       .appendField("mt.Tm_Wallace(");
//     this.appendValueInput("var")
//       .setCheck(null);
//     this.appendDummyInput()
//       .appendField(")");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//     this.setColour(Blockly.Msg.BIO_HUE);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };