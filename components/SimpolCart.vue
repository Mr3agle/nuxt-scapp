<template>
  <el-dropdown>
    <el-badge :value="1" class="item text-bold font-quicksand">
      <el-button
        icon="el-icon-shopping-bag-2 icon-lg"
        size="small"
        circle
      ></el-button>
    </el-badge>
    <el-dropdown-menu slot="dropdown" class="rounded cart-dropdown">
      <div class="cart-items-pop">
        <el-dropdown-item class="rounded mx-2 p-2">
          <el-row type="flex" align="middle">
            <el-col :span="8">
              <div class="cart-product-img">
                <img
                  src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80"
                  alt="Title"
                />
              </div>
            </el-col>
            <el-col>
              <ul class="cart-product-info">
                <li class="text-bold">Saco Mollie</li>
                <li class="text-italics">Blusa Mollie de alta calidad</li>
                <li class="text-bold text-right">$30.00</li>
              </ul>
            </el-col>
          </el-row>
        </el-dropdown-item>
      </div>
      <!-- <el-dropdown-item disabled
                      >Añade algo al carrito!</el-dropdown-item
                    > -->
      <el-dropdown-item divided class="cart-subtotal"
        ><div class="text-bold">Subtotal: $30.00</div></el-dropdown-item
      >
      <el-dropdown-item divided class="cart-footer text-right">
        <el-button class="font-quicksand text-bold" icon="el-icon-view" plain
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
  </el-dropdown>
</template>

<script>
export default {};
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
