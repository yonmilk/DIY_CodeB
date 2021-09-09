/********************************************
 * Tensorflow.js CNN Mnist 예제 주석 한글화
 * Creator : 정지현
 * Date : 2020-07-26
 * ******************************************/

import { MnistData } from "./data.js";

/************************************************
 * 모델과 데이터를 주입하고 실제 모델을 학습하는 함수     *
 ***********************************************/
async function train(model, data) {
  // tfvis에 표시할 metrics
  const metrics = ["loss", "val_loss", "acc", "val_acc"];
  // tfvis에 대한 container 표시
  const container = {
    name: "모델 학습 그래프",
    styles: { height: "1000px" }
  };

  // tfvis 에서 사용할 콜백 함수
  const BATCH_SIZE = 512;
  const TRAIN_DATA_SIZE = 5500;
  const TEST_DATA_SIZE = 1000;

  // tf.tidy()안에 선언된 변수는 tidy() 함수가 끝나자마자 메모리에서 사라짐. 즉, 휘발성 변수.
  // 해당 함수의 기능은 데이터의 형상을 변환하여 반환하는 것으로 보임.
  // 아마 파이썬에서의 Data Slicing 후 reshape 하는 과정과 동일할 것.
  const [trainXs, trainYs] = tf.tidy(() => {
    const d = data.nextTrainBatch(TRAIN_DATA_SIZE);
    return [d.xs.reshape([TRAIN_DATA_SIZE, 28, 28, 1]), d.labels];
  });

  const [testXs, testYs] = tf.tidy(() => {
    const d = data.nextTestBatch(TEST_DATA_SIZE);
    return [d.xs.reshape([TEST_DATA_SIZE, 28, 28, 1]), d.labels];
  });

  // 모델 학습 후 학습된 모델을 반환함. 
  return model.fit(trainXs, trainYs, {
    batchSize: BATCH_SIZE,
    validationData: [testXs, testYs],
    epochs: 10,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(container, metrics), // tfvis에 학습과정 보이기
  });
}

// 라벨의 이름 정의 (0~9)
const classNames = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine"
];

/*******************************************
 * 예측 수행 함수                             *
 *******************************************/
async function doPrediction(model, data, testDataSize = 500) {
  const IMAGE_WIDTH = 28;
  const IMAGE_HEIGHT = 28;
  const testData = data.nextTestBatch(testDataSize);
  const testxs = testData.xs.reshape([
    testDataSize,
    IMAGE_WIDTH,
    IMAGE_HEIGHT,
    1
  ]);
  const labels = testData.labels.argMax([-1]);
  const preds = model.predict(testxs).argMax([-1]);

  testxs.dispose();
  return [preds, labels];
}

/**********************
 * 정확도 계산          *
 ******************** */
async function showAccuracy(model, data) {
  const [preds, labels] = doPrediction(model, data);
  const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
  // Evaluation이라고 탭을 하나 생성 후 Accuracy라는 이름의 제목 생성
  const container = { name: "정확도", tab: "모델 평가" };
  tfvis.show.perClassAccuracy(container, classAccuracy, classNames);

  const accuracy = await tfvis.metrics.accuracy(labels, preds);
  window.alert(accuracy);

  labels.dispose();
}

/****************************************************************************
 * 어느 데이터를 잘 분류했고, 못 했는지에 대해 Matrix 형태로 시각화하여 나타내는 함수.   *
 ****************************************************************************/
async function showConfusion(model, data) {
  const [preds, labels] = doPrediction(model, data);
  const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
  // Evaluation 이라고 탭을 하나 생성 후 Confusion Matrix라는 이름의 제목 생성
  const container = { name: "Confusion Matrix", tab: "모델 평가" };
  tfvis.render.confusionMatrix(
    container,
    { values: confusionMatrix },
    classNames
  );

  labels.dispose();
}

/******************************
 * 최종적으로 실행하는 함수        *
 ******************************/
async function run() {
  console.log("run...");

  // 데이터 로드
  const data = new MnistData();

  await data.load();

  // CNN Model 생성
  const model = tf.sequential();

  model.add(
    tf.layers.conv2d({
      inputShape: [28, 28, 1], // IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS
      kernelSize: 5,
      filters: 8,
      strides: 1,
      activation: "relu",
      //kernelInitializer: "varianceScaling"
    })
  );
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));
  model.add(
    tf.layers.conv2d({
      kernelSize: 5,
      filters: 16,
      strides: 1,
      activation: "relu",
      //kernelInitializer: "varianceScaling"
    })
  );
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));
  model.add(tf.layers.flatten());
  model.add(
    tf.layers.dense({
      units: 10,
      //kernelInitializer: "varianceScaling",
      activation: "softmax"
    })
  );
  model.compile({
    optimizer: tf.train.adam(),
    loss: "categoricalCrossentropy",
    metrics: ['accuracy']
  });

  tfvis.show.modelSummary({ name: "모델 아키텍처" }, model);

  const metrics = ["loss", "val_loss", "acc", "val_acc"];
  // tfvis에 대한 container 표시
  const container = {
    name: "모델 학습 그래프",
    styles: { height: "1000px" }
  };

  const BATCH_SIZE = 512;
  const TRAIN_DATA_SIZE = 5500;
  const TEST_DATA_SIZE = 1000;

  // tf.tidy()안에 선언된 변수는 tidy() 함수가 끝나자마자 메모리에서 사라짐. 즉, 휘발성 변수.
  // 해당 함수의 기능은 데이터의 형상을 변환하여 반환하는 것으로 보임.
  // 아마 파이썬에서의 Data Slicing 후 reshape 하는 과정과 동일할 것.
  const [trainXs, trainYs] = tf.tidy(() => {
    const d = data.nextTrainBatch(TRAIN_DATA_SIZE);
    return [d.xs.reshape([TRAIN_DATA_SIZE, 28, 28, 1]), d.labels];
  });

  const [testXs, testYs] = tf.tidy(() => {
    const d = data.nextTestBatch(TEST_DATA_SIZE);
    return [d.xs.reshape([TEST_DATA_SIZE, 28, 28, 1]), d.labels];
  });

  // 모델 학습 후 학습된 모델을 반환함. 
  await model.fit(trainXs, trainYs, {
    batchSize: BATCH_SIZE,
    validationData: [testXs, testYs],
    epochs: 10,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(container, metrics), // tfvis에 학습과정 보이기
  });

  //await train(model, data);

  const [preds, labels] = await doPrediction(model, data);
  const classAccuracy = await tfvis.metrics.perClassAccuracy(labels, preds);
  // Evaluation이라고 탭을 하나 생성 후 Accuracy라는 이름의 제목 생성
  const container_acc = { name: "정확도", tab: "모델 평가" };
  tfvis.show.perClassAccuracy(container_acc, classAccuracy, classNames);

  const accuracy = await tfvis.metrics.accuracy(labels, preds);
  window.alert(accuracy);

  labels.dispose();

  //await showAccuracy(model, data);
  //await showConfusion(model, data);
}

/********************************
 * 핸들러 함수를 호출함으로써 작업 수행 *
 ********************************/
document.addEventListener("DOMContentLoaded", run);
