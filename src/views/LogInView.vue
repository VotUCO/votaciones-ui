<!-- eslint-disable vue/no-parsing-error -->
<template>
  <el-space direction="vertical" id="form-container">
    <div id="login-logo">
      <a href="/"
        ><img src="@/assets/logo.png" alt="Logo de la aplicación VotUCO"
      /></a>
    </div>
    <div>
      <LogInEmailPass />
    </div>
    <div id="buttons-container">
      <a :href="googleURL()"
        ><el-button type="info" plain>
          <el-image
            style="width: 25px; height: 25px"
            src="https://jesusescribano.net/google.png"
            fit="scale-down"
          />Acceder con Google</el-button
        ></a
      >
      <a :v-on:click="googleURL()"
        ><el-button type="info" plain>
          <el-image
            style="width: 25px; height: 25px"
            src="https://jesusescribano.net/uco.png"
            fit="scale-down"
          />Universidad de Córdoba</el-button
        ></a
      >
    </div>
    <div id="register-button-container">
      <el-button
        type="info"
        href="/register"
        tag="a"
        rel="noopener noreferrer"
        style="width: 100px; height: 50px"
        >Registrarse</el-button
      >
    </div>
  </el-space>
</template>

<script>
import LogInEmailPass from "@/components/LogInEmailPass.vue";
export default {
  name: "LoginView",
  components: {
    LogInEmailPass,
  },
  setup() {
    function googleURL() {
      return `${process.env.VUE_APP_BACK_URL}/api/v1/user/google`;
    }
    return {
      googleURL,
    };
  },
};
</script>

<style scoped>
#login-logo img {
  height: 15vw;
  margin-top: 15px;
  margin-bottom: 15px;
}

#register-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#buttons-container a {
  margin: 7px;
}

#buttons-container {
  margin: 15px;
}

#form-container {
  display: flex;
  justify-content: center;
}
</style>
