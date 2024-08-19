<template>
  <div class="vote-checker">
    <div class="aligned-div">
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        size="default"
        status-icon
      >
        <el-form-item label="Token de Votación" prop="token">
          <el-input v-model="ruleForm.vote_token" style="width: 25vw" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            Buscar
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="aligned-div-2">
      <p>Token: 990a3b94-de1c-4916-b61b-9908cb31b945</p>
      <p>Fecha del Voto: 24/08/2024 12:20:00</p>
      <p>
        Votación: Delegados Informática GG1
        (id=146bc64a-13d1-4193-9bdf-0a120347fd72)
      </p>
      <p>Usuario: i02essej@uco.es</p>
    </div>
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
      message: "Por favor, introduzca su token",
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
.vote-checker {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 5vw;
}

.aligned-div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px; /* Espacio entre los divs hijos */
}

.aligned-div-2 {
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px; /* Espacio entre los divs hijos */
}

.contenido {
  /* Puedes ajustar el ancho máximo según tus necesidades */
  max-width: 80%;
}

p {
  font-weight: bold;
}
</style>
