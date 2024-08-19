<template>
  <div class="form-container">
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      size="default"
      status-icon
    >
      <el-form-item label="Id de la Votación" prop="token">
        <el-input v-model="ruleForm.voting_id" style="width: 25vw" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Buscar
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const ruleFormRef = ref();
const ruleForm = reactive({
  vote_token: "",
});

const rules = reactive({
  token: [
    {
      required: true,
      message: "Por favor, introduzca el id de la votación",
      trigger: "blur",
    },
    { min: 7, max: 70, message: "La longitud debe ser mayor", trigger: "blur" },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
}
</style>
