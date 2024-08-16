<template>
  <el-form
    style="max-width: 600px"
    :model="dynamicValidateForm"
    label-width="auto"
    class=""
  >
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Por favor, ingrese su email',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Por favor, ingrese un email válido',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <el-input v-model="dynamicValidateForm.email" />
    </el-form-item>
    <el-form-item
      prop="password"
      label="Contraseña"
      :rules="[
        {
          required: true,
          message: 'Por favor, ingrese su contraseña',
          trigger: 'blur',
        },
      ]"
    >
      <el-input v-model="dynamicValidateForm.password" type="password" />
    </el-form-item>
    <el-alert
      title="Acceso Incorrecto"
      type="error"
      id="error-modal"
      style="display: none"
    />
    <div id="send-button">
      <el-form-item>
        <el-button type="primary" id="login-button" @click="sendData(formRef)"
          >Acceder</el-button
        >
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import axios from "axios";
import router from "@/router";
import { reactive } from "vue";

export default {
  name: "LoginEmailPass",
  setup() {
    const dynamicValidateForm = reactive({
      email: "",
      password: "",
    });
    async function sendData() {
      const payload = {
        email: this.dynamicValidateForm.email,
        password: this.dynamicValidateForm.password,
      };
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BACK_URL}/api/v1/user/login`,
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
        localStorage.setItem("name", response.data.nombre);
        localStorage.setItem("rol", response.data.rol);
        router.push("/");
      } catch (error) {
        var errorMessage = document.getElementById("error-modal");
        errorMessage.style.display = "block";
      }
    }
    return {
      dynamicValidateForm,
      sendData,
    };
  },
};
</script>

<style scoped>
label {
  display: block;
  font-weight: bold;
  text-align: left;
  padding: 5px;
}
#login-button {
  height: 50px;
  width: 75px;
  font-size: 15px;
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

#error-modal {
  margin: 10px;
}

#send-button {
  display: flex;
  justify-content: center;
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
