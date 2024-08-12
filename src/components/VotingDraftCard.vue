<template>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span
          ><h1>{{ name }}</h1></span
        >
      </div>
    </template>
    <p>Ganadores: {{ winners }}</p>
    <p>Sistema de votación: {{ votingSystem }}</p>
    <template #footer
      ><el-button
        type="success"
        class="card-voting-button"
        tag="a"
        :href="`/publish?id=${identifier}&name=${name}&winners=${winners}&votingSystem=${votingSystem}`"
        >Publicar</el-button
      ><el-button
        type="warning"
        tag="a"
        :href="`/modify?id=${identifier}`"
        class="card-voting-button"
        >Modificar</el-button
      >
      <el-popconfirm
        confirm-button-text="Yes"
        cancel-button-text="No"
        :icon="InfoFilled"
        icon-color="#626AEF"
        title="¿Quiere eliminar la votación?"
        @confirm="confirmEvent"
      >
        <template #reference>
          <el-button type="danger" tag="a">Eliminar</el-button>
        </template>
      </el-popconfirm>
    </template>
  </el-card>
</template>

<script>
import "../assets/css/mains.css";
import "../assets/css/header.css";
import "../assets/css/votes.css";
import axios from "axios";
export default {
  name: "VotingDraftCard",
  props: {
    identifier: String,
    name: String,
    winners: String,
    votingSystem: String,
  },
  setup(props) {
    async function confirmEvent() {
      try {
        await axios.delete(
          `${process.env.VUE_APP_BACK_URL}/api/v1/voting/delete?id=${props.identifier}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken()}`,
              "Content-Type": "application/json",
            },
          }
        );
        window.location.reload();
      } catch (error) {
        if (error.response) {
          if (error.response.status == 401) {
            localStorage.setItem("accessToken", "null");
          }
        }
      }
    }
    function accessToken() {
      return localStorage.getItem("accessToken");
    }
    return {
      confirmEvent,
    };
  },
};
</script>

<style scoped>
#card {
  text-align: center;
  border: 1px solid black;
}

h1 {
  font-size: calc(0.75em + 1vmin);
  font-weight: bold;
}
</style>
