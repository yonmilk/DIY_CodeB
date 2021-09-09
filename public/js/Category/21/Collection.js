COLL =  '<category name="%{BKY_CATEGORY_COLLECTION}" colour="%{BKY_COLLECTION_HUE}">';

COLL +='<category name="%{BKY_OPER_PRO}" >';
 //  [C1] 
  COLL +='<block type ="forif">';
  COLL +='  <value name="SET0">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">[</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="SET1">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">리턴</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="SET2">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">i</field>';
  COLL +='    </shadow>';
  COLL +='</value>';
  COLL +='  <value name="SET3">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">범위</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="SET4">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">조건</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="SET5">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">]</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

 //  [C2] 
  COLL +='<block type ="forif2">';
  COLL +='  <value name="SET0">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">[</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="SET1">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">리턴</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="SET2">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">i</field>';
  COLL +='    </shadow>';
  COLL +='</value>';
  COLL +='  <value name="SET3">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">범위</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="SET4">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">]</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

//   [C3] 생성변환 
  COLL +='<block type = "change_collection">';
  COLL +='  <value name="LIST">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

  // [C4] 비어있는 리스트 생성 
  COLL +='<block type="lists_create_with">';
  COLL +='  <mutation items="0"></mutation>';
  COLL +='</block>';

 //  [C5] 컬렉션의 길이 
  COLL +='<block type="lists_length">';
  COLL +='<value name="VALUE">';
  COLL +='  <block type="variables_get">';
  COLL +='    <field name="VAR">my_list</field>';
  COLL +='  </block>';
  COLL +='</value>';
  COLL +='</block>';

//   [C6] 리스트가 비어있는지 확인 
  COLL +='<block type="lists_isEmpty">';
  COLL +='  <value name="VALUE">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='</block>';

//   [C7] 인덱싱 
  COLL +='<block type = "va_sel">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="dic1">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

//   [C8] 값삭제 
  COLL +='<block type = "va_del">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="dic1">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

 //  [C9] map 
  COLL +='<block type="map3">';
  COLL +='  <value name="data_type">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">int</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="input">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">데이터</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';
 COLL +='</category>';

  COLL +='<category name="%{BKY_LIST_TUPLE}">';
//    COLL +='<label text="리스트"></label>';
  COLL +='<label text="%{BKY_COLL_LIST}"></label>';
  
//   [L1] 리스트 생성 
  COLL +='<block type = "create_list">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';  
  COLL +='  <value name="text">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">1,2,3,4</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

//   [L2] 리스트 삽입 
  COLL +='<block type="list_insert">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';  
  COLL +='  <value name="INDEX">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">인덱스</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="VALUE">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">값</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

 //  [L3] 리스트 정렬,역순 
  COLL +='<block type="list_sort_reverse">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';  
  COLL +='</block>';

//   [L4] 데이터 다루기1 
  COLL +='<block type="create_new_list2">';
  COLL +='  <value name="VAR1">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="DIVISOR">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';
  
 //  [L5] 데이터 다루기2 
  COLL +='<block type="create_new_list">';
  COLL +='  <value name="VAR1">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_list</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="DIVISOR">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

  //zip함수
  COLL +='<block type="create_zip">';
  COLL +='  <value name="data_type">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

//    COLL +='<label text="튜플"></label>';
  COLL +='<label text="%{BKY_COLL_TUPLE}"></label>';
 //    튜플블록 
  COLL +='  <block type = "create_tuple">';
  COLL +='    <value name="list">';
  COLL +='      <block type="variables_get">';
  COLL +='        <field name="VAR">my_tuple</field>';
  COLL +='      </block>';
  COLL +='    </value>';  
  COLL +='    <value name="text">';
  COLL +='      <shadow type="indata">';
  COLL +='        <field name="indata1">1,2,3,4</field>';
  COLL +='      </shadow>';
  COLL +='    </value>';
  COLL +='  </block>';
  COLL +='</category>';

  COLL +='<category name="%{BKY_DIC_SET}">';
//    COLL +='<label text="집합"></label>';
  COLL +='<label text="%{BKY_COLL_SET}"></label>';
 //  집합블록 
  COLL +='<block type = "create_ziphap">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_set</field>';
  COLL +='    </block>';
  COLL +='  </value>';  
  COLL +='  <value name="text">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">1,2,3,4</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';      

 //  집합 다루기 블록
  COLL +='<block type = "set_menu1_2">';
  COLL +='  <value name="SET1">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_set</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="SET2">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

  COLL +='<block type = "set_menu1">';
  COLL +='  <value name="SET1">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_set</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="SET2">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';

//   COLL +='<label text="딕셔너리"></label>';
  COLL +='<label text="%{BKY_COLL_DICT}"></label>';
//   딕셔너리1 
  COLL +='<block type = "create_dict">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_dict</field>';
  COLL +='    </block>';
  COLL +='  </value>';  
  COLL +='  <value name="text">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1">"a":1, "b":2</field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';  

  COLL +='<block type ="dic_menu1">';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_dict</field>';
  COLL +='    </block>';
  COLL +='  </value>';  
  COLL +='</block>';

  COLL +='<block type = "va_ser">';
  COLL +='  <value name="dic1">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='  <value name="list">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_dict</field>';
  COLL +='    </block>';
  COLL +='  </value>';  
  COLL +='</block>';
  COLL +='</category>';

 // -------------------------------------------------------------------------------------deque-------
  COLL +='<category name="%{BKY_DEQUE}">';
//    COLL +='<label text="dequeue"></label>';
  COLL +='<label text="%{BKY_COLL_DEQUEUE}"></label>';
//   컬렉션 라이브러리 
  COLL +='<block type="collection_library"></block>';
//   deque 생성
  COLL +='<block type = "create_deque">';
  COLL +='  <value name="VAR">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_deque</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="INPUT">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';  
  COLL +='</block>';
//   deque 다루기1 
  COLL +='<block type = "deque_menu1">';
  COLL +='  <value name="VAR">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_deque</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='  <value name="INPUT">';
  COLL +='    <shadow type="indata">';
  COLL +='      <field name="indata1"></field>';
  COLL +='    </shadow>';
  COLL +='  </value>';
  COLL +='</block>';
//   deque 다루기2 
  COLL +='<block type = "deque_menu2">';
  COLL +='  <value name="VAR">';
  COLL +='    <block type="variables_get">';
  COLL +='      <field name="VAR">my_deque</field>';
  COLL +='    </block>';
  COLL +='  </value>';
  COLL +='</block>';
  COLL +='</category>';  
  COLL +='</category>';  

// COLL +='</category>';
//   딕셔너리2 
//  <block type = "dict1"></block>';
 
//   리스트 생성 
//   <block type="lists_create_with"></block>'; 
//   변수명 이렇게 하면 잘들어가지긴함
//  <value name="ADD0">';
//    <shadow type="indata">';
//      <field name="indata1">';1</field>';
//    </shadow>';
//  </value>';
//  <value name="ADD1">';
//    <shadow type="indata">';
//      <field name="indata1">';2</field>';
//    </shadow>';
//  </value>';
//  <value name="ADD2">';
//    <shadow type="indata">';
//      <field name="indata1">';3</field>';
//    </shadow>';
//  </value>'; 

//   같은 내용을 n번 넣어 리스트 생성 
//   <block type="lists_repeat">';ITEM
//  <value name="ITEM">';
//    <shadow type="indata">';
//      <field name="indata1">';1,2,3,4</field>';
//    </shadow>';
//  </value>';
//  <value name="NUM">';
//    <shadow type="indata">';
//      <field name="indata1">';5</field>';
//    </shadow>';
//  </value>';
//  </block>'; 
//   split -
//  <block type="lists_split">';
//  <value name="INPUT">';
//    <block type="variables_get">';
//      <field name="VAR">my_list</field>';
//    </block>';
//  </value>';
//  <value name="DELIM">';
//    <shadow type="indata">';
//      <field name="indata1">';,</field>';
//    </shadow>';
//  </value>';
//  </block>';
 
//   <block type="tfarraylen"></block>';  


//   튜플 
//   <block type="tuple"></block>'; 
//   새 블록  딕셔너리 
//   <block type="dict"></block>'; 

//   딕셔너리 옵션 
//   <block type="dic_menu">';
//  <value name="dic1">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  <value name="dic2">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  <value name="dic3">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  </block>'; 
//   집합 
//   <block type="set">';
//  <value name="SET">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  </block>'; 
//   집합선택 

//   <block type="set_menu">';
//  <value name="SET1">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  <value name="SET2">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  </block>'; 
//   연산에 있음 <block type="sump"></block>'; 
//   sort,reverse 

//   리스트에서 값 찾기 
//  <block type="list_index">';
//  <value name="LIST">';
//    <shadow type="indata">';
//      <field name="indata1">my_list</field>';
//    </shadow>';
//  </value>';
//  <value name="INDEX">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  </block>';
 


//   remove, pop, count, extend 
//  <block type="list_remove_pop_count_extend">';
//  <value name="LIST">';
//    <shadow type="indata">';
//      <field name="indata1">my_list</field>';
//    </shadow>';
//  </value>';
//  <value name="VALUE">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';

//  </block>';
 

//  리스트 자르기 
//   <block type="list_dot">';
//  <value name="list">';
//    <shadow type="indata">';
//      <field name="indata1">my_list</field>';
//    </shadow>';
//  </value>';
//  <value name="a">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  <value name="b">';
//    <shadow type="indata">';
//      <field name="indata1"></field>';
//    </shadow>';
//  </value>';
//  </block>';
 
//   return 반환
//  <block type="py_return"></block>';
 

//   인덱스 가져오기 
//   <block type="array_select">';
//  <value name="array_var">'; 
//    <block type="variables_get">';
//      <field name="VAR">';array</field>';
//    </block>';
//  </value>';
//  </block>'; 

