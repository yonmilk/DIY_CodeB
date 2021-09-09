/***********************************************************************
 * MNIST CSV with Tensorflow JS 테스트                   
 * 
 * Creator : 정지현
 * Date : 2020-07-27
 * Usage : 데이터셋이 경로에 있는지 확인 후 코드를 모두 복사하여 
 *         Blockjas의 코드 실행 창에 붙여넣은 후 실행
 * 
 ************************************************************************/

 
 /**********************************************************
  * 로컬에서 CSV 데이터 불러오기 (학습, 테스트)
  * mnist_train_simple.csv : 60000개 데이터 중 9999개만 사용
  **********************************************************/
 const csvUrl = 'https://localhost:8000/datasets/mnist-csv/mnist_train_simple.csv';
 const valCsvUrl = 'https://localhost:8000/datasets/mnist-csv/mnist_test.csv';
 
 async function run() {
 
     /****************************************************************
      * 데이터 불러온 후 label값 지정 (자동으로 xs와 ys로 나누어짐)
      ****************************************************************/
     // 학습셋
     const csvDataset = tf.data.csv(
         csvUrl, {
         columnConfigs: {
             label: {
                 isLabel: true
             }
         }
     });
 
     // 검증 셋
     const valCsvDataset = tf.data.csv(
         valCsvUrl, {
         columnConfigs: {
             label: {
                 isLabel: true
             }
         }
     });
 
     // 별 필요 없음. 그냥 로그찍으려고.
     const tensors = csvDataset.toArray();
     console.log(tensors);
     // 222222222
     const val_tensors = valCsvDataset.toArray();
     console.log(val_tensors);
 
     // 학습에 사용될 Feature의 개수 카운트
     // 이미 라벨 값으로 컬럼 하나를 썼으므로 전체 컬럼에서 -1
     const numOfFeatures = (await csvDataset.columnNames()).length - 1;
     console.log('Feature의 개수 : ' + numOfFeatures);
 
     /********************************************************************
      * 본격적으로 학습셋과 검증셋 형성
      * Object.values 내의 xs 값과 ys값을 xs변수와 ys에 각각 지정하라!
      * Batch_size는 512로 지정.
      ********************************************************************/
     const flattenedDataset =
         csvDataset
             .map(({ xs, ys }) => {
                 return { xs: Object.values(xs), ys: Object.values(ys) };
             })
             .batch(512);
 
     const valFlattenedDataset =
         valCsvDataset.map(
             ({xs, ys}) => {
                 return {xs : Object.values(xs), ys: Object.values(ys)};
             }
         ).batch(512);
 
     /**************************************
      * DNN 모델 생성 및 컴파일
      *********************************/
     console.log("모델 생성 중...");
     // Define the model.
     const model = tf.sequential();
     console.log("Sequential 생성됨..");
     model.add(tf.layers.dense({
         inputShape: [numOfFeatures],
         units: 128,
         activation: 'relu'
     }));
     model.add(tf.layers.dense({
         units: 64,
         activation: 'relu'
     }));
     model.add(tf.layers.dense({
         units: 10,
         activation: 'softmax'
     }))
 
     console.log("Dense 층 생성됨.");
     model.compile({
         optimizer: 'adam',
         loss: 'sparseCategoricalCrossentropy', // 원-핫 인코딩 형태가 아니므로 sparse_categorical_crossentropy 사용.
         metrics: ['accuracy']
     });
     console.log("모델 컴파일 완료.");
     console.log("모델 학습 중...");
     
     /*********************************************************************
      * 미리 준비된 데이터셋을 바탕으로 fit 진행
      * 검증 데이터도 추가함. 
      * 각 Epoch와 Batch가 끝날 때마다 로그를 찍게 함. (정확도 및 손실 확인)
      *********************************************************************/
     return model.fitDataset(flattenedDataset, {
         epochs: 10,
         validationData: valFlattenedDataset,
         callbacks: {
             onEpochEnd: async (epoch, logs) => {
                 console.log("Epoch : " + epoch + 1, "| Loss: " + logs.loss + "| Acc: " + logs.acc ,
                 "| Val Loss: " + logs.val_loss + "| Val Acc: " + logs.val_acc);
             },
             onBatchEnd: async (batch, logs) => {
                 console.log("Batch: "+batch, "| Loss: " + logs.loss, "| Acc:" + logs.acc);
             }
         }
     });
 }
 
 run().then(() => console.log('완료.'));
 
 ///////////////////////////////////////////////////////////////////
 
 /***********************
  * 모델 임포트 후 예측 테스트
  ************************/
 
  async function modelImport(){
     const model = await tf.loadLayersModel('/models/model.json');
     console.log(model);
 
     const prediction = model.predict(tf.tensor([alphaPixel])).argMax([-1]);
 
     var value = prediction.dataSync();
     var arr = Array.from(value);
 
     document.getElementById('exeArea').innerHTML = arr[0];
 
     console.log(arr);
 
 };
 
  modelImport().then(() => console.log('Done!'));