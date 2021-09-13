/**
 * Pyodide Wasm 초기화 로직
 */

let pyodide;

async function main() {
    pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.18.0/full/' });
    await pyodide.loadPackage('matplotlib');
}

// main() 메소드를 작동하고 promise를 받아옴
let pyodideReadyPromise = main();

async function evaluatePython() {
    await pyodideReadyPromise;
    try {
        exe.innerHTML = await pyodide.runPythonAsync(code);
        let stdout = await pyodide.runPythonAsync("sys.stdout.getvalue()"); // 결과값을 싹 받아줌
        exe.innerHTML = stdout;
    } catch (err) {
        exe.innerHTML = err;
    }
}


pythonCode = `              
import sys
import os
from io import StringIO
sys.stdout = StringIO()
# 크롤링 하기위해 js로만든 _requestsURL 메소드 import
from js import _requestsURL

req = ""

class requests:
    def get(htmlurl):
        _requestsURL(htmlurl)
        return req


##############	
# 그래프 삭제를 위한 맷플롯립 추가
import matplotlib.pyplot as plt

#############
# prompt 버그 fix
from js import input_fixed
input = input_fixed
__builtins__.input = input_fixed
`
// 파이오다이드 초기 세팅 로직
pyodideReadyPromise.then(() => {
    pyodide.runPythonAsync(pythonCode).then(() => {
        // 완료 시 프론트 동작 (Dimmer Loading 창 해제 등)
        $("#loading_dimmer").removeClass("active");

        // 초기 라이브러리 로딩
        let libsList = ['numpy', 'pandas', 'matplotlib', 'scikit-learn', 'scipy', 'beautifulsoup4', 'statsmodels'];
        isImportLoading = 1;
        importPyodidePackages(libsList).then(() => { isImportLoading = 0; });

        fss = pyodide.FS;

        let FS = pyodide._module.FS; // 모듈의 파일시스템
		let PATH = pyodide._module.PATH; // 모듈의 경로
		
		fss.mkdir('/data'); //data디렉토리 생성
		fss.chdir('/data'); //파일 경로 변경

		console.log("FS완료"); //FS완료 콘솔
    });

    /////////////////////////////////////
    // 라이브러리 로딩 Toast
    /////////////////////////////////////

    var isCtrl;
    var isFkey;
    // 실행 단축키
    document.onkeyup = function (e) {
        isCtrl = false;
        isFkey = false;
    }

    document.onkeydown = function (e) {
        if (e.keyCode == 17) {
            isCtrl = true;
        }
        if (e.keyCode == 119) {
            isFkey = true;
        }
        if (isFkey && isCtrl) {
            beforeRun();
        }
    }
});

async function importPyodidePackages(libsList) {
    const lenLibs = libsList.length;
    let index = 1;

    showLibLoading();

    for (const eachLib of libsList) {
        await pyodide.loadPackage(eachLib).then(() => {
            VanillaToasts.create({
                type: 'success',
                text: eachLib + ' 임포트 완료' + ' (' + index + '/' + lenLibs + ')',
                positionClass: 'bottomLeft',
                timeout: 3000,
                icon: '/success.png'
            })
        })
        index += 1;
    }

    hideLibLoading();
}