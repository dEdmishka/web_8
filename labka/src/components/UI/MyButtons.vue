<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn{
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  background: none;
  color: green;
}
</style>