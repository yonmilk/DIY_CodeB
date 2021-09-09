/********************************************
 * Tensorflow.js CNN Mnist 예제 주석 한글화
 * Creator : 정지현
 * Date : 2020-07-26
 * ******************************************/

import { MnistData } from "./data.js";

/**********************************************************
 * 예제 이미지에 대해 tfvis에 표시하는 함수                      *
 * Input Data 탭에 Input Data Examples라는 제목으로 표시함.    *
 **********************************************************/
async function showExamples(data) {
  // Visor에 Container 생성
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !                                                           !
// ! tfvis에서 tab은 tab의 이름, name은 tab 안에 표시될 제목의 이름    !
// !                                                           !
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const surface = tfvis
    .visor()
    .surface({ name: "Input Data Examples", tab: "Input Data" });

  // 예제 가져오기
  const examples = data.nextTestBatch(20);
  const numExamples = examples.xs.shape[0];

  // 각각의 예제를 표시(Render)하기 위한 캔버스 요소 생성
  // Create a canvas element to render each example
  for (let i = 0; i < numExamples; i++) {
    // tf.tidy()안에 선언된 변수는 tidy() 함수가 끝나자마자 메모리에서 사라짐. 즉, 휘발성 변수.
    const imageTensor = tf.tidy(() => {
      // 이미지를 28x28 px로 형태 변환
      // Reshape the image to 28x28 px
      return examples.xs
        .slice([i, 0], [1, examples.xs.shape[1]])
        .reshape([28, 28, 1]);
    });

    const canvas = document.createElement("canvas");
    canvas.width = 28;
    canvas.height = 28;
    canvas.style = "margin: 4px;";
    await tf.browser.toPixels(imageTensor, canvas);
    surface.drawArea.appendChild(canvas);

    imageTensor.dispose();
  }
}

/************************************
 * CNN 모델 생성 함수                  *
 ************************************/
function getModel() {
  const model = tf.sequential();

  const IMAGE_WIDTH = 28;
  const IMAGE_HEIGHT = 28;
  const IMAGE_CHANNELS = 1;

  // 첫 번째 합성곱 신경망 레이어에는 입력 데이터의 형상을 정의해야 함.
  // 이후 이 합성곱 신경망의 파라미터를 명세해야함. 
  // In the first layer of our convolutional neural network we have
  // to specify the input shape. Then we specify some parameters for
  // the convolution operation that takes place in this layer.
  model.add(
    tf.layers.conv2d({
      inputShape: [IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS],
      kernelSize: 5,
      filters: 8,
      strides: 1,
      activation: "relu",
      kernelInitializer: "varianceScaling"
    })
  );

  // MaxPooling 레이어는 다운샘플링 과정을 수행함.
  // The MaxPooling layer acts as a sort of downsampling using max values
  // in a region instead of averaging.
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

  // Conv2d와 MaxPolling 레이어 이후에 해당 Conv2d 레이어 작업을 반복함.
  // 이전 합성곱신경망 레이어(Conv2d)에 비해 Filter 파라미터의 수가 늘어남에 주목할 것.
  // Repeat another conv2d + maxPooling stack.
  // Note that we have more filters in the convolution.
  model.add(
    tf.layers.conv2d({
      kernelSize: 5,
      filters: 16,
      strides: 1,
      activation: "relu",
      kernelInitializer: "varianceScaling"
    })
  );
  model.add(tf.layers.maxPooling2d({ poolSize: [2, 2], strides: [2, 2] }));

  // 그 다음 우리는 2차원의 데이터를 1차원 벡터로 바꾸는 과정을 수행함.
  // 이는 마지막 레이어에 대한 입력으로 활용하기 위함임. (ig. 실제 CNN에서 최종적으로 전결합 계층에 데이터를 전달하기 
  // 위해서 데이터를 1차원으로 펼치는 작업을 진행해야 함.)
  // 이는 고차원 데이터를 최종 분류 레이어에 주입하기 위한 일반적인 과정임.
  // Now we flatten the output from the 2D filters into a 1D vector to prepare
  // it for input into our last layer. This is common practice when feeding
  // higher dimensional data to a final classification output layer.
  model.add(tf.layers.flatten());

  // 마지막 레이어는 최종 라벨을 출력하기 위한 Dense 레이어임.
  // 라벨의 개수가 모두 10개이므로 Dense 레이어의 Units의 개수도 10개임. 
  // 출력 클래스 : (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
  // ***참고 : 다중 분류는 Activation이 Softmax여야 함.***
  // Our last layer is a dense layer which has 10 output units, one for each
  // output class (i.e. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).
  const NUM_OUTPUT_CLASSES = 10;
  model.add(
    tf.layers.dense({
      units: NUM_OUTPUT_CLASSES,
      kernelInitializer: "varianceScaling",
      activation: "softmax"
    })
  );

  // 최적화함수(Optimizer), 손실함수(Loss) 그리고 정확도 측정을 위한 메트릭(Metric) 정의
  // 이후 컴파일하고 모델을 반환함.
  // Choose an optimizer, loss function and accuracy metric,
  // then compile and return the model
  const optimizer = tf.train.adam();
  model.compile({
    optimizer: optimizer,
    loss: "categoricalCrossentropy",
    metrics: ["accuracy"]
  });

  return model;
}

/************************************************
 * 모델과 데이터를 주입하고 실제 모델을 학습하는 함수     *
 ***********************************************/
async function train(model, data) {
  // tfvis에 표시할 metrics
  const metrics = ["loss", "val_loss", "acc", "val_acc"];
  // tfvis에 대한 container 표시
  const container = {
    name: "Model Training",
    styles: { height: "1000px" }
  };

  // tfvis 에서 사용할 콜백 함수
  const fitCallbacks = tfvis.show.fitCallbacks(container, metrics);

  const BATCH_SIZE = 512;
  const TRAIN_DATA_SIZE = 5500;
  const TEST_DATA_SIZE = 1000;

  // tf.tidy()안에 선언된 변수는 tidy() 함수가 끝나자마자 메모리에서 사라짐. 즉, 휘발성 변수.
  // 해당 함수의 기능은 데이터의 형상을 변환하여 반환하는 것으로 보임.
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
    callbacks: fitCallbacks
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
function doPrediction(model, data, testDataSize = 500) {
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
  const container = { name: "Accuracy", tab: "Evaluation" };
  tfvis.show.perClassAccuracy(container, classAccuracy, classNames);

  labels.dispose();
}

/****************************************************************************
 * 어느 데이터를 잘 분류했고, 못 했는지에 대해 Matrix 형태로 시각화하여 나타내는 함수.   *
 ****************************************************************************/
async function showConfusion(model, data) {
  const [preds, labels] = doPrediction(model, data);
  const confusionMatrix = await tfvis.metrics.confusionMatrix(labels, preds);
  // Evaluation 이라고 탭을 하나 생성 후 Confusion Matrix라는 이름의 제목 생성
  const container = { name: "Confusion Matrix", tab: "Evaluation" };
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
  const data = new MnistData();

  await data.load();
  await showExamples(data);

  const model = getModel();
  tfvis.show.modelSummary({ name: "Model Architecture" }, model);

  await train(model, data);

  await showAccuracy(model, data);
  await showConfusion(model, data);
}

/********************************
 * 핸들러 함수를 호출함으로써 작업 수행 *
 ********************************/
document.addEventListener("DOMContentLoaded", run);
