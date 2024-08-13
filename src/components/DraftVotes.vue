<template>
  <div id="container">
    <div class="container-title">
      <h3>Votaciones en Borrador ({{ votaciones.length }})</h3>
    </div>
    <hr />
    <li v-for="votacion in votaciones" :key="votacion.id">
      <ul>
        <VotingDraftCard
          :identifier="votacion.id"
          :name="votacion.name"
          :winners="votacion.winners"
          :votingSystem="votacion.voting_system"
          id="card"
        />
      </ul>
    </li>
  </div>
</template>

<script>
import "../assets/css/mains.css";
import "../assets/css/header.css";
import "../assets/css/votes.css";
import axios from "axios";
import VotingDraftCard from "./VotingDraftCard.vue";

export default {
  name: "DraftVotes",
  async setup() {
    const number = 0;
    let votaciones = [];

    function accessToken() {
      return localStorage.getItem("accessToken");
    }

    try {
      const response = await axios.get(
        `${process.env.VUE_APP_BACK_URL}/api/v1/voting/draft`,
        {
          headers: {
            // eslint-disable-next-line no-undef
            Authorization: `Bearer ${accessToken()}`,
          },
        }
      );
      votaciones = response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status == 401) {
          localStorage.setItem("accessToken", null);
          window.location.reload();
        }
      }
    }
    return { number, votaciones };
  },
  components: { VotingDraftCard },
};
</script>

<style scoped>
h3 {
  font-size: xx-large;
  padding: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin: 3%;
}

#card {
  width: fit-content;
  height: fit-content;
}

.container-title {
  margin: 15px;
}

@media (max-width: 700px) {
  h3 {
    font-size: large;
  }

  li {
    display: inline-block;
    margin: 5%;
  }
}
</style>
