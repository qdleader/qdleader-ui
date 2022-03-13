<demo>
支持 size
</demo>
<template>
  <div>
    <Button size="small">小型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="big">大型按钮</Button>
  </div>
  <div>
    <Button size="small" theme="link">小型按钮</Button>
    <Button size="normal" theme="link">默认按钮</Button>
    <Button size="big" theme="link" >大型按钮</Button>
  </div>
  <div>
    <Button size="small" theme="text">小型按钮</Button>
    <Button size="normal" theme="text">默认按钮</Button>
    <Button size="big" theme="text">大型按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {Button}
};
</script>