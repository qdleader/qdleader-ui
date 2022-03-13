<template>
  <div class="markdown-body">
    <h1>Button 示例</h1>
    <p>常用的操作按钮。</p>
    <Demo description="基础的按钮用法。" :component="Button1Demo" >
      使用<Code>button</Code>、<Code>link</Code>和<Code>text</Code>来设置<Code>theme</Code> 属性按钮样式。
    </Demo>
    <Demo description="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。" :component="Button2Demo" >
      额外的尺寸：<Code>normal</Code>、<Code>small</Code>、<Code>big</Code>，通过设置<Code>size</Code>属性来配置它们。
    </Demo>
    <Demo description="设置不同的等级以达到警示和暗示效果" :component="Button3Demo" >
      不同级别的按钮：<Code>main</Code>、<Code>danger</Code>，通过设置<Code>level</Code>属性来配置它们。
    </Demo>
    <Demo description="按钮不可用状态。" :component="Button4Demo" >
      你可以使用<Code>disabled</Code>属性来定义按钮是否可用，它接受一个<Code>Boolean</Code>值。
    </Demo>
    <Demo description="点击按钮后进行数据加载操作，在按钮上显示加载状态。" :component="Button5Demo" >
      要设置为 <Code>loading</Code> 状态，只要设置 <Code>loading</Code> 属性为 <Code>true</Code> 即可。
    </Demo>
    <attr :columns="columns" :data="data"></attr>
    <p>下一节：<a href="#/doc/dialog">对话框</a></p>
  </div>
</template>

<script lang="ts">
import Demo from "../../components/Demo.vue";
import Button1Demo from "../../components/button-demo/ButtonDemo1.vue";
import Button2Demo from "../../components/button-demo/ButtonDemo2.vue";
import Button3Demo from "../../components/button-demo/ButtonDemo3.vue";
import Button4Demo from "../../components/button-demo/ButtonDemo4.vue";
import Button5Demo from "../../components/button-demo/ButtonDemo5.vue";
import Code from '../../components/Code.vue';
import Attr from "../../components/Attr.vue";
import {columns} from "../../lib/data";
export default {
  components: {Code, Demo,Attr},
  setup() {
    const data = [
      {
        params: 'size',
        desc: '尺寸',
        type: 'string',
        select: 'normal / small / big',
        default: 'normal',
      },
      {
        params: 'theme',
        desc: '按钮类型',
        type: 'string',
        select: 'button / link / text',
        default: 'button',
      },
      {
        params: 'loading',
        desc: '加载中',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      }
    ]
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      data,
      columns
    };
  },
};
</script>
<style>
.kingWrapper{
  margin: 20px 0;
  padding: 20px;
  background-color: rgba(12,40,75,0.5);
}
</style>