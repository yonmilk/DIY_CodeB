Blockly.JavaScript['bioimport'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['bioimportall'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['biosequtillsimport'] = function (block) {
    var dropdown_sequtils = block.getFieldValue('sequtils');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['biodataimport'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['bioseq'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
};

Blockly.JavaScript['biogc'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
};

Blockly.JavaScript['biocodon'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
};

Blockly.JavaScript['biocodonlist'] = function (block) {
    var variable_list = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var'), Blockly.Variables.NAME_TYPE);
    var dropdown_codonlist = block.getFieldValue('codonlist');
    // TODO: Assemble JavaScript into code variable.
    var code = "\n";
    return code;
};

Blockly.JavaScript['biomw'] = function (block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "\n";
    return code;
};

Blockly.JavaScript['biosft'] = function (block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "\n";
    return code;
};

Blockly.JavaScript['biostm'] = function (block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "\n";
    return code;
};

// Blockly.JavaScript['bioseq1'] = function (block) {
//     var value_input = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
//     var code = "\n";
//     return code;
// };


// Blockly.JavaScript['bioseq3'] = function (block) {
//     var value_input = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
//     var code = "\n";
//     return code;
// };
