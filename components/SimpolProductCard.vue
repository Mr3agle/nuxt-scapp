<template>
  <div class="card-width">
    <a href="#" class="product-link">
      <div v-show="specialPrice" class="sale-badge">
        <span class="font-quicksand text-bold">
          <i class="el-icon-star-on"></i> Oferta</span
        >
      </div>
      <el-card
        shadow="hover"
        class="rounded card-width"
        :body-style="{ padding: '0px' }"
      >
        <div class="product-img rounded">
          <img :src="img" class="image" />
        </div>
        <div style="padding: 1rem; margin-top: 1rem" class="text-center">
          <el-rate
            :colors="colors"
            v-model="rating"
            disabled
            show-score
            text-color="#FFB700"
            score-template="{value}"
          >
          </el-rate>
          <div
            class="product-decription"
            style="margin-top: 1rem; margin-bottom: 1rem"
          >
            <span class="text-bold font-questrial">{{ name }}</span>
            <br />
            <div class="has-discount" v-if="specialPrice">
              <span
                class="font-questrial line-through text-gray"
                style="font-size: 0.7rem"
                >${{ getPrice(price) }}</span
              >
              <span class="font-questrial text-danger" style="font-size: 1.1rem"
                >${{ getPrice(specialPrice) }}</span
              >
            </div>
            <div class="normalPrice" v-else>
              <span class="font-questrial">${{ getPrice(price) }}</span>
            </div>
          </div>
          <div class="product-footer">
            <!-- <el-button plain size="mini" class="button"
              ><i class="el-icon-view icon-lg"></i
            ></el-button> -->
            <ProductModal :productData="productData" />
            <!-- {{ productData }} -->
            <el-button type="primary" size="mini" class="button"
              ><i class="el-icon-sell icon-lg"></i
            ></el-button>
          </div>
        </div>
      </el-card>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    colors: {
      type: Array,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    specialPrice: {
      type: Number,
    },
    img: {
      type: String,
    },
  },
  data() {
    return {
      value: this.rating,
      productData: {
        rating: this.rating,
        name: this.name,
        colors: this.colors,
        price: this.price,
        specialPrice: this.specialPrice,
        img: this.img,
      },
    };
  },
  methods: {
    getPrice(v) {
      return v.toFixed(2);
    },
  },
};
</script>

<style lang="scss">
.product-link {
  text-decoration: none;
  position: relative;
  .product-img {
    width: 90%;
    top: 0.7rem;
    height: 200px;
    display: block;
    overflow: hidden;
    position: relative;
    margin: auto;
    transition: all ease-in-out 0.3s;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 110%;
      display: block;
      transition: all ease-in-out 0.3s;
    }
  }
  &:hover {
    img {
      width: 130%;
    }
  }
}
.sale-badge {
  position: absolute;
  font-size: 0.8rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  width: 80px;
  background-color: $danger;
  border-radius: 0.2rem;
  z-index: 1;
  color: $white;
  font-weight: bold;
  left: 180px;
  top: 20px;
  box-shadow: 0 5px 12px -5px darken($danger, 15);
}
.card-width {
  width: 250px;
}
</style>
