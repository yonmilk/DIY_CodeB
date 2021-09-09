//===================================
// 쿠키 
//===================================
// 쿠키 생성 함수
function setCookie(cName, cValue, cDay){
    let expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies + "SameSite=Lax";
}

// 쿠키 확인하기 함수
function checkCookie(id) {
    try {
        return getCookie(id); // 쿠기이름이 download_block을 가져와 checkEvent에 저장
        //console.log("쿠키있음 : " + checkEvent); 
    } catch (error) {
        setCookie(id,"block", 1); // 저장된 쿠키가 없을 경우 download_block이름의 쿠키 생성/ 유지 기간은 1일
        return getCookie(id); 
        //console.log("쿠키없음" + checkEvent);
    }
}

// 쿠키 가져오기 함수
function getCookie(cName) {
    cName = cName + '=';
    let cookieData = document.cookie;
    let start = cookieData.indexOf(cName);
    let cValue = '';
    if(start != -1){
        start += cName.length;
        let end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }

    return unescape(cValue);
}