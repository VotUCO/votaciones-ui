<template>
  <div>
    <button id="social-button" v-on:click="this.$router.push({ link })">
      <img src="../assets/google.png" id="logo" alt="name" />
      <p id="button-name">{{ name }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "SocialLoginButton",
  props: {
    link: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    logo: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
#social-button {
  background-color: rgb(221, 215, 215);
  border-radius: 15px;
  border: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 1vw;
  font-weight: bold;
  color: black;
  display: inline;
}

#button-name {
  margin-top: 1vw;
}

button {
  width: auto;
  height: 150%;
}

p {
  text-align: right;
  display: inline;
  justify-content: center;
}

img {
  width: 10%;
  display: inline;
  justify-content: center;
  margin-right: 5%;
}

@media (max-width: 600px) {
  #social-button {
    font-size: 1.75vw;
  }
}
</style>
