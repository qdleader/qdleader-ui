<template>
  <div class="gulu-code">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "Code"
}
</script>

<style scoped>
.gulu-code{
  color: #5e6d82;
  background-color: #e6effb;
  margin: 0 4px;
  display: inline-block;
  padding: 1px 5px;
  font-size: 12px;
  border-radius: 3px;
  height: 18px;
  line-height: 18px;
  font-family: Menlo,Monaco,Consolas,Courier,monospace;
}
</style>