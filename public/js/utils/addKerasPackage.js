async function addKerasPackage() {
  showLibLoading();

  pythonCode = `
    import sklearn
    from sklearn import *
    from collections import OrderedDict

    # coding: utf-8
    import numpy as np


    def layer_number(self, layer_class, num=1): # layer 층 번호 부여 함수.
        for item in sorted(sequential.layer.keys(), reverse=True):

            if layer_class in item:

                num = int(item[len(layer_class)+1:]) + 1
                
                break
        return str(num)

    class sequential:

        Wparams = []  # 가중치값들을 넣는 리스트
        Bparams = []  # 편향을 넣는 리스트
        layers_name = []
        params = {}
        #loss_dict = {"'categorical_crossentropy'": cross_entropy_error(), "'mse'": mean_squared_error()}

        optimizer = ""
        loss_func = ""
        before_output_size = None
        layer = OrderedDict()  # 층 수를 쌓아가는 딕셔너리
    # def __init__(self,):
        def __init__(self):
            self.last_layer = layers.SoftmaxWithLoss()

        def add(self , layer): ## 딕셔너리 키값 나중에 수정 요망.


            layer_class = str(layer).split()[0][17:] # Dense, Conv2D 등 Layer 계층 이름 슬라이싱.

            num = layer_number(self,str(layer_class),num = 1)

            sequential.layer[layer_class+"_"+num] =layer  # w 등의 이름을 수정할 방법 강구.

            #소프트 맥스 함수 붙이기.
            activation_class_dict ={"relu" :layers.Relu(),"softmax" : layers.SoftmaxWithLoss()}
            self.activation_class = str(activation_class_dict[layer.activation.lower()]).split()[0][1:5]

            if self.activation_class == "Soft":
                sequential.last_layer = layers.SoftmaxWithLoss()

            else:
                num = layer_number(self, self.activation_class)

                sequential.layer[self.activation_class + "_" + num] = activation_class_dict[layer.activation.lower()]

    #        if layer.activation == "relu": # 활성화함수
    #            layer_class = str(layers.Relu()).split()[0][26:]
    #            num = layer_number(self, layer_class)
    #            sequential.layer[layer_class+"_"+num] = layers.Relu()

    #딕셔너리 활용해서 수정

        def predict(self, x):
            #print(sequential.layer.values())
            #print(x.shape)
            for layer in sequential.layer.values():

                x = layer.forward(x)

            return x

        def loss(self, x, t):
            """손실 함수를 구한다.

            Parameters
            ----------
            x : 입력 데이터
            t : 정답 레이블
            """
            #print("loss func Run")
            y = sequential.predict(self, x)
            #return self.last_layer.forward(y, t)
            return sequential.last_layer.forward(y, t,sequential.loss_func)

        def accuracy(self, x, t, batch_size=100):
            if t.ndim != 1: t = np.argmax(t, axis=1)

            acc = 0.0

            for i in range(int(x.shape[0] / batch_size)):
                tx = x[i * batch_size:(i + 1) * batch_size]
                tt = t[i * batch_size:(i + 1) * batch_size]
                y = sequential.predict(self, tx)
                y = np.argmax(y, axis=1)
                acc += np.sum(y == tt)

            return acc / x.shape[0]

        def numerical_gradient(self, x, t):
            """기울기를 구한다（수치미분）.

            Parameters
            ----------
            x : 입력 데이터
            t : 정답 레이블

            Returns
            -------
            각 층의 기울기를 담은 사전(dictionary) 변수
                grads['W1']、grads['W2']、... 각 층의 가중치
                grads['b1']、grads['b2']、... 각 층의 편향
            """
            loss_w = lambda w: self.loss(x, t)

            grads = {}
            params_num = int(len(sequential.params.keys()) / 2) + 1

            for idx in range(1, params_num):
                grads['W' + str(idx)] = sequential.numerical_gradient(loss_w, self.params['W' + str(idx)])
                grads['b' + str(idx)] = sequential.numerical_gradient(loss_w, self.params['b' + str(idx)])

            return grads

        def gradient(self, x, t):
            """기울기를 구한다(오차역전파법).


            Parameters
            ----------
            x : 입력 데이터
            t : 정답 레이블

            Returns
            -------
            각 층의 기울기를 담은 사전(dictionary) 변수
                grads['W1']、grads['W2']、... 각 층의 가중치
                grads['b1']、grads['b2']、... 각 층의 편향
            """
            # forward

        #  if sequential.loss_func == "categorical_crossentorpy":

        #     sequential.loss = cross_entropy_error(x, t)

            sequential.loss(self,x, t)

            # backward
            dout = 1
            #sequential.layer[list(sequential.layer)[-1]].back
            dout = sequential.last_layer.backward(dout)

            layer_value = list(sequential.layer.values())
            layer_value.reverse()
            for layer in layer_value:
                dout = layer.backward(dout)

            params_num = int(len(sequential.params.keys()) / 2) +1



            key_list = list(sequential.layer.keys())# Relu 등을 제외한 layer 계층을 뽑아와서 아래 반복문에 사용.
            for i, key in enumerate(key_list):
                if i % 2 == 0:
                    sequential.layers_name.append(key)

            grads = {}  # 여기도 수정 요망. 추가한 layer에 맞게 되도록. 이거하면서 numerical gradient, load_params도 체크
            for idx in range(1, params_num):

                grads['W'+ str(idx)], grads['b'+ str(idx)] = sequential.layer[sequential.layers_name[idx-1]].dW, sequential.layer[sequential.layers_name[idx-1]].db

            return grads

        def save_params(self, file_name="params.pkl"):
            params = {}
            for key, val in self.params.items():
                params[key] = val
            with open(file_name, 'wb') as f:
                pickle.dump(params, f)

        def load_params(self, file_name="params.pkl"):
            with open(file_name, 'rb') as f:
                params = pickle.load(f)
            for key, val in params.items():
                self.params[key] = val

    #여기도 수정 요망. gradient, numerical gradient까지 수정.
            for i, key in enumerate(sequential.layers_name):
                self.layers[key].W = self.params['W' + str(i + 1)]
                self.layers[key].b = self.params['b' + str(i + 1)]



        def compile(self,optimizer, loss):
            sequential.optimizer = optimizer
            sequential.loss_func= loss


        def test(self):
            print(sequential.optimizer)




        class fit:
            """신경망 훈련을 대신 해주는 클래스
            """
            def __init__(self, data, labels,
                        epochs=20, batch_size=100,validation_data=(None,None),
                        optimizer_param={'lr': 0.001},
                        evaluate_sample_num_per_epoch=None, verbose=True):
                self.network = sequential

                self.verbose = verbose
                self.x_train = data
                self.t_train = labels
                self.x_test = validation_data[0]
                self.t_test = validation_data[1]
                self.epochs = epochs
                self.batch_size = batch_size

                self.evaluate_sample_num_per_epoch = evaluate_sample_num_per_epoch

    #해결과제 loss 랑 layer 층 이름
                # optimzer
                optimizer_class_dict = {'sgd': SGD, 'momentum': Momentum, 'nesterov': Nesterov,
                                        'adagrad': AdaGrad, 'rmsprpo': RMSprop, 'adam': Adam}
                self.optimizer = optimizer_class_dict[sequential.optimizer.lower()](**optimizer_param)

                self.train_size = data.shape[0]
                self.iter_per_epoch = max(self.train_size /batch_size, 1)
                self.max_iter = int(epochs * self.iter_per_epoch)
                self.current_iter = 0
                self.current_epoch = 0

                self.train_loss_list = []
                self.train_acc_list = []
                self.test_acc_list = []

            def train_step(self):
                batch_mask = np.random.choice(self.train_size, self.batch_size)
                x_batch = self.x_train[batch_mask]
                t_batch = self.t_train[batch_mask]
                #print(x_batch.shape)
                grads = sequential.gradient(self, x_batch, t_batch)
                self.optimizer.update(sequential.params, grads)

                loss = sequential.loss(self, x_batch, t_batch)
                self.train_loss_list.append(loss)
                if self.verbose: print("train loss:" + str(loss))

                if self.current_iter % self.iter_per_epoch == 0:
                    self.current_epoch += 1

                    x_train_sample, t_train_sample = self.x_train, self.t_train
                    x_test_sample, t_test_sample = self.x_test, self.t_test
                    if not self.evaluate_sample_num_per_epoch is None:
                        t = self.evaluate_sample_num_per_epoch
                        x_train_sample, t_train_sample = self.x_train[:t], self.t_train[:t]
                        x_test_sample, t_test_sample = self.x_test[:t], self.t_test[:t]

                    train_acc = sequential.accuracy(self,x_train_sample, t_train_sample)
                    test_acc = sequential.accuracy(self,x_test_sample, t_test_sample)
                    self.train_acc_list.append(train_acc)
                    self.test_acc_list.append(test_acc)

                    if self.verbose:
                        print("=== epoch:" + str(self.current_epoch) + ", train acc:" + str(
                            train_acc) + ", test acc:" + str(test_acc) + " ===")
                self.current_iter += 1

            def train(self):
                for i in range(self.max_iter):
                    self.train_step()

                test_acc = sequential.accuracy(self,self.x_test, self.t_test,batch_size=100)

                if self.verbose:
                    print("=============== Final Test Accuracy ===============")
                    print("test acc:" + str(test_acc))

            # coding: utf-8


    def xe(self):
        sequential.fit.train(self)
    class layers:

        class Relu:
            def __init__(self):
                self.mask = None

            def forward(self, x):
                self.mask = (x <= 0)
                out = x.copy()
                out[self.mask] = 0

                return out

            def backward(self, dout):
                dout[self.mask] = 0
                dx = dout

                return dx

        class Sigmoid:
            def __init__(self):
                self.out = None

            def forward(self, x):
                out = sigmoid(x)
                self.out = out
                return out

            def backward(self, dout):
                dx = dout * (1.0 - self.out) * self.out

                return dx

        class Dense:

            def __init__(self,output_size, activation, input_shape = None):
                self.activation = activation
                self.input_size = input_shape
                self.output_size = output_size
                weight_init_std = 0.01
                if not sequential.params:
                    """
                    sequential.Wparams.append(weight_init_std * \
                                            np.random.randn(input_shape, output_size))
                    sequential.Bparams.append(np.zeros(output_size)) # output_size = hidden
                    """
                    sequential.params["W1"] = (weight_init_std * \
                                        np.random.randn(input_shape, output_size))
                    sequential.params["b1"]=(np.zeros(output_size))  # output_size = hidden

                else:
                    """
                    sequential.Wparams.append(weight_init_std * \
                                            np.random.randn(sequential.before_output_size,output_size))
                    sequential.Bparams.append(np.zeros(output_size))
                    """

                    num = int(list(sequential.params.keys())[-1][1:]) +1 #딕셔너리 카운팅.
                    sequential.params["W"+str(num)] = (weight_init_std * \
                                            np.random.randn(sequential.before_output_size,output_size))
                    sequential.params["b"+str(num)] = (np.zeros(output_size))
                sequential.before_output_size = self.output_size

                self.W = sequential.params[list(sequential.params.keys())[-2]]
                self.b = sequential.params[list(sequential.params.keys())[-1]]
                self.x = None
                self.original_x_shape = None
                # 가중치와 편향 매개변수의 미분
                self.dW = None
                self.db = None

            def forward(self, x):
                # 텐서 대응
                self.original_x_shape = x.shape
                x = x.reshape(x.shape[0], -1)
                self.x = x
                #print(self.x.shape)
                #print(self.W.shape)
                out = np.dot(self.x, self.W) + self.b
                #out = np.dot(self.x, sequential.Wparams[-1]) + sequential.Bparams[-1]
                return out

            def backward(self, dout):
                dx = np.dot(dout, self.W.T)
                self.dW = np.dot(self.x.T, dout)
                self.db = np.sum(dout, axis=0)

                dx = dx.reshape(*self.original_x_shape)  # 입력 데이터 모양 변경(텐서 대응)
                return dx

        class SoftmaxWithLoss:
            def __init__(self):
                self.loss = None  # 손실함수
                self.y = None  # softmax의 출력
                self.t = None  # 정답 레이블(원-핫 인코딩 형태)

            def forward(self, x, t, loss_func):
                self.t = t
                self.y = softmax(x)

                if loss_func == "categorical_crossentropy":
                    self.loss = cross_entropy_error(self.y, self.t)

                return self.loss

            def backward(self, dout=1):
                #print(self.t)
                batch_size = self.t.shape[0]
                if self.t.size == self.y.size:  # 정답 레이블이 원-핫 인코딩 형태일 때
                    dx = (self.y - self.t) / batch_size
                else:
                    dx = self.y.copy()
                    dx[np.arange(batch_size), self.t] -= 1
                    dx = dx / batch_size

                return dx

        class Dropout:
            """
            http://arxiv.org/abs/1207.0580
            """

            def __init__(self, dropout_ratio=0.5):
                self.dropout_ratio = dropout_ratio
                self.mask = None

            def forward(self, x, train_flg=True):
                if train_flg:
                    self.mask = np.random.rand(*x.shape) > self.dropout_ratio
                    return x * self.mask
                else:
                    return x * (1.0 - self.dropout_ratio)

            def backward(self, dout):
                return dout * self.mask

        class BatchNormalization:
            """
            http://arxiv.org/abs/1502.03167
            """

            def __init__(self, gamma, beta, momentum=0.9, running_mean=None, running_var=None):
                self.gamma = gamma
                self.beta = beta
                self.momentum = momentum
                self.input_shape = None  # 합성곱 계층은 4차원, 완전연결 계층은 2차원

                # 시험할 때 사용할 평균과 분산
                self.running_mean = running_mean
                self.running_var = running_var

                # backward 시에 사용할 중간 데이터
                self.batch_size = None
                self.xc = None
                self.std = None
                self.dgamma = None
                self.dbeta = None

            def forward(self, x, train_flg=True):
                self.input_shape = x.shape
                if x.ndim != 2:
                    N, C, H, W = x.shape
                    x = x.reshape(N, -1)

                out = self.__forward(x, train_flg)

                return out.reshape(*self.input_shape)

            def __forward(self, x, train_flg):
                if self.running_mean is None:
                    N, D = x.shape
                    self.running_mean = np.zeros(D)
                    self.running_var = np.zeros(D)

                if train_flg:
                    mu = x.mean(axis=0)
                    xc = x - mu
                    var = np.mean(xc ** 2, axis=0)
                    std = np.sqrt(var + 10e-7)
                    xn = xc / std

                    self.batch_size = x.shape[0]
                    self.xc = xc
                    self.xn = xn
                    self.std = std
                    self.running_mean = self.momentum * self.running_mean + (1 - self.momentum) * mu
                    self.running_var = self.momentum * self.running_var + (1 - self.momentum) * var
                else:
                    xc = x - self.running_mean
                    xn = xc / ((np.sqrt(self.running_var + 10e-7)))

                out = self.gamma * xn + self.beta
                return out

            def backward(self, dout):
                if dout.ndim != 2:
                    N, C, H, W = dout.shape
                    dout = dout.reshape(N, -1)

                dx = self.__backward(dout)

                dx = dx.reshape(*self.input_shape)
                return dx

            def __backward(self, dout):
                dbeta = dout.sum(axis=0)
                dgamma = np.sum(self.xn * dout, axis=0)
                dxn = self.gamma * dout
                dxc = dxn / self.std
                dstd = -np.sum((dxn * self.xc) / (self.std * self.std), axis=0)
                dvar = 0.5 * dstd / self.std
                dxc += (2.0 / self.batch_size) * self.xc * dvar
                dmu = np.sum(dxc, axis=0)
                dx = dxc - dmu / self.batch_size

                self.dgamma = dgamma
                self.dbeta = dbeta

                return dx

        class Convolution:
            def __init__(self, W, b, stride=1, pad=0):
                self.W = W
                self.b = b
                self.stride = stride
                self.pad = pad

                # 중간 데이터（backward 시 사용）
                self.x = None
                self.col = None
                self.col_W = None

                # 가중치와 편향 매개변수의 기울기
                self.dW = None
                self.db = None

            def forward(self, x):
                FN, C, FH, FW = self.W.shape
                N, C, H, W = x.shape
                out_h = 1 + int((H + 2 * self.pad - FH) / self.stride)
                out_w = 1 + int((W + 2 * self.pad - FW) / self.stride)

                col = im2col(x, FH, FW, self.stride, self.pad)
                col_W = self.W.reshape(FN, -1).T

                out = np.dot(col, col_W) + self.b
                out = out.reshape(N, out_h, out_w, -1).transpose(0, 3, 1, 2)

                self.x = x
                self.col = col
                self.col_W = col_W

                return out

            def backward(self, dout):
                FN, C, FH, FW = self.W.shape
                dout = dout.transpose(0, 2, 3, 1).reshape(-1, FN)

                self.db = np.sum(dout, axis=0)
                self.dW = np.dot(self.col.T, dout)
                self.dW = self.dW.transpose(1, 0).reshape(FN, C, FH, FW)

                dcol = np.dot(dout, self.col_W.T)
                dx = col2im(dcol, self.x.shape, FH, FW, self.stride, self.pad)

                return dx

        class Pooling:
            def __init__(self, pool_h, pool_w, stride=1, pad=0):
                self.pool_h = pool_h
                self.pool_w = pool_w
                self.stride = stride
                self.pad = pad

                self.x = None
                self.arg_max = None

            def forward(self, x):
                N, C, H, W = x.shape
                out_h = int(1 + (H - self.pool_h) / self.stride)
                out_w = int(1 + (W - self.pool_w) / self.stride)

                col = im2col(x, self.pool_h, self.pool_w, self.stride, self.pad)
                col = col.reshape(-1, self.pool_h * self.pool_w)

                arg_max = np.argmax(col, axis=1)
                out = np.max(col, axis=1)
                out = out.reshape(N, out_h, out_w, C).transpose(0, 3, 1, 2)

                self.x = x
                self.arg_max = arg_max

                return out

            def backward(self, dout):
                dout = dout.transpose(0, 2, 3, 1)

                pool_size = self.pool_h * self.pool_w
                dmax = np.zeros((dout.size, pool_size))
                dmax[np.arange(self.arg_max.size), self.arg_max.flatten()] = dout.flatten()
                dmax = dmax.reshape(dout.shape + (pool_size,))

                dcol = dmax.reshape(dmax.shape[0] * dmax.shape[1] * dmax.shape[2], -1)
                dx = col2im(dcol, self.x.shape, self.pool_h, self.pool_w, self.stride, self.pad)

                return dx


    class SGD:

        """확률적 경사 하강법（Stochastic Gradient Descent）"""

        def __init__(self, lr=0.01):
            self.lr = lr
            
        def update(self, params, grads):
            for key in params.keys():
                params[key] -= self.lr * grads[key] 


    class Momentum:

        """모멘텀 SGD"""

        def __init__(self, lr=0.01, momentum=0.9):
            self.lr = lr
            self.momentum = momentum
            self.v = None
            
        def update(self, params, grads):
            if self.v is None:
                self.v = {}
                for key, val in params.items():                                
                    self.v[key] = np.zeros_like(val)
                    
            for key in params.keys():
                self.v[key] = self.momentum*self.v[key] - self.lr*grads[key] 
                params[key] += self.v[key]


    class Nesterov:

        """Nesterov's Accelerated Gradient (http://arxiv.org/abs/1212.0901)"""
        # NAG는 모멘텀에서 한 단계 발전한 방법이다. (http://newsight.tistory.com/224)
        
        def __init__(self, lr=0.01, momentum=0.9):
            self.lr = lr
            self.momentum = momentum
            self.v = None
            
        def update(self, params, grads):
            if self.v is None:
                self.v = {}
                for key, val in params.items():
                    self.v[key] = np.zeros_like(val)
                
            for key in params.keys():
                self.v[key] *= self.momentum
                self.v[key] -= self.lr * grads[key]
                params[key] += self.momentum * self.momentum * self.v[key]
                params[key] -= (1 + self.momentum) * self.lr * grads[key]


    class AdaGrad:

        """AdaGrad"""

        def __init__(self, lr=0.01):
            self.lr = lr
            self.h = None
            
        def update(self, params, grads):
            if self.h is None:
                self.h = {}
                for key, val in params.items():
                    self.h[key] = np.zeros_like(val)
                
            for key in params.keys():
                self.h[key] += grads[key] * grads[key]
                params[key] -= self.lr * grads[key] / (np.sqrt(self.h[key]) + 1e-7)


    class RMSprop:

        """RMSprop"""

        def __init__(self, lr=0.01, decay_rate = 0.99):
            self.lr = lr
            self.decay_rate = decay_rate
            self.h = None
            
        def update(self, params, grads):
            if self.h is None:
                self.h = {}
                for key, val in params.items():
                    self.h[key] = np.zeros_like(val)
                
            for key in params.keys():
                self.h[key] *= self.decay_rate
                self.h[key] += (1 - self.decay_rate) * grads[key] * grads[key]
                params[key] -= self.lr * grads[key] / (np.sqrt(self.h[key]) + 1e-7)


    class Adam:

        """Adam (http://arxiv.org/abs/1412.6980v8)"""

        def __init__(self, lr=0.001, beta1=0.9, beta2=0.999):
            self.lr = lr
            self.beta1 = beta1
            self.beta2 = beta2
            self.iter = 0
            self.m = None
            self.v = None
            
        def update(self, params, grads):
            if self.m is None:
                self.m, self.v = {}, {}
                for key, val in params.items():
                    self.m[key] = np.zeros_like(val)
                    self.v[key] = np.zeros_like(val)
            
            self.iter += 1
            lr_t  = self.lr * np.sqrt(1.0 - self.beta2**self.iter) / (1.0 - self.beta1**self.iter)         
            
            for key in params.keys():
                #self.m[key] = self.beta1*self.m[key] + (1-self.beta1)*grads[key]
                #self.v[key] = self.beta2*self.v[key] + (1-self.beta2)*(grads[key]**2)
                self.m[key] += (1 - self.beta1) * (grads[key] - self.m[key])
                self.v[key] += (1 - self.beta2) * (grads[key]**2 - self.v[key])
                
                params[key] -= lr_t * self.m[key] / (np.sqrt(self.v[key]) + 1e-7)
                
                #unbias_m += (1 - self.beta1) * (grads[key] - self.m[key]) # correct bias
                #unbisa_b += (1 - self.beta2) * (grads[key]*grads[key] - self.v[key]) # correct bias
                #params[key] += self.lr * unbias_m / (np.sqrt(unbisa_b) + 1e-7)



    def identity_function(x):
        return x


    def step_function(x):
        return np.array(x > 0, dtype=np.int)


    def sigmoid(x):
        return 1 / (1 + np.exp(-x))    


    def sigmoid_grad(x):
        return (1.0 - sigmoid(x)) * sigmoid(x)
        

    def relu(x):
        return np.maximum(0, x)


    def relu_grad(x):
        grad = np.zeros(x)
        grad[x>=0] = 1
        return grad
        

    def softmax(x):
        if x.ndim == 2:
            x = x.T
            x = x - np.max(x, axis=0)
            y = np.exp(x) / np.sum(np.exp(x), axis=0)
            return y.T 

        x = x - np.max(x) # 오버플로 대책
        return np.exp(x) / np.sum(np.exp(x))


    def mean_squared_error(y, t):
        return 0.5 * np.sum((y-t)**2)


    def cross_entropy_error(y, t):
        if y.ndim == 1:
            t = t.reshape(1, t.size)
            y = y.reshape(1, y.size)

            
        # 훈련 데이터가 원-핫 벡터라면 정답 레이블의 인덱스로 반환
        if t.size == y.size:
            t = t.argmax(axis=1)
                
        batch_size = y.shape[0]
        return -np.sum(np.log(y[np.arange(batch_size), t])) / batch_size


    def softmax_loss(X, t):
        y = softmax(X)
        return cross_entropy_error(y, t)

    # coding: utf-8
    import numpy as np


    def smooth_curve(x):
        """손실 함수의 그래프를 매끄럽게 하기 위해 사용
        
        참고：http://glowingpython.blogspot.jp/2012/02/convolution-with-numpy.html
        """
        window_len = 11
        s = np.r_[x[window_len-1:0:-1], x, x[-1:-window_len:-1]]
        w = np.kaiser(window_len, 2)
        y = np.convolve(w/w.sum(), s, mode='valid')
        return y[5:len(y)-5]


    def shuffle_dataset(x, t):
        """데이터셋을 뒤섞는다.

        Parameters
        ----------
        x : 훈련 데이터
        t : 정답 레이블
        
        Returns
        -------
        x, t : 뒤섞은 훈련 데이터와 정답 레이블
        """
        permutation = np.random.permutation(x.shape[0])
        x = x[permutation, :] if x.ndim == 2 else x[permutation, :, :, :]
        t = t[permutation]

        return x, t

    def conv_output_size(input_size, filter_size, stride=1, pad=0):
        return (input_size + 2*pad - filter_size) / stride + 1


    def im2col(input_data, filter_h, filter_w, stride=1, pad=0):
        """다수의 이미지를 입력받아 2차원 배열로 변환한다(평탄화).
        
        Parameters
        ----------
        input_data : 4차원 배열 형태의 입력 데이터(이미지 수, 채널 수, 높이, 너비)
        filter_h : 필터의 높이
        filter_w : 필터의 너비
        stride : 스트라이드
        pad : 패딩
        
        Returns
        -------
        col : 2차원 배열
        """
        N, C, H, W = input_data.shape
        out_h = (H + 2*pad - filter_h)//stride + 1
        out_w = (W + 2*pad - filter_w)//stride + 1

        img = np.pad(input_data, [(0,0), (0,0), (pad, pad), (pad, pad)], 'constant')
        col = np.zeros((N, C, filter_h, filter_w, out_h, out_w))

        for y in range(filter_h):
            y_max = y + stride*out_h
            for x in range(filter_w):
                x_max = x + stride*out_w
                col[:, :, y, x, :, :] = img[:, :, y:y_max:stride, x:x_max:stride]

        col = col.transpose(0, 4, 5, 1, 2, 3).reshape(N*out_h*out_w, -1)
        return col


    def col2im(col, input_shape, filter_h, filter_w, stride=1, pad=0):
        """(im2col과 반대) 2차원 배열을 입력받아 다수의 이미지 묶음으로 변환한다.
        
        Parameters
        ----------
        col : 2차원 배열(입력 데이터)
        input_shape : 원래 이미지 데이터의 형상（예：(10, 1, 28, 28)）
        filter_h : 필터의 높이
        filter_w : 필터의 너비
        stride : 스트라이드
        pad : 패딩
        
        Returns
        -------
        img : 변환된 이미지들
        """
        N, C, H, W = input_shape
        out_h = (H + 2*pad - filter_h)//stride + 1
        out_w = (W + 2*pad - filter_w)//stride + 1
        col = col.reshape(N, out_h, out_w, C, filter_h, filter_w).transpose(0, 3, 4, 5, 1, 2)

        img = np.zeros((N, C, H + 2*pad + stride - 1, W + 2*pad + stride - 1))
        for y in range(filter_h):
            y_max = y + stride*out_h
            for x in range(filter_w):
                x_max = x + stride*out_w
                img[:, :, y:y_max:stride, x:x_max:stride] += col[:, :, y, x, :, :]

        return img[:, :, pad:H + pad, pad:W + pad]`

  pyodide.runPython(pythonCode)

  //   if (eachLib == 'scikit-image') {
  //     $('#div_image_processing_import_btn').text('추가 됨');
  //     $('#div_image_processing_import_btn').data('isImported', 1);
  //     $('div[aria-posinset="17"]').show();
  // }

  VanillaToasts.create({
    type: 'success',
    text: `Keras 임포트 완료 (8/8)`,
    positionClass: 'bottomLeft',
    timeout: 3000,
    icon: '/success.png'
  })

  hideLibLoading();
}