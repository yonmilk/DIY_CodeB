
  
  Blockly.Blocks['db_create'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_CREATE_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= CREATE TABLE");
      this.appendValueInput("d1").setCheck(null);
      this.appendDummyInput().appendField("(");
      this.appendValueInput("d2").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_insert'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_INSERT_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= INSERT INTO");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField("VALUES").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_select1'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_SELECT_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= SELECT ");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField("FROM").setCheck(null);
      this.appendValueInput("d3").appendField("WHERE").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_select2'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_SELECT_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= SELECT");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField("FROM").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_update'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_UPDATE_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= UPDATE");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField("SET").setCheck(null);
      this.appendValueInput("d3").appendField("WHERE").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_update2'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_UPDATE_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= UPDATE");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField("SET").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_delete'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_DELETE_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= DELETE FROM");
      this.appendValueInput("d1").setCheck(null);
      this.appendValueInput("d2").appendField("WHERE").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_delete2'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_DELETE_1)
          .appendField(new Blockly.FieldVariable("sql"), "list1")
          .appendField("= DELETE FROM");
      this.appendValueInput("d1").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  // 전우진

  Blockly.Blocks['sqlite_library'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_IMPORT_1 + "sqlite3");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_conn'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_CONNECT_1)
          .appendField(new Blockly.FieldVariable("con"), "list")
          .appendField("= sqlite3.connect(");
      this.appendValueInput("va")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_cur'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_CURSOR_1)
      .appendField(new Blockly.FieldVariable("cur"), "list")
      .appendField("=")
      .appendField(new Blockly.FieldVariable("con"), "list1")
      .appendField(".cursor()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['db_exec'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_EXECUTE_1)
          .appendField(new Blockly.FieldVariable("cur"), "list")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([
            ["execute", "execute"], 
            ["executemany", "executemany"]
           ]), "d1")
           .appendField("(");
      this.appendValueInput("va")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");    
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

    
  Blockly.Blocks['db_execM'] = {
    init: function () {
      this.appendDummyInput()
          .appendField(Blockly.Msg.DATABASE_EXECUTE_1)
          .appendField(new Blockly.FieldVariable("cur"), "list")
          .appendField(".")
          .appendField(new Blockly.FieldDropdown([
            ["executemany", "executemany"],
            ["execute", "execute"]
           ]), "d1")
           .appendField("(");
      this.appendValueInput("va1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(","); 
      this.appendValueInput("va2")
          .setCheck(null);    
      this.appendDummyInput()
          .appendField(")");      
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_commit'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_COMMIT_1)
      .appendField(new Blockly.FieldVariable("con"), "list1")
      .appendField(".commit()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_rollback'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_ROLLBACK_1)
      .appendField(new Blockly.FieldVariable("con"), "list1")
      .appendField(".rollback()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_fetchall'] = {
    init: function () {
      this.appendDummyInput()      
      .appendField(Blockly.Msg.DATABASE_FETCHALL_1)
      .appendField(new Blockly.FieldVariable("rows"), "list1")
      .appendField("=")
      .appendField(new Blockly.FieldVariable("cur"), "list2")
      .appendField(".fetchall()")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['db_fetchone'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_FETCHONE_1)
      .appendField(new Blockly.FieldVariable("row"), "list1")
      .appendField("=")
      .appendField(new Blockly.FieldVariable("cur"), "list2")
      .appendField(".fetchone()")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['db_fetch'] = {
    init: function () {
      this.appendDummyInput()      
      .appendField(Blockly.Msg.DATABASE_FETCHALL_1)
      .appendField(new Blockly.FieldVariable("rows"), "list1")
      .appendField("=")
      .appendField(new Blockly.FieldVariable("cur"), "list2")
      .appendField(".")
      .appendField(new Blockly.FieldDropdown([["fetchone()", "fetchone()"],["fetchall()", "fetchall()"]]),"NAME")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  

  Blockly.Blocks['db_fetchmany'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_FETCHALL_3)
      .appendField(new Blockly.FieldVariable("rows"), "list1")
      .appendField("=")
      .appendField(new Blockly.FieldVariable("cur"), "list2")
      .appendField(".fetchmany(")
      this.appendValueInput("va")
      .setCheck(null);
      this.appendDummyInput()
      .appendField(")"); 
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };


  Blockly.Blocks['db_close'] = {
    init: function () {
      this.appendDummyInput()
      .appendField(Blockly.Msg.DATABASE_CLOSE_1)
      .appendField(new Blockly.FieldVariable("con"), "list1")
      .appendField(".close()")
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("database_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

    //2020-12-29 양승국 블록 추가
    Blockly.Blocks['create_data1'] = {
      init: function () {
          this.appendValueInput("list")
              .setCheck(null)
              .appendField(Blockly.Msg.DATABASE_CREATE_DATA);
          this.appendValueInput("text")
              .setCheck(null)
              .appendField(" = (");
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setStyle("database_blocks");//"%{BKY_COLLECTION_HUE}");
          this.setTooltip("Create a list");
          this.setHelpUrl("");
      }
    };

    Blockly.Blocks['db_with'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("with");
        this.appendValueInput("set0")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(":");
        this.appendStatementInput("in")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setStyle("database_blocks");
     this.setTooltip("");
     this.setHelpUrl("");
      }
    };

// 2021.06.03 남지원 추가
// join블록
Blockly.Blocks['db_join'] = {
  init: function () {
    this.appendDummyInput()
        .appendField(Blockly.Msg.DATABASE_JOIN_1)
        .appendField(new Blockly.FieldVariable("sql"), "list1")
        .appendField("= SELECT ");
    this.appendValueInput("d1").setCheck(null);
    this.appendValueInput("d2").appendField("FROM").setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["INNER_JOIN", "INNER JOIN"],["LEFT_OUTER_JOIN", "LEFT_OUTER_JOIN"],["CROSS_JOIN", "CROSS JOIN"],["NATURAL_INNER_JOIN", "NATURAL INNER JOIN"],["NATURAL_LEFT_OUTER_JOIN", "NATURAL LEFT OUTER JOIN"]]),"JOIN");
    this.appendValueInput("d3")
        .setCheck(null);
    this.appendValueInput("d4").appendField("ON").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("database_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
