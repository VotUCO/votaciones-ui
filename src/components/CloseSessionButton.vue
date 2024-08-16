<template>
  <button id="close-session-button" v-on:click="cleanSession()">
    Cerrar Sesión
  </button>
</template>

<script>
export default {
  name: "CloseSessionButton",
  setup() {
    function cleanSession() {
      localStorage.setItem("accessToken", null);
      window.location.replace("/");
    }
    return {
      cleanSession,
    };
  },
};
</script>

<style scoped>
#close-session-button {
  background-color: #667368;
  border-radius: 15px;
  border: none;
  padding: 12px;
  margin-top: 4.5%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: white;
  display: inline;
}

@media (max-width: 700px) {
  #close-session-button {
    font-size: 75%;
    margin-top: 1%;
  }
}
</style>
