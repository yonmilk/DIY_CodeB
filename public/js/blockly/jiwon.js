// 2021.01.14 맷플롯립 작업시작

// get_sample_data
Blockly.Blocks['get_sample_data'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("cbook.get_sample_data");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("np_load=")
            .appendField(new Blockly.FieldDropdown([["참(True)","True"],["거짓(False)","False"]]),"DROP");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    },
};
  
// cbook_import
Blockly.Blocks['cbook_import'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("[임포트]cbook");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

// set_inset_axes
Blockly.Blocks['set_inset_axes'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".inset_axes(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    },
};

// set_xlim_ylim 드롭다운 버전
/*
Blockly.Blocks['set_xlim_ylim'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".")
            .appendField(new Blockly.FieldDropdown([["set_xlim","set_xlim"],["set_ylim","set_ylim"]]),"DROP");
        this.appendValueInput("INPUT")
            .setCheck(null);
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
*/

Blockly.Blocks['set_lim'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_xlim(");
        this.appendValueInput("INPUT1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("), set_ylim(");
        this.appendValueInput("INPUT2")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    },
};

// indicate_inset_zoom
Blockly.Blocks['indicate_inset_zoom'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".indicate_inset_zoom(");
        this.appendValueInput("VAR2")
            .setCheck(null);
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


// plt.subplot
Blockly.Blocks['subplots'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".subplots(");
        this.appendValueInput("VAR2")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};



// shape
Blockly.Blocks['shape'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".shape");   
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};


// set_xticklabels
Blockly.Blocks['set_xticklabels'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_xticklabels(");
        this.appendValueInput("INPUT")
            .setCheck(null);
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

// set_xticklabels
Blockly.Blocks['set_yticklabels'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_yticklabels(");
        this.appendValueInput("INPUT")
            .setCheck(null);
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

// boxplot
Blockly.Blocks['boxplot'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".boxplot(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// set_title
Blockly.Blocks['set_title'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_title(");
        this.appendValueInput("INPUT")
            .setCheck(null);
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

// patch.set_facecolor
Blockly.Blocks['set_facecolor'] = {
    init: function() {
        this.appendValueInput("VAR1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_facecolor(");
        this.appendValueInput("VAR2")
            .setCheck(null);
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

// yaxis.grid
Blockly.Blocks['yaxis_grid'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".yaxis.grid(");
        this.appendValueInput("INPUT")
            .setCheck(null);
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

// set_xlabel
Blockly.Blocks['set_xlabel'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_xlabel(");
        this.appendValueInput("INPUT")
            .setCheck(null);
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

// set_ylabel
Blockly.Blocks['set_ylabel'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".set_ylabel(");
        this.appendValueInput("INPUT")
            .setCheck(null);
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

// set_ylabel
Blockly.Blocks['hist'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".hist(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// set_ylabel
Blockly.Blocks['cohere'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".cohere(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_VISUAL_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// tight_layout
Blockly.Blocks['tight_layout'] = {
    init: function() {
        this.appendValueInput("VAR")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(".tight_layout(");
        this.appendValueInput("INPUT")
            .setCheck(null);
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

//numpy_random_sample 맷플롯립용
Blockly.Blocks['numpy_random_sample_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("[np 단순 랜덤]")
          .appendField(new Blockly.FieldDropdown([["표준 정규분포(randn)","numpy_Random_sample_randn"],["임의 값(rand)","numpy_Random_sample_rand"], ["임의 정수(randint)","numpy_Random_sample_randint"], ["0~1 부동 소수점(random)","numpy_Random_sample_random"], ["배열 무작위(choice)","numpy_Random_sample_choice"], ["임의 바이트(bytes)","numpy_Random_sample_bytes"]]), "numpy_Random_sample_opt");
      this.appendValueInput("numpy_Random_sample_val")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_NUMPY_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

// 맷플롯립용
Blockly.Blocks['Oper_x'] = {
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
                "-", "-"
            ],
            [
                "+", "+"
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



//2021.01.22 try_except 남지원
Blockly.Blocks['try_except'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("try : ");
        this.appendStatementInput("TRY")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("except");
        this.appendValueInput("EXCEPT1")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(":");
        this.appendStatementInput("EXCEPT2")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_LOGIC_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

// 2021.01.25 except_block 남지원
Blockly.Blocks['except_block'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["EOFError","EOFError"],["SyntaxError","SyntaxError"], ["NameError","NameError"], ["ZeroDivisionError","ZeroDivisionError"], ["IndexError","IndexError"], ["ValueError","ValueError"], ["KeyError","KeyError"], ["AttributeError","AttributeError"], ["FileNotFoundError","FileNotFoundError"], ["TypeError","TypeError"]]), "DROP");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_LOGIC_HUE}");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 2021.02.15 사이파이
Blockly.Blocks['scipy_butter'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SCIPY_BUTTER)
            .appendField("signal.butter(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// 2021.02.15 
Blockly.Blocks['scipy_sosfilt'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SCIPY_SOSFILT)
            .appendField("signal.sosfilt(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// 2021.02.15 
Blockly.Blocks['scipy_hilbert'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SCIPY_HILBERT)
            .appendField("signal.hilbert(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// 2021.02.15 
// Blockly.Blocks['scipy_hilbert'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField(Blockly.Msg.SCIPY_HILBERT)
//             .appendField("signal.hilbert(");
//         this.appendValueInput("INPUT")
//             .setCheck(null);
//         this.appendDummyInput()
//             .appendField(")");
//         this.setInputsInline(true);
//         this.setOutput(true, null);
//         this.setColour("%{BKY_SCIPY_HUE}");
//     this.setTooltip("");
//     this.setHelpUrl("");
//     }
// };

// 2021.02.15 
Blockly.Blocks['scipy_correlate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SCIPY_CORRELATE)
            .appendField("signal.correlate(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// 2021.02.15 
Blockly.Blocks['scipy_stft_istft'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SCIPY_STFT_ISTFT)
            .appendField("signal.")
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SCIPY_STFT,"stft"],[Blockly.Msg.SCIPY_ISTFT,"istft"]]), "DROP")
            .appendField(")");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// 2021.02.15 
Blockly.Blocks['scipy_find_peaks'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SCIPY_FIND_PEAKS)
            .appendField("signal.find_peaks(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

// 2021.02.15 
Blockly.Blocks['scipy_fft'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SCIPY_FFT)
            .appendField("fft.fft(");
        this.appendValueInput("INPUT")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("%{BKY_SCIPY_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.defineBlocksWithJsonArray([
    // 출력설정 pie 차트
    {
        "type": "matplotlib_pie",
        "message0": "%{BKY_MATPLOT_PIE}",
        "args0": [
            { 
                "type" : "field_image",
                "src" : "/img/Graph/PIE-logo.png",
                "width" : 25,
                "height" : 23,
                "alt" : "LINE",
                "flipRtl" : false
            },
        {
            "type": "input_value",
            "name": "data"
        },
        {
            "type": "input_value",
            "name": "labels"
        },
        {
            "type": "input_value",
            "name": "autopct"
        },
        {
            "type": "input_value",
            "name": "title"
        },
        {
            "type": "input_value",
            "name": "explode"
        },
        {
            "type": "input_value",
            "name": "other"
        }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "style": "matplot_blocks",
        "tooltip": "",
        "helpUrl": ""
    },

    // 출력설정 pie 차트
    {
        "type": "matplotlib_scatter",
        "message0": "%{BKY_MATPLOT_SCATTER}",
        "args0": [
            { 
                "type" : "field_image",
                "src" : "/img/Graph/SCATTER-logo.png",
                "width" : 25,
                "height" : 23,
                "alt" : "LINE",
                "flipRtl" : false
            },
        {
            "type": "input_value",
            "name": "data_x"
        },
        {
            "type": "input_value",
            "name": "data_y"
        },
        {
            "type": "input_value",
            "name": "color"
        },
        {
            "type": "input_value",
            "name": "title"
        },
        {
            "type": "input_value",
            "name": "legend"
        },
        {
            "type": "input_value",
            "name": "other"
        }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "style": "matplot_blocks",
        "tooltip": "",
        "helpUrl": ""
    },

    // 출력설정 color map
    {
        "type": "matplotlib_colormap",
        "message0": "%{BKY_MATPLOT_COLORMAP}",
        "args0": [
        { 
            "type" : "field_image",
            "src" : "/img/Graph/COLORMAP-logo.png",
            "width" : 25,
            "height" : 23,
            "alt" : "LINE",
            "flipRtl" : false
        },
        {
            "type": "input_value",
            "name": "data_x"
        },
        {
            "type": "input_value",
            "name": "title"
        }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "style": "matplot_blocks",
        "tooltip": "",
        "helpUrl": ""
    }

]);