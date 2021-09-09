// 블럭만 보이기
function visibleBlock(){
    $('#codeDiv1').css({
        'display': "none"
    });
    $('#blocklyDiv').css({
        'display': "block",
        'height' : "auto",
        'flex' : "2",
        'width': 'calc(100% - 15px)'
    });
    $('#codeDiv2').css({
        'width' : '100%',
        'margin-top' : '0px'
    });
    $('.container-fluid > .row').css({
        'flex-direction' : 'column',
    });
    $('.blockLayout').css({
        'flex':'6',
        'display' : 'flex',
        'flex-direction' : 'column',
    });
    // svg width 100%
    
    $('.blockLayout').attr('class', 'blockLayout col-md-12')
    $('#codeDiv').attr('class', 'col-md-12'); // 콘솔 창 12
    $('#codeDiv').css({
        'flex': "3",
        'height' : 'auto',
        'margin-top' : '0px'
    }); 
    // 콘솔 창 12
    $('.blocklySvg').attr('width', '100%'); // 블록 창 넓이 
    $('#blocklyDiv').css({
        'width' : '99%'
    })
    $('#blocklyDiv').attr('class', 'borderR'); // 블록 창 넓이 
    // Blockly 리사이즈
    Blockly.svgResize(workspace);
}

function visibleAll(){
    // 전부 보이기
    $('.blockLayout').attr('class', 'blockLayout col-md-8')
    $('.blockLayout').css({
        'flex': '',
        'display': '',
        'flex-direction': ''
    });
    $('.container-fluid > .row').css({
        'flex-direction' : '',
    });
    $('#blocklyDiv').css({
        'display': "",
        'height' : "calc(100vh - 108px)",
        'width' : ''
    });
    $('#codeDiv1').css({
        'display': "",
        'margin-top' : '0px'
        });
        $('#codeDiv2').css({
            'display': "flex",
            'margin-top' : '15px'
        });
        $('#codeDiv').attr('class', 'col-md-4');
        $('#codeDiv').css({
            'flex': '',
            'padding-left': '15px',
            'padding-right': '15px',
            'margin-top': '15px',
            'height': 'calc(100vh - 15px - 78px)',
            'display': 'flex',
            'flex-direction': 'column',
        })
        // Blockly 리사이즈
        Blockly.svgResize(workspace);
}

function visibleCode(){
    // 코드만 보이기
        $('#codeDiv').css({
            'margin-top': '0'
        })
        $('#codeDiv1').css({
            'display': '',
            'margin-top': '15px'
        })
        $('#codeDiv2').css({
            'margin-top': '15px'
        })
        $(".blockLayout").hide();
        $('#codeDiv').attr('class', 'col-md-12');
        Blockly.svgResize(workspace);
}