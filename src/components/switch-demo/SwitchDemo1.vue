<demo>
  常规用法
</demo>
<template>
  <div>
    <Switch :value="bool1" @update:value="bool1=$event"/>
    <div class="kingWrapper">
      <Switch v-model:king-value="kingValue" :king-data="kingData"></Switch>
    </div>
  </div>
</template>
<script>
import Switch from '../../lib/Switch.vue';
import { ref } from 'vue';

export default {
  components: { Switch },
  setup() {
    const bool1 = ref(false);
    const kingValue = ref('按钮1');
    const kingData = ref(['按钮1', '按钮2']);
    const onupdate=(data)=>{

    }
    return { bool1, kingValue, kingData,onupdate };
  }
};
</script>