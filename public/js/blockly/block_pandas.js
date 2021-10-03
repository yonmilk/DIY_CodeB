///////////////////////////////////////////////////////
// 2020-09-03, Pandas Blocks 2학년 파트
///////////////////////////////////////////////////////

//var "%{BKY_PANDAS_HUE}" = "%{BKY_PANDAS_HUE}";

//2020-09-19 양승국 수정 -> 2021.01.23 남지원 이름변경
// Blockly.Blocks['pandas_library'] = {
//   init: function () {
//     this.appendDummyInput()
//         .appendField(Blockly.Msg.PANDAS_LIBRARY);
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setStyle("pandas_blocks");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// 판다스 임포트 수정
Blockly.Blocks['pandas_library'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_LIBRARY)
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg.PANDAS_LIBRARY_PANDAS, 'pandas as pd'],
          [Blockly.Msg.PANDAS_LIBRARY_PYODIDE, 'pyodide'],
        ]),
        'list'
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['load_csv'] = {
  init: function () {
    this.appendValueInput("pan_lod_var")
      .setCheck(null)
      .appendField("라이브러리 변수 : ");
    this.appendDummyInput();
    this.appendValueInput("LOAD")
      .setCheck("String")
      .appendField("csv파일 가져오기 : ");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 블록수정
Blockly.Blocks['fill_null_data'] = {
  init: function () {
    this.appendValueInput("DATA")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_FILL_NULL_DATA_1);
    this.appendDummyInput()
      .appendField("(")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_FILL_NULL_DATA_2, "1"], [Blockly.Msg.PANDAS_FILL_NULL_DATA_3, "2"], [Blockly.Msg.PANDAS_FILL_NULL_DATA_4, "3"], [Blockly.Msg.PANDAS_FILL_NULL_DATA_5, "4"], [Blockly.Msg.PANDAS_FILL_NULL_DATA_6, "5"]]), "NAME")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pyo_lib'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[pyodide라이브러리]");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-18 양승국 블록수정
// 정규화 
Blockly.Blocks['normal'] = {
  init: function () {
    this.appendValueInput("Normalization_data")
      .setCheck(null)
      .appendField(Blockly.Msg.PREPROCESSING_NORMAL_1);
    this.appendDummyInput()
      .appendField("(")
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.PREPROCESSING_NORMAL_2), "NAME")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("sklearn_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 헤더 삭제하기
Blockly.Blocks['deletehead'] = {
  init: function () {
    this.appendValueInput("delete_header")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("의 헤더 삭제하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 특정 행 삭제
//2020-09-20-양승국 수정
Blockly.Blocks['select_row_delete'] = {
  init: function () {
    this.appendValueInput("select_data")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_SELECT_ROW_DELETE_1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_SELECT_ROW_DELETE_2)
      .appendField(new Blockly.FieldTextInput("ex)0,1"), "select_drop");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_SELECT_ROW_DELETE_3, "1"], [Blockly.Msg.PANDAS_SELECT_ROW_DELETE_4, "2"]]), "srd_NAME")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 특정 행만 남기고 삭제
Blockly.Blocks['leave_row_data'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("의");
    this.appendValueInput("select_row")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("번째 행만 남기기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//특정 열만 남기고 삭제하기
Blockly.Blocks['leave_column_data'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("의");
    this.appendValueInput("select_column")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("번째 열만 남기기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//csv파일로 저장하기
Blockly.Blocks['save_data'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("을(를) CSV 파일로 저장하기");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//이미지 담기

// 



//리스트
//2020-09-19 양승국 
Blockly.Blocks['list'] = {
  init: function () {
    this.appendValueInput("input_data")
      .setCheck(null)
      .appendField("[리스트화] 변수");
    this.appendValueInput("out_data")
      .setCheck(null)
      .appendField("(변경 데이터");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//헤더 

Blockly.Blocks['header'] = {
  init: function () {
    this.appendValueInput("header_input_var")
      .setCheck(null)
      .appendField("[헤더블록] 변수");
    this.appendValueInput("header_output_var")
      .setCheck(null)
      .appendField("(변경 데이터");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 행 리스트
//2020-09-19 양승국
Blockly.Blocks['select_row_list'] = {
  init: function () {
    this.appendValueInput("list_data")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_SELECT_ROW_LIST_1);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_SELECT_ROW_LIST_2)
      .appendField(new Blockly.FieldTextInput("ex)0,1"), "list_val");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_SELECT_ROW_LIST_3, "1"], [Blockly.Msg.PANDAS_SELECT_ROW_LIST_4, "2"]]), "srd_NAME");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//몇번째 행 몇번쨰 열값
//2020-09-19 양승국 블록수정
Blockly.Blocks['select_row_column_value'] = {
  init: function () {
    this.appendValueInput("select_data")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_SELECT_ROW_COLUMN_VALUE_1);
    this.appendValueInput("select_row_locate")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_SELECT_ROW_COLUMN_VALUE_2);
    this.appendValueInput("select_column_locate")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_SELECT_ROW_COLUMN_VALUE_3)
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['row_count'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_ROW_COUNT_1);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_ROW_COUNT_2, ".index"],[Blockly.Msg.PANDAS_ROW_COUNT_3, ".columns"], [Blockly.Msg.PANDAS_ROW_COUNT_4, ".dtypes"],
        [Blockly.Msg.PANDAS_ROW_COUNT_5, ".values"], [Blockly.Msg.PANDAS_ROW_COUNT_6, ".axes"], [Blockly.Msg.PANDAS_ROW_COUNT_7, ".ndim"], [Blockly.Msg.PANDAS_ROW_COUNT_8, ".size"],
        [Blockly.Msg.PANDAS_ROW_COUNT_9, ".shape"], [Blockly.Msg.PANDAS_ROW_COUNT_10, ".empty"], [Blockly.Msg.PANDAS_ROW_COUNT_11, ".memory_usage"]]), "count")
      .appendField("(");
    this.appendValueInput("select_value2")
    .setCheck(null);
    this.appendDummyInput()
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// 프레임속성값
Blockly.Blocks['data_frame'] = {
  init: function () {
    this.appendValueInput('select_value').setCheck(null).appendField(Blockly.Msg.PANDAS_DATAFRAME_1);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          [Blockly.Msg.PANDAS_DATAFRAME_2, '.index'],
          [Blockly.Msg.PANDAS_DATAFRAME_3, '.columns'],
          [Blockly.Msg.PANDAS_DATAFRAME_4, '.dtypes'],
          [Blockly.Msg.PANDAS_DATAFRAME_5, '.values'],
          [Blockly.Msg.PANDAS_DATAFRAME_6, '.axes'],
          [Blockly.Msg.PANDAS_DATAFRAME_7, '.ndim'],
          [Blockly.Msg.PANDAS_DATAFRAME_8, '.size'],
          [Blockly.Msg.PANDAS_DATAFRAME_9, '.shape'],
          [Blockly.Msg.PANDAS_DATAFRAME_10, '.empty'],
        ]),
        'count'
      )
      .appendField('(');
    this.appendValueInput('select_value2').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setOutput(true, null);
    this.setColour('%{BKY_PANDAS_HUE}');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};


// 이미지 리스트
// Blockly.Blocks['image_list'] = {
//   init: function() {
//     this.appendValueInput("select_value")
//         .setCheck(null);
//     this.appendDummyInput()
//         .appendField("이미지 리스트");
//     this.setInputsInline(true);
//     this.setColour("%{BKY_PANDAS_HUE}");
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

// 라벨 개수
Blockly.Blocks['count_label'] = {
  init: function () {
    this.appendValueInput("select_value")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("라벨 개수");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-06 양승국
//2020-09-09 이성주 pandas_dataframe 컬럼 수정
//2020-09-19 양승국 블록 수정
Blockly.Blocks['pandas_dataframe'] = {
  init: function () {
    this.appendValueInput("df_va")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_DATAFRAME_1)
      .appendField(Blockly.Msg.PANDAS_DATAFRAME_2);
    this.appendValueInput("lst")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_DATAFRAME_3);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_DATAFRAME_4)
      .appendField(new Blockly.FieldTextInput("ex)'NAME','MATH'"), "col_name")
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
//2020-09-19 양승국 수정
Blockly.Blocks['csvdataframe_J'] = {
  init: function () {
    this.appendValueInput("input_var")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CSVDATAFRAME);
    this.appendValueInput("csv")
      .setCheck(null)
      .appendField("= pd.DataFrame(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-09 이성주 pandas_datalist 확장블록 추가
//2020-09-19 양승국 블록 수정
Blockly.Blocks['pandas_datalist'] = {
  init: function () {
    this.appendValueInput("frm_var")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_DATALIST);
    this.appendValueInput("data_lst")
      .setCheck(null)
      .appendField("(")
    this.appendDummyInput()
      .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//20.09.09 이성주 - 컬럼추가 블록
Blockly.Blocks.createColumn = {
  init: function () {  

    this.setStyle("list_blocks");
    this.itemCount_ = 3;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
  }, 
  mutationToDom: function () {
    var a = Blockly.utils.xml.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = a.newBlock("lists_create_with_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = a.newBlock("lists_create_with_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    var b = a.getInputTargetBlock("STACK");
    for (a = []; b;)
      a.push(b.valueConnection_),
        (b = b.nextConnection && b.nextConnection.targetBlock());
    for (b = 0; b < this.itemCount_; b++) {
      var c = this.getInput("ADD" + b).connection.targetConnection;
      c && -1 == a.indexOf(c) && c.disconnect();
    }
    this.itemCount_ = a.length;
    this.updateShape_();
    for (b = 0; b < this.itemCount_; b++)
      Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a;) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    this.itemCount_ && this.getInput("EMPTY")
      ? this.removeInput("EMPTY")
      : this.itemCount_ ||
      this.getInput("EMPTY") ||
      this.appendDummyInput("EMPTY")
        .appendField(
          Blockly.Msg.LISTS_CREATE_EMPTY_TITLE
        );
    for (var a = 0; a < this.itemCount_; a++)
      if (!this.getInput("ADD" + a)) {
        var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
        0 == a && b.appendField(Blockly.Msg.PANDAS_DATALIST_2);
      }
    for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a), a++;
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      "컬럼추가"
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.contextMenu = !1;
  },
};

//2020-09-19 양승국 수정
Blockly.Blocks['pandas_conversion'] = {
  init: function () {
    this.appendValueInput("pa_frm")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CONVERSION_1);
    this.appendValueInput("pa_cul")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CONVERSION_2);
    this.appendValueInput("pa_data")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CONVERSION_3);
    this.appendValueInput("pa_chidata")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CONVERSION_4)
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-19 양승국 
Blockly.Blocks['pandas_mis_del'] = {
  init: function () {
    this.appendValueInput("d1")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_MIS_DEL_1);
    this.appendDummyInput()
      .appendField(".")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_MIS_DEL_2, "drop"], [Blockly.Msg.PANDAS_MIS_DEL_3, "drop_duplicates"], [Blockly.Msg.PANDAS_MIS_DEL_4, "dropna"]]), "DEL_NAME")
      .appendField("(");
    this.appendValueInput("d2")
      .setCheck(null);
      // .appendField(Blockly.Msg.PANDAS_CONVERSION_4)
    this.appendDummyInput()
      .appendField(")");  
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-10 양승국 블록추가
Blockly.Blocks['selec_value_all'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_SELECT_VALUE_ALL);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-13 양승국 블록추가
Blockly.Blocks['iloc_range'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_ILOC_RANGE)
      .appendField(new Blockly.FieldTextInput("0"), "st_range");
    this.appendDummyInput()
      .appendField(":")
      .appendField(new Blockly.FieldTextInput("2"), "ed_range")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-16 양승국 블록추가
Blockly.Blocks['nm'] = {
  init: function () {
    this.appendValueInput("data")
      .setCheck(null);
    this.appendValueInput("anymore")
      .setCheck(null)
      .appendField("는");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-20 양승국
Blockly.Blocks['pandas_series'] = {
  init: function () {
    this.appendValueInput("ser_var")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_SERIES);
    this.appendValueInput("ser_data")
      .setCheck(null)
      .appendField("(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-16 양승국 블록추가
Blockly.Blocks.pandas_series_data = {
  init: function () {
    this.setStyle("list_blocks");
    this.itemCount_ = 2;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
  },
  mutationToDom: function () {
    var a = Blockly.utils.xml.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = a.newBlock("lists_create_with_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = a.newBlock("lists_create_with_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    var b = a.getInputTargetBlock("STACK");
    for (a = []; b;)
      a.push(b.valueConnection_),
        (b = b.nextConnection && b.nextConnection.targetBlock());
    for (b = 0; b < this.itemCount_; b++) {
      var c = this.getInput("ADD" + b).connection.targetConnection;
      c && -1 == a.indexOf(c) && c.disconnect();
    }
    this.itemCount_ = a.length;
    this.updateShape_();
    for (b = 0; b < this.itemCount_; b++)
      Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a;) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    this.itemCount_ && this.getInput("EMPTY")
      ? this.removeInput("EMPTY")
      : this.itemCount_ ||
      this.getInput("EMPTY") ||
      this.appendDummyInput("EMPTY")
        .appendField(
          Blockly.Msg.LISTS_CREATE_EMPTY_TITLE
        );
    for (var a = 0; a < this.itemCount_; a++)
      if (!this.getInput("ADD" + a)) {
        var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_RIGHT);
        0 == a && b.appendField(Blockly.Msg.PANDAS_SERIES_2);

      }
    for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a), a++;
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.MUTATOR_ADD_ITEM
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.contextMenu = !1;
  },
};

//2020-09-20 양승국 추가
// Blockly.Blocks['pandas_plus'] = {
//   init: function () {
//     this.appendValueInput("pl_v")
//       .setCheck(null)
//       .appendField("[열추가] 변수");
//     this.appendDummyInput()
//       .appendField("(추가컬럼")
//       .appendField(new Blockly.FieldTextInput("컬럼명"), "crt_col")
//     this.appendDummyInput()
//       .appendField("데이터1")
//       .appendField(new Blockly.FieldTextInput("0"), "fr_col")
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["/", "/"], ["*", "*"]]), "dat_fu")
//     this.appendDummyInput()
//       .appendField("데이터2")
//       .appendField(new Blockly.FieldTextInput("1"), "se_col")
//       .appendField(")");
//     this.setInputsInline(true);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour("%{BKY_PANDAS_HUE}");
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// 2020-10-15 정지현 열 추가 재 정의
Blockly.Blocks['df_add_col'] = {
  init: function() {
    this.appendValueInput("df")
        .setCheck(null)
        .appendField(Blockly.Msg.PANDAS_DF_ADD_COL_1);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PANDAS_DF_ADD_COL_2)
        .appendField(new Blockly.FieldTextInput(""), "added_col");
    this.appendValueInput("add_data")
        .setCheck(null)
        .appendField(Blockly.Msg.PANDAS_DF_ADD_COL_3);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-09-20 양승국 블록추가
Blockly.Blocks['pandas_merge'] = {
  init: function () {
    this.appendValueInput("mer_var")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_MERGE_1);
    this.appendValueInput("plus_data1")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_MERGE_2);
    this.appendValueInput("plus_data2")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_MERGE_3);
    this.appendValueInput("connet_way")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_MERGE_4);
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-17 양승국 블록추가
Blockly.Blocks['pandas_merge_oncol'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_MERGE_ONCOL_1)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.PANDAS_MERGE_ONCOL_2), "mer_NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-17 양승국 블록추가
Blockly.Blocks['pandas_merge_lron'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_MERGE_IRON_1)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.PANDAS_MERGE_IRON_2), "mer_LNAME");
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_MERGE_IRON_3)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.PANDAS_MERGE_IRON_2), "mer_RNAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


//20.09.19 이성주 GroupBy 블록 추가
Blockly.Blocks['groupby_series'] = {
  init: function () {
    this.appendValueInput("Series_or_Dataframe")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_GROUPBY_SERIES_1);
    this.appendDummyInput()
      .appendField("(");
    this.appendValueInput("colName")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_GROUPBY_SERIES_2)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_GROUPBY_SERIES_3, ".mean()"], [Blockly.Msg.PANDAS_GROUPBY_SERIES_4, ".count()"], [Blockly.Msg.PANDAS_GROUPBY_SERIES_5, ".sum()"], [Blockly.Msg.PANDAS_GROUPBY_SERIES_6, ".prod()"], [Blockly.Msg.PANDAS_GROUPBY_SERIES_7, ".min()"], [Blockly.Msg.PANDAS_GROUPBY_SERIES_8, ".max()"]]), "function")
      .appendField(")");
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



//2020-09-19 이성주
Blockly.Blocks.groupby_series_ = {
  init: function () {
    this.setStyle("list_blocks");
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(!0, "Array");
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.appendDummyInput();
    this.setColour("%{BKY_PANDAS_HUE}");
  },
  mutationToDom: function () {
    var a = Blockly.utils.xml.createElement("mutation");
    a.setAttribute("items", this.itemCount_);
    return a;
  },
  domToMutation: function (a) {
    this.itemCount_ = parseInt(a.getAttribute("items"), 10);
    this.updateShape_();
  },
  decompose: function (a) {
    var b = a.newBlock("lists_create_with_container");
    b.initSvg();
    for (
      var c = b.getInput("STACK").connection, d = 0;
      d < this.itemCount_;
      d++
    ) {
      var e = a.newBlock("lists_create_with_item");
      e.initSvg();
      c.connect(e.previousConnection);
      c = e.nextConnection;
    }
    return b;
  },
  compose: function (a) {
    var b = a.getInputTargetBlock("STACK");
    for (a = []; b;)
      a.push(b.valueConnection_),
        (b = b.nextConnection && b.nextConnection.targetBlock());

    for (b = 0; b < this.itemCount_; b++) {
      var c = this.getInput("ADD" + b).connection.targetConnection;
      c && -1 == a.indexOf(c) && c.disconnect();
    }
    this.itemCount_ = a.length;
    this.updateShape_();
    for (b = 0; b < this.itemCount_; b++)
      Blockly.Mutator.reconnect(a[b], this, "ADD" + b);
  },
  saveConnections: function (a) {
    a = a.getInputTargetBlock("STACK");
    for (var b = 0; a;) {
      var c = this.getInput("ADD" + b);
      a.valueConnection_ = c && c.connection.targetConnection;
      b++;
      a = a.nextConnection && a.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    this.itemCount_ && this.getInput("EMPTY")
      ? this.removeInput("EMPTY")
      : this.itemCount_ ||
      this.getInput("EMPTY") ||
      this.appendDummyInput("EMPTY")
        .appendField(
          Blockly.Msg.LISTS_CREATE_EMPTY_TITLE
        );
    for (var a = 0; a < this.itemCount_; a++)
      if (!this.getInput("ADD" + a)) {
        if (this.itemCount_ == 1)
          var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_LEFT); //b: 확장블록
        else
          var b = this.appendValueInput("ADD" + a).setAlign(Blockly.ALIGN_LEFT).appendField(",");
        //var c = this.appendField(",");
        0 == a && b.appendField(Blockly.Msg.PANDAS_GROUPBY_SERIES_9);
      }

    //for (; this.getInput("ADD" + a); ) this.removeInput("ADD" + a), a++;
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.MUTATOR_ADD_ITEM
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.contextMenu = !1;
  },
};
Blockly.Blocks.lists_create_with_item = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE
    );
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.contextMenu = !1;
  },
};

//2020-09-20 양승국 수정
Blockly.Blocks['pandas_concat'] = {
  init: function () {
    this.appendValueInput("cat_vl")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CONCAT_1);
    this.appendValueInput("data1")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CONCAT_2);
    this.appendValueInput("data2")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_CONCAT_3);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_CONCAT_4, ", axis = 0"], [Blockly.Msg.PANDAS_CONCAT_5, ", axis = 1"]]), "PLEUS_NAME");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//2020-09-21 양승국 추가 array[None, sasd]
Blockly.Blocks['pan_aray'] = {
  init: function () {
    this.appendValueInput("aray_array")
      .setCheck(null)
      .appendField("[인데스 가져오기] 배열");
    this.appendValueInput("ary_a1")
      .setCheck(null)
      .appendField("[");
    this.appendValueInput("ary_a2")
      .setCheck(null)
      .appendField(",");
    this.appendDummyInput()
      .appendField("]");
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

/////////////////////////////////////////////////////////////
// Pandas 2학년 파트 끝
/////////////////////////////////////////////////////////////

// array
Blockly.Blocks['array_select'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this {Blockly.Block}
   */
  init: function () {
    this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Collection/C18-logo.png", 25, 23, {
      alt: "*",
      flipRtl: "FALSE"}));
    this.appendDummyInput().appendField("["+Blockly.Msg.COLLECTION_18_GETINDEX +"]")
    this.appendValueInput("array_var").setCheck(null).appendField(Blockly.Msg.COLLECTION_18_ARRAY);
    this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setColour("%{BKY_COLLECTION_HUE}");
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
    this.setInputsInline(true);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function () {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function (workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      } 
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function () {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
        .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i).appendField("[")
          .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput().appendField("]");
        if (i == 0) {
          // input.appendField("array");
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};



// 컬럼명 변경 2020-10-15 정지현
Blockly.Blocks['df_col_rename'] = {
  init: function() {
    this.appendValueInput("df")
        .setCheck(null)
        .appendField(Blockly.Msg.PANDAS_DF_COL_RENAME_1);
    this.appendValueInput("origin_col")
        .setCheck("Number")
        .appendField(Blockly.Msg.PANDAS_DF_COL_RENAME_2);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PANDAS_DF_COL_RENAME_3)
        .appendField(new Blockly.FieldTextInput(""), "modified_col");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//2020-12-29 전우진 csv url 불러오기

Blockly.Blocks['csv_url'] = {
  init: function () {
    this.appendValueInput("d1")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(" = CSV URL")
      .appendField("(");
    this.appendValueInput("va")
      .setCheck(null);
    this.appendDummyInput()
       .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 2020.01.26 head() 남지원
Blockly.Blocks['pandas_head'] = {
  init: function() {
    this.appendValueInput("VAR")
        .appendField(Blockly.Msg.PANDAS_HEAD)
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["상위5개(head)","head"], ["하위5개(tail)","tail"], ["행열바꿈(T)","T"]]), "DROP");
    this.appendValueInput("NUM")
      .appendField(Blockly.Msg.PANDAS_HEAD_2)
      .appendField('(');
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
}
};

// 2020.01.26 head() 남지원
Blockly.Blocks['pandas_info'] = {
  init: function() {
    this.appendValueInput("VAR")
        .appendField(Blockly.Msg.PANDAS_INFO)
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["데이터통계(info)","info()"], ["통계정보조회(describe)","describe()"]]), "DROP");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
}
};

// 2020.01.26 pandas_astype() 남지원
Blockly.Blocks['pandas_astype'] = {
  init: function() {
    this.appendValueInput("VAR")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_ASTYPE);
    this.appendDummyInput()
      .appendField(".")
      .appendField(new Blockly.FieldDropdown([["astype","astype"], ["append","append"], ["replace","replace"]]), "DROP")
      .appendField("(");
    this.appendValueInput("INPUT")
      .setCheck(null);
      this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
} 
};

// 2020.01.26 pandas_unique() 남지원
Blockly.Blocks['pandas_unique'] = {
  init: function() {
    this.appendValueInput("VAR")
        .appendField(Blockly.Msg.PANDAS_UNIQUE)
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["고유값리스트(unique)","unique"], ["고유값개수(nunique)","nunique"],["리스트내 값확인(isin)","isin"],["값 개수(value_counts)","value_counts"]]), "DROP");
    this.appendValueInput("INPUT")
        .appendField("(")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");    
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


//////////////////////////////
/// 2021-01-27 양승국 판다스 블록 추가
///////////////////////////////////

//pandas_indexing
Blockly.Blocks['pandas_indexing'] = {
  init: function () {
    this.appendValueInput("d1").setCheck(null).appendField(Blockly.Msg.PANDAS_INDEXING);
      this.appendValueInput("LIST").appendField("[").setCheck(null);
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//iloc, loc
Blockly.Blocks['pandas_oc'] = {
  init: function () {
    this.appendValueInput("d0")
        .appendField(Blockly.Msg.PANDAS_OC)
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["인덱스(iloc)","iloc"],["컬럼명(loc)","loc"], ["컬럼명(at)","at"],["인덱스(iat)","iat"], ]), "DROP");
    this.appendValueInput("d1")
        .setCheck(null)
        .appendField("[");
    this.appendDummyInput()
      .appendField("]");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//items
Blockly.Blocks['pandas_items'] = {
  init: function () {
    this.appendValueInput('VAR').appendField(Blockly.Msg.PANDAS_ITEMS).setCheck(null);
    this.appendDummyInput().appendField(".items()");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//pandas_where
Blockly.Blocks['pandas_where'] = {
  init: function () {
    this.appendValueInput("d1").appendField(Blockly.Msg.PANDAS_WHERE).setCheck(null);
      this.appendValueInput("LIST").appendField(".where(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['groupby_dataFrame1'] = {
  init: function () {
    this.appendValueInput("d1")
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_1);
    this.appendDummyInput()
      .appendField(".groupby(");
    this.appendValueInput("d2")
      .setCheck(null);
    this.appendDummyInput()
      .appendField(") 통계함수")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_3,"mean"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_4,"count"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_5,"sum"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_6,"prod"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_7,"min"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_8,"max"], [Blockly.Msg.PANDAS_GROUPBY_DATAFRAME_10,"size"]]), "DROP")
      .appendField("");
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//pandas_transpose
Blockly.Blocks['pandas_transpose'] = {
  init: function () {
    this.appendValueInput("d1").appendField(Blockly.Msg.PANDAS_TRANSPOSE).setCheck(null);
      this.appendValueInput("LIST")
        .appendField(".transpose(")
        .setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_pivot'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_PIVOT)
    this.appendValueInput("VAR")
      .setCheck(null);
    this.appendValueInput("INPUT")
      .appendField(".피봇테이블(pivot_table)")
      .setCheck(null)
      .appendField("(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_get_dummies'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[가변수]")
    this.appendValueInput("VAR")
      .setCheck(null);
    this.appendValueInput("INPUT")
      .appendField(".가변수(get_dummies)")
      .setCheck(null)
      .appendField("(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_multiIndex'] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.PANDAS_MULTIINDEX).appendField(new Blockly.FieldVariable("df"), "list")
        .appendField("= pd.MultiIndex.from_tuples(");
    this.appendValueInput("d1")
        .setCheck(null);
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_stack'] = {
  init: function () {
    this.appendValueInput("d1")
        .appendField(Blockly.Msg.PANDAS_STACK)
        .setCheck(null);
    this.appendDummyInput().appendField(".")
        .appendField(new Blockly.FieldDropdown([["스택(stack)","stack"], ["스택해제(unstack)","unstack"]]), "DROP");
    this.appendValueInput("d2")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
      .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_cat'] = {
  init: function () {
    this.appendValueInput("d1")
        .appendField(Blockly.Msg.PANDAS_CAT)
        .setCheck(null);
    this.appendDummyInput().appendField(".cat.categories");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_cat_set'] = {
  init: function () {
    this.appendValueInput("d1")
        .appendField(Blockly.Msg.PANDAS_CAT_SET)
        .setCheck(null);
    this.appendDummyInput().appendField(".cat.set_categories(");
    this.appendValueInput("d2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_sub'] = {
  init: function () {
    this.appendValueInput("d1")
        .appendField(Blockly.Msg.PANDAS_SUB)
        .setCheck(null);
    this.appendDummyInput().appendField(".sub(");
    this.appendValueInput("d2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_drop'] = {
  init: function () {
    this.appendValueInput("d1")
        .appendField(Blockly.Msg.PANDAS_DROP)
        .setCheck(null);
    this.appendDummyInput().appendField("=");
    this.appendValueInput("d2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".drop(" + Blockly.Msg.PANDAS_DROP1);
    this.appendValueInput("d3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PANDAS_DROP2);  
    this.appendValueInput("d4")
        .setCheck(null); 
    this.appendDummyInput()
        .appendField(")");                  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_drop_duplicates'] = {
  init: function () {
    this.appendValueInput("d1")
        .appendField(Blockly.Msg.PANDAS_DROP_DUPLICATES)
        .setCheck(null);
    this.appendDummyInput().appendField("=");
    this.appendValueInput("d2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".drop_duplicates(");
    this.appendValueInput("d3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");                  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['pandas_dropna'] = {
  init: function () {
    this.appendValueInput("d1")
        .appendField(Blockly.Msg.pandas_dropna)
        .setCheck(null);
    this.appendDummyInput().appendField("=");
    this.appendValueInput("d2")
        .setCheck(null);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([["채우기(fillna)","fillna"], ["행삭제(dropna)","dropna"]]), "DROP");
    this.appendValueInput("d3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");                  
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("pandas_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



// 판다스, 데이터 통계
Blockly.Blocks['block_sum_min'] = {
  init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.PANDAS_SUM_MIN);
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".")
        .appendField(new Blockly.FieldDropdown([["합(sum)","sum"],["갯수(count)","count"],["평균(mean)","mean"],["분선(std)", "std"],["곱(prod)","prod"],["중앙값(median)","median"],["최소값(min)","min"],["최대값(max)","max"],["인덱스최소값(idxmin)","idxmin"],["인덱스최대값(idxmax)","idxmax"] ]), "DROP")
        .appendField("(");
    this.appendValueInput("INPUT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
 }
};


// 데이터누적통계
Blockly.Blocks['block_cumsum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[데이터누적통계]")
        //.appendField(new Blockly.FieldVariable("df"), "VAR")
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["누적합(cumsum)","cumsum"],["누적곱(cumprod)","cumprod"],["누적최소값(cummin)","cummin"],["누적최대값(cummax)","cummax"]]), "DROP")
        .appendField("(");
    this.appendValueInput("INPUT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
 }
};

// 판다스 사칙연산
Blockly.Blocks['block_calculations'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("[사칙연산]")
        .appendField(new Blockly.FieldVariable("df"), "VAR")
        .appendField(".");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["더하기(add)","add"],["빼기(sub)","sub"],["곱하기(mul)","mul"],["나누기(div)","div"]]), "DROP")
        .appendField("(");
    this.appendValueInput("INPUT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
 }
};

// 판다스 정렬
Blockly.Blocks['pandas_sort'] = {
  init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.PANDAS_SORT1);
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([["인덱스(sort_index)","sort_index"],["값(sort_values)","sort_values"],["상위n개(nlargest))","nlargest"],["하위n개(nsmallest)","nsmallest"]]), "DROP")
      this.appendValueInput("INPUT")
          .setCheck(null)
          .appendField("( 컬럼명 ");
      this.appendDummyInput()
          .appendField(", ")
          .appendField(new Blockly.FieldDropdown([["오름차순(True)","True"],["내림차순(False)","False"]]), "DROP2")
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

// 판다스 상관관계
Blockly.Blocks['pandas_corr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PANDAS_CORR);
    this.appendValueInput("INPUT1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["두변수간(corr)","corr"], ["모든변수간(corrwith)","corrwith"],["두변수공분산(cov)","cov"]]), "DROP");
    this.appendValueInput("INPUT2")
        .appendField("(")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");        
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// 판다스 난,널 판단
// 결측치 판단
Blockly.Blocks['pandas_nanull'] = {
  init: function() {
  this.appendValueInput('VAR')
        .appendField(Blockly.Msg.PANDAS_NANULL)
            .setCheck(null);
    this.appendDummyInput()
          .appendField(".")
        .appendField(new Blockly.FieldDropdown([["nan인지(isna)","isna"],["nan아닌지(notna)","notna"],["nan버리기(dropna)","dropna"],["null인지(isnull)","isnull"],["null아닌지(notnull)","notnull"]]), "DROP")
        .appendField("(");
    this.appendValueInput("INPUT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


//df_merge 병합
Blockly.Blocks['df_merge'] = {
  init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.PANDAS_BB);
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(".");
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
            "merge", "merge"
          ],
          [
            "concat", "concat"
          ],
          [
            "join", "join"
          ],
          [
            "append", "append"
          ],
          [
            "copy", "copy"
          ],
      ]), "DROP");
      this.appendValueInput("INPUT").setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


//df_reindex
Blockly.Blocks['df_reindex'] = {
  init: function () {
    this.appendValueInput("VAR")
        .setCheck(null)
        .appendField(Blockly.Msg.PANDAS_REINDEX);
    this.appendDummyInput()
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([
          [
            "컬럼명변경(rename)", "rename"  
          ],
          [
            "인덱스재설정(reindex)", "reindex"
          ],
          [
            "인덱스초기화(reset_index)", "reset_index"
          ],
          [
            "인덱스세팅(set_index)", "set_index"
          ]
          ]), "DROP");
        this.appendValueInput("INPUT")
        .setCheck(null)
        .appendField("(");
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};



//sr.unique()
Blockly.Blocks['df_unique'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[unique]");
    this.appendDummyInput()
        .appendField(".unique( )");  
    this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.is_in()
Blockly.Blocks['df_is_in'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[is_in]");
      this.appendValueInput("LIST").appendField(".isin(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.tolist()
Blockly.Blocks['df_tolist'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[tolist]")
    this.appendDummyInput().appendField(".tolist( )");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//sr.name
Blockly.Blocks['df_name'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[name]")
    this.appendDummyInput().appendField(".name");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
//////////////////////////////////////////////////////////////////////////시리즈
//df_series1
Blockly.Blocks['df_series1'] = {
  init: function () {
      this.appendValueInput("VAR").appendField("[Series]");
      this.appendValueInput("LIST").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


//df_series2
Blockly.Blocks['df_series2'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[Series]");
      this.appendValueInput("LIST").appendField("[").setCheck(null);
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_series3
Blockly.Blocks['df_series3'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[Series]");
      this.appendValueInput("LIST").appendField("[").setCheck("Boolean");
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_series3
Blockly.Blocks['df_series3'] = {
  init: function () {
    this.appendValueInput("VAR").appendField("[Series]");
      this.appendValueInput("LIST").appendField("[").setCheck("Boolean");
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

// 시리즈 메소드 1
Blockly.Blocks['df_series_method_1'] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.PANDAS_SERIES_METHOD);
    this.appendValueInput('value1').setCheck(null);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['포함여부(isin)', 'isin'],
          ['값확인(equals)', 'equals'],
          ['값얻기(values)', 'values'],
          ['중복제거(drop_duplicates)', 'drop_duplicates'],
        ]),
        'list'
      )
      .appendField('(');
    this.appendValueInput('value2').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle('pandas_blocks_sub');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// 시리즈 메소드 2
Blockly.Blocks['df_series_method_2'] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.PANDAS_SERIES_METHOD);
    this.appendValueInput('value1').setCheck(null);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['연결(append)', 'append'],
          ['교체(replace)', 'replace'],
          ['정렬(sort_values)', 'sort_values'],
        ]),
        'list'
      )
      .appendField('(');
    this.appendValueInput('value2').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle('pandas_blocks_sub');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// 시리즈 메소드 3
Blockly.Blocks['df_series_method_3'] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.PANDAS_SERIES_METHOD);
    this.appendValueInput('value1').setCheck(null);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['최대값(max)', 'max'],
          ['최소값(min)', 'min'],
          ['중간값(median)', 'median'],
          ['요약(describe)', 'describe'],
        ]),
        'list'
      )
      .appendField('(');
    this.appendValueInput('value2').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle('pandas_blocks_sub');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// 시리즈 메소드 4
Blockly.Blocks['df_series_method_4'] = {
  init: function () {
    this.appendDummyInput().appendField(Blockly.Msg.PANDAS_SERIES_METHOD);
    this.appendValueInput('value1').setCheck(null);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ['프레임변환(to_frame)', 'to_frame'],
          ['리스트변환(to_list)', 'to_list'],
        ]),
        'list'
      )
      .appendField('(');
    this.appendValueInput('value2').setCheck(null);
    this.appendDummyInput().appendField(')');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle('pandas_blocks_sub');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};


////////////////////////////
////// 2021-04-21
///////////////////////////

// 판다스 난,널 판단
Blockly.Blocks['pandas_numpy'] = {
  init: function() {
    this.appendValueInput('VAR')
        .appendField(Blockly.Msg.PANDAS_NUMPY)
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".to_numpy(");
    this.appendValueInput("INPUT")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

// 2021.06.09 지원 
// 인덱싱
Blockly.Blocks['pandas_read_sql'] = {
  init: function () {
    this.appendValueInput("d1").setCheck(null).appendField("[sql읽기]");
    this.appendValueInput("SQL").appendField(" = read.sql(").setCheck(null);
    this.appendValueInput("CON").setCheck(null);
    this.appendDummyInput().appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_PANDAS_HUE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// pd.read 통합
Blockly.Blocks['pandas_read'] = {
  init: function () {
    this.appendValueInput('d1').setCheck(null);
    this.appendDummyInput()
      .appendField('= pd.read_')
      .appendField(
        new Blockly.FieldDropdown([
          ['csv', '_csv'],
          ['pickle', '_pickle'],
          ['sql', '_sql'],
        ]),
        'list'
      );
    this.appendValueInput('va').setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('pandas_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// pd.to
Blockly.Blocks['pandas_to'] = {
  init: function () {
    this.appendValueInput('df')
      .setCheck(null)
    this.appendDummyInput()
      .appendField('= pd.to_')
      .appendField(
        new Blockly.FieldDropdown([
          ['datetime', '_datetime'],
          ['timedelta', '_timedelta'],
          ['numeric', '_numeric'],
        ]),
        'list'
      );
    this.appendValueInput('va').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('pandas_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// df.to
Blockly.Blocks['dataframe_to'] = {
  init: function () {
    this.appendValueInput('df')
      .appendField('[변환]')  
      .setCheck(null);
    this.appendDummyInput()
    .appendField('.to_')
    .appendField(
      new Blockly.FieldDropdown([
        ['csv', 'csv'],
        ['pickle', 'pickle'],
        ['numpy', 'numpy'],
        ['html', 'html'],
        ['sql', 'sql'],
        // 추가 옵션들 - 교수님이 필요하다 하실 때 주석 해제 (찡긋)
        // ['period', 'period'],
        // ['timestamp', 'timestamp'],
        // ['parquet', 'parquet'],
        // ['hdf', 'hdf'],
        // ['dict', 'dict'],
        // ['excel', 'excel'],
        // ['json', 'json'],
        // ['feather', 'feather'],
        // ['latex', 'latex'],
        // ['stata', 'stata'],
        // ['gbq', 'gbq'],
        // ['records', 'records'],
        // ['string', 'string'],
        // ['clipboard', 'clipboard'],
        // ['markdown', 'markdown'],
      ]),
      'list'
    );
    this.appendValueInput('va').setCheck(null);
    this.setOutput(true, null);
    this.setStyle('pandas_blocks_sub');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// df outer (df 박혀있는 블록)
Blockly.Blocks['dataframe_outer'] = {
  init: function () {
    this.appendValueInput('df').setCheck(null);
    this.appendDummyInput().appendField('=');
    this.appendValueInput('df_to').setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('pandas_blocks');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

// 날짜2 date dt
Blockly.Blocks['pandas_date_dt'] = {
  init: function () {
    this.appendValueInput('var')
      .setCheck(null)
      .appendField(Blockly.Msg.PANDAS_DATE_RANGE);
    this.appendDummyInput()
      .appendField('.dt.')
      .appendField(
        new Blockly.FieldDropdown([
          ['년(year)', 'year'],
          ['월(month)', 'month'],
          ['일(day)', 'day'],
          ['시(hour)', 'hour'],
          ['분(minute)', 'minute'],
          ['초(second)', 'second'],
          ['요일 정수(dayofweek)', 'dayofweek'],
          ['요일 문자열(day_name())', 'day_name()'],
        ]),
        'list'
      )
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('%{BKY_PANDAS_HUE}');
    this.setTooltip('');
    this.setHelpUrl('');
  },
};