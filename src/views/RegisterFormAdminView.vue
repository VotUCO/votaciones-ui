<template>
  <h1>Editar Usuario</h1>
  <RegisterFormAdmin />
</template>

<script>
import RegisterFormAdmin from "@/components/RegisterFormAdmin.vue";

export default {
  name: "RegisterUserView",
  components: {
    RegisterFormAdmin,
  },
  setup() {
    const email = "";

    return {
      email,
    };
  },
};
</script>

<style>
h1 {
  margin: 2vw;
}
</style>
