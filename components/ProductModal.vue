<template>
  <!-- <el-button type="text" @click="open">Click to open the Message Box</el-button> -->
  <el-dialog :visible.sync="openModal" width="30%" center>
    <el-row type="flex" align="middle" justify="center">
      <el-col>
        <div class="quick-view-img">
          <img :src="productData.img" :alt="productData.name" />
        </div>
      </el-col>
      <el-col>
        <h1>
          {{ productData.name }}
        </h1>
        <br />
        <p>{{ productData.price }}</p>
        <p>{{ productData.specialPrice }}</p>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="openModal = false">Ver Producto</el-button>
      <el-button type="primary" @click="openModal = false"
        >Añadir a la bolsa</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ["productData", "openModal"],
  data() {
    return {
      data: [],
      centerDialogVisible: false,
    };
  },
  methods: {
    // open() {
    //   const h = this.$createElement;
    //   this.$msgbox({
    //     title: this.data.name,
    //     message: h("div", null, [
    //       h(
    //         "span",
    //         { style: "font-family: $quicksand; font-weight: bold" },
    //         this.productData.name
    //       ),
    //       h("div", {
    //         style:
    //           "width: 300px; background: url('" + this.productData.img + "')",
    //       }),
    //       // h("span", null, this.data),
    //     ]),
    //     showCancelButton: true,
    //     confirmButtonText: "Añadir a la bolsa",
    //     cancelButtonText: "Cerrar",
    //     beforeClose: (action, instance, done) => {
    //       if (action === "confirm") {
    //         instance.confirmButtonLoading = true;
    //         instance.confirmButtonText = "Añadiendo...";
    //         setTimeout(() => {
    //           done();
    //           setTimeout(() => {
    //             instance.confirmButtonLoading = false;
    //           }, 300);
    //         }, 3000);
    //       } else {
    //         done();
    //       }
    //     },
    //   }).then((action) => {
    //     this.$message({
    //       type: "success",
    //       message: "Se ha añadido a la bolsa",
    //     });
    //   });
    // },
  },
  mounted() {
    this.data = this.productData;
    console.log(this.data);
  },
};
</script>
<style lang="scss">
.quick-view-img {
  img {
    width: 30%;
  }
}
</style>
