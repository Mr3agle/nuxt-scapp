<template>
  <div class="container">
    <SimpolCarousel />
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-content-start"
    >
      <div
        class="col-sm d-flex align-items-center justify-content-center my-2"
        v-for="(product, i) in featuredProducts"
        :key="i"
      >
        <SimpolProductCard
          :rating="product.value"
          :colors="colors"
          :name="product.name"
          :price="product.price"
          :specialPrice="product.specialPrice"
          :img="product.img"
          :desc="product.desc"
        />
      </div>
    </div>
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
      colors: ["#99A9BF", "#FFB700", "#FFB700"],
      featuredProducts: [
        {
          value: 4.5,
          name: "Saco Mollie",
          price: 30.0,
          specialPrice: 25.0,
          img:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
          desc: "Saco Mollie de alta Calidad",
        },
        {
          value: 3.5,
          name: "Blusa Flower",
          price: 20.0,
          specialPrice: 5,
          img:
            "https://images.pexels.com/photos/5477860/pexels-photo-5477860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          desc: "Blusa Flower de Lino Fino.",
        },
        {
          value: 4.0,
          name: "Sombrero de paja Toquilla",
          price: 20.0,
          img:
            "https://images.pexels.com/photos/5531088/pexels-photo-5531088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          desc: "Sombrero 100% Ecuatoriano, orgullosamente.",
        },
        {
          value: 4.7,
          name: "iPhone 11 Pro",
          price: 700.0,
          specialPrice: 630,
          img:
            "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          desc: "iPhone 11 Pro nuevo, desbloqueado totalmente.",
        },
        {
          value: 4.7,
          name: "Short Primavera",
          price: 10.0,
          // specialPrice: 7.30,
          img:
            "https://images.unsplash.com/photo-1496360938681-9a918bfabc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
          desc: "Short primaveral jean 100% ecuatoriano.",
        },
      ],
    };
  },
  mounted() {
    // console.log("Api URL:" + process.env.apiUrl);
  },
};
</script>

<style lang="scss">
// .container {
//   margin: auto;
//   width: 80%;
//   background-color: red;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
</style>
