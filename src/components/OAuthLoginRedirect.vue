<template>
  <div></div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "OAuthLoginRedirect",
  setup() {
    const route = useRoute();
    localStorage.clear();
    localStorage.setItem("refreshToken", route.query.refresh_token);
    localStorage.setItem("accessToken", route.query.access_token);
    localStorage.setItem("rol", route.query.rol);
    localStorage.setItem("name", route.query.name);
    localStorage.setItem("logged", true);
    window.location.replace("/");
  },
};
</script>
