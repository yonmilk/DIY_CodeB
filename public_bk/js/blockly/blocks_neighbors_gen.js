
  //라이브러리 import 블럭
  Blockly.Python['knn_import'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'from sklearn.neighbors import'+" "+dropdown_name+'\n';
    return code;
  };

  //KNeighborsRegressor 블럭 함수


