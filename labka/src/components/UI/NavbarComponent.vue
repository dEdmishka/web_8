<template>
  <div class="navbar">
    <div style="cursor: pointer" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-buttons @click="$router.push('/')" style="padding: 10px;">Home</my-buttons>
      <my-buttons @click="$router.push('/professors')" style="padding: 10px;">Professors</my-buttons>
      <my-buttons @click="$router.push('/add_professor')" style="padding: 10px;">Add Professor</my-buttons>
      <my-buttons @click="$router.push('/add')" style="padding: 10px;">Add</my-buttons>
    </div>
  </div>
</template>

<script>
import MyButtons from "./MyButtons.vue";

export default {
  components: {
    MyButtons,
  },
}
</script>