<template>
  <div class="add_container">
    <div>
      Choose what you want to add!
    </div>
    <div class="">
      <label for="">
        <router-link to="/">Home</router-link>
      </label> <br/>
      <label for="">
        <router-link to="/professors">AllProf</router-link>
      </label> <br/>
      <label>
        <router-link to="/add_professor">AddProf</router-link>
      </label> <br/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.add_container{
  font-size: 26px;
}
</style>