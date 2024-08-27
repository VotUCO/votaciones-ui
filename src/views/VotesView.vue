<template>
  <div class="votes-view">
    <p>Renderizando algo de contenido</p>
    <PublicVotes />
    <PrivateVotes />
  </div>
</template>

<script>
// @ is an alias to /src
import PublicVotes from "@/components/PublicVotes.vue";
import PrivateVotes from "@/components/PrivateVotes.vue";
import "../assets/css/mains.css";
export default {
  name: "VotesView",
  components: {
    PublicVotes,
    PrivateVotes,
  },
};
</script>

<style></style>
