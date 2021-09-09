//넘파이 라이브러리 
Blockly.Python['gp'] = function(block) {
    // TODO: Assemble Python into code variable. 
    var code = 'import matplotlib.pyplot as plt\n';
    return code;
  };

//임시
Blockly.Python['create_list_1'] = function (block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + ' = [' + value_text + ']\n';
    return code;
  };

  Blockly.Python['create_list_2'] = function (block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + ' = [' + value_text + ']\n';
    return code;
  };

  Blockly.Python['create_np_array_1'] = function (block) {
    var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = variable_list + ' = np.array(' + value_text + ')\n';
    return code;
  };

   //라이브러리 임포트    
   Blockly.Python['visualization_library_1'] = function(block) {
    //var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportIo = "import io\n";
    var libImportBase64 = "import base64\n";
    var code = "import matplotlib.pyplot as plt\n";
    return code;
  };

   //라이브러리 임포트    
   Blockly.Python['visualization_library_2'] = function(block) {
    //var value_name = Blockly.Python.valueToCode(block, 'lib_var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var libImportPlt = "import matplotlib.pyplot as plt\n";
    var libImportLogNorm = "from matplotlib.colors import LogNorm\n";
    var code = "import matplotlib.pyplot as plt\n" + libImportLogNorm;
    return code;
  };

  //pie_subplots
  Blockly.Python['pie_subplots_1'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".imshow("+ value_name2 +")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };
  
  Blockly.Python['pie_subplots_2'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".get_xticklabels()\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };

  // Blockly.Python['plt_text'] = function(block) {
  //   // TODO: Assemble Python into code variable.
  //   var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
  //   var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
  // // TODO: Assemble Python into code variable.
  //   var code =  value_name1 + ".text("+ value_name2 +")\n";
  //   // TODO: Change ORDER_NONE to the correct strength.
  //   return [code, Blockly.Python.ORDER_ATOMIC];;
  // };

  Blockly.Python['pie_pcolor'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
    var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
    
  // TODO: Assemble Python into code variable.
    var code =  value_name1 + ".pcolor("+ value_name2 +")";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

Blockly.Python['set_xticks'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_xticks(" + value_value+')\n';
    return code;
  };

  Blockly.Python['set_yticks'] = function(block) {
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_number + ".set_yticks(" + value_value+')\n';
    return code;
  };

  Blockly.Python['plt_setp'] = function(block) {
    var value_value_0 = Blockly.Python.valueToCode(block, 'REAL_VALUE_0', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
    var value_value_2 = Blockly.Python.valueToCode(block, 'REAL_VALUE_2', Blockly.Python.ORDER_ATOMIC);

    // TODO: Assemble Python into code variable.
    var code = value_value_0 + ".setp(" + value_value + ", "+value_value_2+")\n";
    return code;
  };

    /////////////////  Pcolor Demo

    Blockly.Python['numpy_random_generator_1'] = function(block) {
        var dropdown_numpy_random_generator_opt = block.getFieldValue('numpy_Random_generator_opt');
        var value_numpy_random_generator_val = Blockly.Python.valueToCode(block, 'numpy_Random_generator_val', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code;
        switch (dropdown_numpy_random_generator_opt){
          case "numpy_Random_generator_seed": 
          code = `np.random.seed(${value_numpy_random_generator_val})`;  
          break; 
      
          case "numpy_Random_generator_get_state": 
          code = `np.random.get_state(${value_numpy_random_generator_val})`;  
          break;
      
          case "numpy_Random_generator_set_state":
          code = `np.random.set_state(${value_numpy_random_generator_val})`;  
          break;
      
          default:
          break;
        }
        // TODO: Change ORDER_NONE to the correct strength.
        return code + "\n";
      };
    
      Blockly.Python['tick_params'] = function(block) {
        var value_value = Blockly.Python.valueToCode(block, 'REAL_VALUE', Blockly.Python.ORDER_ATOMIC);
        var value_number = Blockly.Python.valueToCode(block, 'NUMBER', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = value_number + ".tick_params(" + value_value+')\n';
        return code;
      };

      Blockly.Python['twinx'] = function(block) {
        // TODO: Assemble Python into code variable.
        var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
        
      // TODO: Assemble Python into code variable.
        var code =  value_name1 + ".twinx( )";
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      };


      //plt_subplots
Blockly.Python['plt_subplot'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_a1 = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
    var value_a2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
    var code = value_a1 + ".subplot("+value_a2+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };
    
  //plt_subplots
  Blockly.Python['plt_subplots'] = function(block) {
    // TODO: Assemble Python into code variable.
    var value_a1 = Blockly.Python.valueToCode(block, 'name', Blockly.Python.ORDER_ATOMIC);
    var value_a2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
    var code = value_a1 + ".subplots("+value_a2+")\n";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];;
  };

    //////////////////////////////////////////////////////////////////////////////////////////
    //skimage
    //////////////////////////////////////////////////////////////////////////////////////////

    Blockly.Python['skimage_draw'] = function (block) {
        var dropdown_dic = block.getFieldValue('DATA');
        var value_a1 = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
        var code = `data.${dropdown_dic}(${value_a1})`;
        
        return [code, Blockly.Python.ORDER_ATOMIC];
      };

      Blockly.Python['skimage_data_immunohistochemistry'] = function (block) {
        var value_a1 = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
        var code = `data.immunohistochemistry(${value_a1})`;
        
        return [code, Blockly.Python.ORDER_ATOMIC];
      };

      Blockly.Python['skimage_segmentation'] = function (block) {
        var value_a1 = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
        var code = `segmentation(${value_a1})`;
        
        return [code, Blockly.Python.ORDER_ATOMIC];
      };







      ////////////// skimage 예제 

      Blockly.Python['import_skimage_morphology'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = "from skimage.morphology import (square, rectangle, diamond, disk, cube, octahedron, ball, octagon, star)\n";
        return code;
      };

      Blockly.Python['import_axes3D'] = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = "from mpl_toolkits.mplot3d import Axes3D\n";
        return code;
      };

      Blockly.Python['matplotlib_main_figure'] = function(block) {
        var value_matplotlib_main_cols = Blockly.Python.valueToCode(block, 'matplotlib_main_cols', Blockly.Python.ORDER_ATOMIC);
        var value_matplotlib_main_rows = Blockly.Python.valueToCode(block, 'matplotlib_main_rows', Blockly.Python.ORDER_ATOMIC);
        var value_matplotlib_main_screen_size_width = Blockly.Python.valueToCode(block, 'matplotlib_main_screen_size_width', Blockly.Python.ORDER_ATOMIC);
        var value_matplotlib_main_screen_size_height = Blockly.Python.valueToCode(block, 'matplotlib_main_screen_size_height', Blockly.Python.ORDER_ATOMIC);

        Check_matplotlib_user_input(value_matplotlib_main_cols,value_matplotlib_main_rows);  
  
  
        var code =`fig = plt.figure(figsize=(${value_matplotlib_main_cols}, ${value_matplotlib_main_rows}))\n`; 
         return code;   
      };  

      Blockly.Python['pie_subplots_imshow'] = function(block) {
        // TODO: Assemble Python into code variable.
        var value_name1 = Blockly.Python.valueToCode(block, 'name1', Blockly.Python.ORDER_ATOMIC);
        var value_name2 = Blockly.Python.valueToCode(block, 'name2', Blockly.Python.ORDER_ATOMIC);
      // TODO: Assemble Python into code variable.
        var code =  value_name1 + ".imshow("+ value_name2 +")\n";
        // TODO: Change ORDER_NONE to the correct strength.
        return code;
      };

      Blockly.Python['dic_menu1_2'] = function (block) {
        var variable_list =  Blockly.Python.valueToCode(block, 'list', Blockly.Python.ORDER_ATOMIC);
        var variable_list2 =  Blockly.Python.valueToCode(block, 'list2', Blockly.Python.ORDER_ATOMIC);
        var code = variable_list + '.shape['+variable_list2+']';

        return [code, Blockly.Python.ORDER_ATOMIC];
      };

      Blockly.Python['voxels'] = function (block) {
        var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
        var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${var_text1}.voxels(${var_text2})\n`;
        return code;
      };

      Blockly.Python['set_axis_off'] = function (block) {
        var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
        var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${var_text1}.set_axis_off(${var_text2})\n`;
        return code;
      };

      Blockly.Python['writerows'] = function (block) {
        var variable_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
        var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_var + '.writerows(' + value_text + ')\n';
        return code;
      };

      Blockly.Python['pandas_csv_read'] = function (block) {
        var value_name1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
        var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble JavaScript into code variable.
      
        var code = `${value_name1} = pd.read_csv(${value_name})\n`;
        // TODO: Change ORDER_NONE to the correct strength.
        return code ;
      };

      Blockly.Python['groupby_dataFrame_2'] = function (block) {
        var value_series_or_dataframe = Blockly.Python.valueToCode(block, 'Series_or_Dataframe', Blockly.Python.ORDER_ATOMIC);
        var value_colname = Blockly.Python.valueToCode(block, 'colName', Blockly.Python.ORDER_ATOMIC);
        var value_indexname = Blockly.Python.valueToCode(block, 'indexName', Blockly.Python.ORDER_ATOMIC);
        var dropdown_function = block.getFieldValue('function');
        // TODO: Assemble Python into code variable.
        var code = value_series_or_dataframe + '.groupby(' + value_colname + ')[' + value_indexname + ']' + dropdown_function;
        return [code, Blockly.Python.ORDER_NONE];
      };

      Blockly.Python['pandas_date_range'] = function(block) {
        var value_var = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
        var value_input = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        var dropdown_drop = block.getFieldValue('DROP');
        // TODO: Assemble Python into code variable.
        var code = `${value_var}.${dropdown_drop}(${value_input})`;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      };

      Blockly.Python['pandas_dataframe_2'] = function (block) {
        var value_df_va = Blockly.Python.valueToCode(block, 'df_va', Blockly.Python.ORDER_ATOMIC);
        var text_name = Blockly.Python.valueToCode(block, 'col_name', Blockly.Python.ORDER_ATOMIC);
        var code = `${value_df_va} = pd.DataFrame(${text_name})\n`;
        // TODO: Change ORDER_NONE to the correct strength.
        return code;
      };

      Blockly.Python['df_resample'] = function(block) {
        var variable_list = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
        var value_name = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = value_name + ".resample(" + variable_list + ")";
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      }; 

      Blockly.Python['df_add_function'] = function(block) {
        var value_name = Blockly.Python.valueToCode(block, 'LIST', Blockly.Python.ORDER_ATOMIC);
        var value_name2 = Blockly.Python.valueToCode(block, 'LIST2', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = value_name + "." + value_name2;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      }; 

      Blockly.Python['create_zip'] = function(block) {
        var value_data_type = Blockly.Python.valueToCode(block, 'data_type', Blockly.Python.ORDER_ATOMIC);
        var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        //var code = ;
        return ['zip(' + value_data_type + ')', Blockly.Python.ORDER_ATOMIC];
      };

      Blockly.Python['set_xyticklabels'] = function (block) {
        var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
        var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        var var_text4 = Blockly.Python.valueToCode(block, 'INPUT2', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${var_text1}.set_xticklabels(${var_text2})\n${var_text1}.set_yticklabels(${var_text4})\n`;
        return code;
      };

      Blockly.Python['set_xyticks'] = function (block) {
        var var_text1 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC);
        var var_text2 = Blockly.Python.valueToCode(block, 'INPUT', Blockly.Python.ORDER_ATOMIC);
        var var_text3 = Blockly.Python.valueToCode(block, 'INPUT2', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = `${var_text1}.set_xticks(${var_text2})\n${var_text1}.set_yticks(${var_text3})\n`;
        return code;
    };


    //matplot2 _updated_final 
    Blockly.Python['matplotlib_histo_graph_plt'] = function(block) {
      var xx = Blockly.Python.valueToCode(block, 'xx', Blockly.Python.ORDER_ATOMIC);
      var title = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Title', Blockly.Python.ORDER_ATOMIC);
      var xlable = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Xlable', Blockly.Python.ORDER_ATOMIC);
      var ylable = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Ylable', Blockly.Python.ORDER_ATOMIC);
    
      var value_matplotlib_pre_color = Blockly.Python.valueToCode(block, 'matplotlib_pre_color', Blockly.Python.ORDER_ATOMIC);
      var other = Blockly.Python.valueToCode(block, 'matplotlib_pre_other', Blockly.Python.ORDER_ATOMIC);
      
       // 그래프 color 없을 때
       if(value_matplotlib_pre_color == ""){
        value_matplotlib_pre_color = "None";
      }

      if(other != ""){
        other = ", " + other;
      }
    
      var code = `plt.hist(${xx}${other})\nplt.title("${title}")\nplt.xlabel("${xlable}")\nplt.ylabel("${ylable}")\nplt.show()\n`;
    
      return code;
    };

    Blockly.Python['matplotlib_bubble_graph_plt'] = function(block) {
      var xx = Blockly.Python.valueToCode(block, 'xx', Blockly.Python.ORDER_ATOMIC);
      var yy = Blockly.Python.valueToCode(block, 'yy', Blockly.Python.ORDER_ATOMIC);
      var zz = Blockly.Python.valueToCode(block, 'zz', Blockly.Python.ORDER_ATOMIC);
      var title = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Title', Blockly.Python.ORDER_ATOMIC);
      var legend = Blockly.Python.valueToCode(block, 'legend', Blockly.Python.ORDER_ATOMIC);
    
      var other = Blockly.Python.valueToCode(block, 'matplotlib_pre_other', Blockly.Python.ORDER_ATOMIC);

      if(other != ""){
        other = ', ' + other;
      }

      var code = `plt.scatter(${xx},${yy},${zz}${other})\nplt.title("${title}")\nplt.legend([${legend}])\nplt.show()\n`;
    
      return code;
    };

    Blockly.Python['matplotlib_axes3d_graph_plt'] = function(block) {
      var xx = Blockly.Python.valueToCode(block, 'xx', Blockly.Python.ORDER_ATOMIC);
      var yy = Blockly.Python.valueToCode(block, 'yy', Blockly.Python.ORDER_ATOMIC);
      var zz = Blockly.Python.valueToCode(block, 'zz', Blockly.Python.ORDER_ATOMIC);
      var title = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Title', Blockly.Python.ORDER_ATOMIC);
      var xlabel = Blockly.Python.valueToCode(block, 'xlabel', Blockly.Python.ORDER_ATOMIC);
      var ylabel = Blockly.Python.valueToCode(block, 'ylabel', Blockly.Python.ORDER_ATOMIC);
      var zlabel = Blockly.Python.valueToCode(block, 'zlabel', Blockly.Python.ORDER_ATOMIC);
      var other = Blockly.Python.valueToCode(block, 'other', Blockly.Python.ORDER_ATOMIC);

      if(other != ""){
        other = ', ' + other;
      }

      var code = `from mpl_toolkits.mplot3d import Axes3D\n\nfig = plt.figure()\nax = Axes3D(fig)\nax.plot_surface(${xx},${yy},${zz}${other})\n\nax.set_xlabel('${xlabel}')\nax.set_ylabel('${ylabel}')\nax.set_zlabel('${zlabel}')\nplt.title('${title}')\nplt.show()\n`;
      // x,y = np.meshgrid(x, y)\nz = np.sin(np.sqrt(x**2 + y**2))\n
      return code;
    };
