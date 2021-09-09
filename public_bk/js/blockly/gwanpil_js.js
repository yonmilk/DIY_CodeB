//넘파이 라이브러리 
Blockly.JavaScript['gp'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    return code;
  };

  //임시
  Blockly.JavaScript['create_list_1'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['create_list_2'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['create_np_array_1'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble .JavaScript into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['visualization_library_1'] = function (block) {
    //var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportIo = "import io\n";
    var libImportBase64 = "import base64\n";
    var code = "\n";
    return code;
  };

  Blockly.JavaScript['visualization_library_2'] = function (block) {
    //var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportIo = "import io\n";
    var libImportBase64 = "import base64\n";
    var code = "\n";
    return code;
  };

  //pie_subplots
  Blockly.JavaScript['pie_subplots_1'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
  };

  Blockly.JavaScript['pie_subplots_2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
  };

  // Blockly.JavaScript['plt_text'] = function(block) {
  //   // TODO: Assemble JavaScript into code variable.
  //   var code = '\n';
  //   // TODO: Change ORDER_NONE to the correct strength.
  //   return [code, Blockly.JavaScript.ORDER_ATOMIC];;
  // };

  Blockly.JavaScript['pie_pcolor'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];;
  };

   Blockly.JavaScript['set_xticks'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };


  Blockly.JavaScript['set_yticks'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };

  Blockly.JavaScript['plt_setp'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var value_value = Blockly.JavaScript.valueToCode(block, 'REAL_VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    var value_number = Blockly.JavaScript.valueToCode(block, 'NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = '\n';
    return code;
  };


    /////////////////  Pcolor Demo

    Blockly.JavaScript['numpy_random_generator_1'] = function(block) {

        // TODO: Assemble Python into code variable.
        var code = '\n';
        return code;
      };
    
      Blockly.JavaScript['tick_params'] = function(block) {
        var code = '\n';
        return code;
      };

      Blockly.JavaScript['twinx'] = function(block) {
        var code = '\n';
        return code;
      };

      Blockly.JavaScript['plt_subplot'] = function(block) {
        var code = '\n';
        return code;
      };

      Blockly.JavaScript['plt_subplots'] = function(block) {
        var code = '\n';
        return code;
      };
      

    //////////////////////////////////////////////////////////////////////////////////////////
    //skimage
    //////////////////////////////////////////////////////////////////////////////////////////

    Blockly.JavaScript['skimage_draw'] = function (block) {
        var dropdown_dic = block.getFieldValue('DATA');
        var code = '\n'
      
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
      };

      Blockly.JavaScript['skimage_data_immunohistochemistry'] = function (block) {
        var dropdown_dic = block.getFieldValue('DATA');
        var code = '\n'
      
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
      };

      Blockly.JavaScript['skimage_segmentation'] = function (block) {
        var dropdown_dic = block.getFieldValue('DATA');
        var code = '\n'
      
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
      };



      ////////////// skimage 예제 

      Blockly.JavaScript['import_skimage_morphology'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = "\n";
        return code;
      };

      Blockly.JavaScript['import_axes3D'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = "\n";
        return code;
      };

      Blockly.JavaScript['matplotlib_main_figure'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = "\n";
        return code;
      };

      Blockly.JavaScript['pie_subplots_imshow'] = function(block) {
        // TODO: Assemble JavaScript into code variable.
        var code = '\n';
        // TODO: Change ORDER_NONE to the correct strength.
        return code;
      };

      Blockly.JavaScript['dic_menu1_2'] = function (block) {
        var variable_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);
        var dropdown_dic = block.getFieldValue('dic');
        code = '\n';
        return [code, Blockly.JavaScript.ORDER_ATOMIC];
      };

      Blockly.JavaScript['set_axis_off'] = function (block) {
        var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
        var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = `\n`;
        return code;
      };

      Blockly.JavaScript['writerows'] = function (block) {
        var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
        var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = `\n`;
        return code;
      };

      Blockly.JavaScript['voxels'] = function (block) {
        var var_text1 = Blockly.JavaScript.valueToCode(block, 'VAR', Blockly.JavaScript.ORDER_ATOMIC);
        var var_text2 = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
        var code = `\n`;
        return code;
      };

      Blockly.JavaScript['pandas_csv_read'] = function(block) {
        var code = '\n';
        return code;
      };

      Blockly.JavaScript['groupby_dataFrame_2'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['pandas_date_range'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['pandas_dataframe_2'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['df_resample'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['df_addfunction'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['create_zip'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['set_xyticklabels'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['set_xyticks'] = function (block) {
        var code = '\n';
        return [code, Blockly.JavaScript.ORDER_NONE];
      };

      Blockly.JavaScript['matplotlib_histo_graph_plt'] = function (block) {
        var code = "\n";
        return code;
      };

      Blockly.JavaScript['matplotlib_histo_bubble_plt'] = function (block) {
        var code = "\n";
        return code;
      };

      Blockly.JavaScript['matplotlib_axes3d_bubble_plt'] = function (block) {
        var code = "\n";
        return code;
      };