<template>
  <div class="home">
    <h1>
      ¡Bienvenid@ a VotUCO: El sistema de votaciones on-line de la Universidad
      de Córdoba!
    </h1>
    <h4>
      Para ver las votaciones disponibles para usted, inicie sesión con su
      usuario corporativo
    </h4>
    <SigninButton data-cy="signin-button" />
  </div>
</template>

<script>
// @ is an alias to /src
import SigninButton from "@/components/SinginButton.vue";
export default {
  name: "HomeView",
  components: {
    SigninButton,
  },
};
</script>

<style></style>
