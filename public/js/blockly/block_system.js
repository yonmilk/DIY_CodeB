  Blockly.Blocks['os_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.OS_IMPORT); // "[임포트] os,날짜,시간,shutil"
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("os_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_data_remove'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("data디렉토리비우기"); 
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("os_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_data_listdir'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("data디렉토리확인하기"); 
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("os_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_data_download'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("파일다운로드"); 
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("os_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['time_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] time");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pyodide_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.PYODIDE_LIBRARY);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("pandas_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['csv_library'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(Blockly.Msg.FILE_LIBRARY)
        .appendField(
          new Blockly.FieldDropdown([
            ['csv', 'csv'],
            ['pickle', 'pickle'],
          ]),
          'list'
        );
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle('list_blocks');
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };


  Blockly.Blocks['datetime_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] datetime");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['shutil_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트] shutil");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pickle_dump'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Pickle")
        .appendField(Blockly.Msg.PICKLE_DUMP)
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['pickle_load'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("Pickle")
      .appendField(new Blockly.FieldVariable("data"), "list");
      this.appendDummyInput()
        .appendField(Blockly.Msg.PICKLE_LOAD)
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("list_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['os_getcwd'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("os")
        .appendField(Blockly.Msg.OS_GETCWD) //"현재경로 (getcwd)"
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_listdir'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("os")
        .appendField(Blockly.Msg.OS_LISTDIR) // "파일, 디렉터리목록 (listdir)"
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  Blockly.Blocks['os_mkdir'] = {
    init: function () {
      this.appendDummyInput()
        
        .appendField("디렉토리생성 (mkdir)")
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_dir'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("os")
          //.appendField("디렉토리삭제 (rmdir)")
          //.appendField("(");
      this.appendValueInput("va")
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OS_DIR_1,"os.mkdir"], [Blockly.Msg.OS_DIR_2,"os.rmdir"], [Blockly.Msg.OS_DIR_3,"os.chdir"]]), "directory")
          .setCheck(null)
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_chdir'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("os")
        .appendField("디렉토리변경 (chdir)")
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_remove'] = {
    init: function () {
      this.appendDummyInput()
      .appendField("os")
        .appendField(Blockly.Msg.OS_REMOVE) // "파일삭제 (remove)"
        .appendField("(");
      this.appendValueInput("va")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['os_rename'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("os")
        .appendField(Blockly.Msg.OS_RENAME) // "파일변경 (rename)"
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("os_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['shutil_file'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Shutil")
        //.appendField("파일복사 (copy)")
        //.appendField("(");
      this.appendValueInput("va1")
        .appendField(new Blockly.FieldDropdown([["파일복사 (copy) (","shutil.copy"], ["디렉토리복사 (copytree) (","shutil.copytree"], ["파일이동 (move) (","shutil.move"]]), "shutil")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['shutil_copytree'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Shutil")
        .appendField("디렉토리복사 (copytree)")
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['shutil_move'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Shutil")
        .appendField("파일이동 (move)")
        .appendField("(");
      this.appendValueInput("va1")
        .setCheck(null)
      this.appendDummyInput()
        .appendField(",")
      this.appendValueInput("va2")
        .setCheck(null)
      this.appendDummyInput()
         .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // datetime 객체 생성
  Blockly.Blocks['datetime_now'] = {
    init: function() {
      this.appendValueInput("variables")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_DATETIME_NOW); // "datetime 객체생성"
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("os_blocks");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 년도, 월, 일 시간, 분, 초, 요일
  Blockly.Blocks['now_method'] = {
    init: function() {
      this.appendValueInput("object")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(new Blockly.FieldDropdown([["년도","year"], ["월","month"], ["일","day"], ["시간","hour"], ["분","minute"], ["초","second"], ["요일","weekday()"]]), "datetime_module");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 현재 시각
  Blockly.Blocks['time_'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.OS_TIME_); // "현재시각 time.time()"
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 포맷지정 현재시각
  Blockly.Blocks['strftime_'] = {
    init: function() {
      this.appendValueInput("val1")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_STRFTIME_ + " time.strftime(");
      this.appendValueInput("val2")
          .setCheck(null)
          .appendField(",");
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 프로그램 일시 정지
  Blockly.Blocks['sleep'] = {
    init: function() {
      this.appendValueInput("val1")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_SLEEP); // "일시정지 (sleep)"
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("os_blocks");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // 파일 절대경로 반환
  Blockly.Blocks['abspath'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_ABSPATH); // "path 절대경로(abspath)"
      this.appendDummyInput();
      this.setInputsInline(true);
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
  
  // path의 기본이름 반환
  Blockly.Blocks['basename'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_BASENAME); // "path 기본이름(basename)"
      this.appendDummyInput();
      this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // path의 파일/디렉토리 경로 반환
  Blockly.Blocks['dirname'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_DIRNAME); // "path 경로(dirname)"
      this.appendDummyInput();
      this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // path의 존재유무
  Blockly.Blocks['exists'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_EXISTS); // "path 존재유무(exists)"
      this.appendDummyInput();
      this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  // path 존재 유무 리턴
  Blockly.Blocks['exists'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_EXISTS); // "path 존재유무(exists)"
      this.appendDummyInput();
      this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  // path 파일 크기 바이트 반환
  Blockly.Blocks['getsize'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_GETSIZE); // "path 파일크기(getsize)"
      this.appendDummyInput();
      this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };

  // path 디렉토리인지 아닌지, 파일, 절대경로인지
  Blockly.Blocks['is_dir_file'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("path")
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OS_IS_DIR_FILE_1,"isdir("], [Blockly.Msg.OS_IS_DIR_FILE_2,"isfile("], [Blockly.Msg.OS_IS_DIR_FILE_3,"isabs("]]), "what");
      this.appendDummyInput();
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  // path 디렉토리, 파일 분리
  Blockly.Blocks['path_split'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField(Blockly.Msg.OS_PATH_SPLIT);"path 디렉토리&파일 분리(split)"
      this.appendDummyInput();
      this.setInputsInline(true);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setOutput(true, null);
      this.setColour("%{BKY_OS_HUE}");
   this.setTooltip(""); 
   this.setHelpUrl("");
    }
  };