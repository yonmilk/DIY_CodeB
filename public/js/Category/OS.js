var OS ='<category name="%{BKY_CATEGORY_OS}" colour="%{BKY_OS_HUE}">' ;
//시스템 os

OS +='  <block type="os_library"></block>' ;
OS +='  <block type="os_data_remove"></block>' ;
OS +='  <block type="os_data_listdir"></block>' ;
OS +='  <block type="os_data_download"></block>' ;

// OS +=document.write("<label text='os & os.path & shutil'></label>");
OS +='<label text="%{BKY_IO_OS_PATH_SHUTIL}"></label>';
OS +='  <block type="printf">' ;
OS +='      <value name="content1">' ;
OS +='          <block type="os_getcwd"></block>' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1"></field>';
OS +='          </shadow>' ;
OS +='       </value>' ;
OS +='  </block>' ;

OS +='  <block type="printf">' ;
OS +='      <value name="content1">' ;
OS +='          <block type="os_listdir"></block>' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1"></field>';
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

//디렉토리 생성
OS +='  <block type="printf">' ;
OS +='      <value name="content1">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1"></field>';
OS +='          </shadow>' ;
OS +='          <block type="os_dir">' ;
OS +='              <value name="va">' ;
OS +='                  <shadow type="indata">' ;
OS +='                      <field name="indata1">"temp"</field>';
OS +='                  </shadow>' ;
OS +='              </value>' ;
OS +='          </block>' ;
OS +='      </value>' ;
OS +='  </block>' ;

//파일 삭제
OS +='  <block type="os_remove">' ;
OS +='      <value name="va">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"temp"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='   </block>' ;

//파일명 변경 
OS +='  <block type="os_rename">' ;
OS +='      <value name="va1">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"원본"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='      <value name="va2">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"복사본"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type = "abspath">' ;
OS +='      <value name="NAME">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"파일 혹은 폴더"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type = "basename">' ;
OS +='      <value name="NAME">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"절대경로"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type = "dirname">' ;
OS +='      <value name="NAME">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"path"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type = "exists">' ;
OS +='      <value name="NAME">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"path"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type = "getsize">' ;
OS +='      <value name="NAME">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"path"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type = "is_dir_file">' ;
OS +='      <value name="NAME">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"path"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type = "path_split">' ;
OS +='      <value name="NAME">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">"path"</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <block type="shutil_file">' ;
OS +='      <value name="va1">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">원본</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='      <value name="va2">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">복사</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

// OS +='  <label text="time & datetime"></label>' ;
OS +='<label text="%{BKY_IO_TIME_DATETIME}"></label>';

OS +='  <!--<block type="time_library"></block>-->' ;
OS +='  <block type="time_"></block>' ;
OS +='  <block type="sleep">' ;
OS +='      <value name="val1">' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1">초</field>' ;
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

OS +='  <!--<block type="datetime_library"></block>-->' ;

//datetime 객체 생성 리성주
OS +='  <block type = "datetime_now">' ;
OS +='      <value name = "variables">' ;
OS +='          <block type="variables_get">' ;
OS +='              <field name="VAR">day</field>' ;
OS +='          </block>' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1"></field>';
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;

//년도, 년, 월, 일, 시, 분, 초 사용
OS +='  <block type = "now_method">' ;
OS +='      <value name = "object">' ;
OS +='          <block type="variables_get">' ;
OS +='              <field name="VAR">day</field>' ;
OS +='          </block>' ;
OS +='          <shadow type="indata">' ;
OS +='              <field name="indata1"></field>';
OS +='          </shadow>' ;
OS +='      </value>' ;
OS +='  </block>' ;
OS += '</category>';