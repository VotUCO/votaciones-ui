<template>
  <button id="signin-button" v-on:click="$store.state.logged = true">
    Iniciar Sesión
  </button>
</template>

<script>
export default {
  name: "SigninButton",
};
</script>

<style></style>
