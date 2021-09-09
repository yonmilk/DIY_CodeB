// ─────────────────────────────────────────────────────────────
// 반드시 menu 함수를 바인드해주세요.
// 반드시 argument로 this와 ACTION을 보내주세요.
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// 전역 변수

// 소리
let isMuted = false;
let modifiedVolumn = 1; // 0 ~ 1

// 폰트
let nowFontSize = 18;

// 모달 애니메이션 진행 여부
var isAnimateInSideBarModal = false;
// ─────────────────────────────────────────────────────────────


let prevWorkspaceVolumn = Blockly.WorkspaceAudio.prototype.play;
Blockly.WorkspaceAudio.prototype.play = function (name, opt_volumn) {
  if (!isMuted) {
    prevWorkspaceVolumn.call(this, name, modifiedVolumn);
  }
}

// Mute Volumn
function muteVolumn() {
  isMuted ? isMuted = false : isMuted = true;
}

// Call this when volumn control button is pressed.
function controlVolumn() {
  modifiedVolumn = document.getElementById('input_control_vol').value;
}

const handleClickMenuToggle = () => {
  if (isAnimateInSideBarModal) {
    return;
  };

  // 애니메이션 시작
  isAnimateInSideBarModal = true;

  var target = $(".zeynep");
  if (target.attr('data-status') === 'close') {
    // 닫혀있음 / 열어야함
    $('#zeynep-modal').fadeIn(400, function () {
      target.css('transform', 'translateX(0%)');
      target.attr('data-status', 'opened');
      isAnimateInSideBarModal = false;
    });
  } else if (target.attr('data-status') === 'opened') {
    // 열려있음 / 닫혀야함
    target.css('transform', 'translateX(-100%)');
    target.attr('data-status', 'close');
    $('#zeynep-modal').fadeOut(400, function () {
      setTimeout(() => {
        isAnimateInSideBarModal = false;
      }, 500);
    });
  }
}

const menuFN = function (target, arg) {

  switch (arg) {
    case 'DISAPPEAR_MENU':
      handleClickMenuToggle();
      break;

    case 'APPEAR_SUBMENU':
      target.parentNode.querySelector('div.submenu').style.left = '0';
      break;

    case 'UNDO':
      target.parentNode.parentNode.style.left = '295px';
      break;

    case "SET_FONT_SIZE":
      Swal.fire({
        title: '폰트를 조정하세요.',
        icon: 'question',
        input: 'range',
        inputLabel: '폰트 사이즈',
        showCancelButton: true,
        inputAttributes: {
          min: 14,
          max: 32,
          step: 1
        },
        inputValue: nowFontSize,
        preConfirm: function (value) {
          nowFontSize = value;
          $('.CodeMirror').css('font-size', value + 'px');
          Swal.fire({
            title: '완료',
            text: "폰트가 조정되었습니다.",
            icon: "success",
            confirmButtonText: '확인'
          }).then(() => {
            handleClickMenuToggle();
          });
        }
      });

      break;

    case "SET_VOLUME":
      Swal.fire({
        title: '볼륨을 조정하세요.',
        icon: 'question',
        input: 'range',
        inputLabel: '볼륨 레벨',
        showCancelButton: true,
        inputAttributes: {
          min: 0,
          max: 100,
          step: 1
        },
        inputValue: modifiedVolumn * 100,
        preConfirm: function (value) {
          isMuted = value === 0 ? true : false;
          modifiedVolumn = value / 100;

          Swal.fire({
            title: '완료',
            text: "볼륨이 조정되었습니다.",
            icon: "success",
            confirmButtonText: '확인'
          }).then(() => {
            handleClickMenuToggle();
          });
        }
      });

      break;

    default:
      break;
  }
}

const MENU_CONFIG = {
  _content: [
    {
      main: '뒤로 가기',
      ACTION: 'DISAPPEAR_MENU',
    },
    // {
    //   main: 'SAVE',
    //   sub: [
    //     {
    //       name: '프로젝트 로컬 저장',
    //       ACTION: 'SET_FONT_SIZE'
    //     },
    //     {
    //       name: '프로젝트 저장',
    //       ACTION: 'SET_FONT_SIZE'
    //     },
    //   ]
    // },
    {
      main: '<img src="/text-font.png" alt="Font" style="width: 15px; margin-right: 10px;"/> 폰트 사이즈',
      ACTION: 'SET_FONT_SIZE'
    },
    {
      main: '<img src="/speaker-filled-audio-tool.png" alt="Speaker" style="width: 15px; margin-right: 10px;"/> 볼륨',
      ACTION: 'SET_VOLUME'
    },
    // {
    //   main: 'SETTING',
    //   sub: [
    //     {
    //       name: '폰트 사이즈',
    //       ACTION: 'SET_FONT_SIZE'
    //     },
    //     {
    //       name: '볼륨',
    //       ACTION: 'SET_VOLUME'
    //     },
    //   ]
    // },
  ],

  // 수정 금지 변수
  _htmlArr: ''
};

window.addEventListener('load', function () {
  if (!MENU_CONFIG._htmlArr) {
    const elemModal = this.document.createElement('div');
    elemModal.id = 'zeynep-modal';
    elemModal.onclick = handleClickMenuToggle;

    const elemWrapper = this.document.createElement('div');
    elemWrapper.id = 'elemWrapper';
    elemWrapper.className = 'zeynep';
    elemWrapper.setAttribute('data-status', 'close');

    const elemUl = this.document.createElement('ul');

    for (let i = 0; i < MENU_CONFIG._content.length; i++) {
      // 메뉴 개수만큼 반복
      if (!MENU_CONFIG._content[i].sub) {
        // 메뉴에 sub가 없다면

        const elemLi = this.document.createElement('li');
        const elemA = this.document.createElement('a');

        elemA.href = '#';
        elemA.innerHTML = MENU_CONFIG._content[i].main;

        elemA.setAttribute('data-action', MENU_CONFIG._content[i].ACTION);

        elemLi.appendChild(elemA);
        elemUl.appendChild(elemLi);

      } else {
        // 메뉴에 sub가 있다면
        const elemLi = this.document.createElement('li');
        elemLi.className = 'has-submenu';

        const elemA = this.document.createElement('a');
        elemA.href = '#';
        elemA.setAttribute('data-action', 'APPEAR_SUBMENU');
        elemA.innerHTML = MENU_CONFIG._content[i].main;

        const elemSubMenuWrapper = this.document.createElement('div');
        const elemSubMenuHeader = this.document.createElement('div');
        const elemSubMenuHeaderA = this.document.createElement('a');
        const elemSubLabel = this.document.createElement('label');
        const elemSubUl = this.document.createElement('ul');

        elemSubMenuWrapper.id = MENU_CONFIG._content[i].main;
        elemSubMenuWrapper.className = 'submenu';

        elemSubMenuHeader.className = 'submenu-header';
        elemSubMenuHeaderA.setAttribute('data-action', 'UNDO');
        elemSubMenuHeaderA.innerHTML = '이전 메뉴로';

        elemSubLabel.innerHTML = MENU_CONFIG._content[i].main;

        elemSubUl.setAttribute('data-submenu-kind', MENU_CONFIG._content[i].main);

        for (let j = 0; j < MENU_CONFIG._content[i].sub.length; j++) {
          const elemSubLi = this.document.createElement('li');
          const elemSubA = this.document.createElement('a');

          elemSubA.innerHTML = MENU_CONFIG._content[i].sub[j].name;
          elemSubA.href = '#';
          elemSubA.setAttribute('data-action', MENU_CONFIG._content[i].sub[j].ACTION);
          elemSubLi.appendChild(elemSubA);
          elemSubUl.appendChild(elemSubLi);
        }

        elemSubMenuHeader.appendChild(elemSubMenuHeaderA);
        elemSubMenuWrapper.appendChild(elemSubMenuHeader);
        elemSubMenuWrapper.appendChild(elemSubLabel);
        elemSubMenuWrapper.appendChild(elemSubUl);
        elemLi.appendChild(elemSubMenuWrapper);
        elemLi.appendChild(elemA);
        elemUl.appendChild(elemLi);
      }

    }

    elemWrapper.appendChild(elemUl);
    MENU_CONFIG._htmlArr = elemWrapper;
    this.document.body.appendChild(MENU_CONFIG._htmlArr);
    this.document.body.appendChild(elemModal);
  }

  setTimeout(() => {
    $('#elemWrapper a').on('click', function () {

      menuFN(this, $(this).attr('data-action'));
    })
  }, 400);
});
