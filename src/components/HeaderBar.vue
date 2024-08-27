<template>
  <div>
    <div id="header">
      <a href="/" target="_self">
        <img
          src="../assets/logo.png"
          id="logo"
          alt="Logo de la Aplicación VotUCO"
        />
      </a>
      <div class="topnav">
        <span><a class="active" href="/about">¿Qué es?</a></span>
        <span><a href="/how-works">¿Cómo funciona?</a></span>
        <span
          ><SigninButton v-if="!isLogged()" id="signin-header-button"
        /></span>
        <span v-if="isLogged()">
          ¡Bienvenid@, {{ nombre }}!<img
            src="../assets/personicon.png"
            id="personlogo"
          />
        </span>
      </div>
      <!-- <span class="nav-menu">
        <ul class="button-menu">
          <li>
            <button class="unmarked-button">¿Qué es?</button>
          </li>
          <li>
            <button class="unmarked-button">¿Cómo funciona?</button>
          </li>
          <div class="login-info">
            <li><SigninButton v-if="isLogged()" /></li>
            <li class="info-text" v-if="!isLogged()">
              ¡Bienvenid@, {{ nombre }}!<img
                src="../assets/personicon.png"
                id="personlogo"
              />
            </li>
          </div>
        </ul>
      </span> -->
    </div>
  </div>
</template>

<script>
import SigninButton from "./SinginButton.vue";

import "../assets/css/header.css";
export default {
  name: "HeaderBar",
  components: {
    SigninButton,
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
}
</style>
