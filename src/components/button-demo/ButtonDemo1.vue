<demo>
基础用法
</demo>

<template>
  <div>
    <Button type="">默认按钮</Button>
    <Button type="main">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="info">信息按钮</Button>
    <Button type="warning">危险按钮</Button>
    <Button type="danger">危险按钮</Button>
  </div>
  <div class="kingWrapper">
    <Button type="king">自定义方案1</Button>
    <Button type="king-main">自定义方案2</Button>
    <Button type="king-gold" disable>保存</Button>
  </div>
  <div>

  </div>
  <div>

  </div>
</template>
<script>
import Button from '../../lib/Button.vue';

export default {
  components: { Button },
};
</script>
<style lang="scss" scoped>

</style>