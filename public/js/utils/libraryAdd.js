// 초기 각 카테고리 출력 여부 설정
// $('div[aria-posinset="13"]').hide(); // Numpy
// $('div[aria-posinset="14"]').hide(); // Pandas
// $('div[aria-posinset="15"]').hide(); // Matplotlib 
// $('div[aria-posinset="16"]').hide(); // Scipy 
$('div[aria-posinset="17"]').hide() // Scikit-Image
// $('div[aria-posinset="18"]').hide(); // Scikit-learn

/////////////////////////////////
// 라이브러리 추가 버튼 동작
/////////////////////////////////
$("#block_type_btn").on("click", function () {
    visibleAll();
    $(".btn-group .codebBtn").eq(2).remove()
    if (projectType == 0) {
        projectType = 1
    }
    // $(".ui.modal").modal("hide");
})
$("#code_type_btn").on("click", function () {
    visibleCode();
    $(".btn-group").remove()
    if (projectType == 0) {
        projectType = 2
    }
    // $(".ui.modal").modal("hide");
})

$("#ds_import_btn").on("click", function () {
    showLibLoading();
    // 로딩 중 동시 추가가 안 되도록 처리
    if (isImportLoading == 1) {
        alert('다른 라이브러리를 로딩 중입니다.');
        return;
    }
    isImportLoading = 1;

    $("#ds_import_btn").removeClass("blue").addClass("green");
    $("#ds_import_btn").text("추가 중");

    pyodide.loadPackage(['pandas', 'matplotlib', 'numpy', 'beautifulsoup4', 'statsmodels']).then(() => {
        flagMatplotlibImport = 1;
        $('div[aria-posinset="13"]').show();
        $('div[aria-posinset="14"]').show();
        $('div[aria-posinset="15"]').show();
        $("#ds_import_btn").text("추가됨");
        isImportLoading = 0;
        hideLibLoading();
    })
})

// 머신러닝
$("#ml_import_btn").on("click", function () {
    showLibLoading();
    // 로딩 중 동시 추가가 안 되도록 처리
    if (isImportLoading == 1) {
        alert('다른 라이브러리를 로딩 중입니다.');
        return;
    }
    isImportLoading = 1;

    $("#ml_import_btn").removeClass("blue").addClass("green");
    $("#ml_import_btn").text("추가 중");

    pyodide.loadPackage(['scipy', 'scikit-learn']).then(() => {
        $('div[aria-posinset="16"]').show();
        $('div[aria-posinset="18"]').show();
        $("#ml_import_btn").text("추가됨");
        isImportLoading = 0;
        hideLibLoading();
    })
})

// 이미지 프로세싱 라이브러리
$("#image_processing_import_btn").on("click", function () {
    // 이미 추가된 경우 Return
    if ($('#image_processing_import_btn').data('isImported') == 1) {
        alert('이미 추가된 라이브러리입니다.');
        return;
    }

    // alert("구현중입니다.")
    // return;
    showLibLoading();

    if (isImportLoading == 1) {
        alert('다른 라이브러리를 로딩 중입니다.');
        return;
    }
    isImportLoading = 1;

    $("#image_processing_import_btn").removeClass("blue").addClass("green");
    $("#image_processing_import_btn").text("추가 중");

    importPyodidePackages(['scikit-image']).then(() => {
        $('div[aria-posinset="17"]').show();
        isImportLoading = 0;
        hideLibLoading();
        $("#image_processing_import_btn").text("추가 됨");
        $('#image_processing_import_btn').data('isImported', 1);
    })

    // pyodide.loadPackage(['scikit-image']).then(() => {
    //   $('div[aria-posinset="17"]').show();
    //   isImportLoading = 0;
    //   hideLibLoading();
    //   $("#image_processing_import_btn").text("추가 됨");
    // })
})


/////////////////////////////////
// 로딩 관련 로직
/////////////////////////////////
// 로딩창 생성
function showLibLoading() {
    $("#loading_icon").show();
    $("#runButton1").css({
        'display': "none"
    });
    $("#loading_image2").show(); // 로딩 끝나면 로딩 창 없앰 
    $("#runButton2").css({
        'display': "none"
    });
}

// 로딩창 제거
function hideLibLoading() {
    $("#loading_icon").hide(); // 로딩 끝나면 로딩 창 없앰 
    $("#runButton1").css({
        'display': "block"
    });
    $("#loading_image2").hide(); // 로딩 끝나면 로딩 창 없앰 
    $("#runButton2").css({
        'display': "inline"
    });
}

// 다른 곳으로 옮길 것
function showCodeLoading() {
    $("#loading_dimmer").addClass("active");
    $("#loading_inner_text").html("<b>코드 실행 중...</b><br><br><h4>연산량에 따라 최대 몇 분까지 걸릴 수 있습니다.</h4>");
}