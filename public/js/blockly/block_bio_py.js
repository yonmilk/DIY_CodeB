Blockly.Python['bioimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'from Bio.Seq import Seq';
    return code;
};

Blockly.Python['bioimportall'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'from Bio.SeqUtils import *';
    return code;
};

Blockly.Python['biosequtillsimport'] = function (block) {
    var dropdown_sequtils = block.getFieldValue('sequtils');
    // TODO: Assemble Python into code variable.
    var code = `from Bio.SeqUtils import ${dropdown_sequtils}`;
    return code;
};

Blockly.Python['biodataimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'from Bio.Data import CondonTable';
    return code;
};

Blockly.Python['bioseq'] = function (block) {
    var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${variable_var} = Seq(${value_text})`;
    return code;
};

Blockly.Python['biogc'] = function (block) {
    var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${variable_var} = GC(${value_text})`;
    return code;
};

Blockly.Python['biocodon'] = function (block) {
    var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `${variable_var} = CondonTable.unambiguous_dna_by_name[${value_text}]`;
    return code;
};

Blockly.Python['biocodonlist'] = function (block) {
    var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    var dropdown_codonlist = block.getFieldValue('codonlist');
    // TODO: Assemble Python into code variable.
    var code = `${variable_var} = CondonTable.unambiguous_dna_by_name["${dropdown_codonlist}""]`;
    return code;
};


Blockly.Python['biomw'] = function (block) {
    var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `molecular_weight(${variable_var})`;
    return code;
};

Blockly.Python['biosft'] = function (block) {
    var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `six_frame_translations(${variable_var})`;
    return code;
};

Blockly.Python['biostm'] = function (block) {
    var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = `mt.Tm_Wallace(${variable_var})`;
    return code;
};

// Blockly.Python['bioseq1'] = function (block) {
//     var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = `seq1(${variable_var})`;
//     return code;
// };

// Blockly.Python['bioseq3'] = function (block) {
//     var variable_var = Blockly.Python.valueToCode(block, 'var', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = `seq1(${variable_var})`;
//     return code;
// };