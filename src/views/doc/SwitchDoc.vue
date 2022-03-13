<template>
    <div class="markdown-body">
      <h1>Switch 开关</h1>
      <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
      <Demo :component="Switch1Demo"/>
      <Demo :component="Switch2Demo"/>
      <p>下一节： <a href="#/doc/button">按钮</a></p>
    </div>
</template>
<script lang="ts">
import Switch1Demo from '../../components/switch-demo/SwitchDemo1.vue';
import Switch2Demo from '../../components/switch-demo/SwitchDemo2.vue';

console.log(Switch1Demo);
import Demo from '../../components/Demo.vue';
import 'prismjs';
import '/node_modules/prismjs/themes/prism.css';
const Prism = (window as any).Prism;
import {
  ref
} from 'vue';

export default {
  components: {
    Demo,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
      Switch1Demo,
      Switch2Demo,
      Prism,
    };
  }
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>