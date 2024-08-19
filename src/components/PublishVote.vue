<template>
  <div id="vote-info">
    <div class="vote-module">
      <p>Nombre de la Votación:</p>
      <p class="bold">{{ route.query.name }}</p>
    </div>
    <div class="vote-module">
      <p>Número de Ganadores:</p>
      <p class="bold">{{ route.query.winners }}</p>
    </div>
    <div class="vote-module">
      <p>Sistema de Votación:</p>
      <p class="bold">{{ route.query.votingSystem }}</p>
    </div>
    <div id="vote-module-last">
      <p>Opciones:</p>
    </div>
    <ul id="voting-elements">
      <li v-for="i in options" :key="i" class="option-item">
        {{ i }}
      </li>
    </ul>
  </div>
  <div id="publish-button">
    <el-radio-group v-model="privacy">
      <el-radio value="false" size="large" border>Pública</el-radio>
      <el-radio value="true" size="large" border>Privada</el-radio>
    </el-radio-group>
  </div>
  <div id="authorized-list-container" v-if="privacy === 'true'">
    <p style="font-weight: bold">
      Lista de Autorizados (introducir separados por comas)
    </p>
    <el-input
      v-model="authorizedUsers"
      style="width: 100%"
      :rows="2"
      type="textarea"
    />
  </div>
  <div id="submit-button">
    <el-button v-on:click="submitForm()" type="success"
      >Publicar Votación (ya no se podrá modificar)</el-button
    >
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  async setup() {
    const privacy = ref("false");
    const route = useRoute();
    const options = ref([]);
    const authorizedUsers = ref("");
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_BACK_URL}/api/v1/voting/options?id=${route.query.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken()}`,
          },
        }
      );
      options.value = response.data.options;
    } catch (error) {
      if (error.response.status == 401) {
        localStorage.setItem("accessToken", "null");
        window.location.replace("/");
      }
    }

    async function submitForm() {
      const payload = {
        id: route.query.id,
        privacy: privacy.value,
        authorized_users: `["${authorizedUsers.value
          .split(",")
          .map((u) => u.trim())
          .join('", "')}"]`,
      };
      try {
        await axios.post(
          `${process.env.VUE_APP_BACK_URL}/api/v1/voting/publish`,
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken()}`,
            },
          }
        );
        window.location.replace("/");
      } catch (error) {
        // if (error.response.status == 401) {
        //   localStorage.setItem("accessToken", "null");
        //   window.location.replace("/");
        // }
      }
    }
    return {
      privacy,
      authorizedUsers,
      submitForm,
      route,
      options,
    };
  },
};
function accessToken() {
  return localStorage.getItem("accessToken");
}
</script>

<style scoped>
.bold {
  font-weight: bold;
  margin-left: 1vw;
}

.vote-module {
  margin: 3vw;
  display: flex;
  font-size: 15px;
}

#options-list {
  list-style: none;
  display: flex;
  width: fit-content;
}

.option-item {
  border: 1px solid black;
  padding: 15px;
  font-size: large;
  background-color: #2cb1bf;
  margin-bottom: 5px;
  margin-left: 25px;
}

#vote-module-last {
  margin-top: 3vw;
  margin-right: 3vw;
  margin-left: 3vw;
  display: flex;
  font-size: 15px;
}

#voting-elements {
  list-style: none;
  width: 50%;
}

#publish-button {
  display: flex;
  justify-content: center;
  margin: 2vw;
}

#authorized-list-container {
  margin: 1vw;
}

#submit-button {
  display: flex;
  justify-content: center;
}
</style>
