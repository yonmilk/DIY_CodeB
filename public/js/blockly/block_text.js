///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

//""없는 문자
Blockly.Blocks['char_a_none'] = {
  init: function() { 
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_4_TEXT)
        .appendField(new Blockly.FieldTextInput(""), "char_A_none_val");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("text_blocks");
 this.setTooltip(""); 
 this.setHelpUrl("");
  }
};

// text_replace
//2020-12-04 양승국1 번역
Blockly.Blocks['text_replace'] = {
  init: function () {
      this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Text/T13-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }));
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_1_TEXTCHANGE);
      this.appendValueInput("TEXT").setCheck(null);
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_2_EXISTING);
      this.appendValueInput("A").setCheck(null);
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_3_CHANGE);
      this.appendValueInput("B").setCheck(null);
      this.appendDummyInput().appendField(Blockly.Msg.TEXT_14_4_END);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setStyle("text_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

// 문자다루기 2021.01.02 남지원
// Blockly.Blocks['text_editing'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("[문자다루기]")
//         .appendField(new Blockly.FieldVariable("item"), "VAR")
//         .appendField("에")
//     this.appendValueInput("INPUT").setCheck(null);    
//     this.appendDummyInput()
//         .appendField("를")
//         .appendField(new Blockly.FieldDropdown([["분리(split)","split"], ["개수(count)","count"], ["위치(find)","find"], ["삽입(join)","join"], ["교체(replace)","replace"], ["대문자로(upper)","upper"],["소문자로(lower)","lower"],["L공백제거(lstrip)","lstrip"],["R공백제거(rstrip)","rstrip"],["양쪽공백제거(strip)","strip"]]), "FUNC");
//     this.setInputsInline(true);
//     this.setOutput(true, null);
//       this.setStyle("text_blocks");
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };

 
// 문자 편집 2021.01.03 남지원
Blockly.Blocks['text_editing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S6-logo.png", 25, 23, {
         alt: "*",
         flipRtl: "FALSE"
     }))
        .appendField(Blockly.Msg.NUMSTR_EDIT_1);
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_5_CHANGE);
    this.appendValueInput("INPUT1")
        .setCheck(null);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_6_CHANGE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMSTR_EDIT_2,"split"], [Blockly.Msg.NUMSTR_EDIT_3,"join"], [Blockly.Msg.NUMSTR_EDIT_4,"replace"], [Blockly.Msg.NUMSTR_EDIT_5,"lstrip"],[Blockly.Msg.NUMSTR_EDIT_6,"rstrip"],[Blockly.Msg.NUMSTR_EDIT_7,"strip"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("text_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자 검색 2021.01.03 남지원
Blockly.Blocks['text_search'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S7-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField(Blockly.Msg.NUMSTR_SERACH_1);
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_5_CHANGE);
    this.appendValueInput("INPUT1")
        .setCheck(null);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_6_CHANGE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMSTR_SERACH_2,"find"], [Blockly.Msg.NUMSTR_SERACH_3,"count"], [Blockly.Msg.NUMSTR_SERACH_4,"index"], [Blockly.Msg.NUMSTR_SERACH_5,"rfind"],[Blockly.Msg.NUMSTR_SERACH_6,"rindex"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("text_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자 대소문자 2021.01.03 남지원
Blockly.Blocks['text_up_low'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S8-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField(Blockly.Msg.NUMSTR_Large_small_1);
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_5_CHANGE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMSTR_Large_small_2,"upper"], [Blockly.Msg.NUMSTR_Large_small_3,"lower"], [Blockly.Msg.NUMSTR_Large_small_4,"title"], [Blockly.Msg.NUMSTR_Large_small_5,"capitalize"],[Blockly.Msg.NUMSTR_Large_small_6,"swapcase"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("text_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자 정렬 2021.01.03 남지원
Blockly.Blocks['text_sort'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S9-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField(Blockly.Msg.NUMSTR_SORT_1);
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_5_CHANGE);
    this.appendValueInput("INPUT1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_6_CHANGE);
    this.appendValueInput("INPUT2")
        .setCheck(null)
        .appendField(Blockly.Msg.TEXT_14_8_CHANGE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_7_CHANGE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMSTR_SORT_2,"ljust"], [Blockly.Msg.NUMSTR_SORT_3,"rjust"], [Blockly.Msg.NUMSTR_SORT_4,"center"], [Blockly.Msg.NUMSTR_SORT_5,"expandtabs"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("text_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// 문자 대소문자 2021.01.03 남지원
Blockly.Blocks['text_query'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/img/Str/S10-logo.png", 25, 23, {
          alt: "*",
          flipRtl: "FALSE"
      }))
        .appendField(Blockly.Msg.NUMSTR_TrueFalse_1);
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEXT_14_3_CHANGE)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.NUMSTR_TrueFalse_2,"isalpha"], [Blockly.Msg.NUMSTR_TrueFalse_3,"isdigit"], [Blockly.Msg.NUMSTR_TrueFalse_4,"isalnum"], [Blockly.Msg.NUMSTR_TrueFalse_5,"isupper"],[Blockly.Msg.NUMSTR_TrueFalse_6,"islower"]]), "FUNC");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("text_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자 슬라이싱 2021.01.03 남지원
Blockly.Blocks['text_slice'] = {
  init: function() {
        this.appendDummyInput().appendField(new Blockly.FieldImage("/img/Str/S5-logo.png", 25, 23, {
              alt: "*",
              flipRtl: "FALSE"
        }))   
        .appendField(Blockly.Msg.BKY_NUMSTR_SLICING_1);
    this.appendValueInput("VAR")
        .setCheck(null);
    this.appendValueInput("INPUT1")
        .setCheck(null)
        .appendField("[");
        this.appendDummyInput()
        .appendField(":")   
    this.appendValueInput("INPUT2")
        .setCheck(null);  
        this.appendDummyInput()
        .appendField(":") 
    this.appendValueInput("INPUT3")
        .setCheck(null);   
    this.appendDummyInput()
        .appendField("]")
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setStyle("text_blocks_sub");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// 문자생성
Blockly.Blocks['create_text'] = {
  init: function () {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("/img/Str/S2-logo.png", 25, 23, { alt: "*", flipRtl: "FALSE" }));
      this.appendValueInput("VAR")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(' = "');
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField('"');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("text_blocks");
      this.setTooltip("Create a list");
      this.setHelpUrl("");
  }
};