<template>
  <el-container>
    <el-alert
      v-show="!verified"
      title="Hey!"
      type="info"
      description="Debes verificar tu dirección de correo"
      show-icon
      :closable="false"
      center
    >
    </el-alert>
    <el-header class="client-nav shadow-sm rounded-b">
      <el-row type="flex" align="middle">
        <el-col :span="6">
          <div class="logo-container">
            <nuxt-link to="/">
              <img
                src="@/assets/images/logo/SC-logo.svg"
                alt="Simpol Commerce Logo"
              />
            </nuxt-link>
          </div>
        </el-col>
        <el-col>
          <el-row type="flex">
            <el-col align="end">
              <div class="nav-links">
                <nuxt-link to="#" class="client-nav-item">Acerca de</nuxt-link>
                <nuxt-link to="#" class="client-nav-item">Productos</nuxt-link>
                <nuxt-link to="#" class="client-nav-item">Ofertas</nuxt-link>
                <SimpolCart />
              </div>
            </el-col>
            <el-col :span="1"></el-col>
          </el-row>
        </el-col>

        <!-- <el-col :span="6"> -->
        <el-col v-if="!loggedIn" :span="6">
          <nuxt-link to="/auth/register">
            <el-button type="primary" class="font-quicksand text-bold"
              >Registro</el-button
            >
          </nuxt-link>
          <nuxt-link to="/auth/login">
            <el-button plain class="font-quicksand text-bold">
              Log In
            </el-button>
          </nuxt-link>
        </el-col>

        <el-col v-if="loggedIn" :span="4">
          <el-dropdown>
            <a href="#" class="sc-link">
              <div class="block d-flex align-center">
                <el-avatar :size="40" :src="circleUrl"></el-avatar>
                <span class="text-bold ml-2">Hola, {{ $auth.user.name }} </span>
              </div>
            </a>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user"> Perfil</el-dropdown-item>
              <el-dropdown-item icon="el-icon-document-copy">
                Órdenes</el-dropdown-item
              >
              <span @click="logout">
                <el-dropdown-item icon="el-icon-back" divided>
                  Salir
                </el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="content">
      <Nuxt />
    </el-main>
    <el-footer class="sc-footer rounded-t">
      <div class="sc-social">
        <el-row>
          <el-col>
            <a href="#">
              <span class="icon"
                ><fa-icon
                  :icon="['fab', 'facebook-square']"
                  class="text-white" /></span
            ></a>
            <a href="#">
              <span class="icon"
                ><fa-icon
                  :icon="['fab', 'instagram-square']"
                  class="text-white" /></span
            ></a>
            <a href="#">
              <span class="icon"
                ><fa-icon
                  :icon="['fab', 'pinterest-square']"
                  class="text-white" /></span
            ></a>
          </el-col>
        </el-row>
      </div>
      <div class="sc-copyright text-bold">Developed by Mr.Eagle</div>
    </el-footer>
  </el-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // circleUrl:
      //   "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      circleUrl: "https://www.flaticon.com/svg/static/icons/svg/547/547420.svg",
      isAdmin: null,
      dashboard: null,
      loggedIn: false,
      verified: true,
    };
  },
  computed: {
    // ...mapGetters("auth", ["user"]),
  },
  mounted() {
    this.$auth.$storage.syncUniversal("token");
    this.$auth.$storage.syncUniversal("authorized");
    this.$auth.$storage.syncUniversal("user");

    if (this.$auth.$storage.getUniversal("authorized")) {
      this.loggedIn = true;
    }
    // if (this.$auth.user.email_verified_at != null) {
    //   this.verified = true;
    // } else {
    //   this.verified = false;
    // }
    // if (localStorage.getItem("authToken")) {
    //   this.userDataRequest();
    // }
    // console.log(this.$router.currentRoute.name);
  },
  methods: {
    // ...mapActions("auth", ["sendLogOutRequest", "userDataRequest"]),
    async logout() {
      try {
        this.loggedIn = false;

        await this.$auth.logout({
          data: {
            device_id: this.device_id,
          },
        });

        this.$axios.setHeader("Authorization", null);

        this.$auth.$storage.removeUniversal("authorized");
        this.$auth.$storage.removeUniversal("token");
        this.$auth.$storage.removeUniversal("user");
        this.$router.push({ name: "index" });
      } catch (error) {
        console.log(error);
      }
    },
  },
  updated() {
    // if (this.user !== null && this.user.role === "admin") {
    //   // console.log(this.user.role)
    //   this.isAdmin = true;
    // } else {
    //   // console.log('Not in or logged out')
    //   this.isAdmin = false;
    // }
    // // $route.matched.some(({ name }) => name === 'admin')
    // if (this.$route.path.includes("/admin")) {
    //   this.dashboard = true;
    // } else {
    //   this.dashboard = false;
    // }
    // console.log(this.$route.path.includes('admin'));
    // console.log(localStorage.getItem('authRole'))
  },
};
</script>

<style lang="scss">
.client-nav {
  margin: 0;
  padding: 0.7rem;
  width: 100%;
  height: auto !important;
}
.logo-container {
  width: 80%;
  margin: auto;
  img {
    width: 100%;
  }
}
.client-nav-item {
  padding: 0.5rem;
  // background-color: aqua;
  // background-color: white;
  font-weight: bold;
  text-decoration: none;
  color: $primary;
  transition: all ease-in-out 0.3s;
  border-bottom: solid 2px transparent;
  &:hover {
    color: black;
    border-bottom: solid 2px black;
  }
}
.sc-footer {
  background-color: $primary;
  color: white;
  text-align: center;
  height: auto !important;
  font-family: $questrial;
  padding: 0.7rem;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.sc-copyright {
  margin-top: 1rem;
}
</style>
