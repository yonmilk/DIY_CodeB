///////////////////////////////////////////////////////
// 2020-12-28 입출력 카테고리
///////////////////////////////////////////////////////

//입력블록
Blockly.Blocks['input1'] = {
  init: function () {
      
      this.appendDummyInput()
          .appendField(Blockly.Msg.TEXT_2_DATAINPUT);
      this.appendValueInput("content1").setCheck(null);        
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setStyle("text_blocks_sub");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};


//결과출력(텍스트 + 변수)
Blockly.Blocks['printtv'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Output/O2-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(Blockly.Msg.TEXT_1_PRINT);
        this.appendValueInput("content1").setCheck(null);
        this.appendValueInput("content2").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("text_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };
  
  //결과출력(f-문자열 텍스트)
Blockly.Blocks['printf'] = {
    init: function () {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Output/O3-logo.png", 25, 23, {
            alt: "*",
            flipRtl: "FALSE"
        })).appendField(Blockly.Msg.TEXT_1_PRINT);
        this.appendValueInput("content1").setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("text_blocks");
        this.setTooltip("");
        this.setHelpUrl("");
    }
  };

//결과출력(변수만 있는거)
Blockly.Blocks['printc'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Output/O1-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      })).appendField(Blockly.Msg.TEXT_1_PRINT);
      this.appendValueInput("content").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("text_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
//.appendField(new Blockly.FieldTextInput(""), "itdata1");

Blockly.Blocks['itdata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("파이썬코드");
    this.appendValueInput("itdata1").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("text_blocks");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['indata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("파이썬 부분 코드"), "indata1");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(255);
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['fd_open'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.FILE_OPEN_1)
            .appendField(new Blockly.FieldVariable("f"), "list")
            .appendField(" = open( ");
        this.appendValueInput("text")
            .setCheck(null);
            this.appendDummyInput().appendField(new Blockly.FieldDropdown([
              [
                Blockly.Msg.FILE_OPEN_2_1, "wr"
              ],
              [
                Blockly.Msg.FILE_OPEN_2_2, "r"
              ],
              [
                Blockly.Msg.FILE_OPEN_2_3, "w"
              ],
              [
                Blockly.Msg.FILE_OPEN_2_4, "a"
              ]
          ]), "set_menu");
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
              [
                Blockly.Msg.FILE_OPEN_3_1, "t"
              ],
              [
                Blockly.Msg.FILE_OPEN_3_2, "b"
              ],
              [
                Blockly.Msg.FILE_OPEN_3_3, ""
              ]
          ]), "set_menu2");
        this.appendDummyInput()
            .appendField(")");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("list_blocks");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };
  

Blockly.Blocks['fd_read'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.FILE_READ)
          .appendField(new Blockly.FieldVariable("data"), "list1")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("f"), "list2")
          .appendField(new Blockly.FieldDropdown([
            [
              ".read()", ".read()"
            ],
            [
              ".readline()", ".readline()"
            ],
            [
              ".readlines()", ".readlines()"
            ]
        ]), "set_menu");      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['fd_read'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.FILE_READ)
          .appendField(new Blockly.FieldVariable("data"), "list1")
          .appendField(" = ")
          .appendField(new Blockly.FieldVariable("f"), "list2")
          .appendField(new Blockly.FieldDropdown([
            [
              ".read()", ".read()"
            ],
            [
              ".readline()", ".readline()"
            ],
            [
              ".readlines()", ".readlines()"
            ]
          ]), "set_menu")
          .appendField(new Blockly.FieldDropdown([
            [
              "없음", ""
            ],
            [
            ".splitlines()", ".splitlines()"
            ]
      ]), "set_menu1");        
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['fd_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.FILE_WRITE)
            .appendField(new Blockly.FieldVariable("f"), "list")
            .appendField(new Blockly.FieldDropdown([
                [
                    ".write", ".write"
                ],
                [
                    ".writelines", ".writelines"
                ]
            ]), "set_menu"); 
        this.appendValueInput("text")
            .appendField("(")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("list_blocks");
        this.setTooltip("Create a list");
        this.setHelpUrl("");
    }
  };

Blockly.Blocks['fd_close'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.FILE_CLOSE)
          .appendField(new Blockly.FieldVariable("f"), "list")
          .appendField(".close( ");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};
Blockly.defineBlocksWithJsonArray([
// Gp mutator 사용 출력 21.01.02
{
    "type": "print_mutator",
    "message0": "출력 %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    style: "text_blocks",
    "tooltip": "",
    "helpUrl": ""
  }
]);


//컬럼추가 블록
Blockly.Blocks.print_mutator = {
  init: function () {  
    this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Output/O4-logo.png", 25, 23, {
      alt: "*",
      flipRtl: "FALSE"
  }))
    this.setStyle("list_blocks");
    this.itemCount_ = 1;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(["lists_create_with_item"]));
    //this.setOutput(!0, "Array");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.setStyle("text_blocks");
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
        0 == a && b.appendField("출력");
      }
    for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a), a++;
  },
};
Blockly.Blocks.lists_create_with_container = {
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField(
      "항목추가"
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour(Blockly.Msg.TEXTS_HUE);
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
    this.setColour(Blockly.Msg.TEXTS_HUE);
    this.contextMenu = !1;
  },
};
//



/////////////////////////////////////////////////
// Blockly.Blocks['qqq'] = {
//   init: function () {
//       this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Machine_Learning/M1-logo.png", 25, 23, {
//           alt: "*",
//           flipRtl: "FALSE"

//       })).appendField(Blockly.Msg.PANDAS_CSV2).appendField(new Blockly.FieldTextInput(""), "csv_url");
//       this.setInputsInline(true);
//       this.setOutput(true, null);
//       this.setColour(20);
//       this.setTooltip("");
//       this.setHelpUrl("");
//   }
// };
// var dynamicDropdownOptions_ = [];

// function addOptions(text) {
//     dynamicDropdownOptions_.push([text, text]);
// }

// function removeOptions() {
//     dynamicDropdownOptions_ = [];
// }

// ===== 기태 수정(로컬 파일 열기) 21.01.01======================================================================
Blockly.Blocks['fileopen'] = {
  init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.FILE_OPEN_1)
        .appendField(new Blockly.FieldTextInput("경로"), "file_path");
      //this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['fileopen2'] = {
  init: function () {
      this.appendDummyInput()
        .appendField("미디어불러오기")
        .appendField(new Blockly.FieldTextInput("경로"), "file_path");
      //this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['fileopen3'] = {
  init: function () {
      this.appendDummyInput()
        .appendField("웨이브불러오기")
        .appendField(new Blockly.FieldTextInput("경로"), "file_path");
      //this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
  }
};
  // ===== 기태 수정(로컬 파일 열기) ========================================================================================




  
  Blockly.Blocks['withs'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("with");
      this.appendValueInput("set0")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("as");
      this.appendValueInput("set1")
          .setCheck(null);
      this.appendStatementInput("in")
          .setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['map'] = {
    init: function() {
      this.appendValueInput("data_type")
          .setCheck(null)
          .appendField("입력 list(map(");
      this.appendValueInput("input")
          .setCheck(null)
          .appendField(" input(");
      this.appendValueInput("split")
          .setCheck(null)
          .appendField(").split(");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setStyle("text_blocks_sub");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['map3'] = {
    init: function() {
      this.appendValueInput("data_type")
          .setCheck(null)
          .appendField("list(map(");
      this.appendValueInput("input")
          .setCheck(null)
          .appendField(",");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_COLLECTION_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

// 2021.01.22 남지원
  Blockly.Blocks['csv_reader_writer'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("csv.")
          .appendField(new Blockly.FieldDropdown([["reader","reader"], ["writer","writer"]]), "DROP");
      this.appendValueInput("VAR")
          .setCheck(null)
          .appendField("(");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_LIST_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['import_pil_pilimg_imagefilter'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.IMPORT_PIL_PILIMG_IMAGEFILTER);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['import_pil_pilimg'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.IMPORT_PIL_PILIMG);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['import_pil_imagefilter'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.IMPORT_PIL_IMAGEFILTER);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  // 객체사용 
Blockly.Blocks['class_use3'] = {
  init: function () {
    this.appendValueInput("VAR1")
      .setCheck(null)
    this.appendValueInput("VAR2")
      .setCheck(null)
      .appendField(".");
    this.appendValueInput("3")
      .appendField("(")
    this.appendDummyInput()
      .appendField(')')
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(125);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

//확장
Blockly.Blocks['df_add_function2'] = {
  init: function () {
    this.appendValueInput("LIST").setCheck(null);
    this.appendDummyInput().appendField(".");
    this.appendValueInput("LIST2").setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    //this.setOutput(true, null);
    this.setColour(125);
    this.setTooltip("");
    this.setHelpUrl("");
}
};

Blockly.Blocks['comma'] = {
  init: function () {
    this.appendValueInput('v1').setCheck(null);
    this.appendDummyInput().appendField(',');
    this.appendValueInput('v2').setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(125);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};