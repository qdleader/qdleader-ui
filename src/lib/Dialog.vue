<template>
  <Teleport to="body">
    <template v-if="visible">
    <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
    <div class="gulu-dialog-wrapper" v-show="visible">
      <div class="gulu-dialog">
        <header>
          <slot name="title" />
          <span @click="close" class="gulu-dialog-close"></span>
        </header>
        <main>
          <slot name="content"/>
        </main>
        <footer>
          <Button level="main" @click="ok">OK</Button>
          <Button @click="cancel">Cancel</Button>
        </footer>
      </div>
    </div>
    </template>
  </Teleport>
</template>

<script lang="ts">

import Button from './Button.vue';

export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: '提示',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: {Button},
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancel && props.cancel() !== false) {
        close();
      }
    };

    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    return {ok, cancel, onClickOverlay, close};
  }
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.gulu-dialog {
  background-color: #fff;
  border-radius: $radius;
  box-shadow: 0 0 5px fade-out(black, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: fade-out(black, 0.5);
    z-index: 3;
  }
  &-wrapper {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    .gulu-dialog-close {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      cursor: pointer;
      &::before, &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        background-color: black;
        top: 50%;
        left: 50%;
      }
      &::before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
}
</style>