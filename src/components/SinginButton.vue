<template>
  <button id="signin-button" v-on:click="this.$router.push('/login')">
    Iniciar Sesión
  </button>
</template>

<script>
export default {
  name: "SigninButton",
};
</script>

<style>
#signin-button {
  background-color: rgb(54, 54, 191);
  border-radius: 15px;
  border: none;
  padding: 12px;
  margin-top: 4.5%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  color: white;
  display: inline;
}
</style>
