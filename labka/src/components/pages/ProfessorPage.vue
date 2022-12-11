<template>
  <div>
    <h1>Page with professors</h1>
    <professor-list
        :professors="professors"
        @remove="deleteProfessor($event)"
    />
  </div>
</template>

<script>
import AddProfessor from "../professor/AddProfessor.vue";
import ProfessorList from "../professor/ProfessorList.vue";
import ProfessorDataService from "../../services/ProfessorDataService";

export default {
  components: {
    ProfessorList,
    AddProfessor
  },
  data: () => ({
    professors: [],
  }),
  computed: {},
  methods: {
    getProfessors() {
      ProfessorDataService.getAll()
          .then(res => {
            this.professors = res.data;
            console.log(res.data);
            console.log(this.professors)
          })
          .catch(e => {
            console.log(e);
          });
    },
    deleteProfessor(professor) {
      ProfessorDataService.delete(professor.id_p)
          .then(res => {
            alert('You have successfully deleted professor: ' + professor.p_name + ' !')
            console.log(res.data);
            this.getProfessors();
            // this.$router.push({ name: "professors" });
          })
          .catch(e => {
            // console.log(this.professors)
            // console.log(this.professor)
            // console.log(professor)
            console.log(e);
          });
    },
  },
  mounted() {
    this.getProfessors();
  }
};
</script>

<style scoped>

</style>