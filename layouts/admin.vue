<template>
  <el-container>
    <el-aside
      :width="navWidth"
      class="bg-primary vh-100 transition-all admin-nav"
    >
      <AdminNav :collapse="isCollapse" />
    </el-aside>
    <el-container class="transition-all">
      <el-header
        class="d-flex align-items-center justify-content-between bg-white shadow-sm z-10"
      >
        <div class="col-3 d-flex align-items-center">
          <div class="col-1 p-0 m-0 toggler-btn">
            <i
              @click="toggle"
              class="el-icon-s-unfold transition-all"
              :class="{ flip: !isCollapse }"
            ></i>
          </div>
        </div>
        <div class="col-sm d-flex align-items-center">
          <div class="col-sm text-right">
            <el-tooltip
              class="item"
              effect="dark"
              content="Ver Sitio"
              placement="bottom"
            >
              <nuxt-link to="/">
                <el-badge hidden class="item" type="warning">
                  <el-button
                    to="/"
                    type="primary"
                    plain
                    icon="el-icon-monitor"
                    class="mx-1 icon-lg"
                    size="small"
                    circle
                  ></el-button>
                </el-badge>
              </nuxt-link>
            </el-tooltip>
            <SimpolNotify />
          </div>

          <el-dropdown>
            <a href="#" class="sc-link">
              <div class="block d-flex align-center">
                <div class="block">
                  <el-avatar :size="40" :src="circleUrl"></el-avatar>
                </div>
                <span v-if="loggedIn" class="text-bold ml-2"> Admin </span>
              </div>
            </a>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-user"> Perfil</el-dropdown-item>

              <span @click="logout">
                <el-dropdown-item icon="el-icon-back" divided>
                  Salir
                </el-dropdown-item>
              </span>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="bg-pale wh-fit y-scroll">
        <Nuxt />
      </el-main>

      <div class="admin-footer">
        <p>Developed with 💕 by Mr.Eagle</p>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import SimpolCart from "../components/SimpolCart.vue";
export default {
  // middleware: "authUser",
  data() {
    return {
      isCollapse: false,
      navWidth: "200px",
      avatar: 50,
      circleUrl: "https://www.flaticon.com/svg/static/icons/svg/547/547413.svg",
      loggedIn: false,
    };
  },
  mounted() {
    // this.$auth.$storage.syncUniversal("token");
    this.$auth.$storage.syncUniversal("authorized");
    this.$auth.$storage.syncUniversal("user");

    if (this.$auth.$storage.syncUniversal("authorized")) {
      this.loggedIn = true;
    } else {
      this.$router.push("/auth/login");
    }

    if (this.$auth.$storage.syncUniversal("user").role !== "admin") {
      this.$router.push({ name: "index" });
    }
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        this.navWidth = "64px";
      } else {
        this.navWidth = "200px";
      }
    },
    async logout() {
      try {
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
};
</script>

<style lang="scss">
.w-100 {
  width: 100%;
}
.wh-fit {
  height: 85vh;
  width: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  max-height: 100vh;
}
.fixed {
  position: fixed;
}

.y-scroll {
  overflow: hidden;
  overflow-y: scroll;
}
.transition-all {
  transition: all ease-in-out 0.3s;
}
.border-none {
  border: none;
}
.toggler-btn {
  // transition: all ease-in-out 01s;
  // padding: 1rem;
  // padding-right: 1.2rem;
  // text-align: right;
  transform: rotateY(0);
  i {
    transition: all ease-in-out 0.6s;
    cursor: pointer;
    font-size: 1.5rem;
  }
  &:hover {
    color: #1f88ff;
  }
}
.flip {
  // background-color: red;
  transform: rotateY(180deg);
}
.z-10 {
  z-index: 10;
}
.admin-logo-container {
  width: 100%;
  img {
    width: 100%;
  }
}
.admin-footer {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #2e343d;
  border-top-left-radius: 1rem;
  color: white;
  font-weight: bold;
  // width: 30%;
  text-align: right;
  padding: 5px 1rem;
}
</style>


