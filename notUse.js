// 기태 처리 (파일) 20.12.29------------------------------------------------------------------------->
    // 외부 파일 입력 제거 
    <input type="file" id="file_input" name="file-input"
    accept=".jpg, .png, .txt, .csv"
    onchange="loadFile(this);"
    /> 


//== 기태 수정 (로컬 파일 열기 ) ===================================================
    function loadFile(sender) {
        var reader = new FileReader();
        reader.onload = function (sender) {      // reader가 준비되면 sender
            datas = sender.target.result;          
            console.log("datas", datas);
            fss.writeFileSync(fileName2, datas);
        };

        fileName2 =  sender.files[0].name;
        reader.readAsText(sender.files[0]);        
    }

//기태 휴지통 처리 21.01.16----------------------------------------------------------------------------->
function trashcanClean(){        
    Blockly.mainWorkspace.trashcan.emptyContents();
}

// **************************************
// ********   CSV파일열기 - 지금은 사용되지 않음     **********//
// **************************************//   
async function Show_csv(test) {
    var Show_CSV_Data_S = await Data_process();
    console.log("Show_csv : Load_csv\n", Show_CSV_Data_S);
    var rows = Show_CSV_Data_S.split(/\r\n|\n/);
    var cols = Show_CSV_Data_S.split(/\r\n|\n/)[0].split(/,/);
    var Get_CSV_DATA = Array.from(Array(cols.length), () => new Array((rows.length) - 1));
    for (var i = 0; i < (rows.length) - 1; i++) {
        for (var j = 0; j < cols.length; j++) {
            test = rows[i].split(/,/)[j];
            Get_CSV_DATA[j][i] = test;
        }
    }
    var rows_leng = rows.length;
    var cols_leng = cols.length;
    draw_table(Get_CSV_DATA, rows_leng, cols);
    return test;
}

// **************************************
// ********   파일 열기 -- 지금은 사용되지않음     **********//
// **************************************//
function Data_process() {
    return new Promise(function (resolve, rejcet) {

        var Show_CSV_Data = document.createElement("input");
        Show_CSV_Data.setAttribute("id", "Data_S_read_CSV");
        Show_CSV_Data.type = "file";
        Show_CSV_Data.accept = ".csv"; //loadFile    
        Show_CSV_Data.onchange = function (event) {

            if (event.target.files != undefined) {
                var file_result = event.target.files;
                // console.log("fitle_result",file_result); 
                testing_1 = event.target.files[0].name;

                var reader = new FileReader();
                reader.onload = function (e) { //들어오기전에 먼저 실행됨  
                    var fileResult = e.target.result;
                    resolve(fileResult);
                };
            }
            reader.readAsText(event.target.files[0], /* optional */ "euc-kr");
            // testing_1 = document.getElementById('Data_S_read_CSV').value;
        }

        Show_CSV_Data.click();
    });
}

// **************************************
// ********  데이터셋_불러오기 - 지금은 사용되지 않음     **********//
// **************************************//  
function exportToCsv(filename, rows) {

    console.log("fileName_check", fileName);
    console.log("rows_check", rows);
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
        var innerValue = row[j] === null ? '' : row[j].toString();
        if (row[j] instanceof Date) {
            innerValue = row[j].toLocaleString();
        };
        var result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0)
            result = '"' + result + '"';
        if (j > 0)
            finalVal += ',';
        finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob(["\ufeff" + csvFile], {
        type: 'text/csv;charset=utf-8;'
    }); //utf-8  (["\ufeff"+data+], {type: 'text/csv;charset=utf-8;'}); // 기존 ([csvFile], { type: 'text/csv;charset=ANSI;' });
    if (navigator.msSaveBlob) { // IE 10+  
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}



    // 안쓰는 부분인거같음 
    //
    // function processFile(file) {
    //   var reader = new FileReader();
    //   reader.onload = function () {
    //   var fileResult = reader.result;
    //   var val = sessionStorage.setItem('file', fileResult);
    //   };
    //   reader.readAsText(file, /* optional */ "cp949");
    // }

    /* 그래프 */
    // const metrics = ['loss', 'val_loss', 'acc', 'val_acc']
    // const container = {
    //   name: 'Model Training',
    //   styles: {
    //     height: '1000px'
    //   }
    // };

    // 스크래핑에서 쓰는거같은데 안쓰는거같음
    // async function saveModel(model) {
    //   model.save('localstorage://my-model');
    //   alert('완료되었습니다.');
    // }

    // canvas 활성화 & 비활성화
    /*function canvas_power() {
      var canvasState = $("#canvas")[0];
      var btnSave = $("#btn_save")[0];
      if (canvasState.style.display == "" || canvasState.style.display == "none") {
        canvasState.style.display = "block";
        $("#btn_save")[0].style.visibility = "visible";
        $("#btn_canvas").val("그림판 비활성화");
      } else {
        canvasState.style.display = "none";
        $("#btn_save")[0].style.visibility = "hidden";
        $("#btn_canvas").val("그림판 활성화");
      }
    }
    */

    // canvas 저장하기
    // const alphaPixel = []

    // function canvas_save() {
    //   var download = $("#download")[0];
    //   var canvas = $("#canvas")[0];
    //   var c = document.getElementById("canvas");
    //   var ctx = c.getContext("2d");
    //   console.log(ctx);
    //   var pixel = ctx.getImageData(0, 0, 28, 28).data;
    //   for (i = 3, idx = 0; i < pixel.length; i += 4) {
    //     alphaPixel[idx] = pixel[i];
    //     idx++;
    //   }
    //   console.log(alphaPixel);
    // }
