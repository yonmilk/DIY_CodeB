DB = '<category name="%{BKY_CATEGORY_DB}" colour="%{BKY_DATABASE_HUE}">';

//<!-- sqllite3 라이브러리-->';
DB +='<block type="sqlite_library"></block>';
  
//<!-- db연결, 생성-->';
DB +='<block type="db_conn">';
DB +='  <value name="va">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">"DB명.db"</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

DB +='<block type = "db_autocommit"></block>';

//<!-- db삭제 -->';
DB +='<block type = "db_deletedb">';
DB +='  <value name="SET0">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- db종료 -->';
DB +='<block type="db_close"></block>';

//<!-- 커서 -->';
DB +='<block type="db_cur"></block>';

//<!-- sql실행 -->';
DB +='<block type="db_exec">';
DB +='  <value name="va">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">sql</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- sql실행-->';
DB +='<block type="db_execM">';
DB +='  <value name="va1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">sql</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="va2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">data</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';
  
//<!-- 저장 -->';
DB +='<block type="db_commit"></block>';

//<!-- 복구 -->';
DB +='<block type="db_rollback"></block>';

//<!-- <block type="db_fetchone"></block>';

// DB +='<block type="db_fetchall"></block>'; -->';

DB +='<block type="db_fetch"></block>';

DB +='<block type="db_fetchmany">';
DB +='  <value name="va">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">개수</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

// <!-- 데이터 -->
DB +='<block type = "create_data1">';
DB +='  <value name="list">';
DB +='    <block type="variables_get">';
DB +='      <field name="VAR">data</field>';
DB +='    </block>';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1"></field>';
DB +='    </shadow>';
DB +='  </value>';  
DB +='  <value name="text">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1"></field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

// <!-- with -->
DB +='<block type = "db_with">';
DB +='  <value name="set0">';
DB +='    <block type="variables_get">';
DB +='      <field name="VAR">con</field>';
DB +='    </block>';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1"></field>';
DB +='    </shadow>';
DB +='  </value>';  
DB +='</block>';

//<!-- 테이블 생성 -->';
DB +='<block type = "db_create">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">변수 타입, 변수 타입</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- 삽입 -->';
DB +='<block type = "db_insert">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">(?, ?)</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- 조회 -->';
DB +='<block type = "db_select2">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">필드</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- 조회1 where-->';
//<!-- <block type = "db_select1">';
//   <value name="d1">';
//     <shadow type="indata">';
//       <field name="indata1">필드</field>';
//     </shadow>';
//   </value>';
//   <value name="d2">';
//     <shadow type="indata">';
//       <field name="indata1">테이블</field>';
//     </shadow>';
//   </value>';
//   <value name="d3">';
//     <shadow type="indata">';
//       <field name="indata1">조건</field>';
//     </shadow>';
//   </value>';
// </block>'; -->';

//<!-- 조회 where order group까지  -->';
DB +='<block type = "db_select6">';
DB +='  <value name="SET0">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">필드</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="SET1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="SET2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">조건 또는 필드</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

// join
DB +='<block type = "db_join">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">필드</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블1</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d3">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블2</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d4">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">조인 조건</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- 조회 where order group desc까지  -->';
// //<!-- <block type = "db_select7">';
//   <value name="SET0">';
//     <shadow type="indata">';
//       <field name="indata1">필드</field>';
//     </shadow>';
//   </value>';
//   <value name="SET1">';
//     <shadow type="indata">';
//       <field name="indata1">테이블</field>';
//     </shadow>';
//   </value>';
//   <value name="SET2">';
//     <shadow type="indata">';
//       <field name="indata1">조건 또는 필드</field>';
//     </shadow>';
//   </value>';
// </block>'; -->';

//<!-- 조회 order by -->';
// //<!-- <block type = "db_select3">';
//   <value name="SET0">';
//     <shadow type="indata">';
//       <field name="indata1">필드</field>';
//     </shadow>';
//   </value>';
//   <value name="SET1">';
//     <shadow type="indata">';
//       <field name="indata1">테이블</field>';
//     </shadow>';
//   </value>';
//   <value name="SET2">';
//     <shadow type="indata">';
//       <field name="indata1">필드</field>';
//     </shadow>';
//   </value>';
// </block>'; -->';

//<!-- desc 붙은 order by 
{/* <block type = "db_select4">';
  <value name="SET0">';
    <shadow type="indata">';
      <field name="indata1">필드</field>';
    </shadow>';
  </value>';
  <value name="SET1">';
    <shadow type="indata">';
      <field name="indata1">테이블</field>';
    </shadow>';
  </value>';
  <value name="SET2">';
    <shadow type="indata">';
      <field name="indata1">필드</field>';
    </shadow>';
  </value>';
</block>';
-->'; */}

//<!-- 조회 group by -->';
//<!-- <block type = "db_select5">';
//   <value name="SET0">';
//     <shadow type="indata">';
//       <field name="indata1">필드</field>';
//     </shadow>';
//   </value>';
//   <value name="SET1">';
//     <shadow type="indata">';
//       <field name="indata1">테이블</field>';
//     </shadow>';
//   </value>';
//   <value name="SET2">';
//     <shadow type="indata">';
//       <field name="indata1">필드</field>';
//     </shadow>';
//   </value>';
// </block>'; -->';

//<!-- 수정 -->';
DB +='<block type = "db_update">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">수정</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d3">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">조건</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- 수정 -->';
DB +='<block type = "db_update2">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">수정</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- 삭제 -->';
DB +='<block type = "db_delete">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='  <value name="d2">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">조건</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';

//<!-- 삭제 -->';
DB +='<block type = "db_delete2">';
DB +='  <value name="d1">';
DB +='    <shadow type="indata">';
DB +='      <field name="indata1">테이블</field>';
DB +='    </shadow>';
DB +='  </value>';
DB +='</block>';
DB +='</category>';

