//라이브러리 import 블럭
Blockly.Blocks['knn_import'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.KNN_IMPORT)
          .appendField(new Blockly.FieldDropdown([["KNeighborsClassifier","KNeighborsClassifier"], ["KNeighborsRegressorption","KNeighborsRegressorption"], 
          ["KNeighborsTransformer","KNeighborsTransformer"], ["kneighbors_graph","kneighbors_graph"], ["NearestNeighbors","NearestNeighbors"]]), "NAME");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_SCIKITLEARN_HUE}");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



