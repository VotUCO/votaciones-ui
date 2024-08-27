<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div id="login-logo">
    <a href="/"
      ><img src="@/assets/logo.png" alt="Logo de la aplicación VotUCO"
    /></a>
  </div>
  <LogInEmailPass />
  <div id="buttons-container">
    <SocialLoginButton
      class="social-button"
      name="Acceder con Google"
      link="/login/google"
      logo="@/assets/google.png"
    />
    <SocialLoginButton
      class="social-button"
      name="Universidad de Córdoba"
      link="/login/uco"
      logo="@/assets/uco.png"
    />
  </div>
</template>

<script>
import LogInEmailPass from "@/components/LogInEmailPass.vue";
import SocialLoginButton from "@/components/SocialLoginButton.vue";
export default {
  name: "LoginView",
  components: {
    LogInEmailPass,
    SocialLoginButton,
  },
};
</script>

<style scoped>
.social-button {
  display: inline;
  width: 25vh;
  height: 4vw;
  margin: 4vw;
}

#buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

#login-logo {
  display: flex;
  height: 10vw;
  justify-content: center;
  margin-top: 5vw;
  margin-bottom: 1vw;
}

#login-logo img {
  height: 15vw;
}

@media (max-width: 600px) {
}
</style>
