<template>
  <div class="container">
    <el-row :gutter="25" type="flex" justify="space-between">
      <el-col
        :span="6"
        v-for="(product, i) in featuredProducts"
        :key="i"
        justify="center"
      >
        <SimpolProductCard
          :rating="product.value"
          :colors="colors"
          :name="product.name"
          :price="product.price"
          :specialPrice="product.specialPrice"
          :img="product.img"
        />
      </el-col>
    </el-row>
    <!-- <div class="featured-products">
      <div class="" v-for="(product, i) in featuredProducts" :key="i">
        <SimpolProductCard
          :rating="product.value"
          :colors="colors"
          :name="product.name"
          :price="product.price"
          :specialPrice="product.specialPrice"
          :img="product.img"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      featuredProducts: [
        {
          value: 4.5,
          name: "Saco Mollie",
          price: 30.0,
          specialPrice: 25.0,
          img:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
        },
        {
          value: 3.5,
          name: "Blusa Flower",
          price: 20.0,
          specialPrice: 10,
          img:
            "https://images.pexels.com/photos/5477860/pexels-photo-5477860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          value: 4.0,
          name: "Sombrero de paja Toquilla",
          price: 20.0,
          img:
            "https://images.pexels.com/photos/5531088/pexels-photo-5531088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          value: 4.7,
          name: "iPhone 11 Pro",
          price: 700.0,
          specialPrice: 630,
          img:
            "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
      colors: ["#99A9BF", "#FFB700", "#FFB700"],
    };
  },
  mounted() {
    // console.log("Api URL:" + process.env.apiUrl);
  },
};
</script>

<style lang="scss">
.container {
  margin: auto;
  width: 80%;
  // background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
