/*
 * @LastEditors: Mark
 * @Description: In User Settings Edit
 * @Author: Mark
 * @Date: 2019-05-01 00:27:30
 * @LastEditTime: 2019-05-01 00:45:20
 */
import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text, Navigator } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';

import './index.less';

@inject('counterStore')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact');
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };

  render() {
    const {
      counterStore: { counter },
    } = this.props;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>

        <Navigator url="/pages/demo/index">跳转到demo页面</Navigator>
      </View>
    );
  }
}

export default Index;
