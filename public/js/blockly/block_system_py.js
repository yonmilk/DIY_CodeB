Blockly.Python['os_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import os \nimport time\nimport datetime\nimport shutil\n";
  return code;
};

Blockly.Python['os_data_remove'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `import os\nprint(os.chdir("/data"))\nif os.path.exists("/data"):\n  for file in os.scandir("/data") :\n    os.remove(file.path)\nprint(os.listdir())\n`;
  return code;
};

Blockly.Python['os_data_listdir'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `import os\nprint(os.chdir('/data'))\nprint(os.listdir())\n`;
  return code;
};

Blockly.Python['os_data_download'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `\n`;
  return code;
};

Blockly.Python['time_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import time \n";
  return code;
};

Blockly.Python['pyodide_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import pyodide \n";
  return code;
};

Blockly.Python['file_library'] = function(block) {
  var dropdown_list = block.getFieldValue('list');
  // TODO: Assemble Python into code variable.
  var code = `import ${dropdown_list}`;
  return code;
};

Blockly.Python['import_pil_pilimg_imagefilter'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import PIL.Image as pilimg \nfrom PIL import ImageFilter \n";
  return code;
};


// 2021.01.22 csv 남지원
Blockly.Python['csv_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import csv \n";
  return code;
};

Blockly.Python['datetime_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import datetime\n";
  return code;
};

Blockly.Python['shutil_library'] = function (block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "import shutil \n";
  return code;
};
  
Blockly.Python['pickle_dump'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "pickle.dump" + '(' + value_name1 + ", " + value_name2 + ')'+ '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Python['pickle_load'] = function (block) {
  var variable_list = Blockly.Python.variableDB_.getName(block.getFieldValue('list'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = variable_list + "= pickle.load(" + value_name + ")" + '\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


Blockly.Python['os_getcwd'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "os.getcwd" + '(' + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['os_listdir'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "os.listdir" + '(' + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['os_mkdir'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "os.mkdir"+ "('" + value_name + "')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['os_dir'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  var dropdown_directory = block.getFieldValue('directory');

  var code = dropdown_directory + "(" + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['os_chdir'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "os.chdir"+ "(" + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['os_remove'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'va', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "os.remove"+ "(" + value_name + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['os_rename'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "os.rename"+ "(" + value_name1 + " , " + value_name2 + ")\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['shutil_file'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  var dropdown_directory = block.getFieldValue('shutil');

  var code = dropdown_directory + "('" + value_name1 + "','" + value_name2 + "')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['shutil_copytree'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "shutil.copytree"+ "('" + value_name1 + "','" + value_name2 + "')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['shutil_move'] = function (block) {
  var value_name1 = Blockly.Python.valueToCode(block, 'va1', Blockly.Python.ORDER_ATOMIC);
  var value_name2 = Blockly.Python.valueToCode(block, 'va2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "shutil.move"+ "('" + value_name1 + "','" + value_name2 + "')";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};


//리성주
Blockly.Python['datetime_now'] = function(block) {
  var value_variables = Blockly.Python.valueToCode(block, 'variables', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = value_variables + " = datetime.datetime.now()\n";
  return code;
};

Blockly.Python['now_method'] = function(block) {
  var value_object = Blockly.Python.valueToCode(block, 'object', Blockly.Python.ORDER_ATOMIC);
  var dropdown_datetime_module = block.getFieldValue('datetime_module');
  // TODO: Assemble Python into code variable.
  var code = value_object + "." + dropdown_datetime_module;
  return [code, Blockly.Python.ORDER_ATOMIC];
};

//
Blockly.Python['time_'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'time.time()';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['strftime_'] = function(block) {

  var value_object = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
  var value_object2 = Blockly.Python.valueToCode(block, 'val2', Blockly.Python.ORDER_ATOMIC);

  // TODO: Assemble Python into code variable.
  var code = 'time.strftime(' + value_object + ',' + value_object2 + ')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['sleep'] = function(block) {
  var value_val1 = Blockly.Python.valueToCode(block, 'val1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep(' + value_val1 + ")\n";
  return code;
};

Blockly.Python['abspath'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'os.path.abspath(' + value_name + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['basename'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'os.path.basename(' + value_name + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['dirname'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'os.path.dirname(' + value_name + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['exists'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'os.path.exists(' + value_name + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['getsize'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'os.path.getsize(' + value_name + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['is_dir_file'] = function(block) {
  var dropdown_what = block.getFieldValue('what');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'os.path.' + dropdown_what + value_name + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['path_split'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'os.path.split(' + value_name + ")";
  return [code, Blockly.Python.ORDER_ATOMIC];
};