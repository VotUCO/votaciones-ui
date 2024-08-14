<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    background-color="#ddd7d7"
  >
    <el-menu-item index="0">
      <a href="/"
        ><img style="width: 60px" src="@/assets/logo.png" alt="Element logo"
      /></a>
    </el-menu-item>
    <el-sub-menu index="1" v-if="logged != 'null'">
      <template #title>Votaciones</template>
      <a href="/vote/checker"><el-menu-item index="1-1">Voto</el-menu-item></a>
      <a href="/voting/checker"
        ><el-menu-item index="1-2">Resultados Votación</el-menu-item></a
      >
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>Sobre VotUCO</template>
      <el-menu-item index="2-1">¿Qué es?</el-menu-item>
      <el-menu-item index="2-2">¿Cómo funciona?</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-button
        type="primary"
        v-on:click="this.$router.push('/login')"
        v-if="logged == 'null'"
        plain
        >Iniciar Sesión</el-button
      >
      <el-button
        type="primary"
        v-on:click="closeSession()"
        v-if="logged != 'null'"
        plain
        >Cerrar Sesión</el-button
      >
    </el-menu-item>
  </el-menu>
</template>
<script>
import { ref } from "vue";
export default {
  name: "HeaderBar",
  setup() {
    const logged = ref(localStorage.getItem("accessToken"));
    function name() {
      return localStorage.getItem("name");
    }
    function closeSession() {
      localStorage.setItem("accessToken", "null");
      window.location.reload();
    }
    return {
      logged,
      closeSession,
      name,
    };
  },
};
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

img {
  display: inline;
}

#header {
  background-color: rgb(221, 215, 215);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo {
  flex: 1;
  display: inline;
  width: 7vw;
  margin: 1vw;
}

.topnav {
  overflow: hidden;
  display: inline;
}

.topnav span {
  padding: 14px 15px;
  font-size: 160%;
  justify-content: flex-end;
}

.topnav span a {
  text-decoration: none;
  color: black;
}

#signin-header-button {
  background-color: rgb(54, 54, 191);
  border-radius: 10px;
  height: 5vw;
  border: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 100%;
  color: white;
  display: inline;
}

#personlogo {
  width: 5%;
}

@media (max-width: 700px) {
  .topnav span {
    font-size: 80%;
  }

  #logo {
    margin: 2vw;
  }

  #signin-header-button {
    font-size: 100%;
  }

  .topnav span {
    padding: 5px 6px;
  }

  #name-span {
    display: none;
  }
}
</style>
