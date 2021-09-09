'use strict';
// BlockExport_Editor의 마지막에 visibleAll() 함수를 호출시켜서 블록+코드를 기본 배치로 함.

// 블럭만 보이기
function visibleBlock() {
  // 블록-콘솔 2:1 설정
  $('#bottomDiv').css({
    'grid-template-columns': '2fr 10px 1fr',
  });
  // 블록, 콘솔만 나오게 설정
  $('#blocklyDiv').css({
    display: '',
    'grid-column': '1',
  });
  $('#codeDiv').css({
    'grid-column': '3',
    'grid-template-rows': '',
    'grid-template-columns': '',
  });
  $('#codeDiv2').css({
    'grid-column': '',
    'grid-row': '1',
  });
  // 코드 숨기기
  $('#codeDiv1').css({
    display: 'none',
  });
  // 블록-코드 스플릿바 만들기
  $('.gutter-col-block-code').css({
    display: '',
    'grid-column': '2',
  });
  // 코드-콘솔 스플릿바 숨기기
  $('.gutter-row-code-console').css({
    display: 'none',
  });
  $('.gutter-col-code-console').css({
    display: 'none',
  });

  // 스플릿 바 생성
  Split({
    minSize: 300,
    columnGutters: [
      {
        track: 1,
        element: $('.gutter-col-block-code')[0],
      },
    ],
  });
}

// 블럭 + 코드 보이기
function visibleAll() {
  // 블록-코드 2:1 설정
  $('#bottomDiv').css({
    'grid-template-columns': '2fr 10px 1fr',
  });
  $('#blocklyDiv').css({
    display: '',
    'grid-column': '1',
  });
  $('.gutter-col-block-code').css({
    display: '',
    'grid-column': '2',
  });
  // 코드-콘솔 2:1 설정
  $('#codeDiv').css({
    'grid-column': '3',
    'grid-template-rows': '2fr 10px 1fr',
    'grid-template-columns': '',
  });
  $('#codeDiv1').css({
    display: '',
    'grid-column': '',
    'grid-row': '1',
  });
  $('.gutter-row-code-console').css({
    display: '',
    'grid-column': '',
    'grid-row': '2',
  });
  $('.gutter-col-code-console').css({
    display: 'none',
  });
  $('#codeDiv2').css({
    'grid-column': '',
    'grid-row': '3',
  });

  //스플릿 바 생성
  Split({
    rowMinSize: 100,
    columnMinSize: 300,
    columnGutters: [
      {
        track: 1,
        element: $('.gutter-col-block-code')[0],
      },
    ],
    rowGutters: [
      {
        track: 1,
        element: $('.gutter-row-code-console')[0],
      },
    ],
  });
}

// 코드만 보이기
function visibleCode() {
  // 코드-콘솔로 꽉 채우기
  $('#bottomDiv').css({
    'grid-template-columns': '',
  });

  // 블록과 블록-코드 스플릿바 숨기기
  $('#blocklyDiv').css({
    display: 'none',
  });
  $('.gutter-col-block-code').css({
    display: 'none',
  });

  // 코드-콘솔 가로정렬
  $('#codeDiv').css({
    'grid-column': '1',
    'grid-template-columns': '2fr 10px 1fr',
    'grid-template-rows': '',
  });
  $('#codeDiv1').css({
    display: '',
    'grid-column': '1',
    'grid-row': '',
  });
  $('.gutter-row-code-console').css({
    display: 'none',
  });
  $('.gutter-col-code-console').css({
    display: '',
    'grid-column': '2',
  });
  $('#codeDiv2').css({
    'grid-column': '3',
    'grid-row': '',
  });

  //스플릿 바 생성
  Split({
    minSize: 300,
    columnGutters: [
      {
        track: 1,
        element: $('.gutter-col-code-console')[0],
      },
    ],
  });
}
