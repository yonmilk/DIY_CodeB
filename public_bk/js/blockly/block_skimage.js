// 2021.01.13 사이킷이미지 import 남지원
Blockly.Blocks['import_skimage'] = {
    init: function () {
      this.appendDummyInput()
          .appendField("[임포트]skimage");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setStyle("skimage_blocks");
      this.setTooltip("");
      this.setHelpUrl("");
    }
};

// 2021.01.13 이미지 사용 (남지원)
Blockly.Blocks['skimage_data'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[이미지사용]")
      .appendField(new Blockly.FieldDropdown([
        [
          "우주인", "astronaut"  
        ],
        
        [
          "binary_blobs", "binary_blobs"
        ],
        // [
        //   "벽돌", "brick"
        // ],
        // [
        //   "색상원", "colorwheel"
        // ],
        [
          "카메라", "camera"
        ],
        // [
        //   "고양이", "cat"
        // ],
        [
          "체스판", "checkerboard"
        ],
        [
          "clock", "clock"
        ],
        [
          "커피", "coffee"
        ],
        [
          "동전", "coins"
        ],
        // [
        //   "독수리", "eagle"
        // ],
        // [
        //   "잔디", "grass"
        // ],
        // [
        //   "자갈", "gravel"
        // ],
        [
          "말", "horse"
        ],
        [
          "로고", "logo"
        ],
        [
          "책(페이지)", "page"
        ],
        [
          "글자", "text"
        ],
        [
          "로켓", "rocket"
        ]
      ]), "DATA");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};


// 2021-01-18 임포트 블록 양승국
Blockly.Blocks['ski_class'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("[임포트]skimage.");
      this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [
          "data", "data"  
        ],
        [
          "color", "color"
        ],
        [
          "filters", "filters"
        ],
        [
          "draw", "draw"
        ],
        [
          "feature", "feature"
        ],
        [
          "morphology", "morphology"
        ],
        [
          "transform", "transform"
        ],
        [
          "util", "util"
        ],
        [
          "exposure", "exposure"
        ],
        [
          "segmentation", "segmentation"
        ],
        // [
        //   "img_as_float", "img_as_float"
        // ], 2020-01-21-전우진 주석처리함
        [
          "measure", "measure"
        ]
      ]), "DATA");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle("skimage_blocks");
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// util
Blockly.Blocks['skimage_util'] = {
  init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.skimage_util)
          .appendField("util.")
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.skimage_util_invert,"invert"],
          [Blockly.Msg.skimage_util_img_as_ubyte,"img_as_ubyte"],
          [Blockly.Msg.skimage_util_view_as_blocks,"view_as_blocks"]]),"DROP")
          .appendField("(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};


// skimage_measure
Blockly.Blocks['skimage_measure'] = {
  init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.skimage_measure)
          .appendField("measure.")
          .appendField(new Blockly.FieldDropdown([[Blockly.Msg.skimage_measure_find_contours,"find_contours"],[Blockly.Msg.skimage_measure_subdivide_polygon,"subdivide_polygon"],[Blockly.Msg.skimage_measure_approximate_polygon,"approximate_polygon"]]),"DROP")
          .appendField("(");
      this.appendValueInput("INPUT")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_filters'] = {
  init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.skimage_filters).appendField("filters.").appendField(new Blockly.FieldDropdown([
          [
            Blockly.Msg.skimage_filters_sobel, "sobel"
          ],
          [
            Blockly.Msg.skimage_filters_roberts, "roberts"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_transform'] = {
  init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.skimage_transform).appendField("transform.").appendField(new Blockly.FieldDropdown([
          [
            Blockly.Msg.skimage_transform_hough_line, "hough_line"
          ],
          [
            Blockly.Msg.skimage_transform_hough_circle, "hough_circle"
          ],
          [
            Blockly.Msg.skimage_transform_hough_circle_peaks, "hough_circle_peaks"
          ],
          [
            Blockly.Msg.skimage_transform_hough_line_peaks, "hough_line_peaks"
          ],
          [
            Blockly.Msg.skimage_transform_probabilistic_hough_line, "probabilistic_hough_line"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_img_as_float'] = {
  init: function () {
      this.appendDummyInput().appendField(Blockly.Msg.skimage_img_as_float).appendField("img_as_float.").appendField(new Blockly.FieldDropdown([
          [
            Blockly.Msg.skimage_img_as_float_img_as_float, "img_as_float"
          ]
      ]), "collection");
      this.appendValueInput("d2").appendField("(").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setOutput(true, null);
      //this.setOutput(true, null);
      this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
      this.setTooltip("");
      this.setHelpUrl("");
  }
};




Blockly.Blocks['skimage_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.skimage_color)
        .appendField("color.")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.skimage_color_rgb2gray,"color.rgb2gray"], 
        [Blockly.Msg.skimage_color_hed2rgb,"color.hed2rgb"], [Blockly.Msg.skimage_color_gray2rgb,"color.gray2rgb"], 
        [Blockly.Msg.skimage_color_rgb2hsv,"color.rgb2hsv"]]), "method")
        .appendField("(");
    this.appendValueInput("para")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['skimage_feature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.skimage_feature)
        .appendField("feature.")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.skimage_feature_canny,"feature.canny"]]), "method")
        .appendField("(");
    this.appendValueInput("para")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['skimage_morphology'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.skimage_morphology)
        .appendField("morphology.")
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.skimage_morphology_convex_hull_image,"morphology.convex_hull_image"],
        [Blockly.Msg.skimage_morphology_skeletonize,"morphology.skeletonize"],
        [Blockly.Msg.skimage_morphology_thin,"morphology.thin"],
        [Blockly.Msg.skimage_morphology_reconstruction,"morphology.reconstruction"]]), "method")
        .appendField("(");
    this.appendValueInput("para")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['skimage_util_shape'] = {
  init: function() {
      this.appendValueInput("para")
          .appendField(Blockly.Msg.skimage_util_shape)
          .appendField("util.view_as_blocks")
          .setCheck(null);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["reshape","reshape"],["shape","shape"]]), "method") //번역 난항..
        .appendField("(");
        this.appendValueInput("var")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(")");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("%{BKY_SCIKITLEARN_IMAGE}");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};