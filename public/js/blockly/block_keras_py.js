Blockly.Python['keras_test'] = function(block) {
  // TODO: Assemble Python into code variable. 
  var code = `
import sklearn
import numpy as np

x_data = sklearn.datasets.load_digits().data
y_data = sklearn.datasets.load_digits().target
x_train,x_test,y_train,y_test = sklearn.model_selection.train_test_split(x_data,y_data,test_size=0.2, shuffle=True, random_state=0)


model = sequential()

model.add(layers.Dense(100,activation = "relu",input_shape = 64))
model.add(layers.Dense(100,activation = "relu"))
model.add(layers.Dense(10,activation = "softmax"))
model.compile(optimizer='adam',
              loss='categorical_crossentropy')

model.fit(x_train,y_train,validation_data=(x_test,y_test),epochs = 20).train()`;

  return code;
};

