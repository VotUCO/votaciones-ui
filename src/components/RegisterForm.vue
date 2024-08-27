<template>
  <form @submit.prevent="submitRegister">
    <div>
      <div class="form-field">
        <label for="name">Nombre:</label>
        <input type="text" class="input" id="name" :value="name" />
      </div>
      <div class="form-field">
        <label for="surname">Apellidos:</label>
        <input type="text" class="input" id="surname" :value="surname" />
      </div>
      <div class="form-field">
        <label for="email">Correo Electrónico:</label>
        <input
          type="text"
          class="input"
          id="email"
          :disabled="emailGiven()"
          :value="email"
        />
      </div>
      <div class="form-field">
        <label for="password">Contraseña:</label>
        <input type="password" class="input" id="email" :value="password" />
      </div>
      <div class="form-field">
        <label for="password_check">Confirmar Contraseña:</label>
        <input
          type="password"
          class="input"
          id="password_check"
          :value="password_check"
        />
      </div>
      <div class="form-field">
        <label for="birhtDate">Fecha de Nacimiento:</label>
        <input type="date" class="input" id="birthDate" :value="birthDate" />
      </div>
      <div id="submit-form-add-votation">
        <button id="vote-button" type="submit">Registrar Usuario</button>
      </div>
    </div>
  </form>
</template>

<script>
import "../assets/css/mains.css";

export default {
  name: "RegisterForm",
  props: {
    give_email: String,
  },
  setup() {
    const name = "";
    const surname = "";
    const email = "";
    const password = "";
    const password_check = "";
    const birthDate = new Date();
    const gender = "";
    const genders = [
      "Masculino",
      "Femenino",
      "No Binario",
      "Prefiero no Decirlo",
      "Otro",
    ];
    function submitForm() {
      return "Hello";
    }
    function emailGiven() {
      if (this.give_email) {
        this.email = this.give_email;
        return true;
      } else {
        return false;
      }
    }
    return {
      name,
      surname,
      email,
      password,
      password_check,
      birthDate,
      gender,
      genders,
      submitForm,
      emailGiven,
    };
  },
};
</script>

<style>
#vote-button {
  background-color: #0f7fac;
  border-radius: 15px;
  padding: 10px;
}

.form-field {
  margin-left: 5vw;
  width: 25vw;
  height: fit-content;
  align-items: center;
  margin-top: 5vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Espacio entre elementos */
  gap: 20px; /* Margen entre los divs */
}

.input {
  width: fit-content;
  height: fit-content;
}
</style>
