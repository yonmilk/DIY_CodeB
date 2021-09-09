var IO = ' <category name = "%{BKY_CATEGORY_INPUT_OUTPUT}" colour = "255">';
//데이터입력
IO += '<block type="input1">';
IO += ' <value name="content1">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">"메시지"</field>';
IO += '     </shadow>';
IO += ' </value>';
IO += '</block>';

IO += '<block type="map">';
IO += ' <value name="data_type">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">int</field>';
IO += '      </shadow>';
IO += ' </value>';
IO += ' <value name="input">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">"메시지"</field>';
IO += '     </shadow>';
IO += '</value>';
IO += ' <value name="split">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1">"입력시구분자"</field>';
IO += '     </shadow>';
IO += ' </value>';
IO += '</block>';
//결과 출력
IO += '<block type="printc">';
IO += ' <value name="content">';
IO += '     <block type="variables_get">';
IO += '         <field name="VAR">variable</field>';
IO += '     </block>';
IO += ' </value>';
IO += '</block>';
//결과 출력 text + var
IO +='<block type="printtv">' ;
IO +='  <value name="content1">' ;
IO +='      <shadow type="indata">' ;
IO +='          <field name="indata1">"메시지"</field>' ;
IO +='      </shadow>' ;
IO +='  </value>' ;
IO +='  <value name="content2">' ;
IO +='      <block type="variables_get">' ;
IO +='          <field name="VAR">variable</field>' ;
IO +='      </block>' ;
IO +='   </value>' ;
IO +='</block>' ;
//결과출력 f-문자열
IO +='<block type="printf">' ;
IO +='  <value name="content1">' ;
IO +='      <shadow type="indata">' ;
IO +='          <field name="indata1"></field>' ;
IO +='      </shadow>' ;
IO +='  </value>' ;
IO +='</block>' ;
//출력 뮤테이터
IO +='<block type="print_mutator"></block>' ;
//파이썬 코드 입력
IO +='<block type="itdata">' ;
IO +='  <value name="itdata1">' ;
IO +='      <shadow type="indata">' ;
IO +='           <field name="indata1"></field>' ;
IO +='      </shadow>' ;
IO +='  </value>' ;
IO +='</block>' ;
//파이썬 부분 코드(만능)
IO +='<block type="indata"></block>' ;
IO +='<block type="class_func_param"></block>' ;


IO +='</category>'