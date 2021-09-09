///////////////////////////////////////////////////////
// 2020-12-26
///////////////////////////////////////////////////////

//df_ap
Blockly.Blocks['df_ap'] = {
  init: function () {
      this.appendDummyInput().appendField("[함수적용리턴]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendDummyInput().appendField(new Blockly.FieldDropdown([
          [
              "시리즈로반환(apply)", ".apply("
          ],
          [
            "프레임으로반환(applymap)", ".applymap("
          ],
      ]), "collection");
      this.appendValueInput("LIST").appendField().setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

//df_agg
Blockly.Blocks['df_agg'] = {
  init: function () {
    this.appendDummyInput().appendField("[그룹]").appendField(new Blockly.FieldVariable("df"), "list");
      this.appendValueInput("LIST").appendField(".agg(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_PANDAS_HUE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};



//뮤테이터 공부

Blockly.Blocks['try_except1'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("try : ");
      this.appendStatementInput("TRY")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("except");
      this.appendValueInput("EXCEPT1")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(":");
      this.appendStatementInput("EXCEPT2")
          .setCheck(null);
      //뮤테이터 관련 
      this.itemCount_ = 0;       // itemCount_는 처음 블록에 생성할 뮤테이터 개수
      this.updateShape_();       // mutator설정을 변경할때 마다 형태변환
      this.setMutator(new Blockly.Mutator(['lists_create_with_item1']));  //뮤테이터    
      //뮤테이터 관련  
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("logic_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    },
    mutationToDom: function () {   //함수를 추가하여 돌연변이 데이터를 저장
      var container = Blockly.utils.xml.createElement('mutation');
      container.setAttribute('items', this.itemCount_);
      return container;
    },
    domToMutation: function (xmlElement) {   // 블록이 XML에서 복원 될 때마다 호출
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
      this.updateShape_();
    },
    decompose: function (workspace) {   //톱니바퀴 작업공간
      var containerBlock = workspace.newBlock('lists_create_with_container1');  //오른쪽 컨테이너에 lists_create_with_container1블록 넣어두기
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection; //lists_create_with_container1에 연결된 블록 확인
      for (var i = 0; i < this.itemCount_; i++) {
        var itemBlock = workspace.newBlock('lists_create_with_item1');  //왼쪽 아이템에 lists_create_with_item1블록 넣어두기
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);//previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
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
    updateShape_: function () {
      // 추가할 모양들?
      for (var i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          var input = this.appendDummyInput("dy" + i)
          .appendField("except ").appendField(new Blockly.FieldDropdown([["EOFError","EOFError"],["SyntaxError","SyntaxError"], ["NameError","NameError"], ["ZeroDivisionError","ZeroDivisionError"], ["IndexError","IndexError"], ["ValueError","ValueError"], ["KeyError","KeyError"], ["AttributeError","AttributeError"], ["FileNotFoundError","FileNotFoundError"], ["TypeError","TypeError"]]), "DROP" + i).appendField(":");this.appendStatementInput('ADD' + i).setCheck(null).setAlign(Blockly.ALIGN_RIGHT);
        }
      }
      // 제거할 모양들?
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i)
        this.removeInput("dy" + i);
        i++;
      }
    }
};
//톱니바퀴안의 블록들
Blockly.Blocks.lists_create_with_container1 = {   //톱니누르고 오른쪽 workspace
  init: function () {
    this.setStyle("list_blocks");  //블록 
    this.appendDummyInput().appendField(
      "항목추가"
    );
    this.appendStatementInput("STACK");
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.setColour(125);
  },
};
Blockly.Blocks.lists_create_with_item1 = {    //톱니누르고 왼쪽 추가하는 블록
  init: function () {
    this.setStyle("list_blocks");
    this.appendDummyInput().appendField("except");
    this.setPreviousStatement(!0);
    this.setNextStatement(!0);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.setColour(125);
  },
};
