<template>
  <h1>Nueva Votación</h1>
  <div id="vote-form">
    <CreateVotationForm />
  </div>
</template>

<script>
import CreateVotationForm from "@/components/CreateVotationForm.vue";
export default {
  name: "CreateVotationView",
  components: {
    CreateVotationForm,
  },
};
</script>

<style scoped>
h1 {
  margin: 20px;
}
#vote-form {
  display: flex;
  justify-content: center;
}
</style>
>
