<template>
  <div class="form-container">
    <el-form
      :model="form"
      label-width="auto"
      id="form-register"
      style="max-width: 600px"
    >
      <el-form-item label="Nombre" required>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Apellidos" required>
        <el-input v-model="form.surname" />
      </el-form-item>
      <el-form-item label="Correo Electrónico" required>
        <el-input v-model="form.email" :disabled="providedEmail()" />
      </el-form-item>
      <el-form-item label="Contraseña" required>
        <el-input
          v-model="form.password"
          style="width: 240px"
          type="password"
          show-password
        />
      </el-form-item>
      <el-form-item label="Confirmar Contraseña" required>
        <el-input
          v-model="form.password_check"
          style="width: 240px"
          type="password"
        />
      </el-form-item>
      <el-form-item label="Género" required>
        <el-select v-model="form.gender">
          <el-option label="Masculino" value="masculino" />
          <el-option label="Femenino" value="femenino" />
          <el-option label="No Binario" value="nobinario" />
          <el-option label="Prefiero no decirlo" value="prefieronodecirlo" />
          <el-option label="Otro" value="femenino" />
        </el-select>
      </el-form-item>
      <el-form-item label="Rol" required>
        <el-select v-model="form.rol">
          <el-option label="Admin" value="admin" />
          <el-option label="User" value="user" />
        </el-select>
      </el-form-item>
      <el-form-item label="Fecha de Nacimiento" required>
        <el-date-picker
          v-model="form.birthDate"
          type="date"
          style="width: 100%"
          format="DD/MM/YYYY"
        />
      </el-form-item>
      <div id="form-button">
        <el-form-item>
          <el-button type="primary" size="large" @click="submitRegister"
            >Editar</el-button
          >
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import "../assets/css/mains.css";
import axios from "axios";
import { reactive } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "RegisterForm",
  components: {},
  setup() {
    const route = useRoute();
    const form = reactive({
      name: "",
      surname: "",
      email: route.query.email,
      password: "",
      password_check: "",
      birthDate: "",
      gender: "",
    });
    async function submitRegister() {
      if (form.password !== form.password_check) {
        alert("Las contraseñas no coinciden.");
        return;
      }
      const payload = {
        name: form.name,
        surname: form.surname,
        email: form.email,
        password: form.password,
        gender: form.gender,
        birthDate: form.birthDate
          .toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\//g, "-"),
        rol: form.rol,
      };
      try {
        const response = await axios.post(
          `${process.env.VUE_APP_BACK_URL}/api/v1/user/register`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status == 200) {
          const success = document.createElement("el-alert");
          success.title = "Usuario creado";
          success.type = "success";
          document.body.append(success);
          window.location.replace("/login");
        } else {
          const error = document.createElement("el-alert");
          error.title = "Usuario creado";
          error.type = "error";
          document.body.append(error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    function providedEmail() {
      if (route.query.email) {
        return true;
      }
    }
    return {
      form,
      submitRegister,
      providedEmail,
    };
  },
};
</script>

<style>
#form-register {
  width: fit-content;
  display: inline;
  justify-content: center;
  align-content: center;
}

.form-container {
  margin: 5vw;
}

#form-button {
  display: flex;
  justify-content: center;
}
</style>
