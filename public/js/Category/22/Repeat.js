REP = '<category name="%{BKY_CATEGORY_REPEAT}" colour="%{BKY_LOOPS_HUE}">';

// [R1] repeat1
REP += '<block type="controls_repeat">';
REP += '  <value name="VAR">';
REP += '    <block type="variables_get">';
REP += '      <field name="VAR">i</field>';
REP += '    </block>';
REP += '  </value>';
REP += '  <value name="COUNT">';
REP += '    <shadow type="indata">';
REP += '      <field name="indata1">4</field>';
REP += '    </shadow>';
REP += '  </value>';
REP += '</block>';

// [R2] new_while
// REP += '<block type="controls_whileTorF">';
// REP += '  <value name="BOOL">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">True</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '</block>';

// [R3] for 문 range 
// REP += '<block type="py_for1">';
// REP += '  <value name="item">';
// REP += '    <block type="variables_get">';
// REP += '      <field name="VAR">i</field>';
// REP += '    </block>';
// REP += '  </value>';
// REP += '  <value name="list">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">0,10,1</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '</block>';

// [R4] for 문 in 
// REP += '<block type="py_for">';
// REP += '  <value name="item">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">x, y</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '  <value name="list">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1"></field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '</block>';

// [R5] 범위1 블록 
// REP += '<block type="range_len">';
// REP += '  <value name="x">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1"></field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '</block>';

// <block type="range1">';
// REP += '  <value name="VALUE1">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">0</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '  <value name="VALUE2">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">5</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '</block>'; 

// [R6] 범위2 블록       
// REP += '<block type="range2">';
// REP += '  <value name="VALUE1">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">0</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '</block>';

// [R7] 범위3 블록       
// REP += '<block type="range3">';
// REP += '  <value name="x">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">0</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '  <value name="y">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">10</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '  <value name="z">';
// REP += '    <shadow type="indata">';
// REP += '      <field name="indata1">1</field>';
// REP += '    </shadow>';
// REP += '  </value>';
// REP += '</block>';

// [R8] break 블록       
// REP += '<block type="break_block"></block>';

// [R9] continue 블록       
// REP += '<block type="continue_block"></block>';
REP += '</category>';
// 2020-12-26 양승국 end 