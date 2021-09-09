//======================
// .csv를 테이블로 만들기
//======================
function openTextFile(blockId) {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = ".csv"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (e) {
        $("#tblshow").empty();
        $("#tblhead").empty();
        ///////////////////////////////////////////
        var fileArray = new Array(); // csv to json?
        if (e.target.files != undefined) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var csvval = e.target.result.split("\n"); // 개행으로 나누고
                var csvvalue = csvval[0].split(","); // ,로 나누고
                var inputrad = "";
                // csv view! header 1
                for (var i = 0; i < csvvalue.length; i++) {
                    var header = csvvalue[i];
                    addOptions(header);
                }
                csvval[0] = csvval[0].replace("\r", ""); // 커서가 맨 앞에 있으면 없애고
                // row
                var cnt = csvval.length < 2000 ? csvval.length : 2000; // 갯수를 2000개까지
                for (var i = 1; i < cnt - 1; i++) {
                    csvval[i] = csvval[i].replace("\r", "");
                    var cols = csvval[i].split(",");
                    var fileObject = new Object();
                    for (var j = 0; j < cols.length; j++) {
                        var value = cols[j];
                        var name = csvval[0].split(",")[j]; // hedaer name
                        fileObject[name] = value; // value
                        // table body add
                    }
                    fileArray.push(fileObject);
                }
                create_table($("#csv_show")[0], JSON.stringify(fileArray));
                // // 파일 set
                var block = workspace.getBlockById(blockId);
                var bId = Blockly.mainWorkspace.getBlockById(blockId);
                block.setFieldValue(JSON.stringify(fileArray), "csv_url"); // csv_url -> field_input ID
            };
            reader.readAsText(e.target.files.item(0), /* optional */ "euc-kr");
        }
    };
    input.click();
}

// **************************************
// ********   테이블 그리기      *********
// **************************************
function draw_table(Get_CSV_DATA, Get_CSV_Header) {
    var NPTD_Data = Array.from(
        Array(Get_CSV_DATA[0].length),
        () => new Array(Get_CSV_DATA.length)
    );

    for (var i = 0; i < Get_CSV_DATA.length; i++) {
        for (var j = 0; j < Get_CSV_DATA[0].length; j++) {
            NPTD_Data[j][i] = Get_CSV_DATA[i][j];
            // console.log(NPTD_Data[j][0]);
        }
    }

    var NPTD_Data_Header = Array.from(
        Array(NPTD_Data.length),
        () => new Array(NPTD_Data[0].length)
    );

    //--------------------------------- data 속성 ---------------------------//
    var data = [
        {
            type: "table",

            //--------------헤더 설정 ---------------//
            header: {
                values: Get_CSV_Header,
                line: {
                    width: 1,
                    color: "black",
                },
                fill: {
                    color: "grey",
                },
                font: {
                    family: "Arial",
                    size: 12,
                    color: "white",
                },
            },
            //--------------셀 설정 ---------------//
            cells: {
                values: NPTD_Data,
                align: "center",
                line: {
                    color: "black",
                    width: 1,
                },
                font: {
                    family: "Arial",
                    size: 11,
                    color: ["black"],
                },
            },
        },
    ];
    var title = "테이블 확인 하기 ";
    var graph = "graph1";
    var layout = { title: title };
    //--------------------------------- data 속성 ---------------------------//
    Plotly.newPlot(graph, data, layout);
}
