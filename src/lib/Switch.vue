<template>
  <button v-if="kingValue" @click="toggleKingValue" class="gulu-switch-king "
          :class="{'gulu-checked':kingValue===kingData[1]}">
    <span class="slider" :class="{'gulu-checked':value}"></span>
    <span class="gulu-switch-king-item" :class="{'gulu-item-checked':kingValue===kingData[0]}">{{ kingData[0] }}</span>
    <span class="gulu-switch-king-item" :class="{'gulu-item-checked':kingValue===kingData[1]}">{{ kingData[1] }}</span>
  </button>
  <button v-else @click="toggle" class="gulu-switch" :class="{'gulu-checked':value}">
    <span class="slider"></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Switch',
  props: {
    value: Boolean,
    kingValue: {
      type: String
    },
    kingData: {
      type: Array
    }
  },
  setup(props, context) {
    console.log(props['kingValue']);
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    const toggleKingValue = () => {
      const index = props.kingData.findIndex((item) => item === props.kingValue) === 0 ? 1 : 0;
      console.log(props.kingData[index]);
      context.emit('update:kingValue', props.kingData[index]);
    };
    return {toggle, toggleKingValue};
  }

};
</script>

<style lang="scss">
@import "../helper";
$h: 22px;
$h2: $h - 4;
$w: 44px;
.gulu-switch {
  height: $h;
  width: $h*2;
  border: none;
  border-radius: 11px;
  position: relative;
  background-color: #DCDFE6;
  transition: all 250ms;
  .slider {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    border-radius: $h2;
    background-color: #fff;
    transition: all 250ms;
  }
  &.gulu-checked {
    background-color: $deepBlue;
    .slider {
      left: calc(100% - #{$h - 2px});
    }
    &:active {
      > span {
        margin-left: -10px;
      }
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > .slider {
      width: $h;
      margin-left: 10px;
    }
  }
}
.gulu-switch-king {
  z-index: 0;
  position: relative;
  border: none;
  background-color: #102131;
  border-radius: 4px;
  padding: 6px 5px;
  .gulu-switch-king-item {
    padding: 6px 5px;
    color: #677991;
    &.gulu-item-checked {
      color: #EEFEFF;
    }
  }
  &.gulu-checked {
    > .slider {
      background-color: red;
      left: calc(50%);
    }

  }
  .slider {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    color: #EEFEFF;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #73B2DF;
    border-radius: 4px;
    background: linear-gradient(180deg, rgba(25, 88, 139, 1) 0%, rgba(38, 113, 178, 1) 66%);
    transition: all 250ms;
  }
}

</style>