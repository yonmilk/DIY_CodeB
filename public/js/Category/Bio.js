let BIO = '<category name="%{BKY_CATEGORY_BIO}" colour="%{BKY_BIO_HUE}">';

// 바이오파이썬
BIO += '<block type="bioimport"></block>';
BIO += '<block type="bioimportall"></block>';
BIO += '<block type="biosequtillsimport"></block>';
BIO += '<block type="biodataimport"></block>';

BIO += '<block type="bioseq">';
BIO += '  <value name="var">';
BIO += '    <block type="variables_get">';
BIO += '          <field name="VAR">seq</field>';
BIO += '      </block>';
BIO += '  </value>';
BIO += '  <value name="text">';
BIO += '    <shadow type="indata">';
BIO += '      <field name="indata1"></field>';
BIO += '    </shadow>';
BIO += '  </value>';
BIO += '</block>';

BIO += '<block type="biogc">';
BIO += '  <value name="var">';
BIO += '    <block type="variables_get">';
BIO += '          <field name="VAR">gc_seq</field>';
BIO += '      </block>';
BIO += '  </value>';
BIO += '  <value name="text">';
BIO += '    <shadow type="indata">';
BIO += '      <field name="indata1"></field>';
BIO += '    </shadow>';
BIO += '  </value>';
BIO += '</block>';

BIO += '<block type="biocodon">';
BIO += '  <value name="var">';
BIO += '    <block type="variables_get">';
BIO += '          <field name="VAR">codon_table</field>';
BIO += '      </block>';
BIO += '  </value>';
BIO += '  <value name="text">';
BIO += '    <shadow type="indata">';
BIO += '      <field name="indata1">""</field>';
BIO += '    </shadow>';
BIO += '  </value>';
BIO += '</block>';

BIO += '<block type="biocodonlist">';
BIO += '  <value name="var">';
BIO += '    <block type="variables_get">';
BIO += '          <field name="VAR">codon_table</field>';
BIO += '      </block>';
BIO += '  </value>';
BIO += '</block>';

BIO += '<block type="biomw">';
BIO += '  <value name="var">';
BIO += '    <shadow type="indata">';
BIO += '      <field name="indata1"></field>';
BIO += '    </shadow>';
BIO += '  </value>';
BIO += '</block>';

BIO += '<block type="biosft">';
BIO += '  <value name="var">';
BIO += '    <shadow type="indata">';
BIO += '      <field name="indata1"></field>';
BIO += '    </shadow>';
BIO += '  </value>';
BIO += '</block>';

BIO += '<block type="biostm">';
BIO += '  <value name="var">';
BIO += '    <shadow type="indata">';
BIO += '      <field name="indata1"></field>';
BIO += '    </shadow>';
BIO += '  </value>';
BIO += '</block>';

BIO += '</category>';