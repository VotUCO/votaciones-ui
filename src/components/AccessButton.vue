<template>
  <button id="access-button" v-on:click="$store.state.logged = true">
    Acceder
  </button>
</template>

<script>
export default {
  name: "AccessButton",
};
</script>

<style scoped>
#access-button {
  background-color: rgb(54, 54, 191);
  border-radius: 15px;
  border: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: white;
  display: inline;
}

@media (max-width: 600px) {
  /* Estilos específicos para teléfonos móviles */
  #access-button {
    font-size: medium;
  }
}
</style>
