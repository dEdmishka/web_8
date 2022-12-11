<template>
  <div>
    <div class="edit-form">
    <h1>Professor</h1>
      <form action="">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name"
            v-model="currentProfessor.name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email"
                 v-model="currentProfessor.email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="text" class="form-control" id="password"
                 v-model="currentProfessor.password"
          />
        </div>
        <router-link to="/professors">Back</router-link>
        <button type="submit" class="btn btn-submit"
          @click="updateProfessor"
        >
          Update
        </button>
      </form>
    </div>

  </div>
</template>

<script>
import ProfessorDataService from "../../services/ProfessorDataService";

export default {
  data() {
    return {
      currentProfessor: {
        name: '',
        email: '',
        password: ''
      },
    };
  },
  methods: {
    getProfessor(id) {
      ProfessorDataService.get(id)
          .then(res => {
            this.currentProfessor.name = res.data.professor.p_name;
            this.currentProfessor.email = res.data.professor.p_email;
            this.currentProfessor.password = res.data.professor.p_password;
            console.log(res.data);
          });
    },
    updateProfessor() {
      ProfessorDataService.update(this.$route.params.id, this.currentProfessor)
          .then(res => {
            alert("Professor successfully edited!");
            // this.submitted = true;
            console.log(res.data);
            // this.$router.push('/professors');
            // setTimeout(()=> router.push('/professors'), 2000);
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.getProfessor(this.$route.params.id);
  },
}
</script>

<style scoped>

</style>