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

// 콤마
IO += '<block type="comma">';
IO += ' <value name="v1">';
IO += '   <shadow type="indata">';
IO += '     <field name="indata1"></field>';
IO += '   </shadow>';
IO += ' </value>';
IO += ' <value name="v2">';
IO += '   <shadow type="indata">';
IO += '     <field name="indata1"></field>';
IO += '   </shadow>';
IO += ' </value>';
IO += '</block>';

// 콤마 뮤테이션
IO +='<block type="class_func_param"></block>' ;

//<!-- 객체 사용 -->';
IO +='<block type="class_use3">';
IO +='  <value name="VAR1">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1"></field>';
IO += '     </shadow>';
IO +='    <block type="variables_get">';
IO +='      <field name="VAR">obj</field>';
IO +='    </block>';
IO +='  </value>'; 
IO +='  <value name="VAR2">';
IO += '     <shadow type="indata">';
IO += '         <field name="indata1"></field>';
IO += '     </shadow>';
IO +='    <block type="variables_get">';
IO +='      <field name="VAR">func</field>';
IO +='    </block>';
IO +='  </value>'; 
IO +='  <value name="3">';
IO +='    <shadow type="indata">';
IO +='      <field name="indata1"></field>';
IO +='    </shadow>';
IO +='  </value>';
IO +='</block>'; 

// 확장
IO += '<block type="df_add_function2">';
IO += '<value name="LIST">';
IO += '<shadow type="indata">';
IO += '<field name="indata1"></field>';
IO += '</shadow>';
IO += '</value>';
IO += '<value name="LIST2">';
IO += '<shadow type="indata">';
IO += '<field name="indata1"></field>';
IO += '</shadow>';
IO += '  </value>';
IO += '</block>';

IO +='</category>'