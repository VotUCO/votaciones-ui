<template>
  <div id="users-container">
    <h1>Listado de Usuarios</h1>
    <el-button type="primary" tag="a" :href="`/admin/createUser`"
      >Nuevo Usuario</el-button
    >
    <Suspense>
      <UserList />
    </Suspense>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";

export default {
  components: {
    UserList,
  },
};
</script>

<style scoped>
#users-container {
  margin: 25px;
}
</style>
