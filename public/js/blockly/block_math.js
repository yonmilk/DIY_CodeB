///////////////////////////////////////////////////////
// 2020-12-28 math 전우진
//////////////////////////////////////////////////////

Blockly.Blocks['operation_library'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATH_IMPORT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("math_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['math_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] math");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['math1'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.MATH_)
        .appendField(
          new Blockly.FieldDropdown([
            [Blockly.Msg.MATH_CEIL, 'ceil'],
            [Blockly.Msg.MATH_FLOOR, 'floor'],
            [Blockly.Msg.MATH_FABS, 'fabs'],
            [Blockly.Msg.MATH_MINUS, 'minus'],
            [Blockly.Msg.MATH_FACTORIAL, 'factorial'],
            [Blockly.Msg.MATH_MODF, 'modf'],
            [Blockly.Msg.MATH_SQRT, 'sqrt'],
            [Blockly.Msg.MATH_ISQRT, 'isqrt'],
            [Blockly.Msg.MATH_POW10, 'pow10'],
            [Blockly.Msg.MATH_LOG10, 'log10'],
            [Blockly.Msg.MATH_LN, 'log'],
            [Blockly.Msg.MATH_EXP, 'exp']
          ]),
          'NAME'
        )
        .appendField('(');
      this.appendValueInput('va').setCheck(null);
      this.appendDummyInput().appendField(')');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour('%{BKY_MATH_HUE}');
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['math2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.MATH_)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MATH_GCD, "1"], [Blockly.Msg.MATH_LOG, "2"], [Blockly.Msg.MATH_POW, "3"], [Blockly.Msg.MATH_DIST, "4"]]), "NAME")
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

  Blockly.Blocks['math3'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.MATH_)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.MATH_PI, "pi"], [Blockly.Msg.MATH_E, "e"], [Blockly.Msg.MATH_INF, "inf"], [Blockly.Msg.MATH_NAN, "nan"]]), "NAME")
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['math_tri_func'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.MATH_TRI_FUNC)
        .appendField(
          new Blockly.FieldDropdown([
            [Blockly.Msg.MATH_DEGREES, 'degrees'],
            [Blockly.Msg.MATH_RADIANS, 'radians'],
            [Blockly.Msg.MATH_ACOS, 'acos'],
            [Blockly.Msg.MATH_ASIN, 'asin'],
            [Blockly.Msg.MATH_ATAN, 'atan'],
            [Blockly.Msg.MATH_COS, 'cos'],
            [Blockly.Msg.MATH_SIN, 'sin'],
            [Blockly.Msg.MATH_TAN, 'tan'],
          ]),
          'NAME'
        )
        .appendField('(');
      this.appendValueInput('va').setCheck(null);
      this.appendDummyInput().appendField(')');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour('%{BKY_MATH_HUE}');
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  
// increase, 증가 등등
// Blockly.Blocks['increase'] = {
//   init: function () {
//       this.setStyle("variable_blocks");
//       this.appendDummyInput().appendField(new Blockly.FieldImage("../public/img/Repeat/R3-logo.png", 25, 23, {
//           alt: "*",
//           flipRtl: "FALSE"
//       }));
//       this.appendValueInput("NUMBER").setCheck(null);
//       this.appendValueInput("VALUE").setCheck(null).appendField(new Blockly.FieldDropdown([
//           [
//               "+=", "+="
//           ],
//           [
//               "-=", "-="
//           ],
//           [
//               "*=", "*="
//           ],
//           [
//               "/=", "/="
//           ],
//           [
//               "%=", "%="
//           ],
//           [
//               "**=", "**="
//           ]
//       ]), "NAME");
//       this.setInputsInline(true);
//       this.setPreviousStatement(true, null);
//       this.setNextStatement(true, null);
//       this.setTooltip("");
//       this.setHelpUrl("");
//   }
// };