<template>
  <el-dropdown>
    <el-badge
      :value="itemsNumber"
      :hidden="itemsNumber < 1"
      class="item text-bold font-quicksand"
    >
      <el-button
        icon="el-icon-shopping-bag-2 icon-lg"
        size="small"
        circle
      ></el-button>
    </el-badge>
    <el-dropdown-menu
      v-if="cartData.length"
      slot="dropdown"
      class="rounded cart-dropdown"
    >
      <div class="cart-items-pop">
        <el-dropdown-item
          v-for="(item, i) in cartData"
          :key="i"
          class="rounded mx-2 p-2"
        >
          <el-row type="flex" align="middle">
            <el-col :span="8">
              <el-badge
                :value="item.productQty"
                :hidden="item.productQty < 2"
                class="item text-bold font-quicksand"
                type="primary"
              >
                <div class="cart-product-img">
                  <!-- <img :src="item.productImage" alt="Title" /> -->
                  <el-avatar
                    shape="square"
                    :size="100"
                    fit="cover"
                    :src="item.productImage"
                  ></el-avatar>
                </div>
              </el-badge>
            </el-col>
            <el-col>
              <ul class="cart-product-info">
                <li class="text-bold">{{ item.productName }}</li>
                <li class="text-italics">{{ item.productShortDesc }}</li>
                <li class="text-bold text-right">${{ item.productPrice }}</li>
              </ul>
            </el-col>
          </el-row>
        </el-dropdown-item>
      </div>

      <el-dropdown-item divided class="cart-subtotal"
        ><div class="text-bold">Subtotal: $ {{ subtotalCount }}</div>
        <!-- <span> {{ $auth.user.name }} </span> -->
      </el-dropdown-item>
      <el-dropdown-item divided class="cart-footer text-right">
        <el-button
          @click="toCart"
          class="font-quicksand text-bold"
          icon="el-icon-view"
          plain
          >Ver carrito</el-button
        >
        <el-button
          type="primary"
          class="font-quicksand text-bold"
          icon="el-icon-bank-card"
          >Pagar</el-button
        >
      </el-dropdown-item>
    </el-dropdown-menu>
    <el-dropdown-menu v-else>
      <div class="cart-items-pop">
        <el-dropdown-item disabled class="text-center text-bold"
          >Añade algo al carrito</el-dropdown-item
        >
        <el-dropdown-item disabled>
          <lottie-player
            src="https://assets3.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json"
            background="transparent"
            speed="1"
            style="width: 200px; height: 200px"
            loop
            autoplay
          ></lottie-player>
        </el-dropdown-item>
        <el-dropdown-item class="text-center cart-footer" divided>
          <el-button
            type="primary"
            class="font-quicksand text-bold"
            icon="el-icon-shopping-cart-2"
            >Ir de compras
          </el-button>
        </el-dropdown-item>
      </div>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data() {
    return {
      cartData: [
        {
          productQty: 2,
          productName: "Blusa Mollie",
          productShortDesc: "Blusa Mollie de alta calidad",
          productPrice: 30.0,
          productImage:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
        },
        {
          productQty: 4,
          productName: "Short Primavera",
          productShortDesc: "Short de alta calidad",
          productPrice: 10.0,
          productImage:
            "https://images.unsplash.com/photo-1496360938681-9a918bfabc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
        },
        {
          productQty: 1,
          productName: "iPhone 11 Pro",
          productShortDesc: "iPhone 11 Pro nuevo, desbloqueado totalmente.",
          productPrice: 700.0,
          productImage:
            "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      userCart: [],
    };
  },
  mounted() {
    this.$auth.$storage.syncUniversal("authorized");
    this.$auth.$storage.syncUniversal("user");
    if (this.isClient()) {
      this.fetchClientCart(this.$auth.user.id);
    }
    // console.log("from cart is User: ", this.isClient());
    // console.log("from cart is User id: ", this.$auth.user.id);
  },
  computed: {
    subtotalCount() {
      let sum = 0;
      this.cartData.forEach((element) => {
        sum +=
          parseFloat(element.productPrice) * parseFloat(element.productQty);
      });
      return sum.toFixed(2);
    },
    itemsNumber() {
      let totalItems = 0;
      this.cartData.forEach((item) => {
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
      // const isClient =
      return this.$auth.$storage.syncUniversal("authorized") ? true : false;
    },
    toCart() {
      this.$router.push({ name: "cart" });
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
.cart-items-pop {
  max-height: 350px;
  overflow: scroll;
}
</style>
