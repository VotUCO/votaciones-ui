<template>
  <RegisterForm />
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "RegisterUserView",
  components: {
    RegisterForm,
  },
  setup() {
    const email = "";

    return {
      email,
    };
  },
};
</script>

<style></style>
