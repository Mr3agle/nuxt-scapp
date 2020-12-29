<template>
  <div class="client-auth-body">
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
          <div class="logo-client-auth">
            <img src="@/assets/images/logo/SC-blue.svg" alt="Simpol Commerce" />
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <!-- <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_mtXSgD.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
          ></lottie-player> -->
          <lottie-player
            src="https://assets4.lottiefiles.com/datafiles/XRVoUu3IX4sGWtiC3MPpFnJvZNq7lVWDCa8LSqgS/profile.json"
            background="transparent"
            speed="1"
            style="width: 300px; height: 300px"
            loop
            autoplay
            class="mx-auto"
          ></lottie-player>
        </el-col>
        <el-col :span="12" class="p-2">
          <el-form
            @keydown.enter="login()"
            :model="loginData"
            status-icon
            :rules="rules"
            ref="loginData"
            label-width="120px"
            label-position="top"
          >
            <el-form-item label="Usuario / Email" prop="user">
              <el-input v-model="loginData.user"></el-input>
            </el-form-item>
            <el-form-item label="Contraseña" prop="pass">
              <el-input
                type="password"
                v-model="loginData.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item style="margin-top: 2rem">
              <el-button
                type="primary"
                @click="submitForm('loginData')"
                icon="el-icon-lock"
                :loading="loading"
                >Ingresar</el-button
              >
              <!-- <el-button @click="resetForm('loginData')" icon="el-icon-delete"
                >Borrar</el-button
              > -->
            </el-form-item>
          </el-form>
          <div>
            ¿Aún no tienes una cuenta?
            <nuxt-link to="/auth/register">
              <el-button type="text"> regístrate aquí. </el-button>
            </nuxt-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
  head: {
    title: "Login Simpol Commerce",
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Ingresa tu contraseña"));
      } else if (this.errors) {
        callback(new Error("Asegúrate de que tu contraseña es correcta"));
      } else {
        callback();
      }
    };
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Ingresa un nombre de usuario o email"));
      } else if (this.errors) {
        callback(new Error("¿Seguro que ese es tu usuario?"));
      } else if (this.errors) {
        callback(new Error("Oft, no pudimos encontrar esa dirección"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      errors: null,
      loginData: {
        user: "",
        pass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: validateUser, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.loading = true;

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.userLogin()
            .then((result) => {
              this.$notify.success({
                title: `Hola, ${this.$auth.user.name}`,
                message: this.randomGreeting(this.$auth.user.gender),
              });
              this.loading = false;

              this.$router.push("/");
            })
            .catch((err) => {
              this.$notify.error({
                title: "!Oops!",
                message: "No pudimos encontrar esta cuenta",
              });
              this.loading = false;
            });
        } else {
          setTimeout(() => {
            this.$notify.error({
              title: "Oh-oh",
              message: "Revisa tus datos e intenta de nuevo.",
            });
            this.loading = false;
          }, 1000);

          // console.log(this.errors);
          return false;
        }
      });
    },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
    async userLogin() {
      const credentials = {
        username: this.loginData.user,
        password: this.loginData.pass,
      };

      await this.$auth
        .loginWith("local", {
          data: credentials,
        })
        .then((response) => {
          // this.$auth.$storage.setUniversal("token", response.data.token, false);
          this.$auth.$storage.setUniversal("authorized", true, false);
          this.$auth.$storage.setUniversal("user", response.data.user, true);

          this.loading = false;
        })
        .catch((err) => {
          this.errors = response.err;
          // console.log(err);
        });
    },
    randomGreeting(gender) {
      let welcome;
      let welcome2;
      if (gender == "male" || gender == "other") {
        welcome = "Bienvenido ";
        welcome2 = "Listo ";
      } else {
        welcome = "Bienvenida ";
        welcome2 = "Lista ";
      }

      const greetings = [
        "Nos alegra verte por aquí",
        "Qué bueno que estás de vuelta",
        welcome + "de nuevo",
        welcome2 + "para comprar?",
      ];
      const rand = Math.floor(Math.random() * greetings.length);

      return greetings[rand];
    },
  },
};
</script>

<style lang="scss">
.client-auth-body {
  // background-color: green;
  width: 50%;
  padding: 30px;
  // height: 2000px;
}
.logo-client-auth {
  // background-color: red;
  text-align: center;
  margin: auto;
  width: 50%;
  margin-bottom: 1.5rem;
  img {
    width: 80%;
  }
}
.auth-form {
  background-color: $white;
  padding: 3rem 1rem 3rem 1rem;
  border: solid 1px darken($pale, 5);
  box-shadow: 0 25px 35px darken($pale, 5);
}
.go-back {
  color: $black;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  i {
    transition: all ease-in-out 0.3s;
  }
  &:hover {
    color: $primary;
    i {
      transform: translateX(-5px);
      color: $primary;
      // transition: all ease-in-out 0.3s;
    }
  }
}
</style>
