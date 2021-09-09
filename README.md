# CodeB Tool (구 DIY)

### Node.js 서버를 활용한 CodeB (Toast 서버에서 사용)

Pyodide Wasm을 활용하며, 4.0 버전은 Pyodide Wasm ver.0.17을 사용함.

## 활용 목적
1. Toast Server 상에서 Node.js로 독립적으로 활용
2. K-Credit 훈련 과정에서 사용
3. 추후 K-Mooc에서 사용할 수도 있음.

NOTE: 깃에서 반영된 부분 체크해서 다시 확인할 것.

saveBlock() -> jsZip 부분 수정할 것.
loadBlock() -> jsZip

clearBlock() -> 함수 없음: 블록 지우기 - 은선