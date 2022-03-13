<template>
  <div class="topnav">
    <span v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <svg class="icon">
        <use xlink:href="#icon-zhedie"></use>
      </svg>
      <img src="../assets/logo.png" alt=""/>
    </span>
    <router-link to="/" class="logo">
       <img class="icon" src="../assets/logo.png" alt=""/>
      <span>QD</span>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  name: 'Topnav',
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    console.log('topnav获取的menuVisible为：' + menuVisible.value);
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  }
};
</script>

<style lang="scss" scoped>
.icon {
  border-radius:50%;
  box-shadow: 1px 0 1px #eee;
}
@import "../helper";
.topnav {
  background-image: url(//game.gtimg.cn/images/yxzj/cp/a20181201camp/p5-bg.jpg);
  border-bottom: 1px solid #666;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    align-items: center;
    > svg {
      width: 32px;
      height: 32px;
      fill: #DCA544;

    }
    >span {
      font-size: 20px;
      margin-left: 10px;
      color: #DCA544;
      font-weight: 600;
    }
  }
  .menu {
    display: flex;
    color: #DCE0E7;
    li {
      margin-left: 10px;
    }
  }
  .toggleAside {
    display: none;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    padding: 2px 10px;
    fill: white;
    text-align: center;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    svg {

    }
  }
  @media (max-width:  860px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    .toggleAside {
      display: inline-block;
    }
  }
}

</style>