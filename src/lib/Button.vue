<template>
  <button class="gulu-button" :class="classes" :disable="disable">
    <span v-if="loading" class="gulu-loadingIndicator"></span>
    <slot/>
  </button>
</template>

<script lang="ts">
import {computed} from 'vue';
export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
    type: {
      type: String,
      default: 'normal',
    },
    disable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const {theme, size, type} = props;
    const classes = computed(() => {
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-type-${type}`]: type,
      };
    });
    return {classes};
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: #F56C6C;
$grey: #909399;
$green: #67C23A;
$orange: #E6A23C;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: transparent;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;

  & + & {
    margin-left: 8px;
  }
  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  // theme
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: lighten(white, 5%);
    }
  }
  // size
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  // theme
  &.gulu-theme-button {
    &.gulu-type-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: lighten($blue, 10%);
        border-color: lighten($blue, 10%);
      }
    }
    &.gulu-type-success {
      background-color: $green;
      color: white;
      &:hover, &:focus {
        background: lighten($green, 10%);
        border-color: lighten($green, 10%);
      }
    }
    &.gulu-type-info {
      background-color: $grey;
      color: white;
      &:hover, &:focus {
        background: lighten($grey, 10%);
        border-color: lighten($grey, 10%);
      }
    }
    &.gulu-type-warning {
      background: $orange;
      border-color: $orange;
      color: white;
      &:hover, &:focus {
        background: lighten($orange, 10%);
        border-color: lighten($orange, 10%);
      }
    }
    &.gulu-type-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover, &:focus {
        background: lighten($red, 10%);
        border-color: lighten($red, 10%);
      }
    }
    // 王者风格
    &.gulu-type-king {
      color: #88A8D8;
      background-color: #0F294C;
      border: 2px solid #88A8D8;
    }
    &.gulu-type-king-main {
      color: #ebfafb;
      border: 2px solid #87BEEB;
      background: linear-gradient(180deg, rgba(25, 88, 139, 1) 0%, rgba(38, 113, 178, 1) 66%);
    }
    &.gulu-type-king-gold {
      color: #F9F7D7;
      $goldStart: rgba(129, 103, 55, 1);
      $goldEnd: rgba(184, 144, 82, 1) ;
      background: linear-gradient(0deg, rgba(184,144,82,1) 0%, rgba(129,103,55,1) 100%);
      border: none;
      $w:10px;
      clip-path: polygon($w 0, calc(100% - 20%) 0, 100% 20%, 100% calc(100% - 20%), calc(100% - 20%) 100%, 20% 100%, 0 calc(100% - 20%), 0 20%);
    }
  }
  &.gulu-theme-link {
    &.gulu-type-danger {
      color: $red;
      &:hover,
      &:focus {
        color: lighten($red, 10%);
      }
    }
  }
  &.gulu-theme-text {
    &.gulu-type-main {
      color: $blue;
      &:hover,
      &:focus {
        color: lighten($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: lighten($red, 10%);
      }
    }
  }
  // disable
  &.gulu-theme-button {
    &[disabled] {
      color: $grey;
      cursor: not-allowed;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      color: $grey;
      cursor: not-allowed;
    }
  }
  // loading
  > .gulu-loadingIndicator {
    width: 10px;
    height: 10px;
    display: inline-block;
  }
  > .gulu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 0.8s infinite linear;
    @keyframes gulu-spin {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(360deg)
      }
    }
  }

}
</style>