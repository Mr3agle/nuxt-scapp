<template>
  <el-carousel indicator-position="outside" height="500px">
    <el-carousel-item
      v-for="(item, i) in carouselData"
      :key="i"
      class="rounded"
    >
      <img :src="item.image" :alt="item.title" fit="cover" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      carouselData: [
        {
          title: "1",
          image:
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        },
        {
          title: "2",
          image:
            "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80",
        },
        {
          title: "3",
          image:
            "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.el-carousel__item {
  img {
    width: 100%;
  }
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
