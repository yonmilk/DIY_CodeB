LOG = '<category name="%{BKY_CATEGORY_LOGIC}" colour="%{BKY_LOGIC_HUE}">';
      
// if -->
LOG += '<block type="controls_if">';
LOG += '  <value name="IF0">';
LOG += '    <shadow type="indata">';
LOG += '      <field name="indata1">True</field>';
LOG += '    </shadow>';
LOG += '  </value>';
LOG += '</block>';

// if_else --> 
LOG += '<block type="controls_ifelse">';
LOG += '  <value name="IF0">';
LOG +='    <shadow type="indata">';
LOG += '      <field name="indata1">True</field>';
LOG += '    </shadow>';
LOG += '  </value>';
LOG += '</block>';

// 비교 블록 -->
LOG += '<block type="logic_compare">';
LOG += '  <value name="A">';
LOG += '    <shadow type="indata">';
LOG += '      <field name="indata1">0</field>';
LOG += '    </shadow>';
LOG += '  </value>';
LOG += '  <value name="B">';
LOG += '    <shadow type="indata">';
LOG += '      <field name="indata1">0</field>';
LOG += '    </shadow>';
LOG += '  </value>';
LOG += '</block>';

// true, false -->
// LOG += '<block type="logic_operation">';
// LOG += '  <value name="A">';
// LOG += '    <shadow type="indata">';
// LOG += '      <field name="indata1">True</field>';
// LOG += '    </shadow>';
// LOG += '  </value>';
// LOG += '  <value name="B">';
// LOG += '    <shadow type="indata">';
// LOG += '      <field name="indata1">True</field>';
// LOG += '    </shadow>';
// LOG += '  </value>';
// LOG += '</block>';

// not 블록-->
// LOG += '<block type="logic_negate">';
// LOG += '  <value name="BOOL">';
// LOG += '    <shadow type="indata">';
// LOG += '      <field name="indata1">True</field>';
// LOG += '    </shadow>';
// LOG += '  </value>';
// LOG += '</block>';

// 참, 거짓 -->
// LOG += '<block type="logic_boolean"></block>';

// null값 -->
// LOG += '<block type="logic_null"></block>';

// 삼항연산자 -->
// LOG += '<block type="logic_ternary">';
// LOG += '  <value name="THEN">';
// LOG += '    <shadow type="indata">';
// LOG += '      <field name="indata1">True리턴</field>';
// LOG += '    </shadow>';
// LOG += '  </value>';
// LOG += '  <value name="IF">';
// LOG += '    <shadow type="indata">';
// LOG += '      <field name="indata1">조건</field>';
// LOG += '    </shadow>';
// LOG += '  </value>';
// LOG += '  <value name="ELSE">';
// LOG += '    <shadow type="indata">';
// LOG += '      <field name="indata1">False리턴</field>';
// LOG += '    </shadow>';
// LOG += '  </value>';
// LOG += '</block>';

//   <!-- 예외처리 -->
//   // <block type="try_except">
//     <value name="EXCEPT1">
//         <block type="except_block"></block>
//     </value>
//   </block> -->

// LOG += '  <block type="try_except1">';
// LOG += '    <value name="EXCEPT1">';
// LOG += '        <block type="except_block"></block>';
// LOG += '    </value>';
// LOG += '  </block>';

//   // <block type = "m1">
//     <value name="IF0">
//       <block type="except_block"></block>
//     </value>
//   </block> -->

LOG += '</category>';