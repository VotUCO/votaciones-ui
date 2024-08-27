<template>
  <form @submit.prevent="sendData">
    <div id="login-box">
      <div id="input-container">
        <label for="email">Email:</label>
        <input type="text" class="input-login" id="email" v-model="email" />
      </div>
      <div id="input-container">
        <label for="password">Contraseña:</label>
        <input
          type="password"
          class="input-login"
          id="password"
          v-model="password"
        />
      </div>
      <div v-if="this.error">
        <p class="error-message">La identificación no fue exitosa</p>
      </div>
      <div id="access-button">
        <AccessButton type="submit" />
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import AccessButton from "./AccessButton.vue";
import axios from "axios";
import router from "@/router";

export default {
  name: "LoginEmailPass",
  components: {
    AccessButton,
  },
  setup() {
    let email = "";
    let password = "";
    let error = ref(false);
    async function sendData() {
      const payload = {
        username: this.email,
        password: this.password,
      };
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BACK_URL}/api/v1/user/login/`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.setItem("refreshToken", response.data.refresh);
        localStorage.setItem("accessToken", response.data.access);
        localStorage.setItem("logged", true);
        router.push("/");
      } catch (error) {
        this.error = true;
        console.log(this.error);
      }
    }
    return {
      email,
      password,
      error,
      sendData,
    };
  },
};
</script>

<style>
label {
  display: block;
  font-weight: bold;
  text-align: left;
  padding: 5px;
}
#login-box {
  border: 2px solid rgb(54, 54, 191);
  padding: 10px;
  margin: 0 auto;
  margin-top: 5vw;
  place-items: center;
  height: 90%;
  width: 56%;
}
.input-login {
  display: block;
  margin-right: 0%;
  width: 51vw;
  background-color: rgb(221, 215, 215);
  border: none;
}
#input-container {
  margin-top: 2vh;
}
#access-button {
  display: flex;
  margin-top: 1%;
  justify-content: center;
}

.error-message {
  color: red;
}

@media (max-width: 600px) {
  /* Estilos específicos para teléfonos móviles */
  #access-button {
    display: flex;
    padding: 0.5vh;
    margin-top: 0.2vw;
    margin-bottom: 0vw;
    justify-content: center;
  }
}
</style>
