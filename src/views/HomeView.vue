<template>
  <div class="home" v-if="!isLogged()">
    <h1>
      ¡Bienvenid@ a VotUCO: El sistema de votaciones on-line de la Universidad
      de Córdoba!
    </h1>
    <h4>
      Para ver las votaciones disponibles para usted, inicie sesión con su
      usuario corporativo
    </h4>
    <div align="center">
      <SigninButton data-cy="signin-button" />
    </div>
  </div>
  <div class="votations" v-if="isLogged()">
    <PrivateVotes />
    <Suspense>
      <PublicVotes />
    </Suspense>
  </div>
</template>

<script>
// @ is an alias to /src
import SigninButton from "@/components/SinginButton.vue";
import PublicVotes from "@/components/PublicVotes.vue";
import PrivateVotes from "@/components/PrivateVotes.vue";

export default {
  name: "HomeView",
  components: {
    SigninButton,
    PublicVotes,
    PrivateVotes,
  },
  setup() {
    function isLogged() {
      return localStorage.getItem("accessToken") != "null";
    }
    return {
      isLogged,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 5vw;
}

h4 {
  text-align: center;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 5vw;
}

#singin-button-container {
  align-content: center;
}

@media (max-width: 850) {
}
</style>
