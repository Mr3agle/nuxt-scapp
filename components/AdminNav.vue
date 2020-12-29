<template>
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo vh-100 border-none text-bold"
    :collapse="collapse"
    background-color="#2e343d"
    text-color="#fff"
    active-text-color="#4d94ff"
  >
    <div class="row flex-column p-2">
      <div class="col-sm">
        <div class="admin-logo-container">
          <img
            class="mt-2"
            v-if="collapse"
            src="@/assets/images/logo/SC-s-white.svg"
            alt="SC Logo"
          />
          <img
            v-else="!collapse"
            src="@/assets/images/logo/SC-white.svg"
            alt="SC Logo"
          />
        </div>
      </div>
    </div>

    <el-menu-item
      v-for="(item, i) in navItems"
      :key="i"
      :index="i.toString()"
      @click="to(item.path)"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.title }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: ["collapse"],
  data() {
    return {
      navItems: [
        {
          title: "Dashboard",
          path: "/admin",
          icon: "el-icon-menu",
        },
        {
          title: "Productos",
          path: "/admin/products",
          icon: "el-icon-s-shop",
        },
        {
          title: "Carrusel",
          path: "/admin/carousel",
          icon: "el-icon-picture",
        },
        {
          title: "Categorías",
          path: "/admin/categories",
          icon: "el-icon-s-management",
        },
        {
          title: "Órdenes",
          path: "/admin/orders",
          icon: "el-icon-s-claim",
        },
        {
          title: "Comentarios",
          path: "/admin/comments",
          icon: "el-icon-s-comment",
        },
        {
          title: "Usuarios",
          path: "/admin/users",
          icon: "el-icon-s-custom",
        },
        {
          title: "Cupones",
          path: "/admin/coupons",
          icon: "el-icon-s-ticket",
        },
        {
          title: "Métodos de Pago",
          path: "/admin/payment",
          icon: "el-icon-bank-card",
        },
      ],
    };
  },
  methods: {
    to(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
