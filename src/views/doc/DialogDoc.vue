<template>
 <div class="markdown-body">
   <h1>Dialog 示例</h1>
   <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
   <Demo description="Dialog 弹出一个对话框，适合需要定制性更大的场景" :component="Dialog1Demo" />
   <Demo description="Dialog 组件可以是标签，甚至可以是js代码，" :component="Dialog2Demo" />
   <p>下一节： <a href="#/doc/Tabs">标签页</a></p>
 </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import Dialog1Demo from '../../components/dialog-demo/DialogDemo1.vue';
import Dialog2Demo from '../../components/dialog-demo/DialogDemo2.vue';
export default {
  name: 'DialogDemo',
  components: { Demo },
  setup() {
    return {Dialog1Demo,Dialog2Demo}
  }
};
</script>

<style scoped>

</style>