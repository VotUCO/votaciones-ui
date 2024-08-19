<template>
  <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    id="register-votation-form"
    size="large"
    status-icon
  >
    <el-form-item label="Nombre" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Ganadores" prop="winners">
      <el-input v-model="ruleForm.winners" />
    </el-form-item>
    <el-form-item label="Sistema de Votación" prop="votingSystem">
      <el-select v-model="ruleForm.votingSystem">
        <el-option label="Scoring" value="scoring" />
        <el-option label="Schuzle" value="schuzle" />
        <el-option label="Mayoritario" value="mayoritario" />
      </el-select>
    </el-form-item>
    <el-form-item
      v-for="(option, index) in ruleForm.options"
      :key="index"
      :label="'Opción ' + (index + 1)"
      :prop="ruleForm.options[index]"
    >
      <el-input v-model="ruleForm.options[index]" @change="printChanges()" />
    </el-form-item>
    <div id="options-buttons">
      <el-button type="info" @click.prevent="addOption()"
        >Añadir Opción</el-button
      >
      <el-button @click.prevent="removeOption()"> Borrar </el-button>
    </div>
    <el-form-item label="Fecha de Inicio" required>
      <el-form-item prop="initDate">
        <el-date-picker v-model="ruleForm.initDate" type="datetime" />
      </el-form-item>
    </el-form-item>
    <el-form-item label="Fecha de Fin" required>
      <el-form-item prop="finalDate">
        <el-date-picker v-model="ruleForm.finalDate" type="datetime" />
      </el-form-item>
    </el-form-item>
    <div id="create-votation-button">
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Modificar
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import { reactive, ref } from "vue";
import "../assets/css/mains.css";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "ModifyVotingForm",
  async setup() {
    // eslint-disable-next-line
    const route = useRoute();
    const ruleFormRef = ref();
    let voting = null;
    let options = null;
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_BACK_URL}/api/v1/voting/id?id=${route.query.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken()}`,
            "Content-Type": "application/json",
          },
        }
      );
      const options_response = await axios.get(
        `${process.env.VUE_APP_BACK_URL}/api/v1/voting/options?id=${route.query.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken()}`,
            "Content-Type": "application/json",
          },
        }
      );
      voting = response.data;
      options = options_response.data.options;
    } catch (error) {
      console.log(error);
    }

    const ruleForm = reactive({
      name: voting.name,
      winners: voting.winners,
      votingSystem: voting.voting_system,
      options: options,
      initDate: new Date(voting.start_date),
      finalDate: new Date(voting.end_date),
    });
    const rules = reactive({
      name: [
        {
          required: true,
          message: "Por favor, introduzca el nombre",
          trigger: "blur",
        },
        {
          min: 5,
          max: 800,
          message: "La longitud debe ser mayor",
          trigger: "blur",
        },
      ],
      winners: [
        {
          required: true,
          message: "Por favor, introduzca el número de ganadores",
          trigger: "change",
        },
      ],
      votingSystem: [
        {
          required: true,
          message: "Por favor, seleccione el sistema de votación",
          trigger: "change",
        },
      ],
      // options: [
      //   {
      //     type: "array",
      //     required: true,
      //     message: "Por favor, introduzca las opciones",
      //     trigger: "change",
      //   },
      // ],
      initDate: [
        {
          type: "date",
          required: true,
          message: "Por favor, seleccione una fecha de inicio",
          trigger: "change",
        },
      ],
      finalDate: [
        {
          type: "date",
          required: true,
          message: "Por favor, seleccione una fecha de finalización",
          trigger: "change",
        },
      ],
    });
    function addOption() {
      ruleForm.options.push("");
    }
    function removeOption() {
      if (ruleForm.options.length > 2) {
        ruleForm.options.pop();
      } else {
        alert("La lista de opciones no puede tener menos de 2");
      }
    }
    function checkStartDate() {
      if (ruleForm.initDate < new Date()) {
        alert("La fecha de inicio no puede ser anterior a hoy");
        ruleForm.initDate = new Date();
      }
    }

    /* eslint-disable */
    async function submitForm(formEl) {
      const payload = {
        id: route.query.id,
        name: ruleForm.name,
        state: "draft",
        winners: ruleForm.winners,
        voting_system: ruleForm.votingSystem,
        privacy: "False",
        start_date: ruleForm.initDate.toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        end_date: ruleForm.finalDate.toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        options: JSON.stringify(ruleForm.options),
      };
      const response = await axios.put(
        `${process.env.VUE_APP_BACK_URL}/api/v1/voting/update`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken()}`,
          },
        }
      );
    }
    function printChanges() {
      console.log(ruleForm.options);
    }

    function accessToken() {
      return localStorage.getItem("accessToken");
    }
    return {
      ruleForm,
      ruleFormRef,
      rules,
      addOption,
      removeOption,
      checkStartDate,
      submitForm,
      printChanges,
    };
  },
};
</script>

<style>
#vote-button {
  background-color: #0f7fac;
  border-radius: 15px;
  padding: 10px;
}

#register-votation-form {
  width: 100%;
  justify-content: center;
}

#options-buttons {
  display: flex;
  margin: 20px;
  justify-content: center;
}

#create-votation-button {
  display: flex;
  justify-content: center;
}
</style>
