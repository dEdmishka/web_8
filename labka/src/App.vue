<template>
  <navbar-component/>
  <div>
    <router-view/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import NavbarComponent from "./components/UI/NavbarComponent.vue";

export default defineComponent({
  components: {
    NavbarComponent
  }
})
</script>

<style scoped>
#api{
  min-height: 100vh;
}
.navbar {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}
main{
  margin: 50px auto;

}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}


nav a:first-of-type {
  border: 0;
}

</style>
