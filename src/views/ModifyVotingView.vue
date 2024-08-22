<template>
  <h1>Modificar Votación</h1>
  <div id="vote-form">
    <Suspense>
      <ModifyVotingForm />
    </Suspense>
  </div>
</template>

<script>
import ModifyVotingForm from "@/components/ModifyVotingForm.vue";
export default {
  name: "ModifyVotationView",
  components: {
    ModifyVotingForm,
  },
  setup() {},
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
