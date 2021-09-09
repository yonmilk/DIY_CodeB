MATH = '<category name="%{BKY_CATEGORY_OPERATION}" colour="%{BKY_MATH_HUE}">';
MATH +='<block type = "operation_library"></block>';

// MATH +='<label text="수학"></label>';
MATH +='<label text="%{BKY_MATH_MATH}"></label>';

//<!--<block type = "math_library"></block>';-->';
//<!--2020-12-29 전우진 math1  -->';
MATH +='<block type = "math1">';
MATH +='  <value name="va">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1"></field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';

MATH +='<block type = "math2">';
MATH +='  <value name="va1">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1"></field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='  <value name="va2">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1"></field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';

MATH +='<block type = "math3"></block>';

MATH += '<block type="math_single">';
MATH += '<value name="NUM">';
MATH += '  <shadow type="indata">';
MATH += '    <field name="indata1"></field>';
MATH += '  </shadow>';
MATH += '</value>';
MATH += '</block>';

//<!--2020-12-29 전우진 math1 end -->';
// MATH +='<label text="통계 및 랜덤"></label>';
MATH +='<label text="%{BKY_MATH_STAT_RAN}"></label>';
//<!--<block type = "static_library"></block>';-->';

MATH +='<block type = "statistics1">';
MATH +='  <value name="va">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1"></field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';

MATH +='<block type = "statistics2">';
MATH +='  <value name="va1">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1"></field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='  <value name="va2">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1"></field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';

//<!--<block type = "random_library"></block>';-->';
MATH +='<block type = "random1_integer">';
MATH +='</block>';

MATH +='<block type = "random1_choice">';
MATH +='  <value name="va2">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1">컬렉션</field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';

MATH +='<block type = "random1_shuffle">';
MATH +='  <value name="va3">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1">컬렉션</field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';

MATH +='<block type = "random2">';
MATH +='  <value name="va1">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1">시작</field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='  <value name="va2">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1">끝</field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';

MATH +='<block type = "random3">';
MATH +='  <value name="va1">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1">컬렉션</field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='  <value name="va2">';
MATH +='    <shadow type="indata">';
MATH +='      <field name="indata1">갯수</field>';
MATH +='    </shadow>';
MATH +='  </value>';
MATH +='</block>';
MATH +='</category>';
