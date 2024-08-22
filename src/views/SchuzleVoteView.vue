<template>
  <p id="vote-title">{{ votingName() }}</p>
  <Suspense>
    <SchuzleVote />
  </Suspense>
</template>

<script>
import SchuzleVote from "@/components/SchuzleVote.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    SchuzleVote,
  },
  setup() {
    const route = useRoute();

    function votingName() {
      return route.query.name;
    }

    return {
      votingName,
    };
  },
};
</script>

<style scoped>
.scoring-vote-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

#vote-title {
  font-weight: bold;
  font-size: 3vw;
  margin: 6%;
  text-align: center;
}
</style>
