<template>
  <RegisterForm :give_email="email" />
</template>

<script>
import RegisterForm from "@/components/RegisterForm.vue";

export default {
  name: "RegisterUserView",
  components: {
    RegisterForm,
  },
  setup() {
    const email = this.$route.query.email;

    return {
      email,
    };
  },
};
</script>

<style></style>
