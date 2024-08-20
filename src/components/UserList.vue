<template>
  <el-table :data="filterTableData" style="width: 100vw; height: 100vw">
    <el-table-column label="Id" prop="id" />
    <el-table-column label="Nombre" prop="name" />
    <el-table-column label="Apellidos" prop="surname" />
    <el-table-column label="Correo Electrónico" prop="email" />
    <el-table-column label="Rol" prop="rol" />
    <el-table-column label="Género" prop="gender" />
    <el-table-column label="Fecha de Nacimiento" prop="birth_date" />
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { computed, ref } from "vue";
import axios from "axios";
export default {
  async setup() {
    const search = ref("");
    let filterTableData = ref([]);
    let response = [];
    try {
      response = await axios.get(
        `${process.env.VUE_APP_BACK_URL}/api/v1/user/all`,
        {
          headers: {
            Authorization: `Bearer ${accessToken()}`,
          },
        }
      );
    } catch (error) {
      // if (error.response) {
      //   if (error.response.status == 401) {
      //     localStorage.setItem("accessToken", "null");
      //     window.location.replace("/");
      //   }
      // }
    }
    filterTableData = computed(() =>
      response.data.filter(
        (data) =>
          !search.value ||
          data.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );
    const handleEdit = (index, row) => {
      console.log(index, row);
    };
    const handleDelete = async (index, row) => {
      await axios.delete(
        `${process.env.VUE_APP_BACK_URL}/api/v1/user/delete?id=${row.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken()}`,
          },
        }
      );
      window.location.reload();
    };

    function accessToken() {
      return localStorage.getItem("accessToken");
    }
    return {
      search,
      filterTableData,
      handleEdit,
      handleDelete,
    };
  },
};
</script>
