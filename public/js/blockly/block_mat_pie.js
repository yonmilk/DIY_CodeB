///////////////////////////////////////////////////////
// 2021-01-13
///////////////////////////////////////////////////////

//pie_subplots
Blockly.Blocks['pie_subplots'] = {
  init: function() { 
    this.appendDummyInput().appendField("plt.subplot");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_pie
Blockly.Blocks['pie_pie1'] = {
  init: function() { 
    this.appendValueInput("list").setCheck(null);
    this.appendDummyInput()
        .appendField(".pie(");
    this.appendValueInput("d1").setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_axis
Blockly.Blocks['pie_axis'] = {
  init: function() { 
    this.appendValueInput("list").setCheck(null);
    this.appendDummyInput().appendField(".axis(");
    this.appendValueInput("d1").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_figure
Blockly.Blocks['pie_figure'] = {
  init: function() { 
        this.appendValueInput("list").setCheck(null);
        this.appendDummyInput()
        .appendField(".figure(");
        this.appendValueInput("d1").setCheck(null);
        this.appendDummyInput()
        .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_add_subplot
Blockly.Blocks['pie_add_subplot'] = {
  init: function() { 
    this.appendValueInput("list").appendField().setCheck(null);
    this.appendValueInput("d1").appendField(".add_subplot(").appendField().setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_ax_scatter
Blockly.Blocks['pie_ax_scatter'] = {
  init: function() { 
    this.appendValueInput("list").appendField().setCheck(null);
    this.appendValueInput("d1").appendField().setCheck(null).appendField(".scatter(");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//numpy_random_generator1
Blockly.Blocks['numpy_random_generator1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[np 생성기]")
        .appendField(new Blockly.FieldDropdown([["규칙 난수(seed)","numpy_Random_generator_seed"], ["생성기 내부 상태(get_state)","numpy_Random_generator_get_state"], ["튜플 내부상태 설정(set_state)","numpy_Random_generator_set_state"]]), "numpy_Random_generator_opt");
    this.appendValueInput("numpy_Random_generator_val")
        .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    this.setColour("%{BKY_NUMPY_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Oper1'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "*", "*"
          ],
          [
              "+", "+"
          ],
          [
              "-", "-"
          ],
          [
              "/", "/"
          ],
          [
              "%", "%"
          ],
          [
              "**", "**"
          ],
          [
              "//", "//"
          ]
      ]), "NAME");
      this.appendValueInput("B").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['Oper2'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "**", "**"
          ],
          [
              "+", "+"
          ],
          [
              "-", "-"
          ],
          [
              "*", "*"
          ],
          [
              "/", "/"
          ],
          [
              "%", "%"
          ],
          [
              "//", "//"
          ]
      ]), "NAME");
      this.appendValueInput("B").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['Oper3'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "/", "/"
          ],
          [
              "**", "**"
          ],
          [
              "+", "+"
          ],
          [
              "-", "-"
          ],
          [
              "*", "*"
          ],
          [
              "%", "%"
          ],
          [
              "//", "//"
          ]
      ]), "NAME");
      this.appendValueInput("B").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['Oper4'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Numeric/N2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        }));
        this.appendValueInput("A").setCheck(null);
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([
            [
                "*", "*"
            ],
            [
                "+", "+"
            ],
            [
                "-", "-"
            ],
            [
                "**", "**"
            ],
            [
                "/", "/"
            ],
            [
                "%", "%"
            ],
            [
                "//", "//"
            ]
        ]), "NAME");
        this.appendValueInput("B").setCheck(null);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_MATH_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

Blockly.Blocks['pie_linspace'] = {
  init: function () {
      this.appendDummyInput().appendField("np.linspace(");
      this.appendValueInput("d1").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['pie_cm_viridis'] = {
  init: function () {
      this.appendDummyInput().appendField("np.cm.viridis(");
      this.appendValueInput("d1").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//pie_subplots
Blockly.Blocks['pie_subplots1'] = {
  init: function() { 
    this.appendValueInput("list").setCheck(null);
    this.appendDummyInput().appendField(".subplot(");
    this.appendValueInput("d1").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

//pie_bar
Blockly.Blocks['pie_bar'] = {
  init: function() { 
    this.appendValueInput("list").appendField().setCheck(null);
    this.appendValueInput("d1").appendField().setCheck(null).appendField(".bar(");
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_VISUAL_HUE}");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};