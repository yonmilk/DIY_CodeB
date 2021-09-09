var SCIPY = '<category name="%{BKY_CATEGORY_SCIPY}" colour="%{BKY_SCIPY_HUE}">';

SCIPY += '<block type="import_scipy"></block>';
SCIPY += '<block type="curve_fit"></block>';
SCIPY += '<block type="univariatespline"></block>';
SCIPY += '<block type="quad"></block>';
SCIPY += '<block type="scipy_io_wavfile_read">';
SCIPY += '  <value name="file">';
SCIPY += '    <block type="fileopen2"></block>';   
SCIPY += '  </value>';
SCIPY += '</block>';
//'<!-- 지원 -->';
SCIPY += '<block type="scipy_butter">';
SCIPY += '  <value name="INPUT">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';
SCIPY += '<block type="scipy_sosfilt">';
SCIPY += '  <value name="INPUT">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';
SCIPY += '<block type="scipy_hilbert">';
SCIPY += '  <value name="INPUT">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';
SCIPY += '<block type="scipy_correlate">';
SCIPY += '  <value name="INPUT">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';
SCIPY += '<block type="scipy_stft_istft">';
SCIPY += '  <value name="INPUT">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';
SCIPY += '<block type="scipy_find_peaks">';
SCIPY += '  <value name="INPUT">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';
SCIPY += '<block type="scipy_fft">';
SCIPY += '  <value name="INPUT">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';
//'<!-- 성주 -->';
SCIPY += '<block type="scipy_signal_cwt">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type="scipy_signal_spectrogram">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type="scipy_signal_gaussian">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type="scipy_signal_hann">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type="scipy_signal_flattop">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type="scipy_signal_blackman">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type="scipy_signal_exponential">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type="scipy_signal_hamming">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';


//<!-- 임시 승국 -->';
SCIPY += '<block type = "scipy_write_read">';
SCIPY += '<value name="d1">';
SCIPY += '  <shadow type="indata">';
SCIPY += '    <field name="indata1"></field>';
SCIPY += '  </shadow>';
SCIPY += '</value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_cascade">';
SCIPY += '<value name="d1">';
SCIPY += '  <shadow type="indata">';
SCIPY += '    <field name="indata1"></field>';
SCIPY += '  </shadow>';
SCIPY += '</value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_daub">';
SCIPY += '<value name="d1">';
SCIPY += '  <shadow type="indata">';
SCIPY += '    <field name="indata1"></field>';
SCIPY += '  </shadow>';
SCIPY += '</value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_morlet">';
SCIPY += '<value name="d1">';
SCIPY += '  <shadow type="indata">';
SCIPY += '    <field name="indata1"></field>';
SCIPY += '  </shadow>';
SCIPY += '</value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_qmf">';
SCIPY += '<value name="d1">';
SCIPY += '  <shadow type="indata">';
SCIPY += '    <field name="indata1"></field>';
SCIPY += '  </shadow>';
SCIPY += '</value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_ricker">';
SCIPY += '<value name="d1">';
SCIPY += '  <shadow type="indata">';
SCIPY += '    <field name="indata1"></field>';
SCIPY += '  </shadow>';
SCIPY += '</value>';
SCIPY += '</block>';

//<!-- 임시 승국 -->';

SCIPY += '<block type = "scipy_bartlett">';
SCIPY += '  <value name="d2">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_tsearch">';
SCIPY += '  <value name="d2">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_distance_matrix_minkowski_distance_minkowski_distance_p">';
SCIPY += '  <value name="d2">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type = "scipy_procrustes">';
SCIPY += '  <value name="d2">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type = "dendrogram">';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '<block type = "ward">';
SCIPY += '  <value name="variable">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '  <value name="data">';
SCIPY += '    <shadow type="indata">';
SCIPY += '      <field name="indata1"></field>';
SCIPY += '    </shadow>';
SCIPY += '  </value>';
SCIPY += '</block>';

SCIPY += '</category>';