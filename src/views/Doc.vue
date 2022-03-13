<template>
  <div class="layout">
    <Topnav toggle-menu-button-visible class="nav"/>
    <div class="content">
      <aside :class="{mobileHidden:!menuVisible}">
        <div class="mask" @click="menuVisible=false"></div>
        <div class="list">
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">快速上手</router-link>
            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 开关</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 对话框</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 标签页</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  name: 'Doc',
  components: {Topnav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    console.log('doc获取的menuVisible为：' + menuVisible.value);
    return {menuVisible};

  }
};
</script>

<style lang="scss" scoped>
@import "../helper";

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    z-index: 3;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

  }
  @media (max-width: 860px) {
    .mobileHidden{
      display: none;
    }
    .mask {
      background-color: rgba(0, 0, 0, 0.5);
      position: fixed;
      width: 100vw;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
      display: block;
    }
    .content {
      display: block;
      padding-left: 0 ;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  color: #D6DAE2;
  border-right: 1px solid fade-out(black, 0.95);
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .list {
    padding-top: 80px;
    //background: linear-gradient(145deg, rgba(57, 79, 116, 1) 0%, rgba(54, 68, 95, 1) 100%);
    background-image: url(//game.gtimg.cn/images/yxzj/cp/a20181201camp/p5-bg.jpg);
    height: 100vh;

    > h2 {
      margin-bottom: 4px;
      padding: 4px 16px;
    }
    > ol {
      > li {
        a {
          display: block;
          padding: 8px 16px;
          &:hover {
            text-decoration: none;
          }
          &.router-link-active {
            color: #35435E;
            background-color: #fff;
          }
        }
      }
    }
  }

}

</style>