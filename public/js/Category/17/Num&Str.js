NUM = '<category name="%{BKY_CATEGORY_TEXT}" colour="%{BKY_TEXTS_HUE}">';

NUM += '<block type="math_number">';
NUM += '<field name="NUM">0</field>';
NUM += '</block>';

//연산블럭
NUM += '<block type="math_arithmetic">';
NUM += '<value name="A">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">0</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '<value name="B">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">0</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//형변환
NUM += '<block type="convert_block">';
NUM += '<value name="A">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">1</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//내장함수 - 숫자
NUM += '<block type="built_in_function_num">';
NUM += '<value name="A">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1"></field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';




// text
NUM += '<block type="text"></block>';

//문자 생성
NUM += '<block type = "create_text">';
NUM += '<value name="VAR">';
NUM += '  <block type="variables_get">';
NUM += '    <field name="VAR">s</field>';
NUM += '  </block>';
NUM += '</value>';
NUM += '<value name="text">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">Hello, Python!</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//문자 합치기
NUM += '<block type="text_join"></block>';

//len
NUM += '<block type="text_length">';
NUM += '<value name="VALUE">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1"></field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//문자 슬라이스
NUM += '<block type="text_slice">';
NUM += '<value name="VAR">';
NUM += '  <block type="variables_get">';
NUM += '    <field name="VAR">s</field>';
NUM += '  </block>';
NUM += '</value>';
NUM += '<value name="INPUT1">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">0</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '<value name="INPUT2">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">5</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '<value name="INPUT3">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">1</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//문자 편집
NUM += '<block type="text_editing">';
NUM += '<value name="VAR">';
NUM += '  <block type="variables_get">';
NUM += '    <field name="VAR">s</field>';
NUM += '  </block>';
NUM += '</value>';
NUM += '<value name="INPUT1">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1"></field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//문자 검색
NUM += '<block type="text_search">';
NUM += '<value name="VAR">';
NUM += '  <block type="variables_get">';
NUM += '    <field name="VAR">s</field>';
NUM += '  </block>';
NUM += '</value>';
NUM += '<value name="INPUT1">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1"></field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//문자 대소문자
NUM += '<block type="text_up_low">';
NUM += '<value name="VAR">';
NUM += '  <block type="variables_get">';
NUM += '    <field name="VAR">s</field>';
NUM += '  </block>';
NUM += '</value>';

NUM += '</block>';


//문자 정렬
NUM += '<block type="text_sort">';
NUM += '<value name="VAR">';
NUM += '  <block type="variables_get">';
NUM += '    <field name="VAR">s</field>';
NUM += '  </block>';
NUM += '</value>';
NUM += '<value name="INPUT1">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">" "</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '<value name="INPUT2">';
NUM += '  <shadow type="indata">';
NUM += '    <field name="indata1">10</field>';
NUM += '  </shadow>';
NUM += '</value>';
NUM += '</block>';

//문자 질의
NUM += '<block type="text_query">';
NUM += '<value name="VAR">';
NUM += '  <block type="variables_get">';
NUM += '    <field name="VAR">s</field>';
NUM += '  </block>';
NUM += '</value>';

NUM += '</block>';
NUM += '</category>';