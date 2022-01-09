// 맷플롯립 라이브러리
Blockly.Blocks['import_matplotlib_list'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATPLOTLIB_LIST_LIBRARY)
            .appendField(new Blockly.FieldDropdown([["matplotlib.pyplot을 plt로","matplotlib.pyplot as plt\nimport matplotlib.font_manager as fm\n\nfontprop = fm.FontProperties(fname='malgun.ttf')\n"], ["matplotlib","matplotlib"]]), "list");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("matplot_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
    }
},

Blockly.Blocks['visualization_library'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATPLOT_VISUALIZATION_LIBRARY);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("matplot_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
},

    Blockly.Blocks['import_matplotlib'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('[임포트] matplotlib');
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setStyle("matplot_blocks");
            this.setTooltip("");
            this.setHelpUrl("");
        }
    },

    //그래프 출력 설정
    Blockly.Blocks['select_graph_option'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("[ 그래프 출력 설정 ] 좌표 [");
            this.appendValueInput("select_graph_option_location1")
                .setCheck(null);
            this.appendValueInput("select_graph_option_location2")
                .setCheck(null)
                .appendField("][");
            this.appendValueInput("select_graph_option_XY")
                .setCheck(null)
                .appendField("] ( X , Y ) 값 ");
            this.appendValueInput("select_graph_option_graph")
                .setCheck(null)
                .appendField("그래프 종류 ");
            this.appendValueInput("select_graph_option_title")
                .setCheck(null)
                .appendField("제목");
            this.appendValueInput("select_graph_option_X")
                .setCheck(null)
                .appendField("X 축");
            this.appendValueInput("select_graph_option_Y")
                .setCheck(null)
                .appendField("Y 축");
            this.appendValueInput("select_graph_option_END")
                .setCheck(null)
                .appendField("범례");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

Blockly.Blocks['matp_Ex'] = {
    init: function () {
        this.appendDummyInput().appendField("[그래프 크기 설정]");
        this.appendValueInput("d1").setCheck(null);
        this.appendValueInput("d2").appendField(".(").setCheck(null);
        this.appendValueInput("d3").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setStyle("matplot_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// 일단 안쓰는듯?
Blockly.Blocks['matp_Ex'] = {
    init: function () {
        this.appendDummyInput().appendField("[그래프 크기 설정]");
        this.appendValueInput("d1").setCheck(null);
        this.appendValueInput("d2").appendField(".(").setCheck(null);
        this.appendValueInput("d3").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setStyle("matplot_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['matp_title'] = {
    init: function () {
        this.appendDummyInput().appendField("[그래프 제목]");
        this.appendValueInput("d1").setCheck(null);
        this.appendValueInput("d2").appendField(".set_title(").setCheck(null);
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, null);
        //this.setOutput(true, null);
        this.setStyle("matplot_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['matplotlib_3d_scatter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[3D 산포 그래프]");
        this.appendValueInput("x")
            .setCheck(null)
            .appendField("x");
        this.appendValueInput("y")
            .setCheck(null)
            .appendField("y");
        this.appendValueInput("z")
            .setCheck(null)
            .appendField("z");
        this.appendValueInput("title")
            .setCheck(null)
            .appendField("제목");
        this.appendValueInput("x_label")
            .setCheck(null)
            .appendField("X축");
        this.appendValueInput("y_label")
            .setCheck(null)
            .appendField("Y축");
        this.appendValueInput("z_label")
            .setCheck(null)
            .appendField("Z축");
        this.appendValueInput("s")
            .setCheck(null)
            .appendField("size");
        this.appendValueInput("c")
            .setCheck(null)
            .appendField("color");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("matplot_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['plt_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[plt.text]");
        this.appendValueInput("x")
            .setCheck(null)
            .appendField("x");
        this.appendValueInput("y")
            .setCheck(null)
            .appendField("y");
        this.appendValueInput("s")
            .setCheck(null)
            .appendField("텍스트 '");
        this.appendDummyInput()
            .appendField("'");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("matplot_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['annotation_b_box'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[AnnotationBbox]");
        this.appendValueInput("offsetbox")
            .setCheck(null)
            .appendField("offsetbox");
        this.appendValueInput("xy")
            .setCheck(null)
            .appendField("xy");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setStyle("matplot_blocks_sub");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['offset_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[OffsetImage]");
        this.appendValueInput("arr")
            .setCheck(null)
            .appendField("arr");
        this.appendValueInput("cmap")
            .setCheck(null)
            .appendField("cmap");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setStyle("matplot_blocks_sub");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['plt_matshow'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("[plt.matshow]");
        this.appendValueInput("arr")
            .setCheck(null)
            .appendField("arr");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("matplot_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
};