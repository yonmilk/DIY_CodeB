## 1. 파일 생성

### 카테고리 폴더 내 파일 생성

`public\js\Category` 로 이동하여 파일을 생성한다.

`yw.js` 로 생성하였다.

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/1.png)

### 블록클리 폴더 내 파일 생성

`public\js\blockly` 로 이동하여 파일을 생성한다(총 3개).

`block_yw.js` : 블록 정의(Block Definition) 파일

`block_yw_py.js` : 파이썬 코드 파일

`block_yw_js.js` : 자바스크립트 파일 

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/2.png)

## 2. 파일 경로 추가

`public\js\blocks_script.js` 에 만든 파일을 추가한다.

```jsx
// 만든 파일을 다음과 같이 추가합니다.
// <! -- 예원 --> 
document.write("<script src='/js/blockly/block_yw.js'></script>");
document.write("<script src='/js/blockly/block_yw_js.js'></script>");
document.write("<script src='/js/blockly/block_yw_py.js'></script>");

...

// 리팩토링
...
document.write("<script src='/js/Category/yw.js'></script>");
```

## 3. 카테고리 파일 수정

### Category.js 수정

`public\js\Category.js` 에 이동하여 생성할 카테고리를 추가한다.

실제 표시될 카테고리 순서에 맞춰 추가하면 된다.

이때 반드시 대문자로 추가한다.

```jsx
toolbox += YW;
```

### yw.js 수정

`public\js\Category\yw.js` 에 이동하여 파일을 수정한다.

 이때 변수는 `Category.js` 에 추가한 변수명과 동일하게 해야한다.

카테고리의 시작과 끝을 정의해준 것이다.

```jsx
var YW = '<category name="예원" colour="#bbded6">';

YW += '</category>';
```

이 과정까지 완료하면 다음과 같이 카테고리가 추가된 것을 확인할 수 있다.

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/3.png)

## 4. 블록 생성 - 블록클리

### 블록클리 사이트

[Blockly Demo: Blockly Developer Tools](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)

블록클리 사이트에 들어가서 만들고자 하는 블록을 생성한다.

임포트 블록을 생성해 보았다.

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/4.png)

## 5. 블록 생성 - 코드

### yw.js 수정

블록을 표시해주기위한 HTML 코드를 추가해준다.

이때는 이미 만들어져있는 코드를 복사해 사용한다.

`public\js\Category\Numpy.js` 의 코드를 이용하였다.

```jsx
//<!-- import numpy as np -->';
NUMPY += ' <block type="numpy_library"></block>';
```

해당 코드를 복사해  `yw.js` 에 붙여넣는다.

반드시 변수명을 변경해줘야 하며, block type은 블록클리에서 지정한 이름으로 해주면 된다.

```jsx
//<!-- import yewon -->';
YW += ' <block type="import_yw"></block>';
```

### block_yw.js 수정

블록클리 사이트에서 `Block Definition: JavaScript` 를 복사해 `block_yw.js` 에 붙여넣는다.

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/5.png)

```jsx
// 임포트 블록
Blockly.Blocks['import_yw'] = {
    init: function() {
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_CENTRE)
          .appendField("improt yewon");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };
```

### block_yw_py.js

블록클리 사이트에서 `Generator stub: Python` 를 복사해 `block_yw_py.js` 에 붙여넣는다.

블록과 매핑 된 파이썬 코드를 정의한다.

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/6.png)

이때 파이썬 코드를 입력해주어야한다.

이때 아래의 부분을 수정해주면 된다.

```jsx
var code = '...\n';
return code;
```

현재 블록은 임포트 기능을 하기 때문에 다음과 같이 수정했다.

```jsx
// 임포트 블록
Blockly.Python['import_yw'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'import yewon';
    return code;
  };
```

코드를 수정할 때 주의해야할 부분이 있다.

주의사항
블록은 두 가지 모양으로 나뉜다.
이를 문장형, 단독형이라 하겠다.
문장형은 단독으로 사용하지 못하고, 다른 블록에 끼어서 사용하는 블록이다.
단독형은 임포트, Print 문과 같이 단독으로 사용할 수 있는 블록이다.

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/7.png)

(좌) 문장형 / (우) 단독형

문장형의 경우 return 문을 다음과 같이 작성해야한다.

```jsx
return [code, Blockly.Python.ORDER_ATOMIC];
```

단독형의 경우는 기존의 return 문과 동일하게 작성하면 된다.

```jsx
return code;
```

### block_yw_js.js

 `block_yw_py.js` 에 있는 코드를 복사해  `block_yw_js.js` 에 넣는다.

이 파일은 자바스크립트 코드를 정의한 것이지만, 실제로는 사용하지 않으므로 코드는 빈 상태로 넣으면 된다.

붙여넣은 뒤 `Python` 으로 되어 있는 부분을 `JavaScript` 로 바꿔준다.

```jsx
// 임포트 블록
Blockly.JavaScript['import_yw'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'import yewon';
    return code;
  };
```

## 6. 블록생성 완료

위의 과정을 완료하면 다음과 같이 블록이 생성된 것을 확인할 수 있다.

블록을 가져다 놓으면 파이썬 코드도 표시된다.

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/8.png)

추가된 블록

![사진참고](https://github.com/oow214/DIY_CodeB/blob/81d7e78402916a2a8d310cf8e8826e4e430d82de/manual/BLOCK/9.png)

파이썬 코드 표시됨