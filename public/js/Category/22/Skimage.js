var SKI = '<category name="사이킷이미지(Skimg)" colour="%{BKY_SCIKITLEARN_IMAGE}">';

SKI += '<block type="import_skimage"></block>';
SKI += '<block type="import_skimage_morphology"></block>';
SKI += '<block type = "ski_class"></block>';
SKI += '<block type="skimage_data"></block>';
SKI += '<block type = "skimage_filters">';
SKI += '  <value name="d2">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '</value>';
SKI += '</block>';
SKI += '<block type = "skimage_transform">';
SKI += '  <value name="d2">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '</value>';
SKI += '</block>';
SKI += '<block type = "skimage_img_as_float">';
SKI += '  <value name="d2">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '</value>';
SKI += '</block>';  
SKI += '<block type="skimage_util">';
SKI += '  <value name="INPUT">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '</value>';
SKI += '</block>';
SKI += '<block type="skimage_measure">';
SKI += '  <value name="INPUT">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '</value>';
SKI += '</block>';

SKI += '<block type = "skimage_color">';
SKI += '  <value name="para">';
SKI += '      <shadow type="indata">';
SKI += '        <field name="indata1"></field>';
SKI += '      </shadow>';
SKI += '  </value>';
SKI += '</block>';

SKI += '<block type = "skimage_feature">';
SKI += '  <value name="para">';
SKI += '      <shadow type="indata">';
SKI += '        <field name="indata1"></field>';
SKI += '      </shadow>';
SKI += '  </value>';
SKI += '</block>';

SKI += '<block type = "skimage_morphology">';
SKI += '  <value name="para">';
SKI += '      <shadow type="indata">';
SKI += '        <field name="indata1"></field>';
SKI += '      </shadow>';
SKI += '  </value>';
SKI += '</block>';


//<!--관필-->';
SKI += '<block type="skimage_draw">';
SKI += '  <value name="data">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
SKI += '</block>';

SKI += '<block type="skimage_data_immunohistochemistry">';
SKI += '  <value name="data">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
SKI += '</block>';

SKI += '<block type="skimage_segmentation">';
SKI += '  <value name="data">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
SKI += '</block>';

//<!-- 성주 -->';
SKI += '<block type="skimage_util_shape">';
SKI += '  <value name="para">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
SKI += '</block>';

SKI += '<block type="ndi_zoom">';
SKI += '  <value name="data">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
SKI += '  <value name="data2">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
SKI += '</block>';


SKI += '<block type="img_as_float">';
SKI += '  <value name="para">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
SKI += '  <value name="para">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';

SKI += '</block>';

SKI += '<block type="data_camera">';
SKI += '  <value name="para">';
SKI += '    <shadow type="indata">';
SKI += '      <field name="indata1"></field>';
SKI += '    </shadow>';
SKI += '  </value>';
 

SKI += '</block>';

SKI += '</category>';