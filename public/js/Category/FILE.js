//--------------------------------------파일
var FILE = '<category name="%{BKY_CATEGORY_FILE}" colour="%{BKY_FILE_HUE}">';
FILE += '  <block type="pickle_library"></block>';
FILE += '  <block type="csv_library"></block>';
FILE += '  <block type="import_pil_pilimg"></block>';
FILE += '  <block type="import_pil_imagefilter"></block>';

// 기태 수정(로컬 파일 열기)
FILE += '  <block type = "fd_open">';
FILE += '    <value name="text">';
FILE += '     <shadow type="indata">';
FILE += '       <field name="indata1"></field>';
FILE += '     </shadow>';
FILE += '      <block type="fileopen"></block>';
FILE += '    </value>';
FILE += '  </block>';
// 기태 수정(로컬 파일 열기)
// 파일 읽기
FILE += '  <block type = "fd_read"></block>';

//파일 쓰기
FILE += '  <block type = "fd_write">';
FILE += '      <value name="text">';
FILE += '          <block type="variables_get">';
FILE += '              <field name="VAR">data</field>';
FILE += '          </block>';
FILE += '      </value>';
FILE += '  </block>';

//피클 입력
FILE += '  <block type="pickle_dump">';
FILE += '      <value name="va1">';
FILE += '          <shadow type="indata">';
FILE += '              <field name="indata1">데이터</field>';
FILE += '          </shadow>';
FILE += '      </value>';
FILE += '      <value name="va2">';
FILE += '          <shadow type="indata">';
FILE += '              <field name="indata1">f</field>';
FILE += '          </shadow>';
FILE += '      </value>';
FILE += '  </block>';

//피클 불러오기
FILE += '  <block type="pickle_load">';
FILE += '      <value name="va">';
FILE += '          <shadow type="indata">';
FILE += '              <field name="indata1">f</field>';
FILE += '          </shadow>';
FILE += '      </value>';
FILE += '  </block>';
//  파일 닫기
FILE += '      <block type = "fd_close"></block>';

//  with
FILE += '      <block type = "withs">';
FILE += '        <value name="set0">';
FILE += '          <shadow type="indata">';
FILE += '            <field name="indata1"></field>';
FILE += '          </shadow>';
FILE += '        </value>';
FILE += '        <value name="set1">';
FILE += '          <shadow type="indata">';
FILE += '            <field name="indata1"></field>';
FILE += '          </shadow>';
FILE += '        </value>';
FILE += '      </block>';

FILE += '      <block type="csv_reader_writer">';
FILE += '        <value name="VAR">';
FILE += '          <shadow type="indata">';
FILE += '            <field name="indata1">f</field>';
FILE += '          </shadow>';
FILE += '        </value>';
FILE += '      </block>';

FILE += '      <block type = "writerows">';
FILE += '        <value name="VAR">';
FILE += '          <block type="variables_get">';
FILE += '            <field name="VAR">csvobj</field>';
FILE += '          </block>';
FILE += '        </value>';
FILE += '        <value name="text">';
FILE += '          <shadow type="indata">';
FILE += '            <field name="indata1">data</field>';
FILE += '          </shadow>';
FILE += '        </value>';
FILE += '      </block>';
FILE += '      <block type="fileopen2"></block>   ';

FILE += '</category>';

FILE += '<sep></sep>';
