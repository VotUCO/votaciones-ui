<template>
  <h1>Nueva Votación</h1>
  <CreateVotationForm />
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
</style>
>
