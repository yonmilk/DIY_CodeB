Blockly.Python['bioimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'from BIO.Seq import Seq';
    return code;
};

Blockly.Python['bioimportall'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from BIO.SeqUtils import *';
    return code;
};

Blockly.Python['biosequtillsimport'] = function(block) {
    var dropdown_sequtils = block.getFieldValue('sequtils');
    // TODO: Assemble Python into code variable.
    var code = `from Bio.SeqUtils import ${dropdown_sequtils}`;
    return code;
};

Blockly.Python['biodataimport'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'from BIO.Data import CondonTable';
    return code;
};

