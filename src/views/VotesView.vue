<template>
  <div class="votes-view">
    <PublicVotes />
    <PrivateVotes />
  </div>
</template>

<script>
// @ is an alias to /src
import PublicVotes from "@/components/PublicVotes.vue";
import PrivateVotes from "@/components/PrivateVotes.vue";
export default {
  name: "VotesView",
  components: {
    PublicVotes,
    PrivateVotes,
  },
};
</script>

<style></style>
