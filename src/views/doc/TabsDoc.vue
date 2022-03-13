<template>
   <div class="markdown-body">
     <h1>Tabs 示例</h1>
     <p>分隔内容上有关联但属于不同类别的数据集合。</p>
     <Demo description="基础的、简洁的标签页。" :component="Tabs1Demo"/>
     <p>回到开始： <a href="#/doc/intro">介绍</a></p>
   </div>
</template>

<script>

import Demo from '../../components/Demo.vue';
import Tabs1Demo from '../../components/TabsDemo1.vue'
export default {
name: "TabsDemo",
  components: { Demo },
  setup(){
  return {Tabs1Demo}
  }
}
</script>

<style scoped>

</style>