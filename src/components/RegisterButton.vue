<template>
  <button id="register-button" v-on:click="this.$router.push('/register')">
    Registro
  </button>
</template>

<script>
export default {
  name: "RegisterButton",
};
</script>

<style scoped>
#register-button {
  background-color: rgb(54, 54, 191);
  border-radius: 15px;
  border: none;
  padding: 12px;
  margin-top: 3vw;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  color: white;
  display: inline;
}

@media (max-width: 700px) {
  /* Estilos específicos para teléfonos móviles */
  #register-button {
    font-size: medium;
  }
}
</style>
