// import사이파이
Blockly.Blocks['import_scipy'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SCIPY_IMPORT).appendField(new Blockly.FieldDropdown([
            [
                "curve_fit", "curve_fit"
            ],
            [
                "interp1d", "interp1d"
            ],
            [
                "UnivariateSpline", "UnivariateSpline"
            ],
            [
                "quad", "quad"
            ],
            [
                "trapz", "trapz"
            ],
            [
                "wavfile", "wavfile"
            ],
            [
                "signal", "signal"
            ],
            [
                "ndimage", "ndimage"
            ],
            [
              "dendrogram", "dendrogram"
            ] ,
            [
              "ward", "ward"
            ] 

        ]), "scipy");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("scipy_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['import_scipy_wavfile'] = {
  init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.SCIPY_IMPORT).appendField(new Blockly.FieldDropdown([
          [
              "wavfile", "wavfile"
          ],
          [
              "write", "write"
          ]

      ]), "scipy");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("scipy_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['curve_fit'] = {
    init: function () {
        this.appendValueInput("fun").setCheck(null).appendField(Blockly.Msg.SCIPY_CURVE_FIT);
        this.appendValueInput("x").setCheck(null).appendField("x_data");
        this.appendValueInput("y").setCheck(null).appendField("y_data");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Blocks['univariatespline'] = {
    init: function () {
        this.appendValueInput("x").setCheck(null).appendField(Blockly.Msg.SCIPY_UNIVARIATESPLINE).appendField("UnivariateSpline x_data");
        this.appendValueInput("y").setCheck(null).appendField("Y_data");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("1"), "s");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['quad'] = {
    init: function () {
        this.appendValueInput("x").setCheck(null).appendField(Blockly.Msg.SCIPY_QUAD);
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"), "s");
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("1000"), "e");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['scipy_io_wavfile_read'] = {
    init: function () {
        this.appendValueInput("file").setCheck(null).appendField("io.wavfile.read");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 고장 진단

Blockly.Blocks['scipy_bartlett'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(Blockly.Msg.SCIPY_BARTLETT)
        .appendField("signal.bartlett");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_tsearch'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(Blockly.Msg.SCIPY_TSEARCH)
        .appendField("spatial.tsearch");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_distance_matrix_minkowski_distance_minkowski_distance_p'] = {
    init: function () {
        this.appendDummyInput().appendField(Blockly.Msg.SCIPY_DISTANCE_MATRIX_MINKOWSKI_DISTANCE_MINKOWSKI_DISTANCE_P)
        .appendField("spatial.")
        .appendField(new Blockly.FieldDropdown([
            [
              Blockly.Msg.SCIPY_DISTANCE_MATRIX, "distance_matrix"
            ],
            [
              Blockly.Msg.SCIPY_MINKOWSKI_DISTANCE, "minkowski_distance"
            ],
            [
              Blockly.Msg.SCIPY_MINKOWSKI_DISTANCE_P, "minkowski_distance_p"
            ]
        ]), "scipy");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_procrustes'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(Blockly.Msg.SCIPY_PROCRUSTES)
        .appendField("spatial.procrustes");
        this.appendValueInput("d2").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

  //////////////////////////////////////
//// 2021-02-15 양승국
//////////////////////////////////////
Blockly.Blocks['scipy_write_read'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.SCIPY_WRITE_READ)
      .appendField("wavfile.")
      .appendField(new Blockly.FieldDropdown([
        [
            "쓰기(write)", "write"
        ],
        [
          "읽기(read)", "read"
        ],
        ]), "collection");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_cascade'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(Blockly.Msg.SCIPY_CASCADE)
        .appendField("signal.cascade");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_daub'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(Blockly.Msg.SCIPY_DAUB)
        .appendField("signal.daub");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_morlet'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.SCIPY_MORLET)
      .appendField("signal.")
      .appendField(new Blockly.FieldDropdown([
        [
          Blockly.Msg.SCIPY_MORLET0, "morlet"
        ],
        [
          Blockly.Msg.SCIPY_MORLET2, "morlet2"
        ],
        ]), "collection");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_qmf'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(Blockly.Msg.SCIPY_QMF)
        .appendField("signal.qmf");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['scipy_ricker'] = {
    init: function () {
        this.appendDummyInput()
        .appendField(Blockly.Msg.SCIPY_RICKER)
        .appendField("signal.ricker");
        this.appendValueInput("d1").appendField("(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['ward'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[Ward]");
      this.appendValueInput("variable")
          .setCheck(null)
          .appendField("변수");
      this.appendValueInput("data")
          .setCheck(null)
          .appendField("data");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['dendrogram'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[Dendrogram]");
      this.appendValueInput("data")
          .setCheck(null)
          .appendField("data");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };