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
            <img src="@/assets/images/logo/SC-logo.svg" alt="Simpol Commerce" />
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
              <!-- <el-button
                type="primary"
                @click="submitForm('loginData')"
                icon="el-icon-lock"
                :loading="loading"
                >Ingresar</el-button
              > -->
              <el-button
                type="primary"
                @click="userLogin()"
                icon="el-icon-lock"
                :loading="loading"
                >Ingresar</el-button
              >
              <el-button @click="resetForm('loginData')" icon="el-icon-delete"
                >Borrar</el-button
              >
            </el-form-item>
          </el-form>
          <div>
            ¿Aún no tienes una cuenta?
            <nuxt-link to="/auth/register">
              <el-button type="text"> regístrate aquí. </el-button>
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
    title: "Login Simpol Commerce",
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
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Ingresa un nombre de usuario o email"));
        // } else if (this.errors.username || this.errors.username === null) {
        //   callback(new Error("¿Seguro que ese es tu usuario?"));
        // } else if (this.errors.email || this.errors.email === null) {
        //   callback(new Error("Oft, no pudimos encontrar ese email"));
      } else {
        callback();
      }
    };
    return {
      loading: false,
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
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       this.loading = true;
    //       this.$notify.success({
    //         title: "Gracias",
    //         message: "Estamos validando tus datos",
    //       });
    //       setTimeout(() => {
    //         this.login();
    //       }, 1000);
    //     } else {
    //       this.$notify.error({
    //         title: "Error",
    //         message: "Revise sus datos e intente de nuevo.",
    //       });
    //       setTimeout(() => {
    //         this.login();
    //       }, 1000);
    //       this.loading = false;
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // ...mapActions("auth", ["loginRequest"]),
    async userLogin() {
      this.loading = true;
      const credentials = {
        username: this.loginData.user,
        password: this.loginData.pass,
      };

      try {
        this.loading = true;

        let response = await this.$auth.loginWith("local", {
          data: credentials,
        });

        this.loading = false;

        // this.$auth.$storage.setUniversal(key, val, isJson)
        // this.$auth.$storage.setUniversal("token", response.data.token);
        this.$auth.$storage.setUniversal("token", response.data.token, false);
        this.$auth.$storage.setUniversal("authorized", true, false);
        this.$auth.$storage.setUniversal("user", response.data.user, true);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async login() {
      // this.$store
      //   .dispatch("user/loginRequest", {
      //     username: this.loginData.user,
      //     password: this.loginData.pass,
      //   })
      //   .then((response) => {
      //     console.log("You are in as: ");
      //     console.log(response);
      //   })
      //   .catch((errors) => {
      //     console.log(errors);
      //   });
      const credentials = {
        username: this.loginData.user,
        password: this.loginData.pass,
      };
      console.log({ data: credentials });
      await this.$auth
        .loginWith("local", { data: credentials })
        .then(() => console.log("Logged In!"))
        .catch((err) => {
          // this.$toast.danger("There was a problem");
          console.log(err);
        });

      // this.loginRequest()
      //   .then((response) => {
      //     console.log("Ya estás dentro");
      //   })
      //   .catch((errors) => {
      //     console.log(errors);
      //   });
      // console.log(this.loginData);
      // this.$auth.loginWith("laravel.passport");
    },
  },
  // computed: {
  //   // ...mapGetters(["errors"]),
  //   ...mapState("auth", ["loggedIn", "user"]),
  // },
  // mounted() {
  //   // this.$store.commit("setErrors", {});
  // },
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
  background-color: $pale;
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
