var CRAW = '<category name="크롤링" colour="%{BKY_CROLL_HUE}">';
CRAW += '<block type="croll_bs4_import"></block>';

CRAW += '<block type="croll_requests_get">';
CRAW += '<value name="URL">';
CRAW += '<shadow type="indata">';
CRAW += '<field name="indata1">"https://www.melon.com/chart/index.htm"</field>';
CRAW += '</shadow>';
CRAW += '</value>';
CRAW += '</block>';

CRAW += '<block type="croll_req_text">';
CRAW += '<value name="VAR">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">html</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '</block>';

CRAW += '<block type="croll_url_load">';
CRAW += '<value name="VAR">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">soup</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '<value name="VAR2">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">html</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '</block>';

CRAW += '<block type="croll_soup_select">';
CRAW += '<value name="VAR">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">result</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '<value name="INPUT">';
CRAW += '<shadow type="indata">';
CRAW += '<field name="indata1">"div >span>a"</field>';
CRAW += '</shadow>';
CRAW += '</value>';
CRAW += '</block>';

CRAW += '<block type="croll_get_text">';
CRAW += '<value name="VAR">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">result</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '</block>';

CRAW += '<block type="croll_find_all">';
CRAW += '<value name="VAR">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">result</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '<value name="VAR2">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">soup</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '<value name="INPUT">';
CRAW += '<shadow type="indata">';
CRAW += '<field name="indata1"></field>';
CRAW += '</shadow>';
CRAW += '</value>';
CRAW += '</block>';

CRAW += '<block type="croll_soup">';
CRAW += '<value name="VAR">';
CRAW += '<block type="variables_get">';
CRAW += '<field name="VAR">soup</field>';
CRAW += '</block>';
CRAW += '</value>';
CRAW += '<value name="INPUT">';
CRAW += '<shadow type="indata">';
CRAW += '<field name="indata1">title</field>';
CRAW += '</shadow>';
CRAW += '</value>';
CRAW += '</block>';

CRAW += '</category>';