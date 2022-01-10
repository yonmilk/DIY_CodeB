
//db

//자동 커밋 (con).isolation_level = None  

Blockly.Python['db_autocommit'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_list1}.isolation_level = None\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


//DB삭제 DROP TABLE IF EXISTS (테이블)

Blockly.Python['db_deletedb'] = function (block) {
  var variable_list1 = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var indata1 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_list1} = "DROP TABLE IF EXISTS ${indata1}"\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Python['db_select6'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
  var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
  var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
  var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ${dropdown_name} ${value_SET2}"\n`;
  return code;
};




// 사용하지 않는 블럭
// //조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드)”

// Blockly.Python['db_select3'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code =  `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ORDER BY ${value_SET2}"\n`;
//   return code;
// };

// //조회 sql = “SELECT (필드) FROM (테이블) ORDER BY (필드) DESC”

// Blockly.Python['db_select4'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ORDER BY ${value_SET2} DESC"\n`;
//   return code;
// };

// //조회 sql = “SELECT (필드) FROM (테이블) GROUP BY (필드)”

// Blockly.Python['db_select5'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} GROUP BY ${value_SET2}"\n`;
//   return code;
// };

// Blockly.Python['db_select7'] = function (block) {
//   var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list1'), Blockly.Variables.NAME_TYPE);
//   var value_SET0 = Blockly.Python.valueToCode(block, 'SET0', Blockly.Python.ORDER_ATOMIC);
//   var value_SET1 = Blockly.Python.valueToCode(block, 'SET1', Blockly.Python.ORDER_ATOMIC);
//   var value_SET2 = Blockly.Python.valueToCode(block, 'SET2', Blockly.Python.ORDER_ATOMIC);
//   var dropdown_name = block.getFieldValue('NAME');
//   var dropdown_name2 = block.getFieldValue('NAME2');
//   // TODO: Assemble JavaScript into code variable.
//   var code = `${variable_list} = "SELECT ${value_SET0} FROM ${value_SET1} ${dropdown_name} ${value_SET2} ${dropdown_name2}"\n`;
//   return code;
// };

//바 그래프

Blockly.Python['bar_char'] = function(block) {
  var value_matplotlib_pre_graph_location1 = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_location1', Blockly.Python.ORDER_ATOMIC);
  var value_matplotlib_pre_graph_location2 = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_location2', Blockly.Python.ORDER_ATOMIC);


  var xx = Blockly.Python.valueToCode(block, 'xx', Blockly.Python.ORDER_ATOMIC);
  var yy = Blockly.Python.valueToCode(block, 'yy', Blockly.Python.ORDER_ATOMIC);
  var dropdown_matplotlib_graph_select = block.getFieldValue('matplotlib_graph_select');
  var text_matplotlib_pre_graph_title = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Title', Blockly.Python.ORDER_ATOMIC);
  var text_matplotlib_pre_graph_xlable = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Xlable', Blockly.Python.ORDER_ATOMIC);
  var text_matplotlib_pre_graph_ylable = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Ylable', Blockly.Python.ORDER_ATOMIC);

  var text_matplotlib_pre_legend = Blockly.Python.valueToCode(block, 'matplotlib_pre_legend', Blockly.Python.ORDER_ATOMIC);

  var value_matplotlib_pre_color = Blockly.Python.valueToCode(block, 'matplotlib_pre_color', Blockly.Python.ORDER_ATOMIC);
  var text_matplotlib_pre_other = Blockly.Python.valueToCode(block, 'matplotlib_pre_other', Blockly.Python.ORDER_ATOMIC);
  
   // 그래프 color 없을 때
  if(value_matplotlib_pre_color == ""){
    value_matplotlib_pre_color = "None";
  }

  var matplot_lo ; 
  var matplot_graph; 
  var matplot_line; 

  switch(dropdown_matplotlib_graph_select){   
    
    case "matplotlib_bar" :
    matplot_graph = "bar";  
    break;  

    case "matplotlib_barh" :   
    matplot_graph =  "barh";   
    break;

    default:  
    break;
  }  

// 코드를 위해 
var code ;   

// 기존 코드내용 

  code =`plt.${matplot_graph}(` ;  



// 그래프에 따른 뒷 내용 변환 concat

// 에러바 그래프

// 산점도 그래프, 선그래프 
if(dropdown_matplotlib_graph_select=="matplotlib_bar" || dropdown_matplotlib_graph_select=="matplotlib_barh")
{
  // 그래프 color 있을 때 
  if(value_matplotlib_pre_color.length > 0)
  {
    // 기타 부분 있을 때 
    if(text_matplotlib_pre_other.length > 0){
      if (text_matplotlib_pre_legend.length > 0) {
        code = code.concat(`${xx + ", " + yy }, label = ${text_matplotlib_pre_legend}, color = ${value_matplotlib_pre_color}, ${text_matplotlib_pre_other} )`);  
      } else {
        code = code.concat(`${xx + ", " + yy }, color = ${value_matplotlib_pre_color}, ${text_matplotlib_pre_other} )`);  
      }
    } else {
      if (text_matplotlib_pre_legend.length > 0) {
        code = code.concat(`${xx + ", " + yy }, label = ${text_matplotlib_pre_legend}, color = ${value_matplotlib_pre_color})`);  
      } else {
        code = code.concat(`${xx + ", " + yy }, color = ${value_matplotlib_pre_color})`);  
      }
    }
  }
 
  
}



//킹우진의 수정
code =  code.concat(`\nplt.title("${text_matplotlib_pre_graph_title}", fontproperties=fontprop)
plt.xlabel("${text_matplotlib_pre_graph_xlable}", fontproperties=fontprop)
plt.ylabel("${text_matplotlib_pre_graph_ylable}", fontproperties=fontprop)
plt.legend(loc='best', prop=fontprop)
plt.show()\n`);  

return code;
};


//라인 그래프
Blockly.Python['line_plot'] = function(block) {
  
  var xx = Blockly.Python.valueToCode(block, 'xx', Blockly.Python.ORDER_ATOMIC);
  var yy = Blockly.Python.valueToCode(block, 'yy', Blockly.Python.ORDER_ATOMIC);
 
  var text_matplotlib_pre_graph_title = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Title', Blockly.Python.ORDER_ATOMIC);
  var text_matplotlib_pre_graph_xlable = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Xlable', Blockly.Python.ORDER_ATOMIC);
  var text_matplotlib_pre_graph_ylable = Blockly.Python.valueToCode(block, 'matplotlib_pre_graph_Ylable', Blockly.Python.ORDER_ATOMIC);

  var text_matplotlib_pre_legend = Blockly.Python.valueToCode(block, 'matplotlib_pre_legend', Blockly.Python.ORDER_ATOMIC);

  var value_matplotlib_pre_color = Blockly.Python.valueToCode(block, 'matplotlib_pre_color', Blockly.Python.ORDER_ATOMIC);
  var text_matplotlib_pre_other = Blockly.Python.valueToCode(block, 'matplotlib_pre_other', Blockly.Python.ORDER_ATOMIC);
  
   // 그래프 color 없을 때
  if(value_matplotlib_pre_color == ""){
    value_matplotlib_pre_color = "None";
  }

  

  
// 코드를 위해 
if(text_matplotlib_pre_other.length > 0){
  if (text_matplotlib_pre_legend.length > 0) {
    var code = `plt.plot(${xx + ", " + yy }, label = ${text_matplotlib_pre_legend}, color = ${value_matplotlib_pre_color}, ${text_matplotlib_pre_other} )
plt.title("${text_matplotlib_pre_graph_title}", fontproperties=fontprop)\nplt.xlabel("${text_matplotlib_pre_graph_xlable}", fontproperties=fontprop)\nplt.ylabel("${text_matplotlib_pre_graph_ylable}", fontproperties=fontprop)\nplt.legend(loc='best', prop=fontprop)\nplt.show()\n`;
  } else {
    var code = `plt.plot(${xx + ", " + yy }, color = ${value_matplotlib_pre_color}, ${text_matplotlib_pre_other} )
plt.title("${text_matplotlib_pre_graph_title}", fontproperties=fontprop)\nplt.xlabel("${text_matplotlib_pre_graph_xlable}", fontproperties=fontprop)\nplt.ylabel("${text_matplotlib_pre_graph_ylable}", fontproperties=fontprop)\nplt.legend(loc='best', prop=fontprop)\nplt.show()\n`;
  }
} else {
  if(text_matplotlib_pre_legend.length > 0) {
  var code = `plt.plot(${xx + ", " + yy }, label = ${text_matplotlib_pre_legend}, color = ${value_matplotlib_pre_color} )
plt.title("${text_matplotlib_pre_graph_title}", fontproperties=fontprop)\nplt.xlabel("${text_matplotlib_pre_graph_xlable}", fontproperties=fontprop)\nplt.ylabel("${text_matplotlib_pre_graph_ylable}", fontproperties=fontprop)\nplt.legend(loc='best', prop=fontprop)\nplt.show()\n`;
  } else {
    var code = `plt.plot(${xx + ", " + yy }, color = ${value_matplotlib_pre_color} )
plt.title("${text_matplotlib_pre_graph_title}", fontproperties=fontprop)\nplt.xlabel("${text_matplotlib_pre_graph_xlable}", fontproperties=fontprop)\nplt.ylabel("${text_matplotlib_pre_graph_ylable}", fontproperties=fontprop)\nplt.legend(loc='best', prop=fontprop)\nplt.show()\n`;
  }
}


 
return code;
};

//멧플롯립 예제를 위한 커스텀
Blockly.Python['numpy_numerical_ranges_basic1(WJ)'] = function(block) {
  var dropdown_numpy_numerical_ranges_opt = block.getFieldValue('numpy_Numerical_ranges_opt');
  var value_numpy_numerical_ranges_val = Blockly.Python.valueToCode(block, 'parameter1', Blockly.Python.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val2 = Blockly.Python.valueToCode(block, 'parameter2', Blockly.Python.ORDER_ATOMIC);
  var value_numpy_numerical_ranges_val3 = Blockly.Python.valueToCode(block, 'parameter3', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${dropdown_numpy_numerical_ranges_opt}(${value_numpy_numerical_ranges_val}${value_numpy_numerical_ranges_val2}${value_numpy_numerical_ranges_val3})`;
  
  // TODO: Change ORDER_ATOMIC to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
