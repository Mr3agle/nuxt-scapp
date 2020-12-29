<template>
  <div class="client-register-body">
    <div class="auth-form rounded">
      <el-row type="flex" justify="center">
        <el-col :span="21" class="mb-2 pr-2">
          <nuxt-link to="/" class="go-back">
            <i class="el-icon-back"></i> Regresar
          </nuxt-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="logo-client-auth-register">
            <img src="@/assets/images/logo/SC-blue.svg" alt="Simpol Commerce" />
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_gzl797gs.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </el-col>
        <el-col :span="12" class="p-2">
          <el-form
            @keydown.enter="register()"
            :model="registerData"
            status-icon
            :rules="rules"
            ref="registerData"
            label-width="120px"
            label-position="top"
          >
            <el-row type="flex" justify="center" :gutter="12">
              <el-col :span="12">
                <el-form-item label="Nombre" required>
                  <el-input v-model="registerData.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Apellido" required>
                  <el-input v-model="registerData.lastname"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center" :gutter="12">
              <el-col :span="9">
                <el-form-item
                  label="Nombre de usuario"
                  prop="username"
                  required
                >
                  <el-input v-model="registerData.username"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="16">
                <el-form-item label="E-mail" type="email" required>
                  <el-input v-model="registerData.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type="flex" justify="center" :gutter="12">
              <el-col :span="12">
                <el-form-item label="Contraseña" prop="password" required>
                  <el-input
                    type="password"
                    v-model="registerData.password"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item
                  required
                  label="Repita su contraseña"
                  prop="password_confirmation"
                >
                  <el-input
                    type="password"
                    v-model="registerData.password_confirmation"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row type="flex" justify="center" :gutter="12">
              <el-col :span="16">
                <el-form-item label="Cumpleaños" prop="birthday">
                  <el-date-picker
                    required
                    type="date"
                    v-model="registerData.birthday"
                    style="width: 100%"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item label="Género" prop="resource">
                  <el-radio-group v-model="registerData.gender">
                    <el-radio label="male">Hombre</el-radio>
                    <el-radio label="female">Mujer</el-radio>
                    <el-radio label="other">Otro</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item prop="suscribed">
              <el-switch v-model="registerData.suscribed"></el-switch>
              <span> Suscribirme al boletín de noticias.</span>
            </el-form-item>

            <el-form-item style="margin-top: 2rem">
              <!-- <el-button
                type="primary"
                @click="submitForm('registerData')"
                icon="el-icon-lock"
                :loading="loading"
                >Ingresar</el-button
              > -->
              <el-button
                type="primary"
                @click="register()"
                icon="el-icon-lock"
                :loading="loading"
                >Registrarse</el-button
              >
              <el-button
                @click="resetForm('registerData')"
                icon="el-icon-delete"
                >Vaciar</el-button
              >
            </el-form-item>
          </el-form>
          <div>
            ¿Ya tienes una cuenta?
            <nuxt-link to="/auth/login">
              <el-button type="text"> Ingresa aquí. </el-button>
            </nuxt-link>
          </div>
          <!-- {{ errors }} -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  layout: "auth",
  head: {
    title: "Registro Simpol Commerce",
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Ingresa tu contraseña"));
        // } else if (this.errors.password || this.errors.password === null) {
        //   callback(new Error("Asegúrate de que tu contraseña es correcta"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Ingresa tu contraseña"));
      } else if (value !== this.registerData.password) {
        callback(new Error("Las contraseñas no coinciden"));
      } else {
        callback();
      }
    };
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Ingresa un nombre de usuario o email"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      registerData: {
        username: "",
        email: "",
        name: "",
        lastname: "",
        password: "",
        password_confirmation: "",
        birthday: "",
        role: "user",
        gender: "other",
        suscribed: true,
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        password_confirmation: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: validateUserName, trigger: "blur" }],
        birthday: [
          {
            type: "date",
            required: true,
            message: "Seleccione una fecha",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    async register() {
      this.loading = true;

      const credentials = {
        username: this.registerData.username,
        password: this.registerData.password,
      };

      try {
        await this.$axios.$post("/register", this.registerData);

        let response = await this.$auth.loginWith("local", {
          data: credentials,
        });
        this.$auth.$storage.setUniversal("token", response.data.token, false);
        this.$auth.$storage.setUniversal("authorized", true, false);
        this.$auth.$storage.setUniversal("user", response.data.user, true);
        this.loading = false;
        this.$router.push({ name: "index" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.client-register-body {
  // background-color: green;
  width: 65%;
  padding: 30px;
  // height: 2000px;
}
.logo-client-auth-register {
  text-align: center;
  margin: auto;
  width: 40%;
  margin-bottom: 1.5rem;
  img {
    width: 80%;
  }
}
</style>
