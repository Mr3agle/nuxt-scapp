<template>
  <el-dropdown :hide-on-click="false">
    <el-badge
      :value="itemsNumber"
      :hidden="itemsNumber < 1"
      class="item text-bold font-quicksand"
    >
      <el-button
        plain
        type="primary"
        icon="el-icon-bell"
        class="mx-1 icon-lg"
        size="small"
        circle
      ></el-button>
    </el-badge>
    <el-dropdown-menu
      v-if="notifyData.length"
      slot="dropdown"
      class="rounded cart-dropdown"
    >
      <div class="notify-items-pop">
        <el-dropdown-item
          v-for="(item, i) in notifyData"
          v-if="item.type === '1'"
          :key="i"
          class="rounded mx-2 p-2"
        >
          <div class="row align-items-center">
            <div class="col-3 text-center">
              <img :src="item.icon" alt="Simpol Notify" width="50px" />
            </div>
            <div class="col-sm">
              <h2 class="text-bold">{{ item.title }}</h2>
              <span class="text-bold">
                {{ item.from.name }}
              </span>
              <span class="text-italics"> ({{ item.from.mail }}) </span>

              hizo una orden de
              <span class="text-bold">
                $ {{ item.orderPrice.toFixed(2) }}
              </span>
              el
              <span class="text-bold"> {{ item.date }} </span>
              y pagó con
              <span class="text-bold"> {{ item.payment }} </span>.
            </div>
          </div>
        </el-dropdown-item>

        <el-dropdown-item
          v-for="(item, i) in notifyData"
          v-if="item.type === '2'"
          :key="i"
          class="rounded mx-2 p-2"
        >
          <div class="row align-items-center">
            <div class="col-3 text-center">
              <img :src="item.icon" alt="Simpol Notify" width="50px" />
            </div>
            <div class="col-sm">
              <h2 class="text-bold">{{ item.title }}</h2>
              <span class="text-bold">
                {{ item.from.name }}
              </span>
              <span class="text-italics"> ({{ item.from.mail }}) </span>

              se unió a Simpol Commerce! Envíale un
              <span class="text-bold">E-mail</span> para darle la
              <span class="text-bold">bienvenida.</span>
            </div>
          </div>
        </el-dropdown-item>
      </div>

      <el-dropdown-item divided class="cart-footer text-right">
        <el-button
          type="danger"
          plain
          class="font-quicksand text-bold"
          icon="el-icon-delete"
          :loading="deleteNotificationsLoading"
          @click="emptyNotifications"
          >Vaciar todo</el-button
        >
      </el-dropdown-item>
    </el-dropdown-menu>
    <el-dropdown-menu v-else>
      <div class="notify-items-pop-empty">
        <el-dropdown-item disabled class="text-center">
          <lottie-player
            src="https://assets2.lottiefiles.com/private_files/lf30_oaskv6es.json"
            background="transparent"
            speed="1"
            style="width: 100px; height: 100px"
            loop
            autoplay
          >
          </lottie-player>
        </el-dropdown-item>
        <el-dropdown-item disabled class="text-center text-bold">
          ¡Estás al tanto!
        </el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      notifyData: [
        {
          type: "1",
          title: "Nueva Orden",
          date: "22-05-2020",
          icon:
            "https://www.flaticon.com/svg/static/icons/svg/2331/2331747.svg",
          from: {
            name: "Adam",
            mail: "adam@mail.com",
          },
          orderPrice: 30.0,
          payment: "Tarjeta de Crédito",
          text: "hizo una orden de $30.00 y pagó con Tarjeta de crédito",
        },
        {
          type: "2",
          title: "Nuevo Cliente",
          date: "16-07-2020",
          icon:
            "https://www.flaticon.com/svg/static/icons/svg/2620/2620669.svg",
          from: {
            name: "Claudia",
            mail: "claudia@mail.com",
          },
          text: "Se unió a Simpol Commerce! envíale un email de bienvenida c:",
        },
      ],
      userCart: [],
      deleteNotificationsLoading: false,
    };
  },
  mounted() {
    this.$auth.$storage.syncUniversal("authorized");
    this.$auth.$storage.syncUniversal("user");
    if (this.isClient()) {
      this.fetchClientCart(this.$auth.user.id);
    }
    console.log("from cart is User: ", this.isClient());
    // console.log("from cart is User id: ", this.$auth.user.id);
  },
  computed: {
    toFixed(value) {
      return value.toFixed(2);
    },
    itemsNumber() {
      let totalItems = 0;
      this.notifyData.forEach((item) => {
        totalItems++;
      });
      return totalItems;
    },
  },
  methods: {
    fetchGuestCart() {},
    async fetchClientCart(id) {
      await this.$axios
        .$get(`/get-c-cart/${id}`)
        .then((result) => {
          // console.log(result.cart);
          this.userCart = result.cart;
          console.log("userCart", result.cart);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isClient() {
      return this.$auth.$storage.syncUniversal("authorized") ? true : false;
    },
    emptyNotifications() {
      this.deleteNotificationsLoading = true;
      setTimeout(() => {
        this.notifyData = [];
        this.deleteNotificationsLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.user-cart {
  margin-right: 1rem;
}
.el-badge__content.is-fixed {
  position: absolute;
  top: 5px;
  right: 15px;
  transform: translateY(-50%) translateX(100%);
}
.cart-product-img {
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 0.3rem;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
  }
}
.cart-product-info {
  list-style: none;
}
.cart-subtotal {
  // align-items: flex-end;
  &:hover {
    background-color: transparent !important;
    color: black;
  }
}
.cart-subtotal {
  text-align: right;
}
.cart-footer {
  // align-items: flex-end;
  &:hover {
    background-color: transparent !important;
  }
}
.notify-items-pop {
  max-height: 350px;
  max-width: 400px;
  overflow: scroll;
}
.notify-items-pop-empty {
  // max-height: 350px;
  overflow: scroll;
}
</style>
