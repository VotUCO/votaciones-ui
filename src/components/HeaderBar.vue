<template>
  <div id="header">
    <img
      src="../assets/logo.png"
      id="logo"
      alt="Logo de la Aplicación VotUCO"
    />

    <ul class="buttons-menu">
      <li>
        <button class="unmarked-button">¿Qué es?</button>
      </li>
      <li>
        <button class="unmarked-button">¿Cómo funciona?</button>
      </li>
      <li><SigninButton v-if="!$store.state.logged" /></li>
      <li class="info-text" v-if="$store.state.logged">
        ¡Bienvenid@, {{ nombre }}!<img
          src="../assets/personicon.png"
          id="personlogo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import SigninButton from "./SinginButton.vue";
import "../assets/css/mains.css";
export default {
  name: "HeaderBar",
  components: {
    SigninButton,
  },
};
</script>

<style></style>
