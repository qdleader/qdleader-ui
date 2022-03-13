<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div>
      <div class="banner">
        <h1>QD UI</h1>
        <h2>一个厉害的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/qdleader" target="_blank">GitHub</a>
          <router-link to="/doc">Start</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <div class="text">
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </div>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="text">
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </div>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <div class="text">
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  name: 'Home',
  components: {Topnav}
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
.topnavAndBanner {
  background: url("../assets/bg.png") no-repeat 0 0;
  background-size:100% 100%;
  //background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h1 {
    color: #DCA544;
  }
  > h2 {
    color: #DCE0E7;
    font-weight: normal;
  }
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background-color: #BAA06D;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }

  }
}
.features {
  margin-top: 20px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;

  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: flex;
      align-items: center;
      > svg {
        flex-shrink: 0;
        width: 64px;
        height: 64px;
      }
      >.text{
        margin-left: 10px;
        > h3 {
          font-size: 28px;
        }
        > p {
        }
      }
    }
  }
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (max-width: 500px) {
    & {
      width: 80%;
      > ul {
        > li {
          width: 100%;
          > svg {
            width: 50px;
          }
          .text{
            > h3 {
              grid-area: title;
              font-size: 15px;
            }
            > p {
              font-size: 10px;
              width: 100%;
              word-wrap: break-word;
              word-break: break-all;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
}
</style>