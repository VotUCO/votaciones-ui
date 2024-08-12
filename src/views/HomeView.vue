<template>
  <div class="home" v-if="logged == 'null'">
    <h1>
      ¡Bienvenid@ a VotUCO: El sistema de votaciones on-line de la Universidad
      de Córdoba!
    </h1>
    <h4>
      Para ver las votaciones disponibles para usted, inicie sesión con su
      usuario corporativo
    </h4>
    <div align="center">
      <el-button
        type="primary"
        v-on:click="this.$router.push('/login')"
        size="large"
        id="login-button"
        data-cy="signin-button"
        >Iniciar Sesión</el-button
      >
    </div>
  </div>
  <div class="votations" v-if="logged != 'null' && rol == 'user'">
    <Suspense>
      <PrivateVotes />
    </Suspense>
    <Suspense>
      <PublicVotes />
    </Suspense>
  </div>
  <div class="votations" v-if="logged != 'null' && rol == 'admin'">
    <div id="add-voting-button">
      <a href="/createVote"
        ><el-button type="primary" size="large" class="button-header"
          >Añadir votación</el-button
        ></a
      >
      <a href="/adminUsers">
        <el-button size="large" class="button-header"
          >Administar Usuarios</el-button
        >
      </a>
    </div>
    <Suspense>
      <ActiveVotes />
    </Suspense>
    <Suspense>
      <DraftVotes />
    </Suspense>
    <Suspense>
      <ArchivedVotes />
    </Suspense>
  </div>
</template>

<script>
// @ is an alias to /src
import PublicVotes from "@/components/PublicVotes.vue";
import PrivateVotes from "@/components/PrivateVotes.vue";
import ActiveVotes from "@/components/ActiveVotes.vue";
import DraftVotes from "@/components/DraftVotes.vue";
import ArchivedVotes from "@/components/ArchivedVotes.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    PublicVotes,
    PrivateVotes,
    ActiveVotes,
    DraftVotes,
    ArchivedVotes,
  },
  setup() {
    const logged = ref(localStorage.getItem("accessToken"));
    const rol = ref(localStorage.getItem("rol"));
    return {
      logged,
      rol,
    };
  },
};
</script>

<style scoped>
#add-voting-button {
  margin: 35px;
}
h1 {
  text-align: center;
  font-size: 3vw;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 5vw;
}

h4 {
  text-align: center;
  font-size: 2vw;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 5vw;
}

#singin-button-container {
  align-content: center;
}

#login-button {
  margin: 15px;
}

.button-header {
  margin: 10px;
}

@media (max-width: 850) {
}
</style>
