<template>
  <!-- <el-button type="text" @click="open">Click to open the Message Box</el-button> -->
  <el-button plain size="mini" class="button" @click="open"
    ><i class="el-icon-view icon-lg"></i
  ></el-button>
</template>

<script>
export default {
  props: ["productData"],
  data() {
    return {
      data: [],
    };
  },
  methods: {
    open() {
      const h = this.$createElement;
      this.$msgbox({
        title: this.data.name,
        message: h("div", null, [
          h(
            "span",
            { style: "font-family: $quicksand; font-weight: bold" },
            this.productData.name
          ),
          h("div", {
            style:
              "width: 300px; background: url('" + this.productData.img + "')",
          }),
          // h("span", null, this.data),
        ]),
        showCancelButton: true,
        confirmButtonText: "Añadir a la bolsa",
        cancelButtonText: "Cerrar",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Añadiendo...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "success",
          message: "Se ha añadido a la bolsa",
        });
      });
    },
  },
  mounted() {
    this.data = this.productData;
  },
};
</script>
