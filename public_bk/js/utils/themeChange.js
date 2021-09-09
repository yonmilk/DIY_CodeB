let theme = "light";

function themeChange(){
    // 라이트 모드
    if(theme == "light"){
        $("#bg").attr('class', "bg-dark");
        $("#nav").attr('class', "navbar navbar-expand-lg navbar-light bg-dark");
        
        // 버튼 색 변경
        $("#button_block_del").attr("class", "btn btn-secondary btn-sm mr-0");
        $("#button_block_save").attr("class", "btn btn-secondary btn-sm");

        $("#runButton1").attr("class", "btn btn-success btn-sm mr-1");
        $("#button_console_clear").attr("class", "btn btn-secondary btn-sm mr-1");
        $("#button_code_save").attr("class", "btn btn-secondary btn-sm mr-1");
        $("#button_file_upload").attr("class", "btn btn-secondary btn-sm mr-1");
        $("#sidebar_add_libs").attr("class", "btn btn-warning btn-sm mr-1");
        $("#sidebar_button").attr("class", "btn btn-primary btn-sm mr-1");

        // blockly bg 색상
        $(".blocklySvg").css('background-color', "#1e1e1e");
        $(".blocklyToolboxDiv").css("background-color", "#292929");
        $(".blocklyTreeLabel").css("color", "#ffffff");
        $(".blocklyFlyoutBackground").css("fill", "#494949");

    
        // 콘솔창 색상
        $("#console").attr("class", "text-white bg-dark");
        $("#exeArea").attr('class', "form-control bg-dark");
        $("#exeArea").attr('style', "height:18vh; color:#ffffff");

        // aside
        $("#sidebar").css("background", "#343A40");
        $("#runButton2").attr("class", "btn btn-success btn-sm mr-1");
        $("#button_close").attr("class", "btn btn-primary btn-sm mr-1");
        $("#button_clear").attr("class", "btn btn-danger btn-sm mr-1");
        $("#button_reset").attr("class", "btn btn-danger btn-sm mr-1");


        theme = "dark";
    
    // 다크 모드 -> 화이트 모드
    } else if(theme == "dark") {
        $("#bg").attr('class', "bg-light");
        $("#nav").attr('class', "navbar navbar-expand-lg navbar-light bg-light");

        // 버튼 색 변경
        $("#button_block_del").attr("class", "btn btn-outline-secondary btn-sm mr-0");
        $("#button_block_save").attr("class", "btn btn-outline-secondary btn-sm");
        
        $("#runButton1").attr("class", "btn btn-outline-success btn-sm mr-1");
        $("#button_console_clear").attr("class", "btn btn-outline-secondary btn-sm mr-1");
        $("#button_code_save").attr("class", "btn btn-outline-secondary btn-sm mr-1");
        $("#button_file_upload").attr("class", "btn btn-outline-secondary btn-sm mr-1");
        $("#sidebar_add_libs").attr("class", "btn btn-outline-warning btn-sm mr-1");
        $("#sidebar_button").attr("class", "btn btn-outline-primary btn-sm mr-1");
        $(".blocklyFlyoutBackground").css("fill", "#e3e3e3");

        // 
        $(".blocklySvg").css('background-color', "#ffffff");
        $(".blocklyToolboxDiv").css("background-color", "#DDDDDD")
        $(".blocklyTreeLabel").css("color", "#323232");
        // 콘솔창 색상
        $("#console").attr("class", "text-white bg-dark");
        $("#exeArea").attr('class', "form-control bg-light");
        $("#exeArea").attr('style', "height:18vh; color:#495057");

        // aside
        $("#sidebar").css("background", "#ffffff");
        $("#runButton2").attr("class", "btn btn-outline-success btn-sm mr-1");
        $("#button_close").attr("class", "btn btn-outline-primary btn-sm mr-1");
        $("#button_clear").attr("class", "btn btn-outline-danger btn-sm mr-1");
        $("#button_reset").attr("class", "btn btn-outline-danger btn-sm mr-1");

        theme = "light";
    }

}